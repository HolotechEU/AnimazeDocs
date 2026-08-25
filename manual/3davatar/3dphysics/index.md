---
layout: page
title: "Physics system"
source_url: https://www.animaze.us/manual/3davatar/3dphysics
---

# Physics system

The physics simulation is available to be added to avatars via the Animaze Editor by using Colliders and Constraints. The simulation is done with the help of the open source physics simulation Bullet Physics SDK v2.83. What Bullet provides is a simulation world in which we can create rigid bodies and constrain them if needed, in order to achieve whatever dynamic effect we want for our character.

In the example below we are adding physics to a hat prop. Here is the flow to do that:

#### Colliders setup

1. Open AnimazeEditor and load the item
2. Unfold skeletal hierarchy

![skeletal hierarchy ](https://lh6.googleusercontent.com/avrAu7ta3ATz-15UGneNKxXWqV8IvrZaShREscveKB_HX-R-wClQDEJrM7iLgkunS8hWHh4UDUXdsAOKoCT8fkFZZVKlZRGVYQfQ6L2IOHXu1iq7kCq68G4rGvgRRRNJQ9HQCL0I "Avatar skeletal hierarchy "){: width="296" height="254"}

3. In order to start adding colliders, click on the pause button

![](https://lh6.googleusercontent.com/gtPA_av1vAem1DWjZ7OgodnQVZxjW28bs0PYpcR-AgCqGQQMJ2itqDFIrzIpPM30BOoxIgPxLCPc7dXaHFWeoLN0lvgyzd75MYkJn7qq-9RubRLmp7oGhnPO7M0RTMeIDNEnLB5h){: width="478" height="125"}

4. Right click on the parent node and choose Add new collider/Attach new sphere collider.

![](https://lh4.googleusercontent.com/-S6v3wTrHD7gMbNO0H2ZRxDMR9cYA0ft7MJLuGYkFPYQi-i664shN_9IN7TY-Dm58S-kYpDanzoR_0FqfDfH-Z-V_WjMIsjbbwmulNpaEFcnDG0RWafe8CWOJOAMhcQy9pwDlKtb){: width="600" height="310"}

5. This collider is going to act as a parent for the other colliders, so its mass needs to be set on 0 (default mass is 1)

![](https://lh6.googleusercontent.com/zHG1YQkcC0DDVeYYRSMac1jhI9R93qmBOJ2um-Wf2irwPzizD40NDPxvmLX0rD2b2xwARCF214k8COxcIUilGhtjSscITCXobx5GIolStZZyzArwoZlIk5n8o5amCtRgsL-VcT0S){: width="688" height="142"}

6. Uncheck the linear and angular motion check boxes, as this collider will not need the simulation to be applied on

![](https://lh3.googleusercontent.com/gS4jMnaU4PRgAQXxjBvvgSjzK4YL2B0rsNunbole5NOb5O17JX3kLkkgWzICB40DwRPMWnZ1p62Mh3x2H9pbaZ3W7O_JFG3--3TZaOwzoNi7q2px6KYqeAz-n1fxhXc-uHuICvdF){: width="686" height="115"}

7. Continue the process by right clicking on the joints which need simulation and choose Add new collider/Attach new sphere collider.

8. In most of the cases, the colliders work fine with the default mass value. Depending on how you want the joints to be simulated, check the settings for Apply Linear and Angular Motion. Also tweak the Radius value, but this depends on the size of your object.

![](https://lh5.googleusercontent.com/WQwkd58LuppFD1y3uJEydCdF7OnhC0mNFPux0i3pJdgRf3BoUyhc3njFhDpUJILZZ6mTQVf9KL_NTW5BV0j-ByFzzBnnIAtIfj4oB0OiXIVkq6NHAftxPCrr5oeXwqZwJX48rpbH){: width="676" height="197"}

#### Tips

- For a efficient workflow, we strongly to rename colliders appropriately

![](https://lh3.googleusercontent.com/hAAMpbcTdz2OVUpJiuCswjJJyOxLGx9nOPsR5HmhKEjonRk3eHzmuSqUlOFrGDZ2vc_I85GQ4DUk-DL50ykxhJ2QSUYtXvbAgQRcZfQHX0Rs3H4oCzBzRNsk1voBzdPdL1f8rJUV){: width="683" height="77"}

- Once you deselect a collider, you will not be able to see it in the viewport. Press SHIFT \+ P to have the colliders displayed at all times. Draw Debug Info would also need to be selected

![](https://lh6.googleusercontent.com/jJCUjLC-4ee9tCrtnD0w_HJUy4N3d1NLBkIq6YPIYR0rFqfrZtl7KMPSkrkczYRV3d4MDcBweKrWq8P3dgZ8uILmynB2Di8vxQbiRuOjG96q26VnHKwzOgIqsfsHNpGN4rS_TYDx){: width="326" height="328"}

- It’s way easier to work with a Gray diffuse/wireframed model and a light colored background

![](https://lh3.googleusercontent.com/gTdmI54eNos501OYVM_Tmb83IcM_Z2j6AtvfveNMStEBt3pgr3m8qGPk7b2eaqVpRT_xMoKNQsUYfptnJXBJ11YwWxV0bZjy19dLswnWUGtuAWJ69X9lmVwqdEfDgrH943gC6lAV){: width="730" height="248"}

![](https://lh6.googleusercontent.com/n0rfz3WKWIvkFVsHZ9VmqAhYoX-94o3ROFI54SMx4Gz0ACLnA0tfaEOEvBuApg4t8uKz_sBx8Vz-uy0b7V5Ji0K6u_Jq_8RLBu1s2TD7ijq9a4bLQSrO6MB84FaBZ18wMt_fhosl){: width="668" height="264"}

- You can find all the colliders in the Attachments section of the object’s hierarchy

![](https://lh5.googleusercontent.com/i2bkxK8atMOFmF9l5lA3PjUDNPgD-QkTastfrCUAWkRRpft15NHJ29iT7vb4FGT-e-DGeDmyhY5tH3fokGT4P8X2krzjwBfqL8_8hx9l7E7Uz2lDKlRwMnr7Yx8EliQmKSgipOrO){: width="194" height="167"}

#### Constraints setup

1. To proceed with adding a constraint, select the collider which will act as a parent and scroll to the bottom of its attributes window, where the constraints section is. Leave Constraint type unchanged (Six DOF).

To select the other constraint, begin by clicking on the Select Collider button.

![](https://lh4.googleusercontent.com/tKr0T0Uh6UHETlWb6LpgSSqCyp8xI26gjaW2ORNlkl7ILGzYDqIoYZxgvzsAPeMnUnnRM02tO1jpamwBSelYrWrOtZRz-QG9NbTfInz4j592raS6dslkHvpv3w6QgKIuscnwUkyx){: width="477" height="491"}

2. In the resulting pop-up window chose the collider you want to constrain and click Select button

![](https://lh4.googleusercontent.com/g6MK7ylxXg8FXpFbHkThwGr0LufKnlXUXS6vvsRdrdun96hMooPqCm8_p6F_gQBmSdWEwCaKlfxzvmAJk-8ke_TAHnLbFxX3y9ztqyRaygK-JVVLzU6Q7G7FECvXfpFJhPn-lZhE){: width="467" height="391"}

3. Back to the parent collider attribute window you will notice the selection is now made. Click on Add constraint to complete the process

![](https://lh3.googleusercontent.com/ws6-FNhWedhq0UzN2vrfEObIPNJjSPbpXqEj_T7KyHtgEBJB-PIq8wOKQ3h4QOx1wbAVQaj5ayJgOIkKPOa52G6qUte1bGpGshVnE71VeHq8MOp-xbwicbK3dj_Z9983f-8Cfkq0){: width="455" height="471"}

4. Once the constraint created, you will notice in the viewport a thin blue between the two colliders

![](https://lh6.googleusercontent.com/6aT9D435Nkj_oRr0_1lUBClgSQxIHv0d7EnTVNL4qHqu8TsUPsyoXMx66if3FCOKg4wgbMEZcxQQEG0o4J0yIwOsTtZj_4e45LOZgmcRGZEIftGj3gQH3TYbYC8ChUh0z_sGDY-6){: width="650" height="371"}

5. This will change to yellow when you hover over the constraint attributes window

![](https://lh4.googleusercontent.com/_FIyLMyJaXI7XHPO4sbzpl0hiRyZHEM1FAVd8t5juec0p78pEwx1WbRSWsBx-ufFSZ8VQWCsCQ0ojh26Ls1bkA5CnfAp2L-4QX24BbJFgfxD5L5x5TDqNuCEuDbibBzoseLoe7Dk){: width="500" height="295"}

6. For the sake of simplicity, we are going to uncheck Spring Enabled Linear Axis (discussed at point 7 in Colliders setup section). For Spring Stiffness and Damping Angular Axis, a value of 10 respectively 0.1 is a good starting point. You can tweak this later on, depending on your needs.

![](https://lh5.googleusercontent.com/fhEEhXBPQjmP1kXqKOazyKPKA_0WtmaaHN8T8YPqjkutEHmmL8f3FgrpFqDp9bCpWwaZFsdx8LP5gvkADsRqIrUOvFZHyl5PAyJKUTpKEsJAGI40XTRml8Cck5jGPfcf3b87mUNS){: width="453" height="150"}

7. For the angular limit, start with a small value, for example 10 degrees. This means a lower limit of -5 and an upper limit of 5. Notice how by doing so the limits update in the viewport

![](https://lh5.googleusercontent.com/MIyYKf3fpujgOCkJaWyVDwF8itgzRALJW6ux4yAVaT6GRB7J8NBw6Mnm1PeU9MbtfhYslAFmqOgjcBPkjuFU9whR5CEkA61_qBgjxdXKvBULOHh0yeBRgseN1LyVi2RfxWA61cOB){: width="503" height="278"}

![](https://lh4.googleusercontent.com/vLoRW23D_OVKMAVw3BKb5Kta_d9j2cXcT0mdTBDOoyiW684LraV39bQevRA13w9BDlD9XDQi3P23WmWpKkEslIwgpnuIBOyz_2KzkSh0RoiKc-vZqlNGIhM1uw0dd397HZD-hLpE){: width="650" height="234"}

8. Now we need to move the pivot point of the parent to the center of the child collider

![](https://lh6.googleusercontent.com/7nmwVmk1k4PmAgcgL9iILPCJKqUBPiR96M1VQmFbqVW-NqvBJEsM0fYYxDzaCpub12DZCVj_AThexXKlEmA9EdR-gZI4Teq-ZvlWYxrX9oV9-wCCoJrmt73BhD0vqyPNfY3zLjhy){: width="413" height="350"}

To do so, in the constraint attribute choose the child collider (in the parent frame position and rotation section) and click Apply

![](https://lh4.googleusercontent.com/TmqMgDlm4F5muY7wetiSpq3ltZfnSkr_udf9wql4qVG8mQ46cPqm6ApaOLnQAC3DDISNMoW9zC5C3RydhAwin-1XohfpRb2gCnW6o7WjM5pMTAosTeHX_HYqMUD7REf1_aCgKTuR){: width="471" height="243"}

9. Notice the new values for the x, y and z attributes

![](https://lh3.googleusercontent.com/trQBfTueJuxlVdjoP6DYdlUe3kqDqtcxorY862QpKdIqO7ri8OZd9jL_j4q4UE09bif9yZi_ceUhsvwMVkDFkBECkHlnXF4yPDQ7jhnPG2gHTdpFbLEQPLRpoaxJdK1-FvY_v9j_){: width="526" height="164"}

10. Now move the constraint on top of the child collider (Y axis):

10.1.. Select the child collider (L\\_Mid in this example)

![](https://lh4.googleusercontent.com/evZ-F0VMS8KOv59ky4A0G6t_JED_CkCbI3ccVXYTUvPsRSaNJU5x-3XkCMiitJOOQwamp2mC93w7nSGuTFRRfpPXg4uJQMhTyJebwEA3k92jcTjUqsxJWbk3h-8DWkPUxaIFq5ri){: width="258" height="271"}

10.2. Tweak the Y coordinate value in the Frame Position attribute until you get the desired result.

![](https://lh5.googleusercontent.com/Ha8CPqmb1u1W83ObOqx3JF6xI7TDKbMj_vEZUByxhMxeiYwQIUROwl3F8555E11doFOUhk_SNk89mCX_43KMOrn8UHGfBWKCgN7VNQ6DqDDrJmP2U1gDPrBX3psf088a9AHyph1D){: width="700" height="245"}

11. Last step for this example is to orient the constraint, to make it perpendicular to the grid:

![](https://lh5.googleusercontent.com/hAeIBh9kvjynqCB2-N_KYjfC9VuvDErTAqYogKfZqt7e8nZa8hKi8M_kO9i4vwsZL85c33BlcswC_ey94PZY50m_HZDfP0iAjrw_ri-DPHD3bp3_Cxqsd75C4ZiJhvkrHnMKv5e4){: width="850" height="241"}

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
