---
layout: page
title: "Alpha Transparency w/ OBS Spout2 Plugin (recommended)"
source_url: https://www.animaze.us/manual/streaming-transparency/spout
---

# Alpha Transparency w/ OBS Spout2 Plugin (recommended)

We’ll use the Dedicated Capture Window from Animaze with the Broadcast to Spout2 option active and get the Animaze video frames in Animaze through the OBS Spout Capture source.

Spout2 is a video frame sharing system for Microsoft Windows which allows sharing the Animaze video frame with OBS in a very efficient manner. The Spout method isn’t limited to OBS, any other application that integrates the Spout2 library can get Animaze video frames through this method.

This method comes with the following advantages:

- the most efficient method in terms of CPU/GPU resources usage
- best transparency blending method as it uses alpha channel so furry will look great

## Steps

(**in Animaze** - *only needed for first-time use*) We are going to install the Spout2 plugin that allows OBS to use a Spout2 source. Go to Settings \> Dedicated Capture Window and click the **Install Spout2 OBS Plugin** option. Follow the installation instructions.

![]({{ '/assets/images/1b117797-1f11-4cd4-b22c-32851ee563f8-f15f951d.png' | relative_url }}){: width="402" height="413"}

![]({{ '/assets/images/f84660a9-2b05-4cbc-9076-de15312ff38b-97c4d7c7.png' | relative_url }}){: width="495" height="384"}

(**in Animaze**) Open the Dedicated Capture Window (hotkey Ctrl\+S)  
(**in Animaze**) Right-click on the Capture Window and click the **Broadcast to Spout2** button

![]({{ '/assets/images/a570d0d8-56dd-4c47-ab4d-07f3271b614e-e03ae150.png' | relative_url }}){: width="673" height="446"}

(**in Animaze**) Right-click on the Dedicated Capture Window and select the Alpha Transparency option. This will allow us to use a transparent background in OBS.

![]({{ '/assets/images/b007ac6e-02d4-402e-af17-4cff3ab64011-99b07099.png' | relative_url }}){: width="549" height="415"}

(**in Animaze**) Right-click on the Dedicated Capture Window and select the Alpha Transparency option. This will allow us to use a transparent background in OBS.

![Streaming with a transparent background in Animaze]({{ '/assets/images/b007ac6e-02d4-402e-af17-4cff3ab64011-99b07099.png' | relative_url }} "Animaze Manuals - Streaming with a transparent background"){: width="549" height="415"}

(**in OBS**) In the Sources section, right-click \> Add and click the Spout2 Capture option. You will be prompted with an Properties dialog.

![Find out here how you can stream with a transparent background using Animaze by FaceRig]({{ '/assets/images/c11d0533-11c5-4093-bb1b-ed3faaa57ba0-6104f85f.png' | relative_url }} "Animaze Manuals - Streaming with a transparent background"){: width="717" height="350"}

(**in OBS**) In the Properties options dialog change **Composite mode** to **Premultiplied Alpha** so we can get the background to become transparent.

![Spout2 Capture]({{ '/assets/images/a9b4e5d8-cf77-49fe-9c24-2be62b355da2-ee0b6e8a.png' | relative_url }} "Properties for Spout2 Capture"){: width="714" height="581"}

(**in OBS**) You are done with the transparency, it’s now time to move the avatar where you need it in your stream.

![Streaming with a transparent background]({{ '/assets/images/2733af0c-539d-4759-9271-b40f53a4a706-17682d42.png' | relative_url }} "Streaming with a transparent background"){: width="800" height="452"}

Done and dusted!

![Streaming with a transparent background]({{ '/assets/images/a8d48e08-2d41-48f1-9dd3-9b3e95c3cfdf-9dc34460.png' | relative_url }} "Streaming with a transparent background"){: width="800" height="450"}

### Streaming with a transparent background

- [Intro]({{ '/manual/streaming-transparency/transp-intro/' | relative_url }})
- [Alpha Transparency w/ OBS Spout2 Plugin (recommended)]({{ '/manual/streaming-transparency/spout/' | relative_url }})
- [Alpha Transparency w/ OBS Game Capture]({{ '/manual/streaming-transparency/alpha-transp/' | relative_url }})
- [Chroma Key w/ OBS Video Capture Device (no subscription needed)]({{ '/manual/streaming-transparency/video-cap/' | relative_url }})
