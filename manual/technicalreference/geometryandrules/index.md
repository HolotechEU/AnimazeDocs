---
layout: page
title: "Geometry and Rules"
source_url: https://www.animaze.us/manual/technicalreference/geometryandrules
---

# Geometry and Rules

The Animaze systems currently support only .FBX as input format for geometry and animations,  with these being in separate files. Geometry kept in a single file, while each animation also exported into a single file.

The Animaze systems do not support multiple animation clips in a single .FBX file. Future releases of the Animaze Editor will support various 3D geometry and animation formats.

### Rules:

- use the Z axis as the forward axis of the 3D model, it helps a lot with computations done by procedural animation systems in Animaze.
- separate shells/elements (non-connected surfaces) are permitted; open surface is permitted (this way more materials can be used when having sub-components of the initial mesh).
- for a sense of scale, the height of the avatar should be 1 unit in the metric system.
- the polygonal surfaces must have the transformation reset to identity. That means their axis should be aligned to the world axis, the position should be 0,0,0 and the scale should be neutral (1,1,1 or 100,100,100 depending of the software defaults).
- texture source formats: .jpg, .png, .tga and .bmp. Textures are transformed to .ktx format (by default with the ETC2 compression), so they can be used cross platform.
- no overlapping materials – make sure that none of the textures overlap in UV space
- the eye bone axis must have the Z axis passing through the center of the avatar’s pupil
- having separate geometries for body and head is more efficient to work with, but it really depends on the type of model and the purpose of its design.

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
