---
layout: page
title: "ハイブリッドアバターのための2Dコンポーネント・3Dコンポーネントの作り方"
source_url: https://www.animaze.us/manual/hybriddocjpn/jpncreatehybridcomponents
---

# ハイブリッドアバターのための2Dコンポーネント・3Dコンポーネントの作り方

ハイブリッドアバターを作成するには、3Dの体（3D Max、Maya、Modo、Blender、Cinema 4D、Zbrush等）と2Dの顔（Photoshop、Cubism）を作成する必要があります。 

3Dの体を作成する際、以下の方法をおすすめします。

**コンセプトとハイポリゴン**

**リトポロジー**

**UVマッピング**

**テクスチャー規則に従う**

**リギング**

**スキニング**

**アニメーション化**

**1. コンセプトとハイポリゴン**

何を表し、どのような外見にするかというアバターのコンセプトが決まったら、アバターのデザインを開始します。 

デザインのプロからのヒント：アバターをデザインする際、アニメーションとアバターのアクセサリ/エレメントの関係や、どのように動くのかを考慮に入れましょう。

2Dコンポーネントの部分は鮮明かつアニメーションによる伸縮が無い事を忘れないようにしましょう。例えば、アクセサリ/洋服は、アバターの他の部分をクリッピングすること無く、動いたり回ったりさせましょう。 

**2. リトポロジー**

これは、ゲームやアニメ環境においてあなたのモデルを使用するための準備プロセスです。より小さなファイルサイズでオリジナルのHDアセットを簡略化する別のメッシュが作成され、アニメーションやレンダリングで使いやすくなります。 

 AnimazeエディターはN-gons（5面以上または5画以上の顔またはポリゴン）に対応していません。トポロジを作成すると、モデルを最適化（ポリゴンの数を減少）できます。3Dの説明書で、全てのプロセスをご確認ください。

このプロセスは、得意なプログラムを使用して実行できます。（Blender、3D Max、Mode等。）

![]({{ '/assets/images/hybrid-88f41aa9.png' | relative_url }}){: width="800" height="342"}

**3. UVマッピング** 

ここでは、3Dメッシュと細かい部分を2D情報に変換します。これにより、2Dテクスチャーがローポリゴンメッシュの周りを覆います。 

モデルは0〜1のUVスペースで標準化されたマッピングである必要があります。

このタイプのマッピングが必要なマテリアルタイプがあるため、オーバーラップの無いユニークにマッピングされたモデルを作成してください。全てのポリゴンにはマッピング座標が必要です。

この決まりは、モバイルのプラットホームにも適用されます。

テクスチャーからより多くのピクセルを使用するために、マッピングにより多くのスペースを割り当てるよう心がけてください。 

興味のある領域にできるだけ多くのピクセルを使用し、UVマップを最大限に活用するために、以下の手順に従ってください。

![]({{ '/assets/images/hybrid2-40d7b64d.png' | relative_url }}){: width="800" height="389"}

**4. テクスチャー規則に従う**

ここでは、アバターの細部に必要なチャンネル属性を取り扱います。**[こちら]({{ '/manual/technicalreference/texturesandmaterials/' | relative_url }})**の説明書にそってテクスチャーを作成することをおすすめします。

**5. リギング**

骨格の作成とジオメトリへの影響のプロセスをリギングと呼び、使い慣れていれば、以下の多くのプログラムで行うことができます。3Dモデル作成にBipHead、BipRoot（任意）、BipLEye、BipREyeが必須のBlender、Maya、 3D Max、 Modo等。

頭のボーンと目のボーンの座標軸は、必ずZが正面でYが左側になっている必要があります。

目のボーンのZ座標軸は、瞳の真ん中を通らなければいけません。Animazeエディターにインポートすると、この機能によってアバターがカメラ目線になります。

カメラボーンはアバターのリギングとは別に作成されるので、「カメラ」と名前を付けてZがアバターの方を向くようにしてください。そうすると、頭と目がカメラの方を向き、カメラが頭と目の方を向きます。下の写真を参照してください。

![]({{ '/assets/images/pasted_image_0_1_-d3aed8ed.png' | relative_url }}){: width="800" height="376"}

**6. スキニング**

ジオメトリにボーンの影響を与えるプロセスをスキニングと呼びます。頂点ごとの影響の最大値は4で、ペイントの影響を開始できます。

![]({{ '/assets/images/pasted_image_0_2_-59381323.png' | relative_url }}){: width="428" height="421"}

**7. アニメーション**

アニメーションは必ず、アバターの\\Animationsフォルダー内に.fbxフォーマットでエクスポートしてください。

3Dコンポーネントに必須なアニメーションは、下記の一般運動（体の運動）をするものです。

- Idle1 - アバターの細かい動きや呼吸をする、腕が体に近くにある際の基本アニメーションです
- Idle\\_pose - idle1の最初のキーで、この位置から全てのアニメーションが始まります

最初に、アニメーションとブレンドシェイプの命名規則を含む、Animazeの**[アニメーション付録]({{ '/manual/animationappendix/' | relative_url }})**を確認してください。

3Dの体を作成したら、2Dの顔/アニメーションの作成に移ります。 

Live2Dにインプットされた表情のアニメーションと、アバターに必要な体の3Dジオメトリによる頭の回転の作成を行います。つまり、アバター作成プロセスを単純化させるために、笑顔、悲しい表情、目を閉じるといった、単純な表情のアニメーションを作成します。全てのプロセスは2Dアバターの説明書をご覧ください。

.psdファイルをエクスポートするPhotoshop等の編集ソフトウェア で2Dアセットを作成できます。

これが完了すると、ファイルをCubismにインポートし、2Dの説明書にあるパラメーターを使用してアニメーションを作成します。最後のプロジェクトをエクスポートし、ディフューズ・テクスチャー・スロットを使用したエディターにこれをインポートします。 

ヒント 

Photoshopで作成した最初の2Dエレメントを改変するのに必要な法線マップとスペキュラーを作成し、それをCubismに再度インポートすると、ディフューズ・テクスチャーは上書きされますが、別のファイルとして保存されます。この場合、アニメーションを保存して、2Dエレメントのソースのみ変更します。

そうすると、3Dの体に2Dの体を融合させられるようになります。

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
