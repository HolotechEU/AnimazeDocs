---
layout: page
title: "VRMモデルをAnimazeにインポートする方法"
source_url: https://www.animaze.us/manual/vrmavatarjpn/vrmimportjp
---

# VRMモデルをAnimazeにインポートする方法

AnimazeでVRMモデルがサポートされるようになりました。VRMモデルをAnimazeにインポートして放送に備えるには、一般ワークフローの簡単な方法が2つあります：

1. \\*.VRMモデルファイルを入手し、Animazeデスクトップに直接追加する

2. そのモデルをAnimazeエディター経由でインポートし、変更を加え（メッシュで影を微調整する、名前と説明を調節する、アイコンを変更する、カメラ設定など）、モデルを\\*.Avatarファイルに変換し、全てのAnimazeアプリ（iOSとWindows）に送信する。

この入門ガイドでは、VRoid Studioによって生成された\\*.vrm形式のモデルを使用した手順を解説します。[こちら](https://store.steampowered.com/app/1486350/VRoid_Studio_v150/)からSteam上でVRoid Studioアプリケーションをダウンロード＆インストール。 

すでに自分のモデルをお持ちの場合や、VRoid Studio以外で作成したモデルをお持ちの場合、そのモデルをAnimazeにインポートし、正しく動作させるには、VRMフォーマットに準拠している必要があります。 

まずは最速の方法でAnimazeにVRMモデルをインポートしましょう！

アプリ直接入力方式。 

すでに独自の.vrmモデルをお持ちの場合は、ステップ5に進んでください。

1. VRoid Studioを開きます。下書きまたはサンプルのアバターを使用してアバターを作成します。

![vrm import ]({{ '/assets/images/1z-901865a2.png' | relative_url }} "vrm import "){: width="600" height="339"}

2.好みに合わせてアバターを調整します。アバターを調整する場合、必ずガイドラインに沿って調整してください。VRoid Studioの公式ガイドは[こちら](https://vroid.pixiv.help/hc/en-us/sections/360000076642--Basic-Tutorials)からご覧いただけます。

![vrm import]({{ '/assets/images/2z-d431124c.png' | relative_url }} "vrm import"){: width="800" height="483"}

3.エクスポートボタンで.VRMファイルをエクスポートし、VRMとしてエクスポートを選択します。

![vrm import]({{ '/assets/images/4z-f8d3e676.png' | relative_url }} "vrm import"){: width="800" height="480"}

4.ポリゴン、マテリアル、ボーンを減らすことのできる中間ステップがあります。モデルに必要な変更を加えるか、そのままの状態にし、エクスポートを選択します。

![vrm import]({{ '/assets/images/4z-f8d3e676.png' | relative_url }} "vrm import"){: width="800" height="480"}

5.Animazeを開き、アバターギャラリーに移動し、自分のアバターシェルフまでスクロールして、\+（プラス）ボックスをクリックして.VRMモデルをアップロードします。![Importing .VRM avatars in Animaze]({{ '/assets/images/11z-1f29d3b3.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="457"}

![Importing .VRM avatars in Animaze]({{ '/assets/images/12z-b1374fe6.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="458"}

6.あなたのアバターがAnimazeに追加されました！デフォルトでは、4つの標準特殊アクション（こんにちは、OK、わからない、いいえ）も使用できます。 。 

![Importing .VRM avatars in Animaze]({{ '/assets/images/15z-9da70edf.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="456"}

エディター方式

.VRMアバターの詳細を変更する必要があるとしましょう。その場合、上記のインポートよりもAnimazeエディターを優先して使用します。やってみましょう： 

1. Animazeエディターを開く。Steamライブラリーにエディターが表示されない場合、ドロップダウンメニューの「ツール」の項目がオンになっていることを確認してください。

![Importing .VRM avatars in Animaze]({{ '/assets/images/image5-34569116.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="250" height="364"}

2.アセット \> 3Dオブジェクトをインポートの順にクリックします。.fbx形式と.vrm形式のファイルが選択可能なファイルエクスプローラーが開きます。  

**![Importing .VRM avatars in Animaze]({{ '/assets/images/5z-6a6a1bad.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="428"}**

3.ファイルを開き、インポーターウインドウ（2つ目の画像）インポートをクリックします。インポーターを作動させます。ファイルのインポートには数分かかる場合があり、これを調節するとアプリが反応しなくなることがあります。

![Importing .VRM avatars in Animaze]({{ '/assets/images/6z-cfd9e3f8.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="426"}

**![Importing .VRM avatars in Animaze]({{ '/assets/images/7z-598dffa8.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="427"}**

4.すべてのインポートログウインドウを閉じます。モデルがAnimazeエディターにロードされたことを確認します。 

![Importing .VRM avatars in Animaze]({{ '/assets/images/8z-ccf914e3.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="426"}

![Importing .VRM avatars in Animaze]({{ '/assets/images/9z-84bba339.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="427"}

5.これで、[マテリアル・コンポーネント（追加/削除）]({{ '/manual/editorusermanual/editormaterialcomponents/' | relative_url }})の調整、[アバターの名前と説明の変更]({{ '/manual/gettingstarted3d/changeavatardetails3d/' | relative_url }})[、カメラ設定の変更]({{ '/manual/gettingstarted3d/frameavatar3d/' | relative_url }})ができますが、あらかじめ[こちらの情報]({{ '/manual/vrmavatar/vrmgeometry/' | relative_url }})を考慮してください。

6.変更が終わったら、階層パネル内のアバターを右クリックし、バンドルを選択します。プロンプトが表示された際、またはバンドルオプションを選択する前に、変更内容を保存してください。このシステムによって、Animazeデスクトップに追加するための.avatarファイルが作成されます。

![Importing .VRM avatars in Animaze]({{ '/assets/images/10z-2f1ebe51.png' | relative_url }} "Importing .VRM avatars in Animaze"){: width="800" height="428"}

プロのヒント：バンドルの保存先をメモしておきます。次のステップでバンドルを選択するために必要になります。

7.あとは、上記のアプリに直接入れるのステップ5で、これをAnimazeに入れるだけです。 

インポート中や使用中にクラッシュしたり、シェーディング、物理演算、アニメーション、リターゲティングなどで問題が発生したりした場合、[support\[@\]animaze.us](mailto:support@animaze.us) までお問い合わせください。お問い合わせの際は、以下の情報をお知らせください。

- アプリケーションログ(AnimazeエディターおよびAnimazeデスクトップ)
- 使用した.vrmファイル
- シェーディング、物理演算、アニメーション上の問題の詳細(可能な場合)
- シェーディング、物理演算、アニメーション処理が正常に行われた場合に期待される結果を示すスクリーンショットまたは動画(可能な場合)
- 問題が発生した状態を示すスクリーンショットまたは動画(可能な場合)

ヒント:Blenderやその他のソフトウェアで、すでにある\\*.vrm/\\*.glbフォーマットのアバターを改変する必要がある場合（ヘッドホンやその他のアクセサリを追加）、それを最初にインポートした時と同じフォーマットでエクスポートしてください。特定のフォーマットに合う協定を考慮にいれてください。

こちらのDiscordサーバー(<https://animaze.tv/discord>)で作品をシェアしてください！

### Animazeの.VRMモデル技術説明書

- [.VRM全般の手順]({{ '/manual/vrmavatarjpn/vrmgeneraljp/' | relative_url }})
- [形状/マテリアル/テクスチャー]({{ '/manual/vrmavatarjpn/vrmgeometryjp/' | relative_url }})
- [アニメーションとリターゲティング]({{ '/manual/vrmavatarjpn/jpnvrmanimations/' | relative_url }})
- [物理演算]({{ '/manual/vrmavatarjpn/vrmphysicsjp/' | relative_url }})
- [パーフェクトシンク機能を.VRM形式のアバターに追加するためのガイド]({{ '/manual/vrmavatarjpn/vrmperfectsyncjp/' | relative_url }})
- [VRMモデルをAnimazeにインポートする方法]({{ '/manual/vrmavatarjpn/vrmimportjp/' | relative_url }})
