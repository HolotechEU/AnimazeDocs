---
layout: page
title: "Animaze Desktop: How to use Leap Motion Hand Sensors with Live2D avatars?"
source_url: https://www.animaze.us/faq/tech/ultraleapl2d
---

# Animaze Desktop: How to use Leap Motion Hand Sensors with Live2D avatars?

Making your Live2D avatar compatible with Ultraleap’s Leap Motion Controller is not for the faint of heart. As neither Live2D nor Ultraleap designed their product with the other in mind, it takes patience and tuning to make the two systems harmonize. Luckily, if this is too much for you to take on alone, there is a fantastic community of Live2D artists that you can commission to update your Live2D avatar rig. You can find an artist to work [with here](https://www.animaze.us/suggested-artists).

OK, for those who have not been scared off. Good on you! This guide aims to give you the building blocks by walking you through the process using the [free-to-download sample Hiyori Momose](https://www.live2d.com/en/download/sample-data/).

## Step 1: Increasing your avatar’s arms range of motion in Live2D’s Cubism Editor

Before you can get started connecting your avatar to an Ultraleap controller, you need to make sure that your avatar’s arms and hands support movement.

Because most streamers only use face tracking, it is likely that your avatar was not built with this capability in mind and will need to be updated. 

Increasing your avatar’s range of motion begins in Live2D’s Cubism editor. 

Install the Cubism Editor here: <https://www.live2d.com/en/> 

Live2D has all sorts of great tutorials, which you can find [here](https://docs.live2d.com/cubism-editor-tutorials/deformer/?locale=en_us)

Once you have rigged your Live2D model, it’s time to move over to the Animaze Editor.

## Step 2: Import your Live2D avatar into the Animaze Editor

## 

1. Open the Animaze Editor from your Steam Library.  Select Tools from the pull-down menu and click on Animaze Editor.

![Open the Animaze Editor from your Steam Library.  Select Tools from the pull-down menu and click on Animaze Editor. ]({{ '/assets/images/unnamed-14957955.gif' | relative_url }} "Import your Live2D avatar"){: width="480" height="318"}.

2. In the Assets menu, select Import L2D Avatar. Find your avatar JSON file and click Open.

![In the Assets menu, select Import L2D Avatar. Find your avatar JSON file and click Open.]({{ '/assets/images/unnamed_1_-fffc2ab0.gif' | relative_url }} "Import your Live2D avatar"){: width="480" height="320"}

## Step 3: Acquaint yourself with your Avatars Parameters

For a full list of Animaze Parameters see this post: 

1. On the right-hand side, in the Editor Menu, expand the Live2D options.

![Acquaint yourself with your Avatars Parameters ]({{ '/assets/images/unnamed_2_-2049ede0.gif' | relative_url }} "Editor Menu"){: width="480" height="334"}

2. Scroll down to the Parameter Debugger and expand.

![Scroll down to the Parameter Debugger and expand.]({{ '/assets/images/unnamed_3_-987a6521.gif' | relative_url }} "Get used to the Parameters "){: width="480" height="336"}

3. Find the parameters that are labeled ParamArmLA and ParamArmRA.
4. Play around with the sliders. The sliders give you a sense of the range of motion the avatar supports. (Changing that range of motion happens in the Cubism Editor).

![Play around with the sliders. The sliders give you a sense of the range of motion the avatar supports. (Changing that range of motion happens in the Cubism Editor).]({{ '/assets/images/unnamed_3_-987a6521.gif' | relative_url }} "Leap Motion for Live2D"){: width="480" height="336"}

## Step 4: Add Retargeting Overrides

## 

1. Start by clicking Retargeting Overrides

![Start by clicking Retargeting Overrides]({{ '/assets/images/unnamed_6_-0726f29f.gif' | relative_url }} "Retargeting Overrides"){: width="480" height="334"}

2. Click  Add Override

![Start by clicking Retargeting Overrides]({{ '/assets/images/unnamed_6_-0726f29f.gif' | relative_url }} "Retargeting Overrides"){: width="480" height="334"}

3. Select ParamArmLA

![Start by clicking Retargeting Overrides]({{ '/assets/images/unnamed_8_-966fb3da.gif' | relative_url }} "Retargeting Overrides"){: width="480" height="334"}

4. Click on Add Input
5. Select HandL\\_LR (NOTE there are a myriad of relevant inputs you can add. Experiment with the inputs to get best results)

![](https://lh5.googleusercontent.com/pOrBfk7mS5WuNhKS1qghfCpsecsfXPsORBiYj7wWfManbq4Is0YH6xh3X6bVNT5U8qi7ybJrOSukq0NOs2Bjq1e4Uh2ofDaJrNS-FVMeS8ZVT8MrSGvAJgrrjynFC-JDD5_B-Evy=s0){: width="480" height="334"}

6. Repeat the process with ParamArmRA and HandR inputs.

## Step 5: Check your progress so far

1. On the left-hand hierarchy panel, right-click the model name and press save.
2. To export from the Editor, right-click and select Bundle. Select where you want the export to save.

![Retargeting Overrides]({{ '/assets/images/unnamed_9_-7840b72d.gif' | relative_url }} "Retargeting Overrides"){: width="480" height="270"}

3. Open Animaze
4. In the avatar drawer, click on the plus sign and select your avatar.

![Retargeting Overrides]({{ '/assets/images/unnamed_10_-98d5dffe.gif' | relative_url }} "Retargeting Overrides"){: width="480" height="296"}

5. Connect your Leap Motion controller by going to advance configurations\> select tracker and Leap Motion
6. Turn the feed so you can see what the tracker is picking up (more on how to best use the Leap Motion Controller in this FAQ: https://www.animaze.us/faq/animazedesktop/ultraleap)

![Retargeting Overrides]({{ '/assets/images/giphy_1_-10d259a6.gif' | relative_url }} "Retargeting Overrides"){: width="480" height="312"}

![Retargeting Overrides]({{ '/assets/images/giphy-95faed00.gif' | relative_url }} "Retargeting Overrides"){: width="480" height="428"}

Wooo! The hands are moving. But you might notice the range of motion isn’t QUITE what you hoped. This is where the fun/ sweet agony of tuning begins. Back to Cubism editor for some refinements :)
