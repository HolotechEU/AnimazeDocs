---
layout: page
title: "How do I create an Animaze Scene?"
source_url: https://www.animaze.us/faq/animaze-editor/how-to-create-animaze-scene
---

# How do I create an Animaze Scene?

Animaze supports creating and editing scenes, which are container objects that can hold 3D props, particle systems, ambient sounds, lights, skybox etc. One can think of an Animaze scene as a game level that holds static or dynamic objects. The only particularity of scenes is that, when saved and serialized, they do not hold avatars, although if you want a particular spot for an avatar when it spawns, you can use a Location item that becomes a spawn spot for any newly loaded avatar.

To create a Scene, the items in Animaze Editor must be placed within the **Default Scene** in the **Hierarchy Panel**, which makes all transform values (position, orientation and scale) be relative to the scene and also loads them every time the scene is loaded, if previously saved, same as a game level.

The supported Scene Items are:

- 3D props
- particle systems
- sounds (e.g. ambient sound)
- lights
- skybox
- avatar spawn locations – locations you want the newly spawned avatars to be moved to.

To create a scene, follow the steps below:

- Start by importing (or loading, if you have previously imported it) a skybox from the **Assets** menu

![]({{ '/assets/images/scene_1-77d894c2.png' | relative_url }}){: width="300" height="194"}

***Note!***

***All your imports will be found within the Free Items location in the Hierarchy Panel, but you will move them by dragging them in the Default Scene in order to save it as one.***

- You can add scene items to your newly imported Skybox by right-clicking on it and selecting what you want to attach

![]({{ '/assets/images/scene_2-f9d9cae9.png' | relative_url }}){: width="300" height="162"}

- The environment properties can also be modified in the **Editor Panel**, by setting **Ambient Color Intensity** value and **Ambient color**, which will open a **Color Picker** dialog box for you to choose

![]({{ '/assets/images/scene_3-86bdcf62.png' | relative_url }}){: width="700" height="252"}

 For explanatory purposes, we loaded avatar Fluffo, a light, the crown prop for his head, and a bell to which we added a random particle system:

![]({{ '/assets/images/scene_4-3d0c2198.png' | relative_url }}){: width="700" height="364"}

- to add the light in your scenery, simply right-click the skybox in the **Hierarchy Panel** and select **Add new light**
- in the **Editor Panel** you can modify the type, position, rotation, scale color and intensity of the light

![]({{ '/assets/images/scene_5-f175b39d.png' | relative_url }}){: width="450" height="233"}

- the crown must be attached to the avatar, dragged over the destined bone, in this case we dragged it over **propHead**

**![]({{ '/assets/images/scene_6-eaebcfcf.png' | relative_url }}){: width="700" height="280"}**

- do not forget that the avatar is not saved in the scene, even if it is attached at runtime, when saved to disk it will be removed. To have the avatar spawned in a certain location in the scene, right-click on your skybox in the **Hierarchy Panel** and select **Add New Location**

**![]({{ '/assets/images/scene_7-58f8a744.png' | relative_url }}){: width="700" height="281"}**

- a gizmo will be added in the Scene, which you can place it anywhere

![]({{ '/assets/images/scene_8-9f88da8e.png' | relative_url }}){: width="700" height="278"}

- Go to the **Hierarchy Panel** when you are done customizing it and right-click on the **Default Scene**, then select **Save item** or **Save item as…**

![]({{ '/assets/images/scene_9-c12354b3.png' | relative_url }}){: width="700" height="277"}
