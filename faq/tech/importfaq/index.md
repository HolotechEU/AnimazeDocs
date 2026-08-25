---
layout: page
title: "Animaze Desktop: How can I import my own 3D avatar in the app?"
source_url: https://www.animaze.us/faq/tech/importfaq
---

# Animaze Desktop: How can I import my own 3D avatar in the app?

The following import process can be used for 3D and hybrid avatars.

[Open the Animaze Editor,](https://www.animaze.us/editor) navigate to Assets and select Import 3D Object.

![](https://lh4.googleusercontent.com/Io94SwoQ_IXn_K9s5N60uzD25Q9arqBXYXMxWlg2EnT220NfukHE6OHVfNkOnXYmsNl2cEu6UQj7ncSgE0BCeDJzMvmFo6Esc5uE-NaI4YiN-clV2c9y5SfaP-0MfxcjjN60iBo4=s0){: width="624" height="333"}

Open the model's geometry file, the .fbx file, from the location you downloaded the files.

![](https://lh6.googleusercontent.com/AIbm9vEZdLsDS26YggdqXUg1LzFn1LrJ4zqoYtSb0uvV95-c0aBLSHewcdkXoX9F-uKNd_tz102I7lLYxDBvJFN3xj95leckqw2Gx2VOI1PIiJPcgGdJzC3iNYIMdrj0X97g9E1f=s0){: width="624" height="333"}

The following window prompts you to select the files you want to import. If this is your first time importing a specific model, make sure all the files are marked and select the item type from the dropdown list before clicking Import.

![](https://lh4.googleusercontent.com/CDT5UHalTJNglGawkWZTHdPnOwLqpOnYxerIXTh_4SQkmRMsZXZFfgKC53J-FhRoxjtoOYHjfc1SAZmYIs6INoPgm4z77pPWpQORzRooPkhDN_gjU-__SI5FqRpvgPZ-wMS4G7NM=s0){: width="624" height="332"}

A report of Import Issues will be displayed after the Animaze Editor checks the files for issues. The warning system checks for skeletal animations. The Required animation not found will be displayed when the corresponding skeletal animation is not found in the source files. This warning will trigger even if there is a valid Blendshape that fills the role of the missing skeletal animation. When using blendshapes instead of animations, that warning message can be ignored, like in this case. Click X to dismiss the window.

![](https://lh5.googleusercontent.com/RdfCG8SojoNXwQCNKFkYkO0v8l49-I2irHQ1EdZBBA4veiwvjYwhR9LzpG1l-y95YGoMga2m_k2BKjtziyH7KdCI6BKagRAG1o_-HMRMvdKK2kn9jHQXqHk3NwbKQc7rgDW0_9hF=s0){: width="624" height="332"}

Next there's a verbose log that gets prompted for every import, hit the Ok button to dismiss it. As you work on more complicated models, these logs will surface errors and help you with debugging.

![](https://lh6.googleusercontent.com/IXm6S0u5Lv78C8EHppa1ZrFPXni_z5UJUM0vWtsm6jVwmCl486JTqBBR4zEzxBUlkmbp9iX6ZMqetM6hNyligbGg1ghVitraWimTOeDMfVtzRu9EM0XNWeSmMVwg3bk6RvTKTJ0M=s0){: width="624" height="332"}

Once the avatar is imported, it will be visible in the Viewport. Click on it in the Hierarchy Panel to display its details (icon, type, name, position etc) in the Editor Panel (right side).

![](https://lh6.googleusercontent.com/bd4d6Nh8wPRlgdXgQUROP6YGnA1B7Ba6T43xJ3D5eBGu_NabpU9ElhEyrQjx3JT00u3AVZHrHU-OjHAGAYLlhI7JlWjjidkDkYe1Tn--JxFUCqzYbwDqaBqse9qWzx_Kxp_zqq2h=s0){: width="624" height="332"}

Save item in the Hierarchy Panel as a final step.

![](https://lh3.googleusercontent.com/Y3FkvWCPpZlEZdH_oK11LbaFXmKJFxirkgcN9Z8Svq8V3CUkL1nftDNIksnBqeBO5m2fvpDT41dJUD-cslzaHf6PfwhKNvxVuUjwa0Q4NCFtm6Y-L6Hjmn0gsor_l6VhC8JWIHrW=s0){: width="624" height="333"}

Check out all the things you can do with your avatar in the [dedicated section in our documentation.]({{ '/manual/gettingstarted3d/' | relative_url }})

Once you’ve finished playing around with the Editor’s settings, you can move on to bundling your avatar, to get it ready for the Animaze app.

To do so, turn to the Hierarchy Panel to the left and right click on the avatar’s name and choose Bundle.

![](https://lh6.googleusercontent.com/biNJjoWZFN33Z0hZ-s229RUPQ2L16ppNjsZplZ2gYvq7ZERx_HdO9QlkI_9JJ0u2K_oOUaoThDTLA8_tFglrdWYKLUxC6yujpQRB6bsgscTm1xG3Jpviy5z-0Kbh3RMWTpzSLqR3=s0){: width="624" height="332"}

A new window will prompt you to save the changes, if any, made to the avatar prior to bundling it.

![](https://lh4.googleusercontent.com/mUjyuoDk8ZDyp2c9oo7GGfYwvL32fRE3djGNlo9imWTq2LuPjKM47TqS055MjEyQ0yu5PZIAmYKquXHRNV-LUxr_gsEKhicY-axwNV0RU5G3EQmjkfRIoLgBPsANJ_pmOY-fb2gz=s0){: width="624" height="332"}

Select the folder you want to export the bundle in. By default, the system will put it in the Resource directory of the editor, but you can change this at any time. Once you decide, click Select Folder.

![](https://lh5.googleusercontent.com/YTO4jqYouOMo0INzrtTDjwN9l8GAzPTKgDrn6NHAQZhOS28DRw1Ln2lJActk69XtWkLfqGTNGLRNjZhVj_hDXBNqKgG0M5YapYCO-nqsqfqIxhSZJi8FbklegGBnthH5RVgSgJGq=s0){: width="624" height="332"}

The system notifies the completion of the bundling process. Click OK.

![](https://lh4.googleusercontent.com/INVUGsFItO5Oyk3Hm55TsKl483Ay-cHDIKn6lsUdyUVU3ticJ4b7g0ECyqwR9yrXz6k_m8MBwZqRDJ2rFnHrFDr4O_XRCN8MNW325yvasM69z4qBeMhponTxu06sayXflMfEMWyk=s0){: width="624" height="332"}

Now you can import the bundle in the Animaze desktop application.

 Open Animaze, then drag and drop the bundle from its location into Animaze.

![](https://lh3.googleusercontent.com/PwhhbqmG_3CYrUhYdEVKXM6brTK2xvd-cRhUBd-gnPSXAcjUO2YS-7GRyu77YgP_Va8tankJL6Pu3Bunzy7mlSdgjGVJzordnr9-Um8hWHLPpngWRXVxrGH3fCqlE0evoNk4b14L=s0){: width="624" height="369"}

The imported bundle is in the Avatar Gallery, in the Imports tab.
