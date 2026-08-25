---
layout: page
title: "Converting Live2D Avatars from Facerig to Animaze"
source_url: https://www.animaze.us/manual/convertavatars
---

# Converting Live2D Avatars from Facerig to Animaze

Animaze makes it easy to turn almost any Live2D model into a fully-functioning avatar in a few simple steps. If you have a Live2D model that you would like to use as an Animaze avatar, this guide will tell you how to do it. This guide is appropriate for all Live2D models, including models that you may have used as avatars in FaceRig!

Remember, Live2D is included in all versions of Animaze by default - there is no need for a DLC to use Live2D characters. Download Animaze for free [here](http://animaze.tv/steam)!

NOTE (29.092021):

We have updated this documentation to reflect new improvements made to Animaze that make importing Live2D models much simpler. The old instructions that used to live on this page have been redacted, as they are no longer accurate.

### **Live2D Model Requirements & File Structure:**

To work with Animaze, your Live2D model must be exported with the Live2D Cubism Editor version 3.0 or higher. Cubism 3.0 was released in Spring 2017, so if your model was created after, it is very likely to meet this requirement. 

### **Motion Parameter List**

Animaze fully supports the FaceRig motion parameter naming convention, so you can use both capitalized camel case (new Live2D naming convetion - e.g. ParamAngleX) or upper-snake case (legacy live2D naming convention - e.g. PARAM\\_ANGLE\\_X).

Animaze supports two distinct Animation Standards for Live2D avatars:

- the Default one which is the most widespread and works with virtually all vtubing platforms.
- the Extended Parameter Set which aims to improve on the expressivity of Live2D avatars and map key tracking inputs that otherwise would be used only for 3D avatars. A sample avatar (.avatar file, Live2D runtimes, and Live2D sources) using the extended parameters can be found [here](https://s3.amazonaws.com/animaze.us/Live2DExtended_Sample.zip) .

### **Default Live2D Animation Standard Parameters (last revised 20 Sep 2021)**

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
| ParamMouthSize | used for puckered lips from the center of the interval to start (normal to small size).  upper half of the interval is not used in this Animation Standard | at 50% of the input interval | **(non-standard-parameter)\\*** |
|  | | | |

*\\*non-standard-parameters are totally optional. The Animaze Retargeting system automatically replaces them with other retargeting methods (e.g. puckered lips without the ParamMouthSize is implemented with the use of ParamMouthY and ParamMouthForm).*

### **Default Viseme Mapping (last revised 20 Sep 2021)**

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

### **Extended Parameter Set (last revised 20 Sep 2021)**

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
| ParamMouthSize | used for puckered lips from the center of the interval to start (normal to small size).  used by wide smiles and frown from the center of the interval to the end (normal to large size) | at 50% of the input interval |  |
| ParamMouthX | mouth movement on the horizontal axis. | at 50% of the input interval | triggered by asymmetric smiles and jaw tracking. |
| ParamLipUnder | lower lip movement on vertical axis | at 50% of the input interval | triggered by pressed lips and unveil teeth tracked inputs |
| ParamLipUpper | upper lip movement on vertical axis | at 50% of the input interval | triggered by pressed lips and unveil teeth tracked inputs |
| ParamPuffCheeks | puffed cheeks | at 0% of the input interval | puffed cheeks input is tracked only by ARKit. On Windows Animaze also features puffed cheeks as a special pose automatically added by the system. |
| ParamTongue | moves tongue inside the mouth | at 0% of the input interval | parameter is not used by the tongue out movement that is detected by the face tracker, rather it is used for a more expressive viseme mapping |
| ParamTooth | clenches and opens teeth | at 0% of the input interval |  |
|  | | | |

### **Extended Parameter Set Viseme Mapping (last revised 20 Sep 2021)**

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

To import your Live2D model into Animaze, you need your model’s Live2D Runtime files. They should be organized in the standard folder hierarchy

 Additionally, your model3.json file and .moc3 file must use the same filename (e.g. ‘myavatar.moc3 and ‘myavatar.model3.json’). If they have different filenames, Animaze may fail to import all of your model’s files.

### Step 1: Import Your Model in the Animaze App

The simplest way to import any Live2D model (including one you used with FaceRig) into Animaze is through Animaze’s built in Live2D Import feature.

Simply open Animaze, click on the Avatar Gallery in the side menu bar, and click on the ”\+” icon under My Avatars shelf. When the file browser opens, navigate to your Live2D model’s folder, select your avatar’s ‘model3.json’ file and click ‘open’ to begin the import process.

When the file browser opens, navigate to your Live2D model’s folder, select your avatar’s ‘model3.json’ file and click ‘open’

Your avatar will appear in Animaze!

![]({{ '/assets/images/importLive2Danimaze1-6f8a75c6.gif' | relative_url }}){: width="800" height="470"}

### Step 2: Test Your Avatar

Now that you’ve imported your avatar, you are free to use it in Animaze as you see fit! In most cases, Animaze will automatically import your model’s motion parameters, special actions, and special poses.

Make sure to test your avatar and ensure it is working as expected. If it does, you are all set, and don’t need to take anymore action. 

Congratulations on importing your Live2D Model to Animaze!

### If You Need to Fix Your Avatar...

If your avatar isn’t behaving as expected, you’ll need to import the avatar into the Animaze Editor and try a few simple fixes. In the Animaze Editor, you can fix two common issues with Live2D avatars: blurry/low-res avatars, and certain face/body parts not responding to tracking input.

[\[Link to Debugging Your Live2D Avatar\]]({{ '/manual/convertavatars/convertdebugging/' | relative_url }})

### Converting Avatars from Facerig to Animaze

- [Converting Live2D Avatars from Facerig to Animaze]({{ '/manual/convertavatars/convert2davatar/' | relative_url }})
- [Converting 3D Avatars from Facerig to Animaze]({{ '/manual/convertavatars/convert3davatar/' | relative_url }})
- [Debugging your Live2D avatar in the Animaze Editor]({{ '/manual/convertavatars/convertdebugging/' | relative_url }})
