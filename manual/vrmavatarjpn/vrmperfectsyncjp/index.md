---
layout: page
title: "パーフェクトシンク機能を.VRM形式のアバターに追加するためのガイド"
source_url: https://www.animaze.us/manual/vrmavatarjpn/vrmperfectsyncjp
---

# パーフェクトシンク機能を.VRM形式のアバターに追加するためのガイド

Animazeにはアニメーションの標準が多数あり、さまざまな形式のモデル（fbx、vrm、glb）のアニメーションマッピングのトラッキングを適切にサポートしています。これらの標準は、一連の骨格のアニメーション、ブレンドシェイプ（モーフターゲット）、ブレンドシェイプのグループ（vrm固有）、および骨格の関節（プロシージャルなアニメーションに使用）によって定義されます。

Animazeにインポートされた.VRM形式のモデルでは、デフォルトでVRoidアニメーションの標準が使用されますが、これは変更することができます。このガイドでは、.vrm形式モデルのアニメーションの標準を従来のVRoid標準からパーフェクトシンク標準に変更する方法について説明します。

パーフェクトシンクアニメーションの標準には、ARKitの顔モジュールシェイプと直接互換性のある52の顔の表情のブレンドシェイプが必要です（完全なリストは[こちら](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation)）。パーフェクトシンクの標準は、.vrmモデルに合わせてカスタマイズされているため、モデルは.vrmルールに従う必要があり、ブレンドシェイプはVRMの表情またはブレンドシェイプグループを経由してアクセスされます。.VRMモデルをAnimazeにインポートして使用する方法の詳細については、「Animazeの.VRMモデル技術説明書」\[add link\]を参照してください。

アニメーションの標準をVRoidからパーフェクトシンクに変更するには、いくつかの簡単な手順で実行できます：

1. .vrmモデルをインポートします。
2. Animazeのアイテムファイルが保存されているリソースフォルダーにアクセスします（通常、リソースフォルダーは\<steamInstallDir\>\\steamapps\\common\\Animaze Editor\\Data\\Resources\\にあります）。アイテムのフォルダーと設定ファイル「アバター名\\アバター名.item」を見つけます。
3. 「アバター名.item」ファイルをテキスト・エディターで開き、"AnimationStandard" を変更：「VRoid\\_1\\_0」の文字列を「AnimationStandard」に変更：「PerfectSync\\_1\\_0」、
4. ファイルを保存し、左にあるエディターの階層パネルから、アバターを右クリックして「再読み込み」ボタンを選択することで、アバターを再読み込みします。再読み込みする前にアイテムを保存しないでください。エディターの外部で.itemファイルに加えられた変更が上書きされてしまいます。
5. これで、アバターの操作パネルでアニメーションをテストできるようになります。
6. アバターはバンドルしてAnimazeデスクトップで使用することができます。

### Animazeの.VRMモデル技術説明書

- [.VRM全般の手順]({{ '/manual/vrmavatarjpn/vrmgeneraljp/' | relative_url }})
- [形状/マテリアル/テクスチャー]({{ '/manual/vrmavatarjpn/vrmgeometryjp/' | relative_url }})
- [アニメーションとリターゲティング]({{ '/manual/vrmavatarjpn/jpnvrmanimations/' | relative_url }})
- [物理演算]({{ '/manual/vrmavatarjpn/vrmphysicsjp/' | relative_url }})
- [パーフェクトシンク機能を.VRM形式のアバターに追加するためのガイド]({{ '/manual/vrmavatarjpn/vrmperfectsyncjp/' | relative_url }})
- [VRMモデルをAnimazeにインポートする方法]({{ '/manual/vrmavatarjpn/vrmimportjp/' | relative_url }})
