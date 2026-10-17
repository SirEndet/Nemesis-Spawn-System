# Nemesis Wave Spawn System

A recurring Monolith hunter for S.T.A.L.K.E.R. Anomaly / G.A.M.M.A.

Every so often, a hunter comes for you. He spawns out of sight, sprints after you and is very hard to kill. Hurt him badly enough and he teleports away in a Monolith burst. He always comes back, and each time he is stronger.

**Status:** Release Candidate 1.

## Features

- **Hunts with a warning.** A strange PDA message and radio static, then a Monolith squad spawns 70 to 140 m away and comes straight for you.
- **Named hunters.** Ranked Monolith hunters (Acolyte, Disciple, Zealot, Sentinel, Templar, Herald) that normal hits can't kill. When badly hurt they run for cover and teleport out, leaving a "Last seen" marker. They never leave a body.
- **Escalation.** Every hunt you beat makes the next one tougher: less damage taken, later retreats, and armour that catches up with yours. It slowly fades if you go a while without a hunt, and resets if a hunter kills you.
- **Squads.** Up to four extra stalkers who flank you, with snipers keeping their distance. Some can be named hunters too.
- **The boss.** A rare, tougher, always-cloaked hunter with his own look and messages, who may sneak up behind you before he strikes.
- **Atmosphere.** Monolith whispers when a named hunter is near, an optional cloak while they stalk you, and PDA taunts that get personal over time.
- **Playing as Monolith?** The hunters are UNISG instead, with military ranks.
- **Fully configurable** in MCM: every setting is listed in [Nemesis/Nemesis_README.md](Nemesis/Nemesis_README.md).

## Requirements

| Requirement | Notes |
|---|---|
| [G.A.M.M.A.](https://github.com/Grokitach/Stalker_GAMMA) | Or S.T.A.L.K.E.R. Anomaly 1.5.3 with the [modded exes](https://github.com/themrdemonized/xray-monolith) (2025.9.10 or newer) and MCM. |
| **[xlibs](https://github.com/damiansirbu-stalker/xlibs) 1.9.1 or newer** | By Damian Sirbu. Not included in GAMMA; install it first. Also on [ModDB](https://www.moddb.com/mods/stalker-anomaly/addons/xlibs-1001). |

**Optional, no setup needed:** AlifePlus and AlifeTactics. The mod works with them and without them.

**Obrien GAMMA Overhaul** users: turn on *Obrien GAMMA Overhaul armour* in the mod's MCM settings.

## Installation (Mod Organizer 2)

1. Install **xlibs** first, following its own instructions.
2. Download this mod: on GitHub, click **Code → Download ZIP**.
3. In Mod Organizer 2, click **Install a new mod from an archive** (the CD icon) and pick the downloaded ZIP.
4. In the install dialog, find the `Nemesis` folder, right-click it and choose **Set data directory**. The `gamedata` folder should now be directly under the top. Name the mod `Nemesis Wave Spawn System` and click **OK**.
5. Tick the mod in the left pane to enable it. Load order doesn't matter.
6. Start the game. Settings are under **MCM → Nemesis Wave Spawn System**.

**Manual install:** create an empty mod in MO2 (right-click the left pane → *Create empty mod*), open its folder, and copy the `gamedata` folder from `Nemesis/` into it.

**Updating:** install the new version over the old one (choose *Replace* when MO2 asks). Your MCM settings are kept.

**Note on saves:** the first hunt comes after a 12-day grace period by default, counted from when the mod is first loaded in a save. You can shorten it in MCM.

## Repository layout

```
Nemesis/                  the mod (this is what goes into Mod Organizer)
  gamedata/               scripts, configs, MCM text and the PDA icon
  Nemesis_README.md       player guide with every setting and its default
LICENSE                   MIT
```

## Reporting a bug

Turn on **Debug logs** in MCM (Debug page), play until the problem happens, and attach your log file (`anomaly/appdata/logs/xray_<name>.log`) to a GitHub issue. Lines starting with `!Nemesis` are errors. If the game crashed, the same log has the crash at the end.

## Credits

- **Phoenixxx**: the original idea for this mod.
- **Damian Sirbu**: [xlibs](https://github.com/damiansirbu-stalker/xlibs), the library this mod is built on.
- **SirEndet**: design, testing and direction.

Built with AI assistance (Claude by Anthropic).

## License

[MIT](LICENSE) © 2026 SirEndet. xlibs is a separate mod under its own license and is not included here.
