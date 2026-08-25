---
layout: page
title: "Advanced Tracking Configuration"
source_url: https://www.animaze.us/manual/appmanual/advtrack
---

# Advanced Tracking Configuration

Advanced Tracking Configuration allows you to fine-tune the face tracker. There are two categories of advanced tracking configurations. The first is Overrides, and the second is Tracker inputs. Override configurations ignore tracker inputs and animate your avatar with procedural rules that you set. Tracker Input configurations refine how our web camera tracker interprets the tracking inputs. Keep reading for more details on each control.

1. **Overrides**

Use overrides to replace tracker inputs and use rules to dictate your avatar’s movement.

- **Enable Tracked Blinking** - when turned ON, the tracker uses visual inputs to interpret when you and your avatar blink.

- **Enable Auto-Blink** - when turned ON, the avatar blinks according to a set cadence, rather than relying on visual tracker inputs. If Auto-Blink is ON, you can then set the frequency that the avatar blinks.

PRO TIP: Auto-Blink is particularly handy if you have glasses with thick frames or reflexive lenses.

- **Enable Look-at-Camera** - when turned ON the avatar, the avatar always looks at the camera. You can limit or expand the range the avatar will maintain eye contact with the camera by using this slider.

- **Enable Look-at-Camera Head** - when turned ON, this option forces the avatar to face the camera, regardless of how your head and body turn.

PRO TIP: This tracking override option is useful if you use multiple monitors while  streaming and your avatar’s head is twitching and snapping a lot.

- **Enable Cross-Eye** - when turned ON, the avatar can cross its eyes when you cross your eyes. Unless you plan to cross your eyes, we recommend leaving this override off to avoid the possibility that the facial tracker mistakenly detects crossed eyes.

- **Enable Pupil Behavio**r - when turned ON, this option allows you to control your avatar’s pupil movement. Eyes move constantly; this is called sciatic eye movement. Increasing the frequency causes more sciatic movement, making your avatar look more alert. Reducing the frequency will make your avatar look calmer. Without any Pupil Behavior your avatar is prone to look glassy eyed and doll-like.

2. **Tracker inputs**

Each of the tracker inputs has a set of four controls that functions the same way. These controls are available for the **Eyes, Brows,** **Jaws** and **Cheeks****,** **Mouth** and **Tongue****, Nose, Head, Body**. Below you will find more information about each of the four controls:

- **Global Symmetry**: When this option is enabled, left and right settings are always even and asymmetrical expressions like an eyebrow raise or a crooked smile are impossible.

- **Range and Intensity slider**: The purple marker within the slider represents the movements of the input.  The leftmost side of the slider represents the minimum movement of the expression, while the rightmost side of the slider represents the maximum.

For example, if you look at the eyebrow input and wiggle your eyebrows, you should see the purple line move.

On the Outer Brow Up setting, moving the slider towards the up arrow increases the upward input range the tracker interprets. As you raise your eyebrows, once the marker leaves the slider range and gets closer to the up arrow, the avatar’s eyebrows will not raise any further (even though your eyebrows are). 

In general, we recommend adjusting the grey slider range so that the purple marker stays within the grey range. That said, if you want your avatar to amplify your movements, consider making the grey ranges narrower. 

- **Movement Smoothing**: Movement Smoothing defines how quickly an avatar transitions from one expression or movement to another.  When considering smoothness, keep in mind that there is a trade-off with responsiveness. In other words, the less smooth the setting (slider closer to the down arrow), the more responsive the avatar, but the movements may feel choppier.

- **High-Intensity Smoothing**: High-Intensity Smoothing applies to quick and large movements such as a quick nod or head turn. Ideally, High-Intensity Smoothing is lower than Movement Smoothing so that fast movements are mimicked as fast by the avatar, and normal movements are smoothed.

**Head:**

1. **Range and Intensity** defines the position of the avatar’s head, either up or down. Move the left side of the grey range right to point the avatar’s head upwards. Move the right side of the grey range left to point the avatar’s head downwards. 

2. **Head Yaw Movement** defines the avatar’s head position, either left or right. Move the right side of the grey range left to point the avatar’s head to the left. Move the left side of the grey range right to point the avatar’s head to the right.

3. **Head Roll Movement** makes the avatar tilt its head either left or right. Move the left side of the grey range to the right to tilt the avatar’s head to the right. Move the right side of the grey range to the left to tilt the avatar’s head to the left. 

**Body:**

1. **Body Pitch Movement** - this slider sets the avatar’s body position. Move the range left, and the avatar’s body tilts forward. Move the range right, and the avatar’s body tilts backward.

2. **Body Yaw Movement** - this slider makes the avatar’s body turn right or left. Move the right side of the range left to turn the avatar’s body to the left; move the left side of the range right to turn the avatar’s body to the right. 

3. **Body Roll Movemen**t - this slider tilts the avatar’s body right or left.

### Animaze Desktop Manual

- [Introduction]({{ '/manual/appmanual/appintro/' | relative_url }})
- [Avatar Customization and Retexturing]({{ '/manual/appmanual/avatars/' | relative_url }})
- [Background types, importing and customization]({{ '/manual/appmanual/appbackgrounds/' | relative_url }})
- [Voice Effects]({{ '/manual/appmanual/appvoiceeffects/' | relative_url }})
- [Emotes]({{ '/manual/appmanual/appemotes/' | relative_url }})
- [Props types and customization]({{ '/manual/appmanual/appprops/' | relative_url }})
- [Using Spout2 sources in Animaze]({{ '/manual/appmanual/spout2/' | relative_url }})
- [Avatar Animations and special actions]({{ '/manual/appmanual/appanimations/' | relative_url }})
- [Quick Scenes]({{ '/manual/appmanual/quickscenes/' | relative_url }})
- [Dedicated Capture Window]({{ '/manual/appmanual/dedwind/' | relative_url }})
- [Leveraging Voicemod controls in Animaze]({{ '/manual/appmanual/voicemod/' | relative_url }})
- [Animaze Virtual Camera]({{ '/manual/appmanual/virtualcam/' | relative_url }})
- [Importing 3D avatars and hybrid avatars]({{ '/manual/appmanual/import3dh/' | relative_url }})
- [Importing 2D avatars]({{ '/manual/appmanual/import2d/' | relative_url }})
- [Importing .VRM avatars]({{ '/manual/appmanual/vrmimp/' | relative_url }})
- [Importing Ready Player Me avatars]({{ '/manual/appmanual/importrpms/' | relative_url }})
- [Select Trackers]({{ '/manual/appmanual/trackers/' | relative_url }})
- [iPhone tracking]({{ '/manual/appmanual/iphonetrack/' | relative_url }})
- [Webcam Tracker]({{ '/manual/appmanual/webcamtracker/' | relative_url }})
- [Tobii Eye tracker]({{ '/manual/appmanual/tobii/' | relative_url }})
- [Ultraleap tracker]({{ '/manual/appmanual/ultra/' | relative_url }})
- [Audio Based Lip sync]({{ '/manual/appmanual/audiosync/' | relative_url }})
- [Advanced Tracking Configuration]({{ '/manual/appmanual/advtrack/' | relative_url }})
- [Using (alpha) Maxine AR Face Tracking in Animaze]({{ '/manual/appmanual/maxine/' | relative_url }})
- [Subscriptions]({{ '/manual/appmanual/subs/' | relative_url }})
- [Minimum Requirements for PCs]({{ '/manual/appmanual/requir/' | relative_url }})
- [Keybinds controls]({{ '/manual/appmanual/keybinds/' | relative_url }})
- [Optimizing Web Camera Tracking with Camera Angle and Ambient Light]({{ '/manual/appmanual/optwebcam/' | relative_url }})
