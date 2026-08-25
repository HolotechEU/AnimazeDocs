---
layout: page
title: "Advanced Features"
source_url: https://www.animaze.us/manual/chatpal-guide/chatpal-advanced-configs
---

# Advanced Features

Advanced features are meant for tinkerers and developers, so that means there’s a bit of a technical background requirement to access them. Advanced features are a way of further configure and customize the Animaze ChatPal experience, including prompt system messages, animation smoothing options, emotions/gestures mapping and even avatar model requirements.

## Skip to

- [Advanced Command Prompts](#advancedprompts)
- [Animaze API](#api)
- [AI Advanced Configuration](#advanced-config)
- [AI Avatar Advanced Configuration](#avatar-config)
- [Avatar Assets Considerations](#assets-considerations)

## 

---

## Advanced Command Prompts

- -echo \<text\> - echo function that will circumvent the conversational AI (the LLM) and will only use the text-to-speech function with all the magic Animaze adds to the rendered avatar. Basically, the avatar will speak out the \<text\> part.
- -chatConfig \<prompt\> - will send the \<prompt\> to OpenAI API as a system message for the conversational AI. Useful, to rewire the conversation into another context.

## 

---

## Animaze API

The command “ChatbotSendMessage“ with the parameter “message“ is available through the Animaze API. More info in the **[Animaze API Docs](https://holotechconfluence.atlassian.net/wiki/spaces/HD/pages/157941761 "/wiki/spaces/HD/pages/157941761")**.

## 

---

## AI Advanced Configuration

Animaze ChatPal has a general configuration file that resides in the Animaze installation folder: **\<AnimazeInstallDir\>/Data/OpenAITracker.json**.

You can load your own config file in Animaze from **Settings \> Animaze ChatPal \> Load Configuration File**.

The configuration file allows changing a few options:

- "SystemMessage" - string sent as a system message to the conversational AI. Allows you to add context to the current interaction.
- "StringToEmotion" - string to emotions map. Animaze ChatPal maps certain strings from the conversational AI response to an internal avatar emotional state. This works with custom tags (e.g. \[string\\_trigger\]) that are detected and even removed from the response, then sent to Animaze’s emotions and animation systems. You can add or remove mappings.  
    
  "StringToEmotion" : {  
   "\[trigger\\_string\]" : {  
   "emotion" : "AFFECTION",  
   "removeStringOnDetect" : true  
   }  
  }  
    
  The “emotion“ values are listed in the OpenAITracker.json under Info \> EmotionPossibleValues array of strings.
- “StringToGesture“ - string to gestures map. Animaze ChatPal maps certain strings from the conversational AI response to triggerable animations (like special actions), such as hello, nodding positively or negatively. This works with custom tags (e.g. \[string\\_trigger\]) that are detected and even removed from the response, then sent to Animaze’s animation system. You can add or remove mappings.  
    
  "StringToGesture" : {  
   "\[trigger\\_string\]" : {  
   "gesture" : "GREETING",  
   "removeStringOnDetect" : false  
   }  
  }  
    
  The “gesture“ values are listed in the OpenAITracker.json under Info \> GesturePossibleValues array of strings.
- “AutoPromptList” - is a list of strings used as random cyclic prompts send to the conversational AI. This option is used to avoid the long silent pauses of a twitch stream. A new random prompt is selected every “AutoPromptCooldown“ seconds and there is a kill switch for it through the “AutoPromptEnabled“ property. The cooldown starts after a response from the conversational AI has been received, so, in a lively conversation, the cyclic prompts do not start randomly in the heat of the interaction. We recommend tuning the “AutoPromptCooldown“ to a value that doesn’t make the autoprompts exceed the conversational AI requests per minute limit.

## 

---

## AI Avatar Advanced Configuration

Animaze ChatPal allows configuring some animation response values for each avatar, in the context of the AI Brain or AI Sidekick. All avatars are configured by default by the AvatarDefault.aicfg file that resides in **\<AnimazeInstallDir\>/Data/** folder.

You can have a specific config for your own avatar by creating a file called AvatarName.aicfg that you place in **\<AnimazeInstallDir\>/Data/** folder. The config file will be loaded or reloaded every time you load/reload the avatar.

The Avatar AI Config has the current following options:

- "vowelsSmoothing" - float value representing smoothing of the vowels animations.
- "consonantsSmoothing" - float value representing smoothing of the consonants animations.
- "browDownClamp" - float value \[0,1\] representing the maximum value the brow down action unit can take
- "pitchSmoothing" - float value representing the smoothing of the head pitch action unit
- "pitchWeight" - float value \[0,1\] representing the weight of the pitch animation on head when avatar is speaking
- "rollSmoothing" - float value representing the smoothing of the head and body roll action units
- "rollWeight" - float value \[0,1\] representing the weight of the roll animation on head and body
- "yawSmoothing"- float value representing the smoothing of the head yaw action units
- "yawWeight"- float value \[0,1\] representing the weight of the yaw animation on head

## 

---

## Avatars Assets Considerations

Animaze ChatPal does use a few additional idle animations and special actions, to make the avatar more lively and approachable. In terms of face expressions and head movement, Animaze uses the set of animations and blendshapes of the regular VTuber-ready models.

Animaze ChatPal uses the following additional animations:

- idle animations where the avatar explains something (we use a few that are randomly selected)
- idle animation where the avatar is standing still, in a neutral pose, and it’s not talking
- head nodding negatively and positively
- greeting animation
- atomic face expressions animations for specific emotions

By default, VRM, Ready Player me, Personas and all Humanoid Holotech Avatars already have these animations through the generic animation system (the mannequin).

Avatars that don’t retarget the generic animation system or are Live2D models, would require the mentioned anims added manually in the .item file of the avatar. Here is an example of adding your custom animations:

***use a JSon linter service to properly visualize***

"ChatPalEmotionsConfigs": \[{  
 "Emotion": "ANGER",  
 "AIIdleExplainingAnimations": \["idle1\\_anger\\_explain", "idle2\\_anger\\_explain", "idle\\_anger\\_explain"\],  
 "AIIdleNeutralAnimations": \["idle1\\_anger\\_neutral", "idle2\\_anger\\_neutral"\],  
 "AIGreetingAnimations": \["greeting1\\_anger", "hello2"\],  
 "AIIHeadNoddingApprovalAnimations": \["head\\_nodding"\],  
 "AIIHeadNegatingAnimations": \["head\\_negating"\],  
 "AIActiveAnimationsOnEmotion": \[{  
  "Name": "browDownL\\_anim",  
  "Value": 1  
 }, {  
  "Name": "browDownR\\_anim",  
  "Value": 1  
 }\],  
 "AIActiveBlendshapesOnEmotion": \[{  
  "Name": "browDownL\\_blendshape",  
  "Value": 1  
 }, {  
  "Name": "browDownR\\_blendshape",  
  "Value": 1  
 }\],  
 "AILive2DParamsOnEmotion": \[{  
  "Name": "ParamMouthForm",  
  "Value": -1  
 }, {  
  "Name": "ParamBrowLAngle",  
  "Value": -1  
 }, {  
  "Name": "ParamBrowRAngle",  
  "Value": -1  
 }\]  
}\]

- `Emotion` parameter can take the following values: NEUTRAL, DISGUST, CONTEMPT, BELLIGERENCE, DOMINEERING, CRITICISM, ANGER, TENSION, TENSE\\_HUMOR, DEFENSIVENESS, WHINING, SADNESS, STONEWALLING, INTEREST, VALIDATION, AFFECTION, HUMOR, SURPRISE, JOY.
- `AIIdleExplainingAnimations` parameter is a list of animations randomly used while the avatar is talking, used only when the current `Emotion` is active. All these animations must be also configured as Idle animations in the avatar’s .item file.
- `AIIdleNeutralAnimations` parameter is a list of animations randomly used while the avatar is **not** talking, used only when the current `Emotion` is active. All these animations must be also configured as Idle animations in the avatar’s .item file.
- `AIGreetingAnimations` parameter is a list of animations randomly used when the avatar responds with a greeting (examples: “Hey“, “hi“, “good morning/afternoon/evening“, “bye“). All these animations must be also configured as Special Actions animations in the avatar’s .item file.
- `AIIHeadNoddingApprovalAnimations` parameter is a list of animations randomly used when the avatar responds with an approval (examples: “Yes“, “Absolutely“). All these animations must be also configured as Special Actions animations in the avatar’s .item file.
- `AIIHeadNegatingAnimations` parameter is a list of animations randomly used when the avatar responds with a negation (examples: “No“). All these animations must be also configured as Special Actions animations in the avatar’s .item file.
- `AIActiveAnimationsOnEmotion` parameter is a list of additive skeletal animations that will **override** the default ones activated on current `Emotion` . The `Value` parameter takes float values from 0..1.
- `AIActiveBlendshapesOnEmotion`parameter is a list of additive blendshape animations that will **override** the default ones activated on current `Emotion` . The `Value` parameter takes float values from 0..1.
- `AILive2DParamsOnEmotion` parameters is a list of Live2D parameters that will **override** the default ones activated on current `Emotion` . The `Value` parameter takes float values from 0..1.

All the above parameters are optional. Animaze will use the default values if these parameters are not defined in the .item file with custom values.

Please note that the animations labeled as `AIIdleExplainingAnimations` and `AIIdleNeutralAnimations` must be configured as Idle animations, while the animations labeled as `AIIdleGreetingAnimations`, `AIIHeadNoddingApprovalAnimations`, `AIIHeadNegatingAnimations` must be configured as Special Actions animations in the avatar’s .item file.

Here is another example of adding your custom animations for a Live 2d Avatar:

***use a JSon linter service to properly visualize***

"ChatPalEmotionsConfigs": \[{  
 "Emotion": "NEUTRAL",  
 "AIIdleExplainingAnimations": \["haru\\_g\\_m07", "haru\\_g\\_m15"\],  
 "AIIdleNeutralAnimations": \["haru\\_g\\_Idle"\],  
 "AIGreetingAnimations": \["haru\\_g\\_m08"\],  
 "AIIHeadNoddingApprovalAnimations": \["haru\\_g\\_m01"\],  
 "AIIHeadNegatingAnimations": \["haru\\_g\\_m11"\]  
 },  
 {  
 "Emotion": "ANGER",  
 "AILive2DParamsOnEmotion": \[{  
  "Name": "ParamMouthForm",  
  "Value": -1  
 }, {  
  "Name": "ParamBrowLAngle",  
  "Value": -1  
 }, {  
  "Name": "ParamBrowRAngle",  
  "Value": -1  
 }\]  
 }  
\]

Need help to configure animations as Special Actions? Click **[here]({{ '/manual/gettingstarted3d/avatarspecialactions/' | relative_url }} "https://www.animaze.us/manual/gettingstarted3d/avatarspecialactions")** to learn how to do it on 3d avatars, and **[here]({{ '/manual/gettingstarted2d/specialactions/' | relative_url }} "https://www.animaze.us/manual/gettingstarted2d/specialactions")** for 2d avatars.

---

### Animaze ChatPal - the conversational AI

- [Basic Usage - Chat with the Animaze AI Avatar]({{ '/manual/chatpal-guide/chatpal-basic-usage/' | relative_url }})
- [Twitch Actions Usage - Let Twitch Chat talk to your Avatar]({{ '/manual/chatpal-guide/chatpal-twitch-actions/' | relative_url }})
- [Actor Usage - The Echo function]({{ '/manual/chatpal-guide/chatpal-echo/' | relative_url }})
- [Advanced Features]({{ '/manual/chatpal-guide/chatpal-advanced-configs/' | relative_url }})
