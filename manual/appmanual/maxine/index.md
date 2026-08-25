---
layout: page
title: "Using (alpha) Maxine AR Face Tracking in Animaze"
source_url: https://www.animaze.us/manual/appmanual/maxine
---

# Using (alpha) Maxine AR Face Tracking in Animaze

Animaze has added support for Maxine AR SDK with Face & Shoulders Tracking capabilities. Integration is still alpha version so there are things missing from the normal embodiment experience and UX (e.g. advanced tracking configurations).

There are two major requirements for this tracker to work:

1. hardware requirement: RTX series NVIDIA graphics card
2. software requirement: the NVIDIA AR SDK installed from [NVIDIA Broadcast Software Integrations: Download Resources](https://www.nvidia.com/en-gb/geforce/broadcasting/broadcast-sdk/resources/)

### Usage steps:

1. make sure you have the NVIDIA AR SDK installed appropriate to your graphics card. Installer here: [NVIDIA Broadcast Software Integrations: Download Resources](https://www.nvidia.com/en-gb/geforce/broadcasting/broadcast-sdk/resources/)

   ![Using Maxine AR Face tracking in Animaze]({{ '/assets/images/image-20220928-132529-b633ca32.png' | relative_url }} "Using Maxine AR Face tracking in Animaze"){: width="431" height="430"}
2. Open Animaze
3. Go to Settings \> Advanced Tracking Configurations \> Select Trackers
4. Toggle off the Default Tracker

   ![Using Maxine AR Face tracking in Animaze]({{ '/assets/images/image-20220928-133010-77b58d82.png' | relative_url }} "Using Maxine AR Face tracking in Animaze"){: width="322" height="100"}
5. Toggle on the (alpha) NVIDIA Maxine Face Tracker
6. (optional) Toggle the Body Module for shoulder’s tracking

   ![Using Maxine AR Face tracking in Animaze]({{ '/assets/images/image-20221018-140753-1f769602.png' | relative_url }} "Using Maxine AR Face tracking in Animaze"){: width="322" height="339"}
7. Calibrate using the button on the webcam feed or using the hotkey Ctrl \+ C

   ![Using Maxine AR Face tracking in Animaze]({{ '/assets/images/image-20220928-133048-131668d7.png' | relative_url }} "Using Maxine AR Face tracking in Animaze"){: width="383" height="63"}
8. Done

### Known limitations:

- body forward/backward movement is currently disabled as it is not stable enough.
- advanced configurations (smoothing values and expression ranges) are not available, although they can be manually altered by modifying the MaxineFilterConfigDefault.json file from \<AnimazeInstallFolder\>/Data/ folder.
- sad eyebrows are currently disabled as there’s no consistent method to determine them.
- dropping the jaw while lips are still sealed, the avatar will open the mouth. Done to enhance normal speech movement, as accounting for both tracking units will make normal speech undetectable.

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
