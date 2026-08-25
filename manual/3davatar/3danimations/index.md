---
layout: page
title: "Animations"
source_url: https://www.animaze.us/manual/3davatar/3danimations
---

# Animations

Animations should be exported in .fbx format, in the \\Animations folder of the avatar.

As a rule, the **geometry must be** **exported together with the skeleton** in the geometry **\\*.fbx** file of the model, placed outside of the Textures and Animations folders (AvatarLily.fbx in the example below). In all the other animations, the geometry is not needed.

![Folder structure]({{ '/assets/images/fbx_lily-8544797e.png' | relative_url }} "Rig Your Own Avatar with Animaze"){: width="290" height="116"}

If the model contains Blendshapes, then they must be exported in the geometry **\\*.fbx** file, as well. So, when importing your model in Animaze Editor, if they have been named according to our [Animation Appendix]({{ '/manual/animationappendix/blendshapeanimations/' | relative_url }}), the system will create a Blendshape folder for them, as below.

![Folder structure]({{ '/assets/images/fbx_lily_blendshape-3ff8658c.png' | relative_url }} "Rig Your Own Avatar with Animaze"){: width="290" height="251"}

**All base animation must be exported with animation keys on ALL bones. The base animations that we use are:**

- **idle1**- is the base animation in which the avatar has micro movements and breathes, the arms are near the body
  - **idlePose** - this is the first frame key from **idle1** animation. All other animations are built starting from this pose.
- **MouthOpen** - starts from idle pose animation. The last frame of this animation is the base for all other mouth open animations.
- **MouthOpen\\_TongueOut**
- **MouthClosed\\_TongueOut**
- **Tpose -** animation used in full-body tracking

**Mind that all the base animations must be exported with the whole skeleton (pic below, avatarLily’s skeleton), while all the other animations must be exported only with the bones that are moving (have animation keys).**

**![Avatar skeleton]({{ '/assets/images/Lily_full_skel_export_in_all_base_anims-9b7a82a0.png' | relative_url }} "Rig Your Own Avatar with Animaze"){: width="420" height="398"}**

When you are creating the animations, try to exaggerate expressions, because tracking will never do 100% of the animation. All the animations must be export selected, linear animations (a nonlinear animation - meaning that the animation is playing in different paces when enabled - could interfere with the tracking and cause issues).   

Before exporting the animation, you should reduce the middle bones to 50%, else they will double transform in AnimazeEditor for each side of the animation, left & right.

**There are 2 ways to animate the character:**

1. **Pure-joint based animations** – all animations use the skeleton bones
2. **A combination of joint-based animations with blendshapes animations**

### 

### 1 Skeletal Animation (all joint based)

This technique is represented in two parts: a surface representation used to draw the character (called skin or mesh) and a hierarchical set of interconnected bones (called the skeleton or rig) used to animate (pose and keyframe) the mesh.

Each bone has a three-dimensional transformation from the default bind pose (which includes its position, scale and orientation), and an optional parent bone. The bones therefore form a hierarchy. The full transform of a child node is the product of its parent transform and its own transform.

Animaze uses what we call animation atomics retargeting method, which implies that all required animations need to modify or animate a specific (typically small) part of the avatar. All the tracked movement (from a facial tracker) is split into very simple motions, which are called atomics. Each atomic is driven separately and combined (in many cases additively) to build a complex expression.

For instance, if you are making the frown animation for the left eyebrow, named LeftEyebrow\\_D, then the only bones moving in that animation should be the middle and inner bones of the left eyebrow, all the rest should have the same exact transformation of their base animation, which is idle1. Any offset in the additive animations brings a pose offset in Animaze. For example, if an eyebrow animation brings an offset to the neck, every time the avatar will move that eyebrow, it will also transform the neck.

First animation to be created should be idle1. From this animation, extract the first frame and export it in a \\*.fbx file together with the skeleton containing keys on every bone - this is now the idlePose. From this position on, create all the other animations, for example:

**\>\>** from **idlePose** position create the **Avatar\\_F** animation. In this animation the avatar bends forward, so only the bones that bend the avatar must contain animation keys.  Just these bones must be exported in this .fbx animation (”export selected” function in Maya).

![Avatar skeleton]({{ '/assets/images/AvatarF_animation_export-c6c68588.png' | relative_url }} "Rig Your Own Avatar with Animaze"){: width="340" height="580"}

**\>\>** another example is **MouthOpen** animation and the ones that emerge from it (MouthOpen\\_PursedLips etc). Likewise, the first frame in this animation is **idlePose**, while in the last frame (end of the animation), the avatar will open its mouth. As stated, being a base animation, it will have to be exported with the whole skeleton.

Basically, all additive animations have as base animation **idle1** animation, or to be precise, they take reference the last percentage of that animation (**idlePose**).

**There are some exceptions to this rule:**

- Animation for tongue while the tongue is sticking out. These are based on **MouthOpen\\_TongueOut**, which is also added on **idle1** animation. These animations are: **MouthOpen\\_TongueOut\\_LR and MouthOpen\\_TongueOut\\_UD.**
- Animation for tongue while only the tip of the tongue is out: **MouthClosed\\_TongueOut** which is also added on **idle1** animation. These animations are: **MouthClosedTongueOut\\_LR, MouthClosed\\_TongueOut\\_UD.**

Animaze supports some procedural animations that need reference bones in the skeleton. One of these animations is the “**look-at-**” function, that makes the avatar gaze into the camera.

**This feature relies on the transformation of the BipHead** **bone**, needed in the skeletal hierarchy. It’s used to guide the axis and it will only be exported to basic geometry and animation **idle1**.

Procedural animation techniques and actions are also used to substitute for lack or poor tracking of certain features and user movements:

- Crossed eyes correction
- Lazy eye correction
- Look at camera behavior
- Orientate head to camera behavior
- Auto blinking behavior
- Avatar idle animation (we animate certain parts of certain avatars regardless of tracking input to make them feel more alive, like how Fluffo’s ears occasionally twitch)
- Natural pupil behavior (small micro movements undetectable by current tracking technologies)
- Triggerable special animations (puffed cheeks, tongue & other custom animations e.g. fist bumps, waves, dances can be created and tied to key-presses)

### 

### 2 Joint-based animations combined with blendshape animations

There are two use cases for this type of animations: 

**2.1.** **Skeletal with corrective blendshape** - The animation is skeletal, while the blendshape is a completion for more details or a correction for undesired deformations, for example when the avatar lifts the arm and the geometry isn’t behaving as you’d want to.

**2.2.** **Skeletal with blendshape animation** - Keep a base rig for general movements (head, jaw, body movements), while the transformations are blendshape based only (smile, eyebrow up animations). 

Check the Animaze animation [appendix]({{ '/manual/animationappendix/' | relative_url }}), it contains name conventions of skeletal animations, blendshape animations & visemes.

The base animations (idle1, MouthOpen\\_TongueOut etc) can be created skeletal, while the body, head, eyes and the rest can be built with blendshapes (but it’s easier to keep it skeletal).

**Animaze doesn’t support inbetween blendshapes, but it supports skeletal animations with corrective blendshapes.**

You can build the animations on a single mesh. When importing the avatar in Animaze Editor, a blendshape that contains more than one material will be split into two separate materials. 

**Blendshapes** are being imported bringing their positions, their normals and their tangent space.

The equivalent of **idle1** animation for blendshape is **NaturalPose**. Over the natural pose you can start and build your morph targets, smile, mouth open etc.

All additive blendshapes have as base **NaturalPose** blendshape, and the open/closed mouth blendshapes will be built as follows:

- these blendshapes are being built over **NaturalPose &  MouthOpen** combined: **MouthOpenLeft\\_U, MouthOpenRight\\_U, MouthOpenLeft\\_D, MouthOpenRight\\_D, MouthOpen\\_pursedLips\\_L, MouthOpen\\_pursedLips\\_Mid, MouthOpen\\_pursedLips\\_R, MouthOpenLeft\\_teethCovered\\_U, MouthOpenRight\\_teethCovered\\_U.**
- these are being built over **NaturalPose & MouthOpen\\_TongueOut** combined: **MouthOpen\\_TongueOut\\_L, MouthOpen\\_TongueOut\\_R, MouthOpen\\_TongueOut\\_U, MouthOpen\\_TongueOut\\_D.**
- these are being built over **NaturalPose & MouthClosed\\_TongueOut** combined: **MouthClosed\\_TongueOut\\_L, MouthClosed\\_TongueOut\\_R, MouthClosed\\_TongueOut\\_U, MouthClosed\\_TongueOut\\_D.**

The equivalent of **idle1** animation for blendshape is **NaturalPose**. Over the natural pose you can start and build your morph targets, smile, mouth open etc.

Here will be applied the same rules as the skeletal animation with base animations and additive animations, for example:

- you will build mouth closed smile over the NaturalPose
- you will start to build over the MouthOpen - morph target MouthOpenLeft/Right\\_U or mouth open smile (basically you start to sculpt your blendshape over the mouth open bs, which is added over the natural pose).

![](https://lh4.googleusercontent.com/BraQX95o4xvEl8_65DPGLhg3pM4uQp3oIjA-6tdS2KoKyhYp2UmAUznoTo07JeRmTkH-9MNUcvLyHscfe-_9qhgqdq6dGpFkOZXSI9k7y9s6ni_5lmhgnie6VErnDo4hTdGOtxNL){: width="850" height="66"}

As stated before, before exporting the smile animation, you should reduce middle bones to 50%, else the middle bones will double transform in AnimazeEditor for each side of the animation, left & right. See pic below:

 ![](https://lh3.googleusercontent.com/8QoiBB-unxUwi5FjFFqo3cLSzfzfvyX0PcFpmWpKCu1QHT5zDvYrqzCD758Fw5-7sgMU0rK43m-Ztr9CpqyxbMXvgh7Q2JnebZEi2yHp5YWqYexdCFWW_rPvyO4lMyevabVMmer3){: width="550" height="603"}

To do this follow these steps: 

- add keys at frame 15
- delete at frame 30
- move animation keys from 15 to 30.

And now we are ready to export the animation. Select the bones that are used to create the smile on the left side including middle bones and export it using the names from the [Documentation]({{ '/manual/animationappendix/' | relative_url }}), in this case is: MouthClosedLeft\\_U.fbx.

After that you will select the right side with middle bones and do the same thing.

![](https://lh3.googleusercontent.com/Vh1jWK9E1A2FW_1D0A0fYUuUwLE3INnrS4Yza_dDj3YvS1WNsmPC3HEht-D-s0pmda8e7GTrhjP08Q2psjoLqEApY0Z4IPi0EmW8LsftQbLwee0n0HdU0n9B6WbHr9SFPgbe-yc0){: width="400" height="438"} ![](https://lh5.googleusercontent.com/OHIyNp92V5MELpqkJ0U8WjxZv2cPMuNcJvtOC62mAZeqWEmSptA_sF1N1zsFUp-uIaLXLBR4Zb8-kYdDqQObwZ18bTtV6cveV89HIQrS968-Lf6CYGYXKMUNzgHlpA5OAIV40y3Y){: width="400" height="438"}

                                       

The flow to create the open mouth smiling animations is:

- start in idlePose
- create MouthOpen animation
- take the pose from last frame of MouthOpen animation (meaning idle1\+MouthOpen)
- from this frame create MouthOpenLeft\\_U, MouthOpenLeft\\_D, MouthOpen\\_pursedLips\\_Mid, MouthOpenLeft\\_teethCovered\\_U etc.

After you finish creating the blendshapes or animations, try to import 2 or 3 over each other to see how they will look combined in animaze app (for blendshapes, just activate more bs in the same time).

Below is a basic list of animations that combined result in 6 emotions. Use them as a guide and mind that they can be attained using other combinations as well:

**Happy**

- MouthOpenLeft/Right\\_U
- Left/RightEyeSquint
- Mouth\\_unveilledTeeth\\_U

**Surprise**

- MouthOpen
- MouthOpen\\_pursedLips\\_Mid
- Left/RightEyeWideOpen
- Left/RightBrowUp

**Angry**

- MouthOpen (partial)
- MouthOpenLeft/Right\\_D
- Left/RightBrowDown
- Nose\\_U
- Mouth\\_unveilledTeeth\\_U
- Left/RightEyeClosed  (partial)

**Sad**

- Left/RightBrowSqueezeIn
- MouthClosedLeft/Right\\_D
- Nose\\_D (partial)

**Disgust**

- Left/RightBrowDown
- Mouth\\_unveilledTeeth\\_D

**Scared**

- MouthOpen
- Left/RightEyeWideOpen
- Left/RightBrowSqueezeIn
- Nose\\_D

### 

### 

### Import your 3D avatar in Animaze Editor

After finishing all the process above, import your avatar in [Animaze Editor]({{ '/manual/editorusermanual/' | relative_url }}) for debugging purposes, fine tuning and later upload it on Storefront, if you want to. Here is the [link]({{ '/manual/gettingstarted3d/importavatar3d/' | relative_url }})  with the process flow for this import step.

### FBX Format Model - Asset Pipeline Guide

- [Steps in creating your own 3D avatar]({{ '/manual/3davatar/steps3d/' | relative_url }})
- [How to generate fur and fur mask]({{ '/manual/3davatar/generatefur/' | relative_url }})
- [How to set Fur direction and length]({{ '/manual/3davatar/furdirection/' | relative_url }})
- [Concept and High-Poly]({{ '/manual/3davatar/3dconcept/' | relative_url }})
- [Retopology]({{ '/manual/3davatar/3dretopology/' | relative_url }})
- [UV mapping]({{ '/manual/3davatar/3duv/' | relative_url }})
- [Rigging]({{ '/manual/3davatar/3drigging/' | relative_url }})
- [Skinning]({{ '/manual/3davatar/3dskinning/' | relative_url }})
- [Animations]({{ '/manual/3davatar/3danimations/' | relative_url }})
- [Physics system]({{ '/manual/3davatar/3dphysics/' | relative_url }})
- [Textures]({{ '/manual/3davatar/3dtextures/' | relative_url }})
