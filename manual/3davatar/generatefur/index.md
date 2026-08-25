---
layout: page
title: "How to generate fur and fur mask"
source_url: https://www.animaze.us/manual/3davatar/generatefur
---

# How to generate fur and fur mask

How to generate fur and fur mask

 This tutorial will serve as a general guide for how you can make fur and build the fur mask for Animaze.

 It will contain a general guide for how you can generate the fur using Xgen (Autodesk), but take into consideration that you can obtain similar results using a program you are familiar with.

 I will try to keep the tutorial as simple as possible to exemplify the process in Xgen, if you need a more detailed tutorial check the link below:

[https://www.youtube.com/watch?v\=hvNcRaPmWoE&t\=1352s](https://www.youtube.com/watch?v=hvNcRaPmWoE&t=1352s) 

1. Using a sphere with UVs in 01 I will start to generate the hair:

Go to X gen \=\> create a new description

![]({{ '/assets/images/AD_4nXcSh7rg8QsuSsqQw64uerOa8nHbLIcCFFUN9LpJ-Qd1bOYnO6yuuboR-GkoJzivA3z8rw85uw7uWF2PHRFPvzaU2uYjE-i-SA2NQxfwTpLoyNIDCxht0SCdCrWhdy0R16f7_cZ_aXWxCCF0Hy1EQu2YPI2--ff1b18b3.png' | relative_url }}){: width="379" height="185"}

2. In the “Control the primitives by:” section choose “Placing and shaping guides”

![]({{ '/assets/images/AD_4nXctusNdsCpWzO3RqCOHi_2TXmUCEAizsqQDAqWgDSJ94UawjU5RCrIbKO0DnFsbfHkfn-7WRoEl5AXIE_qVcaUCIpnsgmgKOkKCTS5JxnDqgZM2n6rQxKr0yFigS-CpjrLOB9ZNeYVmhsMX134V9aZXxzqW-5c3d28c7.png' | relative_url }}){: width="256" height="296"}

3. Start placing guides.

![]({{ '/assets/images/AD_4nXeOivgiqmbNdYoRn_2CgaJNZnwSeaa7rjuymqV0yk-2sUgOPTu2DekLSWjOSzTeR0SdYRMtEwZUEeZTUsHDknUC3k5GX315q6QmtX6SECZDWce2sKrSvaLN-UJ4Cur12yM_H_lS33D-wwlE7ZQlYeE7mnV_-0111d664.png' | relative_url }}){: width="431" height="300"}

![]({{ '/assets/images/AD_4nXdbHjsEcat6PAXciGDRKuDIaHRAvCfTJdJzFf2WHuDQs7MS-rJgf39ZkFG_bO34U8joQMcputnRcLYSH_LAshyXii-ZbsBGLtIH4evEsOdx6Ee3tcgNDDbifSyjRvmRLpa6rUgInML545CUL71DQ8hbp8sz-c75e1263.png' | relative_url }}){: width="624" height="384"}

4. Play with them to define the general shape of the hair, after you are happy with the result, select all the guides and mirror them.
5. Play even more with the guides to create asymmetry.

![]({{ '/assets/images/AD_4nXeSBoSENu8rD9CaQlsUmmSZk9q2CKORWG4TTBAOVxgxf9OUdNm8g-iAGBk1IwAlz6O9dp28wjHahvB3aSb46QdG2Y0Xmjsp361HCDpx9Lsdho_joxaqPTcO8E0rpZBo0-pbfoXtyR6SXw4APIb4nCTGA1Ky-78db838c.png' | relative_url }}){: width="427" height="354"}

6. You might need to increase the CV count in order to follow the shape of the guides.![]({{ '/assets/images/AD_4nXdKexSBDYDH9hOrWzqBO8z0eNYg9ILmhBqKAHA_Yvd5xLZR7Z8vHz46OcU-mU2yuVIASHEoMXT2vxWOa5yvfkI1KC1qQj2Hod1mAwB_zgRjx7-B4e5opRR5M5WylIGeTBEhr3UHEHGY4dizL4lTUH7L4b-m-5853b8df.png' | relative_url }}){: width="517" height="367"}
7. Start and add the modifiers. I will list the most commonly used modifiers.

- The most frequently encountered are clumps

- With it, you can compose tufts of fur

- Noice
- Cut

![]({{ '/assets/images/AD_4nXeVlo4czRNrjyQQrMpZyF7xm_xELHcleZTMixdw3_huZhmSj8npzDfDQ4VNFB60xh9e2ny6PUtElLtfO5KIkKcJsNM_95Qw0LesHQdyGT1T4L2A_yuuIa8JXNJR_-WPmLEcgn39p0LHW0tAQuTsRHlCVwQ-642f7385.png' | relative_url }}){: width="468" height="280"}

8. Now is time to generate the 3D geometry

Preview/output \=\>  OutputSetting \=\>Operation \=\> create Geometry

![]({{ '/assets/images/AD_4nXfzgXh8ZyraKYmfsyPer-Wzq2Vv1FBDRcwQIPVbu_O4ApvixCgacKeRqkzXr6BtSp7yT19NN9zkjMOJNDCxzdnmQiPWKB0wlnTvZ_Bure8ZFudvIeOshiIRfzJvkRoOWO6G7GOc-7l545x6UBBMUItxKmFD-49d1f2af.png' | relative_url }}){: width="368" height="503"}

9. The 3D fur will be scanned to generate the ambient occlusion map and the normal map.

![]({{ '/assets/images/AD_4nXc0HTEUenMReeDn_b_HZuzBcYA9tD56z46qjWP5-IbxrvmZxxxiUjB2POmW3k1sHT4XDX83FfKLa7XbA2e6QpwBkt2_1uAkZ-wsdKHLlNQN-gP9vGlQZCfbtiqsdL2VVj_R1zHK8VczjM0O0tfeMHLch5BQ-dbcfc221.png' | relative_url }}){: width="504" height="379"}

9.1. If the exported fur has too many polygons you can split it into multiple fur groups and bake them separately.

  

9.2. I split the mesh into 2 pieces and the final result looks like this (see the image below)

![]({{ '/assets/images/AD_4nXdXcCMtCUwLqUGOrx2FNf29CAY8BrpG1GEd0yq6Md84oOG1P3dErjygcKlPzaWwWsB8uVkvlF7KJs7qK7Q2dnBwZdaBIrBlx2v4TuWJF7nugIS015Zfe_8md4mpe5clnn-NreB10AgnT1SCb9uTkJwUa7T5-92ff67a3.png' | relative_url }}){: width="256" height="259"}![]({{ '/assets/images/AD_4nXfr9mQZpuUBjvYg0abGVNdEt6EJhqoN9PgdaRIUt8bs7Vi7rFvQwywL_cu1wLYRqbCClHvPcBQlwLDhYhSKASy1zs6rFUbLo7ZqGEmzwzYLqCorKxX9k24I3dpRsa17awkbMVnsp2-4amYPcwY0A9_thw8-36fc4f43.png' | relative_url }}){: width="289" height="259"}

9.3. Regarding the ambient occlusion overlap the images using multiply function in Photoshop.

9.4. For the normal map use the Overlay function in Photoshop.

After this process, the textures should look like this.

![]({{ '/assets/images/AD_4nXfZVAjkP7obBExvhFpp3cl4HAHLfKXBbh-8JyXUGfAF1ZQJlEbDe7TkxSvsmFaEUV_ZM13b7EcXpg8AeGxvcPuGew4dOrRocyS-GAJEK2-R6KSb6sk8oVnkIq95TnyDZq8xNINUrS9xC4HjRZBD5TvpA_s-b4e54e01.png' | relative_url }}){: width="208" height="210"}![]({{ '/assets/images/AD_4nXdaAXy8VPBCb0J4EdQVzfJ0as2lsHeVQ-SzQIB6ulfiAZfZbcOOFMU0VmJ3oTL3vPs8HopgDktUEu4dvzFEm4sUUqfBah6iAeH1_kEWAkjwPRLHPORjaQT0L7aXY75oCw8Bgk6Oo4sPkTjqrBNi5hOMsCY-0fdb7c9e.png' | relative_url }}){: width="215" height="216"}

10. Using the ambient occlusion map, build the fur mask.

10.1. Red channel controls the mix between normal specular and aniso specular:

- 0 is normal
- 255 is specular

10.2. Green channel is an additional layer alpha control. Alpha is the length, all lower value pixels are discarded, everything above will render at a calculated opacity, the green channel adds an additional transparency control.

10.3. Blue channel is the fur aniso specular intensity

10.4. Alpha channel is used as fur length, controlling a smoother blend between (here we insert the ambient occlusion texture): 

- fur areas (values closer to 255)
- and furless areas (values closer to 0)

![]({{ '/assets/images/AD_4nXcsQ5dnmRQQAbuWkBfVGetaHqlmBCbGAyw0yeF4oO7qk9l4YAwscOZXWSu7MeNFUHN7-W0w8B8r9dtmSVLp5Lyt_9tWC15OdfdTAKQ5fp9kK15gZdjvDff4dO96QOnSlGpRCAaK14Xsnl12RfXBhCi54uo4-379d5675.png' | relative_url }}){: width="613" height="341"}

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
