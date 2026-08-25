---
layout: page
title: "Animaze Desktop: What can I do in Animaze to reduce the CPU/GPU load?"
source_url: https://www.animaze.us/faq/animazedesktop/lightanimaze
---

# Animaze Desktop: What can I do in Animaze to reduce the CPU/GPU load?

A streaming setup in general is challenging for any system, CPU and GPU resources will be impacted and here is why:

1. you are running a game optimized to look best using as much of the system resource as possible.
2. you are running Animaze which has the task of rendering a live character and face tracking in real time at pixar level quality expectation.
3. your are streaming to a platform, which includes two heavy tasks encoding video and audio and data streaming.

Here's what you can do in Animaze to reduce the load:

- webcam resolution and FPS are important. We recommend favoring higher frame rates over higher resolutions and clear (non-grainy/noise) images. Higher resolutions will not necessarily produce better results, but will eat up more CPU. For example, a resolution setting of 640x480 @30 will FPS work, but a 720p resolution @60 FPS likely will have better results.
- Animaze render resolution is set to the window size so if you maximize it on a 1080p monitor, the resolution will go up to 1920 x 1080. There's two ways to lower the render resolution, first the trivial one is to resize the application window (best is to be left to default which is 1280 x 720), second is to go to Settings \> Video Graphics and change the Render Scale option. Using this latter option you can decrease the rendering resolution without scaling the window, the output is going to become blurry, but in a streaming setup with the face-cam in a corner occupying about 10-15% of the frame, it's a good compromise to have the render scale to 60% (with the default window size). This action should help with lowering the GPU resources needed for Animaze.
- other Video Graphics options impact GPU and CPU resources, you can:

- 1. change Shadow Map Resolution, go to "Low" option.
- 2. change Fur Quality, set the slider down to about 10-15%. Impact seen when rendering fur shaded avatars & props.
- 3. for Live2D avatars, change the "2D Avatar Render Scale", set the slider to 30%, note that this will make the Live2D avatar blurry. Impact seen when rendering Live2D and Mixed Avatars.

- cap the framerate of the app so it impacts CPU performance less. From Settings \> Video Graphics turn Vsync off and set FPS to 30 or even low as 24 depending on how demanding are the other 2 streaming participants (the game and streaming software)
- while streaming keeps UI elements hidden (especially the galleries). UI elements will impact CPU and GPU performance, having a clean "canvas" will reduce the impact.
- for custom 3D Avatars & Props, make sure you are following the guideline on complexity https://www.animaze.us/manual/technicalreference/complexitytiers (see Complexity by performance table). Stay in the Mobile/Laptop range for a lower impact on the streaming setup. Also, note that props add up to the vertices/textures budget.
- for Live2D Avatars, textures sizes and Live2D rendering resolution (which you can set from Animaze Editor) have a great impact. Even though these avatar types are 2D, the animation complexity under the hood (not to be confused with expressivity) and the number of moving parts, make them equivalent to 3D avatars, so don't expect a serious performance boost by just going 2D.
- If using the Animaze Virtual Camera as the face-cam bit in your setup impacts the performance too much, you can switch to using the Secondary Render Window and using the Window Capture in the streaming software.
- you can lower the face tracking performance impact by setting the camera to a lower resolution (as low as 640x480 or 640x360) at 30 fps. You can do this by going to Settings \> Video Graphics and setting the Webcam Resolution & FPS.

There are things that you can do outside Animaze to lower performance impact:

- use a lower setting in the game you are streaming (render scale, render resolution, texture quality, shadows quality, framerate cap).
- use “borderless window” in your game instead of fullscreen for a more even distribution of GPU/CPU resources by the OS.
- use a second computer for streaming and Animaze.
- tinker with the bitrate and resolution options in your streaming software
