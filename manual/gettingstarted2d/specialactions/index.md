---
layout: page
title: "Configure avatar Special Actions & Special Poses"
source_url: https://www.animaze.us/manual/gettingstarted2d/specialactions
---

# Configure avatar Special Actions & Special Poses

[Special Actions and Poses]({{ '/manual/gettingstarted2d/diveinto/' | relative_url }}) are user triggered animations and are not part of the face tracking retargeting system. Think of special actions as cool dance moves that you want your avatar to display, while special poses are moods (make the avatar sad by changing the color tone of the face to blue).

While the possibilities of Special Actions and Special Poses are limitless, all Special Actions and Special Poses must adhere to certain requirements and behaviors:

- if your avatar has an idle pose, then the special action must end in the idle pose. Otherwise, your avatar will remain in the state of the last frame of the special action
- special poses animation inputs are overwritten by tracking retargeting

i.e., if a special pose changes ParamEyeLOpen input to 0 (eye shut), the parameter will be overridden by face tracking. It is recommended to use inputs that are not mapped by the Animaze tracking system.

The Animaze Editor system tries to detect and import by default all the special actions and poses at import. The format is **\\*.motion3 for special actions & \\*.exp3.json for special poses**, exported from the Cubism editor, and they can be added, rearranged and removed within the Animaze Editor.

Steps to configure **Special Actions**:

1. In the **Editor Panel**, click on **Special Actions** bar to expand it

![In the Editor Panel, click on Special Actions bar to expand it]({{ '/assets/images/1-b3e7deae.png' | relative_url }} "Animaze Editor"){: width="1000" height="531"}

2. Clicking the **Configure Special Actions** button will open the configuration window

![Clicking the Configure Special Actions button will open the configuration window ]({{ '/assets/images/2-efa3cd8b.png' | relative_url }} "Animaze Editor"){: width="1000" height="534"}

3. The Editor lists the animations detected at import

![The Animaze Editor lists the animations detected at import]({{ '/assets/images/list_of_actions-da9f6be3.png' | relative_url }} "Animaze Editor"){: width="1000" height="530"}

4. Here you can Add, Remove & Rearrange the special actions. Click **OK** when you are done.

![Here you can Add, Remove & Rearrange the special actions]({{ '/assets/images/3-acc9569b.png' | relative_url }} "Animaze Editor"){: width="1000" height="531"}

5. Click the **Activate** button to trigger the animation and watch it perform the action

![Click the Activate button to trigger the animation ]({{ '/assets/images/activateSpAc-7ee456fe.png' | relative_url }} "Animaze Editor"){: width="1000" height="532"}

The configuration for **Special Poses** follows the same exact steps. The system will look for \\***.exp3.json** files in **expressions/** folder of the avatar

6. Save the avatar in the **Hierarchy Panel** when you are done

![Save the avatar in the Hierarchy Panel when you are done]({{ '/assets/images/4-46c3f10d.png' | relative_url }} "Animaze Editor"){: width="353" height="420"}

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
