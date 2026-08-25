---
layout: page
title: "Live 2D Model Creation Process for Complex Mouth Geometries"
source_url: https://www.animaze.us/manual/gettingstarted2d/complexparam
---

# Live 2D Model Creation Process for Complex Mouth Geometries

![複雑な口角形状の Live2Dモデル作成方法]({{ '/assets/images/Screenshot_2021-11-12_at_16.12.27-78cf5b58.png' | relative_url }} "複雑な口角形状の Live2Dモデル作成方法"){: width="807" height="369"}

# 

# List of Parameters to Be Prepared

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Parameter Name | Parameter ID | Minimum Value | Default | Maximum Value |
| Mouth open/closed | ParamMouthOpenY | 0.0 | 0.0 | 1.0 |
| Mouth transformation | ParamMouthForm | -1.0 | 0.0 | 1.0 |
| Upper lip | ParamLipUpper | -1.0 | 0.0 | 1.0 |
| Lower lip | ParamLipUnder | -1.0 | 0.0 | 1.0 |
| Tongue up/down | ParamTongue | 0.0 | 0.0 | 1.0 |
| Mouth width | ParamMouthSize | -1.0 | 0.0 | 1.0 |
| Mouth left/right | ParamMouthX | -1.0 | 0.0 | 1.0 |
| Cheek puffiness | ParamPuffCheeks | 0.0 | 0.0 | 1.0 |

## Mouth Open/Closed (1)

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Parameter Name | Parameter ID | Minimum Value | Default | Maximum Value |
| Mouth open/closed | ParamMouthOpenY | 0.0 | 0.0 | 1.0 |

  

1. In the same manner as the standard opening and closing of the mouth, add art mesh keys for the upper and lower lips, mouth interior, tongue, and teeth. Set the mouth to open at \[\+1.0\] and close at \[0.0\].

2. When the mouth is opened wide, the chin should move simultaneously for a more natural look. Create a warp deformer under the facial curvature parameter for raising/lowering the chin and add art mesh keys.

# 

# Mouth Open/Closed (2)

# 

3. To make the chin go down slightly at \[\+1.0\], adjust the geometry to match the mouth movement.

# 

4. Adjust the art mesh geometry, etc., to ensure the outlines of the lips do not get clipped and the interior mouth parts do not extrude, etc., when the mouth is opening or closing.

# 

5. Combining three or more parameters makes adjustment difficult. Avoid doing so as much as possible. For simple movements, such as the vertical movements of the upper teeth, a deformer can be used instead.

# 

![パラメータ３つ以上の掛け合わせは調整が大変になるのでなるべく 避けましょう。「上歯」の上下動のようなシンプルな動きはデフォーマ も使っても]({{ '/assets/images/Screenshot_2021-11-12_at_16.18.56-b23e6912.png' | relative_url }} "パラメータ３つ以上の掛け合わせは調整が大変になるのでなるべく 避けましょう。「上歯」の上下動のようなシンプルな動きはデフォーマ も使っても"){: width="324" height="297"}

# 

# Mouth Transformation

# 

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Parameter Name | Parameter ID | Minimum Value | Default | Maximum Value |
| Mouth transformation | ParamMouthForm | -1.0 | 0.0 | 1.0 |

1. In the same manner as the standard transformation of the mouth geometry, add art mesh keys for the upper and lower lips, and mouth interior. With the mouth open/closed parameter (ParamMouthOpenY) set at \[0.0\] (mouth closed), set the mouth shape to be smiling when the mouth transformation parameter (ParamMouthForm) is at \[\+1.0\], and frowning angrily when it is at \[-1.0\].

# 

2. Next, with the mouth open/closed parameter (ParamMouthOpenY) set at \[1.0\] (mouth open fully), set the mouth shapes to match the mouth transformation parameter (ParamMouthForm) for \[\+1.0\] and \[-1.0\].

# 

3. When the various mouth geometries have been adjusted, combine the opening/closing of the mouth and mouth transformation geometry functions, randomly adjust the parameters to confirm the motions and positioning are accurate, and adjust shapes as necessar

![それぞれの形状の調整ができたら、「口の開閉」と「口の変形」を合 体させ、パラメータをランダムに動かして遷移を確認し、形状を整え ます。]({{ '/assets/images/Screenshot_2021-11-12_at_16.21.10-e2dde40a.png' | relative_url }} "それぞれの形状の調整ができたら、「口の開閉」と「口の変形」を合 体させ、パラメータをランダムに動かして遷移を確認し、形状を整え ます。"){: width="356" height="489"}

# 

# Upper/Lower Lip (1)

# 

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Parameter Name | Parameter ID | Minimum Value | Default | Maximum Value |
| Upper lip | ParamLipUpper | -1.0 | 0.0 | 1.0 |
| Lower lip | ParamLipUnder | -1.0 | 0.0 | 1.0 |

# 

The lip parameters are used for adjusting how the teeth are seen.

# 

1. Because the art meshing of the lips is already controlled using the mouth open/closed parameter (ParamMouthOpenY) and the mouth transformation parameter (ParamMouthForm), make a separate warp deformer for the upper and lower lips respectively, and add their keys to the upper lip and lower lip parameters (ParamLipUpper and ParamLipUnder).

# 

# Upper/Lower Lip (2)

# 

2. Create motions for the two lip parameters. At \[\+1.0\], the lips should open toward the outside, and, at \[-1.0\], they should close toward the inside.

# 

3. While adjusting the mouth open/closed parameter (ParamMouthOpenY) and the mouth transformation parameter (ParamMouthForm), see how the lips geometry changes. If the geometry of the lips is excessively transformed due to parameter combinations, add art mesh keys for the lips and adjust as necessary.

![上/下唇②]({{ '/assets/images/Screenshot_2021-11-12_at_16.24.47-3d0b336e.png' | relative_url }} "上/下唇②"){: width="324" height="509"}

# 

# Tongue Up/Down

# 

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Parameter Name | Parameter ID | Minimum Value | Default | Maximum Value |
| Tongue up/down | ParamTongue | 0.0 | 0.0 | 1.0 |

# 

1. Add art mesh keys for the tongue. With the mouth open/closed parameter (ParamMouthOpenY) set at \[\+1.0\] and the tongue up/down parameter (ParamTongue) also at \[\+1.0\], make the tongue stretch upward.

# 

2. Next, with the tongue up/down parameter (ParamTongue) set at \[\+1.0\] and the mouth open/closed parameter (ParamMouthOpenY) at \[0.0\], adjust the geometry of the tongue. While the tongue won’t be visible, this operation is necessary to make its transitional movement look natural.

# ![舌の上下]({{ '/assets/images/Screenshot_2021-11-12_at_16.27.02-a16739e6.png' | relative_url }} "舌の上下"){: width="341" height="523"}

# 

# Mouth Width

# 

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Parameter Name | Parameter ID | Minimum Value | Default | Maximum Value |
| Mouth width | ParamMouthSize | -1.0 | 0.0 | 1.0 |

1. For the parameters of all mouth parts excluding the teeth, make width-adjustment warp deformers for puckering the mouth and add their keys.

# 

2. Create horizontal transformations so that the mouth is widened overall toward the outside with the mouth width parameter (ParamMouthSize) set at \[\+1.0\], and puckered overall to the inside at \[-1.0\].

# 

# Mouth Left/Right (1)

# 

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Parameter Name | Parameter ID | Minimum Value | Default | Maximum Value |
| Mouth left/right | ParamMouthX | -1.0 | 0.0 | 1.0 |

# 

This parameter is for adjusting the horizontal positioning of the mouth so that a corner of the mouth is upturned in a sneer. This adjustment allows for more cartoonish facial expressions.

# 

1. For the parameters that control mouth puckering, create mouth left/right position warp deformers and add their keys. Also, because some movement of the cheeks is needed, add cheek puffiness warp deformers to the chin up/down parameters and add their keys.

Mouth Left/Right (2)

2. Make the mouth geometry so that it moves to the left at \[\+1.0\] and to the right at \[-1.0\] and with the appropriate corner of the mouth slightly upturned. Adjust the cheek geometry so that the appropriate cheek rises slightly together with the mouth’s horizontal movement.

![口の左右②]({{ '/assets/images/Screenshot_2021-11-12_at_16.37.17-23866da9.png' | relative_url }} "口の左右②"){: width="391" height="590"}

# 

# Cheek Puffiness

# 

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Parameter Name | Parameter ID | Minimum Value | Default | Maximum Value |
| Cheek puffiness | ParamPuffCheeks | 0.0 | 0.0 | 1.0 |

# 

This parameter is used to make the cheeks puff in order to create an angry expression, etc.

# 

1. Add keys for the cheek puffiness adjustment deformer to the cheek puffiness parameter (ParamPuffCheeks).

# 

2. Make the cheek geometry so that the cheeks puff when the parameter is set at \[\+1.0\].

3. As the final step, the parameter combinations need to be adjusted. Using auto-generation of the 4-corner geometry, etc., adjust the geometry of features with the mouth left/right parameter (ParamMouthX) set at \[\+1.0\] and \[-1.0\] when the cheek puffiness parameter (ParamPuffCheeks) is set at \[\+1.0\].

# ![頬のふくらみ]({{ '/assets/images/Screenshot_2021-11-12_at_16.41.04-cb15d250.png' | relative_url }} "頬のふくらみ"){: width="397" height="542"}

### Importing Live2D Format Models

- [Steps in creating your own 2D avatar]({{ '/manual/gettingstarted2d/stepsincreatingyourown2davatar/' | relative_url }})
- [What is Animaze and what is the “.avatar” format?]({{ '/manual/gettingstarted2d/animazeintro/' | relative_url }})
- [Live2D Model Requirements & Animation Standards]({{ '/manual/gettingstarted2d/paramlist/' | relative_url }})
- [Motion Output Parameter List]({{ '/manual/gettingstarted2d/motionoutput/' | relative_url }})
- [Live 2D Model Creation Process for Complex Mouth Geometries]({{ '/manual/gettingstarted2d/complexparam/' | relative_url }})
- [Getting started - Import Live2D model in Animaze Editor]({{ '/manual/gettingstarted2d/gettingstarted/' | relative_url }})
- [Change the avatar details (icon, description & name)]({{ '/manual/gettingstarted2d/changeavatardetails/' | relative_url }})
- [Change the rendering options]({{ '/manual/gettingstarted2d/changerendering/' | relative_url }})
- [Remap avatar animation inputs]({{ '/manual/gettingstarted2d/remapanimations/' | relative_url }})
- [Live2D Retargeting Overrides]({{ '/manual/gettingstarted2d/live2dretargetingoverrides/' | relative_url }})
- [Configure avatar Special Actions & Special Poses]({{ '/manual/gettingstarted2d/specialactions/' | relative_url }})
- [Frame the avatar]({{ '/manual/gettingstarted2d/frameavatar/' | relative_url }})
- [Quickly modify a texture on your avatar]({{ '/manual/gettingstarted2d/modifytexture/' | relative_url }})
- [Expressions debugging - Avatar Puppeteering]({{ '/manual/gettingstarted2d/expressiondebugging/' | relative_url }})
- [Create an \\*.avatar bundle]({{ '/manual/gettingstarted2d/createavatarbundle/' | relative_url }})
- [Import an \\*.avatar bundle in Animaze PC app]({{ '/manual/gettingstarted2d/importbundle/' | relative_url }})
- [Import Your Live2D Models in Animaze PC]({{ '/manual/gettingstarted2d/importlive2d/' | relative_url }})
- [Send your avatar to Animaze Avatar iOS app]({{ '/manual/gettingstarted2d/sendavatar/' | relative_url }})
- [Leap Motion Hand Sensors with Live2D avatars]({{ '/manual/gettingstarted2d/leaplive2d/' | relative_url }})
- [Dive into Documentation]({{ '/manual/gettingstarted2d/diveinto/' | relative_url }})
- [Create your own 2D avatar]({{ '/manual/gettingstarted2d/createyourown/' | relative_url }})
- [Troubleshoot & Support]({{ '/manual/gettingstarted2d/troubleshootandsupport2deditor/' | relative_url }})
