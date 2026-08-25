---
layout: page
title: "Animazeエディター入門"
source_url: https://www.animaze.us/manual/gettingstarted3djpn/jpn3dgettingstarted
---

# Animazeエディター入門

Animazeエディターは、芸術家、マニア、専門家が、3Dコンテンツ[とLive2Dコンテンツ]({{ '/manual/gettingstarted2d/' | relative_url }})をAnimazeアプリに追加できるようにするオーサリングツールです。

このガイドでは、\[ここでダウンロード\]できる王冠の小道具のソースを使います。3Dモデリングの初心者には、このガイドで説明するように、小道具から始めてアバターに進むのがお勧めです。モデリングとアバター全般のことにあまり慣れていないのであれば、目標によってベストなスタート地点が異なります。比較的単純なやり方で作成できるのは、Live2Dモデルです\[[2Dへのリンク]({{ '/manual/gettingstarted2d/' | relative_url }})\]。 

ですが、最終的に3Dモデルを作成したいのであれば、2Dモデルと3Dモデルでは作成手順がかなり異なるということを知っておく必要があります。3Dモデルを扱うのであれば、小道具から始めてアバターに進むのがお勧めです。

インポートプロセスでは、以下のファイルのフォルダー構造が必須となるため、ご注意ください：

1. .fbxジオメトリ名をフォルダー名と同じにする

2.テクスチャー（.tga、.png、.jpgファイル）をTextures/のフォルダーに入れる

3.骨格のアニメーション（単一の.fbxファイルとしてエクスポート）をAnimations/のフォルダーに入れる 

アセット管理を簡単なものにし、各アセットの役割（アバター、小道具、背景など）をはっきりさせるために、アセット名の頭の部分にアセットの種類を示す接頭辞を付ける単純な命名規則を採用しています。以下の3つはその例です：

\\* avatarName - アバター用 

\\* propName - 小道具用

\\* backgroundName - 背景用

モデルのインポートを開始するには、以下の手順に従ってください：

1. この[リンク](https://s3.amazonaws.com/animaze.us/Animaze+Editor+Sample+Assets.zip)からPropCrownTestのアーカイブをダウンロードして、中身のファイルを展開します。

2. Animazeエディターを開き、アセットへ移動し、3Dオブジェクトをインポートを選択します。

![Animazeエディターを開き、アセットへ移動し、3Dオブジェクトをインポートを選択します ]({{ '/assets/images/1-1d4deef0.png' | relative_url }} "Animazeエディター入門"){: width="1000" height="532"}

3. モデルのジオメトリファイルである.fbxファイルを選択します

![モデルのジオメトリファイルである.fbxファイルを選択します]({{ '/assets/images/2-a8a7e2dc.png' | relative_url }} "Animazeエディター入門"){: width="1000" height="532"}

4. インポートするファイルを選択するウィンドウが表示されます。初めて特定のモデルをインポートする場合、インポートをクリックする前に、すべてのファイルにチェックが入っていることを確認し、ドロップダウンリストからアイテムの種類を選択してください。![About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D]({{ '/assets/images/3-2c02c694.png' | relative_url }} "Animazeエディター入門"){: width="1000" height="534"}Animazeエ5. ディターがファイルをチェックした後、インポート問題のレポートが表示されます。警告システムは骨格のアニメーションをチェックするためのものです。したがって、警告はそれらを使用している場合にのみ適用されます。王冠の例ではアニメーションを使いませんので、警告はすべて無視して構いません。Xを押してウィンドウを消します。

![About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D]({{ '/assets/images/4-edfab249.png' | relative_url }} "About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D"){: width="1000" height="531"}

6.  次に、インポートを行うたびに冗長なログが表示されますが、Okボタンを押して消します。より複雑なモデルを扱う場合は、ログがエラーを教えてくれるため、デバッグに役立ちます。

![About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D]({{ '/assets/images/5-da0eb9b2.png' | relative_url }} "About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D"){: width="1000" height="532"}

7. 小道具をインポートすると、ビューポートに表示されます。階層パネル内のフリーアイテムを開いて、アイテムをクリックします。エディターパネル（右側）に詳細が表示されます

![About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D]({{ '/assets/images/6a-00ea5913.png' | relative_url }} "About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D"){: width="1000" height="534"}

8. エディターパネルのプルダウンメニューから正しいタグを選択します。タグは小道具をどこに取り付けるかをシステムに知らせるためのものなので、正しいタグを選択することが重要です。

![About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D]({{ '/assets/images/6-bc033c43.png' | relative_url }} "About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D"){: width="1000" height="533"}

9. 1. 3D編集ソフトウェアからインポートしたジオメトリは大きすぎたり小さすぎたりすることがあるため、適切な値になるようスケーリングする必要があります。グリッドユニットはメトリックシステムのユニットと同じなので、アイテムをどのくらい大きく（小さく）するかグリッドで測ることができます。

   エディターパネルでは、アイテムのスケールの値を調整することでアイテムのサイズを変更します。グリッドユニットはメトリックシステムのユニットと同じなので、アイテムをどのくらい大きく（小さく）するかグリッドで決めることができます。ここでは、サイズを1.000000から0.100000に下げました。

![About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D]({{ '/assets/images/7-bc033c43.png' | relative_url }} "About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D"){: width="1000" height="533"}

10. これで、王冠が見えないぐらい小さくなったため、カメラビューをリセットする必要があります。階層パネルでPropCrowTestを右クリックして「カメラをリセット」を選択します

![About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D]({{ '/assets/images/8-870d0e16.png' | relative_url }} "About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D"){: width="1000" height="529"}

11. 帽子がたいていのアバターに合うようにしたい場合は、小道具にスケーリングアニメーションが必要になります。エディターパネルでカスタマイズオプションを選択して、タブを開きます

![About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D]({{ '/assets/images/9-7181546e.png' | relative_url }} "About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D"){: width="1000" height="530"}

12. 「新しいカスタマイズオプションを追加」をクリックして、「アニメーションのカスタマイズ」を選択し、Okボタンを押します![About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D]({{ '/assets/images/10-e86ccbc0.png' | relative_url }} "About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D"){: width="1000" height="532"}![About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D]({{ '/assets/images/11-c37cd7af.png' | relative_url }} "About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D"){: width="1000" height="532"}

13. 「デフォルト値を計算」ボタンをクリックして、スケーリングアニメーションの中央値を計算します。ここで使用するスケーリングアニメーションはアニメーションタイムラインの中央付近にデフォルトポーズが備わっていますが、厳密な値を得るために、「デフォルト値を計算」ボタンでアニメーションを1000個のサンプルで評価し、各サンプルポーズをデフォルトポーズとチェックすることで、正確に合わせることを試みています。

デフォルトポーズと合うアニメーションのパーセンテージが見つかったら、値のテキストボックスに入力されます。その後、ウィンドウを閉じます。

![About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D]({{ '/assets/images/12-f2169eda.png' | relative_url }} "About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D"){: width="1000" height="530"}

14. さあ、追加されたスケーリングアニメーションがどのように動くか見てみましょう。これをデバッグするため、ツールに行き、カスタマイズ・デバッガを選択します。

![About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D]({{ '/assets/images/13-cdec7683.png' | relative_url }} "About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D"){: width="1000" height="535"}

15. スライダーを左右にクリック＆ドラッグし、アニメーションの動きを確認します。元に戻すボタンをクリックし、正しい値に設定しなおし、ウィンドウを閉じます。

![About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D]({{ '/assets/images/scale_propx-5c2a2aa1.gif' | relative_url }} "About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D"){: width="1000" height="486"}

16. 作業を追えたら、階層パネルにアイテムを保存します。保存せずにAnimazeエディターを終了すると、作業結果がすべて失われます。

![About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D]({{ '/assets/images/saveItem-50c126cd.png' | relative_url }} "About Animaze by Facerig \| 3D Avatars \| How to Make an Avatar 3D"){: width="1000" height="531"}

了です。小道具をインポートできました。

### 3Dオブジェクト入門

- [Animazeとは何か？]({{ '/manual/gettingstarted3djpn/jpnanimaze3d/' | relative_url }})
- [Animazeエディター入門]({{ '/manual/gettingstarted3djpn/jpn3dgettingstarted/' | relative_url }})
- [Animazeのデスクトップアプリケーションでバンドルをインポート]({{ '/manual/gettingstarted3djpn/jpnimporttowindows/' | relative_url }})
- [3Dアバターのインポート方法]({{ '/manual/gettingstarted3djpn/jpnimportavatar3d/' | relative_url }})
- [アバターにカスタマイズオプションを追加する方法]({{ '/manual/gettingstarted3djpn/jpncustomizationoptions3d/' | relative_url }})
- [アバターの詳細を変更する方法（アイコン、説明、名前）]({{ '/manual/gettingstarted3djpn/jpnchangeavatardetails3d/' | relative_url }})
- [小道具の.avatarファイルをiOSアプリのAnimaze Avatarに送信する方法（WindowsにおいてAnimazeエディターを経由）]({{ '/manual/gettingstarted3djpn/jpnsendprop3d/' | relative_url }})
- [小道具の.avatarファイルをiOSアプリのAnimazeに送信する方法（WindowsにおいてiTunesを経由）]({{ '/manual/gettingstarted3djpn/jpnsendprop3dw/' | relative_url }})
- [小道具の.avatarファイルをiOSアプリのAnimaze Avatarに送信する方法（MacにおいてFinderを経由）]({{ '/manual/gettingstarted3djpn/jpnsendprop3df/' | relative_url }})
- [アニメーション化されたエモートの追加方法]({{ '/manual/gettingstarted3djpn/jpnemotes/' | relative_url }})
- [アバターにフレームをつける方法]({{ '/manual/gettingstarted3djpn/jpnframeavatar3d/' | relative_url }})
- [.avatarファイルをiOSアプリのAnimaze Avatarに送信する方法（WindowsにおいてAnimazeエディターを経由）]({{ '/manual/gettingstarted3djpn/jpnsendavatar3d/' | relative_url }})
- [.avatarファイルをiOSアプリのAnimazeに送信する方法（WindowsにおいてiTunesを経由）]({{ '/manual/gettingstarted3djpn/jpnsendavatar3dw/' | relative_url }})
- [.avatarファイルをiOSアプリのAnimaze Avatarに送信する方法（MacにおいてFinderを経由）]({{ '/manual/gettingstarted3djpn/jpnsendavatar3df/' | relative_url }})
- [アバターの特殊アクションを設定する方法]({{ '/manual/gettingstarted3djpn/jpnavatarspecialactions/' | relative_url }})
- [背景（スカイボックス）のインポート方法]({{ '/manual/gettingstarted3djpn/jpnimportbackground/' | relative_url }})
- [背景の.avatarファイルをiOSアプリのAnimaze Avatarに送信する方法（WindowsにおいてAnimazeエディターを経由）]({{ '/manual/gettingstarted3djpn/jpnsendbackground/' | relative_url }})
- [背景の.avatarファイルをiOSアプリのAnimazeに送信する方法（WindowsにおいてiTunesを経由）]({{ '/manual/gettingstarted3djpn/jpnsendbackgroundw/' | relative_url }})
- [背景の.avatarファイルをiOSアプリのAnimaze Avatarに送信する方法（MacにおいてFinderを経由）]({{ '/manual/gettingstarted3djpn/jpnsendbackgroundf/' | relative_url }})
