---
layout: page
title: "アニメーション化されたテクスチャー(Live2DCubismテクスチャー経由)"
source_url: https://www.animaze.us/manual/hybriddocjpn/jpnanimatedtextures
---

# アニメーション化されたテクスチャー(Live2DCubismテクスチャー経由)

Animaze supports more uses for animated textures created using Live2D Cubism technology for hybrid avatars. In addition to Animated Diffuse Maps (that were possible before) you can now also have:

- Animated Normal Maps
- Animated Emissive Maps

As a teaching resource for creating these kinds of assets, here are the links to all the source data for Avatar Lily. These include:

- **LINK TO [FBX source files for the 3D part of the model](https://s3.amazonaws.com/animaze.us/Avatar+Lily+Sources/AvatarLily_FbxSourceFiles.zip)**
- **LINK TO [Texture sources in uncompressed format](https://s3.amazonaws.com/animaze.us/Avatar+Lily+Sources/AvatarLily_TextureSourceFiles.zip)**
- **LINK TO [Cubism Project (Sources, loadable in Cubism) for the Animated Textures](https://s3.amazonaws.com/animaze.us/Avatar+Lily+Sources/AvatarLily_CubismProjectSource.zip)**
- **LINK TO [Cubism Runtime files for the Animated Textures](https://s3.amazonaws.com/animaze.us/Avatar+Lily+Sources/AvatarLily_CubismRuntimeFiles.zip)**

## 

Live2Dでアニメーション化された（キュービズム）テクスチャーの詳細は、既存のスタティック・モデル上にアルファブレンドされており、このブレンドの結果がモデルで使用されます。ベースとして正確な（スタティック）テクスチャーを持つことは、変わらず重要です！

法線マップを使用した場合、アニメーション化されたテクスチャーは、アバターの法線上の詳細をダイナミックに強化するのに使用されます。Poly Countを上げずにアバターの表現度を強調するのに最適です

このLive2D（キュービズム）アセットを使用して作られた法線マップ用のアニメーション化されたテクスチャーは、トラッキングされたアバターのアニメーション入力のシナジー上で働きます。アニメーション化されたテクスチャーに使用されるLive2D（キュービズム）アセットが、希望の動作に合った正しい名前のパラメーターであることが重要です。例：一般的な使用ケースは、3DのBrowUP/Downアニメーションと2DのParamBrowLY、ParamBrowRYアニメーション - 驚きとしかめっ面。

- ParamBrowLYとParamBrowRYが0の場合、不透明度は0に設定され、デフォルトの位置となります
- ParamBrowLYとParamBrowRYが-1または1の場合、しかめっ面（-1）と眉毛を上げる動き（1）が可能になります

下記にLive2Dのアニメーション化されたキュービズムテクスチャー用ソースデータを作成するための一般的な手順と、アニメーション化された法線マップとしてアバターにマッピングする方法を具体的に示しています。

![]({{ '/assets/images/hybrid-6f2dc591.png' | relative_url }}){: width="800" height="401"}

# アニメーション化された法線マップの手順

## 

アニメーション化された法線によるLive2D用のソースデータを作成する手順：

## 

法線上で変更したい各パラメーターに対しては、以下の手順に従ってください。ここでは、眉毛の上げ下げを例に挙げます。

## 

1. ハイブリッドアバター（Maya、Blender等）用のジオメトリを作成するのに使用するソフトウェア内で、眉毛を上げるアニメーションを有効化し、メッシュを二重にしてエクスポートします
2. このメッシュで、ハイポリゴンの眉毛の皺を作成したり、ベイクしたり、エクスポートしたりします
3. 眉毛を下げるのに、この手順1と2を繰り返します。
4. それとは別に、Live2DのCubismエディターで新たなプロジェクトを作成して、編集やベイクを終えた2つの法線を異なるレイヤーに追加します ― 以下にこれらをスタックして2つのレイヤーに対して不透明度を設定します：

## 

o ParamBrowLYとParamBrowRYが0の場合、これらの新しいレイヤーの不透明度は0に設定され、デフォルトの位置となります

## 

o ParamBrowLYとParamBrowRYが-1または1の場合、Live2Dのアセットがしかめっ面の皺（-1）か眉毛を上げた皺（1）を正しく表示していることを確認してください

## 

5. モデルのランタイムをエクスポート (.jsonファイル)

## 

Animazeエディターを通して、新たに作成したLive2DのCubismランタイムアセットをアバター上に追加する手順：

## 

1. アニメーション化されたテクスチャーの法線に追加したいメッシュを階層パネルから選択
2. エディターパネルでコンポーネントを追加をクリックし、アニメーション化されたキュービズムテクスチャーを選択 ― 法線
3. このタブを開き、テクスチャーボックスをクリックして、上記（.jsonファイルで作成）したLive2DのCubismランタイムを追加。
4. 必要であれば、Live2DのCubismセット用にタイリングとオフセットを調整することでテクスチャーのサイズを設定してください。
5. アバターの操作デバッガーを使用して、動きを確認してください（Live2Dアセットでトラッキング入力がアニメーション化された要素をどのように有効化するのか ― 現在、アニメーション化された法線マップとして使用されているもの。

## 

アニメーション化された放射テクスチャー

## 

上記の法線と同様、他のテクスチャーマップについても同様にサポートしています。放射チャンネルを持つスペキュラーテクスチャーマップを使用しましょう ― Live2Dアセットと置き換える事も可能です。この例では、トラッキング入力の代わりに特殊アクションによってトリガーされたものが紐づけされています（ただし、上記の法線のようにトラッキング入力に紐づけすることも可能です。Live2Dのアニメーション化されたテクスチャーをアニメーション化するのに使用する入力の選択はあなた次第です）。 

例として、「驚き」の特殊アクションがトリガーされた際にライトがアバターの体や肌のパターン上で揺れ動くライト効果を作成したアバター・リリーを使用します。（この効果は、自分の魔法のポテンシャルや遺伝に驚く彼女の純粋な性格を強調します。）

## 

これを実現するため、スタティック・スペキュラーテクスチャーの上にLive2D（Cubism）surfaceを重ねました。Live2DのCubismで青チャンネル（放射）をどのようにアニメーション化したのか、順を追ってみてみましょう

## 

## 作成手順：

## 

1. Photoshopでアニメーション化された放射にスタティック・スペキュラー・マップをインポート

![]({{ '/assets/images/hybrid2-1d7eb94a.png' | relative_url }}){: width="625" height="351"}

2. 必要に応じて、マスクを作成して放射の影響を受ける必要のない部分を隔離
3. アニメーションに必要な形式で新しいレイヤーを追加

o   赤と緑チャンネルに値0を設定

o   赤と青チャンネルに値1を設定 ― フル放射

![]({{ '/assets/images/ybrid3-36052528.png' | relative_url }}){: width="625" height="315"}

![]({{ '/assets/images/hybrid4-9e71e3be.png' | relative_url }}){: width="309" height="247"}

4.  最終結果は以下のようになります：

![]({{ '/assets/images/hybrid5-8f8384b4.png' | relative_url }}){: width="296" height="237"}

5. Cubism Editorにこのファイルをインポート
6. 以下に新しいパラメーターを作成：

o   青チャンネル内の放射情報に沿って、レイヤーの動きを設定

- 位置0 ― ストライプはアニメーションエリアの外側
- 位置1 ― ストライプはアニメーションエリアの内側

7. このパラメーターを使用し、Cubism Editor内でアニメーションを作成
8. アニメーションを、エディターの「モデル」モードから.moc3ファイルでエクスポート ― 動きをエクスポート
9. Cubismビューワーでmodel3.jsonファイル（前の手順で自動的に作成）をインポートし、scene1.model3.json（前の手順で自動的に作成）をドラッグ＆ドロップ

 

# Animazeエディターを通して、アバター上に追加する手順：

1. アニメーション化されたテクスチャーに追加したいメッシュを階層パネルから選択

![]({{ '/assets/images/hybrid6-a392158e.png' | relative_url }}){: width="326" height="297"}

2. エディターパネルでコンポーネントを追加をクリックし、アニメーション化されたキュービズムテクスチャーを選択 ― スペキュラー

![]({{ '/assets/images/hybrid7-19eb5f95.png' | relative_url }}){: width="278" height="303"}

3. このタブを開き、テクスチャーボックスをクリックして、準備ができている.jsonファイルを追加

付録：

リリーに命を吹き込む手順：

1.     プロポーションを調和させ、ラウンドシェイプをもとにしたダイナミックシルエットでリリーのフレンドリーで人に好かれる性格を強調することで、このアバターに、出来る限り親しみのわく性格を作成しました。 

人間とタコのハイブリッドは、「タコ」というサブジェクトで最も親しみやすいアプローチになりました

![]({{ '/assets/images/hybrid7-de312aea.jpg' | relative_url }}){: width="800" height="505"}

![]({{ '/assets/images/hybrid9-61220c6c.jpg' | relative_url }}){: width="800" height="505"}

![]({{ '/assets/images/hybrid11-37f79d32.jpg' | relative_url }}){: width="800" height="505"}

![]({{ '/assets/images/hybrid10-28c674c1.jpg' | relative_url }}){: width="800" height="505"}

色は、地球上でより温かくフレンドリーな地域の水中の植物や生き物にインスパイアされています。

2.表情の間に大きなコントラストを作成したことで、より深みが加わりました。

![]({{ '/assets/images/hybrid12-8c2a5381.png' | relative_url }}){: width="727" height="1027"}

3.   このアバターの違いは、顎、唇、頬にさらにデフォーメーションを加える事でさらなるバリエーションができたことです。これで、他には無いキャラクターが手に入ります。![]({{ '/assets/images/hybrid13-8e390fbe.jpg' | relative_url }}){: width="800" height="504"}

![]({{ '/assets/images/hybrid14-a287ca19.jpg' | relative_url }}){: width="800" height="524"}

### ハイブリッド アバターの使用を開始する

- [Animazeとは何ですか？また「.avatar」形式とは？]({{ '/manual/hybriddocjpn/jpnhybridanimaze/' | relative_url }})
- [ハイブリッドアバター入門]({{ '/manual/hybriddocjpn/jpnstartwithhybrid/' | relative_url }})
- [ハイブリッドアバターのための2Dコンポーネント・3Dコンポーネントの作り方]({{ '/manual/hybriddocjpn/jpncreatehybridcomponents/' | relative_url }})
- [Animazeエディターでアバターをアセンブルする方法]({{ '/manual/hybriddocjpn/jpnassemblehybrid/' | relative_url }})
- [アニメーション化されたテクスチャー(Live2DCubismテクスチャー経由)]({{ '/manual/hybriddocjpn/jpnanimatedtextures/' | relative_url }})
- [アバターの詳細を変更する方法（アイコン、説明、名前）]({{ '/manual/hybriddocjpn/jpnhybridchangedetails/' | relative_url }})
- [アバターにフレームをつける方法]({{ '/manual/hybriddocjpn/jpnframehybrid/' | relative_url }})
- [アバターにカスタマイズオプションを追加する方法]({{ '/manual/hybriddocjpn/jpnhybridcustomization/' | relative_url }})
- [アバターの特殊アクションを設定する方法]({{ '/manual/hybriddocjpn/jpnhybridspecialactions/' | relative_url }})
- [アバターの操作方法 - 表情のデバッグ]({{ '/manual/hybriddocjpn/jpnhybriddebugging/' | relative_url }})
- [Animaze Windowsのアプリで\\*.avatarのファイルをインポートする方法]({{ '/manual/hybriddocjpn/jpnhybridwindows/' | relative_url }})
- [.avatarファイルをiOSアプリのAnimazeに送信する方法（WindowsにおいてiTunesを経由）]({{ '/manual/hybriddocjpn/jpnhybridiositunes/' | relative_url }})
- [.avatarファイルをiOSアプリのAnimaze Avatarに送信する方法（MacにおいてFinderを経由）]({{ '/manual/hybriddocjpn/jpnhybridiosfinder/' | relative_url }})
- [avatarファイルをPCアプリのAnimaze Avatarに送信する方法]({{ '/manual/hybriddocjpn/jpnhybridioswindows/' | relative_url }})
- [説明書を読み込む]({{ '/manual/hybriddocjpn/jpnhybriddive/' | relative_url }})
