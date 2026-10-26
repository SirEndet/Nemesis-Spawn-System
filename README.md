# Nemesis Spawn System

A recurring Monolith hunter for S.T.A.L.K.E.R. Anomaly / G.A.M.M.A.

Every so often, a hunter comes for you. He spawns out of sight, sprints after you and is very hard to kill. Hurt him badly enough and he teleports away in a Monolith burst. He always comes back, and each time he is stronger.

**Version 1.0.3** · [Download the latest release](https://github.com/SirEndet/Nemesis-Spawn-System/releases/latest) · [Player guide and every setting](Nemesis/Nemesis_README.md) · [Руководство на русском](Nemesis/Nemesis_README_ru.md) · [NSS Wikipedia](https://sirendet.github.io/Nemesis-Spawn-System/)


## Highlights

- **Hunts that find you.** A radio warning, then a Monolith squad comes straight for you, led by named hunters that teleport out when badly hurt and come back stronger. They start where nobody else is waiting, so they reach you.
- **No running away.** They follow you to other maps, remember where you beat them, and wait outside when you hide in a building.
- **The boss.** A rare, cloaked hunter with an escort, who sneaks up behind you and fights to the death.
- **The emission boss.** When an emission meets a hunt, he comes instead: ghosts trap you in your shelter while the storm rages, his horde closes in from two sides, and as the roar fades he walks in.
- **You hear them coming.** The Monolith's call where they land, a heartbeat as the boss closes in, and a beat of dead silence before the radio warning.
- **Fair, and yours to tune.** Easy, Medium or Hard in one click, and every setting in MCM.
- **In English and Russian.** If your game runs in Russian, the menu, the hunters' lines and their names are in Russian too (translated by AI, Claude).
- **Plays well with others.** Works alongside AlifePlus, AlifeTactics, Wearable Devices and Obrien GAMMA Overhaul. Playing Monolith? The Military hunts you by default, with UNISG as an option. Zombified and Sin players are hunted by UNISG.

- **The Thunder Boss.** A Loner against the world, the enemy of every faction, who arrives in lightning and gives you a warning before every cast.
- **The Returning.** Named hunters come back by name and rank, and can become Legends.
- **The Hunt's Eye.** Intercepted chatter warns you, while the Mark and Targeted Ground shorten the peace between hunts.

## The source

Every release also has **`NemesisSpawnSystem_<version>-dev.zip`**: the same code with all the developers' notes in it (what each function does and why), plus `lane_register.md` (every place the mod touches the game and other mods) and `critical_errors.md` (which log errors always show). The [`dev` branch](https://github.com/SirEndet/Nemesis-Spawn-System/tree/dev) holds the same files for the latest release.

## Requirements

- **[G.A.M.M.A.](https://github.com/Grokitach/Stalker_GAMMA)**, or S.T.A.L.K.E.R. Anomaly 1.5.3 with MCM.
- **[Modded exes](https://github.com/themrdemonized/xray-monolith) from 15 September 2026 or newer** by themrdemonized. GAMMA's installer keeps them up to date.
- **[xlibs](https://github.com/damiansirbu-stalker/xlibs) 1.9.0 or newer** by Damian Sirbu. GAMMA already includes it as **482- Xlib - damian_sirbu**, switched off: just tick it in Mod Organizer. Otherwise get it from [GitHub](https://github.com/damiansirbu-stalker/xlibs) or [ModDB](https://www.moddb.com/mods/stalker-anomaly/addons/xlibs-1001).

## Install (Mod Organizer 2)

1. Make sure xlibs is installed and ticked (in GAMMA: tick **482- Xlib - damian_sirbu**).
2. Download `NemesisSpawnSystem_1.0.3.zip` from the [latest release](https://github.com/SirEndet/Nemesis-Spawn-System/releases/latest).
3. In Mod Organizer 2, click **Install a new mod from an archive** and pick the zip.
4. Tick the mod. Resolve file conflicts so the current Nemesis files and modded-exes scripts remain active.
5. Start the game. Settings are under **MCM → Nemesis Spawn System**.

**Updating:** install over the old version and choose *Replace*; your saves and settings carry over. Don't update in the middle of a hunt.

**Uninstalling:** tick *Prepare for uninstall* in MCM first, then save. The [player guide](Nemesis/Nemesis_README.md#uninstalling) has the steps.

## Found a bug?

Turn on **Debug logs** in MCM (Debug & tools), play until it happens, and attach both logs (`appdata/logs/xray_<name>.log` and `appdata/logs/nemesis.log`) to a [GitHub issue](https://github.com/SirEndet/Nemesis-Spawn-System/issues). If you ever see a yellow **NEMESIS IMPORTANT ERROR (please report)** line, please send that log.

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


## NSS Wikipedia — Field Manual

Explore the [NSS Wikipedia / Field Manual](https://sirendet.github.io/Nemesis-Spawn-System/) for installation help, settings, hunter and boss guides, and the public changelog.
