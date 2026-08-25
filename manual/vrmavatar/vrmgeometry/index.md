---
layout: page
title: "Geometry & Materials & Textures"
source_url: https://www.animaze.us/manual/vrmavatar/vrmgeometry
---

# Geometry & Materials & Textures

The Animaze import process will generate one mesh per glTF primitive.

Images used as textures by the materials will be written as files on disk, premultiplied with any existing color factors. Unused images stored in the .vrm file are ignored. Textures that use a single color value, a 4x4 size image will be generated with the selected color.

Current limitations:

- Only one uv space is supported
- Only one vertex color is supported
- Blendshape normals/tangents are not generated if missing
- Blendshape material values are ignored (blendshape do not influence shading)
- Only .VRM/MToon shader is supported with a phong lighting model (fallback to Animaze default for unsupported shaders)
- Supported image types: PNG, BMP, JPEG, TGA
- Texture transforms are not supported

### Importing VRM Format Models

- [.VRM General Flow]({{ '/manual/vrmavatar/vrmgeneral/' | relative_url }})
- [Geometry & Materials & Textures]({{ '/manual/vrmavatar/vrmgeometry/' | relative_url }})
- [Animations & Retargeting]({{ '/manual/vrmavatar/vrmanimations/' | relative_url }})
- [Physics]({{ '/manual/vrmavatar/vrmphysics/' | relative_url }})
- [PerfectSync capabilities to .VRM sourced avatars]({{ '/manual/vrmavatar/vrmperfectsync/' | relative_url }})
- [Import Your .VRM Model Into Animaze]({{ '/manual/vrmavatar/vrmimport/' | relative_url }})
- [Troubleshoot & Support]({{ '/manual/vrmavatar/troubleshootandsupportvrmeditor/' | relative_url }})
