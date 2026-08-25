---
layout: page
title: "Animaze Desktop: How do I troubleshoot Animaze broadcasting?"
source_url: https://www.animaze.us/faq/tech/casttroubleshoot
redirect_from:
  - /faq/animazedesktop/casttroubleshoot/
---

# Animaze Desktop: How do I troubleshoot Animaze broadcasting?

In case the Animaze Virtual Camera does not work either because it cannot be installed or because OBS, SLOBS and similar cannot detect the Animaze Virtual Camera as an input option. In those cases, the FaceRig Virtual Camera acts as a fallback. If the FaceRig virtual camera does not install automatically, you can manually install the FaceRig Virtual Camera:

First, go to **Windows’s Device Manager** \> **Imaging Devices** \> **right-click on Animaze Virtual Camera** and then on **Uninstall**.

![Animaze Desktop: How do I troubleshoot Animaze broadcasting? ]({{ '/assets/images/troubleshoot1-9a2ee30c.png' | relative_url }} "Animaze Desktop: How do I troubleshoot Animaze broadcasting? "){: width="633" height="567"}

From there, go to Steam\\steamapps\\common\\Animaze\\Bin\\prerequisites\\FaceRigVirtualCamDriver

You will see four versions of the FaceRig Virtual Camera driver.

Install the driver that matches your Windows version. For example, if you’re on Windows 8, install “FaceRigVirtualCamDriver\\_win8”; if you’re on Windows 10, install “FaceRigVirtualCamDriver\\_win10”.

![Animaze Desktop: How do I troubleshoot Animaze broadcasting? ]({{ '/assets/images/troubleshoot2-5f88ba87.png' | relative_url }} "Animaze Desktop: How do I troubleshoot Animaze broadcasting? "){: width="722" height="520"}

Once you’ve installed the driver, make sure to select FaceRig Virtual Camera as the input device in OBS, SLOBS, etc.

**Launch Animaze** and click on **Enable Virtual Camera.**

If the Animaze Virtual Camera appears as an input source in OBS (or similar), but your broadcast won’t start, and you see a “Cannot start broadcasting” error, make sure to click the enable virtual camera button in Animaze. If you click the virtual camera button before you set up your source in OBS, it will not work.
