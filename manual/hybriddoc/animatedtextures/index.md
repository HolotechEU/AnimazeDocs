---
layout: page
title: "Animated Textures (via Live2D Cubism textures)"
source_url: https://www.animaze.us/manual/hybriddoc/animatedtextures
---

# Animated Textures (via Live2D Cubism textures)

Animaze supports more uses for animated textures created using Live2D Cubism technology for hybrid avatars. In addition to Animated Diffuse Maps (that were possible before) you can now also have:

- Animated Normal Maps
- Animated Emissive Maps

As a teaching resource for creating these kinds of assets, here are the links to all the source data for Avatar Lily. These include:

- **LINK TO [FBX source files for the 3D part of the model](https://s3.amazonaws.com/animaze.us/Avatar+Lily+Sources/AvatarLily_FbxSourceFiles.zip)**
- **LINK TO [Texture sources in uncompressed format](https://s3.amazonaws.com/animaze.us/Avatar+Lily+Sources/AvatarLily_TextureSourceFiles.zip)**
- **LINK TO [Cubism Project (Sources, loadable in Cubism) for the Animated Textures](https://s3.amazonaws.com/animaze.us/Avatar+Lily+Sources/AvatarLily_CubismProjectSource.zip)**
- **LINK TO [Cubism Runtime files for the Animated Textures](https://s3.amazonaws.com/animaze.us/Avatar+Lily+Sources/AvatarLily_CubismRuntimeFiles.zip)**

## Animated Textures (via Live2D Cubism textures)

The Live2D (Cubism) animated textures details are alpha-blended on top of the existing static textures, and the result of this blend is what is used on the model.  Having a correct (static) texture as a base is still important!

The animated textures, if used for Normal Maps, are used for dynamically enhancing the details on the avatar's normals. It’s a great way to accentuate the avatar’s expressivity without increasing the polycount

These animated textures for normal maps built with Live2D (Cubism) assets work in synergy with the tracked animation inputs of the avatar. It's important that the Live2D (Cubism)  assets that are used for animated textures have their parameters named correctly for the behavior you want to obtain. For example, a general use-case is the BrowUP/Down animations for 3D, and for 2D ParamBrowLY, ParamBrowRY animations - surprise & frowning.

- if ParamBrowLY si ParamBrowRY are 0, then the opacity will be set to 0 \>\> default position
- if ParamBrowLY si ParamBrowRY are -1 or 1, then enables frown (-1) & eyebrow up (1)

Below we will exemplify the general steps to create the source data for such a Live2D (Cubism) animated texture, and how to map it on your avatar as an animated normal map.

![]({{ '/assets/images/hybrid-6f2dc591.png' | relative_url }}){: width="800" height="401"}

## Animated Normal Maps Steps

Steps to create the source data for the Live2D powered animated normals:

For each individual parameter that you want to drive changes on the normal, you need to follow the following steps. We’ll use Eyebrow UP/Down as an example.

1. in the software you work with to create the geometry for your hybrid avatar (Maya, Blender etc), activate the eyebrow up animation, duplicate the mesh and export it
2. on this new mesh, create high-poly eyebrows wrinkles, bake it, and export it
3. Repeat steps 1 and 2 for eyebrows down.
4. Separately, in the Live2D Cubism editor, create a new project add these two edited baked normals on different layers – stack them and set the opacity for these two layers, where:

o   if ParamBrowLY and ParamBrowRY are 0 \>\> the opacity of these new layers will be set to 0 \>\> default position

o   if ParamBrowLY si ParamBrowRY are -1 or 1 \>\> make sure that the live2D asset shows the  frown wrinkles (-1)  or  the eyebrow up wrinkles  (1), as appropriate

5. Export the model runtimes (.json file)

**Steps to add the newly created Live2D Cubism runtime asset  on the avatar, through Animaze Editor:**

1. Select the mesh that you want to add the Animated texture normals to in the Hierarchy Panel
2. in the Editor Panel, click Add Component and select Cubism Animated Texture – Normal
3. Expand this tab, then click on the texture box and add the Live2D Cubism runtime that you have created above (the .json file you have ready.
4. If needed, set texture size by adjusting the tiling and offset for the Live2DCubism set.
5. Use the Avatar Puppeteering debugger to test your work ( how tracking inputs activate animated elements on your Live2D asset - now being used as an animated norma map.

## Animated Emissive Texture

Like with Normals above, the same thing is supported for other texture maps.  Let’s take the specular Texture map that also holds the emissive channel - That can be replaced with a live2D asset too. In this example, this has been linked to being triggered by a Special Action instead of a tracking input,  (but it can also be linked to tracking input just like the normals above- it is up to you how what inputs you chose to animate your Live2D animated texture). 

As an example is avatar Lily, for which we created a light effect, a light wave moving across the avatar’s body/ skin patterns when the “startled” Special Action is triggered. (The effect brings an emphasis on her innocent personality, amazed by her own magical potential and heritage.)

To achieve this we layered on top of static Specular Texture a Live2D (Cubism) surface. To see how we have animated the blue channel ( emissive)  in Live2D Cubism see step by step process below

**Steps to create it:**

1. Import the static specular map on which you want to add the animated emissive in Photoshop

 ![]({{ '/assets/images/hybrid2-1d7eb94a.png' | relative_url }}){: width="625" height="351"}

2. Create a mask to isolate the parts that don’t need to be affected by the emissive, if needed
3. Add a new layer with the form you need for your animation

o   set value 0 for Red & Green channels

o   set value 1 for Blue channel – full emissive

![]({{ '/assets/images/ybrid3-36052528.png' | relative_url }}){: width="625" height="315"}

![]({{ '/assets/images/hybrid4-9e71e3be.png' | relative_url }}){: width="309" height="247"}

4. The final result should look like this:

 ![]({{ '/assets/images/hybrid5-8f8384b4.png' | relative_url }}){: width="296" height="237"}

5. Import this file in Cubism Editor
6. Create a new Parameter where:

o   set the movement of the layer accordingly with the emissive info in the Blue channel

- position 0 – the stripe is outside of the animation area
- position 1 – the stripe is within the animation area

7. Use this Parameter to create the animation in Cubism Editor
8. Export the animation as .moc3 file from the “Model” mode of the editor – Export motion
9. Import the model3.json file (automatically created in the previous step) in the Cubism Viewer, then drag and drop the scene1.model3.json (also automatically created in the previous step)

 

## Steps to add it on the avatar, through Animaze Editor:

1. Select the mesh that you want to add the animated texture to in the Hierarchy Panel

![]({{ '/assets/images/hybrid6-a392158e.png' | relative_url }}){: width="326" height="297"}

2. in the Editor Panel, click Add Component and select Cubism Animated Texture – Specular

![]({{ '/assets/images/hybrid7-19eb5f95.png' | relative_url }}){: width="278" height="303"}

3. Expand this tab, then click on the texture box and add the .json file you have ready

Addendum :

Steps for bringing Lily to life:

1.     For this avatar we tried to create a friendly personality as possible, by harmonizing the proportions, dynamic silhouette based on round shapes, emphasizes Lily’s friendly and likable personality. 

The human/octopus hybrid turned out to be the most relatable approach for the ‘Octopus’ subject

![]({{ '/assets/images/hybrid7-de312aea.jpg' | relative_url }}){: width="800" height="505"}

![]({{ '/assets/images/hybrid9-61220c6c.jpg' | relative_url }}){: width="800" height="505"}

![]({{ '/assets/images/hybrid11-37f79d32.jpg' | relative_url }}){: width="800" height="505"}

![]({{ '/assets/images/hybrid10-28c674c1.jpg' | relative_url }}){: width="800" height="505"}

Colors are inspired by underwater flora and fauna found in the warmer, friendlier water areas of our planet.

2. We have created a big contrast between expressions, thus adding more depth to them. 

![]({{ '/assets/images/hybrid12-8c2a5381.png' | relative_url }}){: width="727" height="1027"}

3.   What is different for this avatar is the fact we add more deformations for jaw, lips, cheeks for more variation, so now you can obtain almost totally different characters.

![]({{ '/assets/images/hybrid13-8e390fbe.jpg' | relative_url }}){: width="800" height="504"}

![]({{ '/assets/images/hybrid14-a287ca19.jpg' | relative_url }}){: width="800" height="524"}

### Creating Hybrid Avatars - 3D FBX models with Live2D models faces

- [What is Animaze and what is the “.avatar” format?]({{ '/manual/hybriddoc/hybridanimaze/' | relative_url }})
- [Getting started with hybrid avatars]({{ '/manual/hybriddoc/startwithhybrid/' | relative_url }})
- [Create the 2D and 3D components for your hybrid avatar]({{ '/manual/hybriddoc/createhybridcomponents/' | relative_url }})
- [Animated Textures (via Live2D Cubism textures)]({{ '/manual/hybriddoc/animatedtextures/' | relative_url }})
- [Assemble your avatar in the Animaze editor]({{ '/manual/hybriddoc/assemblehybrid/' | relative_url }})
- [Change the avatar details (icon, description & name)]({{ '/manual/hybriddoc/hybridchangedetails/' | relative_url }})
- [How to frame the avatar]({{ '/manual/hybriddoc/framehybrid/' | relative_url }})
- [Add customization options on an avatar]({{ '/manual/hybriddoc/hybridcustomization/' | relative_url }})
- [Configure avatar Special Actions]({{ '/manual/hybriddoc/hybridspecialactions/' | relative_url }})
- [Use Avatar Puppeteering - Expressions debugging]({{ '/manual/hybriddoc/hybriddebugging/' | relative_url }})
- [Import your hybrid avatar in the Animaze Windows app]({{ '/manual/hybriddoc/hybridwindows/' | relative_url }})
- [Send your hybrid avatar to the Animaze iOS app (on Windows, via iTunes)]({{ '/manual/hybriddoc/hybridiositunes/' | relative_url }})
- [Send your hybrid avatar to Animaze Avatar iOS app (on Mac, via Finder)]({{ '/manual/hybriddoc/hybridiosfinder/' | relative_url }})
- [Send your hybrid avatar to Animaze Avatar iOS app (on Windows, via Animaze Editor)]({{ '/manual/hybriddoc/hybridioswindows/' | relative_url }})
- [Dive Into Documentation]({{ '/manual/hybriddoc/hybriddive/' | relative_url }})
