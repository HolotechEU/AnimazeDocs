---
layout: page
title: "Animaze Desktop: How can I use audio based lip sync?"
source_url: https://www.animaze.us/faq/tech/betterlipsync
redirect_from:
  - /faq/animazedesktop/betterlipsync/
---

# Animaze Desktop: How can I use audio based lip sync?

Audio-based Lip Sync enables you to enhance the lips and mouth movement when speaking of your avatar by using a microphone. Audio trackers get audio input and translate it into phonemes that Animaze will map on the avatar. Note that it is important to use a microphone that has less or no noise, audio quality being a big factor for the trackers’ accuracy.

Animaze offers four Audio Based Lip sync options:

1. **[Complex - FaceRig like implementation]({{ '/faq/tech/betterlipsync/' | relative_url }})**
2. [**Simple - simplified in-house implementation**]({{ '/faq/tech/betterlipsync/' | relative_url }})
3. [**Criware - powered by Criware**]({{ '/faq/tech/betterlipsync/' | relative_url }})
4. **(recommended)** [**Oculus - powered by Oculus**]({{ '/faq/tech/betterlipsync/' | relative_url }})

![Audio Based Lip sync in Animaze]({{ '/assets/images/1-c79c20c9.png' | relative_url }} "Audio Based Lip sync in Animaze"){: width="500" height="497"}

---

**1.   Complex Audio Based Lip Sync** supports **16 mouth shapes** and is generally best for 3D avatars, or 2D avatars with very detailed mouths. Tune the Complex Audio Based Lip Sync to your setup with the following controls:

- **Noise threshold** is used to change the amplitude of the sound needed to open the avatar’s mouth. If you are in a very quiet setting, set the noise threshold low for maximum responsiveness. If there is some din, increase the noise threshold so the background noise doesn’t activate your avatar’s mouth.
- **Hold duration** (ms) sets the time duration between the moment the noise gate opens and closes. It is used to prevent the noise gate from closing between words. A longer hold duration will require a longer pause before the mouth stops moving.
- **Attack Duration (**ms) sets time duration between when the noise gate closes and opens. A longer attack duration will require more input before the mouth starts moving.
- The **Vowels smoothing** for inputs detected as vowel sounds, you can set the smoothing. High smoothing will make the mouth movements stable but less responsive.
- The **Consonants smoothing** for inputs detected as consonant sounds, you can set the smoothing. High smoothing will make the mouth movements stable but less responsive.

![Complex Audio Based Lip Sync in Animaze]({{ '/assets/images/2-22ef065e.png' | relative_url }} "Complex Audio Based Lip Sync in Animaze"){: width="500" height="525"}

---

****2.**Simple Audio Based Lip Sync** supports 3 mouth shapes. It is generally best for 2D avatars.

- **Voice Pitch** adjusts the lip sync algorithm to the user’s voice frequency. You should match the slider to the pitch of your voice. Higher pitched voices to the right and lower pitched voices to the left.
- **Voice Speed** adjusts the lip sync algorithm to match your  speech rate. If you are a fast talker, move the slider to the right. Conversely, slower talkers should set the slider to the left.
- **Microphone Sensitivity** adjusts how much to amplify the audio input. If you are close to the microphone, set the value lower. If you are further from the microphone, set the value higher.

![Simple Audio Based Lip Sync in Animaze]({{ '/assets/images/3-1178704b.png' | relative_url }} "Simple Audio Based Lip Sync in Animaze"){: width="500" height="524"}

---

****3.**Criware** detects and remaps vowels to the Animaze viseme system. 

- **Noise threshold** - changes the amplitude of the sound needed to open the avatar’s mouth. If you are in a quiet setting, set the noise threshold low for maximum responsiveness. If there is some din, increase the noise threshold so the background noise doesn’t activate your avatar’s mouth.
- **Hold duration (ms)** -  sets the time duration between when the noise gate opens and closes. Use this setting to prevent the noise gate from closing between words. A longer hold duration will require a longer pause before the mouth stops moving.
- **Attack Duration (ms)** - sets time duration between when the noise gate closes and opens. A longer attack duration will require more input before the mouth starts moving.

![Criware Tracking in Animaze]({{ '/assets/images/4-6ddec0c0.png' | relative_url }} "Criware Tracking in Animaze"){: width="500" height="525"}

---

**4.   (RECOMMENDED)** **OVR Lip-Sync (Oculus)** detects and remapps 15 mouth shapes  to the Animaze viseme system

- **Noise threshold** - changes the amplitude of the sound needed to open the avatar’s mouth. If you are in a quiet setting, set the noise threshold low for maximum responsiveness. If there is some din, increase the noise threshold so the background noise doesn’t activate your avatar’s mouth.
- **Hold duration (ms)** -  sets the time duration between when the noise gate opens and closes. Use this setting to prevent the noise gate from closing between words. A longer hold duration will require a longer pause before the mouth stops moving.
- **Attack Duration (ms)** - sets time duration between when the noise gate closes and opens. A longer attack duration will require more input before the mouth starts moving.

![OVR Lip-Sync in Animaze]({{ '/assets/images/5-acc064fc.png' | relative_url }} "OVR Lip-Sync in Animaze"){: width="500" height="524"}

---

After you enabled one of the available lip sync trackers and made changes to it, click Save to save your tracking preferences and exit the **Audio Based Lip Sync drawer menu**.
