---
layout: page
title: "Animaze Desktop: How can I transfer my configs, customizations, and avatars from one install location to another?"
source_url: https://www.animaze.us/faq/animazedesktop/animaze-pc-backup
---

# Animaze Desktop: How can I transfer my configs, customizations, and avatars from one install location to another?

Sometimes you are faced with the fact that you need to transfer all your painstakingly customized configurations and customizations from one Animaze install location to another. This may be the case of changing the PC, moving from Animaze non-Steam version to Steam version or vice-versa, or simply needing more disk space, hence moving Animaze build to another drive.

Animaze has two simple scripts that enable you to back up and restore your Animaze data (advanced configs, customizations, custom imports, etc.).

Here’s a simple breakdown of transferring Animaze custom data from an old location to a new one:

1. (backup step) navigate to \<oldAnimazeInstallDir\>/Bin/
2. (backup step) run CreateBackup.bat (recommended to run as admin). This step will create a backup.zip file in the same folder, that contains all custom data. You’ll use this file in your new Animaze location to restore it.
3. (backup step) save the backup.zip file, you’ll need it next.
4. (restore step) navigate to \<newAnimazeInstallDir\>/Bin/
5. (restore step) paste the backup.zip file that you’ve created in step 2 in the Bin/ folder.
6. (restore step) run RestoreBackup.bat
7. done. Start Animaze.

---

|  |
| --- |
| After transferring your custom data, some customized items (avatars, props, scenes, etc.) may not load due to the base item not being downloaded (i.e. if the vanilla item is not on disk, the customized version of it won’t load). Simply, load the base item,a step needed just once, and then load the customized version.  This is prevalent when transferring from Steam to non-Steam version. |

---

For the more technical folk, if you need to selectively choose what to backup, the backup script will archive the following files and folders:

- from \<AnimazeInstallDir\>/Data/Resources/ all \\*.citem and \\*.png representing the items' (avatars, props, backgrounds, etc.) customized meta info and gallery icon.
- from \<AnimazeInstallDir\>/Data/Resources/ all custom imported \\*.avatar files and custom imported items' folders (e.g. directly importing VRM, RPM, and Live2D avatars create a folder with the name of the model). The “custom“ criterion is based on an allowed list because Holotech Original items are also .avatar files, which don’t need backup as they are part of the Animaze build.
- complete folders:

  - \<AnimazeInstallDir\>/Data/Resources/Custom Textures/
  - \<AnimazeInstallDir\>/Data/Resources/L2DProps/
  - \<AnimazeInstallDir\>/Data/Resources/Quickslots/
  - \<AnimazeInstallDir\>/Data/Resources/SceneProps/
  - \<AnimazeInstallDir\>/Data/Resources/Persona\\_Assets/
  - \<AnimazeInstallDir\>/Data/Resources/AvatarManequin/
  - \<AnimazeInstallDir\>/Data/Resources/AvatarMixamo/
- from \<AnimazeInstallDir\>/Data/ all \\*.json files which represent the various advanced tracker configurations, Animaze ChatPal general configuration, and AppPreferences.json which is the general app-related preferences (like keybinds, webcam options, render options, etc.).
- from \<AnimazeInstallDir\>/Data/ all \\*.aicfg files which represent avatar-related configurations in the Animaze ChatPal scenario.
