---
layout: page
title: "アニメーション化されたエモートの追加方法"
source_url: https://www.animaze.us/manual/gettingstarted3djpn/jpnemotes
---

# アニメーション化されたエモートの追加方法

エモートは、どんなアバターにも適用できる世界的な特殊アクションで、その目的はアバターをより表情豊かにすることです（例：怒った表情をより向上させるには、炎のエモートをおすすめします）。エモートはキーバインドからトリガーされます。

![About Animaze by Facerig \| How to add emotes]({{ '/assets/images/flameemote-a7605213.gif' | relative_url }} "About Animaze by Facerig \| 3D Avatars"){: width="400" height="330"}

エモートは下記のような他のAnimazeのアイテムを入れることのできるコンテナのようなアイテムです：パーティクル・システム（現時点での私達のメインアイテム）、ライト（アバターには4つまでしか適用できません）、3D小道具、音。

トリガーすると、エモートは一時的にアバターに適用されます。アバターの動きに追従するか否かや、特定の骨格の関節を選択するオプションも付いています。

エモートはカスタム可能で、下記のオプションを使用して設定できます：

1. エディターの階層パネルを通した、パーティクル・システム、ライト、3D小道具または音アイテム（もしくはその両方）の適用

2. 適用されたエモートのコンポネント/アイテムの時間

3. エモートの継続時間

4. エモートを特定の骨格の関節に適用

5. アバターの動作に追従するか否か 

パーティクル・システムを含む炎のエモートを作成してみましょう：

1.テクスチャーアトラス（.png形式）を作成 ― 同じアイテムのマルチ小画像を含む画像。テクスチャーアトラスを作成する最も簡単な方法は、Photoshopのタイムラインを使用して、フレームドローイングでフレームを作成することです。6x6のタイルの画像を使用します：

![]({{ '/assets/images/pasted_image_0-36e2484d.png' | relative_url }}){: width="209" height="208"}

2.Animazeエディターを開き、階層パネルの何も無いスペースで右クリックして、エモートを追加を選択し、それから新しいエモートを選択します。名前を付ける際は「Emote\\_Name」を使用することを提案します。

![]({{ '/assets/images/pasted_image_0_1_-7af58f75.png' | relative_url }}){: width="219" height="296"}

 

3.       新たに作成したエモートを右クリックし、追加 \> パーティクル・システムを適用 \> 新しいパーティクル・システム の順に選択します。名前を付ける際は「“Emote\\_PS」を使用することを提案します。パーティクル・システムを追加する場合、名前に数字を付け加えて、使いやすいようにしましょう。

![]({{ '/assets/images/pasted_image_0_2_-bb7d552a.png' | relative_url }}){: width="317" height="197"}

 

4.       エディターパネルの右で色と外見タブを開き、テクスチャーマテリアルボックス内でアトラステクスチャーをドラッグ＆ドロップします。ここでは、パーティクルのサイズも変更します（1 \= 1m)。

 ![]({{ '/assets/images/pasted_image_0_3_-8c846234.png' | relative_url }}){: width="270" height="343"}

 

5.       必要であれば、アニメーション化されたテクスチャータブを開き、アニメーション化されたテクスチャーを使用するにチェックを入れ、タイルの幅と高さの数字を設定して、円滑なフレーム・ブレンディングを使用にチェックを入れてFPSを調整します。

 ![]({{ '/assets/images/pasted_image_0_4_-44174151.png' | relative_url }}){: width="300" height="115"} 

6.       世代と寿命タブ内：

a.       エミッターの種類を設定。炎の例では「Point」を使用します。

![]({{ '/assets/images/unnamed-86785e98.png' | relative_url }}){: width="200" height="267"}

b.       1秒ごとに生成されるパーティクルを1に設定 

c.        パーティクルの寿命を設定。3に設定しました

 

フレームのディスプレイがよりリアルになるよう、追加のパーティクルを加えました。下の画像の炎の光をご覧ください：

![]({{ '/assets/images/pasted_image_0_5_-72cd2255.png' | relative_url }}){: width="212" height="201"}

このようにしたい場合、上記と同じ手順を踏みますが、タイルの画像の代わりにシングルレイヤーの画像（タイルではないもの）を使用します：![]({{ '/assets/images/pasted_image_0_6_-8cee3efc.png' | relative_url }}){: width="134" height="135"}

サイズの寿命のバリエーションにチェックを入れてサイズ値を設定します：

![]({{ '/assets/images/fireemotedoc-29052ea1.png' | relative_url }}){: width="580" height="186"}

これのエミッターの種類はサークルに設定されています。スケールと位置を好みに調整します。パーティクルの最大値は20で、パーティクルは1秒ごとに10生成され、自分の使用方法に合わせて好きな値に調整します。

頑張って！素晴らしい機能です！

### 3Dオブジェクト入門

- [Animazeとは何か？]({{ '/manual/gettingstarted3djpn/jpnanimaze3d/' | relative_url }})
- [Animazeエディター入門]({{ '/manual/gettingstarted3djpn/jpn3dgettingstarted/' | relative_url }})
- [Animazeのデスクトップアプリケーションでバンドルをインポート]({{ '/manual/gettingstarted3djpn/jpnimporttowindows/' | relative_url }})
- [3Dアバターのインポート方法]({{ '/manual/gettingstarted3djpn/jpnimportavatar3d/' | relative_url }})
- [アバターにカスタマイズオプションを追加する方法]({{ '/manual/gettingstarted3djpn/jpncustomizationoptions3d/' | relative_url }})
- [アバターの詳細を変更する方法（アイコン、説明、名前）]({{ '/manual/gettingstarted3djpn/jpnchangeavatardetails3d/' | relative_url }})
- [小道具の.avatarファイルをiOSアプリのAnimaze Avatarに送信する方法（WindowsにおいてAnimazeエディターを経由）]({{ '/manual/gettingstarted3djpn/jpnsendprop3d/' | relative_url }})
- [小道具の.avatarファイルをiOSアプリのAnimazeに送信する方法（WindowsにおいてiTunesを経由）]({{ '/manual/gettingstarted3djpn/jpnsendprop3dw/' | relative_url }})
- [小道具の.avatarファイルをiOSアプリのAnimaze Avatarに送信する方法（MacにおいてFinderを経由）]({{ '/manual/gettingstarted3djpn/jpnsendprop3df/' | relative_url }})
- [アニメーション化されたエモートの追加方法]({{ '/manual/gettingstarted3djpn/jpnemotes/' | relative_url }})
- [アバターにフレームをつける方法]({{ '/manual/gettingstarted3djpn/jpnframeavatar3d/' | relative_url }})
- [.avatarファイルをiOSアプリのAnimaze Avatarに送信する方法（WindowsにおいてAnimazeエディターを経由）]({{ '/manual/gettingstarted3djpn/jpnsendavatar3d/' | relative_url }})
- [.avatarファイルをiOSアプリのAnimazeに送信する方法（WindowsにおいてiTunesを経由）]({{ '/manual/gettingstarted3djpn/jpnsendavatar3dw/' | relative_url }})
- [.avatarファイルをiOSアプリのAnimaze Avatarに送信する方法（MacにおいてFinderを経由）]({{ '/manual/gettingstarted3djpn/jpnsendavatar3df/' | relative_url }})
- [アバターの特殊アクションを設定する方法]({{ '/manual/gettingstarted3djpn/jpnavatarspecialactions/' | relative_url }})
- [背景（スカイボックス）のインポート方法]({{ '/manual/gettingstarted3djpn/jpnimportbackground/' | relative_url }})
- [背景の.avatarファイルをiOSアプリのAnimaze Avatarに送信する方法（WindowsにおいてAnimazeエディターを経由）]({{ '/manual/gettingstarted3djpn/jpnsendbackground/' | relative_url }})
- [背景の.avatarファイルをiOSアプリのAnimazeに送信する方法（WindowsにおいてiTunesを経由）]({{ '/manual/gettingstarted3djpn/jpnsendbackgroundw/' | relative_url }})
- [背景の.avatarファイルをiOSアプリのAnimaze Avatarに送信する方法（MacにおいてFinderを経由）]({{ '/manual/gettingstarted3djpn/jpnsendbackgroundf/' | relative_url }})
