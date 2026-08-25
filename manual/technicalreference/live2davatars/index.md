---
layout: page
title: "Live2D Avatars"
source_url: https://www.animaze.us/manual/technicalreference/live2davatars
---

# Live2D Avatars

## **Overview**

Animaze supports Live2D powered models for various Animaze items such as: 2D avatars, hybrid avatars (3D geometry with Live2D textures), animated backdrops, animated overlays and animated light masks (or light cookies). The Animaze platform supports Live2D models that are exported for the runtime Cubism 3\+ (tested with 3.0, 3.1, 3.2, 3.3 and 4.0 models).

On a technical level, Live2D models are first rendered to an Animaze render target (basically a separate texture) and then rendered on the screen or used as a texture for various other items (e.g. face texture for a 3D avatar).

The Animaze system gathers as much information as possible from the runtime Live2D models in order to have them being run and rendered, out of the box, without too much additional custom configuration, as the models are thought and designed in the Cubism Editor.

**These are the specific files that are gathered automatically when importing a Live2D model in the Animaze platform:**

- model meta info like **\\*.moc3** (Live2D model file) and **\\*.png** textures will be parsed from the \\***.model3.json** file.
- special actions (full animations that run to the end and then the model goes to idle. These animations override tracking remapping) – the system will look for \\*.**motion3.json** files in the **motions/** folder of the avatar.
- special poses (single frame animations, the pose is kept. These animations override tracking remapping) - the system will look for \\***.exp3.json** files in **expressions/** folder of the avatar.
- idle animations – the system will parse the **\\*.model3.json** file and look for motion files grouped into the “Idle” group, first **\\*.motion3.json** file in that group will become the default idle animation.
- default idle pose (which can hide certain parts for the default pose) - \\***.pose3.json** file
- physics – \\***.physics.json** file

**This is the additional and optional info that can be configured after the initial import:**

- friendly (decorated) name and description (default values are the name of the Live2D **\\*.model3.json** file name).
- Live2D model rendering resolution (default 2048).
- position and scale in the Animaze canvas (Animaze render target)
- avatar framing through Animaze rendering camera options
- reordering special actions, special poses and idle animations
- parameter tracker inputs remapping (i.e. an animation input doesn’t follow the naming convention, you can remap it to an existing tracker input).
- retargeting overrides (i.e. adding other animation inputs - e.g. tail animation inputs - to be tracked by existing tracker inputs).

## **Animation Standards**

Animation Standards refer to the sets of Live2D parameter inputs of the model that are required by the Animaze Retargeting System to map the raw tracking data (e.g. from face trackers) to the model's movement.

Animaze supports two distinct Animation Standards for Live2D avatars:

- the Default one which is the most widespread and works with virtually all vtubing platforms.
- the Extended Parameter Set which aims to improve on the expressivity of Live2D avatars and map key tracking inputs that otherwise would be used only for 3D avatars. A sample avatar (.avatar file, Live2D runtimes, and Live2D sources) using the extended parameters can be found [here](https://s3.amazonaws.com/animaze.us/Live2DExtended_Sample.zip) .

### **Default Live2D Animation Standard Parameters **(last revision** 20 Sep 2021)**

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

### **Default Viseme Mapping ****(last revision** 20 Sep 2021)****

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

### **Extended Parameter Set ****(last revision** 20 Sep 2021)****

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

### **Extended Parameter Set Viseme Mapping ****(last revision** 20 Sep 2021)****

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

### .avatar format Technical Reference

- [What is Animaze and what is the “.avatar” format?]({{ '/manual/technicalreference/avatarformat/' | relative_url }})
- [Avatar complexity tiers]({{ '/manual/technicalreference/complexitytiers/' | relative_url }})
- [Geometry and Rules]({{ '/manual/technicalreference/geometryandrules/' | relative_url }})
- [Textures and Materials]({{ '/manual/technicalreference/texturesandmaterials/' | relative_url }})
- [UV Mapping]({{ '/manual/technicalreference/uvmapping/' | relative_url }})
- [Particle System]({{ '/manual/technicalreference/particlesystem/' | relative_url }})
- [Sound Effects]({{ '/manual/technicalreference/soundeffects/' | relative_url }})
- [Camera]({{ '/manual/technicalreference/camera/' | relative_url }})
- [Live2D Avatars]({{ '/manual/technicalreference/live2davatars/' | relative_url }})
- [Animation]({{ '/manual/technicalreference/animation/' | relative_url }})
- [Visemes Animations & Expression Poses]({{ '/manual/technicalreference/animationposes/' | relative_url }})
- [Special Actions]({{ '/manual/technicalreference/specialaction/' | relative_url }})
- [Deformation]({{ '/manual/technicalreference/deformation/' | relative_url }})
- [Modify Proportions]({{ '/manual/technicalreference/modifyproportions/' | relative_url }})
- [Skeleton]({{ '/manual/technicalreference/skeleton/' | relative_url }})
- [Full Body Motion Tracking]({{ '/manual/technicalreference/fullbodytracking/' | relative_url }})
- [Animaze Physics]({{ '/manual/technicalreference/animazephysic/' | relative_url }})
- [Props]({{ '/manual/technicalreference/props/' | relative_url }})
- [Backgrounds]({{ '/manual/technicalreference/backgrounds/' | relative_url }})
