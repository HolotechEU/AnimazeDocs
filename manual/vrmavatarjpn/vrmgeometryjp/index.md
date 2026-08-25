---
layout: page
title: "形状/マテリアル/テクスチャー"
source_url: https://www.animaze.us/manual/vrmavatarjpn/vrmgeometryjp
---

# 形状/マテリアル/テクスチャー

# 

Animazeのインポートプロセスでは、glTFプリミティブごとに1つのメッシュが生成されます。 

マテリアルがテクスチャーとして使用する画像は、ディスク上のファイルとして書き出され、既存の色情報でプリマルチプライドされます。.vrmファイル内の使用されない画像は無視されます。単一の色彩値を使用するテクスチャーには、指定した色を使用した、4x4のサイズの画像が生成されます。

現在の制限事項は以下のとおりです。

- サポートされるUVスペースは1つのみ
- サポートされる頂点の色は1色のみ
- ブレンドシェイプの法線または接線が欠けている場合は生成されない
- ブレンドシェイプマテリアル値は無視される（ブレンドシェイプはシェーディングに影響しません）
- Phongのライティングモデルで.VRM形式またはMToonシェーダーのみがサポートされる（サポートされていないシェーダーではAnimazeのデフォルトが使用されます）
- サポートされる画像形式：PNG、BMP、JPEG、TGA
- テクスチャーの変形はサポートされない

### Animazeの.VRMモデル技術説明書

- [.VRM全般の手順]({{ '/manual/vrmavatarjpn/vrmgeneraljp/' | relative_url }})
- [形状/マテリアル/テクスチャー]({{ '/manual/vrmavatarjpn/vrmgeometryjp/' | relative_url }})
- [アニメーションとリターゲティング]({{ '/manual/vrmavatarjpn/jpnvrmanimations/' | relative_url }})
- [物理演算]({{ '/manual/vrmavatarjpn/vrmphysicsjp/' | relative_url }})
- [パーフェクトシンク機能を.VRM形式のアバターに追加するためのガイド]({{ '/manual/vrmavatarjpn/vrmperfectsyncjp/' | relative_url }})
- [VRMモデルをAnimazeにインポートする方法]({{ '/manual/vrmavatarjpn/vrmimportjp/' | relative_url }})
