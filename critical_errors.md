# Nemesis error lines: which ones always show

Nemesis writes its lines into its own log file, `appdata/logs/nemesis.log` (next to the game's log; since 1.0.3): every line with **Debug logs** on (MCM, Debug & tools), and error lines always. The game's own log stays quiet, with one exception: an **important error** is always written there too, whatever Debug logs says. It shows in the console in bright yellow, labelled `NEMESIS IMPORTANT ERROR (please report)`, and each message at most once a minute, so one that repeats cannot flood the log.

An error is important when it may lead to a crash or a broken save, or breaks something lasting without a word. In the code such a line is marked `!!` (`nemesis_utils.log_tag`). Other error lines (`!Nemesis ERROR`) are always written to `nemesis.log`, including with Debug logs off; they do not normally appear in the game log. Ordinary diagnostic lines require Debug logs. The mod can recover from these errors, for example by disabling one feature or retrying an operation.

**If you see an important error, please report it** with both logs (`xray_<name>.log` and `nemesis.log`; Debug logs on, if you can make it happen again).

## A. Always shown: may crash the game, or leave a save that will not load

| # | Where | The line | What it means |
|---|---|---|---|
| A1 | `nemesis_spawn` | squad spawn failed (...) | the engine refused to create one of our squads; a half-made squad of ours can be left in the save |
| A2 | `nemesis_spawn` | squad creation failed for ... | as A1 |
| A4 | `nemesis_spawn` | the ... squad ... could not be created (...) | as A1, for a lone boss (the emission boss) |
| A7 | `nemesis_utils` | squad section ... not found (squad_descr_nemesis.ltx is not loaded) | the install is broken: a save that already holds a hunt squad of that section will most likely not load |
| A8 | `nemesis_emission` | squad section ... not found (squad_descr_nemesis_emission.ltx is not loaded) | as A7, the emission boss's squads |
| A12 | `nemesis_guard` | safe_release_manager not reachable (...), release guard is OFF | another mod may then release a living hunt member mid-hunt, and the mod keeps working with an object that is gone |
| A13 | `nemesis_events` | ... listener '...' failed: ... | a code error in a part of the mod; on saving or loading it means that part's save data was not written or read |
| A16 | `nemesis_core` | xlibs 1.9.0 or newer is required (missing: ...). The mod is off | xlibs is missing or too old: Nemesis stays off |
| A17 | `nemesis_engine` | refused to ... on ... (id ...): not one of ours | the mod tried to change an object that is not its own (another mod's or the game's NPC): refused, so nothing is harmed, but it is a bug worth a report |
| A18 | `nemesis_engine` | refused to create a squad of section ... / refused to spawn ...: not one of ours | as A17, for something created |

## B. Always shown: no crash, but something lasting breaks silently

| # | Where | The line | What it means |
|---|---|---|---|
| B1 | `nemesis_guard` | the death record in ... did not save (...): it may apply again on the next load | the escalation could be halved again on a later load |

## Also always shown (a notice, not an error)

- `nemesis_damage`: "these modded exes have no callback tiers (added 15 September 2026) ...": with GAMMA ballistics on exes older than 15 September 2026, Nemesis can't protect its named hunters from your shots. Update the modded exes. Also sent once as a PDA message.
- `nemesis_core`: "Nemesis Spawn System <version> loaded": the version that ran, for bug reports.

## C. In `nemesis.log` only (the mod copes)

Everything else marked `!Nemesis ERROR`, for example: a horde squad that could not be created (the horde stays away), a missing sound or screen effect file (that effect stays off), a PDA message that failed (retried once with a vanilla icon), a chase action that could not be added (that hunter is left to the game's own AI), a missing `treasure_manager` (no boss stash), a menu option nothing answered, a PDA message the Wearable Devices PDA mod did not take (missing from its Messages page, still in the PDA's history), a Legend who could not come (he stays waiting), the Thunder Boss's cast action that could not be added (he fights with his gun only), a Thunder Boss who could not come (the Force pick is dropped), the chase gate that failed (logged once; the chase lets that hunter go, combat takes him: the game no longer crashes there, since round 169), a chase step that failed (logged once; that step is skipped).

## D. Expected lines (not errors)

- `nemesis_guard`: "release guard (expected): kept the hunt squad / hunt member <id> from Anomaly's release while the hunt runs": when the hunt squad's last member dies (often the boss at the end of a boss hunt), Anomaly asks to delete the squad; the guard keeps it while the hunt runs, and the mod removes the empty squad after the hunt. A plain Debug logs line since round 182 (before: an error-marked line with a traceback).
- `nemesis_core`: "Nemesis DIAG: hunt member <id> unregistered (...)" right after leaving the game: the level unloads its objects; harmless at a quit.
