---
layout: page
title: "Converting 3D Avatars from Facerig to Animaze"
source_url: https://www.animaze.us/manual/convertavatars/convert3davatar
---

# Converting 3D Avatars from Facerig to Animaze

This guide outlines the steps you need to take to convert a custom 3D avatar designed for Facerig to work with Animaze. Please make sure you familiarize yourself with the Animaze [**documentation**]({{ '/manual/' | relative_url }}) - you will want to have the **[Editor User Manual]({{ '/manual/editorusermanual/' | relative_url }})**, **[Getting Started with 3D Avatars]({{ '/manual/gettingstarted3d/' | relative_url }})**, and **[Technical Documentation]({{ '/manual/technicalreference/' | relative_url }})** close by. For additional reference, you may want to view the FaceRig **[documentation](https://drive.google.com/file/d/0B9A2HzJCWwFWYnN6SFRPbW1mRWM/view)** as well. The below steps will point you to specific sections of each document that contain pertinent information. 

If you have any issues or questions, you can always reach out to us at **[support@animaze.us](mailto:support@animaze.us)** or join our Discord **[animaze.tv/discord](https://animaze.tv/discord)**. We’ll be happy to help you!

Note that we have marked steps as **required**, **recommended**, or **optional**:

- **Required** steps must be completed for your avatar to function properly within Animaze
- **Recommended** steps should be completed to maintain your avatar’s look and feel
- **Optional** steps utilize new features of Animaze and the .avatar format to improve the quality of your avatar

# **Step 1: Update Your Textures:**

The first step is updating your avatar’s textures in the programs that you used to create the avatar. Make sure you reference the **[Textures and Materials]({{ '/manual/technicalreference/texturesandmaterials/' | relative_url }})** section of the Animaze documentation to familiarize yourself with this system.

- **\[Required\] - Adjust Specular Map**: Adjust your avatar’s specular map. Unlike Facerig, Animaze does not use the alpha channel for specular maps. Adjust the intensity and spread of your avatar’s textures by modifying the Red channel (for spread) and Green channel (for intensity) instead.

- For more information on using Red and Green channels in Animaze, see the Specular Mapping section of **[Textures and Materials]({{ '/manual/technicalreference/texturesandmaterials/' | relative_url }})**

- **\[Recommended\] - Add New Textures for Subsurface Scattering, Translucency, and Normal Maps**: Create new textures for subsurface scattering, translucency, and normal maps per the guidelines in the Animaze documentation.

- For more information on using subsurface scattering, translucency, and normal maps, see **[Textures and Materials]({{ '/manual/technicalreference/texturesandmaterials/' | relative_url }})**

- **\[Recommended\]  - Update Alpha Paint Information**: If the avatar has fur and vertex color information on the mesh, the alpha paint information in the vertices must be redone:

- The geometry that contains fur must be exported with the following Vertex Color info:

- Alpha Paint controls the fur length factor (paint this info in vertex color.)
- See the fur section of **[Textures and Materials]({{ '/manual/technicalreference/texturesandmaterials/' | relative_url }})** section of our documentation for more information

- **\[Optional\] - Update Color Customizations**: Facerig allows two color customizations per material: RGB channel and Alpha channel. Animaze allows for 4 color customizations per material: each of the RBG \+ A channels can be used individually.

- If your Facerig avatar utilizes color customizations, you can update the customization options in the Animaze Editor, applying a single customization to each of the RBG\+A channels to increase the total number of available color customizations.
- See **[Textures and Materials Section]({{ '/manual/technicalreference/texturesandmaterials/' | relative_url }})** of our technical documentation and the **[Color Customization]({{ '/manual/editorusermanual/mainpanels/' | relative_url }})** options section of the Animaze Editor Manual for more information

# **Step 2: Convert Your Avatar Files to .FBX**

Now that you’ve updated your textures, the next step is to convert your Facerig avatar’s .DAE avatar files into the .FBX format.

- **\[Required - Export Avatar files as .FBX Format\]:** Animaze uses the .FBX file format. All avatar files must be exported as .fbx to be utilized in the Animaze Editor. DAE-FBX files from Facerig avatars will not be compatible with the Editor.

- To easily convert your Facerig avatar files to .FBX, use Autodesk’s free FBX converter: **<https://www.autodesk.com/developer-network/platform-technologies/fbx-converter-archives>**

# **Step 3: Revise Your Rig**

Now you need to modify your rig to be compatible with Animaze. Complete the following steps in whatever 3D modeling & rigging software you prefer.

- **\[Required\] - Revise Joint Axes Orientation:** The most important difference between Facerig and Animaze is the joint orientation of the axes for the head and eyes. In Maya, joint rotation axes are oriented as follows:

- in Facerig y axis points forward, z on the side, x vertically
- in Animaze z axis points forward, y on the side, x vertically

- **\[Required - Revise Head/Eye Joint Z Axis\]:**  For the avatar’s eyes, the z axis of the eye joint must pass through the middle of the pupil.

- All the animations containing the eye joints will have to be reconstructed to adhere to the new axis orientations

# **Step 4: Update Your Animations**

The final step is to update your avatar’s animations to be compatible with Animaze. Complete the following steps in the same program that you used to modify your rig.

- **\[Required\] - Split up Left-Right \+ Up-Down Animations:**

- In Facerig, Left-Right animations contain both left and right movements in the same animation. For example, in Facerig a Head LR animation would start from frame 0 with the head rotated to the left, at frame 15 the head is in the idle position (center), and at frame 30 the head would be turned all the way to the right.
- In Animaze, all left-right and up-down animations are divided by direction (i.e. instead of Head LR being a single animation, there are two animations: Head L and Head R). Each animation moves a bone in one direction - left, right, up, or down. The only exception is the tongue movement, which has 2 animations: Tongue LeftRight and Tongue Up-Down

- **\[Required - Update Animation Naming Conventions\]:** Naming conventions are changed for most animations
- **\[Required - Include Keys in All Base Animations\]**: All base animations must contain keys at frame 0 on all joints. The 4 base animations are Idle1, MouthOpen, MouthOpen\\_TongueOut, and MouthClosed\\_TongueOut.
- **\[Optional\] - Add New Animations**: Animaze includes new animations that help increase the avatar's expressiveness. You can add support for these new animations when converting your Facerig avatar to Animaze.

- For a detailed list animations that Animaze supports, see \[Link to Animation Appendix\]

- **\[Optional\] - Include Special Actions**: Special Actions: In Animaze, there are no required naming conventions for special actions. You can name your special action animations whatever you want

# **Step 5: Import Your Avatar into the Animaze Editor**

Congratulations! Now you are ready to import your avatar into the Animaze Editor! If you need help on installing the Animaze Editor, you can follow the steps described [here]({{ '/manual/editorusermanual/steameditor/' | relative_url }}).

The Editor will enable you to test and debug your avatar, and import it into the Animaze App. 

To import your avatar into the Animaze Editor, follow the steps in our 3D **[Avatar Importing Guide]({{ '/manual/gettingstarted3d/importavatar3d/' | relative_url }}).**

### Converting Avatars from Facerig to Animaze

- [Converting Live2D Avatars from Facerig to Animaze]({{ '/manual/convertavatars/convert2davatar/' | relative_url }})
- [Converting 3D Avatars from Facerig to Animaze]({{ '/manual/convertavatars/convert3davatar/' | relative_url }})
- [Debugging your Live2D avatar in the Animaze Editor]({{ '/manual/convertavatars/convertdebugging/' | relative_url }})
