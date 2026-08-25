---
layout: page
title: "Create your own 2D avatar"
source_url: https://www.animaze.us/manual/gettingstarted2d/createyourown
---

# Create your own 2D avatar

To start creating your own 2D avatar you will need the Live2D Cubism editor. You can download the Live2D Cubism editor for free from [**here**](https://www.live2d.com/en/download/cubism/). Live2D offers a 42 day free trial of the PRO version to everyone who installs their editor. After the 42 days ends, the PRO version automatically switches to the FREE version, unless you decide to upgrade (at which point you will need to enter in your credit card information).

Live2D is an external partner. Learn more about their software and products [here](https://www.live2d.com/about/) and learn more about the differences between the basic and PRO licenses [**here**](https://www.live2d.com/en/comparison/).

The Cubism editor requires **.psd** format files, so you need to create your model in a software that is able to export this format (Photoshop, Krita, Gimp etc).

[**Here**](https://www.youtube.com/watch?v=Z-GxdkXNroI&list=PLqbLt-S6_fh7pxcasSMzeDjc9K5KPWE9H) you can find a list of very useful mini-tutorials that will guide you when working in Cubism. There is also a written manual for it [**here**](https://docs.live2d.com/cubism-editor-tutorials/top/).  We find the guides very useful and often refer to them ourselves!

Start with [**this tutorial**](https://www.youtube.com/watch?v=Z-GxdkXNroI&list=PLqbLt-S6_fh7pxcasSMzeDjc9K5KPWE9H&index=1) to prepare the files needed for Cubism. Read the [**rules for creating PSD for import**](https://docs.live2d.com/cubism-editor-manual/divide-the-material/).

Most important rule:

![]({{ '/assets/images/image001-b7bcbed9.png' | relative_url }}){: width="412" height="98"}

For example, an eye needs to have multiple layers: upper eyelid, lower eyelid, iris, pupil, etc. It is easier to animate each part independently, so you can isolate issues to a single part if they occur, without affecting the whole geometry all at once.

![Photoshop]({{ '/assets/images/image002-301753cf.png' | relative_url }} "Photoshop"){: width="234" height="609"}

All the textures of the model are on the Texture Atlas and they can be edited/replaced within Cubism. See more about it [**here**](https://docs.live2d.com/cubism-editor-manual/texture-atlas-edit/?locale=en_us).

Once your model is complete in Cubism, you will [**export**](https://docs.live2d.com/cubism-editor-manual/export-moc3-motion3-files/) the files in the **\\*.moc3** format for the Animaze Editor.

In Cubism editor go to **File**, choose **Export For Runtime** and select **Export as moc3 file**.

![In Cubism editor go to File, choose Export For Runtime and select Export as moc3 file. ]({{ '/assets/images/image004-03b048f0.png' | relative_url }} "Runtime"){: width="409" height="358"}

This action will generate the files needed to import your model in Animaze Editor.

![This action will generate the files needed to import your model in Animaze Editor. ]({{ '/assets/images/image006-bbd3fddc.png' | relative_url }} "Import avatar"){: width="459" height="220"}

Tip: To create the normal map and specular you need to modify the initial 2D elements created in Photoshop and re-import them in Cubism, overwriting the diffuse texture, but saving it as a different file. This way you keep the animations and change only the source 2D elements.

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
