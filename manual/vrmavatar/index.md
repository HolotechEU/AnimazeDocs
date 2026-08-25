---
layout: page
title: ".VRM General Flow"
source_url: https://www.animaze.us/manual/vrmavatar
---

# .VRM General Flow

Animaze now supports importing VRM models. To use a .VRM model in Animaze, you need to get a .VRM model file, import it through the Animaze Editor, bundle the newly imported avatar in a .avatar file in the Animaze Editor, and then import that .avatar file into the Animaze app (Windows or iOS).

The VRM import process is designed to be as simple and streamlined as possible, while providing all the configuration and customization tools the Animaze Editor is already offering to .FBX sourced models.

**The main differences between .VRM and .FBX sourced models are:**

1. VRM sourced models have custom tailored materials that try to replicate the shading on Unity based applications (MToon).
2. VRM sourced models have custom tailored Animation Standards (VRoid and Perfect Sync) that are used by the Animaze Retargeting System. The default Animation Standard is VRoid and all its requirements are listed in the Animation & Retargeting section.
3. VRM sourced models have a custom tailored physics system that tries to emulate the one implemented by UniVRM.

It is strongly recommended to follow VRoid’s VRM model specification, as the import process has been developed and optimized around VRoid’s sample models sourced from VRoid’s sample avatars website or from the VRoid Studio Steam application.

- Link to technical VRM specification: <https://github.com/vrm-c/vrm-specification/blob/master/specification/0.0/README.md>
- Link to VRoid Studio on Steam: [https://store.steampowered.com/app/1486350/VRoid\\_Studio\\_v0121/](https://store.steampowered.com/app/1486350/VRoid_Studio_v0121/)
- Link to VRoid sample models: <https://vroid.pixiv.help/hc/en-us/sections/360002889853--Sample-Models>

Note that Animaze implements a subset of the features the VRM models support. Check out each section for a detailed view.

**TIP**: If you need to modify your existing \\*.vrm/\\*.glb format avatar (add headphones or other accessories) in Blender or other softwares out there, make sure you export it in the same format you initially imported it. Take into consideration the conventions agreed for the specific format.

### Importing VRM Format Models

- [.VRM General Flow]({{ '/manual/vrmavatar/vrmgeneral/' | relative_url }})
- [Geometry & Materials & Textures]({{ '/manual/vrmavatar/vrmgeometry/' | relative_url }})
- [Animations & Retargeting]({{ '/manual/vrmavatar/vrmanimations/' | relative_url }})
- [Physics]({{ '/manual/vrmavatar/vrmphysics/' | relative_url }})
- [PerfectSync capabilities to .VRM sourced avatars]({{ '/manual/vrmavatar/vrmperfectsync/' | relative_url }})
- [Import Your .VRM Model Into Animaze]({{ '/manual/vrmavatar/vrmimport/' | relative_url }})
- [Troubleshoot & Support]({{ '/manual/vrmavatar/troubleshootandsupportvrmeditor/' | relative_url }})
