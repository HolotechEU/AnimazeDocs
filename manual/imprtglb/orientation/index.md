---
layout: page
title: "Skeletal Joints (joints orientation and other considerations)"
source_url: https://www.animaze.us/manual/imprtglb/orientation
---

# Skeletal Joints (joints orientation and other considerations)

Head, LeftEye and RightEye joints need to be with Z Axis orientated forward, Y Axis is up, X Axis to the side.

![Skeletal Joints ]({{ '/assets/images/1-41f71887.png' | relative_url }} "Import a GLB/GLTF 3D model"){: width="369" height="273"}

All joints in the Shoulder to Hand chain need to have the axis as follows:

- Z Axis looking down relative to the avatar
- X Axis looking back relative to the avatar
- Y Axis looking towards the hand/fingers

![Skeletal Joints ]({{ '/assets/images/2-03796a23.png' | relative_url }} "Import a GLB/GLTF 3D model"){: width="345" height="192"}

LeftEye and RightEye joints forward axis (Z axis) need to go through the center of the eyes' pupil and be placed in the center of the eyes' geometry.

![Skeletal Joints]({{ '/assets/images/3-a4189648.png' | relative_url }} "Import a GLB/GLTF 3D model"){: width="498" height="376"}

*left eye joint*

The size of the avatar should be in meters and should follow a relatively correct scale, 1.5-2.0m height.

### Importing GLB/GLTF format models

- [Intro]({{ '/manual/imprtglb/introglb/' | relative_url }})
- [Model Requirements - Blendshapes]({{ '/manual/imprtglb/blendshapes/' | relative_url }})
- [Model Requirements - Skeletal Joints (expected hierarchy and naming)]({{ '/manual/imprtglb/skltl-joints/' | relative_url }})
- [Skeletal Joints (joints orientation and other considerations)]({{ '/manual/imprtglb/orientation/' | relative_url }})
- [Default Pose]({{ '/manual/imprtglb/default/' | relative_url }})
- [Retargeting Considerations and Materials]({{ '/manual/imprtglb/retargeting/' | relative_url }})
