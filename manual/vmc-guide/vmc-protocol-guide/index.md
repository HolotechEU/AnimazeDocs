---
layout: page
title: "Animaze VMC Protocol Usage Guide"
source_url: https://www.animaze.us/manual/vmc-guide/vmc-protocol-guide
---

# Animaze VMC Protocol Usage Guide

Animaze supports full-body retargeting (or even partial) with info received through the VMC protocol. The Virtual Motion Capture Protocol ([VMC protocol](https://protocol.vmc.info/english "https://protocol.vmc.info/english")), enables various applications to send and receive “avatar motions” with heterogenous sets of sensors and trackers (e.g. iPhone, webcam-based hand tracking, VR HMD body tracking, inertia sensor trackers, Kinect, etc.) through a network protocol.

---

The Architecture is quite simple, there are Assistant/Performer applications that can send motion data (body tracking, expressions, device data) and Marionette applications that receive data, retarget and render avatars. Animaze can act as a Marionette application that retargets only body tracking data.

There’s a list of Assistant/Performer applications that can send data to Animaze here: [VMC Protocol リファレンス実装と使用例](https://protocol.vmc.info/Reference)

|  |
| --- |
| Each sender app is different and the UI/UX flow to start sending the motion data greatly varies. In this guide, we focus on illustrating a more abstract setup guide. The base idea is to have the Sender app send data to the same IP/Port combination as the Receiver app, in Animaze (which is the receiver app) you’ll have to activate the VMC Protocol body tracker, match the IP/Port combination, and connect. That’s all, that simple. |

---

Here’s a breakdown:

1. go to Sender App
2. (in Sender App) Search and find the VMC Protocol sending config UI. Usually, apps that support VMC protocol have this icon somewhere

   ![]({{ '/assets/images/vmpc_logo_128x128-fe7373fe.png' | relative_url }}){: width="128" height="128"}
3. (in Sender App) Configure the IP (use default port 39539) to match the one of the PC Animaze is installed on. To find out the IP of the PC, windows \+ R combo, write down cmd (opens Command Prompt), then in Command Prompt, write *ipconfig* and hit enter. Now identify your IP address. Here’s how it should look.

   ![]({{ '/assets/images/ipconfig-e85624a9.png' | relative_url }}){: width="325" height="54"}
4. (in Sender App) Find a function to start sending/broadcasting the motion data.
5. go to Animaze app
6. (in Animaze) Go to Settings \> Advanced Tracking Configuration \> Select Trackers \> scroll down to VMC Body Tracker and activate

   ![]({{ '/assets/images/vmctracker-17383f5b.png' | relative_url }}){: width="314" height="157"}
7. (in Animaze) Configure the IP to match your PC’s IP. Animaze should already have completed the field for IP with your PC’s IP.

   ![]({{ '/assets/images/vmctrackerconfig-c71df3e3.png' | relative_url }}){: width="317" height="291"}
8. (in Animaze) Tap Connect button if it is not already connected.
9. you are all set, if the Sender app is sending data, Animaze should already be retargeting receiving data.

### Animaze VMC Protocol Usage Guide

- [Animaze VMC Protocol Usage Guide]({{ '/manual/vmc-guide/vmc-protocol-guide/' | relative_url }})
