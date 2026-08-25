---
layout: page
title: "Animaze Desktop: How can I get better pursed lips on Live2D?"
source_url: https://www.animaze.us/faq/tech/pursedlips
---

# Animaze Desktop: How can I get better pursed lips on Live2D?

Starting with the avalability of audio based lip-motion for Live2D in Animaze, on Feb 2021, we have added an optional feature for Live2D models. Use it if you want a more natural PursedLips be displayed on your Live2D models.

The new PursedLips specific functionality for Live2D models will occur as follows:

- If the parameter "ParamMouthSize" is not present in the model, the model will behave just as before. Existing users with old models will not have any problems.
- If the parameter "ParamMouthSize" is present in the model, the app will behave in a new way, using the lower half of the input interval of "ParamMouthSize" to show "PursedLips". We are not using the upper half of the interval, because that is not "PursedLips".

"ParamMouthSize" is not a standard parameter, but already exists in some of the official Live2D samples (it is not a new Animaze-specific parameter). We are just using half of its range to show "PursedLips"
