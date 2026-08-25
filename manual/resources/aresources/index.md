---
layout: page
title: "Animaze Sample Sources & Resources"
source_url: https://www.animaze.us/manual/resources/aresources
---

# Animaze Sample Sources & Resources

A clarification on the terminology used in general regarding Animaze sources and resources:

- **Sources**, also referred to as **Assets**, are model files that can be modified in 3rd party modeling and animation software. Sources are: .vrm files, .glb files, .model3.json (all Live2D models' runtime files), .fbx files, .hdr (HDRI Cubemaps for Skybox). Sources need to be imported - compiled to Animaze-friendly format - through Animaze Editor import functions, or in the case of some formats (vrm, glb, Live2D), the import can also be done directly in the Animaze Desktop app. **At import, sources will be copied in the Animaze Editor's Data/Assets/ folder.**
- **Resources** are ready to use Animaze item files (avatars, props, backgrounds, etc.) and can only be configured further in Animaze Editor. Resources are .model, .item, .anim, .meta, etc. Resources can be copied between Animaze Editor and Animaze Desktop, although the recommended path is to use the bundling method, the bundle function that creates a .avatar file that can be added in Animaze Desktop through item galleries (avatars, backgrounds, props, etc.). **Resources reside in the Data/Resources/ folder of all Animaze products (Animaze Editor, Animaze Desktop).**

Why need a distiction between Sources and Resources? Resources can be loaded much faster at runtime, don't depend on the source of geometry, animations, textures, and there are multitudes of options that can be added the the asset itself that otherwise wouldn't be possible through the source file format (e.g. color & scale customizations, retargeting options, physics, special action configurations, etc.).

---

We've compiled several resources (FBX/Live2D/Texture sources and ready-to-use Animaze Editor Resources) that serve as learning materials or even as starting points for your custom avatar identity:

---

**[Animaze Editor Sample Assets](https://animaze.tv/AnimazeEditorSampleAssets)** containing:

- stripped down female persona sources

- stripped down male persona sources

- frog avatar sources

- one Live2D model sources

- crown prop sources

- one sample background

---

**[Animated Backgrounds and Overlays Sample Assets](https://animaze.tv/AnimatedBackgroundsAndOverlaysSampleAssets)**

---

**[Animaze Example Animation Rig](https://animaze.tv/AnimazeExampleRig)**

---

**[Hybrid Avatar 3D \+ Live2D assets - Avatar Peach](https://animaze.tv/AvatarPeach_example)**

---

**[Avatar w/ ARKit Blendshapes - Avatar Yvonne](https://animaze.tv/AvatarYvonneARKitBS)**

- ready to be used with iPhone Tracker & Direct Expression Mapping option

---

**[Avatar w/ fur - Avatar Prupubu](https://animaze.tv/AvatarPrupubuSources)**

---

**[Transparent background image](https://animaze.tv/TransparentBackground)**

---

**Complete Avatar Sources w/ Animated Normal Maps and Specular Maps - Avatar Lily**

- [Live2D Cubism Project](https://animaze.tv/AvatarLily_CubismProjectSource) for animated normal maps and specular maps

- [Live2D ready to use](https://animaze.tv/3QJUfp8) animated normal maps and specular maps

- [3D Avatar sources (animations & geometry)](https://animaze.tv/AvatarLily_FbxSourceFiles)

- [Additional texture files](https://animaze.tv/AvatarLily_TextureSourceFiles)

---

**[VRM ARKit Expressions Visualizer Model](https://animaze.tv/vrm_arkit_visualizer)**

- use this model to debug and visualize how the ARKit blendshapes are applied by Animaze on the model. The model can be directly imported into Animaze app as well as Animaze Editor.

---

**[GLB ARKit Expressions Visualizer Model](https://animaze.tv/glb_arkit_visualizer)**

- use this model to debug and visualize how the ARKit blendshapes are applied by Animaze on the model. The model can be directly imported into Animaze app as well as Animaze Editor.

---

### Animaze Sample Asset Sources & Resources

- [Animaze Sample Sources & Resources]({{ '/manual/resources/aresources/' | relative_url }})
