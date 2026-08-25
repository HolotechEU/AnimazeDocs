---
layout: page
title: "Motion Output Parameter List"
source_url: https://www.animaze.us/manual/gettingstarted2d/motionoutput
---

# Motion Output Parameter List

last revision on Sept 29 2021

This document is a detailed list of the motion output parameters available to you, the avatar creator for custom-animating your avatars in Animaze. You will likely want to refer to this list to custom-map aspects like Hand Motion from Ultraleap (Leap Motion) on your custom Live2D avatar (and more).

Depending on the animation standard and avatar technology you use, all (or just some) of the output parameters listed below will be auto-mapped to your avatar’s available motion inputs - the inputs that you have built and surfaced in your avatar.

If you want more control and do not want to use the automatic mapping, you’ll want to use the list below and the [Retargeting Overrides]({{ '/manual/gettingstarted2d/live2dretargetingoverrides/' | relative_url }}) in the [Animaze Editor](https://www.animaze.us/editor) to make your own custom choices.

Please note that the motion output parameter list below (long as it may be), is a simplification of all the total data Animaze normally gets from the tracker modules. This is why more complex aspects (especially the ones related to full-body motion capture retargeting on full 3D avatars) will only be achievable with high accuracy with automatic mapping.

The current auto-presets per type of avatar technology are:

**For** [**Live2d avatars in Animaze**]({{ '/manual/gettingstarted2d/paramlist/' | relative_url }})

- Default Animation Standard (simpler, most used currently)
- Extended Animation Standard (more complex)

**For** [**VRM avatars in Animaze**]({{ '/manual/vrmavatar/vrmanimations/' | relative_url }}) you have

- VRoid VRM Animation Standard (simpler)
- Perfect Sync Animation standard (more complex)

**For** [**Ready Player Me**]({{ '/manual/readyplayerme/readyplayermeeditor/' | relative_url }}) you have the

- Ready Player Me Animation Standard (a lot like PerfectSync)

**For** [**Animaze-native**]({{ '/manual/animationappendix/' | relative_url }})you have the

- Native Animaze Standard  (arguably the most complex, but produces the most nuanced results).

**Note:** Right now Retargeting Overrides have been enabled only for Live2D avatars.  We’re working on surfacing this functionality for all types of avatars at a later date.

## **Mapping Premises**

Most of these motion output parameters are on a simple linear intensity scale that goes from

- 0% (corresponding to the neutral position)  to
- 100% (max intensity).

A sub-set of them are “**centered range**” type parameters: linear intensity but whose neutral value is in the middle of the range  (50% of the way)  and they can go to max “left” or max “right” as they go to 0% or 100% from the center.

Some of these are tracked by one tracker (like the webcam face tracker or iPhone Arkit), some by a combination of trackers (video plus audio), and some are sourced from various computer peripherals (keyboard, mouse, controller etc).  Some are tracked from more exotic sensors like the Ultraleap (formerly Leap Motion) hand tracker. Some, like ears, are inferred from the behavior of other tracking inputs.

Below we list the names by which you will see them in the drop-down list from the Animaze Editor, in the Retargeting Overrides section. These names may appear a bit cryptic at first sight, but they will make a lot more sense if you keep in mind:

- L- usually means Left
- R- usually means Right
- U- usually means Up
- D- usually means Down
- LR: usually means a “centered range” type parameter covering Left to Right.
- UD: usually means a “centered range” type parameter covering Up to Down.

This documentation will evolve base on feedback from you, the creators. A lot of the names in this list we consider self-explanatory but, if they are not, then for sure we will add more explanations.  For any clarification don’t hesitate to reach out to support via email or Discord,

## **Available “Retargeting Overrides” Parameter List**

**Head Rotations**

- HeadPitch -Head pitch rotation, centered range parameter.
- HeadYaw, - Head yaw rotation, centered range parameter.
- HeadRoll  -  Head roll rotation, centered range parameter.

#### **Upper Body Rotations & up/down Stretch** (inferred from head 3D position)

- BodyPitch -Upper Body pitch rotation, centered range parameter.
- BodyYaw - Upper Body yaw rotation, centered range parameter.
- BodyRoll - Upper Body roll rotation, centered range parameter.
- BodyUpDown - for hunching down or straightening the spine to make the head go higher or lower.

*Note that additional whole body translation motions can be generated on the avatar’s body via the Enhanced Body Motions Option in the App’s Overrides Settings.*   
*These bespoke translation options are not available as inputs in Retargeting Overrides (at least for now)*

#### **Mouth**

- MouthSmileUnsure - mouth stretches to the sides, corners go slightly down, like a mouth frown
- MouthStretch, - this is in for legacy reasons/prototyping reasons
- MouthSmileL, - half-smile, left.
- MouthSmileR - half-smile, right.
- MouthUnsureL - mouth frown left
- MouthUnsureR - mouth frown right
- MouthMoveUp, - mouth moves “up” on the face (typically pushed up by a stiffened lower lip)
- MouthOpen, - the degree of openness of the inner lip contour. Legacy input, use JawDrop.
- JawDrop - The degree to which the jaw is moving down from the shut position.
- PursedLips, - the amount of pursed/puckered lips
- PursedLipsLR, - asymmetric pursed/puckered lips offset to left or right - centered range parameter
- MouthUnveiledTeeth, - upper teeth being unveiled by a retracted upper lip
- MouthUnveiledTeethDown, - lower teeth being unveiled by a retracted lower lip.
- MouthUpperLipMBP, - lips pressed together.
- MouthSmileWithTeethCovered - self explanatory
- JawLR, - Jaw movement left-right; centered range parameter.
- JawF, - Jaw being driven forward/ protruding jaw.
- NoseWrinklerU, -  typically like a “snarl”
- NoseWrinklerD, - trying to stretch the lower part of the nose down by moving the upper lip as low as it can go.

#### **Eyebrows**

- BrowIntLeftU  - interior of the left eyebrow, up intensity
- BrowIntLeftD,  - interior of the left eyebrow, up intensity
- BrowIntRightU,  - iInterior of the right eyebrow, up intensity
- BrowIntRightD,  - interior of the right eyebrow,  down intensity
- BrowExtLeftU, - exterior of the left eyebrow, up intensity
- BrowExtLeftD,  - exterior of the left eyebrow, down intensity
- BrowExtRightU,  - exterior of the right eyebrow, up intensity
- BrowExtRightD,  - exterior of the right eyebrow, up intensity
- BrowCenterLeftUp  - Middle of the left eyebrow, down intensity.
- BrowCenterLeftDow  - Middle of the left eyebrow, down intensity.
- BrowCenterRightUp - Middle of the right eyebrow, up intensity.
- BrowCenterRightDown, - Middle of the Right eyebrow, down  intensity
- BrowSqueezeInLeft, - Left eyebrow squeezing in towards the center of the face.
- BrowSqueezeInRight,  - Left eyebrow squeezing in towards the center of the face.
- BrowStrechOut - legacy parameter (equivalent to symmetrical squeeze)

**Eyes and Eyelids**

- EyeLClosed  - the degree to which the left eye is closed
- EyeRClosed, - the degree to which the right eye is closed
- EyeLSize - the degree to which the left eye appears larger due to eyelids being very open (like when the person is surprised or afraid)
- EyeRSize, - the degree to which the right eye appears larger due to eyelids being very open (like when the person is surprised or afraid)
- EyeLSquint, - degree of squint on the left eye  (also engaging the lower eyelid)
- EyeRSquint, - degree of squint on the right eye  (also engaging the lower eyelid)
- EyeLPupPosX, - left eye pupil/iris position on the X axis (horizontal). Centered range
- EyeLPupPosY, - left eye pupil/iris position on the Y axis (vertical). Centered range
- EyeRPupPosX,- right  eye pupil/iris  position on the X axis (horizontal). Centered range
- EyeRPupPosY, - right eye pupil/iris position on the Y axis (vertical). Centered range
- EyePupilDilate, - Eye pupil size

**Tongue**

- TongueOut - Degree to which the tongue is sticking out.
- TongueLR, -  Centered range param.
- TongueUD, - Centered range param.

**Cheeks**

- PuffCheekL
- PuffCheekR

**Arms**

The arms, hands, and fingers parameters had to be simplified a lot when compared to the raw data coming from the tracker. Note the parameters that move the arms still have the sub-string “hand” in them, but these still do refer largely to arms. The reason they contain the word ”hands” is that the end position of the palm is what is driving most of the arm motion in 3D space via Inverse Kinematics.  
Motions (up down left right) here are relative to the shoulder joint.

- HandR\\_LR
- HandR\\_UD,
- HandR\\_CloseFront, - Centered range parameter, back to front.
- HandR\\_NaturalPose, - Right arm alongside the body with the elbow bent at 90 degrees  and forearms pointing forward at 0%, and straight arms alongside the body at 100%
- HandL\\_LR,
- HandL\\_UD,
- HandL\\_CloseFront,  - Centered range parameter, back to front.
- HandL\\_NaturalPose,- Right arm alongside the body with the elbow bent at 90 degrees  and forearms pointing forward at 0%, and straight arms alongside the body at 100%

**Hands**

Palm of the hand, beyond the wrist.

Most motions are relative to the wrist.

- HandR\\_SoloLR  - r hand rotating left-right around the wrist. centered range parameter
- HandR\\_SoloUD, - r hand rotating up down around the wrist. centered range parameter
- HandR\\_SoloTwist, - Rotating the forearm and hand (rotating the wrist)
- HandL\\_SoloLR,  - left hand rotating left-right around the wrist. centered range parameter
- HandL\\_SoloUD, - left hand rotating up down around the wrist. centered range parameter
- HandL\\_SoloTwist - Rotating the forearm and hand (rotating the wrist)

**Fingers**

This is the degree to which the fingers are curled. Not curled at all means extended.

The count starts from the thumb moving through the finger in order till the pinkie.

- HandR\\_Finger1
- HandR\\_Finger2,
- HandR\\_Finger3,
- HandR\\_Finger4,
- HandR\\_Finger5,
- HandL\\_Finger1,
- HandL\\_Finger2,
- HandL\\_Finger3,
- HandL\\_Finger4,
- HandL\\_Finger5,

**Visimes**

[Standard visime shapes]({{ '/manual/animationappendix/visemes/' | relative_url }}),

- Viseme\\_AA
- Viseme\\_AH,
- Viseme\\_AO,
- Viseme\\_AW,
- Viseme\\_OY,
- Viseme\\_EH,
- Viseme\\_IH,
- Viseme\\_EY,
- Viseme\\_Y,
- Viseme\\_R,
- Viseme\\_L,
- Viseme\\_W,
- Viseme\\_M,
- Viseme\\_N,
- Viseme\\_CH,
- Viseme\\_FV,

**Ears**

These are not tracked directly.

- EarLeft\\_U
- EarLeft\\_D,
- EarRight\\_U,
- EarRight\\_D,

**Windows Pointer Device** (Mouse and Stylus)

- MouseAndStylus\\_X  - horizontal position on screen.
- MouseAndStylus\\_Y, - vertical position on screen.
- MouseAndStylus\\_LeftClick,
- MouseAndStylus\\_RightClick,
- MouseAndStylus\\_Scroll,
- MouseAndStylus\\_Inclination, - reserved, but not yet implemented
- MouseAndStylus\\_Pressure,   - reserved, but not yet implemented.

**Keys on the Keyboard**

These are values meant to be driven by tracking keyboard activity, to simulate avatar typing.

- Keyboard\\_LHand\\_X  - Left hand position on the surface of the keyboard - horizontal
- Keyboard\\_LHand\\_Y, - Left hand position on the surface of the keyboard - vertical
- Keyboard\\_RHand\\_X, - Right hand position on the surface of the keyboard - horizontal
- Keyboard\\_RHand\\_Y,- Right hand position on the surface of the keyboard - vertical
- Keyboard\\_HandR\\_Finger1, - Finger from “ relaxed”  to “ pushing the key right below”
- Keyboard\\_HandR\\_Finger2, - Finger from “ relaxed”  to “ pushing the key right below”
- Keyboard\\_HandR\\_Finger3, - Finger from “ relaxed”  to “ pushing the key right below”
- Keyboard\\_HandR\\_Finger4, - Finger from “ relaxed”  to “ pushing the key right below”
- Keyboard\\_HandR\\_Finger5, - Finger from “ relaxed”  to “ pushing the key right below”
- Keyboard\\_HandL\\_Finger1, - Finger from “ relaxed”  to “ pushing the key right below”
- Keyboard\\_HandL\\_Finger2, - Finger from “ relaxed”  to “ pushing the key right below”
- Keyboard\\_HandL\\_Finger3, - Finger from “ relaxed”  to “ pushing the key right below”
- Keyboard\\_HandL\\_Finger4, - Finger from “ relaxed”  to “ pushing the key right below”
- Keyboard\\_HandL\\_Finger5, - Finger from “ relaxed”  to “ pushing the key right below”

**Gamepad Input**

- Gamepad\\_Button\\_A
- Gamepad\\_Button\\_B,
- Gamepad\\_Button\\_X,
- Gamepad\\_Button\\_Y,
- Gamepad\\_Button\\_BACK,
- Gamepad\\_Button\\_GUIDE,
- Gamepad\\_Button\\_START,
- Gamepad\\_Button\\_LEFTSTICK,
- Gamepad\\_Button\\_RIGHTSTICK,
- Gamepad\\_Button\\_LEFTSHOULDER,
- Gamepad\\_Button\\_RIGHTSHOULDER,
- Gamepad\\_Button\\_DPAD\\_UP,
- Gamepad\\_Button\\_DPAD\\_DOWN,
- Gamepad\\_Button\\_DPAD\\_LEFT,
- Gamepad\\_Button\\_DPAD\\_RIGHT,
- Gamepad\\_Button\\_MISC1,    /\\* Xbox Series X share button, PS5 microphone button, Nintendo Switch Pro capture button \\*/
- Gamepad\\_Button\\_PADDLE1,  /\\* Xbox Elite paddle P1 \\*/
- Gamepad\\_Button\\_PADDLE2,  /\\* Xbox Elite paddle P3 \\*/
- Gamepad\\_Button\\_PADDLE3,  /\\* Xbox Elite paddle P2 \\*/
- Gamepad\\_Button\\_PADDLE4,  /\\* Xbox Elite paddle P4 \\*/
- Gamepad\\_Button\\_TOUCHPAD, /\\* PS4/PS5 touchpad button \\*/

That’s the whole list for now!

### Importing Live2D Format Models

- [Steps in creating your own 2D avatar]({{ '/manual/gettingstarted2d/stepsincreatingyourown2davatar/' | relative_url }})
- [What is Animaze and what is the “.avatar” format?]({{ '/manual/gettingstarted2d/animazeintro/' | relative_url }})
- [Live2D Model Requirements & Animation Standards]({{ '/manual/gettingstarted2d/paramlist/' | relative_url }})
- [Motion Output Parameter List]({{ '/manual/gettingstarted2d/motionoutput/' | relative_url }})
- [Live 2D Model Creation Process for Complex Mouth Geometries]({{ '/manual/gettingstarted2d/complexparam/' | relative_url }})
- [Getting started - Import Live2D model in Animaze Editor]({{ '/manual/gettingstarted2d/gettingstarted/' | relative_url }})
- [Change the avatar details (icon, description & name)]({{ '/manual/gettingstarted2d/changeavatardetails/' | relative_url }})
- [Change the rendering options]({{ '/manual/gettingstarted2d/changerendering/' | relative_url }})
- [Remap avatar animation inputs]({{ '/manual/gettingstarted2d/remapanimations/' | relative_url }})
- [Live2D Retargeting Overrides]({{ '/manual/gettingstarted2d/live2dretargetingoverrides/' | relative_url }})
- [Configure avatar Special Actions & Special Poses]({{ '/manual/gettingstarted2d/specialactions/' | relative_url }})
- [Frame the avatar]({{ '/manual/gettingstarted2d/frameavatar/' | relative_url }})
- [Quickly modify a texture on your avatar]({{ '/manual/gettingstarted2d/modifytexture/' | relative_url }})
- [Expressions debugging - Avatar Puppeteering]({{ '/manual/gettingstarted2d/expressiondebugging/' | relative_url }})
- [Create an \\*.avatar bundle]({{ '/manual/gettingstarted2d/createavatarbundle/' | relative_url }})
- [Import an \\*.avatar bundle in Animaze PC app]({{ '/manual/gettingstarted2d/importbundle/' | relative_url }})
- [Import Your Live2D Models in Animaze PC]({{ '/manual/gettingstarted2d/importlive2d/' | relative_url }})
- [Send your avatar to Animaze Avatar iOS app]({{ '/manual/gettingstarted2d/sendavatar/' | relative_url }})
- [Leap Motion Hand Sensors with Live2D avatars]({{ '/manual/gettingstarted2d/leaplive2d/' | relative_url }})
- [Dive into Documentation]({{ '/manual/gettingstarted2d/diveinto/' | relative_url }})
- [Create your own 2D avatar]({{ '/manual/gettingstarted2d/createyourown/' | relative_url }})
- [Troubleshoot & Support]({{ '/manual/gettingstarted2d/troubleshootandsupport2deditor/' | relative_url }})
