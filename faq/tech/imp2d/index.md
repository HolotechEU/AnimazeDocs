---
layout: page
title: "Animaze Desktop: How can I import my own Live 2D avatar in the app?"
source_url: https://www.animaze.us/faq/tech/imp2d
---

# Animaze Desktop: How can I import my own Live 2D avatar in the app?

Animaze support Live2D models created with the Live2D Cubism Editor version 3.0 or higher.

Live2D released Cubism 3.0 in Spring 2017, so if your model was created after 2017, it likely meets this requirement. If your model was created with a version of Live2D Cubism lower than 3.0, you need to load the model’s Live2D source files in the Live2D Cubism Editor v3.0 or higher and re-export the Live2D runtime files. If you want to take a deeper dive into the 2D avatar universe, we’ve prepared documentation for you [here]({{ '/manual/gettingstarted2d/paramlist/' | relative_url }}).

When it comes to importing your Live2D model into the Animaze app, the simplest way is through Animaze’s built-in Import Custom Avatars feature.

Open Animaze, click on the Avatar icon in the left menu bar, go to My Avatars and click on the \+ sign

![Animaze Importing 2D Avatars]({{ '/assets/images/pasted_image_0-94d112d0.png' | relative_url }} "Animaze Importing 2D Avatars"){: width="800" height="677"}

When the file browser opens, navigate to your Live2D model’s folder, select your avatar’s ‘model3.json’ file and click ‘open’

![Animaze Importing 2D Avatars]({{ '/assets/images/pasted_image_0_1_-6f2e4553.png' | relative_url }} "Animaze Importing 2D Avatars"){: width="714" height="435"}

Your avatar will appear in Animaze!

![Animaze Importing 2D Avatars]({{ '/assets/images/pasted_image_0_2_-3d1d25ee.png' | relative_url }} "Animaze Importing 2D Avatars"){: width="800" height="752"}

Step 2: Test Your Avatar

In most cases, Animaze will automatically import your model’s motion parameters, special actions, and special poses. Make sure to test your avatar and ensure it is working as expected. If it does, you are all set, and don’t need to take any more action. 

---

## **If You Need to Fix or Better Configure**

If your avatar isn’t behaving as expected, you’ll need to import the avatar into the [Animaze Editor](https://www.animaze.us/editor). The two most common issues are the avatar looks blurry or low resolution and some face and body parts are not responding to tracking inputs.

Learn everything you need to know about [Debugging Your Live2D Avatar]({{ '/manual/convertavatars/convertdebugging/' | relative_url }}) here.

Also, if you need any help setting up your Live2D model, we’ve put together a [list of Motion Parameters right here]({{ '/manual/gettingstarted2d/paramlist/' | relative_url }}).

Here is what you need to do to import your 2D avatar through the Animaze Editor: 

Throughout this guide, we will use a sample model called Hiyori, which you can download **[here](https://s3.amazonaws.com/animaze.us/Animaze+Editor+Sample+Assets.zip)**, to get you started with the **[Animaze Editor](https://www.animaze.us/editor).** We selected Hiyori as the sample model because it is a full-body model that contains special actions and physics.

To import the Hiyori sample model, follow the steps below:

1. Download Hiyori’s archive using this [**link**](https://s3.amazonaws.com/animaze.us/Animaze+Editor+Sample+Assets.zip) and extract the files inside.

2. Open the Animaze Editor, navigate to **Assets****,**and select **Import Live2D Avatar**

**![Animaze Editor Assets]({{ '/assets/images/1-5ac9bc39.png' | relative_url }} "Animaze Editor"){: width="1000" height="529"}**

3. Select the model’s **.json** file and click open

**![Animaze Editor select json]({{ '/assets/images/2-73c4cca7.png' | relative_url }} "Animaze Editor"){: width="1000" height="533"}**

4. The following window prompts you to select the files you want to import. If this is your first time importing a specific model, make sure all the files are ticked before clicking **Import**.

![Animaze Editor Click these prompts to import your avatar]({{ '/assets/images/3-30369e92.png' | relative_url }} "Animaze Editor Prompts"){: width="1000" height="528"}

5. An import log will be displayed after the Animaze Editor checks the files for errors and warnings. If everything is green, you are good to go. Click **Ok** to dismiss the log.

![An import log will be displayed after the Animaze Editor checks the files for errors and warnings. If everything is green, you are good to go. Click Ok to dismiss the log.]({{ '/assets/images/4_1-7bc653da.png' | relative_url }} "Animaze editor import log"){: width="1000" height="526"}

6. Once the avatar is imported, it will be displayed in the viewport.

![Once the avatar is imported, it will be displayed in the viewport.]({{ '/assets/images/5-2eda6c4a.png' | relative_url }} "Animaze Editor Viewport"){: width="1000" height="532"}

Now that you have imported the sample model, to learn how to make your own Live2D model using the Cubism Editor  follow the steps listed [here]({{ '/manual/gettingstarted2d/createyourown/' | relative_url }}).
