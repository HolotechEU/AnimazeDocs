---
layout: page
title: "Live2D Model Requirements & Animation Standards"
source_url: https://www.animaze.us/manual/gettingstarted2d/paramlist
---

# Live2D Model Requirements & Animation Standards

To work with Animaze, your Live2D model must be created with the Live2D Cubism Editor version 3.0 or higher. Cubism 3.0 was released in Spring 2017, so if your model was created after, it is very likely to meet this requirement.

If your model was created with a version of Live2D Cubism lower than 3.0, you need to load the model’s Live2D source files in the Live2D Cubism Editor v3.0 or higher and re-export the Live2D runtime files. 

## **Animation Standards**

Animation Standards refer to the sets of Live2D parameter inputs of the model that are required by the Animaze Retargeting System to map the raw tracking data (e.g. from face trackers) to the model's movement.

Animaze supports two Animation Standards when it comes to Live2D parameters:

- the Default one which is the most widespread and works with virtually all vtubing platforms.
- the Extended Parameter Set which aims to improve on the expressivity of Live2D avatars and map key tracking inputs that otherwise would be used only for 3D avatars.

  A sample avatar (.avatar file, Live2D runtimes, and Live2D sources) using the extended parameters can be found [**here.**](https://s3.amazonaws.com/animaze.us/Live2DExtended_Sample.zip)

### **Default Live2D Animation Standard Parameters (last revision Sept 20 2021**)

|  |  |  |  |
| --- | --- | --- | --- |
| **Live2D Parameter** | **Description** | **Default Value** | **Comment** |
| **Head Movement** | | | |
| ParamAngleX | head yaw movement | at 50% of the input interval |  |
| ParamAngleY | head pitch movement | at 50% of the input interval |  |
| ParamAngleZ | head roll movement | at 50% of the input interval |  |
| **Body Movement** | | | |
| ParamBodyAngleX | body yaw movement | at 50% of the input interval | not tracked by face trackers. Reserved for future use. |
| ParamBodyAngleY | body pitch movement | at 50% of the input interval | triggered by user's face leaning forward/backward |
| ParamBodyAngleZ | body roll movement | at 50% of the input interval | triggered by user's face moving on horizontal axis in camera feed |
| ParamBodyUpDown | body up/down movement | at 50% of the input interval | **(non-standard-parameter)\\*** triggered by user's face moving on vertical axis in camera feed |
| ParamBreath | breathing movement | at 50% of the input interval |  |
| **Eyes Movement** | | | |
| ParamEyeLOpen | blink and eye wide open movement. | at 75% of the input interval | Default value is eye opened (75% of the interval), when blink occurs, value goes to 0% of the interval, when eye wide open occurs the value goes to 100% of the interval |
| ParamEyeROpen | blink and eye wide open movement. | at 75% of the input interval | Default value is eye opened (75% of the interval), when blink occurs, value goes to 0% of the interval, when eye wide open occurs the value goes to 100% of the interval |
| ParamEyeBallX | eye horizontal movement | at 50% of the input interval |  |
| ParamEyeBallY | eye vertical movement | at 50% of the input interval |  |
| ParamEyeLSmile | activated when smiling | at 0% of the input interval |  |
| ParamEyeRSmile | activated when smiling | at 0% of the input interval |  |
| ParamEyeBallForm | bends eyes contour to complement frown and smile expressions. Start of the interval is for frowning, while the end of the interval is for smiling. | at 50% of the input interval |  |
| **Eyebrows Movement** | | | |
| ParamBrowLY | eyebrow down to up movement | at 50% of the input interval |  |
| ParamBrowLForm | eyebrow tilting movement, frowny/angry at the start of the interval, happy/surprised at the end of the interval | at 50% of the input interval |  |
| ParamBrowLAngle | eyebrow changing shape movement, frowny/angry at the start of the interval, happy/surprised at the end of the interval | at 50% of the input interval |  |
| ParamBrowRY | eyebrow down to up movement | at 50% of the input interval |  |
| ParamBrowRForm | eyebrow tilting movement, frowny/angry at the start of the interval, happy/surprised at the end of the interval | at 50% of the input interval |  |
| ParamBrowRAngle | eyebrow changing shape movement, frowny/angry at the start of the interval, happy/surprised at the end of the interval | at 50% of the input interval |  |
| **Mouth Movement** | | | |
| ParamMouthOpenY | mouth open movement, closed at start of interval, open at end of interval | at 0% of the input interval |  |
| ParamMouthForm | mouth frown/smile animation. frown at start of interval, smile at end of interval | at 50% of the input interval |  |
| ParamMouthSize | used for puckered lips from the center of the interval to start (normal to small size).    upper half of the interval is not used in this Animation Standard | at 50% of the input interval | **(non-standard-parameter)\\*** |
|  | | | |

- non-standard-parameters are totally optional. The Animaze Retargeting system automatically replaces them with other retargeting methods (e.g. puckered lips without the ParamMouthSize is implemented with the use of ParamMouthY and ParamMouthForm).

### 

### **Default Viseme Mapping (last revision Sept 20 2021**)

Visemes retargeting uses the Live2D model’s standard parameters for mouth open and form. A complete mapping of Viseme to Live2D parameter is depicted below.

|  |  |  |
| --- | --- | --- |
| **Viseme** | **Live2D Parameter** | **Value** |
| **AA** | ParamMouthOpenY | 1 |
| ParamMouthForm | 1 |
| **AH** | ParamMouthOpenY | 1 |
| ParamMouthForm | 0.6 |
| **AO** | ParamMouthOpenY | 1 |
| ParamMouthForm | 0 |
| **AW** | ParamMouthOpenY | 1 |
| ParamMouthForm | -0.5 |
| **OY** | ParamMouthOpenY | 1 |
| ParamMouthForm | -1 |
| **EH** | ParamMouthOpenY | 0.65 |
| ParamMouthForm | 0 |
| **IH** | ParamMouthOpenY | 0.65 |
| ParamMouthForm | -0.6 |
| **EY** | ParamMouthOpenY | 0.65 |
| ParamMouthForm | -0.3 |
| **Y** | ParamMouthOpenY | 0.65 |
| ParamMouthForm | -1 |
| **R** | ParamMouthOpenY | 0.5 |
| ParamMouthForm | 0.3 |
| **L** | ParamMouthOpenY | 0.5 |
| ParamMouthForm | 0.3 |
| **W** | ParamMouthOpenY | 0.7 |
| ParamMouthForm | -0.85 |
| **M** | ParamMouthOpenY | 0 |
| ParamMouthForm | -0.4 |
| **N** | ParamMouthOpenY | 0 |
| ParamMouthForm | -0.4 |
| **CH** | ParamMouthOpenY | 0.3 |
| ParamMouthForm | -0.4 |
| **FV** | ParamMouthOpenY | 0.15 |
| ParamMouthForm | -0.4 |

### **Extended Parameter Set (last revision Sept 20 2021**)

|  |  |  |  |
| --- | --- | --- | --- |
| **Live2D Parameter** | **Description** | **Default Value** | **Comments** |
| **Head Movement** | | | |
| ParamAngleX | head yaw movement | at 50% of the input interval |  |
| ParamAngleY | head pitch movement | at 50% of the input interval |  |
| ParamAngleZ | head roll movement | at 50% of the input interval |  |
| **Body Movement** | | | |
| ParamBodyAngleX | body yaw movement | at 50% of the input interval | not tracked by face trackers. Reserved for future use. |
| ParamBodyAngleY | body pitch movement | at 50% of the input interval | triggered by user's face leaning forward/backward |
| ParamBodyAngleZ | body roll movement | at 50% of the input interval | triggered by user's face moving on horizontal axis in camera feed |
| ParamBodyUpDown | body up/down movement | at 50% of the input interval | triggered by user's face moving on vertical axis in camera feed |
| ParamBreath | breathing movement | at 50% of the input interval |  |
| **Eyes Movement** | | | |
| ParamEyeLOpen | blink and eye wide open movement. | at 75% of the input interval | Default value is eye opened (75% of the interval), when blink occurs, value goes to 0% of the interval, when eye wide open occurs the value goes to 100% of the interval |
| ParamEyeROpen | blink and eye wide open movement. | at 75% of the input interval | Default value is eye opened (75% of the interval), when blink occurs, value goes to 0% of the interval, when eye wide open occurs the value goes to 100% of the interval |
| ParamEyeBallX | eye horizontal movement | at 50% of the input interval |  |
| ParamEyeBallY | eye vertical movement | at 50% of the input interval |  |
| ParamEyeLSmile | activated when smiling | at 0% of the input interval |  |
| ParamEyeRSmile | activated when smiling | at 0% of the input interval |  |
| ParamEyeBallForm | bends eyes contour to complement frown and smile expressions. Start of the interval is for frowning, while the end of the interval is for smiling. | at 50% of the input interval |  |
| ParamEyeForm | same as ParamEyeBallForm | at 50% of the input interval |  |
| **Eyebrows Movement** | | | |
| ParamBrowLY | eyebrow down to up movement | at 50% of the input interval |  |
| ParamBrowLForm | eyebrow tilting movement, frowny/angry at the start of the interval, happy/surprised at the end of the interval | at 50% of the input interval |  |
| ParamBrowLAngle | eyebrow changing shape movement, frowny/angry at the start of the interval, happy/surprised at the end of the interval | at 50% of the input interval |  |
| ParamBrowRY | eyebrow down to up movement | at 50% of the input interval |  |
| ParamBrowRForm | eyebrow tilting movement, frowny/angry at the start of the interval, happy/surprised at the end of the interval | at 50% of the input interval |  |
| ParamBrowRAngle | eyebrow changing shape movement, frowny/angry at the start of the interval, happy/surprised at the end of the interval | at 50% of the input interval |  |
| **Mouth Movement** | | | |
| ParamMouthOpenY | mouth open movement, closed at start of interval, open at end of interval | at 0% of the input interval |  |
| ParamMouthForm | mouth frown/smile animation. frown at start of interval, smile at end of interval | at 50% of the input interval |  |
| ParamMouthSize | used for puckered lips from the center of the interval to start (normal to small size).    used by wide smiles and frown from the center of the interval to the end (normal to large size) | at 50% of the input interval |  |
| ParamMouthX | mouth movement on the horizontal axis. | at 50% of the input interval | triggered by asymmetric smiles and jaw tracking. |
| ParamLipUnder | lower lip movement on vertical axis | at 50% of the input interval | triggered by pressed lips and unveil teeth tracked inputs |
| ParamLipUpper | upper lip movement on vertical axis | at 50% of the input interval | triggered by pressed lips and unveil teeth tracked inputs |
| ParamPuffCheeks | puffed cheeks | at 0% of the input interval | puffed cheeks input is tracked only by ARKit. On Windows Animaze also features puffed cheeks as a special pose automatically added by the system. |
| ParamTongue | moves tongue inside the mouth | at 0% of the input interval | parameter is not used by the tongue out movement that is detected by the face tracker, rather it is used for a more expressive viseme mapping |
| ParamTooth | clenches and opens teeth | at 0% of the input interval |  |
|  | | | |

A sample avatar (.avatar file, Live2D runtimes, and Live2D sources) using the extended parameters can be found [here](https://s3.amazonaws.com/animaze.us/Live2DExtended_Sample.zip) 

**Extended Parameter Set Viseme Mapping (last revision Sept 20 2021**)

Visemes retargeting uses the Live2D model’s standard parameters for mouth open and form. A complete mapping of Viseme to Live2D parameter is depicted below.

|  |  |  |
| --- | --- | --- |
| **Viseme** | **Live2D Parameter** | **Value** |
| AA/AO | ParamMouthOpenY | 1 |
| AH/AW | ParamMouthOpenY | 0.7 |
| ParamMouthSize | 0.75 |
| OY | ParamMouthOpenY | 0.3 |
| ParamMouthSize | 0.35 |
| EH | ParamMouthOpenY | 0.3 |
| ParamMouthSize | 0.75 |
| ParamTooth | 0.8 |
| ParamLipUnder | 0.6 |
| IH | ParamMouthOpenY | 0.4 |
| ParamMouthSize | 0.9 |
| EY | ParamMouthOpenY | 0.3 |
| ParamMouthSize | 0.9 |
| ParamTooth | 1 |
| Y | ParamMouthOpenY | 0.22 |
| R | ParamMouthOpenY | 0.3 |
| ParamMouthSize | 0.35 |
| ParamLipUnder | 0.6 |
| L | ParamMouthOpenY | 1 |
| ParamTongue | 1 |
| W | ParamMouthOpenY | 0.1 |
| ParamMouthSize | 0 |
| M | ParamLipUnder | 1 |
| ParamLipUpper | 1 |
| N | ParamMouthOpenY | 0.1 |
| ParamTooth | 1 |
| CH | ParamMouthOpenY | 0.2 |
| ParamTooth | 1 |
| FV | ParamTooth | 1 |
| ParamLipUnder | 0.2 |

## **Parameter Ranges**

The Animaze Retargeting System normalizes all values (interval 0 to 1) before applying the Live2D parameters so that the parameter ranges can be of any values (e.g. ParamMouthOpenY can be defined from -10 to 10 with default value 0, so when Animaze sets 0.75 - which is a half smile -, it will apply the value 5 to the ParamMouthOpenY parameter).

Having said that, we do suggest following ranges for the Live2D Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| **Item** | **Minimum values** | **Default values** | **Maximum values** |
| ParamEyeLOpen  ParamEyeROpen | 0 | 0.75 | 1 |
| ParamEyeBallX ParamEyeBallY | -1 | 0 | 1 |
| ParamBrowLY | -1 | 0 | 1 |
| ParamBrowLX | -1 | 0 | 1 |
| ParamBrowLAngle ParamBrowRAngle | 0 | 0.5 | 1 |
| (**\\***)ParamBrowLForm  (**\\***)ParamBrowRForm | 0.2 | 0.5 | 0.8 |
| ParamMouthForm | -1 | 0.5 | 1 |
| ParamMouthOpenY | 0 | 0 | 1 |
| ParamMouthSize | -1 | 0 | 1 |

(\\*)The values for **ParamBrowLForm** & **ParamBrowRForm** in the table make the eyebrows deform as intended with the current tracking system.

Additionally, you can check the standard cubism parameter list [**here**](https://docs.live2d.com/cubism-editor-manual/standard-parametor-list/?locale=en_us#) and [**here**](https://docs.live2d.com/cubism-editor-manual/facial-expression-system/?locale=en_us#).

To [import your Live2D model into Animaze]({{ '/manual/gettingstarted2d/importlive2d/' | relative_url }}), you need your model’s Live2D Runtime files. They should be organized in the standard folder hierarchy.

 Additionally, your model3.json file and .moc3 file must use the same filename (e.g. ‘myavatar.moc3 and ‘myavatar.model3.json’). If they have different filenames, Animaze may fail to import all of your model’s files.

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
