# Nemesis lane register: where the mod touches the game and other mods

Every place Nemesis Wave Spawn System reaches outside its own things: other mods' functions and data, other NPCs, the player, and files outside the save. The scripts' notes refer to the rows here by their number.

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

## E. Outside the save

| # | What | Where it lands | Undo |
|---|---|---|---|
| E1 | ~~`nemesis_death_reset.txt`~~ (up to 1.0.0's development) | `$game_data$`; under MO2 the overwrite folder | no longer used; a leftover does nothing and can be deleted by hand |
| E2 | one key in `axr_options.ltx`: the difficulty last applied | the game's settings file | none (one line) |
| E3 | `gamedata/configs/nwss_player.ltx`, your own small file (`nemesis_config`) | `$game_config$`; under MO2 the overwrite folder | written like `axr_options.ltx`; the game never reads it as configuration. `[death]`: a pending escalation halving after a death to a hunter; `[custom_backup]`: your own settings before a difficulty replaces them |

No console command is run, and no game file is written.
