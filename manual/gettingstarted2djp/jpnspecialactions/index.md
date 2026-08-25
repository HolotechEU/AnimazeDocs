---
layout: page
title: "アバターの特殊アクションとポーズを設定する方法"
source_url: https://www.animaze.us/manual/gettingstarted2djp/jpnspecialactions
---

# アバターの特殊アクションとポーズを設定する方法

[特殊アクションとポーズ](https://www.animaze.us/manual/jpnlive2d/jpndiveinto) は、ユーザーが実行させるアニメーションであり、顔のトラッキングのリターゲティングシステムの一部ではありません。例えば、特殊アクションはアバターに表示させたいかっこいいダンスの動きであり、特殊ポーズはアバターの機嫌（顔の色調を青く変えてアバターの表情を悲しげにするなど）です。

特殊アクションと特殊ポーズの可能性は無限大ですが、すべての特殊アクションと特殊ポーズは、特定の要件と動作に従う必要があります。

- アバターに待機ポーズがある場合、特殊アクションはアイドルポーズで終了する必要があります。そうでない場合、アバターは特殊アクションの最後のフレームの状態のままになります
- 特別なポーズのアニメーション入力はトラッキング・リターゲティングで上書きされます

すなわち、特殊ポーズがParamEyeLOpenの入力を0（目を閉じる）に変更する場合、そのパラメータが顔のトラッキングによって上書きされます。Animazeのトラッキング・システムでマッピングされていないシステムを使用することを推奨します。

Animazeエディターのシステムは、デフォルトで、インポート時にすべての特殊アクションとポーズの検出とインポートを試みます。特殊アクションの形式は\\*.motion3で、特殊ポーズの形式は\\*.exp3.jsonでCubism Editorからエクスポートされます。これらは、Animazeエディター内で追加、再調整、削除することができます。 

特殊アクションを設定する手順：

1. Animazeエディターを開きます
2. エディターパネルで「特殊アクション」バーをクリックし、展開させます

![In the Editor Panel, click on Special Actions bar to expand it]({{ '/assets/images/1-b3e7deae.png' | relative_url }} "Animaze Editor"){: width="1000" height="531"}

3. 「特殊アクションを設定」ボタンをクリックすると、設定ウィンドウが開きます

![Clicking the Configure Special Actions button will open the configuration window ]({{ '/assets/images/2-efa3cd8b.png' | relative_url }} "Animaze Editor"){: width="1000" height="534"}

4. エディターに、インポート時に検出されたアニメーションがリスト化されます

![The Animaze Editor lists the animations detected at import]({{ '/assets/images/list_of_actions-da9f6be3.png' | relative_url }} "Animaze Editor"){: width="1000" height="530"}

5. ここでは、特殊アクションを追加、削除、最調整することができます。終了したら、OKをクリックします。

![Here you can Add, Remove & Rearrange the special actions]({{ '/assets/images/3-acc9569b.png' | relative_url }} "Animaze Editor"){: width="1000" height="531"}

6. 「実行」ボタンをクリックして、アニメーションを実行させ、実行されるアクションを確認します

特殊ポーズの設定でも同じ手順に従ってください。システムが、アバターの「expressions/」フォルダーで\\*.exp3.jsonファイルを探します . 作業を終えたら、階層パネルでアバターを保存します

![Click the Activate button to trigger the animation ]({{ '/assets/images/activateSpAc-7ee456fe.png' | relative_url }} "Animaze Editor"){: width="1000" height="532"}

![Save the avatar in the Hierarchy Panel when you are done]({{ '/assets/images/4-46c3f10d.png' | relative_url }} "Animaze Editor"){: width="353" height="420"}

素晴らしい！これで特殊アクションを設定できました

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
