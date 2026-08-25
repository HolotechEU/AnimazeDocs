---
layout: page
title: "Editor Retargeting Overrides"
source_url: https://www.animaze.us/manual/editorusermanual/editorretargetingoverrides
---

# Editor Retargeting Overrides

The Editor enables artists to custom map tracking animations to animation inputs.  This article talks about Live2D avatars, but this works the same way for 3D avatars as well.

Steps to add it to model:

1. Select the Live2D avatar from the Hierarchy Panel

2. In the Editor Panel, open **Live2D Options** and then **Retargeting Overrides,** or, for a 3D model,  just go to the **Retargeting Overrides** section.

![]({{ '/assets/images/1-e995be39.png' | relative_url }}){: width="780" height="414"}

3. Click **Add Override** and select a Live2D Animation Input you want to retarget, or a 3D Inputifusing a 3D model. For the purpose of this guide, we selected ParamEarLOn.

![]({{ '/assets/images/2-8d5f9094.png' | relative_url }}){: width="780" height="411"}

4. Now add a tracking input that you want to retarget by clicking the **Add Input** button. We chose JawDrop for the purpose of this guide.

![]({{ '/assets/images/3-2afcd959.png' | relative_url }}){: width="780" height="413"}

5. It will look like this:

![]({{ '/assets/images/4-aed9dd02.png' | relative_url }}){: width="780" height="412"}

6. In **Avatar Puppeteering** (Tools \> Avatar Puppeteering), toggle the MouthOpen expression and see the effects on the avatar. When setting Mouth open to 1, the left ear will show up.

![]({{ '/assets/images/5-4cca0744.png' | relative_url }}){: width="780" height="490"}

That’s all. The system enables you to also add more than one tracking input to retarget (by default, use as a weighted sum) or even use other operations on the tracking inputs such as min, max, or inverse sum.

We have also prepared [a motion output parameters list]({{ '/manual/gettingstarted2d/motionoutput/' | relative_url }}) for you, the avatar creator for custom-animating your avatars in Animaze. You will likely want to refer to this list to custom-map aspects like Hand Motion from Ultraleap (Leap Motion) on your custom avatar (and more).

### Animaze Editor User Manual

- [About the Animaze Editor]({{ '/manual/editorusermanual/abouteditor/' | relative_url }})
- [Steam Install Process]({{ '/manual/editorusermanual/steameditor/' | relative_url }})
- [Animaze Editor Workflow]({{ '/manual/editorusermanual/editorworkflow/' | relative_url }})
- [Top Bar Menu]({{ '/manual/editorusermanual/topbarmenu/' | relative_url }})
- [Camera Navigation Keys]({{ '/manual/editorusermanual/cameranavigationkeys/' | relative_url }})
- [Main Panels]({{ '/manual/editorusermanual/mainpanels/' | relative_url }})
- [Material Components]({{ '/manual/editorusermanual/editormaterialcomponents/' | relative_url }})
- [Environment Properties]({{ '/manual/editorusermanual/animazeeditorenvironment/' | relative_url }})
- [Animaze Physics]({{ '/manual/editorusermanual/animazephysics/' | relative_url }})
- [Editor Retargeting Overrides]({{ '/manual/editorusermanual/editorretargetingoverrides/' | relative_url }})
- [How to add animated Emotes]({{ '/manual/editorusermanual/emotes/' | relative_url }})
