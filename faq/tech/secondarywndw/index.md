---
layout: page
title: "Animaze Desktop: How can I use the Dedicated Capture Window in Animaze?"
source_url: https://www.animaze.us/faq/tech/secondarywndw
---

# Animaze Desktop: How can I use the Dedicated Capture Window in Animaze?

We’ll use the Dedicated Capture Window from Animaze with the Alpha Transparency option active, while OBS will capture the window with the use of the Game Capture source.

## Steps

(**in Animaze**) Open the Dedicated Capture Window (hotkey Ctrl\+S)  
(**in Animaze**) Right-click on the Dedicated Capture Window and select the Alpha Transparency option.

![Alpha Transparency w/ OBS Game Capture]({{ '/assets/images/ed722579-0925-4bf4-b0ce-9f18ad78e8cf-2c85ee8a.png' | relative_url }} "Alpha Transparency w/ OBS Game Capture"){: width="621" height="418"}

(**in OBS**) In the Sources section, right-click \> Add and click the Game Capture. You will be prompted with a Properties dialog.

![Alpha Transparency w/ OBS Game Capture]({{ '/assets/images/82db81df-4943-4ec9-bbae-3b4ac4dc333a-99027eaa.png' | relative_url }} "Alpha Transparency w/ OBS Game Capture"){: width="766" height="349"}

(**in OBS**) Make sure you set the following options for the Game Capture source Properties page:

1. Mode: Capture specific window
2. Window: \[AnimazeDesktop.exe\]: AnimazeRenderWindow
3. Allow Transparency option toggled ON

![ Streaming with a transparent background]({{ '/assets/images/82db81df-4943-4ec9-bbae-3b4ac4dc333a-99027eaa.png' | relative_url }} " Streaming with a transparent background"){: width="766" height="349"}

(**in OBS**) You are done with the transparency, it’s now time to move the avatar where you need it in your stream.  
Done and dusted!

![ Streaming with a transparent background]({{ '/assets/images/175dfc5d-3abf-49a1-894a-52b7d1b57b32-a90bd47f.png' | relative_url }} " Streaming with a transparent background"){: width="800" height="449"}
