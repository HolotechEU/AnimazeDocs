---
layout: page
title: "Animaze Physics"
source_url: https://www.animaze.us/manual/technicalreference/animazephysic
---

# Animaze Physics

The physics engine in Animaze was introduced to enable Content Creators to add physical simulation to their own characters. As such, the physics simulation will be available to add to avatars via the Animaze Editor, by using Colliders and Constraints.

The Animaze physics engine is based on the open-source Bullet Physics SDK v2.83 and makes use of rigid bodies, colliders, and constraints.

**Rigid bodies and Colliders**

**Rigid Body **–**** Simulates single 6-degree of freedom moving objects. It has a world transform, friction, restitution, linear and angular velocity or damping. Each rigid body is attached to a skinned bone.

A common rigid body is dynamic because it has a specified mass and is thus affected by gravity (the bone follows the rigid body), but it can also have a mass of 0.0, which makes it kinematic, meaning that it’s not affected by gravity (the rigid body follows the bone).

**Collider –** describes the collision shape of a Rigid Body, such as box, sphere, convex hull, or triangle mesh. In our use case all rigid bodies will have a collision shape attached to them, even if we want the Rigid Body to have no collisions with any other rigid body. Since we have a 1 to 1 relationship between rigid bodies and colliders, we can use the name interchangeably.

**Constraints**

Constraints are Bullet’s way of tying two Rigid Bodies together to create various kinds of behavior between the two constraint bodies (ex. Springs, Hinges, Cone twist etc.). They are very powerful in terms of possibilities with lots of parameters and can be quite difficult to grasp.

Currently, we support two of the most powerful type of constraints implemented, the **Cone Twist Constraint** as well as the **6 Degrees of Freedom Constraint**, which is the most versatile one.

Please read the [**Animaze Editor User Manual**]({{ '/manual/editorusermanual/animazephysics/' | relative_url }} "https://www.animaze.us/manual/editorusermanual/animazephysics")to further see examples, how the Animaze physics engine works and how it can be applied on your character.

### .avatar format Technical Reference

- [What is Animaze and what is the “.avatar” format?]({{ '/manual/technicalreference/avatarformat/' | relative_url }})
- [Avatar complexity tiers]({{ '/manual/technicalreference/complexitytiers/' | relative_url }})
- [Geometry and Rules]({{ '/manual/technicalreference/geometryandrules/' | relative_url }})
- [Textures and Materials]({{ '/manual/technicalreference/texturesandmaterials/' | relative_url }})
- [UV Mapping]({{ '/manual/technicalreference/uvmapping/' | relative_url }})
- [Particle System]({{ '/manual/technicalreference/particlesystem/' | relative_url }})
- [Sound Effects]({{ '/manual/technicalreference/soundeffects/' | relative_url }})
- [Camera]({{ '/manual/technicalreference/camera/' | relative_url }})
- [Live2D Avatars]({{ '/manual/technicalreference/live2davatars/' | relative_url }})
- [Animation]({{ '/manual/technicalreference/animation/' | relative_url }})
- [Visemes Animations & Expression Poses]({{ '/manual/technicalreference/animationposes/' | relative_url }})
- [Special Actions]({{ '/manual/technicalreference/specialaction/' | relative_url }})
- [Deformation]({{ '/manual/technicalreference/deformation/' | relative_url }})
- [Modify Proportions]({{ '/manual/technicalreference/modifyproportions/' | relative_url }})
- [Skeleton]({{ '/manual/technicalreference/skeleton/' | relative_url }})
- [Full Body Motion Tracking]({{ '/manual/technicalreference/fullbodytracking/' | relative_url }})
- [Animaze Physics]({{ '/manual/technicalreference/animazephysic/' | relative_url }})
- [Props]({{ '/manual/technicalreference/props/' | relative_url }})
- [Backgrounds]({{ '/manual/technicalreference/backgrounds/' | relative_url }})
