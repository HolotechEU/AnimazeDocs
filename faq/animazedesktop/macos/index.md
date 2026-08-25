---
layout: page
title: "Animaze Desktop: Can I use Animaze Desktop on Mac?"
source_url: https://www.animaze.us/faq/animazedesktop/macos
---

# Animaze Desktop: Can I use Animaze Desktop on Mac?

Animaze Desktop is not available for macOS, although there are workarounds to run it on a Apple Mac.

# Apple Boot Camp Assistant

Boot Camp Assistant enables you to have a Windows boot option on your Mac. Useful resources:

- [![]({{ '/assets/images/favicon-19fe2ff6.ico' | relative_url }}){: class="smart-link-icon css-168a27h e1bjtjov0"}Boot Camp Assistant User Guide for Mac](https://support.apple.com/guide/bootcamp-assistant/welcome/mac)
- [![]({{ '/assets/images/favicon-19fe2ff6.ico' | relative_url }}){: class="smart-link-icon css-168a27h e1bjtjov0"}Install Windows 10 on your Mac with Boot Camp Assistant](https://support.apple.com/en-us/HT201468)

You’ll be able to run Animaze in Windows on a Mac.

Known limitations:

- sometimes the webcam provides only black frames, thus we strongly recommend using the [iPhone Tracker]({{ '/faq/tech/iphoneastracker/' | relative_url }} "https://www.animaze.us/faq/tech/iphoneastracker").
- some rendering features may not function due to graphics hardware limitations or graphics drivers. (e.g. light projector and cascaded shadows).
- this solution only works on intel based Macs, so it will not work on M1/M2 Macs which are ARM based.

---

# Virtual Machine (not tested)

You can use a Virtual Machine like VMWare to run a Windows PC inside your macOS. It is important to configure the virtual machine with these options:

1. hardware accelerated graphics (support for OpenGL 4.3)
2. provide access to internet (access to network adapter)
3. (optional - can use [iPhone Tracker]({{ '/faq/tech/iphoneastracker/' | relative_url }} "https://www.animaze.us/faq/tech/iphoneastracker")) provide access to webcam
4. (optional) provide access to microphone

Known limitations:

- the [Parallels](https://www.parallels.com/eu/ "https://www.parallels.com/eu/") unfortunately doesn’t provide proper OpenGL 4.3 support so Animaze will not work with this solution.

---

# Stream Animaze iOS app on Mac

1. install Animaze iOS app on your iPhone.
2. install Streamlabs macOS app on your Mac.
3. plug your iPhone into the Mac.
4. open Animaze iOS app.
5. (in Streamlabs) add a new video capture source and select the iPhone.
6. (in Streamlabs) crop the video source to remove some of the UI elements by ALT\+dragging the box borders.
7. Now you are all set.
