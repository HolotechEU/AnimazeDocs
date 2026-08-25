---
layout: page
title: "Backgrounds"
source_url: https://www.animaze.us/manual/technicalreference/backgrounds
---

# Backgrounds

Animaze supports adding new backgrounds or complex scenes, with support for various features that help with building a comprehensive environment:

1. ## 3D props and models

- anything from a simple table or chair, to a fully modelled 3D room.
- the Animaze Editor offers simplistic level editing tools that enable prop placement and complex arrangements

2. ## Lights setup

- the set-up can be created only in Animaze Editor
- light types: directional, point and spot
- lights are limited to 4. The AnimazeShader that renders everything only takes into account 4 such lights, the rest are ignored.
- Ambient Cube sets a separate ambient color for each face of a cube or each direction (X, -X, Y, -Y, Z, -Z). Ambient Cube colors are modulated with the Global Ambient Color and factorized by Ambient Intensity.

3. ## Skybox

- Animaze can import HDRI (.hdr) cubes that are translated to Animaze friendly cubes
- Skyboxes can be customized with an ambient light that shade the characters and props even if there is no light setup available.
- Skyboxes can also be set to a specific solid color, for a greenscreen scenario. The advantage of this option is that you can blend the character on anything, while still retaining the proper reflections.

4. ## Avatar spawn points

- Animaze supports adding specific spawn points for avatars. Once spawned the avatar will be automatically translated and rotated to the spawn point. This is extremely helpful for complex scenes, such as a podcast room where the avatar needs to be place and orientated toward the podcast desk.

Future developments include supporting simple 2D backgrounds.

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
