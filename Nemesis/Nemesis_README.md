# Nemesis Wave Spawn System

A recurring Monolith hunter for S.T.A.L.K.E.R. Anomaly / GAMMA.

Every so often, a hunter comes for you. He spawns out of sight, sprints after you and is very hard to kill. Hurt him badly enough and he teleports away in a Monolith burst. He always comes back, and each time he is stronger.

## What happens in a hunt

- **The warning.** Radio static tells you something is coming (you can also turn on a strange PDA message). A short while later the hunt begins.
- **The hunter.** He spawns 70 to 140 m away and heads straight for you. Named hunters carry a Monolith rank in their name (Acolyte, Disciple, Zealot, Sentinel, Templar, Herald), so you can tell them apart from ordinary stalkers.
- **His squad.** Sometimes he brings company: up to four more Monolith stalkers. Some of them can be named hunters too. The rest are normal stalkers you can kill, and they keep hunting you even after the named hunters are gone.
- **The fight.** When he sees you, he fights like any GAMMA stalker, only a better shot. Normal hits can't kill a named hunter. When his health gets low, he runs for cover and teleports out.
- **What you kill is yours.** Regular squad members and the boss leave a body to loot when you kill them. Named hunters always escape: hurt badly, they turn invulnerable, run for cover and teleport away. Those killed by others vanish, and you never see them fall. An option keeps NPCs off your kills.
- **He learns.** Every hunt you beat makes the next one tougher: he takes less damage (from you and from everyone else), holds on longer, and his armour catches up with yours. Escape him by outlasting the hunt and he comes back one step weaker. If he kills you, he loses half his strength.
- **Psy hum.** When a named hunter is close, a psy hum fills your head.
- **He remembers.** Beat a hunter somewhere and they remember the spot for a week. Fight from there again and they know exactly where you are.
- **Buildings.** Hide inside and they don't come in after you straight away. They wait outside for a minute and a half, then storm in. Shoot at them from inside and they storm in at once.
- **Escaping.** Survive long enough (6 in-game hours by default) and the hunters give up.
- **No running to another map.** Change maps any way you like (on foot, a shortcut, fast travel, a guide) and they follow: a minute or two after you walk away from where you arrived, the same hunters teleport in, still as hurt as you left them. They follow twice; change maps a third time and you've shaken them off. They come in from the side you arrived on.

**No safe havens, but some rules.** A hunt never starts while you are in a base or trader camp that is friendly or neutral to you, in a dialogue or asleep, or on an underground map. Squads are smaller in rookie areas like Cordon and Garbage, and in the far north more of them are named hunters. Enemy bases are no shelter. Once the warning has come through, though, the hunt is on: walking into a base won't stop it.

**Playing as Monolith, Zombified or Sin?** Then the hunters are UNISG instead, with military ranks.

### The boss

Rarely, a hunter is the boss: **Bogdan Kravets**, or for UNISG hunts **Lyutomyr Kat**, their best fighter (you can rename both). He is tougher, always cloaked, has his own look and his own messages, and wants you above everyone else. Get in his way and he cuts you down too: against other stalkers and mutants he hits twice as hard. But hurt him, and for a few seconds nobody else exists for him. He never comes alone: four named hunters (Boss escort size) keep you busy while he hunts you. You'll know he's here: they teleport in, in a Monolith burst. While cloaked he slips past everyone else unnoticed, and seeing him changes nothing; only your shot gives him away. Stand still and he sneaks around behind you; run and he runs you down. Either way he tells you before he strikes, and his first 3 shots at you always miss. He never retreats: he fights to the death, and his body is yours to loot. Turn on **Boss stash reward** and killing him also marks a rare (yellow) stash for you. Beat a hunt he was in and the hunters lose half their strength. The longer he stays away, the likelier he gets: by the 30th hunt without him, he comes for sure.

### The emission boss

When an emission meets a hunt (and rarely, in any emission), the hunt is called off and **Ilarion Hrech**, a Sin (UNISG if you are Monolith, Zombified or Sin), comes instead, once the emission's waves start to hit. Get indoors: ghosts gather at the doors of your shelter, and if you try to step out they shove you back in, with phantoms, and each shove takes a little of your psy health. Then lightning strikes outside and he is here. He comes alone and walks in, never running, through the emission that kills everyone else. Fifteen seconds after him, zombies (and snorks, further north) pour through the door after you. Other stalkers barely scratch him. When he reaches the building, the ghosts vanish. Like the other boss, he fights to the death. Either boss will also notice when you reload close to him.

## Settings

Everything is in **MCM → Nemesis Wave Spawn System**, on five pages: General, Gameplay, Combat, Boss and Debug.

### Difficulty

The **Difficulty** setting at the top of the General page picks Easy, Medium (the default) or Hard in one go. The sliders change as soon as you pick, and Apply saves them. If you change one of these settings by hand afterwards, Difficulty shows Custom.

| Setting | Easy | Medium | Hard |
|---|---|---|---|
| Grace period (days) | 18 | 12 | 9 |
| Time between hunts (hours) | 48 | 24 | 24 |
| Hunt time limit (hours) | 4 | 6 | 8 |
| Escalation per cycle | 1.05 | 1.1 | 1.2 |
| Max escalation | 2 | 3 | 5 |
| Retreat health (%) | 30 | 25 | 20 |
| BR mitigation cap (%) | 15 | 25 | 35 |
| Accuracy boost (%) | 10 | 20 | 30 |
| Boss chance (%) | 1 | 2 | 4 |
| Boss days after grace | 7 | 7 | 4 |
| Extra is a named hunter (%) | 15 | 25 | 40 |
| Squad of 1 to 5, weight | 50 / 25 / 14 / 10 / 6 | 50 / 25 / 14 / 10 / 6 | 30 / 25 / 20 / 15 / 10 |

### General
| Setting | Default | What it does |
|---|---|---|
| Difficulty | Medium | Easy, Medium or Hard; sets the settings in the table above. |
| HD icon | Off | Sharper portrait on the PDA messages. |
| Arrival warning audio | On | Radio static shortly before a hunt (for the boss, psy voices too). |
| Arrival warning PDA | Off | A PDA message from an unknown frequency shortly before a hunt. |
| Arrival warning volume | 70 | Loudness of the warning static. |
| Teleport sound volume | 40 | Loudness of the teleport sound. 0 mutes it. |
| Psy hum volume | 20 | Loudness of the psy hum near a named hunter. |
| Wearable Devices mod Malfunction | On | With the Wearable Devices mod: when a hunt spawns, your device screens flicker; for the boss they also go black for 2 s. |

### Hunts
| Setting | Default | What it does |
|---|---|---|
| Grace period (days) | 12 | Days of peace before the first hunt of a new game. |
| Time between hunts (hours) | 24 | Rest time after a hunt before the next one. |
| Hunt time limit (hours) | 6 | Survive this long and the hunters give up. |
| Spawn distance, min (m) | 70 | Closest a hunt can spawn to you. |
| Spawn distance, max (m) | 140 | Farthest a hunt can spawn from you. |
| Squad of 1 to 5, weight | 50 / 25 / 14 / 10 / 6 | How often each squad size appears. They don't need to add up to 100. |
| Extra is a named hunter (%) | 25 | Chance each squadmate is another named hunter. |
| Scale hunts by area | On | Smaller squads in rookie areas, more named hunters in the far north. |
| Hunt your last known position | On | When he loses you, he searches where he last saw or heard you. |
| Squad tactics | On | Squadmates flank you, and snipers keep their distance. |
| Retreat to cover first | On | A hurt hunter flees away from you to cover before teleporting away. |
| Hunter cloak (experimental) | On | Named hunters turn invisible while stalking you from far away. Other stalkers ignore them while they are. |
| Fight range (m) | 70 | When they see you within this distance, they stop chasing and fight. |

### Combat
| Setting | Default | What it does |
|---|---|---|
| Retreat health (%) | 25 | Health at which a named hunter breaks off and teleports away. The boss never does. |
| Accuracy boost (%) | 20 | How much better they shoot than normal stalkers. Squadmates get half, the boss 15 more. 0 = off. |
| Regular stalker toughness (%) | 10 | How much less damage the regular squadmates take, from anyone. 0 = normal stalkers. |
| Escalation per cycle | 1.1 | How much stronger each hunt gets. 1.0 = no growth. |
| Max escalation | 3 | The most the hunters can ever scale up. |
| Max damage reduction (%) | 80 | The most of a hit's damage a hunter can ever shrug off. |
| Halve escalation when a hunter kills you | On | Dying to a hunter halves their strength. |
| Reset escalation now | – | Tick to set the hunters back to their weakest right away. |
| Armour growth speed | 0 | How fast named hunters' armour catches up with yours. |
| Extra BR cap | 0.20 | How much higher than yours their ballistic rating can get. |
| BR mitigation cap (%) | 25 | How much more damage their armour can block than yours. |
| Reserve your kills | Off | NPCs leave your Nemesis kills alone. With AlifePlus, its own "reserve own kills" option decides. |
| Latest exe AI features | On | Uses new engine features on the newest demonized exes. Older exes: no change. |
| Hunter attack pull | 900 | Latest exes: how readily named hunters turn on whoever shoots them. 0 = engine default. |
| Boss attack pull | 300 | The same for the boss (kept low: he prefers you). |

### Boss
| Setting | Default | What it does |
|---|---|---|
| Boss name | Bogdan Kravets | The Monolith boss's name. |
| UNISG boss name | Lyutomyr Kat | The UNISG boss's name (when you play Monolith, Zombified or Sin). |
| Boss chance (%) | 2 | Chance that a hunt brings the boss. Grows 2 every 4 hunts without him; certain by the 30th. 0 = no boss. |
| Boss days after grace | 7 | Days after the grace period before a boss can appear. |
| Boss escort size | 4 | Named hunters who come with the boss. 0 = he comes alone. |
| Boss presence distortion (%) | 50 | A gentle screen wave when he is near (from 60 m). 0 = off. |
| Boss toughness (%) | 30 | How much tougher the boss is than a normal named hunter. |
| Boss extra BR | 0 | Extra armour class for the boss only, on top of the other hunters' (not the % mitigation). |
| Boss damage against NPCs (%) | 200 | How hard the boss hits other stalkers and mutants. |
| Boss stash reward | Off | Kill the boss yourself and a rare (yellow) stash on the map is marked for you. |
| Emission boss | on | Turns the emission boss on or off. |
| Emission boss chance (%) | 100 | Chance, once per emission, that the emission boss replaces the hunt. 0 = off. |
| Emission boss extra chance (%) | 4 | Chance, once per emission, that he comes with no hunt at all, between hunts too. 0 = off. |
| Emission boss name | Ilarion Hrech | The emission boss's name. |
| Emission boss NPC damage reduction (%) | 70 | How much less damage other stalkers and mutants do to him. |
| Emission boss horde size | 4 | Mutants that come through the door after him. 0 = none. |
| Ghost psy damage (%) | 4 | The share of your psy bar you lose when the ghosts shove you back inside, whatever you wear. 0 = none. |
| Lightning strike volume (%) | 80 | The sound of his arrival. 0 = muted. |

### Emission boss

The emission boss's settings have their own page; the lightning volume is on the General page with the other sounds.

### Debug & tools
| Setting | Default | What it does |
|---|---|---|
| Debug mode | Off | For testing: hunts come quickly (15 s after the warning) and can start anywhere, and a map marker follows the boss. |
| Debug logs | Off | Writes Nemesis lines to the console, for bug reports. |
| Force the next hunt | None | For testing: Boss brings the boss in the next hunt; Emission boss brings him now, emission or not. Goes back to None. |
| Prepare for uninstall | Off | Ends any hunt and removes every Nemesis squad, so you can save and uninstall safely. No hunts while ticked. |

## Requirements

- **G.A.M.M.A.** (or Anomaly 1.5.3 with the modded exes and MCM).
- **xlibs 1.9.1 or newer** by **Damian Sirbu**: [ModDB](https://www.moddb.com/mods/stalker-anomaly/addons/xlibs-1001) · [GitHub](https://github.com/damiansirbu-stalker/xlibs). Thank you, Damian, for the library this mod is built on.

Works alongside AlifePlus, AlifeTactics and Wearable Devices, but does not need them.

## Install

Install with Mod Organizer like any other mod. Load order doesn't matter. Settings appear under MCM → Nemesis Wave Spawn System.

## Uninstalling

**Load a save made while no hunt was running.** During a hunt, the save contains the hunt squad, which is built from this mod's own squad type. Without the mod the game cannot rebuild it, and loading that save will most likely crash. Saves made between hunts don't contain it: the squad is removed when a hunt ends.

1. In MCM → Nemesis → Debug, tick **Prepare for uninstall** and apply. Any running hunt is called off, every Nemesis squad is removed from the world (leftovers of older hunts included), and no new hunt starts. Within about 10 seconds a PDA message says it is safe to save.
2. Save.
3. Disable or remove the mod, and load that save.

(Without the checkbox: finish the hunt by beating it or letting it time out, wait until the hunters are gone, then save.) If you keep the mod after all, untick the box and the hunts come back.

Everything else is harmless: the mod's own data in your saves is ignored once the mod is gone, and old Nemesis PDA messages may show without their icon. A small file, `nemesis_death_reset.txt`, can be left in your `gamedata` folder; it is only read by this mod and can be deleted.

## Reporting a bug

Turn on **Debug logs**, play until it happens, and send the log (`appdata/logs/xray_<name>.log`). Lines starting with `!Nemesis` are errors.

## Credits

- **Phoenixxx**: the original idea for this mod.
- **Damian Sirbu**: xlibs, the library this mod is built on.

Built with AI assistance (Claude by Anthropic). Design, testing and direction by the author.
