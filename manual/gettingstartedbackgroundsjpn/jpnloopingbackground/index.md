---
layout: page
title: "ループするアニメーション背景の作成方法"
source_url: https://www.animaze.us/manual/gettingstartedbackgroundsjpn/jpnloopingbackground
---

# ループするアニメーション背景の作成方法

これは、[スタティック2D背景]({{ '/manual/gettingstartedbackgrounds/2doverlay/' | relative_url }})と同じですが、スカイボックス2Dをインポートウィンドウで2D画像を読み込む代わりに、ループさせたいアニメーションがLive2Dモデルの待機グループの最初のアニメーションとして設定されているLive2Dモデルを選択することができます。このような用語に詳しく無い場合、[Live2Dの説明書サイト](https://docs.live2d.com/?locale=en_us#)を参照してください。

Live2Dモデルをスタティック2D画像ではなくオーバーレイとして読み込みたい場合、上記の手順はそのままに、2Dオーバーレイのアイテムを編集する際、右側のタブでスタティック2D画像ではなくLive2Dモデルをブラウズし、読み込んでください。 

それ以外は全て同じ手順です。

Animazeエディターのトップバーにある「再生」を押して、エディター内のLive2Dモデル上でアニメーションが再生されるのを確認します。 

画像として読み込むLive2Dモデルにはどれも、階層パネル上に「Live2D拡張」のサブアイテムが表示されます。このサブアイテムのプロパティで、Live2DモデルをフルLive2Dアバターのように設定することができます。Live2Dアバターの設定に関する詳細な情報は、[こちら]({{ '/manual/gettingstarted2d/createyourown/' | relative_url }})でご覧ください。

このようなLive2Dアセットについての詳細は、こちらの[サンプルモデル](https://s3.amazonaws.com/animaze.us/Animated+Backgrounds+and+Overlays+Sources.zip)を参照してください。

### オーバーレイを含む背景

- [オーバーレイを含む背景（2D）]({{ '/manual/gettingstartedbackgroundsjpn/jpnbackgroundwoverlays/' | relative_url }})
- [オーバーレイを含むシンプルなスタティックの2D背景の作成方法。]({{ '/manual/gettingstartedbackgroundsjpn/jpn2doverlay/' | relative_url }})
- [ループするアニメーション背景の作成方法]({{ '/manual/gettingstartedbackgroundsjpn/jpnloopingbackground/' | relative_url }})
- [トラッキングデータに連動したアニメーション要素を持つバックドロップの作成方法]({{ '/manual/gettingstartedbackgroundsjpn/jpntrackingdatabackground/' | relative_url }})
- [キーバインドでトリガーされたアニメーション化された要素のあるバックドロップの作成方法]({{ '/manual/gettingstartedbackgroundsjpn/jpnbackgroundtrigger/' | relative_url }})
