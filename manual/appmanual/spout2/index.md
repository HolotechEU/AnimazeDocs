---
layout: page
title: "Using Spout2 sources in Animaze"
source_url: https://www.animaze.us/manual/appmanual/spout2
---

# Using Spout2 sources in Animaze

## What is Spout2?

[Spout](https://spout.zeal.co/ "https://spout.zeal.co/") is a video frame sharing system for Microsoft Windows, which allows applications to share OpenGL textures. Spout leverages your graphics card enabling to you send real-time video between Windows applications with near-zero latency or overhead.

# Where can Spout2 be used in Animaze?

Spout2 system is currently supported in Animaze in two scenarios:

1. Sending the rendered video frame of the avatar to applications that support receiving Spout2 feeds. More info [here]({{ '/manual/streaming-transparency/spout/' | relative_url }} "https://www.animaze.us/manual/streaming-transparency/spout").
2. Receiving a video feed from applications that support sending Spout2 feeds such as OBS. The receiving video feed can be used as a dynamic texture on an Avatar or Prop and as a Scene Sticker.

# Goal

In this article we are going to use OBS to render a video that we are going to map on a Scene Sticker in Animaze.

# Requirements

1. OBS Studio version 28 or above that you can download from the [official website](https://obsproject.com/ "https://obsproject.com/").
2. The [Spout2 plugin](https://github.com/Off-World-Live/obs-spout2-plugin/releases "https://github.com/Off-World-Live/obs-spout2-plugin/releases") that can be installed by going to Animaze Settings \> Dedicated Capture Window \> Install Spout2 OBS Plugin or manually from the [official website.](https://github.com/Off-World-Live/obs-spout2-plugin/releases "https://github.com/Off-World-Live/obs-spout2-plugin/releases")

# Scene Sticker usage

**1. (in OBS)** go to Tools \> Spout Output Settings and click Start in the prompted options menu. *This will stream the whole OBS canvas through Spout2.*

![Using Spout2 with Animaze ]({{ '/assets/images/image-20221019-121737_1_-0aef2880.png' | relative_url }} "Using Spout2 with Animaze "){: width="305" height="251"}

![Using Spout2 with Animaze ]({{ '/assets/images/image-20221019-121816_1_-070c0852.png' | relative_url }} "Using Spout2 with Animaze "){: width="459" height="257"}

2. **(in OBS)** An alternative method of outputting only a particular OBS Source in your OBS Scene is to right click on a source, go to Filters and add Spout Filter as an Effect.

![Using Spout2 with Animaze ]({{ '/assets/images/image-20221019-122044_1_-802cb7d6.png' | relative_url }} "Using Spout2 with Animaze "){: width="248" height="405"}

![Using Spout2 with Animaze ]({{ '/assets/images/image-20221019-122250_1_-464b06fe.png' | relative_url }} "Using Spout2 with Animaze "){: width="859" height="445"}

**3. (in Animaze)** On the left-hand menu locate and click the Scene Stickers button.  
**4. (in Animaze)** In the Scene Stickers gallery scroll down to the Spout2 Shelf and hit the Refresh Button

![Using Spout2 with Animaze ]({{ '/assets/images/image-20221019-123649-4576d6c3.png' | relative_url }} "Using Spout2 with Animaze "){: width="311" height="208"}

**5. (in Animaze)** Now select the Spout2 item.

![Now select the Spout2 item.]({{ '/assets/images/image-20221019-123748-d5eeaf86.png' | relative_url }} "Now select the Spout2 item."){: width="800" height="655"}

6. Done

# Retexturing usage

**1. (in OBS)** go to Tools \> Spout Output Settings and click Start in the prompted options menu. *This will stream the whole OBS canvas through Spout2.*

![Using Spout2 with Animaze ]({{ '/assets/images/image-20221019-121737_1-0aef2880.png' | relative_url }} "Using Spout2 with Animaze "){: width="305" height="251"}

![Using Spout2 with Animaze ]({{ '/assets/images/image-20221019-121816_1__1-070c0852.png' | relative_url }} "Using Spout2 with Animaze "){: width="459" height="257"}

**2. (in OBS)** An alternative method of outputting only a particular OBS Source in your OBS Scene is to right click on a source, go to Filters and add Spout Filter as an Effect.

![Using Spout2 with Animaze]({{ '/assets/images/image-20221019-122044_1__1-802cb7d6.png' | relative_url }} "Using Spout2 with Animaze"){: width="248" height="405"}![Using Spout2 with Animaze]({{ '/assets/images/image-20221019-122250_1__1-464b06fe.png' | relative_url }} "Using Spout2 with Animaze"){: width="859" height="445"}

**3. (in Animaze)** Go to Avatars gallery and select your current avatar so you can open up the Customizations drawer. Navigate to the Textures tab

![Spout2 Source ]({{ '/assets/images/image-20221019-124043-7097f1bd.png' | relative_url }} "Spout2 Source "){: width="714" height="649"}

4. **(in Animaze)** In the Body section, change the Diffuse Texture by clicking the **Set Spout2 Source** button. This will open a file explorer with Animaze Spout source files.

![Animaze Spout source ]({{ '/assets/images/image-20221019-124219-ab7104c1.png' | relative_url }} "Animaze Spout source "){: width="800" height="449"}

5. **(in Animaze)** Select your Spout source file. This particular folder is refreshed every time you set a as an avatar texture.![Spout2 source in Animaze]({{ '/assets/images/image-20221019-124357-0c95b044.png' | relative_url }} "Spout2 source in Animaze"){: width="727" height="328"} 

aaaand you're done!

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
