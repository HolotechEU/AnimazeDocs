---
layout: page
title: "アバターのアニメーション入力をリマッピングする方法"
source_url: https://www.animaze.us/manual/gettingstarted2djp/jpnremapanimations
---

# アバターのアニメーション入力をリマッピングする方法

Animazeのリターゲティングシステムは、Live2Dモデルが非常に具体的なアニメーション入力を有していることを想定します。スタンダードはCubism Editorに準拠しており、Live2Dのアバターセクションの「[.avatar技術説明書」でご覧いただくことができます。]({{ '/manual/gettingstarted2d/diveinto/' | relative_url }})

反復をすばやく行うために、エディターは、リターゲティングシステムのスタンダードに合わせてモデルのアニメーション入力をリマッピングする方法を提供しています。

行うための手順：

 Animazeエディターを開きます

1. エディターパネルでスクロールダウンして、「Live2Dのオプション」を見つけて展開し、「パラメーターのリマッパー」をクリックして展開します

![ In Editor Panel scroll down to find and expand the Live2D Options]({{ '/assets/images/1-fa764154.png' | relative_url }} "Animaze Editor"){: width="1000" height="531"}

2. 左側の列は想定されるアニメーション入力の名前であり、右側では以下のように正しいものが自動的に検出され、結び付けられます。

注記：

1. Live2Dモデルに想定される入力がない場合、「定義なし」の入力が表示されます

![If the Live2D model doesn’t have the expected input, then “Undefined” input will display]({{ '/assets/images/2-b8762a3d.png' | relative_url }} "Animaze Editor"){: width="553" height="537"}

入力がエディターによって自動的にピックアップされない場合、最もあり得る原因は、アーティストがCubismで入力を作成していなかったことです。

2. 右側の列のドロップダウンに[表示されるリスト](https://www.animaze.us/manual/jpnlive2d/jpndiveinto) は、インポート時にLive2Dモデルから自動検出されたものです。

![The list provided for the right column drop-down is automatically detected from the Live2D model at import.]({{ '/assets/images/3-6f9cf129.png' | relative_url }} "Animaze Editor"){: width="1000" height="531"}

3. アニメーション入力のリマッピングが完了したら、変更を保持するために、アイテムを保存する必要があります。

![Once you’re done with animation input remappings, you’ll need to save the item for the changes to remain persistent.]({{ '/assets/images/4-46c3f10d.png' | relative_url }} "Animaze Editor"){: width="353" height="420"}

                      アイテムを保存

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
