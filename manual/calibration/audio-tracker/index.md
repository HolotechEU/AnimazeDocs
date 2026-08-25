---
layout: page
title: "Audio Lip Tracker"
source_url: https://www.animaze.us/manual/calibration/audio-tracker
---

# Audio Lip Tracker

Animaze has four different Audio Lip tracker engines that you can pick from, to aid the avatar’s speech.

To test if a certain lip motion comes from the audio tracker or from the video tracker, you can temporarily stop the visual tracking (for instance block the camera’s view of your face with your hand) and say a few words, and see if the avatar's lips are moving. If they are, those motions were tracked via audio. In a similar way, you can stop audio tracking (mute the microphone) and say a few words, while the camera has a clear view of your face. If the lips on the avatar are moving, then those motions likely come from the visual tracking. This will help you figure out what motions come from which type of tracking.

If you do use Audio lip tracking to aid with speech articulation as an advanced user you need to be mindful of whether you want it to **complement** the visual tracking, and work together with it at the same time, or rather if you want it tofunctionally **replace** the visual tracking.

**Video and audio working together.**

The Audio tracking and video tracking working together and complementing each other is the default setting in Animaze. For high-performance tracking, you want to be mindful of the different time delays that each of them has. Typically, the visual tracker will be faster than the audio tracker, but in many cases, the time difference should not be too large and the end result should be serviceable.

There are cases, however, where microphones and/or their sound drivers do a fair amount of sound buffering for the purpose of sound preprocessing, and that takes place before the sound from the microphone is allowed to reach the Animaze app. To further compound the issue, accurate sound analysis in Animaze itself too requires a fair-sized sound buffer. What this all means is that, especially in fast speech scenarios, you might see situations where the visual tracker is much faster at displaying the lip motion, than the audio tracker. Because of this time difference, the two can even end up contradicting each other. In these cases, you need to either fix that de-sync or make a call on which one you prefer, as leaving both on and de-synced will not be a good experience.

For video production purposes (Animaze Video Export) there is a time offset setting in Animaze that you can use to time-align the output of the video and audio trackers, no matter how large the sound preprocessing delay ends up being. That functionality however is not available for real-time as it would mean delaying avatar reactions from all trackers to match the slowest tracker in the stack.

Still, should you want to do that in real-time, you can do it via third-party video broadcasting apps like ManyCam or OBS, as they allow you to route the video input through them, and add a bit of delay to the inbound video stream. This will help you offset the time difference between the faster video path and slower audio path and bring them back in sync.

**Favoring Lip Motions sourced from Video Tracking.**

If you want to lean more on Video Tracking, simply lower the Viseme Boost Slider in the Audio Tracking settings or turn off Audio tracking. If you use iPhone-based tracking, quite often you can do without Audio tracking altogether.

**Favoring Lip Motions sourced from Audio Tracking.**

The extreme way to lean on Audio tracking is by turning off Video tracking. However, that is an extreme solution because of how much data Video tracking provides to the avatars, beyond the mouth. What you can do if you want to allow Audio tracking to take precedence, but still use the video-tracking for everything else, is to alter the Advanced Tracking Settings by increasing temporal filtering sliders (turning off some inputs or adjusting the mapping ranges) of mouth aspects that are involved in speech articulation, just so that the overall face expression can still go through, but the fast speech-related lip motions coming from the visual tracker are largely filtered out. This way, only the fast lip motion from the audio is visible. Note that in many cases, if relying on audio-sourced lip motion, you might also have to offset the outgoing microphone stream a bit in your broadcasting software, to time-sync it to the audio-sourced lip motion on the screen.

### Animaze Embodiment - Calibration and Fine-Tuning

- [Emotional Connection Through Avatars]({{ '/manual/calibration/emotion-avatars/' | relative_url }})
- [Multi-Tracker: Motion Capture At Home]({{ '/manual/calibration/multi-tracker/' | relative_url }})
- [Visual Face Tracker: Top Shelf Experience]({{ '/manual/calibration/face-tracker/' | relative_url }})
- [Visual Face Tracker: Simplified Experience]({{ '/manual/calibration/simple-tracker/' | relative_url }})
- [Audio Lip Tracker]({{ '/manual/calibration/audio-tracker/' | relative_url }})
