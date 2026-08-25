---
layout: page
title: "3Dアバターのインポート方法"
source_url: https://www.animaze.us/manual/gettingstarted3djpn/jpnimportavatar3d
---

# 3Dアバターのインポート方法

このガイドでは、\[ここでダウンロード\]できる[AvatarFrogTest](https://s3.amazonaws.com/animaze.us/Animaze+Editor+Sample+Assets.zip)という名前のテストアバターのソースファイルを使います。サンプルフォルダーには2つのディレクトリ（Animations、Textures）と、アバターを作成したモデリングソフトウェアからエクスポートした.fbxファイルが含まれています。 

インポートプロセスでは、以下のファイルのフォルダー構造が必須となるため、ご注意ください：

1. .fbxジオメトリ名をフォルダー名と同じにする

2.テクスチャー（.tga、.png、.jpgファイル）をTextures/のフォルダーに入れる

3.骨格のアニメーション（単一の.fbxファイルとしてエクスポート）をAnimations/のフォルダーに入れる 

アセット管理を簡単なものにし、各アセットの役割（アバター、小道具、背景など）をはっきりさせるために、アセット名の頭の部分にアセットの種類を示す接頭辞を付ける単純な命名規則を採用しています。以下の3つはその例です：

\\* avatarName - アバター用 

\\* propName - 小道具用

\\* backgroundName - 背景用

モデルのインポートを開始するには、以下の手順に従ってください：

1. このリンクからAvatarFrogTestのアーカイブをダウンロードして、中身のファイルを展開します。
2. Animazeエディターを開き、アセットへ移動し、3Dオブジェクトをインポートを選択します。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/1-4f5a6927.png' | relative_url }} "Learn how to use Animaze by Facerig \| 3D Avatars "){: width="1000" height="534"}

3. ファイルをダウンロードした場所から、モデルのジオメトリファイルである.fbxファイルを選択します。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/2-0046c699.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="534"}

4. インポートするファイルを選択するウィンドウが表示されます。初めて特定のモデルをインポートする場合、インポートをクリックする前に、すべてのファイルにマークが入っていることを確認し、ドロップダウンリストからアイテムの種類を選択してください。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/3-c99f690f.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="532"}

5. 1. Animazeエディターがファイルに問題がないかチェックした後、インポート問題のレポートが表示されます。警告システムは骨格のアニメーションをチェックするためのものです。カエルには骨格とブレンドシェイプアニメーションの両方があります。

   対応する骨格のアニメーションがソースファイルにない場合、「必要なアニメーションが見つかりません」という下の画像のような問題が表示されます。欠けている骨格のアニメーションの役割を果たす有効なブレンドシェイプがある場合でも、この警告は発せられます。

   アニメーションの代わりにブレンドシェイプを使う場合、この警告メッセージは無視して構いません。Xを押してウィンドウを消します。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/4-6302b190.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="532"}

6. 次に、インポートを行うたびに冗長なログが表示されますが、Okボタンを押して消します。より複雑なモデルを扱う場合は、ログがエラーを教えてくれるため、デバッグに役立ちます。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/5-5ee1f4f7.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="532"}

7. アバターをインポートすると、ビューポートと階層パネルに表示されます。階層パネルに表示されている方を選択すると、エディターパネル（右側）に詳細（アイコン、種類、名前、場所など）が表示されます。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/6-434e5ba4.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="532"}

8. アバターを使用可能にし、正しくレンダリングするには、特定のサイズにする必要があります。3D編集ソフトウェアからインポートしたジオメトリは大きすぎたり小さすぎたりすることがあるため、適切な値になるようスケーリングする必要があります。グリッドユニットはメトリックシステムのユニットと同じです。

エディターパネルでは、アイテムのスケールの値を調整することでアバターのサイズを変更します。この場合、インポートしたカエルが大きすぎるため、正しい結果を得るには、サイズを1.00000から0.005000に下げる必要があります。これで、カエルが見えないぐらい小さくなったため、カメラビューを調整する必要があります。 

  
階層パネルでAvatarFrogTestを右クリックして「カメラをリセット」を選択します。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/save_item-27f6b163.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="1000" height="534"}

9. マテリアル・コンポーネントへのテクスチャー追加を開始します。まずはメッシュマテリアルを選択する必要があるため、階層パネルでAvatarFrogTestのカエルを開いてメッシュセクションの下でメッシュを選択するか、3Dビューポートで必要なメッシュをクリックします。すべてのプロパティが右側のエディターパネルに表示されます。

![]({{ '/assets/images/03_08_How_to_import_a_3D_avatar-ae85af6d.png' | relative_url }}){: width="1000" height="534"}

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
