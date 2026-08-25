---
layout: page
title: "ARKit Facial Animations"
source_url: https://www.animaze.us/manual/animationappendix/arkitfacialanimations
---

# ARKit Facial Animations

The 3D Animaze avatars support the **ARKit animation standard.** This is an extra set of animation blendshapes that must be built and named according to this **[Documentation](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation),** in addition to the already existing [**Animaze animation**]({{ '/manual/animationappendix/' | relative_url }}), when you are [**creating** **your** **avatar**]({{ '/manual/3davatar/' | relative_url }}).

For the head and body, the system will use the Animaze animations.

For the eyes animations to work in Animaze apps, you have to consider the following:

- animations must be skeletal
- the naming of animations must have capital letters, as such, instead of [*eyeLookOutLeft*,](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation) use **EyeLookOutLeft**.

To use this animation set you will need the following:

- an iPhone device
- the mobile Animaze app
- the desktop Animaze app

The connection of all the above is made through a QR code generated within the Animaze desktop app, scanned further by your iPhone device.

Find out more from this helper **[tutorial]({{ '/manual/appmanual/iphonetrack/' | relative_url }}).** For learning purposes, we also provide the sources of [**avatar Yvonne**](https://s3.amazonaws.com/animaze.us/AvatarYvonneARKitBS.zip), which you can import in the Editor, play around with and analyse in depth its contents.

### FBX Format Model - Animations & Blendshapes Appendix

- [About]({{ '/manual/animationappendix/appendixabout/' | relative_url }})
- [Skeletal Animations]({{ '/manual/animationappendix/skeletalanimations/' | relative_url }})
- [Blendshape animations]({{ '/manual/animationappendix/blendshapeanimations/' | relative_url }})
- [Visemes]({{ '/manual/animationappendix/visemes/' | relative_url }})
- [Bones]({{ '/manual/animationappendix/animazebones/' | relative_url }})
- [ARKit Facial Animations]({{ '/manual/animationappendix/arkitfacialanimations/' | relative_url }})
