---
layout: page
title: "Importing 3D avatars and hybrid avatars"
source_url: https://www.animaze.us/manual/appmanual/import3dh
---

# Importing 3D avatars and hybrid avatars

We’ve taken the best 3D avatars and merged them with the ease of 2D avatars to create hybrid avatars.

Hybrid construction combines the technology used to make a 2D face, which simplifies the process of rigging, animating, and overlapping, with the body construction process of a 3D avatar. 

The following import process can be used for both types of avatars.

[**Open the Animaze Editor**,](https://www.animaze.us/editor) navigate to Assets and select Import 3D Object.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/1-4f5a6927.png' | relative_url }} "Learn how to use Animaze by Facerig \| 3D Avatars "){: width="1000" height="534"}

Open the model's geometry file, the .fbx file, from the location you downloaded the files.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/2-0046c699.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="534"}

Select the files you want to import. If this is your first time importing a specific model, make sure all the files are marked and select the item type from the dropdown list before clicking Import.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/3-c99f690f.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="532"}

After the Animaze Editor checks the files for issues, an import issues report displays. The warning system checks for skeletal animations. The “Required animation not found” error will display if the Editor cannot find the corresponding skeletal animation in the source files. This warning will trigger even if there is a valid Blendshape that fills the role of the missing skeletal animation. When using blendshapes instead of animations, click X to ignore the animation warning message.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/4-6302b190.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="532"}

Next, there's a verbose log that prompts for every import. Hit the Ok button to dismiss it. As you work on more complicated models, these logs will surface errors and help you with debugging.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/5-5ee1f4f7.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="532"}

Once the avatar is imported, it will be visible in the Viewport. Click on it in the Hierarchy Panel to display its details (icon, type, name, position etc) in the Editor Panel (right side).

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/6-434e5ba4.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="532"}

Save item in the Hierarchy Panel as a final step.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/6-434e5ba4.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="532"}

Check out all the things you can do with your avatar in the **[dedicated section in our documentation.]({{ '/manual/gettingstarted3d/' | relative_url }})**

Once you’ve finished playing around with the Editor’s settings, it’s time to bundle your avatar.

To do so, in the Hierarchy Panel on the left side of the screen, right-click the avatar’s name and choose Bundle.

![Learn how to use Animaze by Facerig]({{ '/assets/images/1-e8af809d.png' | relative_url }} "Animaze by Facerig"){: width="1000" height="533"}

A new window will prompt you to save the changes to the avatar prior to bundling it.

![Learn how to use Animaze by Facerig]({{ '/assets/images/2-4551c991.png' | relative_url }} "Animaze by Facerig"){: width="1000" height="532"}

Select the folder you want to find the exported bundle. By default, the system will put it in the Resource directory of the editor. You can change the save location at any time. Once you decide, click Select Folder.

![Learn how to use Animaze by Facerig]({{ '/assets/images/3-a84bccce.png' | relative_url }} "Animaze by Facerig"){: width="1000" height="531"}

The system notifies the completion of the bundling process. Click OK.

![Learn how to use Animaze by Facerig]({{ '/assets/images/4-a54590b4.png' | relative_url }} "Animaze by Facerig"){: width="1000" height="533"}

Now you can import the bundle in the Animaze desktop application. Open Animaze, then drag and drop the bundle from its location into Animaze.

![Learn how to use Animaze by Facerig]({{ '/assets/images/importavatarindesktopapp-42724b05.gif' | relative_url }} "Animaze by Facerig"){: width="1000" height="591"}

The imported bundle is in the**Avatar Gallery**, in the **Imports** tab.

![Learn how to use Animaze by Facerig]({{ '/assets/images/6-a77992e0.png' | relative_url }} "Animaze by Facerig"){: width="1000" height="589"}

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
