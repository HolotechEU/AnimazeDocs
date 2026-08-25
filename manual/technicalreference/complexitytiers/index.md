---
layout: page
title: "Avatar complexity tiers"
source_url: https://www.animaze.us/manual/technicalreference/complexitytiers
---

# Avatar complexity tiers

Let’s start with 3D avatars.

The 3D avatar models and the Props contain different numbers of polygon faces. The more detailed the object is (highpoly-model), the more computational power it will need to be displayed and animated.

Remember, in an \\***.avatar** container file you can put multiple types of avatar content. Sure, mostly you will find there 3D characters/avatars, but an Animaze \\***.avatar** container file can also hold Props (hats, glasses etc.), backdrops (3D/2D), 2D avatars (currently using Live2D technology) or hybrid avatars.

Depending on the use-case you envision for your avatar (mainly used in a face-cam scenario, on mobiles or on desktops) it can have varying degrees of complexity.

To make things easier, we are defining for you several complexity tiers for 3D avatars:

![Complexity tiers for 3D avatars for Animaze by Facerig]({{ '/assets/images/1_1-2a5bf937.png' | relative_url }} "Animaze 3D avatars"){: width="530" height="416"}

![Supported shading in Animaze by Facerig]({{ '/assets/images/2_1-a0b1a212.png' | relative_url }} "Animaze 3D avatars"){: width="530" height="587"}

![Complexity by performance]({{ '/assets/images/3_1-e3fe3000.png' | relative_url }} "Animaze 3D avatars"){: width="530" height="671"}

![Complexity by download size]({{ '/assets/images/4_1-bac584c1.png' | relative_url }} "3D avatar chart"){: width="530" height="496"}

There is an extra avatar Tier, namely the hybrid avatar, which consists in the combination of 2D with 3D world. You can find more information on it **[here]({{ '/manual/hybriddoc/' | relative_url }})**.

We will update this document on a regular basis, anytime notable changes arise and need to be publicly shared.

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
