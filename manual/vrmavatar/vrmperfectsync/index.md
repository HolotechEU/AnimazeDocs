---
layout: page
title: "PerfectSync capabilities to .VRM sourced avatars"
source_url: https://www.animaze.us/manual/vrmavatar/vrmperfectsync
---

# PerfectSync capabilities to .VRM sourced avatars

Animaze features a number of Animation Standards to properly support tracking to animation mappings for differently sourced models (fbx, vrm, glb). These standards are defined by a set of skeletal animations, blendshapes (morph targets), blendshape groups (vrm specific) and skeletal joints (used for procedural animations).

.VRM sourced models imported in Animaze will use the VRoid Animation Standard by default, although this can be changed. This guide will show you how to change the Animation Standard for your .vrm sourced model from the classic VRoid Standard to the Perfect Sync Standard.

The Perfect Sync Animation standard requires 52 face expression blendshapes that are directly compatible with the ARKit face module shapes (full list [here](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation)). The Perfect Sync standard is custom tailored to .vrm models, so the model should follow the .vrm rules and the blendshapes are accessed through VRM expressions or Blendshape Groups.

Changing the Animation Standard from VRoid to Perfect Sync can be done in a few easy steps:

1. Import your .vrm model in Animaze Editor.
2. Click on the newly imported avatar in the Hierarchy Panel on the left-hand side.
3. Change the Animation Standard from the Inspector on the right-hand side  
   ![]({{ '/assets/images/perfectsync_editor-8aa3d037.png' | relative_url }}){: width="488" height="137"}
4. Save the item: right click on the avatar in the Hierarchy Panel and click the Save item button
5. You can now test out the animations through the Avatar Puppeteering panel.
6. The avatar can be bundled and used in Animaze Desktop.

### Importing VRM Format Models

- [.VRM General Flow]({{ '/manual/vrmavatar/vrmgeneral/' | relative_url }})
- [Geometry & Materials & Textures]({{ '/manual/vrmavatar/vrmgeometry/' | relative_url }})
- [Animations & Retargeting]({{ '/manual/vrmavatar/vrmanimations/' | relative_url }})
- [Physics]({{ '/manual/vrmavatar/vrmphysics/' | relative_url }})
- [PerfectSync capabilities to .VRM sourced avatars]({{ '/manual/vrmavatar/vrmperfectsync/' | relative_url }})
- [Import Your .VRM Model Into Animaze]({{ '/manual/vrmavatar/vrmimport/' | relative_url }})
- [Troubleshoot & Support]({{ '/manual/vrmavatar/troubleshootandsupportvrmeditor/' | relative_url }})
