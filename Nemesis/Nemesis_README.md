# Nemesis Wave Spawn System

A recurring Monolith hunter for S.T.A.L.K.E.R. Anomaly / GAMMA.

Every so often, a hunter comes for you. He spawns out of sight, sprints after you and is very hard to kill. Hurt him badly enough and he teleports away in a Monolith burst. He always comes back, and each time he is stronger.

## What happens in a hunt

- **The warning.** A strange PDA message and radio static tell you something is coming. A short while later the hunt begins.
- **The hunter.** He spawns 70 to 140 m away and heads straight for you. Named hunters carry a Monolith rank in their name (Acolyte, Disciple, Zealot, Sentinel, Templar, Herald), so you can tell them apart from ordinary stalkers.
- **His squad.** Sometimes he brings company: up to four more Monolith stalkers. Some of them can be named hunters too. The rest are normal stalkers you can kill.
- **The fight.** When he sees you, he fights like any GAMMA stalker. Normal hits can't kill a named hunter. When his health gets low, he runs for cover and teleports out. A red "Last seen" marker shows where he went.
- **He never leaves a body.** However a named hunter goes down, the Zone takes him back.
- **He learns.** Every hunt you beat makes the next one tougher: he takes less damage, holds on longer, and his armour catches up with yours. Go a while without a hunt and he slowly weakens again. If he kills you, he starts over from his weakest.
- **Whispers.** When a named hunter is close, you hear Monolith whispers in your head.
- **Escaping.** Survive long enough (4 in-game hours by default) and the hunters give up.

**No safe havens, but some rules.** A hunt never starts while you are in a base or trader camp, in a dialogue or asleep. Once the warning has come through, though, the hunt is on: walking into a base won't stop it.

**Playing as Monolith?** Then the hunters are UNISG instead, with military ranks.

### The boss

Rarely, a hunter is the boss: **Bogdan Kravets** (you can rename him). He is tougher, always cloaked, has his own look and his own messages, and only cares about you. Sometimes he sneaks around behind you before he strikes. He never leaves a "Last seen" marker. Beat a hunt he was in and the hunters get two steps weaker.

## Settings

Everything is in **MCM → Nemesis Wave Spawn System**, on five pages.

### General
| Setting | Default | What it does |
|---|---|---|
| Teleport sound volume | 40 | Loudness of the teleport sound. 0 mutes it. |
| Psy whisper volume | 60 | Loudness of the whispers near a named hunter. |
| Arrival warning volume | 70 | Loudness of the warning static. |
| Arrival warning | On | A PDA message and static shortly before a hunt. |
| HD icon | Off | Sharper portrait on the PDA messages. |
| Grace period (days) | 12 | Days of peace before the first hunt of a new game. |
| Time between hunts (hours) | 24 | Rest time after a hunt before the next one. |
| Hunt time limit (hours) | 4 | Survive this long and the hunters give up. |

### Boss
| Setting | Default | What it does |
|---|---|---|
| Boss name | Bogdan Kravets | The boss's name. |
| Boss chance (%) | 2 | Chance that a named hunter is the boss. |
| Boss toughness (%) | 30 | How much tougher the boss is than a normal named hunter. |
| Boss days after grace | 3 | Days after the grace period before a boss can appear. |
| Boss sneak chance (%) | 50 | Chance the boss sneaks up behind you instead of charging. |

### Combat and armour
| Setting | Default | What it does |
|---|---|---|
| Retreat health (%) | 25 | Health at which a named hunter breaks off and teleports away. |
| Escalation per cycle | 1.1 | How much stronger each hunt gets. 1.0 = no growth. |
| Max escalation | 3 | The most the hunters can ever scale up. |
| Reset escalation when a hunter kills you | On | Dying to a hunter sets them back to their weakest. |
| Reset escalation now | – | Tick to set the hunters back to their weakest right away. |
| Escalation decay (days) | 1 | Days without a hunt before they get one step weaker. 0 = never. |
| Armour growth speed | 0 | How fast named hunters' armour catches up with yours. |
| Extra BR cap | 0.20 | How much higher than yours their ballistic rating can get. |
| BR mitigation cap (%) | 25 | How much more damage their armour can block than yours. |
| Obrien GAMMA Overhaul armour | Off | Turn on only if you use the Obrien GAMMA Overhaul mod. |
| Hunt your last known position | On | When he loses you, he searches where he last saw or heard you. |
| Squad tactics | On | Squadmates flank you, and snipers keep their distance. |
| Retreat to cover first | On | A hurt hunter runs to cover before teleporting away. |
| Hunter cloak (experimental) | On | Named hunters turn invisible while stalking you from far away. |
| Fight range (m) | 70 | When they see you within this distance, they stop chasing and fight. |

### Spawning
| Setting | Default | What it does |
|---|---|---|
| Spawn distance, min (m) | 70 | Closest a hunt can spawn to you. |
| Spawn distance, max (m) | 140 | Farthest a hunt can spawn from you. |
| Squad of 1 to 5, weight | 50 / 25 / 14 / 10 / 6 | How often each squad size appears. They don't need to add up to 100. |
| Extra is a named hunter (%) | 25 | Chance each squadmate is another named hunter. |

### Debug
| Setting | Default | What it does |
|---|---|---|
| Debug mode | Off | For testing: hunts come quickly and can start anywhere. |
| Debug logs | Off | Writes Nemesis lines to the console, for bug reports. |
| Send a test PDA message | – | Checks that Nemesis messages show up. |
| Force a boss in the next hunt | – | The next named hunter is the boss. |

## Requirements

- **G.A.M.M.A.** (or Anomaly 1.5.3 with the modded exes and MCM).
- **xlibs 1.9.1 or newer** by **Damian Sirbu**: [ModDB](https://www.moddb.com/mods/stalker-anomaly/addons/xlibs-1001) · [GitHub](https://github.com/damiansirbu-stalker/xlibs). Thank you, Damian, for the library this mod is built on.

Works alongside AlifePlus and AlifeTactics, but does not need them.

## Install

Install with Mod Organizer like any other mod. Load order doesn't matter. Settings appear under MCM → Nemesis Wave Spawn System.

## Reporting a bug

Turn on **Debug logs**, play until it happens, and send the log (`appdata/logs/xray_<name>.log`). Lines starting with `!Nemesis` are errors.

## Credits

- **Phoenixxx**: the original idea for this mod.
- **Damian Sirbu**: xlibs, the library this mod is built on.

Built with AI assistance (Claude by Anthropic). Design, testing and direction by the author.
