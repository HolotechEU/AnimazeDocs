---
layout: page
title: "アバターの詳細を変更する方法（アイコン、説明、名前）"
source_url: https://www.animaze.us/manual/gettingstarted2djp/jpnchangeavatardetails
---

# アバターの詳細を変更する方法（アイコン、説明、名前）

アバターのアイコンはアバターギャラリーにあります。アバターの名前と説明を見るには、アバターをギャラリーでプレビューしたときに右上端に表示される「情報」ボタンをクリックします（下にあるモバイルアプリのアバターギャラリーの画像をご覧ください）。アイコン、名前、説明はエディターパネルで変更することができます。 

![Animaze iOS app]({{ '/assets/images/12-843f23c0.png' | relative_url }} "Animaze iOS app"){: width="200" height="424"}   ![Animaze Editor]({{ '/assets/images/1-3c0483c8.png' | relative_url }} "Animaze Editor"){: width="800" height="425"}

アバターのアイコンを変更する手順：

1. PC上のAnimazeエディターのインストールフォルダーに移動します

![Go to the Animaze Editor install folder on your PC]({{ '/assets/images/2-a81575c2.png' | relative_url }} "Animaze Editor"){: width="500" height="144"}

                                            Animazeエディターのフォルダー 

2. 「Data」のフォルダーに移動します

![Go to the Animaze Editor install folder on your PC 2. Go to Data folder]({{ '/assets/images/3-834165d0.png' | relative_url }} "Animaze Editor"){: width="500" height="117"}

                                                       「Data」のフォルダー 

3. 「Resources」のフォルダーを開きます

![Open Resource Folder]({{ '/assets/images/4-bf5a53ae.png' | relative_url }} "Animaze Editor"){: width="500" height="226"}

                                              「Resources」のフォルダー 

4. アバターのフォルダーを開きます

![Open Resource Folder 4. Open the avatar's folder]({{ '/assets/images/5-49d65eb2.png' | relative_url }} "Animaze Editor sources"){: width="500" height="139"}

                                                     「Model」のフォルダー 

5. 「icon\\_avatarname.png」という名前のファイルがあります。インポート時にエディターが自動で作成したファイルです。

![Change the icon for the avatar in the app and Editor. ]({{ '/assets/images/6-ba4cc88f.png' | relative_url }} "Animaze Editor"){: width="500" height="203"}

                                                      アイコンのファイル 

このファイルを好きなファイルで置き換えたり、改変したりすることで、アプリとエディターにおけるアバターのアイコンを変更することができます。 

適切に動作させるには、命名規則（icon\\_theavatarname）、\\*.pngという画像の形式、スクエアサイズを維持する必要があります。

6. Animazeエディターが変更を検出し、再インポートを求めてきます。「はい」をクリックします

**![ Animaze Editor will detect the changes made and will ask you to reimport. Click Yes]({{ '/assets/images/7-c1645930.png' | relative_url }} "Animaze Editor"){: width="1000" height="533"}**

                                                                            変更の検出 

7. 変更を確認するには、「アセット」メニューに移動し、「アバターを読み込む」を選択してください。

![To see the changes, go to the Assets menu and select Load Avatar. ]({{ '/assets/images/8-c637a7f6.png' | relative_url }} "Animaze Editor"){: width="1000" height="532"}

8. 「更新」ボタンを押し、ヒヨリを探して選択します

![Hit the Refresh button, then search and select Hiyori.]({{ '/assets/images/9-c7572256.png' | relative_url }} "Animaze Desktop"){: width="1000" height="528"}

      9.アバターが新しいアイコンとして表示されます

![ The avatar should display the new icon]({{ '/assets/images/10-5650227e.png' | relative_url }} "Animaze Editor"){: width="1000" height="532"}

## アバターの名前を変更する手順：

1. Animazeエディターを開きます
2. エディターパネルで、ニックネームのフィールドに好きな名前を入力します。この名前はモバイルアプリで表示されます。人間が読みやすい名前にする（ランダムな文字列や数字は避ける）ことをオススメします。なお、使用できるのはアルファベットと特殊文字です。

![]({{ '/assets/images/image019-fa5d8784.png' | relative_url }}){: width="1000" height="533"}

## アバターの説明を変更する手順：

1 Animazeエディターを開きます![Change the avatar’s Description]({{ '/assets/images/description-1a674437.png' | relative_url }} "Animaze Editor"){: width="1000" height="531"}   
2. エディターパネルで、説明のフィールドに好きな説明を入力します。ここでは、あなたが想像するアバターのバックストーリーや、専門的な詳細を入力したり、空白のままにしたりすることができます。

![Change the avatar’s Description]({{ '/assets/images/save-fc4d4cc8.png' | relative_url }} "Animaze Editor"){: width="1000" height="529"}

3. 名前、説明、その他の詳細などの変更を終えたら、階層パネルでアイテムを保存します。

![]({{ '/assets/images/image023-d78338d0.png' | relative_url }}){: width="374" height="483"}

                 アイテムを保存

「アイテムの保存形式」を選択すると、エディターが、新しいバージョンのアイテムを作成し、読み込みます。

すなわち、「アイテムの保存形式」で、「Hiyori\\_version2」として保存すると、「Resources」のディレクトリに、オリジナルのバージョンとは別のフォルダーが新しいアイテムとして作成されます。 

アプリのアバターギャラリーの右上にある「情報」ボタンを押すと、アバターをAnimazeアプリに送って変更を確認することができます。

![Animaze ios app preview]({{ '/assets/images/12-843f23c0.png' | relative_url }} "Animaze ios app preview"){: width="200" height="424"}     ![Animaze ios app preview]({{ '/assets/images/13-426dcf24.png' | relative_url }} "Animaze ios app preview"){: width="200" height="422"}

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
