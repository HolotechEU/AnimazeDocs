---
layout: page
title: "アバターのテクスチャーをすばやく変更する方法"
source_url: https://www.animaze.us/manual/gettingstarted2djp/jpnmodifytexture
---

# アバターのテクスチャーをすばやく変更する方法

Live2Dにアバターをインポートしたら、PhotoshopやGimpなどの画像エディターでそれを開くことで、そのアバターのテクスチャーを簡単に改変することができます。これは、色をすばやく調整したり、例のようにシャツに小さなバッジを追加したりするときに役立ちます。

より大規模な変更を加える際は、Cubism Editorの使用を推奨します。Cubism Editorにおけるマテリアルの変更の詳細については、[こちら](https://docs.live2d.com/cubism-editor-manual/png-file-export-replacement/) をご覧ください。

アバターを変更し、変更内容をほぼ即座に確認できる最も単純な方法はこちら： 

1. PC上のAnimazeエディターのインストールフォルダーに移動します

![Go to the Animaze Editor install folder on your PC]({{ '/assets/images/1-a81575c2.png' | relative_url }} "Animaze Editor"){: width="549" height="158"}

2. 「Data」のフォルダーに移動して、「Resources」のフォルダーを開きます

![Go to Data folder and open the Resources folder]({{ '/assets/images/2-834165d0.png' | relative_url }} "Animaze Editor"){: width="549" height="128"}

3. アバターのフォルダーを開き、テクスチャーを含む「Hiyori.2048」のフォルダーに移動します（フォルダーはCubismからモデルをエクスポートする際に生成されたものです。詳細については[こちら](https://sites.google.com/a/cybernoids.jp/cubism2_en/modeler/export/moc-export)をご覧ください）。

![Open the avatar’s folder ]({{ '/assets/images/3-bf5a53ae.png' | relative_url }} "Animaze Editor"){: width="549" height="248"}   ![Open the avatar’s folder ]({{ '/assets/images/6-b0cc8552.png' | relative_url }} "Animaze Editor"){: width="549" height="179"}

4. エディターで任意のテクスチャーを開き、絵を描きます

![Open the avatar’s folder  4. Open the texture in the editor of your choice and draw something]({{ '/assets/images/star_texture-9578667b.png' | relative_url }} "Animaze Editor"){: width="1000" height="592"}

                                            Gimpでアバターのテクスチャーに星型を配置する例の抜粋 

5. 編集を終えたら、名前や場所を変更することなく、テクスチャーを保存します（Animazeエディターは自動で変更を検出します）

![Save the texture]({{ '/assets/images/star_text_in_folder-2d649023.png' | relative_url }} "Animaze Editor"){: width="549" height="174"}

6. 上述のように、Animazeエディターが変更を検出し、ファイルの再インポートを求める承認ポップアップが表示されますので、「はい」をクリックします

**![]({{ '/assets/images/7-f513f79b.png' | relative_url }}){: width="1000" height="530"}**

7. 変更を確認するには、「アセット」メニューに移動し、「アバターを読み込む」を選択してください。

![To see the changes, go to the Assets menu and select Load Avatar]({{ '/assets/images/8-c637a7f6.png' | relative_url }} "Animaze Editor"){: width="1000" height="532"}

8. 「更新」ボタンを押し、ヒヨリを探して選択します。

![Hit the Refresh button, then search and select Hiyori.]({{ '/assets/images/9-c7572256.png' | relative_url }} "Animaze Editor"){: width="1000" height="528"}

9. 変更されたアバターが表示されるはずです！

![Display Changes]({{ '/assets/images/10-e0b6cfd3.png' | relative_url }} "Animaze Editor"){: width="1000" height="531"}

10. 作業を終えたら、階層パネルでアバターを保存します

![Save the avatar]({{ '/assets/images/save-1772ff85.png' | relative_url }} "Animaze Editor"){: width="353" height="420"}

完了です！

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
