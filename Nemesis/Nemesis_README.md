# Nemesis Wave Spawn System

A recurring Monolith hunter for S.T.A.L.K.E.R. Anomaly / GAMMA.

Every so often, a hunter comes for you. He spawns out of sight, sprints after you and is very hard to kill. Hurt him badly enough and he teleports away in a Monolith burst. He always comes back, and each time he is stronger.

## What happens in a hunt

- **The warning.** Radio static tells you something is coming (you can also turn on a strange PDA message). A short while later the hunt begins.
- **The hunter.** He spawns 80 to 140 m away and heads straight for you. Named hunters carry a Monolith rank in their name (Acolyte, Disciple, Zealot, Sentinel, Templar, Herald), so you can tell them apart from ordinary stalkers.
- **His squad.** Sometimes he brings company: up to four more Monolith stalkers. Some of them can be named hunters too. The rest are normal stalkers you can kill, and they keep hunting you even after the named hunters are gone.
- **The fight.** When he sees you, he fights like any GAMMA stalker, only a better shot. Named hunters can't be killed: when their health gets low, they run for cover and teleport out.
- **What you kill is yours.** Regular squad members and the boss leave a body to loot when you kill them, even when someone else lands the last shot right after yours. Those killed by others vanish. An option (on by default) keeps NPCs off your kills.
- **He learns.** Named hunters wear armour like yours, and every hunt you beat makes the next one a little tougher. Outlast a hunt and he comes back one step weaker. If he kills you, he loses half his strength.
- **Psy hum.** A named hunter carries a psy hum with him: you can hear where he is, and it grows as he comes closer.
- **He remembers.** Beat a hunter somewhere and they remember the spot for a week. Fight from there again and they know exactly where you are.
- **Buildings.** Hide inside and they don't come in after you straight away. They wait outside for a minute and a half, then storm in. Shoot at them from inside and they storm in at once.
- **Escaping.** Survive long enough (5 in-game hours by default) and the hunters give up.
- **No running to another map.** Change maps any way you like and they follow: a minute or two after you arrive, the same hunters teleport in, still as hurt as you left them, from the side you came in on. They follow twice by default; change maps once more and you've shaken them off.

**No safe havens, but some rules.** A hunt never starts while you are in a base or trader camp that is friendly or neutral to you, in a dialogue, asleep, or on an underground map. Squads are smaller in rookie areas like Cordon and Garbage, and in the far north more of them are named hunters. Enemy bases are no shelter. Once the warning has come through, though, the hunt is on: walking into a base won't stop it.

**Playing as Monolith, Zombified or Sin?** Then the hunters are UNISG instead, with military ranks.

### The boss

Rarely, a hunter is the boss: **Bogdan Kravets**, or for UNISG hunts **Lyutomyr Kat** (you can rename both). He is tougher, always cloaked, has his own look and messages, and wants you above everyone else. He never comes alone: four named hunters keep you busy while he hunts you, and you'll know he's here when they teleport in. While cloaked he slips past everyone unnoticed; only your shot gives him away. Stand still and he sneaks around behind you; run and he runs you down. He tells you before he strikes, and his first two shots at you always miss. He never retreats: he fights to the death, and his body is yours to loot. Kill him yourself and a rare stash is marked on your PDA. The longer he stays away, the likelier he gets.

### The emission boss

When an emission meets a hunt (and rarely, in any emission), the hunt is called off and **Ilarion Hrech**, a Sin (UNISG if you play Monolith, Zombified or Sin), comes instead. Get into a building that shelters you from the emission and stay inside a few seconds: a ring of ghosts rises around you, and two or three more stand across every door. Try to leave and they push you back, each push costing a little psy health. Then lightning strikes outside and he teleports in. He walks in through the emission that kills everyone else, and a horde of zombies (snorks further north) comes in after you. Other stalkers barely scratch him. The ghosts keep you in until his hunt ends. Like the other boss, he fights to the death. Either boss will notice when you reload close to him.

## Settings

Everything is in **MCM → Nemesis Wave Spawn System**, on six pages: General, Hunts, Combat, Boss, Emission boss and Debug & tools.

### Difficulty

The **Difficulty** setting at the top of the General page picks Easy, Medium (the default) or Hard in one go. It sets every slider that makes the game easier or harder; check boxes, volumes and effects are left alone. Medium is the defaults, Easy is about 20% easier and Hard about 20% harder. If you change one of these settings by hand afterwards, Difficulty shows Custom, and your own values are backed up before a difficulty replaces them.

| Setting | Easy | Medium | Hard |
|---|---|---|---|
| Grace period (days) | 21 | 18 | 15 |
| Time between hunts (hours) | 43 | 36 | 29 |
| Hunt time limit (hours) | 4 | 5 | 6 |
| Extra is a named hunter (%) | 10 | 15 | 20 |
| Maps they follow you | 1 | 2 | 3 |
| Squad of 1 to 5, weight | 60 / 30 / 14 / 8 / 4 | 50 / 25 / 14 / 10 / 6 | 40 / 20 / 14 / 12 / 8 |
| Retreat health (%) | 35 | 30 | 25 |
| Accuracy boost (%) | 8 | 10 | 12 |
| Regular stalker damage reduction (%) | 0 | 0 | 0 |
| Named hunter damage reduction (%) | 20 | 25 | 30 |
| Escalation per cycle (%) | 1.5 | 2 | 2.5 |
| Max escalation (%) | 15 | 20 | 25 |
| Max damage reduction (%) | 55 | 70 | 85 |
| Hunter armour class bonus | 0 | 0 | 0 |
| Hunter BR mitigation bonus (%) | 0 | 0 | 0 |
| Boss chance (%) | 3 | 4 | 5 |
| Boss days after grace | 7 | 7 | 6 |
| Boss escort size | 3 | 4 | 4 |
| Boss damage reduction (%) | 20 | 30 | 40 |
| Boss damage against NPCs (%) | 150 | 200 | 250 |
| Boss guaranteed misses | 3 | 2 | 1 |
| Emission boss chance (%) | 80 | 100 | 100 |
| Emission boss extra chance (%) | 4 | 6 | 8 |
| Emission boss damage reduction (%) | 20 | 30 | 40 |
| Emission boss NPC damage reduction (%) | 55 | 70 | 85 |
| Emission boss horde size | 3 | 4 | 5 |
| Ghost psy damage (%) | 3 | 4 | 5 |

### General
| Setting | Default | What it does |
|---|---|---|
| Difficulty | Medium | Easy, Medium or Hard; sets the settings in the table above. |
| Load settings from Automatic Backup | – | Puts back your own settings from before a difficulty replaced them. The box unticks itself. |
| HD icon | Off | Sharper portrait on the PDA messages. |
| Arrival warning audio | On | Radio static shortly before a hunt (for the boss, psy voices too). |
| Arrival warning PDA | Off | A PDA message from an unknown frequency shortly before a hunt. |
| Arrival warning volume | 70 | Loudness of the warning static. |
| Teleport sound volume | 40 | Loudness of the teleport sound. 0 mutes it. |
| Psy hum volume | 10 | Loudness of the psy hum the nearest named hunter carries. |
| Lightning strike volume | 0 | The lightning strike when the emission boss arrives (off by default: the emission is loud enough). |
| Wearable Devices mod Malfunction | On | With the Wearable Devices mod: your device screens flicker when a hunt spawns, and go black for 2 s when the boss comes. |

### Hunts
| Setting | Default | What it does |
|---|---|---|
| Grace period (days) | 18 | Days of peace before the first hunt of a new game. |
| Time between hunts (hours) | 36 | Rest time after a hunt before the next one. |
| Hunt time limit (hours) | 5 | Survive this long and the hunters give up. |
| Spawn distance, min (m) | 80 | Closest a hunt can spawn to you. |
| Spawn distance, max (m) | 140 | Farthest a hunt can spawn from you. |
| Squad of 1 to 5, weight | 50 / 25 / 14 / 10 / 6 | How often each squad size appears. They don't need to add up to 100. |
| Extra is a named hunter (%) | 15 | Chance each squadmate is another named hunter. |
| Scale hunts by area | On | Smaller squads in rookie areas, more named hunters in the far north. |
| Hunt your last known position | On | When he loses you, he searches where he last saw or heard you. Off: he always heads for where you are. |
| Squad tactics | On | Squadmates flank you. |
| Retreat to cover first | On | A hurt hunter runs for cover before teleporting away. |
| Maps they follow you | 2 | How many times a hunt follows you to another map. 0 = never (changing maps is an escape). |
| Hunter cloak (experimental) | On | Named hunters turn invisible while stalking you from far away. |
| Fight range (m) | 100 | When they see you within this distance, they stop chasing and fight. |

### Combat
| Setting | Default | What it does |
|---|---|---|
| Retreat health (%) | 30 | Health at which a named hunter breaks off and teleports away. The bosses never do. |
| Accuracy boost (%) | 10 | How much better they shoot than normal stalkers. Squadmates get half, the boss 15 more. 0 = off. |
| Regular stalker damage reduction (%) | 0 | How much less damage the regular squadmates take. 0 = normal stalkers. |
| Named hunter damage reduction (%) | 25 | How much less damage named hunters take, on top of their armour. |
| Escalation per cycle (%) | 2 | How much tougher each beaten hunt makes them. 0 = no growth. |
| Max escalation (%) | 20 | The most the hunts can ever add. |
| Max damage reduction (%) | 70 | The most of a hit any hunter can ever shrug off, everything together. |
| Halve escalation when a hunter kills you | On | Dying to a hunter halves their strength. |
| Hunter armour class bonus | 0 | Makes every hunter's armour stronger. |
| Hunter BR mitigation bonus (%) | 0 | Every hunter shrugs off more of each bullet. |
| Reserve your kills | On | NPCs leave your Nemesis kills alone. With AlifePlus, its own "reserve own kills" option decides. |
| Latest exe AI features | On | Hunters pick their target more cleverly and turn on whoever shoots them. Needs the latest modded exes. |
| Hunter attack pull | 600 | How readily named hunters turn on whoever shoots them. 0 = the game decides. |
| Boss attack pull | 300 | The same for the boss (kept low: he prefers you). |

### Boss
| Setting | Default | What it does |
|---|---|---|
| Boss name | Bogdan Kravets | The Monolith boss's name. |
| UNISG boss name | Lyutomyr Kat | The UNISG boss's name (when you play Monolith, Zombified or Sin). |
| Boss chance (%) | 4 | Chance that a hunt brings the boss. It grows the longer he stays away, and the 30th hunt without him brings him for sure. 0 = no boss. |
| Boss days after grace | 7 | Days after the grace period before a boss can appear. |
| Boss escort size | 4 | Named hunters who come with the boss. 0 = he comes alone. |
| Boss presence distortion (%) | 40 | A gentle screen wave when he is near (from 60 m). 0 = off. |
| Boss damage reduction (%) | 30 | How much less damage the boss takes. |
| Boss damage against NPCs (%) | 200 | How hard the boss hits other stalkers and mutants. |
| Boss guaranteed misses | 2 | How many of his first shots at you always miss (both bosses). 0 = none. |
| Boss stash reward | On | Kill the boss yourself and a rare (yellow) stash on the map is marked for you. |

### Emission boss
| Setting | Default | What it does |
|---|---|---|
| Emission boss | On | Turns the emission boss on or off. |
| Emission boss chance (%) | 100 | Chance, once per emission, that the emission boss replaces the hunt. 0 = off. |
| Emission boss extra chance (%) | 6 | Chance, once per emission, that he comes with no hunt at all. 0 = off. |
| Emission boss name | Ilarion Hrech | The emission boss's name. |
| Emission boss damage reduction (%) | 30 | How much less damage he takes. |
| Emission boss NPC damage reduction (%) | 70 | How much less damage other stalkers and mutants do to him. |
| Emission boss horde size | 4 | Mutants that come in after him. 0 = none. |
| Ghost psy damage (%) | 4 | The share of your psy bar you lose each time the ghosts push you back, whatever you wear. 0 = none. |

### Debug & tools
| Setting | Default | What it does |
|---|---|---|
| Debug mode | Off | For testing: hunts come quickly (15 s after the warning) and can start anywhere, and a map marker follows the boss. |
| Debug logs | Off | Writes Nemesis lines to the log, for bug reports. |
| Force the next hunt | None | For testing: Boss brings the boss in the next hunt; Emission boss brings him now. Goes back to None. |
| Reset escalation now | – | Tick to set the hunters back to their weakest right away. |
| Prepare for uninstall | Off | Ends any hunt and removes every Nemesis squad, so you can save and uninstall safely. No hunts while ticked. |

## Requirements

- **G.A.M.M.A.** (or Anomaly 1.5.3 with MCM).
- **The latest modded exes** by **themrdemonized** ([GitHub](https://github.com/themrdemonized/xray-monolith)). GAMMA's installer keeps them up to date.
- **xlibs 1.9.0 or newer** by **Damian Sirbu** ([GitHub](https://github.com/damiansirbu-stalker/xlibs) · [ModDB](https://www.moddb.com/mods/stalker-anomaly/addons/xlibs-1001)). GAMMA already includes it as **482- Xlib - damian_sirbu**, switched off: tick it in Mod Organizer.

Works alongside AlifePlus, AlifeTactics, Wearable Devices and Obrien GAMMA Overhaul, but does not need them.

## Install and update

Install with Mod Organizer like any other mod and tick it. Load order doesn't matter. Settings appear under MCM → Nemesis Wave Spawn System.

To update, install the new version over the old one and choose *Replace*. Your saves and settings carry over. Don't update in the middle of a hunt, while hunters are following you, or while the emission boss is on his way.

## Uninstalling

**Use a save made while no hunt was running.** A save made during a hunt holds the hunt's squad, which only this mod can load, so without the mod it will most likely not load.

1. In MCM → Nemesis Wave Spawn System → Debug & tools, tick **Prepare for uninstall** and apply. Any running hunt is called off and every Nemesis squad leaves the world. Within about 10 seconds a PDA message says it is safe to save.
2. Save.
3. Disable or remove the mod, and load that save.

(Without the box: finish the hunt by beating it or letting it time out, wait until the hunters are gone, then save.) If you keep the mod after all, untick the box and the hunts come back.

The mod keeps one small file of its own, `gamedata/configs/nwss_player.ltx` (with Mod Organizer, in its overwrite folder): your death record and your settings backup. You can delete it after uninstalling. Older versions may also have left `gamedata/nemesis_death_reset.txt`, which can go too.

## Reporting a bug

Turn on **Debug logs**, play until it happens, and send the log (`appdata/logs/xray_<name>.log`). If you ever see a yellow **NEMESIS IMPORTANT ERROR (please report)** line, it shows even with Debug logs off and may mean a broken save or install: please send that log.

## Credits

- **Phoenixxx**: the original idea for this mod.
- **Damian Sirbu**: [xlibs](https://github.com/damiansirbu-stalker/xlibs), the library this mod is built on.

  xlibs by Damian Sirbu  
  https://github.com/damiansirbu-stalker

- **themrdemonized**: the modded exes ([xray-monolith](https://github.com/themrdemonized/xray-monolith)), the engine this mod is written for.
- **SirEndet**: design, testing and direction.

Built with AI assistance (Claude by Anthropic).
