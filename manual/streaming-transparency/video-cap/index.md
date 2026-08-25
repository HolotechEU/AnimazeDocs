---
layout: page
title: "Chroma Key w/ OBS Video Capture Device (no subscription needed)"
source_url: https://www.animaze.us/manual/streaming-transparency/video-cap
---

# Chroma Key w/ OBS Video Capture Device (no subscription needed)

We’ll use the Animaze Virtual Camera as a Video Capture Device source (i.e. webcam source) in OBS. We’ll set the background to an unused color such as pure green and crop the green pixels using the Chroma Key filter in OBS.

This section assumes that the Animaze Virtual Camera has been properly installed on the system (part of the Animaze installation process) and assumes knowledge about using it as a webcam in other software. If not, follow these guides/faqs:

- [Animaze Desktop FAQ: How can I stream with Animaze?]({{ '/faq/tech/streamwithanimaze/' | relative_url }})
- [Animaze FAQ \| Learn how to use Animaze by Facerig]({{ '/faq/tech/virtualcameradriver/' | relative_url }})

## Steps

(**in Animaze**) Let’s change the background to a greenscreen by opening the Backgrounds gallery and selecting the Green Screen backgrounds.

![]({{ '/assets/images/image-20220803-104340-ba6befcd.png' | relative_url }}){: width="800" height="489"}

**(optional)** (**in Animaze**) If the pure green is not the color you want to crop out, you can choose another one. You can change any background into a solid color one by clicking on the background in the gallery and toggling the Solid Color option as you customize the background.

![]({{ '/assets/images/image-20220803-104651-9028f29a.png' | relative_url }}){: width="800" height="528"}

(**in Animaze**) Click on **Enable Virtual Camera** - this will start broadcasting the rendered scene (avatar\+background) to the Animaze Virtual Camera

![]({{ '/assets/images/0d363ed4-4a96-4c2f-aea5-f355840ef28b-2f51ea9f.png' | relative_url }}){: width="338" height="147"}

(**in OBS**) In the Sources section, right-click\> Add and click on Video Capture Device. You will be prompted with a Properties dialog.

![]({{ '/assets/images/b22a9614-6ddb-484e-815b-d022ecf2b926-cd6d560d.png' | relative_url }}){: width="712" height="353"}

(**in OBS**) In the Properties dialog select Animaze Virtual Camera for the Device option in the Video Capture Device options dialog, leave everything else as default, and click Ok.

![]({{ '/assets/images/image-20220803-110903-67d2b072.png' | relative_url }}){: width="729" height="828"}

(**in OBS**) Right-click on the Video Capture Device in the Sources section and then click the Filters button from the context menu.

![]({{ '/assets/images/e02f9041-c1bd-46e0-a7fa-e10f3a4f11f1-58fc12eb.png' | relative_url }}){: width="523" height="122"}

(**in OBS**) In the Filters dialog, add a Chroma Key filter

![]({{ '/assets/images/0a9142fb-9ae0-4c1a-8a6b-39548c57c3a0-205d6899.png' | relative_url }}){: width="299" height="366"}

(**in OBS**) Adjust the Chroma Key filter to remove the background. Note that the Key Colour Type should be set to Green. Depending on the avatar design you may want to use other Key Color Types and change the filter options to suit your needs.

![]({{ '/assets/images/5c06f55c-9e93-4444-84c3-2b21f726b418_1_-a5f190d4.png' | relative_url }}){: width="851" height="623"}

(in OBS) Now it’s time to reposition the avatar feed

![]({{ '/assets/images/image-20220803-112545-1df8fdb4.png' | relative_url }}){: width="800" height="450"}

Done and dusted!

![]({{ '/assets/images/image-20220803-112625-b28d55e7.png' | relative_url }}){: width="800" height="453"}

### Streaming with a transparent background

- [Intro]({{ '/manual/streaming-transparency/transp-intro/' | relative_url }})
- [Alpha Transparency w/ OBS Spout2 Plugin (recommended)]({{ '/manual/streaming-transparency/spout/' | relative_url }})
- [Alpha Transparency w/ OBS Game Capture]({{ '/manual/streaming-transparency/alpha-transp/' | relative_url }})
- [Chroma Key w/ OBS Video Capture Device (no subscription needed)]({{ '/manual/streaming-transparency/video-cap/' | relative_url }})
