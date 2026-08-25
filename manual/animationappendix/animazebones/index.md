---
layout: page
title: "Bones"
source_url: https://www.animaze.us/manual/animationappendix/animazebones
---

# Bones

The Animaze system maps the animations on these bones, with the specific naming, as shown in the picture below.

On this **[link](https://drive.google.com/drive/u/1/folders/1Mjz-zuOlCpcejA58ZNrMbR7krUpPMRvQ)** we provide a simple humanoid rig, that you can use as a reference, or simply build your avatar on it, and adjust it according to your avatar design and needs. You can either delete or add bones. It contains prop bones as well, and the correct naming.

![Rig Your Own Avatar with Animaze]({{ '/assets/images/Full_skel_names_and_hierarchy1-75286a78.png' | relative_url }} "Animation Appendix Bones"){: width="620" height="611"}

A base skeleton rig, for both types of avatars ([all-joint based & all-joint plus blendshapes based]({{ '/manual/technicalreference/animation/' | relative_url }})) must include these bones: **BipHead**, **BipRoot**, **BipLEye**, **BipREye** & **Camera**, with this exact naming.

For functions such as **look-at-camera**, **hands tracking** and **full-body tracking** (coming soon) to work, they must keep the mandatory naming.

The **Camera** and **BipHead** bones must have **their respective Z axis pointing to one another** after import in the Animaze Editor. It's possible that the way that the model is being handled and the axis conventions from the 3D software that generates the animation, to differ from the same features of Animaze, and thus the Z axis actually be Y or X in that original space.

**Each bone of the eyes must be placed in center position of the eyeball, and their forward axis (blue line) must run through the center of the pupil.** This will guarantee that the avatar will be looking at the camera and will follow it when moved.

![Rig Your Own Avatar with Animaze]({{ '/assets/images/2z-81867be3.png' | relative_url }} "Animation Appendix Bones"){: width="620" height="518"}

**Here is a helper-list for the bones naming:**

BipHead

BipNeck

BipRClavicle

BipRUpperArm

BipRForearm

BipRArm

BipRHand

BipRFinger0

BipRFinger01

BipRFinger02

BipRFinger1

BipRFinger11

BipRFinger12

BipRFinger2

BipRFinger21

BipRFinger22

BipRFinger3

BipRFinger31

BipRFinger32

BipRFinger4

BipRFinger41

BipRFinger42

BipLClavicle

BipLUpperArm

BipLForearm

BipLArm

BipLHand

BipLFinger0

BipLFinger01

BipLFinger02

BipLFinger1

BipLFinger11

BipLFinger12

BipLFinger2

BipLFinger21

BipLFinger22

BipLFinger3

BipLFinger31

BipLFinger32

BipLFinger4

BipLFinger41

BipLFinger42

BipSpine3

BipSpine2

BipSpine1

BipSpine

BipRoot

BipRThigh

BipRCalf

BipRFoot

BipRToe

BipLThigh

BipLCalf

BipLFoot

BipLToe

When the bones are not named as above, use the re-mapping configurators within the Animaze Editor to match them accordingly.

![Rig Your Own Avatar with Animaze]({{ '/assets/images/leapboneconfig-20ac70d6.png' | relative_url }} "Animation Appendix Bones"){: width="800" height="423"}

**Prop bones** represent the bones meant for accessories attachment. These bones are used in Animaze to place objects on the avatar, and they will hold the suffix *Prop (i.e. BipGlasses\\_Prop used for glasses, BipHat\\_Prop, BipMustache\\_Prop*).

![Rig Your Own Avatar with Animaze]({{ '/assets/images/4z-d3a5676c.png' | relative_url }} "Animation Appendix Bones"){: width="800" height="419"}

Don’t forget to check the **[Rigging]({{ '/manual/3davatar/3drigging/' | relative_url }})** section for 3D objects, for more details.

### FBX Format Model - Animations & Blendshapes Appendix

- [About]({{ '/manual/animationappendix/appendixabout/' | relative_url }})
- [Skeletal Animations]({{ '/manual/animationappendix/skeletalanimations/' | relative_url }})
- [Blendshape animations]({{ '/manual/animationappendix/blendshapeanimations/' | relative_url }})
- [Visemes]({{ '/manual/animationappendix/visemes/' | relative_url }})
- [Bones]({{ '/manual/animationappendix/animazebones/' | relative_url }})
- [ARKit Facial Animations]({{ '/manual/animationappendix/arkitfacialanimations/' | relative_url }})
