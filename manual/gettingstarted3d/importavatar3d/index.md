---
layout: page
title: "Import a 3D avatar"
source_url: https://www.animaze.us/manual/gettingstarted3d/importavatar3d
---

# Import a 3D avatar

In this guide, we will use the source files of a test avatar, named **AvatarFrogTest**, that you can [**download here**](https://s3.amazonaws.com/animaze.us/Animaze+Editor+Sample+Assets.zip). The sample folder contains 2 directories (**Animations**, **Textures**) and the \\***.fbx** file exported from the modeling software the avatar was created in.

**Note that this files folder structure is mandatory for the import process:**

1. **\\*.fbx** geometry name the same as the folder name

2. **Textures** (.tga, .png, .jpg files) go in Textures/ folder

3. **Animations** (skeletal animations exported as solo **.fbx** files)

To ease asset management and make it clear what each asset's role is (i.e. avatar, prop or background), we are using a simple naming convention system that prefixes the asset type to the name of the assets. Here are the three examples:

\\* **Avatar**Name - for avatars

\\* **Prop**Name - for props

\\* **Background**Name - for backgrounds

Now follow these steps to begin importing your model:

1. Download the AvatarFrogTest archive using the provided link  above and extract the files inside.

2. Open the Animaze Editor, navigate to **Assets** and select **Import 3D Object**.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/1-4f5a6927.png' | relative_url }} "Learn how to use Animaze by Facerig \| 3D Avatars "){: width="1000" height="534"}

3. Open the model's geometry file, the **.fbx** file, from the location you downloaded the files.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/2-0046c699.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="534"}

4. The following window prompts you to select the files you want to import. If this is your first time importing a specific model, make sure all the files are marked and select the item type from the dropdown list before clicking **Import**.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/3-c99f690f.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="532"}

5. A report of **Import issues** will be displayed after the Animaze Editor checks the files for issues. The warning system checks for skeletal animations. The frog has both skeletal and blendshape animations.

The **Required animation not found** will be displayed when the corresponding skeletal animation is not found in the source files. This warning will trigger even if there is a valid Blendshape that fills the role of the missing skeletal animation. When using blendshapes instead of animations, that warning message can be ignored, like in this case. Click **X** to dismiss the window.

The avatar will still be functional using only the animation found at import.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/4-6302b190.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="532"}

6. Next there's a verbose log that gets prompted for every import, hit the **Ok** button to dismiss. As you work on more complicated models, these logs will surface errors and help you with debugging.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/5-5ee1f4f7.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="532"}

7. Once the avatar is imported, it will be visible in the **Viewport**. Click on it in the **Hierarchy Panel** to display its details (icon, type, name, position etc) in the **Editor Panel** (right side).

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/6-434e5ba4.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="532"}

8. **Save item** in the **Hierarchy Panel** as a final step.

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/save_item-27f6b163.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="534"}

That’s it, the import is done. :)

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
