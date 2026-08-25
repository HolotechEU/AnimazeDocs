---
layout: page
title: "Animaze Desktop: How can I add a video/audio delay after saving a recording?"
source_url: https://www.animaze.us/faq/tech/delayafterrecording
redirect_from:
  - /faq/animazedesktop/delayafterrecording/
---

# Animaze Desktop: How can I add a video/audio delay after saving a recording?

Video Recording in Animaze is in Early Access and has some known issues. Sometimes videos recorded through Animaze will have their audio and video slightly out of sync.

We are working on system-level fixes to eliminate this problem. Until those fixes are live, you can use any video editing program to re-sync your audio and video manually. We’re going to show you how to do this in OpenShot. OpenShot is a free open source video editing tool that you can download from: <https://www.openshot.org/download/>.

Whenever you are recording, make sure you are properly lit and your avatar is calibrated right before recording. This will ensure you can create the highest quality output. For more info, please check our FAQs regarding lighting and webcam setup [here]({{ '/faq/animazedesktop/tipsandtricksfortracking/' | relative_url }}).

Additionally, please note that audio sync results may vary depending on what microphone you use.

If you have performance issues when recording (such as dropped frames) remember to turn on V-sync and set the app to run at a lower frame rate (48 or 30 fps) from the Animaze Settings menu in the Video Graphics tab. Lowering Render Scale, Shadow Map Resolution, and Fur Quality will also increase video stability and quality.

Currently, Animaze videos are captured at a static resolution of 1280x693 pixels. 

Here are the instructions for manually re-syncing your audio and video using OpenShot:

 Open OpenShot video editor and drag your Animaze Recording over the "Project Files" tab

![]({{ '/assets/images/43_01_How_to_add_a_videoAudio_delay_after_saving_a_recording-fd5f0b68.png' | relative_url }}){: width="800" height="436"}

From the "Project Files" tab drag the video to one of the Timeline Track

![]({{ '/assets/images/43_02_How_to_add_a_videoAudio_delay_after_saving_a_recording-6795cf54.png' | relative_url }}){: width="800" height="439"}

Right click on the video in the Timeline tab and go to "Separate Audio-\>Single Clip

![]({{ '/assets/images/43_03_How_to_add_a_videoAudio_delay_after_saving_a_recording-9702e50a.png' | relative_url }}){: width="800" height="439"}

Click and drag the audio track to move the audio until it is in sync with the action happening in the video

![]({{ '/assets/images/43_04_How_to_add_a_videoAudio_delay_after_saving_a_recording-52b961d6.png' | relative_url }}){: width="800" height="438"}

Export the video in any format you choose

![]({{ '/assets/images/43_05_How_to_add_a_videoAudio_delay_after_saving_a_recording-605fc12e.png' | relative_url }}){: width="512" height="280"}

![]({{ '/assets/images/43_06_How_to_add_a_videoAudio_delay_after_saving_a_recording-9c5a38dc.png' | relative_url }}){: width="800" height="440"}
