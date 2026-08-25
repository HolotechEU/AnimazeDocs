---
layout: page
title: "Audio Based Lip sync"
source_url: https://www.animaze.us/manual/appmanual/audiosync
---

# Audio Based Lip sync

Animaze offers four Audio Based Lip sync options: **Complex Audio Based Lip Sync, Simple Audio Based Lip Sync, Criware** and **Oculus Lip Sync**. 

![Audio Based Lip sync in Animaze]({{ '/assets/images/1-c79c20c9.png' | relative_url }} "Audio Based Lip sync in Animaze"){: width="800" height="795"}

1. **Complex Audio Based Lip Sync** supports **16 mouth shapes** and is generally best for 3D avatars, or 2D avatars with very detailed mouths. Tune the Complex Audio Based Lip Sync to your setup with the following controls:

- **Noise threshold** is used to change the amplitude of the sound needed to open the avatar’s mouth. If you are in a very quiet setting, set the noise threshold low for maximum responsiveness. If there is some din, increase the noise threshold so the background noise doesn’t activate your avatar’s mouth.
- **Hold duration** (ms) sets the time duration between the moment the noise gate opens and closes. It is used to prevent the noise gate from closing between words. A longer hold duration will require a longer pause before the mouth stops moving.
- **Attack Duration (**ms) sets time duration between when the noise gate closes and opens. A longer attack duration will require more input before the mouth starts moving.
- The **Vowels smoothing** for inputs detected as vowel sounds, you can set the smoothing. High smoothing will make the mouth movements stable but less responsive.
- The **Consonants smoothing** for inputs detected as consonant sounds, you can set the smoothing. High smoothing will make the mouth movements stable but less responsive.

![Complex Audio Based Lip Sync in Animaze]({{ '/assets/images/2-22ef065e.png' | relative_url }} "Complex Audio Based Lip Sync in Animaze"){: width="800" height="840"}

 2.   **Simple Audio Based Lip Sync** supports 3 mouth shapes. It is generally best for 2D avatars.

- **Voice Pitch** adjusts the lip sync algorithm to the user’s voice frequency. You should match the slider to the pitch of your voice. Higher pitched voices to the right and lower pitched voices to the left.
- **Voice Speed** adjusts the lip sync algorithm to match your  speech rate. If you are a fast talker, move the slider to the right. Conversely, slower talkers should set the slider to the left.
- **Microphone Sensitivity** adjusts how much to amplify the audio input. If you are close to the microphone, set the value lower. If you are further from the microphone, set the value higher.

![Simple Audio Based Lip Sync in Animaze]({{ '/assets/images/3-1178704b.png' | relative_url }} "Simple Audio Based Lip Sync in Animaze"){: width="755" height="791"}

   3.    **Criware** detects and remaps vowels to the Animaze viseme system. 

- **Noise threshold** - changes the amplitude of the sound needed to open the avatar’s mouth. If you are in a quiet setting, set the noise threshold low for maximum responsiveness. If there is some din, increase the noise threshold so the background noise doesn’t activate your avatar’s mouth.
- **Hold duration (ms)** -  sets the time duration between when the noise gate opens and closes. Use this setting to prevent the noise gate from closing between words. A longer hold duration will require a longer pause before the mouth stops moving.
- **Attack Duration (ms)** - sets time duration between when the noise gate closes and opens. A longer attack duration will require more input before the mouth starts moving.

![Criware Tracking in Animaze]({{ '/assets/images/4-6ddec0c0.png' | relative_url }} "Criware Tracking in Animaze"){: width="755" height="792"}

     4.  **OVR Lip-Sync (Oculus)** detects and remapps 15 mouth shapes  to the Animaze viseme system

- **Noise threshold** - changes the amplitude of the sound needed to open the avatar’s mouth. If you are in a quiet setting, set the noise threshold low for maximum responsiveness. If there is some din, increase the noise threshold so the background noise doesn’t activate your avatar’s mouth.
- **Hold duration (ms)** -  sets the time duration between when the noise gate opens and closes. Use this setting to prevent the noise gate from closing between words. A longer hold duration will require a longer pause before the mouth stops moving.
- **Attack Duration (ms)** - sets time duration between when the noise gate closes and opens. A longer attack duration will require more input before the mouth starts moving.

![OVR Lip-Sync in Animaze]({{ '/assets/images/5-acc064fc.png' | relative_url }} "OVR Lip-Sync in Animaze"){: width="756" height="793"}

After you enabled one of the available lip sync trackers and made changes to it, click Save to save your tracking preferences and exit the **Audio Based Lip Sync drawer menu**.

### Animaze Desktop Manual

- [Introduction]({{ '/manual/appmanual/appintro/' | relative_url }})
- [Avatar Customization and Retexturing]({{ '/manual/appmanual/avatars/' | relative_url }})
- [Background types, importing and customization]({{ '/manual/appmanual/appbackgrounds/' | relative_url }})
- [Voice Effects]({{ '/manual/appmanual/appvoiceeffects/' | relative_url }})
- [Emotes]({{ '/manual/appmanual/appemotes/' | relative_url }})
- [Props types and customization]({{ '/manual/appmanual/appprops/' | relative_url }})
- [Using Spout2 sources in Animaze]({{ '/manual/appmanual/spout2/' | relative_url }})
- [Avatar Animations and special actions]({{ '/manual/appmanual/appanimations/' | relative_url }})
- [Quick Scenes]({{ '/manual/appmanual/quickscenes/' | relative_url }})
- [Dedicated Capture Window]({{ '/manual/appmanual/dedwind/' | relative_url }})
- [Leveraging Voicemod controls in Animaze]({{ '/manual/appmanual/voicemod/' | relative_url }})
- [Animaze Virtual Camera]({{ '/manual/appmanual/virtualcam/' | relative_url }})
- [Importing 3D avatars and hybrid avatars]({{ '/manual/appmanual/import3dh/' | relative_url }})
- [Importing 2D avatars]({{ '/manual/appmanual/import2d/' | relative_url }})
- [Importing .VRM avatars]({{ '/manual/appmanual/vrmimp/' | relative_url }})
- [Importing Ready Player Me avatars]({{ '/manual/appmanual/importrpms/' | relative_url }})
- [Select Trackers]({{ '/manual/appmanual/trackers/' | relative_url }})
- [iPhone tracking]({{ '/manual/appmanual/iphonetrack/' | relative_url }})
- [Webcam Tracker]({{ '/manual/appmanual/webcamtracker/' | relative_url }})
- [Tobii Eye tracker]({{ '/manual/appmanual/tobii/' | relative_url }})
- [Ultraleap tracker]({{ '/manual/appmanual/ultra/' | relative_url }})
- [Audio Based Lip sync]({{ '/manual/appmanual/audiosync/' | relative_url }})
- [Advanced Tracking Configuration]({{ '/manual/appmanual/advtrack/' | relative_url }})
- [Using (alpha) Maxine AR Face Tracking in Animaze]({{ '/manual/appmanual/maxine/' | relative_url }})
- [Subscriptions]({{ '/manual/appmanual/subs/' | relative_url }})
- [Minimum Requirements for PCs]({{ '/manual/appmanual/requir/' | relative_url }})
- [Keybinds controls]({{ '/manual/appmanual/keybinds/' | relative_url }})
- [Optimizing Web Camera Tracking with Camera Angle and Ambient Light]({{ '/manual/appmanual/optwebcam/' | relative_url }})
