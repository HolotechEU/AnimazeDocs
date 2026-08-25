---
layout: page
title: "Animaze Desktop: How to upload avatars on the Steam Workshop"
source_url: https://www.animaze.us/faq/animazedesktop/uploadonsteamworkshop
---

# Animaze Desktop: How to upload avatars on the Steam Workshop

Follow these steps to upload your avatars and Props onto the Steam Workshop. In this example. We are going to add a Live2D avatar that we’ve created using the Animaze Editor to the workshop. 

1. Launch Steam as an Administrator. To do do, right click the Steam Icon on your desktop and select ‘Run as Administrator

![]({{ '/assets/images/01_4-ea10822c.png' | relative_url }}){: width="332" height="269"}

2. Go to your Steam Library and launch the Animaze Editor. If you don’t see the Animaze editor it in your Library, make sure to have also checked the Tools box in the category menu.

![]({{ '/assets/images/02_4-d464b789.png' | relative_url }}){: width="402" height="294"}

3. In the Editor click on Assets \> [Import Live2D avatar]({{ '/manual/gettingstarted2d/gettingstarted/' | relative_url }}) (for 2D avatars) or Import 3D Object (for [3D avatars]({{ '/manual/gettingstarted3d/importavatar3d/' | relative_url }}) & [Props]({{ '/manual/gettingstarted3d/3dgettingstarted/' | relative_url }}))

![]({{ '/assets/images/03_2-bd0e7bcf.png' | relative_url }}){: width="418" height="336"}

4. Browse for your avatar in the pop-up window (we’re going to upload a Live2D avatar in this case).

5. Double click on the avatar’s model3.json file to load it into the Editor

![]({{ '/assets/images/04-dd188002.png' | relative_url }}){: width="512" height="238"}

Steps 3 to 5 are needed only if you haven’t yet imported and configured the avatar in the Editor. 

6. Click on Import. Your avatar will appear in the Animaze Editor

![]({{ '/assets/images/05-6156dd27.png' | relative_url }}){: width="534" height="492"}

7. Click on Assets \> Load Avatar and search for the avatar that you just imported into the Editor

![]({{ '/assets/images/06-37ac55c3.png' | relative_url }}){: width="452" height="272"}

8. In the Hierarchy Panel on the left side of the screen, right-click on your avatar and then select Bundle.

1. Choose a folder to save the bundled avatar.

![]({{ '/assets/images/07-37ac55c3.png' | relative_url }}){: width="452" height="272"}

9. In the Animaze Editor click on Tools \> Steam Workshop Uploader

![]({{ '/assets/images/08-22a05e12.png' | relative_url }}){: width="370" height="278"}

1. Leave the Steam File ID Field as 0. The 0 value is to add a new avatar. If you want to update an existing avatar, instead of the 0 value you will need the avatar’s ID. Find the avatar’s ID from the page link. (https://steamcommunity.com/sharedfiles/filedetails/?id\=1111111111)
2. Title: Write the name of your avatar
3. Description: Write the description of your avatar

![]({{ '/assets/images/09-2701165a.png' | relative_url }}){: width="396" height="244"}

10. Bundle field: on the pop-up window, click on Browse to find your bundled avatar

![]({{ '/assets/images/11-33d6c954.png' | relative_url }}){: width="383" height="246"}

![]({{ '/assets/images/10-5aaed4dd.png' | relative_url }}){: width="654" height="238"}

11. Preview field: browse for an icon to add it as a preview icon in the Workshop

![]({{ '/assets/images/11-33d6c954.png' | relative_url }}){: width="383" height="246"}

12. Click on Upload Item. This step will open the Animaze app. Or, if Animaze is already running, this step will communicate with it.

      PRO TIP: You can track the progress of the upload in Animaze.

13. At the end of the upload, a pop-up appears in Animaze Editor confirming the import.

IMPORTANT! Steam automatically sets newly uploaded avatars to Public. If you want it to set the avatar as Hidden or Friends-only, make sure to change the privacy settings in the Workshop. After each update via the Editor, Steam reverts the avatar’s privacy settings in the Workshop to Public.
