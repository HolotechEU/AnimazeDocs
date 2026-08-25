---
layout: page
title: "Add customization options on an avatar"
source_url: https://www.animaze.us/manual/gettingstarted3d/customizationoptions3d
---

# Add customization options on an avatar

Animaze supports 2 types of **Color customizations** (classic&hue-shifter)**, Animation customizations** and **Attachment customization**.

Let’s start with the color customizations first. Have your customization maps ready for it. Read more about them **[here]({{ '/manual/technicalreference/texturesandmaterials/' | relative_url }} "Customization Maps").**

**Classic Color Customization**

The [provided **AvatarFrogTest**](https://s3.amazonaws.com/animaze.us/Animaze+Editor+Sample+Assets.zip "AnimazeEditor+Assets") avatar benefits from color customization options, proportions animations, and Props slots. Below you can learn how to add and debug them so that you can customize the avatar in the Animaze app by changing its colors and size, or adding Props to it :)

More info on this subject can be read in the [Animaze Editor Manual]({{ '/manual/editorusermanual/' | relative_url }}).

Let’s start.

1. In the **Editor Panel**, click on the **Customization Option** button.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image001-e559b3c6.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

2. In the new opened window, go to **Color** tab and push the **Add** button to start.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image003-d1bdd233.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

3. Click on the **Color customization** tab to expand it, then click on the **Color Mask** box to select the texture **AvatarFrogTest\\_Body\\_CM2** from the assets library

![]({{ '/assets/images/image005-1fae9f54.png' | relative_url }}){: width="800" height="426"}

4. Repeat the action for the **Customized base texture**, selecting **AvatarFrogTest\\_Body\\_CSTM** texture.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image007-41e0b983.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="429"}

5. Time to select the **Target Material**, in this case, it’s the **Body**.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image009-7972c9b0.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

6. Set the **Skin** tag by clicking on the drop-down list of the **Customization Tag**. This tag helps the Animaze Apps to group customization options into user-friendly categories like eyes, skin, hair etc.

![]({{ '/assets/images/image011-72d1e958.png' | relative_url }}){: width="350" height="400"}

7. The color mask allows the addition of one or multiple colors on the avatar. It was created with 3 color channels, and they need to be added in order to work. Click on the **Add channel mask** button to begin this process. A window with **Channel targets** will appear, go ahead and select the **Red channel** first.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image013-0685c8d6.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

8. The channel needs color assignment. Expand the **Red channel** tab, then click on the **color box** to select a new color from the **Color Picker** window. Hit **OK** when done.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image015-00a97025.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

9. Set the **Skin** tag by clicking on the drop-down list of the **Customization Tag**.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image017-4f77bb0c.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

10. Add the **Green & Blue channels** by clicking on the **Add channel mask** button anew and repeat the above actions for each newly added channels.

 11. Let’s use the debuggers to see how it’s working. Go to the **Tools** menu and select **Customization Debugger.** A floating window will appear.

![add customization]({{ '/assets/images/image033-ca19bf0c.png' | relative_url }} "Animaze Editor"){: width="800" height="427"}

12. In the **Color** tab of the **Debugger**, click on the skin color(s) that you want to replace, choose a color from the **Color Picker**, and hit **OK** when you are happy with the results. You can either save the new colors or revert to the previous ones by using the **Save** & **Revert** buttons of this debugger.

![add customization]({{ '/assets/images/image035-0128336f.png' | relative_url }} "Animaze Editor"){: width="800" height="426"}

**Hue-Shifter Customization**

For this type of customization, we will use Ardalys to show you how it can be attained. Have the **Customization Mask** for your avatar ready, as shown [**here**]({{ '/manual/technicalreference/texturesandmaterials/' | relative_url }}).

1.In the **Editor Panel**, click on the **Customization Options** button.

![add customization]({{ '/assets/images/00001-12f45506.png' | relative_url }} "Animaze Editor"){: width="800" height="424"}

2.In the newly opened window, go to the **Hue Shifter** tab and push the **Add** button to start.

![add customization]({{ '/assets/images/001-283ed23f.png' | relative_url }} "Animaze Editor"){: width="800" height="425"}

3. Click on the **Color Mask** box to select the respective texture from the assets library and then set the **Target Material**. We set the **Tag** as **Body** and added the Red channel.

![add customization]({{ '/assets/images/002-01ada562.png' | relative_url }} "Animaze Editor"){: width="800" height="426"}

4.In the **channel details** area, you need to have a unique color for both **Color** and **Average Color** boxes. The values set in the **Color Picker RGB**, determine the color for both **Color & Average Color**. Read on how to obtain it from the diffuse texture [here](https://holotechconfluence.atlassian.net/wiki/spaces/HA/pages/8224806/Avatar+Technical+Documentation#Customization-Maps).

![add customization]({{ '/assets/images/005-608e7333.png' | relative_url }} "Animaze Editor"){: width="800" height="429"}

5.Ardalys has multiple meshes, therefore, we added another customization for the head, so that his body is simultaneously customized with his head. This is possible when you set the **same Customisation Tag**, in this case, we used “Body“. The diffuse texture is the same, so we also used the same color for the customization channel.

![add customization]({{ '/assets/images/006-16b5a13d.png' | relative_url }} "Animaze Editor"){: width="800" height="428"}

6.Let’s use the debugger to see how it’s working. Go to the **Tools** menu and select **Customization Debugger.** A floating window will appear.

![add customization]({{ '/assets/images/007-4b09faca.png' | relative_url }} "Animaze Editor"){: width="800" height="426"}

7.Check the **Preview Customization** box, then click on the color box below to open the **Color Picker**.

![add customization]({{ '/assets/images/008-f188b7bc.png' | relative_url }} "Animaze Editor"){: width="800" height="428"}

8.Hold and drag the cursor within the color space to see how the customization works. You can either save the new color, meaning that, when enabling the customization in animaze apps, the color selected here will be set as default. Or revert to the previous one by using the **Save** & **Revert** buttons of the debugger.

![add customization]({{ '/assets/images/ardalys_hueshift-540cb271.gif' | relative_url }} "Animaze Editor"){: width="800" height="440"}

**Animation Customization**

1.Let’s add animation customization now. Open the **Customization Options** window from the **Editor Panel**, go to the **Animation** tab, and click on **Add** button.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image019-da3524dd.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

2.Expand the newly added customization and click on the **Browse** button, find the **source folder** that contains the **.fbx** files, open the **Animations folder** and select **ModifyProportions\\_Head** animation.

*Note, that the location and name of the source folder will vary depending on where you saved it and what you named the folder. The default name of the folder is “AvatarFrogTest”. The source folder gets copied entirely into the **Assets** folder (\\Holotech\\Animaze Editor\\Data\\Assets), so you can use this folder to find sources faster.*

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image021-f11ac0d3.png' | relative_url }} " Animaze by Facerig \| 3D Avatars "){: width="800" height="424"}

3.Click the **Compute default value** button to calculate the middle range of the scaling animation. The particular scaling animation used here features the default pose around the middle of the animation timeline, but to get a very precise value, the **Compute default value** button evaluates the animation in 1000 samples and checks each sampled pose to the default pose, trying to find the exact match. Once found, it automatically fills the Value text box with the percentage of the animation where it matches the default pose.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image023-d17c7738.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

4.Set the **Head** tag by clicking on the drop-down list of the **Customization Tag**. This tag helps the Animaze Apps to group customization options into user-friendly categories like eyes, skin, hair etc.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image025-05316d25.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

5.Go to the **Tools** menu and select **Customization Debugger.** A floating window will appear.

![add customization]({{ '/assets/images/18-6ecc0ae2.png' | relative_url }} "Animaze Editor"){: width="800" height="427"}

6.In the **Animation** tab of the **Debugger**, click, hold and slide the mouse right or left to change the size of the avatar’s head. You can either save the new size or revert to the previous one by using the **Save** & **Revert** buttons of this debugger.

![add customization]({{ '/assets/images/froggo_anim-d96cef46.png' | relative_url }} "Animaze Editor"){: width="800" height="430"}

**Attachment Customization**

The avatar also contains a few prop bones, meaning that you are able to add a hat to it, glasses, and a mustache.

1.In the **General** tab of the Customization Options window click on the **Detect available attachment slots** button.This will add Prop options in the **Attachment** tab of the current window.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image027-ec8caf03.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

2.In the **Attachment** tab expand each **Prop Customization** and set the corresponding tag for each (Hat, Facial\\_Hair & Glasses) so that the system can recognize them and attach the props accordingly when used. Do it for each Prop option like below.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image029-7090894d.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

![]({{ '/assets/images/image031-51ed74c0.png' | relative_url }}){: width="800" height="425"}

Let’s use the debuggers to see how everything is working.

3. Go to the **Tools** menu and select **Customization Debugger.** A floating window will appear.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image033-ca19bf0c.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="427"}

4.In the **Attachments** tab of the **Debugger**, click on the Hat prop you want to try out and see the avatar in the viewport.

![add customization]({{ '/assets/images/froggo_prop-944ec649.png' | relative_url }} "Animaze Editor"){: width="800" height="429"}

Note that once you close the **Customization Debugger,** all unsaved data is lost, as the avatar returns to its previous state, colors, and sizes, as when you finished adding the textures in the customization options.

**Save item** in **Hierarchy Panel** when you are done. If you exit the Animaze Editor without saving, all of your work will be lost.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image043-c1475955.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="427"}

### Importing FBX Format Models

- [Steps in creating your own 3D avatar]({{ '/manual/gettingstarted3d/howtousethedocumentation/' | relative_url }})
- [What is Animaze and what is the “.avatar” format?]({{ '/manual/gettingstarted3d/animaze3d/' | relative_url }})
- [Import a 3D avatar]({{ '/manual/gettingstarted3d/importavatar3d/' | relative_url }})
- [Add customization options on an avatar]({{ '/manual/gettingstarted3d/customizationoptions3d/' | relative_url }})
- [Bundle a 3D avatar into a .avatar file]({{ '/manual/gettingstarted3d/importtowindows/' | relative_url }})
- [Change the avatar details (icon, description & name)]({{ '/manual/gettingstarted3d/changeavatardetails3d/' | relative_url }})
- [How to configure avatar Special Actions]({{ '/manual/gettingstarted3d/avatarspecialactions/' | relative_url }})
- [Frame the avatar for the iOS App]({{ '/manual/gettingstarted3d/frameavatar3d/' | relative_url }})
- [Import a 3D Prop]({{ '/manual/gettingstarted3d/3dgettingstarted/' | relative_url }})
- [Send your .avatar file to Animaze Avatar iOS app (on Windows, via Animaze Editor)]({{ '/manual/gettingstarted3d/sendavatar3d/' | relative_url }})
- [Send your .avatar file to the Animaze iOS app (on Windows, via iTunes)]({{ '/manual/gettingstarted3d/sendavatar3dw/' | relative_url }})
- [Send your .avatar file to Animaze Avatar iOS app (on Mac, via Finder)]({{ '/manual/gettingstarted3d/sendavatar3df/' | relative_url }})
- [Troubleshoot & Support]({{ '/manual/gettingstarted3d/troubleshootandsupport3deditor/' | relative_url }})
