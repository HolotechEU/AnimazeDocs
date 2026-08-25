---
layout: page
title: "Retargeting Considerations and Materials"
source_url: https://www.animaze.us/manual/imprtglb/retargeting
---

# Retargeting Considerations and Materials

## Retargeting Considerations

### Look-at/Eyes movements require

- Head, LeftEye and RightEye joints
- LeftEye and RightEye are procedurally moved so they need to be in the center of the eyes' geometry

### General animations retargeting (dances and idle animations) require

- the default pose be in T-Pose
- the height of the avatar be at least 1.5m
- the pivot of the model at the foot level

## Materials

GLB/GLTF format models are assigned the standard Animaze UberShader material.

### Importing GLB/GLTF format models

- [Intro]({{ '/manual/imprtglb/introglb/' | relative_url }})
- [Model Requirements - Blendshapes]({{ '/manual/imprtglb/blendshapes/' | relative_url }})
- [Model Requirements - Skeletal Joints (expected hierarchy and naming)]({{ '/manual/imprtglb/skltl-joints/' | relative_url }})
- [Skeletal Joints (joints orientation and other considerations)]({{ '/manual/imprtglb/orientation/' | relative_url }})
- [Default Pose]({{ '/manual/imprtglb/default/' | relative_url }})
- [Retargeting Considerations and Materials]({{ '/manual/imprtglb/retargeting/' | relative_url }})
