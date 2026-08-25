---
layout: page
title: "Intro"
source_url: https://www.animaze.us/manual/imprtglb
---

# Intro

# Animaze supports importing GLB/GLTF 3D model format, although it interprets it as a Ready Player Me avatar, so it needs to adhere to that standard in terms of Blendshapes/Morph Targets names, Skeletal Joints (name and orientations) and default pose.

Only the model’s **blendshapes** identified by specific names are used to map the face expressions, no skeletal animations are needed.

**Skeletal joints** identified by specific names are used for:

- head and body movements (yaw, pitch, roll)
- eyes look-at movement
- a simplified idle pose
- a breathing motion
- full body tracking (through Axis Perception Neuron tracker)
- hands tracking (through Leap Motion tracking and gamepad puppeteering)
- general animations retargeting (special actions and idle animations)

It is recommended you also consider the standard Ready Player Me model as a source of inspiration, an already created avatar can be found [here](https://api.readyplayer.me/v1/avatars/630f1c1258e6877fae5e2319.glb "https://api.readyplayer.me/v1/avatars/630f1c1258e6877fae5e2319.glb"). If you are interested in creating a new personalized avatar, you can use the [https://animaze.readyplayer.me](https://animaze.readyplayer.me/ "https://animaze.readyplayer.me") creator.

### Importing GLB/GLTF format models

- [Intro]({{ '/manual/imprtglb/introglb/' | relative_url }})
- [Model Requirements - Blendshapes]({{ '/manual/imprtglb/blendshapes/' | relative_url }})
- [Model Requirements - Skeletal Joints (expected hierarchy and naming)]({{ '/manual/imprtglb/skltl-joints/' | relative_url }})
- [Skeletal Joints (joints orientation and other considerations)]({{ '/manual/imprtglb/orientation/' | relative_url }})
- [Default Pose]({{ '/manual/imprtglb/default/' | relative_url }})
- [Retargeting Considerations and Materials]({{ '/manual/imprtglb/retargeting/' | relative_url }})
