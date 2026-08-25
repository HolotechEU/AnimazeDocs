---
layout: page
title: ".VRM全般の手順"
source_url: https://www.animaze.us/manual/vrmavatarjpn/vrmgeneraljp
---

# .VRM全般の手順

AnimazeでVRMモデルのインポートがサポートされるようになりました。Animazeで.VRMモデルを使用するには、.VRMモデルファイルを準備し、Animazeエディター経由でインポートし、Animazeエディターの.avatarファイルにある新しくインポートしたアバターをバンドルし、その後Animazeアプリ（WindowsまたはiOS）に.avatarファイルをインポートする必要があります。

VRMのインポート手順ができる限りシンプルで合理化されたものに設計されている一方で、.FBX形式のモデルで使用するすべての設定ツールやカスタマイズツールはAnimazeエディターで提供されています。

.VRM形式と.FBX形式のモデルの主な違いは以下の通りです。

1. VRM形式のモデルには、Unityベースのアプリケーション（MToon）でのシェーディングのレプリケーションを可能にするために、調整済みのカスタムマテリアルがあります。
2. VRM形式のモデルには、Animazeリターゲティングシステムで使用されるカスタム調整されたアニメーションの標準（VRoidとパーフェクトシンク）があります。デフォルトのアニメーションの標準はVRoidで、そのすべての要件はアニメーション＆リターゲティングセクションに表示されます。
3. VRM形式のモデルには、UniVRMによって実装された物理演算システムをエミュレートするカスタム調整された物理演算システムがあります。

VRoidサンプルアバターのウェブサイト、またはSteamのVRoid StudioアプリケーションからのVRoidサンプルモデルに基づいて、インポートプロセスが開発、最適化されているため、VRoidのVRMモデルの仕様に準拠することが強く推奨されています。

- VRMの技術仕様へのリンク: <https://github.com/vrm-c/vrm-specification/blob/master/specification/0.0/README.md>
- SteamのVRoid Studioへのリンク: [https://store.steampowered.com/app/1486350/VRoid\\_Studio\\_v0121/](https://store.steampowered.com/app/1486350/VRoid_Studio_v0121/)
- VRoidサンプルモデルへのリンク: <https://vroid.pixiv.help/hc/en-us/sections/360002889853--Sample-Models>

Animazeでは、VRMモデルでサポートされる機能のサブセットが実装されています。各セクションで詳細を確認してください。

ヒント:Blenderやその他のソフトウェアで、すでにある\\*.vrm/\\*.glbフォーマットのアバターを改変する必要がある場合（ヘッドホンやその他のアクセサリを追加）、それを最初にインポートした時と同じフォーマットでエクスポートしてください。特定のフォーマットに合う協定を考慮にいれてください。

### Animazeの.VRMモデル技術説明書

- [.VRM全般の手順]({{ '/manual/vrmavatarjpn/vrmgeneraljp/' | relative_url }})
- [形状/マテリアル/テクスチャー]({{ '/manual/vrmavatarjpn/vrmgeometryjp/' | relative_url }})
- [アニメーションとリターゲティング]({{ '/manual/vrmavatarjpn/jpnvrmanimations/' | relative_url }})
- [物理演算]({{ '/manual/vrmavatarjpn/vrmphysicsjp/' | relative_url }})
- [パーフェクトシンク機能を.VRM形式のアバターに追加するためのガイド]({{ '/manual/vrmavatarjpn/vrmperfectsyncjp/' | relative_url }})
- [VRMモデルをAnimazeにインポートする方法]({{ '/manual/vrmavatarjpn/vrmimportjp/' | relative_url }})
