---
layout: page
title: "Animaze Desktop: What are other ways I can make my background transparent?"
source_url: https://www.animaze.us/faq/tech/transparency
redirect_from:
  - /faq/animazedesktop/transparency/
---

# Animaze Desktop: What are other ways I can make my background transparent?

First of all, you can download the transparent background [available HERE](https://s3.amazonaws.com/animaze.us/TransparentBackground.tga)

After you do that, open Animaze and import the image as a background pressing the **PLUS** sign in the backgrounds 

![Animaze FAQ \| Learn how to use Animaze by Facerig]({{ '/assets/images/pasted_image_0-a5cc470a.png' | relative_url }} "Animaze FAQ \| Learn how to use Animaze by Facerig"){: width="800" height="693"}

![Animaze FAQ \| Learn how to use Animaze by Facerig]({{ '/assets/images/2-a879e6d2.png' | relative_url }} "Animaze FAQ \| Learn how to use Animaze by Facerig"){: width="800" height="528"}

Once this is done, you can go ahead and start OBS

![Animaze FAQ \| Learn how to use Animaze by Facerig]({{ '/assets/images/3-cae0afc0.png' | relative_url }} "Animaze FAQ \| Learn how to use Animaze by Facerig"){: width="800" height="438"}

Create a Window Capture Device / Video Capture Device scene in OBS 

![Animaze FAQ \| Learn how to use Animaze by Facerig]({{ '/assets/images/image_8_-d89f2e8f.png' | relative_url }} "Animaze FAQ \| Learn how to use Animaze by Facerig"){: width="800" height="438"}

Select the **Animaze Virtual Camera** as the input device

![Animaze FAQ \| Learn how to use Animaze by Facerig]({{ '/assets/images/5-20f496f1.png' | relative_url }} "Animaze FAQ \| Learn how to use Animaze by Facerig"){: width="800" height="439"}

6. Press “Connect to Stream” in Animaze to start streaming to OBS

![Animaze FAQ \| Learn how to use Animaze by Facerig]({{ '/assets/images/image_10_-3fb02f67.png' | relative_url }} "Animaze FAQ \| Learn how to use Animaze by Facerig"){: width="800" height="439"}

![Animaze FAQ \| Learn how to use Animaze by Facerig]({{ '/assets/images/image_11_-216e6a23.png' | relative_url }} "Animaze FAQ \| Learn how to use Animaze by Facerig"){: width="800" height="438"}

![Animaze FAQ \| Learn how to use Animaze by Facerig]({{ '/assets/images/image_12_-f385424a.png' | relative_url }} "Animaze FAQ \| Learn how to use Animaze by Facerig"){: width="800" height="438"}

**Go back to OBS** and **right-click on the scene \> Filters \> Add Effect Filter \> Add Luma Key filter \> OK to save**

![Animaze FAQ \| Learn how to use Animaze by Facerig]({{ '/assets/images/image_15_-013268bc.png' | relative_url }} "Animaze FAQ \| Learn how to use Animaze by Facerig"){: width="800" height="438"}

![Animaze FAQ \| Learn how to use Animaze by Facerig]({{ '/assets/images/image_16_-dea16172.png' | relative_url }} "Animaze FAQ \| Learn how to use Animaze by Facerig"){: width="800" height="438"}

![Animaze FAQ \| Learn how to use Animaze by Facerig]({{ '/assets/images/image_17_-bbf5844a.png' | relative_url }} "Animaze FAQ \| Learn how to use Animaze by Facerig"){: width="800" height="438"}

Still in OBS, **create a new scene with image / game capture / display capture etc. as a source**

After you **save the new scene**, make sure that the Video Capture Device scene is placed above the second scene that was created.
