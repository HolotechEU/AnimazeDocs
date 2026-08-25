---
layout: page
title: "Importing .VRM avatars"
source_url: https://www.animaze.us/manual/appmanual/vrmimp
---

# Importing .VRM avatars

Animaze supports VRM models! To prepare  your VRM model for Animaze, the general workflow is to (1) source a.VRM model file, (2) import the model through the [Animaze Editor](https://www.animaze.us/editor), (3) convert the .VRM model into a .avatar file, and (4) add your model to all Animaze Apps (iOS and Windows).

To get started, find and download the [VRoid Studio application on Steam here.](https://store.steampowered.com/app/1486350/VRoid_Studio_v0131/)

For those of you with your own models or models from somewhere other than VRoid Studio, please note that if your model deviates from the VRM standard, it will not properly import and function in Animaze. 

If you encounter problems such as crashes (on import or while using), shading issues, physics issues, animation, or retargeting issues, please contact [support\[@\]animaze.us](mailto:support@animaze.us) and provide as much information as possible. Important information includes:

- Applications logs (Animaze Editor and Animaze Desktop)
- The .vrm file
- (if applicable) what is wrong with the shading/physics/animation parts
- (if applicable) screenshots or videos with expected results on the shading/physics/animation parts
- (if applicable) screenshots or videos with the issues encountered

## Let’s get a VRM model into Animaze!

If you already have a .vrm model of your own, skip to Step 4.

1. Open VRoid Studio. Create an avatar from scratch or a sample avatar.

![Importing .VRM avatars in Animaze]({{ '/assets/images/image3-8cfeee22.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="700" height="178"}![Importing .VRM avatars in Animaze]({{ '/assets/images/image8-f35f9f63.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="700" height="379"}

2. Customize the avatar as you please. As you customize your avatar, it’s important to follow the guidelines. Refer to the official VRoid Studio guides found here: <https://vroid.pixiv.help/hc/en-us/sections/360000076642--Basic-Tutorials>. In our example, we changed the hair and cat-ears colors.

![Importing .VRM avatars in Animaze]({{ '/assets/images/image7-42cb557b.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="700" height="483"}

3. Export .vrm file by going to Camera/Exporter tab, selecting Export on the left-sidebar, and then clicking the Export button on the right-side inspector.

![Importing .VRM avatars in Animaze]({{ '/assets/images/image14-77918659.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="700" height="379"}

PRO TIP: To ensure that you can find your avatar in the next steps, it’s best to export the .vrm file to a separate folder without any other files.

4. Open [Animaze Editor.](https://www.animaze.us/editor) If the Editor is not appearing in your library, don’t forget to select “tools” in the dropdown menu.

![Importing .VRM avatars in Animaze]({{ '/assets/images/image5-34569116.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="500" height="728"}

5. Go to Assets \> Import 3D Objects. This will open a file explorer that supports .fbx and .vrm files. Search for your .vrm file and click open.  ![Importing .VRM avatars in Animaze]({{ '/assets/images/image2-12385909.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="700" height="393"}

6. Click Import on the Importer window. Let the importer run; this may take a couple of minutes. If you click the screen while the importer runs,the app will not respond.

![Importing .VRM avatars in Animaze]({{ '/assets/images/image6-011cf1e2.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="650" height="565"}

7. Close all import logging windows. Then you should see your model loaded into the Editor.

![Importing .VRM avatars in Animaze]({{ '/assets/images/pasted_image_0-851aa83f.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="500" height="642"}![Importing .VRM avatars in Animaze]({{ '/assets/images/image13-b33cd7b9.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="500" height="379"}

![Importing .VRM avatars in Animaze]({{ '/assets/images/image10_1_-e0623f35.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="700" height="259"}

8. Right-click on the item in the Hierarchy Panel and select the Bundle option. This will create the .avatar file that’s ready to add to Animaze Desktop.

![Importing .VRM avatars in Animaze]({{ '/assets/images/image4-9234b04a.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="300" height="556"}![Importing .VRM avatars in Animaze](https://lh6.googleusercontent.com/BYQTjQOz0w--0igzDH2xaWzuaSeqBTBU7B-EjU61mz0UsEVYMrRCi664A-iHqWsCZscuPLH_mNPy8kL0NUzEhv7ixxj6XdeUWLq8GMEV4Vxch_qhMLM4undkosR80_ge7PLt4bl9 "Importing .VRM avatars in Animaze"){: width="600" height="222"}

PRO TIPS: Take note of where you save your bundle. You will need to find the bundle in the next step. Also, you do not need to save the item before bundling.  

9. Open the Animaze Desktop App. From the top bar menu, select Import \> Import Avatar. Locate and select the .avatar file you’ve just created using the Animaze Editor. If you see a customization exit confirmation, select Don’t save.

Wooohooo! Your VRM model is now in Animaze!

![Importing .VRM avatars in Animaze]({{ '/assets/images/unknown-db1a826c.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="700" height="436"}

![Importing .VRM avatars in Animaze]({{ '/assets/images/unknown_1_-28a3e8d1.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="700" height="437"}

'![Importing .VRM avatars in Animaze]({{ '/assets/images/unknown_2_-c83bf295.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="700" height="454"}

Share your creations with us on our Discord server here <https://animaze.tv/discord>!

### Animaze Desktop Manual

- [Introduction]({{ '/manual/appmanual/appintro/' | relative_url }})
- [Avatar Customization and Retexturing]({{ '/manual/appmanual/avatars/' | relative_url }})
- [Background types, importing and customization]({{ '/manual/appmanual/appbackgrounds/' | relative_url }})
- [Voice Effects]({{ '/manual/appmanual/appvoiceeffects/' | relative_url }})
- [Emotes]({{ '/manual/appmanual/appemotes/' | relative_url }})
- [Props types and customization]({{ '/manual/appmanual/appprops/' | relative_url }})
- [Using Spout2 sources in Animaze]({{ '/manual/appmanual/spout2/' | relative_url }})
- [Avatar Animations and special actions]({{ '/manual/appmanual/appanimations/' | relative_url }})
- [Quick Scenes]({{ '/manual/appmanual/quickscenes/' | relative_url }})
- [Dedicated Capture Window]({{ '/manual/appmanual/dedwind/' | relative_url }})
- [Leveraging Voicemod controls in Animaze]({{ '/manual/appmanual/voicemod/' | relative_url }})
- [Animaze Virtual Camera]({{ '/manual/appmanual/virtualcam/' | relative_url }})
- [Importing 3D avatars and hybrid avatars]({{ '/manual/appmanual/import3dh/' | relative_url }})
- [Importing 2D avatars]({{ '/manual/appmanual/import2d/' | relative_url }})
- [Importing .VRM avatars]({{ '/manual/appmanual/vrmimp/' | relative_url }})
- [Importing Ready Player Me avatars]({{ '/manual/appmanual/importrpms/' | relative_url }})
- [Select Trackers]({{ '/manual/appmanual/trackers/' | relative_url }})
- [iPhone tracking]({{ '/manual/appmanual/iphonetrack/' | relative_url }})
- [Webcam Tracker]({{ '/manual/appmanual/webcamtracker/' | relative_url }})
- [Tobii Eye tracker]({{ '/manual/appmanual/tobii/' | relative_url }})
- [Ultraleap tracker]({{ '/manual/appmanual/ultra/' | relative_url }})
- [Audio Based Lip sync]({{ '/manual/appmanual/audiosync/' | relative_url }})
- [Advanced Tracking Configuration]({{ '/manual/appmanual/advtrack/' | relative_url }})
- [Using (alpha) Maxine AR Face Tracking in Animaze]({{ '/manual/appmanual/maxine/' | relative_url }})
- [Subscriptions]({{ '/manual/appmanual/subs/' | relative_url }})
- [Minimum Requirements for PCs]({{ '/manual/appmanual/requir/' | relative_url }})
- [Keybinds controls]({{ '/manual/appmanual/keybinds/' | relative_url }})
- [Optimizing Web Camera Tracking with Camera Angle and Ambient Light]({{ '/manual/appmanual/optwebcam/' | relative_url }})
