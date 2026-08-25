---
layout: page
title: "How to configure avatar Special Actions"
source_url: https://www.animaze.us/manual/gettingstarted3d/avatarspecialactions
---

# How to configure avatar Special Actions

[Special Actions]({{ '/manual/gettingstarted2d/diveinto/' | relative_url }}) are user triggered animations and are not part of the face tracking retargeting system. Think of special actions as cool dance moves that you want your avatar to display.

While the possibilities of Special Actions are limitless, and must follow this rule: special actions animation should be exported for every bone in the hierarchy.

The format is \\*.fbx, just as all the other animations, and they can be added, rearranged and removed within the Animaze Editor. 

### Steps to configure Special Actions:

1. Open Animaze Editor
2. In the **Editor Panel**, click on **Special Actions** bar to expand it.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/1-df7c323a.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

3. Clicking the **Configure Special Actions** button will open the configuration window.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/2-92beddb1.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

4. Click on the **Add Action** button, then select the Special Action animation from the source folder that contains the **.fbx** files and hit **Open****.**

*Note, the location and name of the source folder will vary depending on where you saved and what you named the folder. The default name of the folder is “AvatarFrogTest”.*

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/3-20103e9f.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

5. Click **OK** to finish adding the animation.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/4-c0d49f46.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="428"}

6. Click the **Activate** button to trigger the animation and watch the avatar perform the action.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/5-d0628cf0.png' | relative_url }} "Learn how to use "){: width="800" height="424"}

7. Save the avatar in the **Hierarchy Panel** when you are done.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/13-9911d0c5.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="357" height="487"}

You’ve successfully configured the Special Action :)

Animaze supports a generic animation retargeting system that enables any 3D avatar in Animaze to get access to a predefined set of generic special actions, special poses, and idle animations that are delivered with the Animaze apps (iOS, Desktop and Editor), removing the need of custom creating them.

Along with the Animaze Editor, we provide the sources of **AvatarManequin**, a generic avatar that contains the **4 standard SpecialActions** used on most of our 3D avatars (**Hello, Ok, Shrug, No**), and which can be loaded on your own created avatar through Animaze Editor.

If your avatar has different bones naming than [suggested]({{ '/manual/animationappendix/animazebones/' | relative_url }}), you can use the **retargeting feature** within the Editor to match them accordingly. **Mind that your right side is the left side of the avatar.**

![Special Action]({{ '/assets/images/12xz-5cdd5306.png' | relative_url }} "Special Action"){: width="800" height="461"}

Steps to configure **Special Actions from AvatarManequin**:

1. Open Animaze and bring your avatar in the scene. We are using Danny for exemplification.

2. In the **Editor Panel**, scroll down to **Animation Retargeting Configurator**, expand the tab and wait until the *Loading* word is gone from the tab. Only then check the box **Enable**.

![Special Action]({{ '/assets/images/11z-00db3400.png' | relative_url }} "Special Action"){: width="800" height="425"}

Optionally, marking the **Draw Reference Model** box, will trigger the AvatarManequin to appear in the scene, when the Special Actions are activated.

![Special Action]({{ '/assets/images/13z-b580d7c2.png' | relative_url }} "Special Action"){: width="800" height="426"}

3. Now scroll down to **Special Actions** tab and expand it. The actions from the mannequin are already loaded, so you can simply activate them and watch the avatar perform them.

![Special Action]({{ '/assets/images/12z-780bb5c6.png' | relative_url }} "Special Action"){: width="800" height="461"}

When you want to add a custom animation you created in your 3D software (Maya, Blender etc) on your models, you can simply add it onto them by following the steps listed on this [tutorial]({{ '/manual/gettingstarted3d/avatarspecialactions/' | relative_url }}).

Using the **\\*.fbx** file of the AvatarManequin in the **\>Assets** directory of AnimazeEditor, you can bring any animation on all your avatars.  Import it into your work software (Maya, Blender), and either use the innate retargeting system of the software in use to match them on the avatar, or simply create new ones. Export them in the mannequin’s **\\*.fbx**. Then import the mannequin in Animaze Editor andadd the actions, as per this **[tutorial]({{ '/manual/gettingstarted3d/avatarspecialactions/' | relative_url }}).** You can add/remove any of them at any time using the configurator.

After saving it, **copy the AvatarManequin directory from Animaze Editor to Animaze desktop folder**, to have your avatars play your animations.

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
