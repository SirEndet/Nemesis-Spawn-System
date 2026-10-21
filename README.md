# Nemesis Wave Spawn System

A recurring Monolith hunter for S.T.A.L.K.E.R. Anomaly / G.A.M.M.A.

Every so often, a hunter comes for you. He spawns out of sight, sprints after you and is very hard to kill. Hurt him badly enough and he teleports away in a Monolith burst. He always comes back, and each time he is stronger.

**Version 1.0.0** · [Download the latest release](https://github.com/SirEndet/Nemesis-Wave-Spawn-System/releases/latest) · [Player guide and every setting](Nemesis/Nemesis_README.md)

## Highlights

- **Hunts that find you.** A radio warning, then a Monolith squad comes straight for you, led by named hunters that teleport out when badly hurt and come back stronger.
- **No running away.** They follow you to other maps, remember where you beat them, and wait outside when you hide in a building.
- **The boss.** A rare, cloaked hunter with an escort, who sneaks up behind you and fights to the death.
- **The emission boss.** When an emission meets a hunt, he comes instead: ghosts trap you in your shelter while he walks in through the storm.
- **Fair, and yours to tune.** Easy, Medium or Hard in one click, and every setting in MCM.
- **Plays well with others.** Works alongside AlifePlus, AlifeTactics, Wearable Devices and Obrien GAMMA Overhaul. Playing Monolith, Zombified or Sin? UNISG hunts you instead.

## Requirements

- **[G.A.M.M.A.](https://github.com/Grokitach/Stalker_GAMMA)**, or S.T.A.L.K.E.R. Anomaly 1.5.3 with MCM.
- **The latest [modded exes](https://github.com/themrdemonized/xray-monolith)** by themrdemonized. GAMMA's installer keeps them up to date.
- **[xlibs](https://github.com/damiansirbu-stalker/xlibs) 1.9.0 or newer** by Damian Sirbu. GAMMA already includes it as **482- Xlib - damian_sirbu**, switched off: just tick it in Mod Organizer. Otherwise get it from [GitHub](https://github.com/damiansirbu-stalker/xlibs) or [ModDB](https://www.moddb.com/mods/stalker-anomaly/addons/xlibs-1001).

## Install (Mod Organizer 2)

1. Make sure xlibs is installed and ticked (in GAMMA: tick **482- Xlib - damian_sirbu**).
2. Download `NemesisWaveSpawnSystem_1.0.0.zip` from the [latest release](https://github.com/SirEndet/Nemesis-Wave-Spawn-System/releases/latest).
3. In Mod Organizer 2, click **Install a new mod from an archive** and pick the zip.
4. Tick the mod. Load order doesn't matter.
5. Start the game. Settings are under **MCM → Nemesis Wave Spawn System**.

**Updating:** install over the old version and choose *Replace*; your saves and settings carry over. Don't update in the middle of a hunt.

**Uninstalling:** tick *Prepare for uninstall* in MCM first, then save. The [player guide](Nemesis/Nemesis_README.md#uninstalling) has the steps.

## Found a bug?

Turn on **Debug logs** in MCM (Debug & tools), play until it happens, and attach your log (`appdata/logs/xray_<name>.log`) to a [GitHub issue](https://github.com/SirEndet/Nemesis-Wave-Spawn-System/issues). If you ever see a yellow **NEMESIS IMPORTANT ERROR (please report)** line, please send that log.

## Credits

- **Phoenixxx**: the original idea for this mod.
- **Damian Sirbu**: [xlibs](https://github.com/damiansirbu-stalker/xlibs), the library this mod is built on.

  xlibs by Damian Sirbu  
  https://github.com/damiansirbu-stalker

- **themrdemonized**: the modded exes ([xray-monolith](https://github.com/themrdemonized/xray-monolith)), the engine this mod is written for.
- **SirEndet**: design, testing and direction.

Built with AI assistance (Claude by Anthropic).

## License

[MIT](LICENSE) © 2026 SirEndet. xlibs is a separate mod under its own license and is not included here.
