---
layout: page
title: "Add customization options on an avatar"
source_url: https://www.animaze.us/manual/hybriddoc/hybridcustomization
---

# Add customization options on an avatar

The avatar we are using for exemplification benefits from customization options, such as color and proportions. Below you can learn how to add and debug them, so that you can customize the avatar in the Animaze app by changing its colors and size, or adding props to it :)  
More info on this subject can be read in the [Animaze Editor Manual]({{ '/manual/editorusermanual/' | relative_url }}).

Let’s start.

1. In the **Editor Panel**, click on the **Customization Option** to open the configurator window.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/1b-f35b5023.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

2. Go to the **Color** tab and click **Add**.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/2b-6b468246.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

3. Click on the **Color customization** tab to expand it, then click on the **Color Mask** box to select the texture from the assets library.

![]({{ '/assets/images/3bb-eace9457.png' | relative_url }}){: width="800" height="425"}

4. Repeat the action for the **Customized base texture**, selecting the proper texture.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/3b-139776d2.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="424"}

5. Time to select the **Target Material**, in this case it’s the **Body**. 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/4b-64af4222.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="427"}

6. The color mask allows the adding of one or multiple colors on the avatar. It was created with 1 color channel, and it needs to be added in order to work. Click on the **Add channel mask** button to begin this process. A window with Channel targets will appear, we will select the Red one.

![]({{ '/assets/images/5b-fde407f3.png' | relative_url }}){: width="800" height="427"}

7. Set the correct tag in **Customization Tag** drop-down list (this helps the Animaze Apps to group customization options into user-friendly categories like eyes, skin, hair etc.). Then set the desired color for this channel (we selected a color close to its default one).

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/6b-a0ff3d33.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="428"}

8. Let’s add an animation customization now. In the **Editor Panel**, click on the **Customization Options** button, go to the **Animation** tab and click **Add**.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/7b-47fb0d2d.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

9. Expand the newly added customization and click on the Browse button, find the source folder that contains the .fbx files, open the Animations folder and select your animation.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/8b-b98c7233.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="427"}  
 

10. Clicking the Compute default value button will calculate the middle range of the scaling animation. The particular scaling animation used here features the default pose around the middle of the animation timeline, but to get a very precise value, the **Compute default value** button evaluates the animation in 1000 samples and checks each sampled pose to the default pose, trying to find the exact match. Once found, it automatically fills the **Value** text box with the percentage of the animation where it matches the default pose.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/9bb-4aba6bf4.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="428"}

11. Set the correct tag by clicking on the drop down list of the **Customization Tag**. This tag helps the Animaze Apps to group customization options into user-friendly categories like eyes, skin, hair etc.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/9b-2288ea8e.png' | relative_url }} " Animaze by Facerig \| 3D Avatars "){: width="800" height="428"}

12. The avatar also contains prop bones, meaning that we are able to add a hat to it, glasses and a mustache. In the **Customization Options** window, General tab, click on the **Detect available attachment slots** button to set up the Prop customization. The system will add a Prop tab for every detected prop-bone of the avatar.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/11bb-c3d08527.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="424"}  
  
  
![]({{ '/assets/images/11bba-929a7adf.png' | relative_url }}){: width="800" height="427"}

13. Expand each **Prop Customization** and set the corresponding **Tag** for each (Hat, Facial\\_Hair & Glasses) so that the system can recognize them and attach the props accordingly when used. The **Bone** and **Prop Type** have already been filled by the system in the previous step. This can also be added manually when needed.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/11b-d6b60347.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

Now that you are done with the additions of all the available customizations, let’s use the debuggers to see how everything is working.

14. Go to the **Tools** menu and select **Customization Debugger**. A floating window will appear.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/12bb-910a8acf.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="438"}

15. In the **Color** tab of the Debugger, click on the color bar that you want to preview, choose a color from the **Color Picker** and hit **OK** when you are happy with the results. You can either **save** the new colors, or revert to the previous ones by using the **Save** & **Revert** buttons of this debugger.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/12b-c0841990.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

16. In the **Animation** tab of the Debugger, **click, hold and slide** the mouse right or left to change the size of the avatar. You can either save the new size, or revert to the previous one by using the **Save** & **Revert** buttons of this debugger.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/13b-671d27ac.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="424"}

17. In the **Attachments** tab of the Debugger, click on the Props you want to try out and see the avatar in the viewport.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/14b-94867e42.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="427"}

Note that once you close the Customization Debugger, all unsaved data is lost, as the avatar returns to its previous state, colors and sizes, as when you finished adding the textures in the customization options.

18. **Save item** in **Hierarchy Panel** when you are done. If you exit the Animaze Editor without saving, all of your work will be lost.

![]({{ '/assets/images/save-381c3287.png' | relative_url }}){: width="300" height="395"}

More info on this subject can be read in the **Animaze Editor Manual**, in [the **Customization Options** section.]({{ '/manual/gettingstarted3d/customizationoptions3d/' | relative_url }})

### Creating Hybrid Avatars - 3D FBX models with Live2D models faces

- [What is Animaze and what is the “.avatar” format?]({{ '/manual/hybriddoc/hybridanimaze/' | relative_url }})
- [Getting started with hybrid avatars]({{ '/manual/hybriddoc/startwithhybrid/' | relative_url }})
- [Create the 2D and 3D components for your hybrid avatar]({{ '/manual/hybriddoc/createhybridcomponents/' | relative_url }})
- [Animated Textures (via Live2D Cubism textures)]({{ '/manual/hybriddoc/animatedtextures/' | relative_url }})
- [Assemble your avatar in the Animaze editor]({{ '/manual/hybriddoc/assemblehybrid/' | relative_url }})
- [Change the avatar details (icon, description & name)]({{ '/manual/hybriddoc/hybridchangedetails/' | relative_url }})
- [How to frame the avatar]({{ '/manual/hybriddoc/framehybrid/' | relative_url }})
- [Add customization options on an avatar]({{ '/manual/hybriddoc/hybridcustomization/' | relative_url }})
- [Configure avatar Special Actions]({{ '/manual/hybriddoc/hybridspecialactions/' | relative_url }})
- [Use Avatar Puppeteering - Expressions debugging]({{ '/manual/hybriddoc/hybriddebugging/' | relative_url }})
- [Import your hybrid avatar in the Animaze Windows app]({{ '/manual/hybriddoc/hybridwindows/' | relative_url }})
- [Send your hybrid avatar to the Animaze iOS app (on Windows, via iTunes)]({{ '/manual/hybriddoc/hybridiositunes/' | relative_url }})
- [Send your hybrid avatar to Animaze Avatar iOS app (on Mac, via Finder)]({{ '/manual/hybriddoc/hybridiosfinder/' | relative_url }})
- [Send your hybrid avatar to Animaze Avatar iOS app (on Windows, via Animaze Editor)]({{ '/manual/hybriddoc/hybridioswindows/' | relative_url }})
- [Dive Into Documentation]({{ '/manual/hybriddoc/hybriddive/' | relative_url }})
