---
layout: page
title: "Getting started with backgrounds with overlays (2D)"
source_url: https://www.animaze.us/manual/gettingstartedbackgrounds/backgroundwoverlays
---

# Getting started with backgrounds with overlays (2D)

Starting with Feb 11’th, 2020, Animaze supports Backgrounds with Overlays.

You can think of these as "2d image sandwiches", where you have the two “slices of bread”, one being a background image and the other an overlay image (with a transparency channel),  and the avatar is the center layer.

![Background with overlays]({{ '/assets/images/image001-fbb51035.png' | relative_url }} "Those two images (background and overlay) can be any regular (static) 2D image,"){: width="900" height="155"}

Those two images (background and overlay) can be any regular (static) 2D image, or, for added flair, they can be Live2D models that support animations.

 The Live2D path opens up a lot of exciting options, but you do need to know how to use the artist tools from Live2D  (the Cubism Editor and Live2D Viewer - both come together with the Live2D Package).

With Live2D you can have for instance:

- Looping idle animation.

![background with overlays]({{ '/assets/images/image003-46747d78.gif' | relative_url }} "Looping idle animation"){: width="500" height="281"}

- Animation that is live-linked to tracking data.

![Background with overlays]({{ '/assets/images/image004-7b1bcba5.jpg' | relative_url }} "Animation that is live-linked to tracking data"){: width="500" height="281"}

- Animation triggered by key binds

![Background with overlays]({{ '/assets/images/image006-0f93997f.jpg' | relative_url }} "Animation triggered by key binds"){: width="800" height="224"}

These are just 3 simple examples put together for teaching purposes. You can build any combination of the above to really turbo-charge your avatar experience.

You can also download these examples both as Live2D source files, to see how they were built, and as \\***.avatar** files, to see how they were configured in the Animaze Editor, [here](https://s3.amazonaws.com/animaze.us/Animated+Backgrounds+and+Overlays+Sources.zip).

**So how exactly does one create such an asset? Check out the other sections of this manual, as they describe the what you have to do, step by step.**

### Creating Backgrounds & Scenes for Animaze

- [Getting started with backgrounds with overlays (2D)]({{ '/manual/gettingstartedbackgrounds/backgroundwoverlays/' | relative_url }})
- [Create a simple, static 2D background with an overlay]({{ '/manual/gettingstartedbackgrounds/2doverlay/' | relative_url }})
- [Create a looping animation Background]({{ '/manual/gettingstartedbackgrounds/loopingbackground/' | relative_url }})
- [Create a backdrop with animated elements that are linked to Tracking Data]({{ '/manual/gettingstartedbackgrounds/trackingdatabackground/' | relative_url }})
- [Create a backdrop with animated elements triggered by key-binds]({{ '/manual/gettingstartedbackgrounds/backgroundtrigger/' | relative_url }})
- [Import a background (skybox)]({{ '/manual/gettingstartedbackgrounds/importbackground/' | relative_url }})
- [Send your background .avatar file to Animaze Avatar iOS app (on Mac, via Finder)]({{ '/manual/gettingstartedbackgrounds/sendbackgroundf/' | relative_url }})
- [Send your background .avatar file to the Animaze iOS app (on Windows, via iTunes)]({{ '/manual/gettingstartedbackgrounds/sendbackgroundw/' | relative_url }})
- [Send a background .avatar file to Animaze Avatar iOS app (on Windows, via Animaze Editor)]({{ '/manual/gettingstartedbackgrounds/sendbackground/' | relative_url }})
- [Troubleshoot & Support]({{ '/manual/gettingstartedbackgrounds/troubleshootandsupportbackgroundsoverlayeditor/' | relative_url }})
