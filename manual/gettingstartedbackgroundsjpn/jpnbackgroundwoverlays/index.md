---
layout: page
title: "オーバーレイを含む背景（2D）"
source_url: https://www.animaze.us/manual/gettingstartedbackgroundsjpn/jpnbackgroundwoverlays
---

# オーバーレイを含む背景（2D）

2020年2月11日より、Animazeはオーバーレイを含む背景をサポートします。

これは「2D画像のサンドイッチ」と考えることができます。つまり、2枚の「パン」があり、1枚は背景画像、もう1枚はオーバーレイ画像（透明チャンネル付き）で、アバターが真ん中に挟まるようなものです。

![Background with overlays]({{ '/assets/images/image001-fbb51035.png' | relative_url }} "Those two images (background and overlay) can be any regular (static) 2D image,"){: width="900" height="155"}

これら2つの画像（背景とオーバーレイ）は、どんな通常の（スタティック）2D画像にもなり、追加フレアにも使用でき、アニメーションをサポートしたLive2Dモデルにもなります。

Live2Dパスを使うと選択肢が広がりますが、Live2Dのアーティストツールの使用方法を知っておく必要があります（Cubism EditorとLive2D Viewer、どちらもLive2Dパッケージに含まれています）。

Live2Dを使えば、このようなことができます：

- 待機アニメーションのループ化。

![background with overlays]({{ '/assets/images/image003-46747d78.gif' | relative_url }} "Looping idle animation"){: width="500" height="281"}

- アニメーションをトラッキングデータとリアルタイムでつなげる。

![Background with overlays]({{ '/assets/images/image004-7b1bcba5.jpg' | relative_url }} "Animation that is live-linked to tracking data"){: width="500" height="281"}

- ボタンを押すと流れるアニメーション

![Background with overlays]({{ '/assets/images/image006-0f93997f.jpg' | relative_url }} "Animation triggered by key binds"){: width="800" height="224"}

これらは、学習用にまとめられた3つの例です。上記を自由に組み合わせ、あなたのアバター体験を飛躍的に向上させることができます。

どちらの例も、構築方法を学ぶためにLive2Dソースファイルとして、またAnimazeエディターでの設定方法を学ぶために.avatarファイルとしてダウンロードすることができます。**[ダウンロードはこちら](https://s3.amazonaws.com/animaze.us/Animated+Backgrounds+and+Overlays+Sources.zip)**

さて、具体的には、このようなアセットをどのようにして作成するのでしょうか？作成手順

### オーバーレイを含む背景

- [オーバーレイを含む背景（2D）]({{ '/manual/gettingstartedbackgroundsjpn/jpnbackgroundwoverlays/' | relative_url }})
- [オーバーレイを含むシンプルなスタティックの2D背景の作成方法。]({{ '/manual/gettingstartedbackgroundsjpn/jpn2doverlay/' | relative_url }})
- [ループするアニメーション背景の作成方法]({{ '/manual/gettingstartedbackgroundsjpn/jpnloopingbackground/' | relative_url }})
- [トラッキングデータに連動したアニメーション要素を持つバックドロップの作成方法]({{ '/manual/gettingstartedbackgroundsjpn/jpntrackingdatabackground/' | relative_url }})
- [キーバインドでトリガーされたアニメーション化された要素のあるバックドロップの作成方法]({{ '/manual/gettingstartedbackgroundsjpn/jpnbackgroundtrigger/' | relative_url }})
