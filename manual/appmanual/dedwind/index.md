---
layout: page
title: "Dedicated Capture Window"
source_url: https://www.animaze.us/manual/appmanual/dedwind
---

# Dedicated Capture Window

You can open the dedicated capture window one of three ways:

1. Press Ctrl \+ S to open the Dedicated Capture Window

2. You can also find the Dedicated Capture Window in Account \> Shortcuts 

3. Or in the three dot menu, on the Enable Virtual Camera button

![Animaze Dedicated Capture Window]({{ '/assets/images/dedicated_capture_window_1-bc0cbe12.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="700" height="757"}

With the Dedicated Capture Window you can stream Animaze through OBS via either a Game Capture or a Display Capture source (we recommend using a Game Capture source) and create a setup with Alpha Transparency.

There are two methods to create a transparent background directly in the Dedicated Capture Window

# Method 1: Luma key filter and the Dedicated Capture Window with Window Capture:

1. Right click on the Dedicated Capture Window and select Alpha Transparency

![Animaze Dedicated Capture Window]({{ '/assets/images/dedicated_capture_window_3-5afc88d8.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="732"}

2. Open OBS, and create a Window Capture scene

3. Select the AnimazeRenderWindow as the input window

4. Under Capture Method, select Windows Graphics Capture 

![Animaze Dedicated Capture Window]({{ '/assets/images/dedicated_capture_window_2-06aa42d3.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="799"}

There are also two methods to create a transparent background directly in the dedicated capture window.

The first method will use the Luma Key Filter:

1. Go to OBS and right-click on the scene \> Filters \> Add Effect Filter \> Add Luma Key filter 

![Animaze Dedicated Capture Window]({{ '/assets/images/dedicated_capture_window_5-0edfb860.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="585"}

2. Create a new source and add an image / a new display capture etc.

1. For this tutorial we have added an image to use with the Dedicated Capture Window
2. Browse for your desired image and click OK to save it

![Animaze Dedicated Capture Window]({{ '/assets/images/dedicated_capture_window_4-2652ccf3.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="585"}

3. In the sources section of OBS,  drag and drop the Window Capture scene above the newly created scene, so that in the Sources field, the Image source appears under the Window Capture scene.

![Animaze Dedicated Capture Window]({{ '/assets/images/dedicated_capture_window_6-f3cf7643.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="584"}

# Method 2 - using a Game Capture source and the Dedicated Capture’s Window Alpha Transparency setting

1. Right click on the Dedicated Capture Window and select Alpha Transparency

![Animaze Dedicated Capture Window]({{ '/assets/images/gamecapture2-77f4f421.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="799"}

2. Open OBS and create a Game Capture source
3. Under the Mode drop-down list, select Capture specific window
4. Under the Window drop-down list, select AnimazeRenderWindow
5. Tick the Allow Transparency box
6. Click OK to save the source

![Animaze Dedicated Capture Window]({{ '/assets/images/gamecapture1-724a9f9d.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="583"}

7. Create a new source in OBS (I set Image as a source and used the same orange picture as a background) and click OK to save it

![Animaze Dedicated Capture Window]({{ '/assets/images/gamecapture3-397dafb7.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="583"}

8. Move the second source under the Game Capture source to layer the avatar on top of the image.

![Animaze Dedicated Capture Window]({{ '/assets/images/gamecapture4-6944dd84.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="584"}

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
