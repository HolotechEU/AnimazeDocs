---
layout: page
title: "Live2D Retargeting Overrides"
source_url: https://www.animaze.us/manual/gettingstarted2d/live2dretargetingoverrides
---

# Live2D Retargeting Overrides

The Editor enables artists to custom map tracking animations to animation inputs. Currently only working for Live2D Avatars.

Steps to add it on a 2D model:

1. Select the Live2D avatar from the Hierarchy Panel

2. In the Editor Panel, open **Live2D Options** and then **Retargeting Overrides**

![]({{ '/assets/images/1-e995be39.png' | relative_url }}){: width="1000" height="531"}

3. Click **Add Override** and select a Live2D Animation Input you want to retarget. For the purpose of this guide, we selected ParamEarLOn.

![]({{ '/assets/images/2-8d5f9094.png' | relative_url }}){: width="1000" height="527"}

4. Now add a tracking input that you want to retarget by clicking the **Add Input** button. We chose JawDrop for the purpose of this guide.

![]({{ '/assets/images/3-2afcd959.png' | relative_url }}){: width="1000" height="529"}

5. It will look like this:

![]({{ '/assets/images/4-aed9dd02.png' | relative_url }}){: width="1000" height="528"}

6. In **Avatar Puppeteering** (Tools \> Avatar Puppeteering), toggle the MouthOpen expression and see the effects on the avatar. When setting Mouth open to 1, the left ear will show up.

![]({{ '/assets/images/5-4cca0744.png' | relative_url }}){: width="980" height="616"}

That’s all. The system enables you to also add more than one tracking input to retarget (by default, use as a weighted sum) or even use other operations on the tracking inputs such as min, max, or inverse sum.

We have also prepared [a motion output parameters list]({{ '/manual/gettingstarted2d/motionoutput/' | relative_url }}) for you, the avatar creator for custom-animating your avatars in Animaze. You will likely want to refer to this list to custom-map aspects like Hand Motion from Ultraleap (Leap Motion) on your custom Live2D avatar (and more).

### Importing Live2D Format Models

- [Steps in creating your own 2D avatar]({{ '/manual/gettingstarted2d/stepsincreatingyourown2davatar/' | relative_url }})
- [What is Animaze and what is the “.avatar” format?]({{ '/manual/gettingstarted2d/animazeintro/' | relative_url }})
- [Live2D Model Requirements & Animation Standards]({{ '/manual/gettingstarted2d/paramlist/' | relative_url }})
- [Motion Output Parameter List]({{ '/manual/gettingstarted2d/motionoutput/' | relative_url }})
- [Live 2D Model Creation Process for Complex Mouth Geometries]({{ '/manual/gettingstarted2d/complexparam/' | relative_url }})
- [Getting started - Import Live2D model in Animaze Editor]({{ '/manual/gettingstarted2d/gettingstarted/' | relative_url }})
- [Change the avatar details (icon, description & name)]({{ '/manual/gettingstarted2d/changeavatardetails/' | relative_url }})
- [Change the rendering options]({{ '/manual/gettingstarted2d/changerendering/' | relative_url }})
- [Remap avatar animation inputs]({{ '/manual/gettingstarted2d/remapanimations/' | relative_url }})
- [Live2D Retargeting Overrides]({{ '/manual/gettingstarted2d/live2dretargetingoverrides/' | relative_url }})
- [Configure avatar Special Actions & Special Poses]({{ '/manual/gettingstarted2d/specialactions/' | relative_url }})
- [Frame the avatar]({{ '/manual/gettingstarted2d/frameavatar/' | relative_url }})
- [Quickly modify a texture on your avatar]({{ '/manual/gettingstarted2d/modifytexture/' | relative_url }})
- [Expressions debugging - Avatar Puppeteering]({{ '/manual/gettingstarted2d/expressiondebugging/' | relative_url }})
- [Create an \\*.avatar bundle]({{ '/manual/gettingstarted2d/createavatarbundle/' | relative_url }})
- [Import an \\*.avatar bundle in Animaze PC app]({{ '/manual/gettingstarted2d/importbundle/' | relative_url }})
- [Import Your Live2D Models in Animaze PC]({{ '/manual/gettingstarted2d/importlive2d/' | relative_url }})
- [Send your avatar to Animaze Avatar iOS app]({{ '/manual/gettingstarted2d/sendavatar/' | relative_url }})
- [Leap Motion Hand Sensors with Live2D avatars]({{ '/manual/gettingstarted2d/leaplive2d/' | relative_url }})
- [Dive into Documentation]({{ '/manual/gettingstarted2d/diveinto/' | relative_url }})
- [Create your own 2D avatar]({{ '/manual/gettingstarted2d/createyourown/' | relative_url }})
- [Troubleshoot & Support]({{ '/manual/gettingstarted2d/troubleshootandsupport2deditor/' | relative_url }})
