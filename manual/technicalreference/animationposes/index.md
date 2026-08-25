---
layout: page
title: "Visemes Animations & Expression Poses"
source_url: https://www.animaze.us/manual/technicalreference/animationposes
---

# Visemes Animations & Expression Poses

**Visemes** are animations used for **lipsync,** with each of their names representing poses accompanying the respective sounds. For example, **viseme\\_EH\\_AE** has the jaw and lips positioned as when someone is making the EH or AE sounds.

# 

#### 

Each viseme starts in idle pose and contains animation keys on the necessary bones, in the required position, to progressively reach the shape of a certain phoneme.

# 

These are the viseme animations:

# 

viseme\\_AA, viseme\\_AH, viseme\\_AO, viseme\\_AW\\_OW, viseme\\_OY\\_UH\\_UW, viseme\\_EH\\_AE, viseme\\_IH\\_AY, viseme\\_EY, viseme\\_Y\\_IY, viseme\\_R\\_ER, viseme\\_L, viseme\\_W,  viseme\\_M\\_P\\_B, viseme\\_N\\_NG\\_DH, viseme\\_CH\\_J\\_SH, viseme\\_FV.

Simple audio lipsync in Animaze system uses 3 movements: mouth open, pursed lips, and lips pressed.

If you are using 3D avatars the animations for general mouth movements are called "MouthOpen". For pursed lips, they are called "Mouth\\_pursed\\_lips" si "viseme\\_M\\_P\\_B".

If you are using a 2D model then you have to **[follow the live2d standard]({{ '/manual/gettingstarted2d/diveinto/' | relative_url }})** with parameters ParamMouthForm and ParamMouthOpenY.

The skeletal animations, blendshapes and visemes are described graphically in the in the **[Animaze Animation Appendix]({{ '/manual/animationappendix/' | relative_url }}).**

**Special Poses** are toggleable animations (on/off) that can be played by the avatar when triggering an action, a key-bind or by other means. The special poses need to be additive animation, having as reference the idle animation.

# 

Poses aren't influenced by tracking technologies, they are only triggered by users. For example, think of a helmet's visor that can have two states open and closed, this particular behavior can be achieved with special poses.

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
