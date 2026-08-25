---
layout: page
title: "背景（スカイボックス）のインポート方法"
source_url: https://www.animaze.us/manual/gettingstarted3djpn/jpnimportbackground
---

# 背景（スカイボックス）のインポート方法

Animazeは、Animaze用のキューブにトランスレートされたHDRI（.hdr）キューブをインポートできます。砂漠のシーンを描いた背景を用意しました。 

アセット管理を簡単なものにし、各アセットの役割（アバター、小道具、背景など）をはっきりさせるために、アセット名の頭の部分にアセットの種類を示す接頭辞を付ける単純な命名規則を採用しています。以下の3つはその例です：

\\* avatarName - アバター用 

\\* propName - 小道具用

\\* backgroundName - 背景用

スカイボックスをインポートするには、以下の手順に従ってください：

1. このリンクからBackgroundDesertTest.hdrのアーカイブをダウンロードして、中身のファイルを展開します。
2. Animazeエディターを開き、アセットへ移動し、スカイボックスをインポートを選択します。

### 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/step2-9d9c221a.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

3. 「スカイボックスをインポート」のウィンドウで「参照」をクリックして、最初のステップでダウンロードしたBackgroundDesertTest.hdrのファイルを開きます。

### 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/step3-3bb5cf73.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="427"}

4. 「ぼかし画像を自動生成」のボックスにチェックを入れて、すぐ下の「ぼかしの強さ」レベル設定でぼかし反射マップを生成します。

   スカイボックス（または背景）のインポートプロセスにより、3つのテクスチャーが生成されます。1つがアバターの背後でレンダリングされる背景、残り2つが反射マップ（ぼかしとシャープ）です。 

   3つのテクスチャーの詳細については、以下をご覧ください： 

   \\* 画面に直接レンダリングされるスカイボックス/背景のテクスチャー 

   \\* アバターおよび小道具のマット表面/メッシュに反射としてマッピングされるぼかし反射マップ 

   \\* アバターおよび小道具の光沢表面/メッシュに反射としてマッピングされるシャープ反射マップ

     
   アバターはシーン上ではこのように表示され、見ている人の目が背景の要素によって邪魔されないようになっています。「インポート」をクリックします

### 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/step4-81ac7132.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="512" height="273"}

これで背景がインポートされ、ビューポートで見れるようになります。アプリのシステムで認識できるようにするにはアイコン画像が必要なので、アイコン画像を作成しておきましょう。 

5. 階層パネルでcustomization01\\_sceneをクリックすると、右側のエディターパネルにそのシーンの詳細が表示されます。現在のアイコンを右クリックして、「サムネイルを生成」を選択します。

### 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/step5-36eee0a9.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="428"}

### 

6. 新しいアイコンが作成され、リアルタイムで適用されます。階層パネルで「アイテムの保存形式」を選択して新しいシーンを保存し、そのシーンに新しい名前を入力します。BakgroundDesertTest\\_sceneという名前で保存し、OKをクリックします。「Resources」のディレクトリに、オリジナルのバージョンとは別のフォルダーが新しいシーンとして保存されます。

### 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/step6-cf7fce52.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

### 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/step6.2-49098e2a.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="424"}

### 

7. 新しいシーンが読み込まれます

### 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/step7-f2f61d42.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

### 

フォルダー構造はこのようになります： 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/step8-00f8ffd5.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="500" height="159"}

おめでとうございます！背景のインポートに成功しました 

###

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
