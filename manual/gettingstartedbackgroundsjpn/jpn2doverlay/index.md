---
layout: page
title: "オーバーレイを含むシンプルなスタティックの2D背景の作成方法。"
source_url: https://www.animaze.us/manual/gettingstartedbackgroundsjpn/jpn2doverlay
---

# オーバーレイを含むシンプルなスタティックの2D背景の作成方法。

基本背景画像。

**手順1：SteamからAnimazeエディターを開きます。**

- 「Steam」 \> 「ライブラリ」の順にクリックします
- ゲームリストの一番上にドロップダウンリストがあります（通常は「ゲーム」に設定されています）
- ドロップダウンリストをクリックしてツールを選択します
- 左側のリストをスクロールし、Animazeエディターをクリックします
- 他のSteamのタイトルと同じ方法で起動します。

デフォルトでは、読み込んだシーンを「**customization01\\_scene」、アバターを「AvatarFrogTest**」と呼びます。

![Background with overlays]({{ '/assets/images/image001-893d3ce1.png' | relative_url }} "By default, you will have a scene loaded called customization01\\_scene and an avatar called AvatarFrogTest. "){: width="900" height="414"}

Animazeエディターには常に、読み込んだシーンアイテムが1つだけ表示されます。このシーンは、情報に関連する全ての背景を含む大量のデータを保存する場所として機能します。

このシーンが、作業終了後にAnimazeアプリにエクスポートするものです。

## 手順2：現在のシーンを削除します。

階層パネルでcustomization01\\_sceneのアイテムを右クリックし、右クリックメニューから「アイテムを取り除く」を選択してください。これでシーンはリセットされ、後でバンドルやエクスポートを行うことのできる新たなシーンを構築できるようになります（customization01\\_sceneはデフォルトではバンドルやエクスポートができません。そのため、削除の必要があります）。

### ![Background with overlays]({{ '/assets/images/image003-808120cc.png' | relative_url }} "Clear (delete) the current scene"){: width="800" height="254"}

DefaultSceneが削除されたシーンを自動的に置き換えます。これで白紙の状態となります。

ここで、新しいシーンの名前を変更して保存するとよいでしょう。保存するには、DefaultSceneのアイテムを右クリックし、「アイテムの保存形式」を選択して、名前を付けてください（このチュートリアルでは、podcastStudio\\_sceneという名前を付けます）。

## 手順3：Scene01のシーンで背景2D画像を読み込みます。

### ![Background with overlays]({{ '/assets/images/image005-a0c06bfd.png' | relative_url }} "Load the Background 2D Image in the Scene01 Scene."){: width="900" height="408"}

アセットのトップメニュー \> スカイボックス2Dをインポートの順にクリックします。表示されるインポートウィンドウで、以下を入力してください：

- あなたのシンプルバックドロップ2D画像 \> 「バックドロップパス」フィールドへ。シンプルな2D背景を作成したい場合、これが最も重要な入力フィールドとなります。反射キューブを気にしない場合、他の全てのフィールドはあまり重要になりません。

 - スカイボックスHDRテクスチャーは、バックドロップの反射キューブ・マッピングを作成するキューブとして機能させるために「スカイボックスパス」の中にある必要があります。このような用語に詳しくない場合、反射キューブ・マッピングをあまり気にする必要はありません。「デフォルトのスカイボックスを使用」にチェックを入れてこの手順をスキップすれば、背景は一般的な反射マッピングを使用します。

- カスタムぼかし反射マッピングHDRソースを指定したくない場合、「自動ぼかし反射マッピング」をチェックすることもできます。指定したい場合は、「ぼかしスカイボックスパス」フィールドから指定できます。

- キューブの解像度に関するその他3つのフィールドは、デフォルト値のままで大丈夫です（反射キューブのサイズに詳しく、デフォルトでない設定にする理由が明確な場合を除く）。

「インポート」ボタンを押すと、階層パネルに、背景画像を参照する「2Dバックドロップ」タイプのオブジェクトが新たに作成されます。これは「フリーアイテム」の下に表示され、名前は2D画像のファイル名がコピーされます。

シーンカテゴリ（podcastStudio\\_scene）内の「フリーアイテム」から、この「2Dバックドロップ」タイプのオブジェクトをドラッグ＆ドロップしてください。

![Background with overlays]({{ '/assets/images/image007-8b5f7caa.png' | relative_url }} "You need to Drag&Drop this 2D backdrop type object from Free Items in the Scene category (podcastStudio\\_scene)."){: width="800" height="231"}

### オプション：オーバーレイ画像の読み込み。

バックドロップが読み込まれました。ここで、オーバーレイ画像（透明度あり）も読み込むことができます。

ナビゲーション。

![Background with overlays]({{ '/assets/images/image009-69ea1636.png' | relative_url }} "Load the Overlay Image"){: width="900" height="229"}

- シーンを右クリック \> 追加 \> 新たな2Dオーバーレイを添付
- 適切な名前を入力し（ここでは「Microphone」）、「OK」をクリック
- 階層から「Microphone」のアイテムを選択
- 右側のエディターパネルの「No Texture」と書かれた四角をクリック
- 必要な2Dファイルを選択
- 「OK」を押す

### 

## ライト値の設定

背景に3Dモデルを使用する場合、適切なダイナミックライトのセットアップも必要になるでしょう。主に2Dのアセットを使用する場合は、ライトについてはあまり気にしなくても大丈夫です。

Animazeの主なライトの設定は次の通りです

- アンビエントライトの情報：
- アンビエントライトの色全般、
- アンビエント色強度全般
- 6色のライト（シーンの周りを囲む想像上の無限サイズのキューブの6方向から放射線状に広がる）
- 最大4つのダイナミックなライト（1つは指向性ライト、残りの3つはオムニライトもしくはスポットライト）

### 

背景にこのようなライト設定を作成する必要があります。

インポートした背景オブジェクトを左クリックします。

### 

エディターの右側にウィンドウが開きます。ここで、アンビエント色、アンビエント色強度、6つのアンビエントキューブライトを設定できます。

### ![Background with overlay]({{ '/assets/images/image011-81f6961b.png' | relative_url }} "In order to create this lighting set-up for your background"){: width="800" height="291"}

アンビエントライトを設定後、指向性ダイナミックライトの設定をしてください。

シーンの名前（Scene01）を右クリックし、「新しいライトを添付」をクリックします。新しいライトは、Scene01のオブジェクトのサブオブジェクトとして階層パネル内に表示されます。これを選択します。選択すると、エディターの右側にタブが開きます。ここでライトのプロパティの設定ができます。

![Background with overlays]({{ '/assets/images/image013-cb145506.png' | relative_url }} "Right-click on the scene name (Scene01), click on Attach New Light"){: width="800" height="219"}

特殊効果のために残して置きたい場合、ダイナミックライトは2つ以上設定しないことを推奨します（Animazeでサポートしているダイナミックライトの最大数は4つです）。

![Background with overlays]({{ '/assets/images/image015-06011618.png' | relative_url }} "Save your work  "){: width="800" height="314"}

### 作業を保存

戻ってきて背景を編集できるようにするには、Animazeエディターのリソースフォルダーに保存しておくとよいでしょう。

保存するには、シーンを右クリックし、「アイテムを保存」を選択します。作成したシーンは、Animazeエディターのインストールフォルダーのリソース・サブフォルダーに保存されます。

### オーバーレイを含む背景

- [オーバーレイを含む背景（2D）]({{ '/manual/gettingstartedbackgroundsjpn/jpnbackgroundwoverlays/' | relative_url }})
- [オーバーレイを含むシンプルなスタティックの2D背景の作成方法。]({{ '/manual/gettingstartedbackgroundsjpn/jpn2doverlay/' | relative_url }})
- [ループするアニメーション背景の作成方法]({{ '/manual/gettingstartedbackgroundsjpn/jpnloopingbackground/' | relative_url }})
- [トラッキングデータに連動したアニメーション要素を持つバックドロップの作成方法]({{ '/manual/gettingstartedbackgroundsjpn/jpntrackingdatabackground/' | relative_url }})
- [キーバインドでトリガーされたアニメーション化された要素のあるバックドロップの作成方法]({{ '/manual/gettingstartedbackgroundsjpn/jpnbackgroundtrigger/' | relative_url }})
