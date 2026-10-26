# Nemesis lane register: where the mod touches the game and other mods

Every place Nemesis Spawn System reaches outside its own things: other mods' functions and data, other NPCs, the player, and files outside the save. The scripts' notes refer to the rows here by their number.

## The lane rule

1. **Ours to change:** what the mod creates (its squads, their members, the emission boss's horde and phantoms, its stash marker) and its own save data.
2. **The player:** only in the documented ways (the hunt's hits and damage rules, the ghosts' pushes and psy share, PDA lines, sounds and screen effects).
3. **Other mods:** only through their public functions (xlibs first; Anomaly's and the engine's calls for what xlibs does not cover), or through a hook listed here. Every change to another mod's data is put back exactly as it was.
4. **Everything else is read only.**
5. **Detect, never assume:** another mod is found while the game runs, and Nemesis does nothing for it when it is absent.

## A. Another mod's function: wrapped, or stood in for

| # | Where | Whose function | What Nemesis does | Why | Undo |
|---|---|---|---|---|---|
| A1 | `nemesis_damage` `pre_hit` / `settle_chain` | GAMMA ballistics' chain (grok_bo and what wraps it: AlifeTactics, 3DSS, momo_multihit_fix) | **nothing of it is unregistered or replaced.** Around it, for your hits on our hunters only: before it (the Pre tier) his armour is seeded and his health set to full; after it (the Post tier) the damage it dealt, times his protection, goes on his real health. That step runs before the body check, so a shot that took him to 0 inside the chain is still settled | another mod's behaviour changes only for our own hunters | none needed (nothing of theirs is touched) |
| A3 | `nemesis_damage` `listen_pba` | grok_bo's `PBA_ohc` and `PBA_odc` (Artefacts Reinvention's perks) | while one of your hits on our hunter is between Pre and Post: `PBA_ohc` is passed on unchanged, its amount noted (an overkill shot); `PBA_odc` ("an NPC died") is held, and run once only if he really dies. Every other NPC's calls go straight through | the overkill reading; no death perks for a hunter who lives | put back once no hit is armed, and only if no one replaced ours since |
| A4 | `nemesis_guard` | `safe_release_manager.release` | refuses to release a living hunt member or the hunt squad while a hunt runs; everything else passes through | the release guard: releasing a living NPC breaks the engine's bookkeeping | none |
| A5 | `nemesis_guard` | the global `get_object_story_id` (Anomaly `_g`) | while a hunt runs, a living hunt member with no story id reports "nemesis_hunter" | GAMMA's "No Exos in the South" cleanup skips story NPCs. Side effect, kept on purpose: anything that spares story NPCs spares our living hunters during a hunt (GAMMA's emission kill too) | none |
| A6 | `nemesis_fx` | `xr_corpse_detection.near_actor` | a body reserved for you reads "near the actor", so NPCs do not loot it. Through xlibs' `xevent.register_hook` when it can; when another mod holds that hook, or xlibs has no xevent, the current function is wrapped (theirs included); the log says which | Reserve your kills | none |
| A7 | `nemesis_compat` `hook_dfrc_skip` | the Dynamic Faction Relations Customizer's `dynamic_faction_relations_customizer.calculate_relation_change` (the faction consequences of a death, called from its online, offline, observed and delayed-report paths; it returns nothing they use) | a death whose victim or killer record has the Thunder Boss's section (`nemesis_thunder_boss`) is skipped; every other death goes to DFRC unchanged. Through xlibs' `xevent.register_hook` when it can, else a plain wrapper on top; installed at each load's first update, only when DFRC's script exists | the Thunder Boss is a Loner against the world: his death and his kills move no faction's relations (the owner, 26 October; the owner's OK for this hook) | none needed: only deaths with him in them are skipped |

## B. Another mod's or the engine's data, written

| # | Where | Whose data | What | Undo |
|---|---|---|---|---|
| B1 | `nemesis_damage` | grok_bo's `custom_bone_value`, `custom_bone_hf`, `custom_bone_ap` | the armour of our hunters' ids (yours, copied), and the bonus on regulars | taken out with `unseed_br` (hunt end, load) |
| B2 | `nemesis_emission` | `surge_manager_ignore_npc.ignore_npc` | the emission boss's own section, while he lives (he walks through the emission) | the exact old value put back (`end_immunity`) |
| B3 | `nemesis_compat` | `xr_wounded` state and saved values | our members only: never downed (`no_downed`) | none needed (our NPCs) |
| B4 | `nemesis_core` | `xr_combat_ignore_enabled` saved value | our members only: they always take you as an enemy | none needed (our NPCs) |
| B5 | `nemesis_boss` | your `toolkit_reward_count`, `toolkit_reward_last` | raised for one stash roll, so the boss stash is rare | both put back right after |
| B6 | `nemesis_boss` | `treasure_manager` | one real stash box filled and marked, through its own functions | none (it is your reward) |
| B7 | `nemesis_sound` (the silence before the warning) | the engine's runtime volume factors (`level.set_snd_volume`, `set_music_volume`) | lowered for about 5 s before the arrival warning | always put back as read, on every way out; another script that moves a factor meanwhile wins; a late put-back of our low value (the engine's explosion shock, the Brain Scorcher) is repaired once |
| B8 | Anomaly's `state_mgr.combat_action_ids` | one key added: the Thunder Boss's cast action id (188591), so the state manager leaves his hand-set body and movement alone while he casts, as Anomaly's own `xrs_facer` adds its ids; nothing else in the table is changed (round 166) |
| B9 | `nemesis_thunder_boss` (round 186, 191), through `nemesis_engine` | the engine's relation registry, in the Thunder Boss's own entry only: every community's goodwill toward him (`relation_registry.set_community_goodwill`, -5000, clamped to -3000 by the engine), his own total toward you and the stalkers within 100 m (`force_set_goodwill`, -3000, every 2 s; never a story NPC or a trader), and his community (`set_character_community`: Loner, `arena_enemy` at 20 % health or below and at a lethal hit; never on a dead NPC) | none needed: his own NPC's entry, gone with him; nobody else's goodwill or community changes (the owner's OK for the three calls, 26 October) |
| B10 | `configs/mod_system_nemesis_thunder.ltx`, `configs/misc/squad_descr/squad_descr_nemesis_thunder.ltx` (DLTX, round 186) | two new sections of our own: `nemesis_thunder_boss` (a copy of Anomaly's `sim_default_stalker_4`) and `nemesis_thunder_squad` (faction stalker); nothing of Anomaly's sections changed | none needed (new names only) |

## C. Another mod's public functions, called (no hook)

| # | Mod | Calls | What for |
|---|---|---|---|
| C1 | xlibs | `xsquad`, `xcombat`, `xlevel`, `xsmart`, `xpp`, `xsound`, `xevent` | squads, AI levers, the indoor read, smarts, screen effects, sounds, hooks |
| C2 | AlifePlus | `ap_api.register_owner`, `ap_api.release_squad` | AlifePlus leaves the hunt squad alone; told when it is released |
| C3 | the latest modded exes (through xlibs) | `set_visible_enemy_bias`, `set_hit_redirect`, `set_movement_hold` | our members only |
| C4 | Wearable Devices | `wd_attach.hide_screens` / `show_screens` | the screen flicker (calling only; nothing of it is copied or shipped) |
| C5 | G.A.M.M.A. Psy rework | `arszi_psy.change_psy_health` | the ghosts' psy share |
| C6 | Anomaly | `actor_status`'s `GetEvent("current_safe_cover")` (read only) | the emission cover for the shelter check |
| C7 | the modded exes | the `bullet_on_impact` callback (read only; the one momo_multihit_fix uses) | which bullet hit which hunt member: one bullet, one hit |
| C8 | the Wearable Devices PDA mod | `zz_wd_pda_redirect.wd_pda_redirect.push_external_faction` (its public entry point for mods that call `give_game_news` directly) | each Nemesis PDA message also goes on its Messages page; nothing of it is copied, shipped or patched; a menu switch (on by default) |
| C9 | MCM | `ui_mcm.reload()`, and `ui_mcm.get` / `ui_mcm.set` of our own path `nemesis/returning/egg_restart` | The Returning's last page: the menu is rebuilt when every name is retired, after a load whose save differs, and on a restart; only our own value is read and written |
| C10 | Anomaly | `ranks.get_rank_interval(tier)` (read only) | the rank points of a tier, read from the game's own bands, for the rank set on our named hunters |
| C11 | AlifeTactics | presence only: `at_reaction.script` there and `at_reaction.apply` a function (nothing called) | The Returning shows its *Rank effects by* choice; AlifeTactics reads our hunters' rank by itself when they come online, as it does for every NPC |
| C12 | Anomaly | `actor_on_item_use` and `actor_on_sleep`, observed only; an item's `boost_telepat_protection`, read only | Anti-psy items ease the Mark and map targeting; sleep eases the Mark. Since round 174, credited kills and forced retreats grow the Mark through Nemesis's own events. No hit-on-player callback is registered by this module, and the item and sleep are unchanged |
| C13 | Interaction Dot Marks (Catspaw) | `ui_hud_dotmarks.unregister_scanned_entity(id)`, only for an object the mod has just removed (a teleported hunter's body, his dropped weapon), in a pcall, only when the dot mod is installed (round 181; see the note below) |
| C14 | Anomaly and xlibs, read only (round 194) | `SIMBOARD.smarts[id].squads` and the squads' `npc_count`, and xlibs' `xcreature.iterate_online` | the spawn spot survey: who stands within 60 m of each place a hunt may start |

## D. Outcomes for others, changed on purpose

| # | Where | What |
|---|---|---|
| D1 | `nemesis_damage` `boss_npc_hit` | the boss's hits on other NPCs and mutants are multiplied (Boss damage against NPCs) |
| D2 | `nemesis_fx` `on_enemy_eval` | a cloaked hunter is no one's enemy: other NPCs ignore him, he ignores them (never the player) |
| D3 | `nemesis_fx` `on_enemy_eval` | the emission boss and his horde leave each other alone |
| D4 | `nemesis_damage` `on_actor_before_hit` | the boss's first hits on you are cancelled (Boss guaranteed misses) |
| D5 | `nemesis_damage` (the Post and Pre tiers) | our hit callback runs after every other mod's on the latest exes, so the cut sees the final power; a Pre-tier hook also runs before them, for your hits on our hunters (A1) |
| D6 | `nemesis_fx` `on_enemy_eval` (the `sees_enemy` answer) | the emission boss's horde counts a hostile stalker or mutant it sees within 40 m as its enemy, past GAMMA's emission combat limits; only the horde member's side of the question |
| D7 | `nemesis_spawn` `warm_tick` | the warm-up after a load: our own squads made offline on another map and removed in the same tick, so the first hunt of a session no longer freezes the game. Other mods' spawn hooks see them like any squad the simulation makes; nothing of theirs is changed, and no save can hold them. Only Anomaly's public calls (`alife_create`, `sim_squad_scripted`, `alife_release`, `SIMBOARD.smarts`) |
| D8 | `nemesis_thunder_boss` (the cast action, round 165) | while the Thunder Boss casts, his own planner action holds him: it blocks the combat planners and the loot and help schemes (the chase's list) and AlifeTactics' maneuvers (xgraft's `TAKEOVER_ID`) on him alone, through preconditions on his own manager; nobody else's AI is touched, and on his manager everything is as before once the cast ends |
| D9 | `nemesis_thunder_boss` (his lightning) | a bolt that reaches you takes a share of your current health through armour (`change_health`, which still takes nothing while you can't be harmed, god mode); an NPC enemy he strikes dies on the cast's last zap (a shock hit from him, as any kill: other mods' death callbacks see an ordinary death). Its look is the game's own particles, light and sounds, played at points; nothing of the game's files is changed |
| D10 | `nemesis_thunder_boss` (his NPC targets, round 168) | the NPC he may strike (and kill on the last zap) is never a story NPC, your companion, a named NPC xlibs keeps from scripting, a story squad's member (xlibs `xcreature.is_unscriptable`) or a trader (`xcreature.is_trader`); his reach at NPCs is its own slider (45 m) |
| D11 | `nemesis_damage` `keep_pre` / `restore_kept` (round 190) | a hit between the Thunder Boss and an NPC that another mod cancelled (GAMMA's No NPC Friendly Fire zeroes hits between friendly or neutral factions) is put back: its power from the Pre tier, `ret_value` true again, in our Post tier step. Never for a story NPC, your companion or a trader (xlibs `is_unscriptable`, `is_trader`); a second bullet hit of the same shooter on the same victim in one frame stays cancelled (momo's filter). Every other hit is as the other mods decide; yours are not touched |
| D12 | `nemesis_spawn` spot survey (round 194) | where a hunt starts: a place in the spawn ring with nobody within 60 m, else the one with the fewest NPCs; nothing of the NPCs there is changed |

## E. Outside the save

| # | What | Where it lands | Undo |
|---|---|---|---|
| E1 | ~~`nemesis_death_reset.txt`~~ (up to 1.0.0's development) | `$game_data$`; under MO2 the overwrite folder | no longer used; a leftover does nothing and can be deleted by hand |
| E2 | one key in `axr_options.ltx`: the difficulty last applied | the game's settings file | none (one line) |
| E3 | `gamedata/configs/nss_player.ltx`, your own small file (`nemesis_config`; `nwss_player.ltx` until 1.0.3) | `$game_config$`; under MO2 the overwrite folder | written like `axr_options.ltx`; the game never reads it as configuration. `[death]`: a pending escalation halving after a death to a hunter; `[custom_backup]`: your own settings, taken when you leave Custom for a difficulty; `[migrated]`: the move from the old file. The move (round 186): on the first open, when the new file holds neither section, both are copied from `nwss_player.ltx`; from the next start, once the new file reads back from disk, the old one is removed (`os.remove` on its full path from `getFS():update_path`) or, when it stays (Mod Organizer's virtual folder), emptied (`remove_line`, `save`). Nothing else on disk is touched (the owner's OK, 26 October) |
| E4 | `nemesis.log`, the mod's own log (`nemesis_utils`, through xlibs' `xlog`; round 156) | `$logs$`: `appdata/logs/`, next to the game's log | appended to; at the first write of a session, a file past 5 MB is renamed with its date and a new one begins (xlog's rotation). Every line with Debug logs on, error lines always; nothing else |

No console command is run, and no game file is written.

- **Our hunter's dropped weapon** (round 176, 24 October): when a hunt member's body teleports out, the weapon he held (recorded while he lived, `nemesis_engine.held_weapon`, counted ours by the doorway) is released too, only while it lies on the ground (`parent_id` 65535); one already picked up by anyone is left alone. Before, NPCs gathered it where he fell (Anomaly `xr_gather_items`). Only our own hunters' gear.

- **Interaction Dot Marks (Catspaw)** (round 181, 24 October): after the mod removes one of its own objects (a teleported hunter's body, his dropped weapon), `nemesis_compat.forget_dot_mark` calls the dot mod's public `ui_hud_dotmarks.unregister_scanned_entity(id)` for that id, in a pcall, only when the dot mod is installed. Why: the dot mod re-registers a dead NPC as a body marker at death and has no hook for an object being removed, so our removed bodies left markers with nothing under them. Nothing else of the dot mod is touched; only ids we removed.
