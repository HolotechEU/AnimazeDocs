---
layout: page
title: "あなた自身の2Dアバターを作成"
source_url: https://www.animaze.us/manual/gettingstarted2djp/jpncreateyourown
---

# あなた自身の2Dアバターを作成

あなた自身の2Dアバターを作成するには、Live2D Cubism Editorが必要です。Live2D Cubism Editorは、[こちら](https://www.live2d.com/en/download/cubism/)から無料でダウンロードすることができます。Live2Dは、エディターをインストールした全員を対象として、プロバージョンの42日間無料トライアルを提供しています。42日が経過すると、アップグレードしない限り、プロバージョンが自動的に無料バージョンに切り替わります（アップグレードする際には、クレジットカードの情報を入力する必要があります）。 

Live2Dは外部パートナーです。同社のソフトウェアと製品の詳細については[こちら](https://www.live2d.com/about/)を、基本ライセンスとプロライセンスの違いについては[こちら](https://www.live2d.com/en/comparison/)をご覧ください。 

Cubism Editorでは.psd形式のファイルが必要です。そのため、モデルを作成するには、この形式でエクスポートすることのできるソフトウェア（Photoshop、Krita、Gimpなど）が必要になります。

[こちら](https://www.youtube.com/watch?v=Z-GxdkXNroI&list=PLqbLt-S6_fh7pxcasSMzeDjc9K5KPWE9H)では、Cubismで作業する際の手引きとなるとても便利なミニチュートリアルのリストを確認することができます。また、マニュアルは[こちら](https://docs.live2d.com/cubism-editor-tutorials/top/)にあります。ガイドはとても役に立つため、私たち自身もしばしば参考にしています！ 

まずは[こちらのチュートリアル](https://www.youtube.com/watch?v=Z-GxdkXNroI&list=PLqbLt-S6_fh7pxcasSMzeDjc9K5KPWE9H&index=1)から始めて、Cubismに必要なファイルを用意しましょう。 

[インポート用のPSD作成規則](https://docs.live2d.com/cubism-editor-manual/divide-the-material/)をご覧ください。最も重要な規則：

![Photoshop]({{ '/assets/images/image002-301753cf.png' | relative_url }} "Photoshop"){: width="234" height="609"}

例えば、目には複数のレイヤー（上まぶた、下まぶた、虹彩、瞳孔など）が必要になります。 

各パーツを別個にアニメ化する方が簡単です。そうすれば、問題が発生した場合でも、全体のジオメトリに影響を及ぼすことなく、1つのパーツに問題を特定することができます。

モデルのすべてのテクスチャーはテクスチャーアトラスにあり、Cubism内で編集/置き換えすることができます。詳細については、[こちら](https://docs.live2d.com/cubism-editor-manual/texture-atlas-edit/?locale=en_us)をご覧ください。 

モデルがCubismで完成したら、Animazeエディター用に\\*.moc3形式でファイルを[エクスポート](https://docs.live2d.com/cubism-editor-manual/export-moc3-motion3-files/)します。 

Cubism Editorで「ファイル」に移動し、「ランタイム用にエクスポート」、「moc3ファイルとしてエクスポート」の順に選択します。

![In Cubism editor go to File, choose Export For Runtime and select Export as moc3 file. ]({{ '/assets/images/image004-03b048f0.png' | relative_url }} "Runtime"){: width="409" height="358"}

            Cubism Editorからの抜粋――ファイルのエクスポート

この操作により、Animazeエディターにモデルをインポートするために必要なファイルが生成されます。 

![This action will generate the files needed to import your model in Animaze Editor. ]({{ '/assets/images/image006-bbd3fddc.png' | relative_url }} "Import avatar"){: width="459" height="220"}

                                       Cubism Editorで生成されたファイル 

ヒント 

Photoshopで作成した最初の2Dエレメントを改変するのに必要な法線マップとスペキュラーを作成し、それをCubismに再度インポートすると、ディフューズ・テクスチャーは上書きされますが、別のファイルとして保存されます。この場合、アニメーションを保存して、2Dエレメントのソースのみ変更します。

完了です！ 

これで、自分のLive2Dモデルを作成する方法がわかりましたので、[あなたのモデルをAnimazeエディターにインポートすることができます。]({{ '/manual/gettingstarted2d/gettingstarted/' | relative_url }})

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
