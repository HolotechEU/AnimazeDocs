---
layout: page
title: "アバターにカスタマイズオプションを追加する方法"
source_url: https://www.animaze.us/manual/hybriddocjpn/jpnhybridcustomization
---

# アバターにカスタマイズオプションを追加する方法

提供されているAvatarFrogTestのアバターには、色やプロポーションなどのカスタマイズオプションという利点があります。以下ではその追加方法やデバッグ方法を学び、Animazeアプリでアバターの色やサイズをカスタマイズしたり、小道具を追加したりできるようになっていただきます。 

このテーマの詳細については、Animazeエディターマニュアルの、

それでは、始めましょう。

1. エディターパネルでカスタマイズオプションをクリックしてタブを開き、「新しいカスタマイズオプションを追加」ボタンを押します

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image001-e559b3c6.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

2. 追加したいカスタマイズの種類（今回は「色」）を選択し、OKをクリックします ![追加したいカスタマイズの種類（今回は「色」）を選択し、OKをクリックします ]({{ '/assets/images/image003-d1bdd233.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

3. オプションがエディターパネルに追加されますので、それにテクスチャーを割り当てる必要があります。「色のカスタマイズ」タブをクリックして開き、「カラーマスク」ボックスをクリックし、アセットライブラリーからAvatarFrogTest\\_Body\\_CM2のテクスチャーを選択します

![オプションがエディターパネルに追加されますので、それにテクスチャーを割り当てる必要があります。「色のカスタマイズ」タブをクリックして開き、「カラーマスク」ボックスをクリックし、アセットライブラリーからAvatarFrogTest\\_Body\\_CM2のテクスチャーを選択します ]({{ '/assets/images/image005-1fae9f54.png' | relative_url }}){: width="800" height="426"}

4. カスタマイズされたベーステクスチャーでも同じ操作を繰り返し、AvatarFrogTest\\_Body\\_CSTMのテクスチャーを選択します。

![「マテリアルをターゲティング」を選択します。ここでは、「体」です。]({{ '/assets/images/image007-41e0b983.png' | relative_url }} "Animaze by Facerig"){: width="800" height="429"}

5. 「マテリアルをターゲティング」を選択します。ここでは、「体」です。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image009-7972c9b0.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

6. カスタマイズ・タグのドロップダウンリストでクリックして、「肌」のタグを設定します。このタグは、iOSアプリがカスタマイズオプションをグループ分けし、目、肌、髪などの分かりやすいカテゴリーに分類するのに役立ちます。

![]({{ '/assets/images/image011-72d1e958.png' | relative_url }}){: width="350" height="400"}

7. カラーマスクでは、アバターに1つ以上の色を追加することができます。3つのカラーチャンネルから成っており、機能させるにはそれらを追加する必要があります。「チャンネルマスクを追加」ボタンをクリックして、この手順を開始します。チャンネルターゲットのウィンドウが表示されますので、まず、赤チャンネルを選択します。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image013-0685c8d6.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

8. チャンネルがエディターパネルに追加されますので、それに色と正しいタグを割り当てる必要があります。赤チャンネルのタブを開き、カラーボックスをクリックして、カラーピッカーのウィンドウから新しい色を選択します。選択したら、OKを押します。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image015-00a97025.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

9. カスタマイズ・タグのドロップダウンリスト9.でクリックして、「肌」のタグを設定します。このタグは、iOSアプリがカスタマイズオプションをグループ分けし、目、肌、髪などの分かりやすいカテゴリーに分類するのに役立ちます。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image017-4f77bb0c.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

10.「チャンネルマスクを追加」ボタンを再びクリックして、緑チャンネルと青チャンネルを追加し、この作業をそれぞれ繰り返します。

11. それでは、アニメーションのカスタマイズを追加しましょう。エディターパネルからカスタマイズオプションを開き、アニメーションタブに行き、追加ボタンをクリックします。 

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image019-da3524dd.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

12. 新たに追加されたカスタマイズを開いて「参照」ボタンをクリックし、.fbxファイルが入っているソースフォルダーを見つけ、アニメーションフォルダーを開き、ModifyProportions\\_Headのアニメーションを選択します。   
  
ソースフォルダーの場所と名前は保存場所とフォルダーに付けた名前により異なりますので、ご注意ください。フォルダーのデフォルト名は「AvatarFrogTest」です。ソースフォルダーはアセットフォルダー（\\Holotech\\Animaze Editor\\Data\\Assets）に完全にコピーされるため、このフォルダーでソースを簡単に見つけられます。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image021-f11ac0d3.png' | relative_url }} " Animaze by Facerig \| 3D Avatars "){: width="800" height="424"}

13. 「デフォルト値を計算」ボタンをクリックして、スケーリングアニメーションの中央値を計算します。ここで使用するスケーリングアニメーションはアニメーションタイムラインの中央付近にデフォルトポーズが備わっていますが、厳密な値を得るために、「デフォルト値を計算」ボタンでアニメーションを1000個のサンプルで評価し、各サンプルポーズをデフォルトポーズとチェックすることで、正確に合わせることを試みています。デフォルトポーズと合うアニメーションのパーセンテージが見つかったら、値のテキストボックスに入力されます。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image023-d17c7738.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

14. カスタマイズ・タグのドロップダウンリストでクリックして、「頭」のタグを設定します。このタグは、 Animazeアプリがカスタマイズオプションをグループ分けし、目、肌、髪などの分かりやすいカテゴリーに分類するのに役立ちます。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image025-05316d25.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

15. アバターには小道具のボーンも多少含まれており、帽子や眼鏡、ヒゲをそこに追加することができます。カスタマイズオプションウィンドウの全般タブで「利用可能な添付スロットを検出」ボタンをクリックします。こうすると、現在のウィンドウの添付タブに、小道具オプションが追加されます。![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image027-ec8caf03.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}

16. 添付タブで各小道具のカスタマイズを開いてそれぞれ（帽子、ヒゲ、眼鏡）に対応するタグを設定し、システムがそれらを認識して使用時にタブに従って小道具を取り付けられるようにします。下記のように、各小道具オプションに対してそれぞれ行ってください。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image029-7090894d.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

![]({{ '/assets/images/image031-51ed74c0.png' | relative_url }}){: width="800" height="425"}

これで使用可能なカスタマイズをすべて追加し終えましたので、デバッガーを使って動作を確認しましょう。

17.「ツール」メニューに移動し、「カスタマイズ・デバッガー」を選択します。フローティング・ウィンドウが表示されます。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image033-ca19bf0c.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="427"}

18. デバッガーの「色」のタブで置き換えたい肌の色を選択し、カラーピッカーで色を選択して、結果に問題がなければOKを押します。このデバッガーの「保存」と「元に戻す」ボタンで新しい色を保存することも、前の色に戻すこともできます。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image035-0128336f.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="426"}

19. デバッガーの「アニメーション」タブをクリックしたままマウスを左右に動かすことで、アバターの頭のサイズを変更できます。このデバッガーの「保存」と「元に戻す」ボタンで新しいサイズを保存することも、前のサイズに戻すこともできます。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image037-69085bbd.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="425"}デバッガーの「添付」タブで試したい帽子の小道20. 具をクリックして、ビューポートでアバターを見てみましょう。 ![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image039-ef657c17.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="424"}

21. 色タブへ行き、カスタマイズのプレビューのボックスからチェックをはずし、ウィンドウを閉じます。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image041-b797b059.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="427"}

ご注意いただきたいのは、カスタマイズ・デバッガーを閉じると、保存していないすべてのデータが失われ、アバターの状態、色、サイズが、カスタマイズオプションでテクスチャーの追加を追えたときのものに戻ってしまうということです。 

22. 作業を追えたら、階層パネルにアイテムを保存します。保存せずにAnimazeエディターを終了すると、作業結果がすべて失われます。

![Learn how to use Animaze by Facerig \| 3D Avatars ]({{ '/assets/images/image043-c1475955.png' | relative_url }} "Animaze by Facerig \| 3D Avatars "){: width="800" height="427"}

このテーマの詳細については、Animazeエディターマニュアルの、[「カスタマイズオプション」のセクション]({{ '/manual/gettingstarted3d/customizationoptions3d/' | relative_url }})でご覧いただけます。

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
