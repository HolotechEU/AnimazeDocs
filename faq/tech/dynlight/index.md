---
layout: page
title: "Animaze Desktop: How can I use the Dynamic Lighting in Animaze?"
source_url: https://www.animaze.us/faq/tech/dynlight
---

# Animaze Desktop: How can I use the Dynamic Lighting in Animaze?

**Dynamic Lights** is a new feature which captures the image from a selected monitor, and uses the data from the screen capture to identify blobs of light, which are then used to dynamically adjust the position, rotation, color, and intensity of directional lights. The result is that the avatar gets dynamically lit up based on the source monitor, which could be anything, such as a YouTube video or a video game.

Before you start setting this feature up, be advised that the Dynamic Lights feature may exhibit issues on **systems with two GPUs**. If you encounter any crash or the feature not activating properly, please contact us.

Launch Animaze and click on the Backgrounds icon.

Choose a background of your choosing and load it.

Scroll down in the Background Customize drawer menu and click on Dynamic Lighting, then check the Activate tickbox

The options in Dynamic Lighting are:

**Source Monitor**: The index of the monitor that you wish to use as your source. By default, this is always the primary monitor (index of 0). Monitor indices are based off of your Windows monitor settings.

**Luma Threshold**: The minimum luma value required to include a pixel in light blob detection. Lowering this value picks up more pixels, raising it picks up less. If your source is primarily very dark/low luma levels, you may need to lower this value to properly acquire light blobs.

**Hue Threshold**: Similar to Luma Threshold, this value is the minimum difference in hue necessary to consider two light blobs to be separate blobs. This essentially splits up non-gradient light blobs, such as a red and blue light being right next to each other.

**Directional Light Intensity**: Determines the minimum and maximum intensity of the directional lights. Setting this and Ambient Light Intensity to 0.0 will cause your avatar to have no more lighting cast upon them. Raising these values makes the directional lights brighter/stronger.

**Color Smoothing**: The smoothing factor of the smooth transitions from one frame of color to another. So if a light is red, but then the next frame should be blue, a non-zero, non-max value causes it to smoothly transition from red to blue. The lower the value, the slower the transition. Setting this value to 0.0 or 1.0 will make the colors instantly snap, avoiding smoothing altogether. Doing this will also improve performance slightly.

**No. of Frames Until Remove Old Data**: Determines the number of frames until light blobs that have not been found again in a new desktop capture, are removed. A lower value means they are removed faster. A higher value means that if you go from a bright red light to pure black, it will take significantly longer for the lights to drop their old color data and transition to the NoBlobLightColor.

**Dynamic Ambient Calculation**: Activating this means the Ambient Light will be dynamically calculated based on the largest light blob found. There are two aspects that are calculated, the Color and the Intensity. You can disable the Intensity calculation by setting the Ambient Light Intensity setting’s minimum and maximum to the same value. If this option is deactivated, Ambient Light Intensity will be set to 0.1. This option incurs a slight performance cost.

**Ambient Light Intensity**: Determines the minimum and maximum Ambient Light Intensity. This is the light that is always lighting up your entire character, uniformly (non-directionally). Setting the minimum and maximum to the same values will disable the dynamic calculation of ambient light intensity, which will slightly improve performance.

**Use Dynamic Positioning**: Activating this means the position of the lights will be dynamically updated to match where the light blobs are on the source. So if you have a bright red light in the top left of your monitor, and a bright blue light in the bottom right, then one of your lights will be in the top left and will be red, and another will be in the bottom right and be blue. This option incurs a slight performance cost.

**Translation Smoothing**: This determines how quickly the positions are updated. A lower value means it more slowly transitions from one location to another. This option only appears, and only matters if Use Dynamic Positioning is true. Setting this value to 0.0 or 1.0 will make the positions instantly snap, avoiding smoothing altogether. Doing this will also improve performance slightly
