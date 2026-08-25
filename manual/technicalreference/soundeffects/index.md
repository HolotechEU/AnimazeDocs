---
layout: page
title: "Sound Effects"
source_url: https://www.animaze.us/manual/technicalreference/soundeffects
---

# Sound Effects

The Animaze Sound System supports 3D sounds and various effects. It contains a collection of Audio Sources that produce sound data, a single Audio Listener, equivalent to a microphone, and a single Audio Input component, a source that takes data from a physical microphone.

## Audio Source

The Audio Source is a 3D item that has audio data. Audio data is acquired from a sound file. The source also features a configuration and a collection of sound effects, which tell the system how the sound data should be played back. Sound sources can be placed in the environment and can also be attached to any prop or 3D avatar.

## Audio Listener

Audio Listener is attached to the camera and it simulates a virtual microphone in the 3D environment. Audio data received by the listener is what the end user hears.

### Audio Input

The Audio Input is used in capturing microphone data.

### Supported sound files (Windows):

- Ogg vorbis (.OGG)
- Microsoft WAV(.WAV)
- FLAC lossless codec (.FLAC)
- Musical Instrument Digital Interface(.MIDI)
- MP2/MP3 MPEG (.MP2/.MP3)
- Audio Interchange File Format (.AIFF)
- Microsoft Advanced Systems Format (.WMA/.ASF/.WMV)
- MPEG-2 Advanced Audio Coding (.AAC)
- Apple Lossless (.ALAC)

### Supported configs:

- 3D Mode – specifies if a sound volume should be altered by the position of the Audio Source and Audio Listener (example for an ambient sound it should be turned off)
- Autoplay – specifies if a sound should be played automatically when the system starts
- Bypass effects – specifies if the sound should ignore the effects attached to the Audio Source
- Loop – specifies if a sound should replay automatically when it ends
- Volume – specifies the sound volume

### Supported effects:

- Low-pass filter – passes signals with a frequency lower than a selected cutoff frequency
- High-pass filter – passes signals with a frequency higher than a selected cutoff frequency
- Echo – echo effect
- Flange – the sound is played twice at the same time, but the copied signal slides, creating a flanging effect
- Distortion – distortion effect specified by a distortion level
- Normalize – the sound signal is amplified towards its maximum peaks
- Pitch Shift – changes the pitch of a sound without speeding it up or slowing it down
- Chorus – creates and plays the same sound multiple times creating a chorus effect
- Compressor – reduces the volume of loud sounds or amplifies quiet sounds, thus reducing or compressing an audio signal's dynamic range

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
