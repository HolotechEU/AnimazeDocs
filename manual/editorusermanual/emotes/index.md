---
layout: page
title: "How to add animated Emotes"
source_url: https://www.animaze.us/manual/editorusermanual/emotes
---

# How to add animated Emotes

**Emotes** are global Special Actions that can be applied to any avatar, and their purpose is to enable a more expressive emotional state of the avatar (e.g. to enhance an angry expression we suggest using the fire emote, Flaming Mad). Emotes are triggered through keybinds that can be set in the Animaze app.

![About Animaze by Facerig \| How to add emotes]({{ '/assets/images/flameemote-a7605213.gif' | relative_url }} "About Animaze by Facerig \| 3D Avatars"){: width="400" height="330"}

An **Emote** is a container item that can include any other Animaze item such as: **Particle Systems** (our core use so far), **Lights** (still only 4 will be applied on the avatar), **3D Props** and **sounds**.

When triggered, an emote will be temporarily attached to the avatar, with options to follow or not the avatar movement and options to select specific skeletal joints to attach to.

![Animaze Editor]({{ '/assets/images/1p-c7010620.png' | relative_url }} "Emotes "){: width="800" height="419"}

An emote can be customized and configured using the following options:

1. Attach Particle Systems, Lights, 3D Props and/or Sounds items through the Editor's Hierarchy Panel

![Animaze Editor Add to Emote]({{ '/assets/images/2p-bc316da1.png' | relative_url }} "Emotes"){: width="500" height="375"}

2. Duration of each attached component/item of the emote

3. The lifetime of an emote

4. Attached to a certain skeletal joint

5. Follow the avatar movement or not 

**Let’s create a fire emote, which will include a few Particle Systems:**

1. Create a **texture atlas** (.png format) – an image containing multiple smaller images of the same item. The easiest way to make a texture atlas is to use Timeline in Photoshop and make frame by frame drawing. We used a 6x6 tiles image:

![Animaze Editor Add to Emote]({{ '/assets/images/3p-6618a061.png' | relative_url }} "Texture Atlas "){: width="209" height="208"}

2. Open the Animaze Editor, right-click in blank space in the **Hierarchy Panel**, select **Add Emote** and further select **New Emote**. You will be prompted to name it, we suggest using “Emote\\_Name”.

![Animaze Editor Add to Emote]({{ '/assets/images/4p-2b823fa8.png' | relative_url }} "Create new emote "){: width="700" height="610"}

3. Right-click on the newly created **Emote** and select **Add** \> **Attach particle system** \> **New particle system**. You will be prompted to name it, we suggest using “Emote\\_PS”. If you add more particle systems, add numbers in the naming, to be easier to work with them.

![Animaze Editor Add to Emote]({{ '/assets/images/5p-db80fefc.png' | relative_url }} "Add Particle System"){: width="800" height="419"}

4. In the **Editor Panel** to the right, expand the **Color and appearance** tab, then **drag and drop** the atlas texture in the **Texture Material** box. While here, also change the particle size (1 \= 1 meter).

![Animaze Editor Add to Emote]({{ '/assets/images/6p-a6ae2062.png' | relative_url }} "Add texture atlas "){: width="800" height="417"}

5. Expand the **Animated Textures** tab, tick **Use Animated Texture**, set the tile numbers for **Width & Height**, tick **Use Smooth Frame Blending** and adjust the **FPS**, if needed.

 ![Animaze Editor Add to Emote]({{ '/assets/images/7p-3d859ac9.png' | relative_url }} "set values"){: width="500" height="363"}

6. In the **Generation and Lifetime** tab:

     a. set the emitter type. We used **Point** in our fire example.

b. set particles generated per second to 1 

     c. set Particle lifetime. We set it to 3

![Animaze Editor Add to Emote]({{ '/assets/images/8p-e2d9d290.png' | relative_url }} "set values"){: width="500" height="482"}  

7. We added additional particles for a more realistic display of the flame, see the fire sparks in the image below:

![Animaze Editor Add to Emote]({{ '/assets/images/9p-1e81bcb0.png' | relative_url }} "extra particle "){: width="300" height="285"}

To obtain this, you need to take the same steps as above, but instead of a tiled image, you will be using a single layer image (no tiles):

  

![Animaze Editor Add to Emote]({{ '/assets/images/10p-b23de421.png' | relative_url }} "new particle "){: width="209" height="211"}

8. Tick the **Size lifetime variation** and set the size values.

![Animaze Editor Add to Emote]({{ '/assets/images/11p-304dfb14.png' | relative_url }} "set values"){: width="500" height="206"}

The emitter type for this one is set to **Circle**. Adjust the scale and position as desired. The maximum number of particles is 20, while the particles generated per second is 10, adjust these values as desired for your use case.

  

Good luck! This is an amazing feature!

### Animaze Editor User Manual

- [About the Animaze Editor]({{ '/manual/editorusermanual/abouteditor/' | relative_url }})
- [Steam Install Process]({{ '/manual/editorusermanual/steameditor/' | relative_url }})
- [Animaze Editor Workflow]({{ '/manual/editorusermanual/editorworkflow/' | relative_url }})
- [Top Bar Menu]({{ '/manual/editorusermanual/topbarmenu/' | relative_url }})
- [Camera Navigation Keys]({{ '/manual/editorusermanual/cameranavigationkeys/' | relative_url }})
- [Main Panels]({{ '/manual/editorusermanual/mainpanels/' | relative_url }})
- [Material Components]({{ '/manual/editorusermanual/editormaterialcomponents/' | relative_url }})
- [Environment Properties]({{ '/manual/editorusermanual/animazeeditorenvironment/' | relative_url }})
- [Animaze Physics]({{ '/manual/editorusermanual/animazephysics/' | relative_url }})
- [Editor Retargeting Overrides]({{ '/manual/editorusermanual/editorretargetingoverrides/' | relative_url }})
- [How to add animated Emotes]({{ '/manual/editorusermanual/emotes/' | relative_url }})
