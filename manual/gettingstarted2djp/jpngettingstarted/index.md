---
layout: page
title: "Animazeエディター入門"
source_url: https://www.animaze.us/manual/gettingstarted2djp/jpngettingstarted
---

# Animazeエディター入門

Animazeエディターは、芸術家、マニア、専門家が2DコンテンツをAnimaze Avatarのアプリに追加できるようにするオーサリングツールです。Animazeのプラットフォームは、Cubism EditorからエクスポートされたLive2Dランタイムモデルをサポートしています（サポート対象のランタイムは3.0、3.1、3.2、3.3、4.0です）。

このガイドでは、[Animazeエディター](https://www.animaze.us/editor)入門用に、ヒヨリという名前のサンプルモデルを使用します。このモデルは[ここ](https://s3.amazonaws.com/animaze.us/Animaze+Editor+Sample+Assets.zip)からダウンロードすることができます。サンプルモデルとしてヒヨリを選んだのは、特殊アクションと物理演算を有するフルボディモデルだからです。 

サンプルモデルのヒヨリをインポートするには、以下の手順に従ってください： 

1. この[リンク](https://s3.amazonaws.com/animaze.us/Animaze+Editor+Sample+Assets.zip)からヒヨリのアーカイブをダウンロードして、中身のファイルを展開します。
2. Animazeエディターを開き、アセットへ移動し、Live2Dのアバターをインポートを選択します

**![Animaze Editor Assets]({{ '/assets/images/1-5ac9bc39.png' | relative_url }} "Animaze Editor"){: width="1000" height="529"}**

3. モデルの.jsonファイルを選択し、クリックして開きます

**![Animaze Editor select json]({{ '/assets/images/2-73c4cca7.png' | relative_url }} "Animaze Editor"){: width="1000" height="533"}**

4. インポートするファイルを選択するウィンドウが表示されます。初めて特定のモデルをインポートする場合、インポートをクリックする前に、すべてのファイルにチェックが入っていることを確認してください。

![Animaze Editor Click these prompts to import your avatar]({{ '/assets/images/3-30369e92.png' | relative_url }} "Animaze Editor Prompts"){: width="1000" height="528"}                     5. Animazeエディターがファイルにエラーや警告がないかチェックした後、インポートログが表示されます。すべてが緑色であれば、先に進むことができます。OKをクリックして、ログを消します。

![An import log will be displayed after the Animaze Editor checks the files for errors and warnings. If everything is green, you are good to go. Click Ok to dismiss the log.]({{ '/assets/images/4-dfe976df.png' | relative_url }} "Animaze editor import log"){: width="1000" height="532"}

6. アバターをインポートすると、ビューポートに表示されます。

![Once the avatar is imported, it will be displayed in the viewport.]({{ '/assets/images/5-2eda6c4a.png' | relative_url }} "Animaze Editor Viewport"){: width="1000" height="532"}

                                                                                 シーンにおけるアバター

これでサンプルモデルをインポートできました。Cubism Editorで自分自身のLive2Dのモデルを作成するには、[こちら]({{ '/manual/gettingstarted2d/createyourown/' | relative_url }})の手順に従ってください。

### 2Dアバター入門

- [Animazeとは何か？]({{ '/manual/gettingstarted2djp/animazeintrojpn/' | relative_url }})
- [Live2Dモデルの要件とファイル構造]({{ '/manual/gettingstarted2djp/jpnparamlist/' | relative_url }})
- [Animazeエディター入門]({{ '/manual/gettingstarted2djp/jpngettingstarted/' | relative_url }})
- [複雑な口角形状の Live2Dモデル作成方法]({{ '/manual/gettingstarted2djp/extparam2d/' | relative_url }})
- [アバターの詳細を変更する方法（アイコン、説明、名前）]({{ '/manual/gettingstarted2djp/jpnchangeavatardetails/' | relative_url }})
- [レンダリングのオプションを変更する方法]({{ '/manual/gettingstarted2djp/jpnchangerendering/' | relative_url }})
- [アバターのアニメーション入力をリマッピングする方法]({{ '/manual/gettingstarted2djp/jpnremapanimations/' | relative_url }})
- [リターゲティングオーバーライドガイド]({{ '/manual/gettingstarted2djp/jpnlive2dretargetingoverrides/' | relative_url }})
- [アバターの特殊アクションとポーズを設定する方法]({{ '/manual/gettingstarted2djp/jpnspecialactions/' | relative_url }})
- [アバターにフレームをつける方法]({{ '/manual/gettingstarted2djp/jpnframeavatar/' | relative_url }})
- [アバターのテクスチャーをすばやく変更する方法]({{ '/manual/gettingstarted2djp/jpnmodifytexture/' | relative_url }})
- [表情デバッグ中 ― アバターの操作]({{ '/manual/gettingstarted2djp/jpnexpressiondebugging/' | relative_url }})
- [.avatarのバンドルを作成]({{ '/manual/gettingstarted2djp/jpncreateavatarbundle/' | relative_url }})
- [.avatarのバンドルをインポート]({{ '/manual/gettingstarted2djp/jpnimportbundle/' | relative_url }})
- [手順1:モデルをAnimazeアプリにインポートする]({{ '/manual/gettingstarted2djp/jpnimportlive2d/' | relative_url }})
- [アバターをAnimazeアバターiOSアプリに送信する方法（3つの方法）]({{ '/manual/gettingstarted2djp/jpnsendavatar/' | relative_url }})
- [あなた自身の2Dアバターを作成]({{ '/manual/gettingstarted2djp/jpncreateyourown/' | relative_url }})
