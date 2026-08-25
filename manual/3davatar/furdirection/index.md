---
layout: page
title: "How to set Fur direction and length"
source_url: https://www.animaze.us/manual/3davatar/furdirection
---

# How to set Fur direction and length

How to set Fur direction and length 

 I’m Alex from the Animaze team, and in this step-by-step guide, I will demonstrate the process of setting fur growth direction info, and fur length info specifically for Animaze fur shading, when creating the source data in  Autodesk Maya. You can use as a reference [this avatar.](https://drive.google.com/drive/folders/1LQ0-AE6pbnOP-cq3CkDSM5RGI_y05uty?usp=sharing)

 The same principles can be applied in Blender or any other 3D editing package.

To set the fur length information you will need to paint it in the model vertex color, specifically in the alpha channel of the vertex color.

1. Go to “Mesh Display” select the “Paint Vertex Color Tool” and start painting the model.

1.1 Note that the maximum fur length is represented by a value of 1 in the alpha channel, while the minimum length, which indicates no fur, is represented by a value of 0.

![]({{ '/assets/images/AD_4nXdYtjIp8ONTwcFKdswVQWhzO27F9u68QAb6Lrd3I6A7t28YfSkPf2A_rfG-NzsQtO1X8Q0lAcPm5TB46KkdNoCsf0snGwTe9Ez99KsmwU9Rf4ACa57Bd1KBSljOnXjLbvoVHybw1mnksOylmMBpLvJgfug-f62252d8.png' | relative_url }}){: width="328" height="591"}

1.2 After you are done painting the final result should look similar to this(see the image below).

![]({{ '/assets/images/AD_4nXfHudnpcKUACV_f-c3rGTHrC22bMztBhxfoKpWK-YEvXQN9HsUszpXGZpMmaHjqc-gPTcsmAOse_phwv5oQmcDpmjoYse-2AkoJTGJJVWOzTnTWu9i7wBKUdHU9cyIbqhLXzNqQVOYD2-_NkqMboaMSoUc1-f0118a5e.png' | relative_url }}){: width="256" height="267"}![]({{ '/assets/images/AD_4nXdYI651lK5mzaVaBCqT-Ay3wQsL9EZ0YuF5Q6yM3CuKkFdekcLwZlLepm_bULQpc0DWSd-kNgGuavicLDtMhuNNYFreL9O0TCgsC4ESu_lEl8ZtT129XXHAWIYoYeWVaumMRf2hlWtO-I28N6sKZ35oKRCJ-e8bfd5c7.png' | relative_url }}){: width="253" height="268"}

 Once the length information is in the alpha channel of the vertex color, it is time to move on to the fur direction, which will be saved in the vertex RGB.  
  
 To set the direction of the fur growth, you will need to proceed with the following steps:

1. Duplicate the mesh and, on this duplicate temporary mesh, alter the vertex's normal direction to point in the direction of the desired fur growth,  utilizing the Vertex Normal Edit Tool or equivalent.

1.1. Access the Vertex Normal Edit Tool within the Mesh Display panel.

![]({{ '/assets/images/AD_4nXeRm13NTOHnmTKMwLn4_nFYOWVOr5uMe3gsCWxgp-RS5hDjxUmLewolJKu20RuGovAhy_aNjGOI6VqivOOKLMGBPm3BIg_6mYbaBMk0cCnUEBj_wRRj-8WuWVz8XrSIr3IoknuYZj5I763iBHqnS9PFMgPv-c12780bf.png' | relative_url }}){: width="261" height="25"}

2. Select the vertices and align their normal to match the desired fur growth direction.

![]({{ '/assets/images/AD_4nXdwqYHICglxVr-RHo6tBDHlt8ztjoKeGfxZ8TqEpqsPPAlKaJDLKU8f5mf0-Rzwh9SEqk_PZNbGZ733yuINhltRJt28AUmrlP8JVfgm3Ll1a8EpzFeO2fmGKvWBztYruhctwwOK8Lcs5RkzD2QzhjQy5XU-d5d5cf38.png' | relative_url }}){: width="369" height="300"}

2.1. After completing these adjustments on the alternate mesh, please remember that the lighting on this alternate mesh in Maya will look strange, but this is not something to be worried about. 

![]({{ '/assets/images/AD_4nXcVpwsJjzXTIN0Kb998RdcZXq3aVKu-OI81O0GfmoWW98DHR2FvK1AYWv87JZfU3BQjHoH5uCXJURXmPV9Mkjb63v2AqmmBvjZ4UOeH6vpDTdN1Fd5YLm8O5tGvm0a9vNC8iTMqhivybitER5lvsozvgoE-42321945.png' | relative_url }}){: width="369" height="313"}

3. Next, we must transfer this newly created information from the normal info of the temporary mesh to the vertex color channels of the original mesh. There are multiple ways of doing that, we will here do so via a texture.  
     
   Utilize the alternate mesh with its modified normals to generate a tangent space normal map texture. Set the model with the adjusted vertex normals as the source mesh, while the original mesh will serve as the target mesh.

![]({{ '/assets/images/AD_4nXcKO4BpNsW9fBJFZsoSNxy6m9pVSSXy_hRPd3VTuQKSOA5PR2HCkerp8RAHdHmXuph1l8yU4NOdRAwOS3beJDi-pae1A4YAigRfHIWcQaReguEZOswwH6Pz2Tuc740KDL4LessRN2zo3E4ytm8rf9t5fb0-1fa11b79.png' | relative_url }}){: width="384" height="271"}

4. Upon completing the bake operation, select the original model and navigate to the Paint Vertex Color Tool. Choose "Attributed Base" and import the generated texture.

4.1. Select the normal map you have generated 

![]({{ '/assets/images/AD_4nXf3Q-zmyviga2ERmWEaulz_r1ToX0k2O_DxSuaBhOzZQHD9DmK5m6oa93v6HmwD-t1FZvMoCw6Kd6UQoaUMJjuR2p4NN9Lf6j4Sakrn86LWjmlC9fN90sLzmXnOaRwv0OD0QnFQPPk5xmEyNEOTNSuH_a5c-3fad4866.png' | relative_url }}){: width="247" height="422"}

4.2. The outcome, when inspecting the RGB vertex color channels of the original mesh, should resemble the image below. 

You now have proper data in the source mesh RGBA channels.  
 Export the avatar and import it into the Animaze editor for further processing.

![]({{ '/assets/images/AD_4nXfaXlsrdxdLSNPfluRj0O-2heXZWkABj6Zkje30Jb3GrNKp_-VrgWAcWPstxu_Hgm6fFmbYB2mQKaMel4W-tHjd8vYYkYBi7-BuXSycoPflg-JIzxxz9BJJgp9446MD0GGcbkEUzkP7xEBI_4tqh3VLj2XE-ba41e2a6.png' | relative_url }}){: width="388" height="286"}

5. In the Animaze Editor, import the new mesh, then navigate to "Add Component" and choose "Fur."

![]({{ '/assets/images/AD_4nXeNaQwo2IGxYSTD8hD4RcDY8Cgpf1g2PPmtEnXXj0KpsrywKJNZ1ZQHC08_j4qL8SZaBZiQbWHDzliLhGivzL-cAdDmkjbeC3IjcFTg5VYEySVOPT5qaYDeisgYMlHdO46JiecD-ccYukAQSZkl2BRllsM-df941ed3.png' | relative_url }}){: width="481" height="255"}

5.1. Within the Render Queue, select the fur component and set the number of layers.

![]({{ '/assets/images/AD_4nXd8N_9_HrJNpQ4UyCDdC_1B0yaF6oDYFDZ1N-I3sfFqmYJU5kh9qcLlOQPxvZ-OawWCyvE84DjzqXP7hd1jISvi2aaJfQAbGpBSIItO0jpxA0a1SvUq2Pw62AF4XBJh6K8FU0u3N7Eo40bFKB2GplvuRm-q-523a2e95.png' | relative_url }}){: width="363" height="239"}

5.2. In the fur component Import fur mask tex. Read bore about it in its separate tutorial section.

![]({{ '/assets/images/AD_4nXcnwfohR3ol15YIemDbr36udjX6cMaxaDK8lFIt2ALZIO9gYceBtJOlSj-uU9tSMXDRN627SgjRbYgIrplHxmqnOXbBoiqWoKwBVjvuZqiY9z6UegoP8USSSAOczfqjfomDnKPGHvh3jMYNWESf76yhElZw-4348ee80.png' | relative_url }}){: width="380" height="252"}

5.3.  Set the Maximum fur length.

![]({{ '/assets/images/AD_4nXd35e2U93uwTh4ERKxTS6h83z7PToL5qMmoJDe6k0dD4gMmjQnUO42pAMlhncBj6QbzdE6E_SWzR-VyENpkw4EltAfTRItIVAJBwtGjFMbC1Fnw8KsVZkOKnc144S6snyc1uJHfS7N9qN4Ve5KUpwyfVi2J-07418b25.png' | relative_url }}){: width="498" height="282"}

5.4. If needed adjust the fur direction scaling by modifying the numeric value labeled "Fur Direction Multiplier." If the fur direction is reversed, you can flip it by adjusting the numeric value of the Fur Direction Multiplier from a negative value to a positive value or vice-versa. Select either a positive or negative value as needed for it to look right. 

![]({{ '/assets/images/AD_4nXdO1jjafu98nfIcyxBZi31L4rs5G1vR5EzRSeRnzSA4Me3_BrATgngOz9cvaLQiZ82A7Qza8-2PXiCr2fUS-D3T6jo6Huj5nkFXS6C_aeIHkxVRo6wAkkcYZzhSmnx7HFWM6i2A1pNIEaGo8cTs3K2zxUI-6cf215d7.png' | relative_url }}){: width="532" height="313"}

### FBX Format Model - Asset Pipeline Guide

- [Steps in creating your own 3D avatar]({{ '/manual/3davatar/steps3d/' | relative_url }})
- [How to generate fur and fur mask]({{ '/manual/3davatar/generatefur/' | relative_url }})
- [How to set Fur direction and length]({{ '/manual/3davatar/furdirection/' | relative_url }})
- [Concept and High-Poly]({{ '/manual/3davatar/3dconcept/' | relative_url }})
- [Retopology]({{ '/manual/3davatar/3dretopology/' | relative_url }})
- [UV mapping]({{ '/manual/3davatar/3duv/' | relative_url }})
- [Rigging]({{ '/manual/3davatar/3drigging/' | relative_url }})
- [Skinning]({{ '/manual/3davatar/3dskinning/' | relative_url }})
- [Animations]({{ '/manual/3davatar/3danimations/' | relative_url }})
- [Physics system]({{ '/manual/3davatar/3dphysics/' | relative_url }})
- [Textures]({{ '/manual/3davatar/3dtextures/' | relative_url }})
