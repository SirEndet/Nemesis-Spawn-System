# Nemesis Wave Spawn System

A recurring Monolith hunter for S.T.A.L.K.E.R. Anomaly / G.A.M.M.A.

Every so often, a hunter comes for you. He spawns out of sight, sprints after you and is very hard to kill. Hurt him badly enough and he teleports away in a Monolith burst. He always comes back, and each time he is stronger.

**Status:** Release Candidate 4.

## Features

- **Hunts with a warning.** Radio static (and, if you want it, a strange PDA message), then a Monolith squad spawns 70 to 140 m away and comes straight for you.
- **Named hunters.** Ranked Monolith hunters (Acolyte, Disciple, Zealot, Sentinel, Templar, Herald) that normal hits can't kill. When badly hurt they run for cover and teleport out. They never leave a body.
- **Escalation.** Every hunt you beat makes the next one tougher: less damage taken, later retreats, and armour that catches up with yours. Escaping a hunt eases it one step; dying to a hunter or beating the boss halves it.
- **No running away.** Change maps any way you like and they follow you. They remember where you beat them, and if you hide in a building they wait outside, then storm in.
- **Squads.** Up to four extra stalkers who flank you, with snipers keeping their distance. Some can be named hunters too.
- **The boss.** A rare, tougher, always-cloaked hunter with his own look and messages, who teleports in with an escort of named hunters and sneaks up to assassinate you while they keep you busy.
- **Atmosphere.** Monolith whispers when a named hunter is near, an optional cloak while they stalk you, and PDA taunts that get personal over time.
- **Playing as Monolith?** The hunters are UNISG instead, with military ranks.
- **Fully configurable** in MCM, with an Easy / Medium / Hard difficulty setting: every setting is listed in [Nemesis/Nemesis_README.md](Nemesis/Nemesis_README.md).

## Requirements

| Requirement | Notes |
|---|---|
| [G.A.M.M.A.](https://github.com/Grokitach/Stalker_GAMMA) | Or S.T.A.L.K.E.R. Anomaly 1.5.3 with the [modded exes](https://github.com/themrdemonized/xray-monolith) (2025.9.10 or newer) and MCM. |
| **[xlibs](https://github.com/damiansirbu-stalker/xlibs) 1.9.1 or newer** | By Damian Sirbu. Not included in GAMMA; install it first. Also on [ModDB](https://www.moddb.com/mods/stalker-anomaly/addons/xlibs-1001). |

## Compatibility

Works with:
- **AlifePlus** and **AlifeTactics**: no setup needed.
- **Obrien GAMMA Overhaul**: turn on *Obrien GAMMA Overhaul armour* in the mod's MCM settings.

## Installation (Mod Organizer 2)

1. Install **[xlibs](https://github.com/damiansirbu-stalker/xlibs)** 1.9.1 or newer first, following its own instructions.
2. Download the mod from the **[Latest Release](https://github.com/SirEndet/Nemesis-Wave-Spawn-System/releases/latest)**: under *Assets*, click the `NemesisWaveSpawnSystem_*.zip` file. (Older versions are on the [releases page](https://github.com/SirEndet/Nemesis-Wave-Spawn-System/releases).)
3. In Mod Organizer 2, click **Install a new mod from an archive** (the CD icon) and pick the downloaded zip.
4. Name the mod `Nemesis Wave Spawn System` and click **OK**. The zip is already laid out for MO2, so there is nothing else to set.
5. Tick the mod in the left pane to enable it. Load order doesn't matter, as long as xlibs is installed and enabled.
6. Start the game. Settings are under **MCM → Nemesis Wave Spawn System**.

**Manual install:** unpack the release zip and copy its `gamedata` folder into an empty MO2 mod (right-click the left pane → *Create empty mod*), or into your Anomaly folder.

**Updating:** install the new release over the old one (choose *Replace* when MO2 asks). Your MCM settings are kept.

**Note on saves:** the first hunt comes after a 12-day grace period by default, counted from when the mod is first loaded in a save. You can shorten it in MCM.

## Repository layout

```
Nemesis/                  the mod (this is what goes into Mod Organizer)
  gamedata/               scripts, configs, MCM text and the PDA icon
  Nemesis_README.md       player guide with every setting and its default
LICENSE                   MIT
```

## Uninstalling

Load a save made while no hunt was running: a save made during a hunt holds the hunt squad, which only exists with this mod, and will most likely not load without it. The easy way: in MCM → Nemesis → Debug, tick **Prepare for uninstall** and apply, wait for the PDA message that it is safe, save, then remove the mod and load that save.

## Reporting a bug

Turn on **Debug logs** in MCM (Debug page), play until the problem happens, and attach your log file (`anomaly/appdata/logs/xray_<name>.log`) to a GitHub issue. Lines starting with `!Nemesis` are errors. If the game crashed, the same log has the crash at the end.

## Credits

- **Phoenixxx**: the original idea for this mod.
- **Damian Sirbu**: [xlibs](https://github.com/damiansirbu-stalker/xlibs), the library this mod is built on.

  xlibs by Damian Sirbu  
  https://github.com/damiansirbu-stalker

- **SirEndet**: design, testing and direction.

Built with AI assistance (Claude by Anthropic).

## License

[MIT](LICENSE) © 2026 SirEndet. xlibs is a separate mod under its own license and is not included here.
