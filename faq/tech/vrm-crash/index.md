---
layout: page
title: "Animaze Desktop: What can I do if my VRM model crashes Animaze when imported or doesn't load?"
source_url: https://www.animaze.us/faq/tech/vrm-crash
---

# Animaze Desktop: What can I do if my VRM model crashes Animaze when imported or doesn't load?

Two common sources of Animaze crashing when importing VRM models are:

1. [Scenario 1](#scenario1): you have already imported several versions of the model or several distinct models, so there are some legacy files from previous imports that interfere with the current import process.
2. [Scenario 2](#scenario2): some VRM related values are corrupted (e.g. physics radii)
3. [Scenario 3](#scenario3): the model is corrupted (the binary part of the model has inconsistencies)

|  |
| --- |
| **We are continuously trying to solve such crashes, if it’s not fixed yet it’s either because we cannot replicate the issue or some other external factor. It would greatly help if you’d report (to support\[at\]animaze\[dot\]us) such crashes anyway, accompanied by as much info as you can provide (the .vrm model, model particularities - custom textures, anims, etc. - [the Animaze logs]({{ '/faq/tech/gatherlogs/' | relative_url }}), etc.).** |

---

# **Workarounds for Scenario 1**

### Method 1 - non-destructive -

1. Make sure Animaze is closed.
2. Navigate to **Resources/** folder

   1. (Animaze Steam version) navigate to \<steamInstallDir\>\\steamapps\\common\\Animaze\\Data\\Resources\\ folder (quick way is to go into Steam Client, right click on Animaze \> Manage \> Browse Local Files, then navigate to Data\\Resources\\ folder).
   2. (Standalone version) navigate to \<AnimazeInstallDir\>\\Data\\Resources (quick way through the Launcher is clicking on vertical three dot button next to Animaze, Browse Local Files, then navigate to Data\\Resources\\ folder).
3. Animaze will create a folder for imported model with the name of the \\*.vrm file. Find the avatarName/ folder and delete it
4. Do step 1 & 2 for the folder **Assets/**, delete your avatar folder from Assets/ as well.
5. Start Animaze and import

### Method 2 - clean reinstall -

1. if Method 1 doesn’t work, another method is to reinstall Animaze with attention to deleting any user generated folders and files (such as avatars, logs, preferences, etc.).
2. Uninstall Animaze
3. Navigate to previous install folder and delete all remaining folder and files
4. Reinstall Animaze
5. Start Animaze and import

---

# 

# **Workarounds for Scenario 2**

1. Backup the .vrm model file before pursuing this workaround, we are changing the file and it could lead to permanently corrupting it.
2. Open the .vrm model with a text editor (e.g. Notepad). The configuration part is human readable in the json format ( { “key” : value } ).
3. Search for keyword “Inf”, “Ind” or "NaN" and change those values to 0.0 or 0.1. Don’t use find and replace, judge case by case and only replace in the human-readable part of the file (the JSon part). E.g. if it is part of of a radius property, it’s best to use a small float value like 0.01 instead of 0.0.
4. Save the .vrm model file and reimport in Animaze.

---

# 

# **Workarounds for Scenario 3**

There are no workarounds if the model (the binary part) is corrupted and the best course of action is to check the VRM exporter you’ve used, see if there are known limitations or issues, or outright try to export with a different VRM exporter. Usually, this is the case with Blender plugins, models exported through UniVRM in Unity or directly from VRoid Studio have no such issues.

You can always check the validity of the VRM model, by renaming the file extension to .glb and uploading it to [glTF Validator](https://github.khronos.org/glTF-Validator/). The online tool can tell you if the VRM model is usable or not, look out for errors with severity 0.
