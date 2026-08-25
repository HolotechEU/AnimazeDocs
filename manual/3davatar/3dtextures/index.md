---
layout: page
title: "Textures"
source_url: https://www.animaze.us/manual/3davatar/3dtextures
---

# Textures

# 

All the textures can be tested and customized in the Animaze Editor, in real-time (e.g. changing the diffuse texture, setting a tint color etc.). Throughout this chapter we will show you how to add components on your material and test them with Animaze Editor. 

Animaze supports the following textures formats: .jpeg, .png & .tga, and they must be exported in the \\Textures folder of the avatar. To keep transparency accuracy on the textures, we highly recommend to use the \\*.tga format. When importing the avatar in Animaze Editor, the system will compress them into .ktx files.

### Diffuse

Applies diffuse color to the rendered surface based on a provided texture.

To have color on your avatar you need to create a diffuse texture that you can do by polypaint in programs such as Zbrush, Substance, Mari, Photoshop etc. 

Requirements:

- Diffuse texture – RGBA texture.

|  |  |
| --- | --- |
| The diffuse texture holds diffuse color info of the rendered surface stored in RGB channels. | ![](https://lh6.googleusercontent.com/Gny57TbCEZpB-fPQpryzzG8BUEA9AZfiQfjnHnCwc2nqVlAUfEkTpX7HOW7GeKuvcDFO_w1uPaEnCCU4Q20I2msN1hFLCS5OgDXhF7exgNEMA32xXaXluzWQQaL_aRQaKQDwwiIg){: width="500" height="467"}                          Diffuse with alpha mask black \= 0 transparency |
| Alpha channel is used to specify transparency:     - 0 (black) areas for full transparency - towards 255 (white) surfaces get increasingly opaque. | ![](https://lh3.googleusercontent.com/xGwlQZ2DEzCfOx3GFZoVHgBqA7fJ6pexowiJULJB61LXVsWzRJxdsRfJY2e4Ih6B64pR1YB3Rv-H7I76RNyW15Aptc9d7oZdSnI5A9B5bP7iu511SZAYz0CrmzCn1fHp3CcBwuUJ){: width="500" height="451"}  Diffuse with alpha mask white \= 100% transparency |

If it has hue shift customization, then the textures have to be in mid tones (the middle part of a gradient, picture below). Else, the texture will look very light or burnt, relative to the lighting of the scene.

![](https://lh4.googleusercontent.com/qinLvjxFeXJjszJWAgeUzDL3QF0QPQpUqUCClbLxtEdXqNEXXumimn1aSZnPE9EFxS6J2v1UOgna78io3S1fKD7ahlcgcyErDffAjSwH_ive_DqrhHS6sDD2i-6uReLMD5BJLmM-){: width="400" height="327"}![](https://lh3.googleusercontent.com/C-8H3fnl-4K_j5OYN7iMOV1tnDubbL79s4KVER8UbmQJAXSBNhaWsVFusek7w2FfBXBkVo8apMRdOzwiheQK4tG5E70I5gzTEvNiCnDefwEs2M3Oz9kOPUNp0y48vauf2-v88b03){: width="400" height="327"}

                  Gradient                                                                                                         Gradient mid-tones

For a more efficient compression of the texture, use [sRGB](https://petapixel.com/2009/09/17/why-you-should-probably-use-srgb/) color space.

![](https://lh5.googleusercontent.com/UhD91YMMnkZ50Dn6-mojC4gt66l0h56wGrBv3DHsScKGgoYI1iOs63qwYb1XXPRPlDo6sPNih4HmHsfqT_nee1MXM29uMXKeCWwC-2oK4G-1u92kcC5SZ1y8TMZ-Vc-jVlqSCkNW){: width="500" height="570"}

### Tangent space Normal Mapping

Normal maps are a special kind of texture that allows you to add surface detail such as bumps, grooves, and scratches to a model which catch the light as if they are represented by real geometry.

Practically it is an illusion of details from high poly mesh with all the details transferred in a low polygon mesh.

See the pictures below:

Tangent space autodesk

|  |  |  |
| --- | --- | --- |
| ![](https://lh4.googleusercontent.com/_SVQ1hyHVvosyfvp5Ahi7DygLfUj-PWaYT1Y9liDeZ2i723rX1kZNwZxuIvSyKOZw1K9XG72LiixBl340jnKWw_26LK5FCl0HJmm4TRT-LYEn8oB2hdT9y8FSw8M7V398cwAozsH){: width="300" height="300"} | ![](https://lh3.googleusercontent.com/Hh-KKK_GECtBvODyaTQVhojYEA0rEvB8TOQoVh5eCede_JDeU0sn063mWGaS0YDPILRsL_vMaWMcezyZTq8wj2Bwvi1LaUFhSAuDPtuenrwBVlHRZVHoxesMw7ByIg2AHOql3DZ4){: width="350" height="306"} | ![](https://lh4.googleusercontent.com/-81GvMBi0ikLZMnOcRFyhpVG3ZxUHcwqTO2w7PEJ1SsFfAnTx7VZIPNlim4N-3FAcGPN-ALth5V5yxt7OdoGPZlvzW2l-lSYt3raEKSUfiwmMqQnXU8UvVc_VfBOo6SP87An1TU5){: width="350" height="323"} |
| Normal Map Test | LP Mesh without normal map | Mesh with normal map |

To make a normal map you need the High polygon mesh containing all the details and the retopologized mesh (low poly model).  For best results, we recommend baking the normal map in a software that is compatible with Autodesk (i.e. Mudbox, Maya, Substance). 

For example in Maya:

|  |  |
| --- | --- |
| Import the objects | Low poly and High poly |
| - Select Lighting/Shading \>\> Transfer Maps | ![](https://lh5.googleusercontent.com/9PRQdLezAwFaYwVhDWa-x9rmixa_ynP_lDBZmo9eSIOid8afkaNIgAOmdS2mKI6KGncAx8QNz5-6CCi1tlSVMQpSUBJ0QXSmQOt3HRVgQ4miM2I1ZXncMQhmmRVliDo2LaI21KB5){: width="500" height="668"} |
| - Select the High poly mesh and at the Source meshes click add selected - Select the Low Poly mesh and at the Target meshes click Add selected, there you can add an Envelope and adjust it so that the low poly mesh will cover entirely the HP mesh   ![](https://lh5.googleusercontent.com/dZsbzDus5N5i5-FGOZAdl4AJ8AcUQZZa9KaMtudeAlIxFdF4H2TrxK_CA-KOc1wIgSpRluhziHWNrha8YP44fSfg4PUu930cOiCSpuxnRTIeptRLvARKiiPdp_bxRpF-mJxk70oH){: width="400" height="118"}   - At Output maps select “Normal” and add the path where you want to export it and select the file format - Click Bake | ![](https://lh5.googleusercontent.com/BGSaoLYk_ss7BllfhbVlcvZnbhu-NdZlDXOuuMWZ_KWw-RjJD9kMKZeHyv9pyLMWa4Qb-b2wbhKR5_ail2Do6MAM3bA6y74jcJX-7t4Xuw1P9xaMzNKsNY_8JCpa8oLib5Z1G6sq){: width="500" height="789"} |

Also, you can find a lot of tutorials on the internet with different methods and programs.

### Environment Mapping

The AnimazeShader maps an environment cube texture (the Skybox) to the mesh surface. The Environment texture is provided by Animaze System, specifically the Skybox item cube texture.

Requirements:

|  |
| --- |
| - Geometry exported with Normals info |
| - (optional) affected by the Green channel in the Specular Map texture. |
| - Environment Multiplier – float value. A multiplier that can boost the intensity of the environment reflected on the surface. |
| ![](https://lh4.googleusercontent.com/rHhx1YWiZfRIerfWTDi0UZdGiy1pdYlAoBuIy3OSVYbB-gbQPiAqcav7gumPtIyU7Bnb-NVAS_JQJbjmRYaMZ2OIG-4FR0j954qoxPTnJmUpwHy9kfvEgU6wwU1DWl2XlL3qfMx5){: width="500" height="454"} |

Here are the steps to add this component to your material: 

In Animaze Editor you have to select the mesh in Hierarchy Panel, then in the Editor panel in the right you can find the Add Component button, select Environment Mapping and click OK.

![](https://lh4.googleusercontent.com/FQ6QCrGPGGXamapjG2qf7rp_VbMqFEJyXz_4W9YIzfYfx-ouXiyulZGa2zUEla9-N7BDHqDf4rI1paM7CtmBKEb5yRqOvqBU3LtOCMCUChz3QEkdMjus8NDkYT20VDNP9GAzPEUX){: width="800" height="291"}

|  |  |
| --- | --- |
| You can adjust the intensity in the multiplier tab. | ![](https://lh6.googleusercontent.com/ZIorzjVdYfiC77-8buABFqbL2HlOJpKcVtty8LjPPqzw7v1lo47zn_XjeCOmFE0Jt0wqSorasGxLSZvxcjvToDPhZqMR2AG2ApiiNRyPXBkhz7xsU802efVdAHUxZz6qmZEqDTeU){: width="600" height="244"} |

### Alpha Test

This component discards any pixels under a certain alpha value. Alpha test is done just after computing the diffuse color. It sets the transparency of objects.

In the example below, the owl's feathers (1st picture) have 0 transparency and rgb color is set on black (0), you can see the result of the alpha test in the second picture. 

![](https://lh4.googleusercontent.com/CWHPXjqQIVnNN9KcvUEhI2wQgkP45R-LNj61tLFXq71Q8KcHI0aAeXH12FunN3IlO4TY3etRbYH7fWTNW8jJm-Ppe5RywLWNI4rfWpd46ZB_uJEbFwRN5Xbu9DgaqUaGozZrag0o){: width="500" height="130"}

|  |  |
| --- | --- |
| ![](https://lh6.googleusercontent.com/XuNe2G-oYLvllBaNCJpm48Q0FlvIJqD1WspO3-zzhzMNN4q5zkgBFZbQHUh0LqhWqX9mGibeNzvD2qwtQXj1S8lNmRWjFSsbyXV-PLjRM8PGUUXZ_jJynJtHq9abWOGlb6ApM6hd){: width="600" height="550"} |  |
| ![](https://lh5.googleusercontent.com/f8VKsxPwl8SUX-45f8xR8FOJGqsmidQ7qsplbK8zLFkdZiWbbviCC4GkUsSDZgxf7JhUu7Lp8pgFdA-eU2VuJh47x4WU5K_hJTtGuQMDTZ4DVYGYSs_7SKfo4BWa8MfhOmDI4uFB){: width="600" height="533"} | ![](https://lh3.googleusercontent.com/trnoX8C9tnA5dekMNYm4IW_WgznlOv_tsIbIZ_TnpPZMWErhzrHAjNd0COCa9pdtAzDQmJXb2TntJYeUaKZqGJSF4kyoqDmyO-R7biDm1pG8rE3GsAIsY8WHBP1q2FWrE3YI9qE5){: width="500" height="131"} |

Requirements:

- Alpha Test reference value – float value in Animaze Editor

![](https://lh5.googleusercontent.com/uertaBWYOhDkAzB6jd0BkrrAGS6iXlXt97aYxaDU0-VFYhH_8HUk1P_DFnWOADwPPi0vb1l-yCIzjatpe4U5wXMju2sTcJpHOQ31Jwn7TmqFVe5OmDbOlNYMiLJ4jZYt38HCEmKB){: width="500" height="131"}

### Subsurface scattering – SSS

The Subsurface Scattering component simulates how the light diffuses or scatters in a skin-like surface. It is used in the shading of skin or skin-like materials in combination with Translucency component and Bekmann specular, to better approximate how light scatters, refracts and reflects on the surface.

Requirements:

- scatter texture RGB:

|  |
| --- |
| Red channel - range of subsurface scattering   - 0 value is for no subsurface scattering - 255 max subsurface scattering. Should fade towards 0 on mapping seams and on solid details such as piercings/jewelry. |
| Green channel -  direct light attenuation   - 0 means no direct light (only ambient and radiosity) - 255 full direct light intensity. |
| Blue channel   - 0 means amount of diffuse light that scatters in the subsurface - 255 max value means that the amount of light bounces right off.   A good default value would be 0.9 (229 229 229) for skin areas.  Should fade towards 0 on mapping seams and on solid details such as piercings/jewelry. |

The UV maps must be unique within 0-1 range, and the materials mustn’t overlap.

### Translucency

The translucency component simulates the light going through the shaded object. It is used in the shading of skin or skin-like materials in combination with Subsurface Scattering and Bekmann specular, to better approximate how light refracts, scatters and reflects on the surface. 

Requirements: 

|  |  |
| --- | --- |
| - A map obtained either through bake process or manually painted.  - AO (ambient occlusion map) with inverted normals through baking (in order to obtain the thickness of the model) - or manually painted  - white areas \> the light passes through easier - dark areas \> the light passes through harder | ![](https://lh5.googleusercontent.com/LDZk7K8x7kHOPTMld3LVAqNkpxUOnKD0M7TDIZ47H1cWTSy_rqikffNdLT1bP2ujgptBkFtn8QZsWH9doWQKEUR7DpizBjBZBEyk2xt-iprdfk96KiWSU9idvv343XbHFTrZwMIj){: width="500" height="502"} |

### Specular Mapping

The specular mapping is a component that can fine control the specular reflection on a rendered surface.

The higher the value of a pixel (from black to white), the shinier the surface will appear in the Animaze app. Therefore, surfaces such as dry stone or cotton fabric tend to have a very dark specular map, while surfaces like polished chrome or plastic tend to have lighter specular maps.

Requirements:

|  |  |  |
| --- | --- | --- |
| Specular Map texture – RGB texture. The specular map uses two channels to customize the specular behavior on the surfaces:    - Red channel holds the specular exponent info (also known as shininess or glossiness), so it controls how blurry or sharp the specular shine is rendered | higher values make the shine small and sharp                ![](https://lh6.googleusercontent.com/B0NTQTc8CwBeC5rffM0zaO6UWEaBPGkEfwX34bXxT8UG-LbeDD_5WlNUCNiMYIC01juaGxP3zoOhsiXVzd7cKTqefxEqyJuTSkaTFHuDQxFqq93Wj2WMamnnKPzt7Q6qiUWhsWyc){: width="500" height="500"} | lower values make the shine large and blurry    ![](https://lh4.googleusercontent.com/Q4-HceyWV0IUG0UwblKoguZZ1s0JayiRNhUiyTHOxTAOeewoNEiTOf9U0988nFMJAU_oBue3No1JfWSIpz6Z-E6U2YCpXb9ojSzFMsMRV9ALGOYrfJHJgvGr7chBW3btOKi1eP4d){: width="500" height="500"} |
| - Green channel holds the specular intensity info: | 0 means no specular shine   ![](https://lh6.googleusercontent.com/G65MchM6LHqOoXuMFUkODkzhms-rApoUK7na0jl3bTz2StyR_wDGK0xhZNdAH-CWpMWezjilUssd49FHRhyHwMjhX08MAYRkSNLHymPacBGy9SwaKXQNX-2rHaOlBfOcNunGGqnW){: width="500" height="500"} | 255 is max shine intensity  ![](https://lh4.googleusercontent.com/Q4-HceyWV0IUG0UwblKoguZZ1s0JayiRNhUiyTHOxTAOeewoNEiTOf9U0988nFMJAU_oBue3No1JfWSIpz6Z-E6U2YCpXb9ojSzFMsMRV9ALGOYrfJHJgvGr7chBW3btOKi1eP4d){: width="500" height="500"} |
| Emissive – as part of Specular component  Adds the emissive component to the surface shading. The Emissive just boosts up the diffuse color based on the specular map blue channel.  Requirements:  Specular Map Texture – RGB texture.   - Blue channel holds the emissive intensity information:  - lower the values – less emissive and more influenced by lighting - higher values – more emissive. | ![](https://lh4.googleusercontent.com/hBC6UMHCvt5BlQEQHe8ZedFc9edWSDZGEpKPOp_BJJj1I9i9rL5chtAPqhRbSMtNjMukx6NEXsRuI0zgk6AlEJ90_O8Mx9L0InUaMmd5YzYwuItlb2MtmqhR-LAgf-_HZBpa7zPc){: width="500" height="500"}  0 means no emissive | ![](https://lh3.googleusercontent.com/9HzXTgOsmEmv1jCqThNgLe1_zfiJssYVhBP1-calrPj1PUnMp2cZ47mR1IcadoU23YDZvf5NmEynCnJCfOG6kwfzQi7bPYu6rrnMzzGHvuA0uNucs0dZsC06CFLMSjUsZ75efnDR){: width="500" height="500"}  255 is maximum emissive |

### Beckmann Specular

The Animaze shader provides two types of specular highlight models: the classic Blinn-Phong distribution and the Beckmann distribution. The Beckmann specular is used in combination with Subsurface Scattering (SSS) and Translucency components, to better approximate how light refracts, scatters and reflects on the skin-like surfaces, but it is not limited to that. 

Requirements:

- Roughness - float value - a parameter between 0 and 1 measuring the surface roughness.

- small values are shinier
- larger values are rougher

|  |  |
| --- | --- |
| SSS \+ Translucency | ![](https://lh4.googleusercontent.com/ZTqa2nzdT6PcVH6wG_AYIyDdkopNxbkDp8dQGvxMpv6RUtrtCaJexCw6w2-96iL1IrDi5thyccBABzK9uQTAZQud6Lr-mIp9w-AUWb5hEwOiWhZcWcuMA5UBhUGO3jJWNY2bJPPT){: width="500" height="433"} |
| Beckmann specular | ![](https://lh3.googleusercontent.com/oCL0CRmrZJ_Yk7T5hUwSMMUC8e0b04bmcXjG-RCo88OmQmAedvRHtjkM9IFDxp_N8aPlqNkIjL4m-7jQuZkicsdLkQzDoTD-AX30PjOacdmWBiFcBNaEnxURzbICVHMD4NXtExWS){: width="500" height="443"} |

### Specular Normal Mapping

|  |  |
| --- | --- |
| An extra normal map to be used together with the regular one when computing reflection and specular, usually used for eyes meshes. | ![](https://lh6.googleusercontent.com/N3hrS3KKbykNxAkSmNI6cfcF-8mkFIjtYwIacqHq35JVZ_yxZ7lBm25khsV00fdrWcaH4hJjZUJX3SSbQ4tqJlkmJZh7rRSM9RYbIPy70Z1OElhDEPMxCLu7x7X0a7ActmMM0wqp){: width="500" height="455"} |
| The effect from the image above is made from normal map and specular normal map | ![](https://lh4.googleusercontent.com/VCPeCR3DqQLqImrIxCbTUCkpuN4OByAoncxIc7SgnohkPOvfE7uH6MqjEp_Y9ofJwUpWK5_14U8LfiTQmvq40mxQcalEMQG8zMEAF9S_8S0GxD6THq_FEkWW2Q8sO3mPwl7cDCov){: width="300" height="300"}             Normal map        ![](https://lh4.googleusercontent.com/lTKg7y08sksv8VbbgzX92L8X0Ct_BovZW-9kFhcohb5olFks3yVOrUpdxwGV9NnuOka3S17zjyBNSPuY51lIOLpNhIMcYrh822_SDAtE7Bz1z8UZ7u_h3DKxAV6wAufrT2kctUKe){: width="300" height="300"}      Specular normal map |

### Tint color

Material component that tints the rendered surface with a certain color.

Requirements:

- Tint Color RGBA:

- RGB tints the surface
- Alpha makes the surface transparent.

Add it by selecting Add Component in the Animaze Editor’s Hierarchy Panel, on the desired mesh \> Tint Color \> Ok. Further adjustments are available in the Editor.

![](https://lh4.googleusercontent.com/gIff8woxGrevOIC8ncJTpYJfxaQZNXfKLiYvgdNr190rZMlrFmFN5Ojr1C5wHoNuLsz0FCaDuSsSL2sxRLD0jFs76MrYBlmoZFSwnk2nPavJuelR2xobQxKhwrsYOt6RljVJWKme){: width="600" height="172"}

|  |  |
| --- | --- |
| ![](https://lh5.googleusercontent.com/bf7Wcy7yPuhznAshmg7fSB9o8TfJksC_v-bBpIyj61BYuWNjnjnKKHHS9uG6QDECAv0KBzLuGuOiMr2J-dDLn1HZYjQ-HRWZnwfIflkTb-pIbDOOWGMO9_C72k-RXN1SRwX0Y81b){: width="600" height="694"}  Without Tint | ![](https://lh6.googleusercontent.com/QlCnVcxEIzDk-uF21v2RSJhqWbsoBkEOwtKgHRn6armR037xZwegQ2ivfYLq4dicHX5CNZTvH5tCUyhxr3fBhQreMsFRRcm7K97OU5iuy7vd3N0K8k_o8IjQGK2mwJU_uTQVtXKI){: width="600" height="672"}  With Tint |

### Mouth AO

The AnimazeShader has a simple way to deal with the ambient occlusion of the mouth in all avatars. Based on some animation inputs, when closing the mouth, the light that affects the mouth interior is attenuated based on a monochrome occlusion texture map, and the effect is reduced when opening the mouth.

Requirements:

- RGB texture:

|  |  |
| --- | --- |
| Red channel - the texture holds the minimum brightness value in the red channel, for when the avatar’s mouth is closed. | Baked AmbientOcclusion with mouth closed  ![](https://lh4.googleusercontent.com/oP4m4X7XvfnAeFOHmtD9QVrZ1Kzg8X4ALFxTnpTthPM1xKD-Gq6hPd3jdamKfsZxKjtTL7TrIJf9kvlUVW3Zs6VfqONpmf292x6oXQvFhioqJCNX6WRH2qOnLjrLOhBcn_otQKnm){: width="500" height="500"} |
| Green channel - reserved for mouth fully opened. | Baked AmbientOcclusion with mouth open  ![](https://lh5.googleusercontent.com/X2mbJcuG_wK9j6SXVGDvR1CCJyWd8eNw1aP7O9scqkfpKUS8V81HFAHGMIhASR5g4jUUchQcDqx8GczLni1jkOmEP_YdXmNb9HHsM_9kkHXzhFTppYDz7vRfR8qMeCatsLyI8vfC){: width="500" height="500"} |
| Blue channel is used for the tongue. The tongue can dynamically travel from inside the mouth to outside the mouth so we need to mark what parts of the tongue need to be occluded less when the tongue sticks out. | Baked AmbientOcclusion with mouth open and only the tongue information, without the rest of mouth interior.![](https://lh6.googleusercontent.com/rC5asHoKky1RsE889eJeEV36VJi1cPrmLNdEWTNnb9AeIwwBZJYC1wAXKQeveRKDvty-9rcuAKGZjGLB2LXRgaL4xGM59ppRdyIkhc3FLWd87bReQSVqXbxGXqElpu5lE5ZBF9rJ){: width="500" height="500"} |

### Fur Mask:

The Fur component renders the model in layers, creating the effect of a furry surface; it can be attained for short hair fur effects only. The component makes use of the normals and vertex color geometry info to compute a general fur direction, where the Red and Green channels give the direction in the Tangent and Binormal space.

Furthermore, a surface can have areas without any fur or with shorter fur. This aspect can be controlled using a fur texture mask.

The quality of the fur rendering also depends on the values of fur length, number of fur layers and a global fur direction multiplier.

Note! Fur rendering is expensive resource-wise as, in theory, the model is rendered several times (number of fur layers) per frame to create the effect. Performance-wise, lowering the mesh fur layers helps, although it causes a drop in quality.

|  |  |
| --- | --- |
| Red channel controls the mix between normal specular and aniso specular:   - 0 is normal - 255 is specular | ![](https://lh5.googleusercontent.com/eJmv3kJZ_4h7f7qjSIt7Oa_jsBaiducS18TnBWWO4ASemD31jCigjIqIHTTvZiS4GEprnrBEdK8bsgr-Xkyk9e8wrRMRGQ_KkKFA0fGV5txPD9kYrFoZc4zatUp63d7xJBvBdQEN){: width="500" height="500"} |
| Green channel is an additional layer alpha control. Alpha is the length, all lower value pixels are discarded, everything above will render at a calculated opacity, the green channel adds an additional transparency control. | ![](https://lh5.googleusercontent.com/szO07HfEwFM5XYaKPAlAvYiAT-5glP4OMR1QvV06ak87XpqP72p1_p67HxeVOxKSFQ9cSuosAU_ctmcW_O4TLZvshYsAlUv8JJl1HB-atmG9pa2W6zDYh_vBaA4oekb1KuevrUFt){: width="500" height="500"} |
| Blue channel is the fur aniso specular intensity | ![](https://lh5.googleusercontent.com/Sqsp3JXNODU6qGSZS6PyEYPOK65kw_QSyVt9sbfwFCjbMM-B7uR_GfGacG2owBMCakBGC2lYNUnuC_MO80jDx2L68VQ0Zu8RhfR2S5NcxS3GDJJGeBGLBCVeJl6-v-aP7yjQboRJ){: width="500" height="500"} |
| Alpha channel is used as fur length, controlling a smoother blend between:    - fur areas (values closer to 255) - and furless areas (values closer to 0)   of the rendered surface. | ![](https://lh4.googleusercontent.com/F4FqWXv7gp2yGty92ktYOHfEshRtd4jaqTcMWDsxeZb-q2NANEztjRJgnpnUNIU9vhqySgQc3DMNyHjMrTLUzVAylSpRf945wSvz4SOR6QnBjY-CIryaEMbP6xEhgSowbvLvfk5y){: width="500" height="500"} |

### Skin dot mapping

Dot mapping (or dot gradient-mapping) is used as a fast skin shading approximation solution, that is cheap resource-wise.

Requirements:

|  |
| --- |
| - dot gradient map texture which is used as a lookup table and describes how the light behaves on a curved surface (it tints the diffuse component).    Note! The texture sampling needs to be set to Clamped. The U axis in texture space is computed from the dot product of the surface normal and the incoming light direction. |
| - skin texture RGBA (GBA not used) where Red channel is used to control the V axis in texture space of the dot map texture. |
| - dot map texture is provided with the Animaze Editor the skin map represents a fake subsurface scattering map, which the whiter it is, the smoother the model’s skin will look. If this map is missing, the shader will consider the upper half of the dot map. |

Clamping the texture will prevent wrapping artifacts; when mapping a texture onto an object and you don't want the texture to tile. UV coordinates will be clamped to the range 0-1. When UVs are larger than 1 or smaller than 0, the last pixel at the border will be used.

### Animated texture

The animated texture component takes the diffuse and runs a frame by frame animation based on a tiling method.

Requirements:

- diffuse texture RGBA
- (\\*) number of rows and columns in the diffuse texture
- (\\*) framerate

![](https://lh6.googleusercontent.com/luMNFhsjSdPk_1eyIiEQNiV2PKjjwddmos69BH6AZ1i2QOH093zem5ZVr-V3REPshcdhicfbfSdcnX2QFWh53h0DOAXD-aSq0ACkzvmiBLU_EGTi4xXI_Vh1ghZPjb1FWh8__OJC){: width="500" height="301"}

### Animated Alpha Noise

The Animated Alpha Noise component adds an alpha animation for some effects.

Requirements:

- needs a RGBA noise texture
- a set of noise parameters set from Animaze Editor.

### Cel Shading

Cel-shading, or “toon shading”, is an intentional non-photorealistic rendering which is generally used to make 3d graphic content appear with flat colors.

|  |  |
| --- | --- |
| A common theme of cel-shading which gives it that effective cartoon animation look is the use of bold outlines. | ![](https://lh5.googleusercontent.com/UJXlGEOE8PLXdEQQhRAoAIv3U4_3-s6-Cne5UXoaaKd5vBp73N2KBs2r8a-6tPnrqltMC1J867jYXpTKuZI8WsfkDfL3JlaARHE4GBh_uSeJS-I7tOXtjE5j24IhPZdb-azZf9pF){: width="500" height="257"} |

Cel shading is supported by two separate material components, the main difference being the amount of fine-tuning and detail control needed for a particular look:

- Dual-tone cel-shading that has a set of parameters to control Diffuse intensity, Specular highlights, and Edges.
- Multi-tone cel-shading that uses textures to control Diffuse intensity, Specular Highlights, and Edges in far more fine detail.

Edge outline

The Animaze shader implements two outline methods that can be used simultaneously:

1. Dot based edge detection - the edges of the same surface are darkened. This method uses the dot product between the surface normal and light direction and decides based on a threshold if a pixel is on the outline of the rendered mesh or not.
2. Expanded shell / Outline shell - the darkened outline is rendered on the exterior of the surface

Currently, both outline methods render a darkened outline, there is no support for tinted outlines.

Cel shading (no textures) - Dual Tone Cel Shading

- It can be added in Animaze Editor as mesh component

![](https://lh4.googleusercontent.com/ffL_wG57v75GAp-Wr-w5CNYEJIeihV7cJ30O_SvZ31x7K-avE8brEbQUvfw9t6Ny0mYbwLecG1KyGZvH6ehr7n0c-FeADqCKWdrIAtHbxen_9uYIa7v7lgFuiDV_pwrOxalkPIvP){: width="800" height="343"}

Diffuse Threshold - light intensity threshold that decides between applying 1st and 2nd tone diffuse intensities.

![](https://lh5.googleusercontent.com/kioP66pEPkEU2qIBj-X1ZvR2LkrKziYSQMkhYf-K6g7gUSbdiO9hh5qQdzS3IUX3GvmQAjOEVUeS9J4XOF3h6EPZu5b2Sr8EiJ1oj2WaebLIdeKSqR0dhS-Dn_fKd5EVms2wqARa){: width="800" height="288"}

Diffuse minimum value - 1st tone diffuse intensity value

![](https://lh4.googleusercontent.com/QhCzCCHWjlHrCzGwpYdkt8JZrvpuC6dYYKpvGBJCe5vY8WvgeBrumikHbCKYe34n4MF4IAXxXf4iKpLqLnmzXy0GPGF0ImR8DPRoFdeXKf3f280X0dTRZwa--D7iz6Lu0EyPt9hM){: width="800" height="271"}

Diffuse maximum value - 2nd tone diffuse intensity value

![](https://lh3.googleusercontent.com/MfNmM2xJ_A-GwItPC5U9-jAoFFGNX9kJnqCSfq9-8itvzNCwZzZDdTAVCxTZrh8XRNjrEfGBDqgc_OlH0wSOdGoCRf120ZK-e0P33FYwTVi9JkPx8Q8TIUwGv_MSi4XpnyQYQsPO){: width="800" height="276"}

Specular Threshold - light intensity threshold that decides between applying 1st and 2nd tone specular intensities.

![](https://lh4.googleusercontent.com/ki-tJo73624GuPZfOAywZG1yAuJKE3EtdwE84kMbC3m6uIzW9Terva_JwMgA2fW4eNPM5CeXdl6NFo3EQRdsOJIivWrKHCSkzIa53MP54nOEbBbazhiXfsWXWd3Yd4frB_33Jrm1){: width="800" height="294"}

Specular minimum value - 1st tone specular intensity value

![](https://lh4.googleusercontent.com/dOZMVUa51XjUHZXOaJ2KmDzTTUgd9a4s8Dlc1-b3nt9gTYeobtc9DiiPnjRDYvXFDIv1gfL8GlYxk40sMyWa0kouddN9N6_NAT6LJkRuDb9WfAz7oI-y4dikRNeb3iBHQEKtXTBr){: width="800" height="296"}

 Specular maximum value - 2nd tone specular intensity value.

![](https://lh6.googleusercontent.com/vdIv5s7Q5IgLG4a5neIstzERCNhaeox4o1XS3mfC8hgmpa90CPP77Y6eJh4SYIum9Il7WEA_xAhxc19RrpUyJQDG8egLQkNAfjY5SYf1YYZp4qWT4fmf8DCT69kMfD7kp-5SuTfY){: width="800" height="294"} 

Edge Threshold - threshold used by the dot-based edge detection method.

Edge minimum value - the intensity of the surface that is not the edge (factorizes the diffuse and specular tones).

![](https://lh3.googleusercontent.com/QHx2yZSFUwKY_QYy2NAEQGhfsXuOBTOzp6pUm76nu1lsjg57bru9tSQGC2MC1DJ6iNQEBgATS2yWRMzJ4nDV_cUaXEtDiJMAwinCdvOYD7uqibUnsjr_CCC8b5Uk-OQOeCfdC8T1){: width="800" height="268"}

Edge maximum value - the intensity of the surface that is on the edge (factorizes the diffuse and specular tones).

![](https://lh5.googleusercontent.com/KDnOar2qCY56DipOfBIun3eTr4tRiDRtqOQ2t-AIcOYDFJomL3BOJwR-d6fEKIjqlKEWjOHe5iTBHS4jH6D11of-Gh347R-qtVs10jnVGPsPcn-knf7FcGOrQKl0Ac4SBDMnqHSZ){: width="800" height="272"}

Edge outline width - used by the expanded shell/outline shell method. Controls the size of the outline. Currently, the edge is always black.

![](https://lh6.googleusercontent.com/OiU__tJA1iIqIi66e5viQVD1aHy_ordMKnogzycUi6ta5lZ5vq4HWMbG6DJ4yfTdR_mV2_GY_KaBhmKA06xU0ipbo6kHoWNt1KsuELiKUWBiySRK7llW5OiotNdylyqj4OlHumhh){: width="800" height="332"} 

#### Cel shading w/ texture - Multi-tone cel-shading

Multi-tone cel-shading enables a finer detail of the rendered surface through use of various textures, that control the intensities of the diffuse, specular tone, and dot-based edge detection.

Diffuse Tones Texture 

- The grayscale texture that maps light intensity (u coordinate) to diffuse tone intensity (texel color).

Texture used ![](https://lh3.googleusercontent.com/jBUIziNI1jASCV07bd37C3ZHZUAXlZwPIapvBkVSOGtve_-bHc_pmJ5tPY4j7dllPW2oU79QzyeQPr_W9aBXx4jy_Cllr0yHAKADGLz0WZVrdxJBgukkpCQAiCV1GhedRY1bhfJq){: width="350" height="24"}

![](https://lh5.googleusercontent.com/H2rBEZn2W9-6Vg9K9aEp_bgkfZUyNWxrbgReUDMYhspy_l-8v72aFXoxhjOtTvBdsNnuosLVLsGarSLaBB7Eace9aKUh8YZoYOpTUsgSrqvRlMlF7vSXl4IkbULnP4e2DPaCc_ox){: width="800" height="348"}

Texture used ![](https://lh3.googleusercontent.com/U9jC_CXyxBxQ5eyg2-9q7wzQRMz77PkT89daQM8SB1HTzqnkKK2XkEjARQ_dcUBa8riTyVA8TMN3dk5E3HIeJ53BhfyIDf-rrjYBO3xF7PGsesXZKu5YxVD_kF4W44Chn_qwhHoZ){: width="375" height="26"}

![](https://lh4.googleusercontent.com/Yy0IjDXT16RYUocgNRsR3X1taAy7HXVfngRsmA7E5vdlVPPDPjVudSj4wcCoC_ZR1WMRlLFwT1UNodGlGttgBLesV44nOOF5p15WuEcpMq7zVKQfIryRAjDHYkPHGHLwO2Vwa6NP){: width="800" height="344"}   

- Animaze shader samples a single row, so the size of the texture can be width x 1 pixel
- Supports fine details by choosing to build the texture with steps or gradients

Texture used ![](https://lh6.googleusercontent.com/nMvKILMIEyaUtF3dWMMG5C0Z9078w2znJQ3Y3YkP-vob6tUzQrii0s4Nhu9BcOcmZV-BpLRtT6OSF1obzuwaCIvEY6_vvkT6ZYEaQbo0WszbEQfswHqanpW4QWchqbpS-DKpBPXB){: width="376" height="26"}

![](https://lh6.googleusercontent.com/3yLEffjLI33_RA1k0orimLOhqhT5Zb8AanL0yR3zCkAahfAAmGSMUrjE-7C7CZQfRXlyCh3oY9fsOomJq8W-VW4DQGO_0NMgotrb2FltPumftBPmsrumaOboHtLJgfcXO7luCILF){: width="800" height="344"}

Texture used ![](https://lh4.googleusercontent.com/IS5FZKW8VOOqIgKOURKHauV2yKhrAbKxQIwDsRRuHxW0aJit3TvuaJyIZqvcP24YiHGNVCUlrr9NX9A3qxebCA6zSZHvbxE9GxipaR14SDvO5IWOnm3z6aPMIqqyco6m30gMBiim){: width="359" height="25"}

![](https://lh6.googleusercontent.com/Ew512GL1x3QIT6YrRczFkm_pc46hrauLQOXzOpAQ6XKnznr2iA8eLETwrEPBvLPS5cjc4Kx6G7w1qCW10GIXhyeu34I9LSb1oKfRa_aRJj4JSI4UkS2E_n_NFRyOLiubzioiKfQx){: width="800" height="342"}

For maximum cel-shading effect make sure to use point filtering on texture (by default Animaze imports textures with linear filtering). 

![](https://lh3.googleusercontent.com/xUhXmMPaN4UjEDRv9hzAy6J8mmW_SyBDahRAeS3I-1HaHwyE2w2nMhIJa4aSULyo5hLrNhNB4GaoAJEzN8_uM9gFg3Xbg8JVb4j3ZD-LJJ_Ks9IamOnbXOCYvmZia2IyX-FRlyLc){: width="400" height="780"}

Specular Tones Texture 

The grayscale texture that maps light intensity (u coordinate) to specular highlight tone intensity (texel color).  

![](https://lh6.googleusercontent.com/DF3xtrAZ4sM8phRs3P8wfNDKpi06qHlGyzYi7GmKKOGjaPokqyTILNVFYo1L8JUqatf13-Yvm42DFqirLbEdUzDn5aVLFX4qDK5vM4mf1mINJler3ENjEUtznrdXRX88LU6_vppw){: width="700" height="302"}

- Animaze shader samples a single row, so the size of the texture can be width x 1 pixel
- Supports fine details by choosing to build the texture with steps or gradients

Texture used ![](https://lh5.googleusercontent.com/5doSwtZqfZgkTHouZ1xaDWI1NRvxzp54BK_283jdtOnVv-48G2zr0b5k6kVGLF6K-o2l7kanwHe_-v7dmGxupHJQX3PJOZXUuTmUNOHcs2cnOIQYVqOil8n1R21BGGMjSddYps7-){: width="391" height="27"}

![](https://lh4.googleusercontent.com/NYouMUFmZNY3ucg_76PHV9J5x0nl4nNsddJX7P38iGEEX6dM4Diu_f9dsSnJEmdgYWrs1FPh2rAjsD5VrhIeN6XRqFMqmjoYe0yDNEUzoa0uPfhckh2aXnReR76l1HuwORb1Of1B){: width="700" height="302"}

Texture used ![](https://lh4.googleusercontent.com/aYYz1IwSuWudzuhZwNAegXuUIOS9DW2aOAfVeCcmRi9bFZPsFiiOYzEKY2K6_7TcSTqkt-vY4UAMuhfis5r8VnbUJqXUDFR_vHneZG_fn6jnpVQqoWng2LpKcyI0jfCKdYVdTVb2){: width="389" height="27"}

![](https://lh5.googleusercontent.com/MRgQibwEM_h44LAkAx9Xh7IbBksl073Bw3Gyy0EJ6D5-FgMPQ17wE1pJjVdJypFa9BST35lNPjnR-GilW2HL4MF3JRvgr1X3PwLhNd7Nrv8UU7SEnAyF3WddLwZKyGQUzBREe4L9){: width="700" height="302"}

For maximum cel-shading effect make sure to use point filtering on texture (by default Animaze imports textures with linear filtering).

![](https://lh5.googleusercontent.com/Ht0YoxLf07RaWEEhG65wI5cBpLc-WYzTesMUDdCSsELoU1kAwBqDU4182TVM95OadJtdhY5jjJIJ2_cARtVRHntoJNIUPgYC7aPdv6PsFpogda_Pu9WCUgmrUWT1ghr_bRXTh3n5){: width="400" height="784"}

Edge Tones Texture - used for the dot-based edge detection

The grayscale texture that maps the dot product between surface normal and light direction (U coordinate) to edge tone intensity (texel color). 

Texture used ![](https://lh4.googleusercontent.com/gJyKR_gzrqtDX0CaSSiMEEGLWawYvCusAKjy4vw9KKU4ZH5ueAUE_OSsiH5nSDGDg_W52Sa4ByPefypIwiRCGYw-7NL369-awtQ8AX83OoNKKWlysj6hHwuJScB0PEN7jw39h1oG){: width="462" height="32"}

![](https://lh6.googleusercontent.com/V5CXYaucQbO1edqSYo5MzS47FQka8LjjTRVjMLn26X60GyNgtDtr8R_L1UoTZBuQduJIHD9BNRxp74pT7m8h7GD0CIHjHogBdIHhtgtWzQWXZp2aH-CPGb0nAdkv9d-PpmI3TONB){: width="700" height="302"} 

- Animaze shader samples a single row, so the size of the texture can be width x 1 pixel
- Supports fine details by choosing to build the texture with steps or gradients

Texture used ![](https://lh4.googleusercontent.com/e6iAp0Huce7dBIjbGKzMlqYL4k0WMFwQvG1slKabWekCYgJS-zIkuWaD0sFcF-RoNrq3Wsf0OL92GQLZB9OqrUPohjjfa8a9GGuSfPR5jSnMW8_l5snESIf_evEdGAn-lBAklVFr){: width="360" height="25"}

![](https://lh6.googleusercontent.com/Mdtvs6vk__FD8JgLrD0GvQYXf7YGxPvkGcZKkvk0-4ZdocvsZkOm0uper3h8YsuNnuUixFBeAwv194zIjfe52G4SPOeXiOv9nwq2lZQNHbTN6QEIgfkynKdOXW9dnCG1f0Ymk84s){: width="700" height="302"}

 Texture used ![](https://lh5.googleusercontent.com/b73rLLwKDK7PvPhiz8IDfMhw9uWSj0M0ISg1Bh-V_1UAlK9OAsxQWfHWtn2v6YB6XnSHN7chYvvdliek1R5lvKx_j0rX8qqupDwtEO8WGsNrEh8UOLyvBeIQ3h9p4i38SW3VXbA5){: width="360" height="25"}

![](https://lh4.googleusercontent.com/U7W34HS_VUi0W-VG1qq-hjPhX94hjrt1rpCuHw77Vf7wKCsaOWoFSpM64C_7VGvnd58aCU0J-d4kBTRzfO_zSiNw10wtkyjBRB7IZN5-_CsmwNCjlWHX8CHVayHVGCOKLppZz4Um){: width="700" height="300"} 

For maximum cel-shading effect make sure to use point filtering on texture (by default Animaze imports textures with linear filtering).

Edge outline width - used by the expanded shell/outline shell method. Controls the size of the outline. Currently, the edge is always black

### Shadows

Animaze rendered surfaces can cast and receive shadows, both processes being independent from each other.

Casting shadows makes the rendered surface be rendered through a shadow pass, building up a shadow map. Receiving shadows makes the Animaze Shader map the already rendered shadow map.

All three numerical values are used to get rid of the shadow mapping artifacts.

Slope bias factor - scale factor that is used to create a variable depth offset for each polygon when rendering the shadow map

Slope bias units - constant depth offset when rendering the shadow map; 

Depth bias - screen space value that is used to offset the object depth before comparing it to the shadow map value.

![](https://lh6.googleusercontent.com/lCON1QqZvAfdnlQlv8gUQIKv77SQrEvJcHfSfAtl6JtBze2RlvZLZjhpt-zaw5UpxhqD8Mo0fPk077oNZWPk1hrnV6dmJOUymMC6gj6VH1g3Dq52fU-vZLf4syfketDT4fsjglZs){: width="557" height="192"}

#### Additional components can be added to a selected mesh within the Animaze Editor:

|  |  |
| --- | --- |
| Static Color – a color component which overrides any other color texture on that mesh; usually useful for particle systems. |  |
| Texture Alterator – basically, a gradient color mask used for dilation of the pupil which can be fed by animation data. In order to attain this, you must have a unique mapping for the eye, placed in its center. The mask with full intensity (white) must have the size of the pupil, while the gradient from white to black must have the size of the iris. | ![](https://lh3.googleusercontent.com/0H2ACx1F7ySUNyu8IOQyKp1CSSoleBQeM9EJSxy72BjLjuHMUqfeh5i83RyvC8hh2fP2hxzmVVWjYy8CmCzKiqTB7GIw9x_xQQ9p1wLPrw1nfuWPi8Jm9DwykfxmsYmZlnllPvWF){: width="500" height="496"} |

You can test the textures you created in Animaze Editor, but you’ll need at least a basic rig with BipRoot, BipHead, Camera bones and [idle1](https://docs.google.com/document/d/1CrYJjoTh3vi8GfW6jJ5rNYRmy55QgIYRO-ZyviUbqm0/edit#bookmark=kix.mprembsmtro9) animation. 

#### To test your textures in the editor do the following:

Phase 1: 

|  |  |
| --- | --- |
| - Make a folder named Avatar”your character name” ex: AvatarShark | |
| - Avatar folder should contain \\Animations folder, \\Textures folder and the \\*.fbx file that needs to be named the same as the avatar folder that contains your avatar with meshes, joints, skinning etc. ex: AvatarShark.fbx | ![](https://lh6.googleusercontent.com/5mqNYJhcYocdsy1id0E7Pwsh4l3kjjDbdyCVh7OaZcvBO6SFTaL3jmHAIK4nzNOZNtAjbgTVECV29okCBQ3pJacGYFGYtBHJUrHMRDifHuNHK0Gwjt3NX_OImuX-1Qek0erjJG9B){: width="300" height="253"} |

Phase 2: 

|  |  |
| --- | --- |
| - Add a single bone, named “Character” and bind it to the meshes, and export everything together in Avatar’s Folder, using the example above (Avatar”your character name”.fbx) | |
| - Create a base animation and name it [idle1](https://docs.google.com/document/d/1CrYJjoTh3vi8GfW6jJ5rNYRmy55QgIYRO-ZyviUbqm0/edit#bookmark=id.xjp4rb1rew8h), add a key at the first frame and export the bone only in the Animations folder (you will find more details in the [next chapter](https://docs.google.com/document/d/1CrYJjoTh3vi8GfW6jJ5rNYRmy55QgIYRO-ZyviUbqm0/edit#bookmark=id.z9z2elwd8vwh), but to test the textures it’s enough.) | |
| - All avatar textures should start with the name of your avatar ex : AvatarShark\\_Diffuse, AvatarShark\\_Specular etc. for consistency purposes, and it will be easier to find other textures from other avatars, in case you want to use them for testing. | |

Phase 3: 

|  |  |
| --- | --- |
| - And now you have to [import your avatar]({{ '/manual/gettingstarted3d/importavatar3d/' | relative_url }}) in the Animaze Editor, to do that you should go to Assets  and select Import 3d Object. | ![](https://lh6.googleusercontent.com/nnvsemVrUdSsTd3n4Ls5ckZiXDYL4PfYtUc0YFcvz7ee7VhpMPrXAgCRKYHs-d5QNFmmM2AJkAGrRFRIdNJTn2lu4mQNecMRjxNdg0etTik_OqkM0p3flDMU52jWjvXBdKIv_Knb){: width="300" height="318"} |
| - After that you can add the desired textures by selecting your mesh in the Hierarchy Panel and in the right you can find the Editor tab, where you can adjust your materials, adding new components etc..    ![](https://lh6.googleusercontent.com/qjIAI75f6ytBHShKMLrTSywBe3mr4bE0AQ5K_wqhk5PPzfDw9CoRtLDVWwkv8NjJpSYahvdmsR9UjrG2LIRQpsd5m8huTtT2k87ODYgW5CVWIu9ZFfNu2WtLXN9YZQA0EuwN8DPu){: width="400" height="333"} | ![](https://lh3.googleusercontent.com/ON9We3rDm8lxsPsMCfFWG8-TlsVXQOCS-bDoMmtlmYvpglnzDm4a_kPCT-Vk9BL0ooVOkXPPxq6TNrn7N6RODIxQWddpOMfckkvz4DhIkJLLkk2JOOLlMIe4KZH5B8DIxr34JLDk){: width="500" height="694"} |
| - After import, the editor will make a duplicate of your avatar folder in the path where you installed it. (AnimazeEditor \> Data \> Assets). - In case you are not happy yet with the result, you can adjust your textures and after that you have to copy your modified versions into avatar’s folder in Assets (you must leave the editor open), Animaze Editor prompts you to reimport. | ![](https://lh5.googleusercontent.com/IdqTT6r-OWX8r0ecT_MhPHw7eOiZgzvawxwlSZQeQTY4QmkgMKdSXQz4RvHk5Of0ozsf2OapM-yCtUfOQDyLoEGwRlOHhP501Evo_NV6lXW9EDTQWooNsrr2hWCSVo-qEu_rukAT){: width="500" height="172"} |

### Seams Problem

If you have visible seams on your avatar, you can use the “clone stamp” tool in Mudbox software in the seams area to make a bleed border.

|  |  |
| --- | --- |
| ![](https://lh6.googleusercontent.com/gsWMcT2IoOgYh_MTEE64TMtuvQIJ-Qbbg85RcKvpILQEybbKwpCv6B8rfyK8SZkD-bK3UhObbwo15DoYcEzs02viIyM7p0eptuZLwLlCabbD_M16FpcGblvvlW2V4T3l3B1YevFe){: width="500" height="397"} | ![](https://lh4.googleusercontent.com/_iZBnNa7NPyKX7q0n7Ju0vWcIc5gWzrlxwBfAwBrOz_XZBNGeQuXqP9qAw_GQjyTBCcb5jr_8XSHvm-V05EWar2gIsClgcRK8uRl4HJFBHykM2KAKbvgaPrXcB6zyWxtOrsAdi83){: width="500" height="417"} |

There are many solutions to this issue in other programs as well, so use the one you find best to solve the problem. For example, we are using the Flaming Pear plugin in PS. 

  

When you are happy with the result you can start the next step. 

### Customizations (colors & animations)

1. Color customizations - Animaze supports 2 types of color customizations:

- Color Customization allows you an exact control over the color, but there is no variation.
- Hue Shift Customization will let you keep more details and variation.

#### 

#### 1.1. Color Customizations are made from 2 textures: Customization mask and Saturated Diffuse texture

|  |  |
| --- | --- |
| For example, you want to customise this Crown Prop | ![](https://lh3.googleusercontent.com/U6707ngC8AaGru63rZR01QseKGXCRTVqyY-QciC1rpgdgnH5J4kIyxMPNGMV8LlKC7Vu24aHWnnA1uy6QtHAoMTYRDXGQkY_TaOaxeFMQg8STaKpIsZ2zzsxXzO0vWyduNpxJGiV){: width="155" height="155"} |

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
