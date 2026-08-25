---
layout: page
title: "Animations & Retargeting"
source_url: https://www.animaze.us/manual/vrmavatar/vrmanimations
---

# Animations & Retargeting

Animaze features a number of Animation Standards to properly support tracking to animation mappings for differently sourced models (fbx, vrm, gltf, glb). These standards are defined by a set of skeletal animations, blendshapes (morph targets), blendshape groups (vrm specific) and skeletal joints (used for procedural animations).

The integration of VRM models in Animaze has introduced the implementation of two Animation Standards that are most commonly used: VRoid and Perfect Sync (which uses the ARKit shapes). The difference in requirements between these two standards is the set of expression blendshapes, everything else is common.

The Animaze Retargeting system uses the VRoid Animation Standard as default for vrm sourced models and has the current requirements:

- Blendshape Groups (also referred to as Expressions in VRM terms or Blendshape Proxies as mentioned by UniVRM) - used for the facial expressions mapping.   
  Expression list is: NEUTRAL, JOY, FUN, ANGRY, SORROW, SURPRISED, BLINK\\_L, BLINK\\_R, A, E, O, U and I. More details in the Face Expression Retargeting section.
- Skeletal Joints - used for rigid head motions, gaze retargeting, body idle motion and body idle pose.   
  The following skeletal joints are used: spine, chest, upperChest, neck, head, leftUpperArm, leftLowerArm, rightUpperArm, rightLowerArm, leftEye and rightEye. More details in the following sections.

VRoid Expressions (Blendshape Groups) aren’t atomic motions, they affect the face of the avatar/model as a whole, which means expressions will be triggered by more than one tracking input (e.g. a FUN expression will be triggered by a tracked mouth smile and/or eyebrows going up). In other words, Animaze will map a more granular tracked movement to single avatar predefined emotion.

Known Issues:

- Lack of asymmetry in some expressions are a limitation of the VRoid Animation Standard and limited animations.
- Procedural animations do not account for mesh clippings.
- Procedural animations do not account for skinning issues (e.g. unwanted stretches).
- All animation ranges aren’t currently configurable.
- Extra Blendshape Groups (or Expressions) cannot be added to the VRoid Animation Standard.
- There is limited support for Special Actions and Poses.

## VRoid Animation Standard

The VRoid Animation Standard is implemented through single predefined avatar emotions (a pose for all face sections: eyebrows, eyelids and mouth), and triggering them uses more than one tracking input, which unfortunately can overlap. Animaze deals with input overlaps by prioritizing the mapped emotions, mentioned in the Observation section of the following table.

|  |  |  |  |
| --- | --- | --- | --- |
| VRM Blendshape Group Name | Triggered by | Asymmetry support | Observations |
| NEUTRAL | No other expression active | Not applicable |  |
| A | Open mouth neutral | Not applicable | not triggered if JOY, SORROW or O expressions are active |
| JOY | Open mouth while smiling or eyebrows up | Not applicable | JOY has priority over SORROW |
| SORROW | Open mouth while frowning or eyebrows down | Not applicable | JOY has priority over SORROW |
| O | Open mouth while lips are pursed (lips funnel) | Not applicable | JOY and SORROW have priority over O |
| SURPRISED | Open mouth while eyes wide open | Not applicable | not triggered if JOY, SORROW or O expressions are active |
| FUN | Smile with mouth closed | No | FUN has priority over ANGRY |
| ANGRY | Frown with mouth closed | No | FUN has priority over ANGRY |
| U | Purse lips with mouth closed | No | FUN and ANGRY have priority over U |
| BLINK\\_L | Blink left eye neutral | Yes |  |
| BLINK\\_R | Blink right eye neutral | Yes |  |
| Visemes (Audio Based Lipsync) | | | |
| A | Visemes AA and AH | Not applicable |  |
| I | Visemes IH, Y and FV | Not applicable |  |
| U | Visemes OY | Not applicable |  |
| E | Visemes EY and EH | Not applicable |  |
| O | Visemes AO and AW | Not applicable |  |
|  | | |  |

## Perfect Sync

The Perfect Sync Animation Standard aims to enhance the expressivity of the avatar with more atomic movements of various parts of the face, giving the user more control over the emotions and expressions one wants to exhibit.

The standard uses 52 blendshapes from the iOS ARKit Face Tracking module, so it is best to follow the ARKit docs on how to build them (see: <https://developer.apple.com/documentation/arkit/arblendshapelocation> - each Blendshape is demonstrated through images). List of the 52 shapes and expected names down below.

|  |  |  |  |
| --- | --- | --- | --- |
| BrowDownLeft | EyeLookInRight | MouthClose | MouthRollLower |
| BrowDownRight | EyeLookOutLeft | MouthDimpleLeft | MouthRollUpper |
| BrowInnerUp | EyeLookOutRight | MouthDimpleRight | MouthShrugLower |
| BrowOuterUpLeft | EyeLookUpLeft | MouthFrownLeft | MouthShrugUpper |
| BrowOuterUpRight | EyeLookUpRight | MouthFrownRight | MouthSmileLeft |
| CheekPuff | EyeSquintLeft | MouthFunnel | MouthSmileRight |
| CheekSquintLeft | EyeSquintRight | MouthLeft | MouthStretchLeft |
| CheekSquintRight | EyeWideLeft | MouthLowerDownLeft | MouthStretchRight |
| EyeBlinkLeft | EyeWideRight | MouthLowerDownRight | MouthUpperUpLeft |
| EyeBlinkRight | JawForward | MouthPressLeft | MouthUpperUpRight |
| EyeLookDownLeft | JawLeft | MouthPressRight | NoseSneerLeft |
| EyeLookDownRight | JawOpen | MouthPucker | NoseSneerRight |
| EyeLookInLeft | JawRight | MouthRight | TongueOut |

Observations:

- Perfect Sync Animation Standard uses Blendshape Groups rather than raw blendshapes names, same as the VRoid Standard.
- jawForward shape isn’t mapped at all as we feel there’s no suitable tracker (not even ARKit) that can provide the consistent tracking data for this tracking input.
- Viseme mapping is the same as VRoid Standard.

## Rigid Head Motions Retargeting

The standard VRM model exported from VRoid Studio has no skeletal animations, so the tracked head motions are directly retargeted on the model’s skeleton joints. The system assumes the model skeleton follows the VRM standard rules (see [https://github.com/vrm-c/vrm-specification/blob/master/specification/0.0/README.md#vrm-rule](https://github.com/vrm-c/vrm-specification/blob/master/specification/0.0/README.md#vrm-rules)). It is assumed that the retargeted joints have no additional transform and the world transform has the rotation 0, 0, 0 in OpenGL style axis.

The set of joints/bones needed for rigid head motions retargeting is:

- spine
- chest
- upperChest
- neck
- head

The table below shows the motion ranges and the affected bones/joints.

|  |  |  |
| --- | --- | --- |
| Rigid Motion | Mapped Motion Range (Degrees) | Affected Bones (and weights) |
| Head Yaw | \[-50, 50\] | neck (0.2) and head (0.8) |
| Head Roll | \[-30, 30\] | neck (0.4) and head (0.6) |
| Head Pitch | \[-30, 30\] | neck (0.5) and head (0.5) |
| Body Yaw | \[-45, 45\] | spine (0.3), chest (0.3) and upperChest (0.4) |
| Body Roll | \[-30, 30\] | spine (0.3), chest (0.3) and upperChest (0.4) |
| Body Pitch | \[-30, 30\] | spine (0.3), chest (0.3) and upperChest (0.4) |

These bones can be configured through the Humanoid System of the VRM extension

## Eye Pupil Motions

The eye pupil motions are retargeted in the same way as the rigid head motions, by directly manipulating the transforms of the leftEye and rightEye bones. The range of motion is \[-10, 10\] degrees for both rotation axis (yaw and pitch), but this may vary depending on how the model is being built. The range was determined through an empirical process done on the sample models from VRoid Studio.

## Procedural Behaviors

Animaze supports a wide range of procedural behaviors, including a ‘look at camera’ setting and natural eye movement. These behaviors are implemented through the core tracking interpretation module in Animaze, and are usually applied through skeletal animations and blendshapes that the avatar already features. In the case of VRM models, some of these behaviors need a custom implementation:

- VRM models import in T-Pose, although if you add the idle1 animation, it will be applied. We’ve added an Idle Pose to set the model in a usable state.
- VRM models import in a static T-Pose, so we’ve added a small procedural breathing animation to make the avatar more lively.
- Eyes look-at-camera behavior has been added and uses the Eye Pupil Motions technique for mapping the motion.
- Head look-at-camera behavior uses the Rigid Head Motion technique for mapping the motion, but overrides the tracking data.

### Idle Pose

VRM models import in static T-Pose so we’ve procedurally rotated a set of bones to get the model’s hands down. The joint/bones used are: leftUpperArm, leftLowerArm, rightUpperArm and rightLowerArm. The upper arms are rotated 70 degrees around the Z Axis (roll motion), and the lower arms an additional of 10 degrees around the Z Axis.

Note that the procedural Idle Pose doesn’t account for mesh clipping and is currently not configurable

### Idle Motion (Breathing)

The idle motion we’ve added is a very subtle breathing animation that affects the chest and upperChest joints/bones. The idle motion is a uniform scaling (all axis) animation in the interval 1 to 1.025, with the assumption that the joint scaling is set by default to 1, as the VRM rules state.

### Eyes Look-at-Camera

The look-at-camera behavior uses the head joint position and orientation (so, assumed to follow the VRM rules) to compute the look angle to the render camera and is applied through the Eye Pupil Behavior retargeting technique.

### Head Look-at-Camera

The Head Look-at-Camera behavior orientates the head to the render camera and uses the same head joint position and orientation as the Eyes Look-at-Camera, while the animation mapping is done through the Rigid Head Motion technique.

## Special Actions & Poses

Special Actions and Poses are supported on .VRM sourced models in a limited way, they need to be imported for the specific avatar in use and there is currently no support for generic animations that can be shared between two or more .VRM sourced models.

There are two main ways of adding special actions or poses:

1. Provide animations with the .VRM model (the base .gltf format supports skeletal animation). After import these animations can be added as Special Actions or Poses through the appropriate Editor function.

        2. Import the .VRM model and then import the special animations as .FBX source files which are detected by the Special Actions & Poses menus in the Editor as animation sources. Note that these FBX animation sources should match 100% the .VRM skeletal hierarchy and have animation keyframes on all joints of the skeleton.

### Importing VRM Format Models

- [.VRM General Flow]({{ '/manual/vrmavatar/vrmgeneral/' | relative_url }})
- [Geometry & Materials & Textures]({{ '/manual/vrmavatar/vrmgeometry/' | relative_url }})
- [Animations & Retargeting]({{ '/manual/vrmavatar/vrmanimations/' | relative_url }})
- [Physics]({{ '/manual/vrmavatar/vrmphysics/' | relative_url }})
- [PerfectSync capabilities to .VRM sourced avatars]({{ '/manual/vrmavatar/vrmperfectsync/' | relative_url }})
- [Import Your .VRM Model Into Animaze]({{ '/manual/vrmavatar/vrmimport/' | relative_url }})
- [Troubleshoot & Support]({{ '/manual/vrmavatar/troubleshootandsupportvrmeditor/' | relative_url }})
