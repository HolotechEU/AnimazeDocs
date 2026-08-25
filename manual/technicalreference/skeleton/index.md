---
layout: page
title: "Skeleton"
source_url: https://www.animaze.us/manual/technicalreference/skeleton
---

# Skeleton

There are 4 bones that require a specific naming in Animaze: **Camera**, **BipHead****,** **BipLEye** and **BipREye**. These bones are used in Animaze for calculations, like **look-at-camera** function, for example.

A base skeleton rig, for both types of avatars (all-joint based & all-joint plus blendshapes based) must include these bones: BipHead, BipRoot, BipLEye, BipREye & Camera, with this exact naming.

The Camera and head bones must have their respective **Z axis pointing to one another** **after import**. It's possible that the way that the model is being handled and the axis conventions from the 3D software that generates the animation, to differ from the same features of Animaze, and thus the Z axis actually be Y or X in that original space.

Each bone of the eyes must be placed in center position of the eyeball, and their forward axis (blue line) must run through the center of the pupil. This will guarantee that the avatar will be looking at the camera and will follow it when moved.

![Learn how to use Animaze by Facerig]({{ '/assets/images/1-3438c520.jpg' | relative_url }} "Animaze by Facerig"){: width="450" height="365"}

Prop bones represent the bones meant for accessories attachment. These bones are used in Animaze to place objects on the avatar, and they will hold the suffix \\_Prop (i.e. Nose\\_Prop used for glasses).

When importing your avatar in Animaze, make sure it’s oriented correctly, with Z axis forwarding towards the camera. This can be manually set in Animaze Editor if necessary.

![Learn how to use Animaze by Facerig]({{ '/assets/images/2-bc89393f.jpg' | relative_url }} "Animaze by Facerig"){: width="550" height="327"}

### .avatar format Technical Reference

- [What is Animaze and what is the “.avatar” format?]({{ '/manual/technicalreference/avatarformat/' | relative_url }})
- [Avatar complexity tiers]({{ '/manual/technicalreference/complexitytiers/' | relative_url }})
- [Geometry and Rules]({{ '/manual/technicalreference/geometryandrules/' | relative_url }})
- [Textures and Materials]({{ '/manual/technicalreference/texturesandmaterials/' | relative_url }})
- [UV Mapping]({{ '/manual/technicalreference/uvmapping/' | relative_url }})
- [Particle System]({{ '/manual/technicalreference/particlesystem/' | relative_url }})
- [Sound Effects]({{ '/manual/technicalreference/soundeffects/' | relative_url }})
- [Camera]({{ '/manual/technicalreference/camera/' | relative_url }})
- [Live2D Avatars]({{ '/manual/technicalreference/live2davatars/' | relative_url }})
- [Animation]({{ '/manual/technicalreference/animation/' | relative_url }})
- [Visemes Animations & Expression Poses]({{ '/manual/technicalreference/animationposes/' | relative_url }})
- [Special Actions]({{ '/manual/technicalreference/specialaction/' | relative_url }})
- [Deformation]({{ '/manual/technicalreference/deformation/' | relative_url }})
- [Modify Proportions]({{ '/manual/technicalreference/modifyproportions/' | relative_url }})
- [Skeleton]({{ '/manual/technicalreference/skeleton/' | relative_url }})
- [Full Body Motion Tracking]({{ '/manual/technicalreference/fullbodytracking/' | relative_url }})
- [Animaze Physics]({{ '/manual/technicalreference/animazephysic/' | relative_url }})
- [Props]({{ '/manual/technicalreference/props/' | relative_url }})
- [Backgrounds]({{ '/manual/technicalreference/backgrounds/' | relative_url }})
