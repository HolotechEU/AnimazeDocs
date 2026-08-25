---
layout: page
title: "Particle System"
source_url: https://www.animaze.us/manual/technicalreference/particlesystem
---

# Particle System

Animaze empowers you to create smoke effects, flames, clouds, magic spells and almost anything you can imagine, by adding Particle Systems in your scene, or on your model.

The Particle System Editor allows the creation of new particle systems and the editing of existing ones. Each particle system can be positioned statically in the scene or can be attached to any bone of any avatar or prop.

If the system is attached, it will follow the bone as it moves. An offset to the bone position can be added if the system needs to follow the bone at a certain distance.

Particles can use textures and 3D models as individual particles, but have a cube mesh as default so the user can focus on generation and movement straight from the beginning. When using textures, each particle behaves as a spherical billboard, facing the camera wherever it may be.

Additionally, Animaze supports binding animated textures/sprites to the particle system to give the user more artistic freedom. Each particle can also change colors dynamically, using a Color  Modifier.

### \\*\\*Generation and Lifetime of Particles\\*\\*

The Particle System has an Emitter that generates individual particles or bursts of particles and can be configured in many ways.

Features:

- Individual particles have a lifetime after which they fade away and also, the entire particle system can be set to run indefinitely or for a certain amount of time.
- The generation time between each particle and the generation of bursts is configurable. (for example, we can generate 10 individual particles per second and one burst of 20 particles every 5 seconds)
- The bursts can be further customized using the Burst Editor, which can set random bursts or bursts at designated times.
- Each Particle System can have only one emitter which has a selectable type. The Emitter type describes the volume or surface on which the particles are generated. The generation can be done from a point, line segment, circle, cone or from the surface or volume of a cube, sphere etc.
- According to the chosen Emitter type, you can edit the settings so that the cone has a larger spread, or the circle has a bigger radius etc.

For a good performance, try using around 1000 particles.

### \\*\\*Particle Color and Appearance\\*\\*

Particles can use textures and 3D models as individual particles, but have a cube mesh as default so the user can focus on generation and movement straight from the beginning. When using textures, each particle behaves as a spherical billboard, facing the camera wherever it may be.

Additionally, Animaze supports binding animated textures/sprites to the particle system to give the user more artistic freedom. Each particle can also change colors dynamically, using a Color Modifier.

Features:

- The user can choose a static color and size for each particle. Further, the Color Modifier can be used to add color transitions. The Color Modifier displays a separate Color Timeline and an Alpha Timeline, so the user is free to think about transparency more easily. The transitions happen as the particle reaches the end of its lifetime, with the first color being the initial color of the particle and the last color being the color of the particle right before it stops displaying.
- A single texture can be used for each particle. The textures also benefit from the Color Modifier or from the static color, as the specified color gives the texture that color's tint.

- If a sprite/animated texture is bound, it is necessary to specify the size of each sprite tile and the number of tiles, so that the system knows which fragment of the texture it should display.
- The speed at which the sprite runs can also be configured.

Requirements:

- The texture files need to be in .jpg, .png or .ktx format.
- The model files need to be compatible with the Prop/Avatar3D format used in Animaze.

### \\*\\*Particle Movement\\*\\*

Particle Movement is of great importance to any Particle System and Animaze gives a lot  of  freedom to alter the standard movement directions. It features along the standard speed and direction, a gravitation component and also a movement modifier component which enables movement randomization, circular motion and acceleration.

Features:

- A customizable direction emitter, so that all items can follow the same trajectory or be left moving in random directions.
- Each particle has a configurable base speed, weight (useful if using gravitation) and a direction (set in the emitter).
- Particle rotation is also possible around a specified axis or while facing the camera (please note that the two options exclude each other).
- The Movement Modifier offers the possibility to create spiraling motions which follow the base direction or alterations to the base direction with customizable frequency.
- Animaze particle systems also offer a size to speed factor, in case a certain physical consistency is needed.

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
