---
layout: page
title: "Multi-Tracker: Motion Capture At Home"
source_url: https://www.animaze.us/manual/calibration/multi-tracker
---

# Multi-Tracker: Motion Capture At Home

Animaze can track various aspects of your expression and speech, using one or more types of trackers at the same time. Usually, a camera-based visual face tracker provides the bulk of the data, and often an audio tracker can be used to complement it in regard to lip motion, especially useful for fast speech. There are also inferred body motions and hand motions, though let’s focus on the head and face.

In order to allow these trackers to capture the best data possible, there are a few physical setup considerations for your expression capture space.

## Visual Tracking Hardware Considerations

- **Camera Sensor Quality:** Higher quality camera sensors are able to more reliably capture expression nuances than inexpensive cameras. They both work in the end, but a 60 fps input feed will be able to capture faster motions (like fast blinks) than a 30- FPS input feed will not. Grain-free input feeds will generate less jitter than grainy video input. Higher input resolutions (4k or Full HD over a more manageable 720p or 480p) don't automatically lead to better face tracking. They will however cause higher CPU occupancy. Please note that the iPhone TrueDepth camera will fare better than any regular camera when used with Animaze, given its depth perception capabilities, both in them of tracking quality and system load.
- **Camera Sensor Placement:** Ideally the camera should film your face head-on. The ideal place is on the top of your main monitor, whose upper edge should ideally be at your eye level. The more offset the camera is from this central position, the more expression nuance will be lost. Never bring it lower than the eye level (such as under your monitor) as from that angle many aspects of the tracking will be sub-par.
- **Lighting:** Proper lighting is key to quality motion capture. Read more about it here: [Animaze FAQ - Lighting]({{ '/faq/tech/tipsandtricksfortracking/' | relative_url }} "https://www.animaze.us/faq/tech/tipsandtricksfortracking")
- **Obstructions:** Anything that blocks the camera’s view of your face, like hair bangs draping down on the side of your face or any form of elaborate headwear, will progressively decrease the tracking quality.

## Audio Tracking Set-up Considerations

- **Background noise in the microphone feed:** When using audio-based lip motion, sometimes background noise can trigger unwanted lip motion. You can use the noise gate functionality in Animaze, to address that, or other ways of preventing background noise from reaching your microphone. If a clean sound stream is not possible, even with noise gate settings, you may want to consider toggling off audio-based tracking.

### Animaze Embodiment - Calibration and Fine-Tuning

- [Emotional Connection Through Avatars]({{ '/manual/calibration/emotion-avatars/' | relative_url }})
- [Multi-Tracker: Motion Capture At Home]({{ '/manual/calibration/multi-tracker/' | relative_url }})
- [Visual Face Tracker: Top Shelf Experience]({{ '/manual/calibration/face-tracker/' | relative_url }})
- [Visual Face Tracker: Simplified Experience]({{ '/manual/calibration/simple-tracker/' | relative_url }})
- [Audio Lip Tracker]({{ '/manual/calibration/audio-tracker/' | relative_url }})
