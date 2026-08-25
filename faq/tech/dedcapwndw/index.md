---
layout: page
title: "Animaze Desktop: How can I stream with a transparent background?"
source_url: https://www.animaze.us/faq/tech/dedcapwndw
---

# Animaze Desktop: How can I stream with a transparent background?

A transparent background is a perfect solution for streamers! Here you can find the steps you need to take in order to get started. 

First of all, you will need to **open the dedicated capture window**, which you can do in one of three ways:

1. Press Ctrl \+ S to open the Dedicated Capture Window

2. You can also find the Dedicated Capture Window in Account \> Shortcuts 

3. Or in the three-dot menu, on the Enable Virtual Camera button

![Animaze Dedicated Capture Window]({{ '/assets/images/dedicated_capture_window_1-bc0cbe12.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="700" height="757"}

With the **Dedicated Capture Window** you can stream **Animaze through OBS via either a Game Capture or a Display Capture source** (we recommend using a Game Capture source) and create a **setup with Alpha Transparency**.

There are two methods to create a transparent background directly in the Dedicated Capture Window

# Method 1: Luma key filter and the Dedicated Capture Window with Window Capture:

Hit right-click on the **Dedicated Capture Window and select Alpha Transparency**

![Animaze Dedicated Capture Window]({{ '/assets/images/dedicated_capture_window_3-5afc88d8.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="732"}

Then **open OBS**, **create a Window Capture scene** and select the **AnimazeRenderWindow as the input window**

Under **Capture Method**, select **Windows Graphics Capture**

![Animaze Dedicated Capture Window]({{ '/assets/images/dedicated_capture_window_2-06aa42d3.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="799"}

There are also two methods to create a transparent background directly in the dedicated capture window.

The first method will use the **Luma Key Filter**:

 Go to OBS and right-click on the scene \> Filters \> Add Effect Filter \> Add Luma Key filter 

![Animaze Dedicated Capture Window]({{ '/assets/images/dedicated_capture_window_5-0edfb860.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="585"}

**Create a new source** and add an image / a new display capture etc.

1. For this tutorial we have added an image to use with the Dedicated Capture Window
2. Browse for your desired image and click OK to save it

![Animaze Dedicated Capture Window]({{ '/assets/images/dedicated_capture_window_4-2652ccf3.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="585"}

 In the sources section of OBS, **drag and drop the Window Capture scene** above the newly created scene, so that in the Sources field, the Image source appears under the Window Capture scene.

![Animaze Dedicated Capture Window]({{ '/assets/images/dedicated_capture_window_6-f3cf7643.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="584"}

# Method 2 - using a Game Capture source and the Dedicated Capture’s Window Alpha Transparency setting

Hit right-click on the **Dedicated Capture Window** and select **Alpha Transparency**

Open OBS and create a Game Capture source. Under the Mode drop-down list, select Capture specific window. Under the Window drop-down list, select AnimazeRenderWindow.

![Animaze Dedicated Capture Window]({{ '/assets/images/gamecapture2-77f4f421.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="799"}

**Open OBS** and create a **Game Capture source.** Under the Mode drop-down list, select **Capture specific window.** Under the Window drop-down list, select **AnimazeRenderWindow.**

Tick the **Allow Transparency box** and click **OK to save the source.**

![Animaze Dedicated Capture Window]({{ '/assets/images/gamecapture1-724a9f9d.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="583"}

Create **a new source in OBS** (I set Image as a source and used the same orange picture as a background) and click OK to save it

![Animaze Dedicated Capture Window]({{ '/assets/images/gamecapture3-397dafb7.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="583"}

**Move the second source under the Game Capture source** to layer the avatar on top of the image.

![Animaze Dedicated Capture Window]({{ '/assets/images/gamecapture4-6944dd84.png' | relative_url }} "Animaze Dedicated Capture Window"){: width="800" height="584"}
