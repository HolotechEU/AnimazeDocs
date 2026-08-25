---
layout: page
title: "リターゲティングオーバーライドガイド"
source_url: https://www.animaze.us/manual/gettingstarted2djp/jpnlive2dretargetingoverrides
---

# リターゲティングオーバーライドガイド

アーティストはエディターで、マップトラッキングアニメーションをアニメーションインプットにカスタムすることができます。現在はLive2Dのアバターにのみ対応しています。

手順：

1. 階層パネルからLive2Dのアバターを選択します。
2. アバターインスペクター内でLive2Dオプションを開き、リターゲティングの上書きを開きます。

![]({{ '/assets/images/1-e995be39.png' | relative_url }}){: width="1000" height="531"}

3. 上書きの追加をクリックし、リターゲットしたいLive2Dアニメーションインプットを選択します。このガイド用に、ParamEarLOnを選択しました。

![]({{ '/assets/images/2-8d5f9094.png' | relative_url }}){: width="1000" height="527"}

4. 「インプットボタンを追加」をクリックすれば、リターゲットしたいトラッキングインプットを追加できます。このガイド用に「顎を下げる」を選択しました。

![]({{ '/assets/images/3-2afcd959.png' | relative_url }}){: width="1000" height="529"}

5. アバターの操作（ツール \> アバターの操作）内で、口を開く表情を切り替え、アバターへの影響を見てみましょう。口の開きが1に設定されている場合、左耳が見えます。

![]({{ '/assets/images/4-aed9dd02.png' | relative_url }}){: width="1000" height="528"}

6. 完了です。このシステムで、リターゲットするトラッキングインプットを複数追加（デフォルトで、加重和として使用）または最少、最大、逆数和などのトラッキングインプットでその他の操作を使用することもできます。

![]({{ '/assets/images/5-4cca0744.png' | relative_url }}){: width="980" height="616"}

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
