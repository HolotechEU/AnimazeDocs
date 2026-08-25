---
layout: page
title: "How do I add materials on an imported custom 3D Avatar?"
source_url: https://www.animaze.us/faq/animaze-editor/addto3d
---

# How do I add materials on an imported custom 3D Avatar?

Animaze Editor importer will automatically create a material per mesh. By default, newly created materials feature diffuse, normal map, specular and lighting components (more on Animaze material components in the .avatar technical doc), and the import process tries to properly bind the textures to these components if the texture sources are in the Textures/ folder beside the geometry .fbx file. If the textures aren't binded correctly, the avatar will be rendered with a white shading and you can manually bind the missing textures.

The steps for customizing (binding textures, change component factors, etc.) a mesh material are as follows:

- In the **Hierarchy Panel** select the mesh to which you want to add texture to

![]({{ '/assets/images/import_3d_3-2e029cdf.png' | relative_url }}){: width="790" height="420"}

- In the **Editor Panel**, begin adding the necessary textures by clicking on the square next to the texture name

![]({{ '/assets/images/import_3d_4-0fb30ffa.png' | relative_url }}){: width="797" height="335"}

- This will open the **Select Texture** box, which retrieves all the textures of your avatar in **.ktx** format

![]({{ '/assets/images/import_3d_5-213a520c.png' | relative_url }}){: width="479" height="573"}

- You can filter the textures by typing a tag word or the name of the texture

- Continue adding the needed textures and components, change the values where needed/applicable

- **Save Material** after you finish texturing the mesh

![]({{ '/assets/images/import_3d_6-1000bb07.png' | relative_url }}){: width="471" height="306"}

- Continue this process for every mesh of your model until it's complete

![]({{ '/assets/images/import_3d_7-b349c597.png' | relative_url }}){: width="790" height="431"}

- Save your model from the **Hierarchy Panel** by right-clicking on it and selecting **Save Item**

**![]({{ '/assets/images/import_3d_8-6469c98b.png' | relative_url }}){: width="301" height="334"}**
