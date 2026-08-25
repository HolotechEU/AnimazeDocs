---
layout: page
title: "Import a background (skybox)"
source_url: https://www.animaze.us/manual/gettingstartedbackgrounds/importbackground
---

# Import a background (skybox)

Animaze can import HDRI cubemaps (.hdr files) that are translated to Animaze-friendly cubes. We prepared a background that pictures a desert scene. 

To ease asset management and make it clear what each asset's role is (i.e. avatar, prop or background), we are using a simple naming convention system that prefixes the asset type to the name of the assets. Here are the three examples:

\\* avatarName - for avatars 

\\* propName - for props

\\* backgroundName - for backgrounds

### 

### To import a skybox, follow the steps below:

### 

1. Download the Animaze Editor Sample Assets from this [link](https://animaze.tv/AnimazeEditorSampleAssets) and extract the files. Inside, you'll find a sample HDRI file BackgroundDesertTest/BackgroundDesertTest.hdr - this is our desert scene skybox.
2. Open the Animaze Editor, navigate to **Assets** and select **Import skybox**

### 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/1-3f62da6c.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

3. In the **Import skybox** **window**, click on Browse and open the **BackgroundDesertTest.hdr** file you downloaded in the first step.

### 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/2-0d953ea0.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="427"}

4. Mark the **Autogenerate blurred image** box to generate the blurry reflection map with the **Blur Strength** level set in the option immediately below.

### 

The skybox (or background) import process generates three textures, one is the background that's rendered behind the avatar, the other two are reflection maps (blurry and sharp). 

### 

To detail, the three textures are: 

### 

\\* skybox/background texture is what gets rendered on screen directly 

### 

\\* blurry reflection map is what gets mapped as reflection on matte surfaces/meshes on avatars and props 

### 

\\* sharp reflection map is what gets mapped as reflection on glossy surfaces/meshes on avatars and props

This way the avatar will stand out in the scene, while the watcher’s eyes are not being distracted by the background elements. Click **Import.**

### 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/3-b88d65ab.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="427"}

The background is now imported and visible in the viewport. In order for it to be recognized by the system in the app, it will need an icon image, so let’s create it. 

### 

5. Click on the **customization01\\_scene** in the **Hierarchy Panel**, the details of the scene are now displayed in the **Editor Panel** to the right. Right click on the current icon and then select **Generate thumbnail**.

### 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/4-ad9755b1.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

### 

6. The new icon is ready and applied in real-time. Save the new scene by choosing **Save item** as in the **Hierarchy Panel** and write a new name for it. We chose to save it as **BakgroundDesertTest\\_scene**, then click **OK**. It will create a different folder in Resources directory and save it outside the original version, as a new scene.

### 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/5-67204e3a.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

### 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/5a-af3f2dc2.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

### 

7. The new scene is loaded

### 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/6-b848f36e.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

### 

This is how the structure folder will look like: 

### 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/7-3c5aa2d9.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="500" height="133"}

### 

### 

Congrats! You’ve successfully imported the background :) 

###

### Creating Backgrounds & Scenes for Animaze

- [Getting started with backgrounds with overlays (2D)]({{ '/manual/gettingstartedbackgrounds/backgroundwoverlays/' | relative_url }})
- [Create a simple, static 2D background with an overlay]({{ '/manual/gettingstartedbackgrounds/2doverlay/' | relative_url }})
- [Create a looping animation Background]({{ '/manual/gettingstartedbackgrounds/loopingbackground/' | relative_url }})
- [Create a backdrop with animated elements that are linked to Tracking Data]({{ '/manual/gettingstartedbackgrounds/trackingdatabackground/' | relative_url }})
- [Create a backdrop with animated elements triggered by key-binds]({{ '/manual/gettingstartedbackgrounds/backgroundtrigger/' | relative_url }})
- [Import a background (skybox)]({{ '/manual/gettingstartedbackgrounds/importbackground/' | relative_url }})
- [Send your background .avatar file to Animaze Avatar iOS app (on Mac, via Finder)]({{ '/manual/gettingstartedbackgrounds/sendbackgroundf/' | relative_url }})
- [Send your background .avatar file to the Animaze iOS app (on Windows, via iTunes)]({{ '/manual/gettingstartedbackgrounds/sendbackgroundw/' | relative_url }})
- [Send a background .avatar file to Animaze Avatar iOS app (on Windows, via Animaze Editor)]({{ '/manual/gettingstartedbackgrounds/sendbackground/' | relative_url }})
- [Troubleshoot & Support]({{ '/manual/gettingstartedbackgrounds/troubleshootandsupportbackgroundsoverlayeditor/' | relative_url }})
