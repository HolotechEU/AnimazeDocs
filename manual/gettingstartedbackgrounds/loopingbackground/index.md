---
layout: page
title: "Create a looping animation Background"
source_url: https://www.animaze.us/manual/gettingstartedbackgrounds/loopingbackground
---

# Create a looping animation Background

Importing an animated backdrop has the same process as importing a [static 2D background]({{ '/manual/gettingstartedbackgrounds/2doverlay/' | relative_url }}), except that instead of loading a 2D image in the **Import SkyBox 2D** window, you can select a Live2D model (**\\*.model3.json** file) that has the animation you want to loop set as the first animation in the Idle group of the Live2D model.

If these terms seem unfamiliar, please visit the [Live2D documentation website](https://docs.live2d.com/?locale=en_us#).

![Import json background 2D]({{ '/assets/images/0z-05e002b7.png' | relative_url }} "Animaze Editor"){: width="800" height="509"}

Everything else stays the same.

Remember to hit **Play** in the top bar of the Animaze editor, to see the animation playing on the Live2D models in the editor.

For any Live2D model that you will load as an image, a **Live2D Extension** sub-item will appear in the **Hierarchy Panel**.

![Animaze Editor ]({{ '/assets/images/00z-3f4705e5.png' | relative_url }} "Animaze Editor "){: width="800" height="425"}

The properties of this sub-item will allow you to configure the Live2D model just like a full Live2D avatar. For more information on configuring Live2D avatars please see our documentation [here]({{ '/manual/gettingstarted2d/createyourown/' | relative_url }}).

To make the idle animation from cubism work properly in Animaze backgrounds (as a loopable animation to be imported with the background), the following operations are also necessary:

1. Open the **model3.json** file in Cubism Viewer and pull over the **motion3.json** file (it is necessary to have these 2 files in the same folder).

![File Structure ]({{ '/assets/images/1z-9a42b087.png' | relative_url }} "Cubism Animation"){: width="400" height="168"}

![Animation in Cubism]({{ '/assets/images/2z-a0277f3f.png' | relative_url }} "Cubism Animation"){: width="800" height="501"}

2. Expand the **motions** directory from the left menu

![Animation in Cubism]({{ '/assets/images/3z-151d1ba9.png' | relative_url }} "Cubism Animation"){: width="800" height="500"}

3. Select **\\*.motion3. json**, check **Overwrite Fade-in** and **Fade-out** \> assign them the **value 0**, and change the **Group name** to **Idle**

**![Animation in Cubism]({{ '/assets/images/4z-c5953284.png' | relative_url }} "Cubism Animation"){: width="800" height="503"}**

4. Re-export the **\\*.model3.json** file

**![Export Animation ]({{ '/assets/images/5z-e9bc7f66.png' | relative_url }} "Cubism Animation"){: width="390" height="199"}**

If you want to load a Live2D **\\*.model3.json** as an overlay (instead of a static 2D image) the steps [here]({{ '/manual/gettingstartedbackgrounds/2doverlay/' | relative_url }}) remain the same, except that when you edit the **2D overlay** item, you need to browse and load the Live2D model, instead of the static 2D image.

**Tip:** As best practice, you can set extra 2-3 frames after the last animation key, for a smoother loop.

When having physics on your model, mind that, in Animaze the physics will overwrite the animations of the avatars/imported assets.

To learn more about such Live2D assets, here is the [link to our sample models](https://s3.amazonaws.com/animaze.us/Animated+Backgrounds+and+Overlays+Sources.zip).

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
