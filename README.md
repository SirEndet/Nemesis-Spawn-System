# Nemesis Wave Spawn System: the `dev` branch

This branch holds **the commented source of the latest release** (now 1.0.2). It is refreshed with every release; to play, use the release zip from [Releases](https://github.com/SirEndet/Nemesis-Wave-Spawn-System/releases/latest), or the `main` branch.

This is the same code as the 1.0.2 release, with every note the developers wrote in it: what each function does, why, and where each rule came from. It's for modders and the curious. **To play, use the release zip**: it is the same code with the notes stripped, and it carries the player guide.

- `Nemesis/gamedata/`: the mod as it runs, with its notes. It installs and plays like the release (the game log says "Nemesis Wave Spawn System 1.0.2 loaded").
- `lane_register.md`: every place the mod touches the game and other mods, and how each change is put back. The notes refer to its rows (A6, B5 ...).
- `critical_errors.md`: which error lines always show in the log, and what they mean.
- `LICENSE`: MIT. It covers Nemesis's own code. xlibs and the modded exes are their authors' and are not included.

How the notes are written: each script starts with what it is for, who uses it and what it uses; each function has a note on what it does and why; each first call into another script names it. A round number in a note ("round 139") is the development round a rule came from.

## Credits

- **Phoenixxx**: the original idea for this mod.
- **Damian Sirbu**: [xlibs](https://github.com/damiansirbu-stalker/xlibs), the library this mod is built on.

  xlibs by Damian Sirbu  
  https://github.com/damiansirbu-stalker

- **themrdemonized**: the modded exes ([xray-monolith](https://github.com/themrdemonized/xray-monolith)), the engine this mod is written for.
- **SirEndet**: design, testing and direction.

Built with AI assistance (Claude by Anthropic).
