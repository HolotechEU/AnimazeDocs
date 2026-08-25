---
layout: page
title: "Steps in creating your own 3D avatar"
source_url: https://www.animaze.us/manual/gettingstarted3d/howtousethedocumentation
---

# Steps in creating your own 3D avatar

The purpose of this guide is to provide the path you need to follow in order to create your own 3D model, using our site documentation. Open the links of each section for better understanding the necessary steps in building an avatar.

The info in each link is subject to future amendments, as we further develop the Animaze apps and systems.

**Step 1**

**Concept & high-poly**

General info about the concept process flow, what should be considered when building an avatar \>\> [**here**]({{ '/manual/3davatar/3dconcept/' | relative_url }} "https://www.animaze.us/manual/3davatar/3dconcept").

Note that this files folder structure is mandatory for importing your creation in the Animaze Editor, and then further in Animaze apps:

1. **\\*.fbx** geometry name the same as the folder name
2. **Textures** (.tga, .png, .jpg files) go in Textures/ folder
3. **Animations** (skeletal animations exported as solo **.fbx** files) go in Animations/ folder

**Step 2**

**Retopology**

General info about the process of retopology, points that you need to consider in the making, visual examples are [**here**]({{ '/manual/3davatar/3dretopology/' | relative_url }} "https://www.animaze.us/manual/3davatar/3dretopology").

The more detailed the object is (highpoly-model), the more computational power it will need to be displayed and animated \>\>[**Check and consider the complexity tiers**]({{ '/manual/technicalreference/complexitytiers/' | relative_url }} "https://www.animaze.us/manual/technicalreference/complexitytiers") (by features, by performance, by download size).

**Step 3**

**UV mapping**

General info about UV space \>\> [**here**]({{ '/manual/technicalreference/uvmapping/' | relative_url }} "https://www.animaze.us/manual/technicalreference/uvmapping").

Detailed info, visual examples and tips \>\> [**here**]({{ '/manual/3davatar/3duv/' | relative_url }} "https://www.animaze.us/manual/3davatar/3duv").

**Step 4**

**Textures & Materials**

**Textures** (.tga, .png, .jpg files) go in **Textures/** folder.

General info in technical documentation about **materials**, **supported features** table, **render queues** explained, supported **material components** can be found **[here]({{ '/manual/technicalreference/texturesandmaterials/' | relative_url }} "https://www.animaze.us/manual/technicalreference/texturesandmaterials").**

Detailed info on Materials with example pictures can be read [**here**]({{ '/manual/3davatar/3dtextures/' | relative_url }} "https://www.animaze.us/manual/3davatar/3dtextures").

See how Material components are displayed in Animaze Editor [**here**]({{ '/manual/editorusermanual/editormaterialcomponents/' | relative_url }} "https://www.animaze.us/manual/editorusermanual/editormaterialcomponents").

For **Animated Textures and their creation steps**, we provide the **sources to hybrid AvatarLily** (contains rig with correct naming and bone axis, skeletal & blendshape animations, animated textures), as teaching resource. Find them **[here]({{ '/manual/hybriddoc/animatedtextures/' | relative_url }} "https://www.animaze.us/manual/hybriddoc/animatedtextures").**

**Step 5**

**Rigging**

The process in which you create the skeleton is called rigging. This process can be done in a lot of programs (Blender, Maya, 3dMax, Modo etc.), as long as you consider the Animaze conventions.

General info about the Skeleton, base rig and Prop bones \>\> [**here**]({{ '/manual/technicalreference/skeleton/' | relative_url }} "https://www.animaze.us/manual/technicalreference/skeleton").

**Rig example** that you can use as reference, or build your avatar on it is [**here**]({{ '/manual/animationappendix/animazebones/' | relative_url }} "https://www.animaze.us/manual/animationappendix/animazebones"). Contains prop bones and the correct bone naming.

Also info about Head, Eyes and Camera axis, bones names list available, bone remapping examples - *lower part of page.*

On [**this link**]({{ '/manual/3davatar/3drigging/' | relative_url }} "https://www.animaze.us/manual/3davatar/3drigging")you can find:

- **Rules for the Head, Eyes, Camera** (bones axis, naming, camera) - *upper part of page*
- **Pointers on how to build the rig**
- **Rules for hands and full-body tracking (naming, position, axis)** - *mid of page*
- **Tips about the rigging process**
- **Method of Debugging the bone orientation in Animaze Editor** - *low on page*
- **Info on Prop bones**

**Step 6**

**Skinning**

**[Limitations]({{ '/manual/technicalreference/deformation/' | relative_url }} "https://www.animaze.us/manual/technicalreference/deformation")**

- Max #bones
- **[Max #influence on vertex]({{ '/manual/3davatar/3dskinning/' | relative_url }} "https://www.animaze.us/manual/3davatar/3dskinning")**

**Step 7**

**Animations**

**Animations** (skeletal animations exported as solo **.fbx** files) go in **Animations/** folder.

Avatars can be animated through two methods. Read about the **types of animation methods** in our technical documentation, [**here**]({{ '/manual/technicalreference/animation/' | relative_url }} "https://www.animaze.us/manual/technicalreference/animation").

Info about base animations, system directory structure, skeletal animations, joint-based animations combined with blendshape animations, 6 emotions (animations combos) can be read [**here**]({{ '/manual/3davatar/3danimations/' | relative_url }} "https://www.animaze.us/manual/3davatar/3danimations").

General info about [**Tpose animation**]({{ '/manual/technicalreference/fullbodytracking/' | relative_url }} "https://www.animaze.us/manual/technicalreference/fullbodytracking")for full body tracking in the technical documentation.

Animations for customizing the model \>\> modify its proportions, general info can be read [**here**]({{ '/manual/technicalreference/modifyproportions/' | relative_url }} "https://www.animaze.us/manual/technicalreference/modifyproportions").

General info on **Visemes animations** and **Expression Poses** is [**here**]({{ '/manual/technicalreference/animationposes/' | relative_url }} "https://www.animaze.us/manual/technicalreference/animationposes") in the avatar technical document.

All skeletal, blendshapes & visemes animations displayed and explained in the [**Animation**]({{ '/manual/animationappendix/' | relative_url }} "https://www.animaze.us/manual/animationappendix") [**Appendix**]({{ '/manual/animationappendix/' | relative_url }} "https://www.animaze.us/manual/animationappendix").

**Special Actions** & [**how to configure them**]({{ '/manual/gettingstarted3d/avatarspecialactions/' | relative_url }} "https://www.animaze.us/manual/gettingstarted3d/avatarspecialactions") are detailed [**here**]({{ '/manual/technicalreference/specialaction/' | relative_url }} "https://www.animaze.us/manual/technicalreference/specialaction").

**Extra**

**Physics**

General info on **physics**in technical doc is [**here**]({{ '/manual/technicalreference/animazephysic/' | relative_url }} "https://www.animaze.us/manual/technicalreference/animazephysic"). Read about Rigid Body, Collider and Constraints.

[**Detailed physics info**]({{ '/manual/editorusermanual/animazephysics/' | relative_url }} "https://www.animaze.us/manual/editorusermanual/animazephysics") in Animaze Editor, with graphic support.

An example of configuring physics in Animaze Editor, plus Tips, can be seen [**here**]({{ '/manual/3davatar/3dphysics/' | relative_url }} "https://www.animaze.us/manual/3davatar/3dphysics"). 

[**Import your 3D in Animaze Editor.**]({{ '/manual/gettingstarted3d/importavatar3d/' | relative_url }} "https://www.animaze.us/manual/gettingstarted3d/importavatar3d")

### Importing FBX Format Models

- [Steps in creating your own 3D avatar]({{ '/manual/gettingstarted3d/howtousethedocumentation/' | relative_url }})
- [What is Animaze and what is the “.avatar” format?]({{ '/manual/gettingstarted3d/animaze3d/' | relative_url }})
- [Import a 3D avatar]({{ '/manual/gettingstarted3d/importavatar3d/' | relative_url }})
- [Add customization options on an avatar]({{ '/manual/gettingstarted3d/customizationoptions3d/' | relative_url }})
- [Bundle a 3D avatar into a .avatar file]({{ '/manual/gettingstarted3d/importtowindows/' | relative_url }})
- [Change the avatar details (icon, description & name)]({{ '/manual/gettingstarted3d/changeavatardetails3d/' | relative_url }})
- [How to configure avatar Special Actions]({{ '/manual/gettingstarted3d/avatarspecialactions/' | relative_url }})
- [Frame the avatar for the iOS App]({{ '/manual/gettingstarted3d/frameavatar3d/' | relative_url }})
- [Import a 3D Prop]({{ '/manual/gettingstarted3d/3dgettingstarted/' | relative_url }})
- [Send your .avatar file to Animaze Avatar iOS app (on Windows, via Animaze Editor)]({{ '/manual/gettingstarted3d/sendavatar3d/' | relative_url }})
- [Send your .avatar file to the Animaze iOS app (on Windows, via iTunes)]({{ '/manual/gettingstarted3d/sendavatar3dw/' | relative_url }})
- [Send your .avatar file to Animaze Avatar iOS app (on Mac, via Finder)]({{ '/manual/gettingstarted3d/sendavatar3df/' | relative_url }})
- [Troubleshoot & Support]({{ '/manual/gettingstarted3d/troubleshootandsupport3deditor/' | relative_url }})
