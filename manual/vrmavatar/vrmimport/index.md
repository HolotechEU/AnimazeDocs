---
layout: page
title: "Import Your .VRM Model Into Animaze"
source_url: https://www.animaze.us/manual/vrmavatar/vrmimport
---

# Import Your .VRM Model Into Animaze

Animaze now supports VRM models! To get your VRM model into Animaze and ready for broadcast, the general workflow can be made in 2 easy methods:

1. source a.VRM model file and then add it in **Animaze Desktop** directly

2. import the model through the **Animaze Editor**, make the amendments you want (tweak shadows on meshes, adjust name&description, change icon, camera settings etc), convert it model into a **\\*.avatar** file, and send it to all Animaze Apps (iOS and Windows).

This how-to walks you through all the steps using a \\***.vrm** model from VRoid Studio. Find and download the VRoid Studio application on Steam from **[here](https://store.steampowered.com/app/1486350/VRoid_Studio_v150/).**

If you have your own model or acquired it from somewhere other than VRoid Studio, please note that if the model deviates from the VRM standard, it will not properly import and function in Animaze.

## Let’s get a VRM model into Animaze through the fastest method first!

### **The Direct-into-app method.**

*If you already have a .vrm model of your own, skip to Step 5.*

1. Open **VRoid Studio**. Create an avatar from scratch or use a sample avatar.

![vrm import ]({{ '/assets/images/1z-901865a2.png' | relative_url }} "vrm import "){: width="600" height="339"}

2. Customize the avatar as you please. As you customize your avatar, it’s important to follow the guidelines. Refer to the official VRoid Studio guides found [**here**](https://vroid.pixiv.help/hc/en-us/sections/360000076642--Basic-Tutorials).

![vrm import]({{ '/assets/images/2z-d431124c.png' | relative_url }} "vrm import"){: width="800" height="483"}

3. Export .vrm file by going to **export** **button**, selecting **Export as VRM.**

![vrm import]({{ '/assets/images/4z-f8d3e676.png' | relative_url }} "vrm import"){: width="800" height="480"}

4. There’s an intermediary step in which you can reduce polygons, materials, and bones. Make what changes you consider necessary for your model, or leave it as is, and further select **Export**.

![vrm import]({{ '/assets/images/4z-f8d3e676.png' | relative_url }} "vrm import"){: width="800" height="480"}

5. Open **Animaze**, go to avatar gallery, scroll to **My Avatars** shelf and click on the **\+ (plus) box** to upload your .VRM model.

![Importing .VRM avatars in Animaze]({{ '/assets/images/11z-1f29d3b3.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="457"}

![Importing .VRM avatars in Animaze]({{ '/assets/images/12z-b1374fe6.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="458"}

6. Your avatar is now in Animaze! By default, the 4 standard **Special Actions** (Hello, Ok, Shrug & No) are available on it as well.

![Importing .VRM avatars in Animaze]({{ '/assets/images/15z-9da70edf.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="456"}

### **The Editor method**

Let’s say you need to change some details on your .VRM avatar. For that, you will use the Animaze Editor prior to importing it as above. Let’s do this:

1.Open **Animaze Editor**. If the Editor is not appearing in your **Steam library**, don’t forget to select **TOOLS** in the dropdown menu.

![Importing .VRM avatars in Animaze]({{ '/assets/images/image5-34569116.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="250" height="364"}

2. Go to **Assets \> Import 3D Objects**. This will open a file explorer that supports **.fbx** and **.vrm** files.

**![Importing .VRM avatars in Animaze]({{ '/assets/images/5z-6a6a1bad.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="428"}**

3. **Open** your file & then click **Import** on the Importer window (second pic). Let the importer run; this may take a couple of minutes, and tempering with it will make the app unresponsive.

![Importing .VRM avatars in Animaze]({{ '/assets/images/6z-cfd9e3f8.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="426"}

**![Importing .VRM avatars in Animaze]({{ '/assets/images/7z-598dffa8.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="427"}**

4. Close all import logging windows. Then you should see your model loaded into the Editor.

![Importing .VRM avatars in Animaze]({{ '/assets/images/8z-ccf914e3.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="426"}

![Importing .VRM avatars in Animaze]({{ '/assets/images/9z-84bba339.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="427"}

5. Now you can modify **[material components (add/remove)]({{ '/manual/editorusermanual/editormaterialcomponents/' | relative_url }} "https://www.animaze.us/manual/editorusermanual/editormaterialcomponents"), [change avatar’s name&description]({{ '/manual/gettingstarted3d/changeavatardetails3d/' | relative_url }} "https://www.animaze.us/manual/gettingstarted3d/changeavatardetails3d")[, change camera settings]({{ '/manual/gettingstarted3d/frameavatar3d/' | relative_url }} "https://www.animaze.us/manual/gettingstarted3d/frameavatar3d")**, but consider the **[info here]({{ '/manual/vrmavatar/vrmgeometry/' | relative_url }} "https://www.animaze.us/manual/vrmavatar/vrmgeometry")** beforehand.

6. After you finish with your changes, right-click on the avatar in the **Hierarchy Panel** and select the **Bundle** option. **Save your changes** when prompted or before selecting the bundling option. The system will create the **.avatar** file that’s ready to be added in Animaze Desktop.

![Importing .VRM avatars in Animaze]({{ '/assets/images/10z-2f1ebe51.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="428"}

**PRO TIP**: Take note of where you save your bundle. You will need to find the bundle in the next step.

7. All that is left to do now to get it into **Animaze** is step 5 from the **Direct-in-app** method above.

If you encounter problems such as crashes (on import or while using), shading issues, physics issues, animation, or retargeting issues, please contact [support\[@\]animaze.us](mailto:support@animaze.us "mailto:support@animaze.us") and provide as much information as possible. Important information includes:

- Applications logs (Animaze Editor and Animaze Desktop)
- The .vrm file
- (if applicable) what is wrong with the shading/physics/animation parts
- (if applicable) screenshots or videos with expected results on the shading/physics/animation parts
- (if applicable) screenshots or videos with the issues encountered

**TIP**: If you need to modify your existing \\*.vrm/\\*.glb format avatar (add headphones or other accessories) in Blender or other software out there, make sure you export it in the same format you initially imported it. Take into consideration the conventions agreed for the specific format.

Share your creations with us on our Discord server [**here**](%20https://animaze.tv/discord).

### Importing VRM Format Models

- [.VRM General Flow]({{ '/manual/vrmavatar/vrmgeneral/' | relative_url }})
- [Geometry & Materials & Textures]({{ '/manual/vrmavatar/vrmgeometry/' | relative_url }})
- [Animations & Retargeting]({{ '/manual/vrmavatar/vrmanimations/' | relative_url }})
- [Physics]({{ '/manual/vrmavatar/vrmphysics/' | relative_url }})
- [PerfectSync capabilities to .VRM sourced avatars]({{ '/manual/vrmavatar/vrmperfectsync/' | relative_url }})
- [Import Your .VRM Model Into Animaze]({{ '/manual/vrmavatar/vrmimport/' | relative_url }})
- [Troubleshoot & Support]({{ '/manual/vrmavatar/troubleshootandsupportvrmeditor/' | relative_url }})
