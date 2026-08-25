---
layout: page
title: "ワークショップでアバターをアップロードする方法"
source_url: https://www.animaze.us/faq/desktopjpn/uploadonsteamworkshopjp
---

# ワークショップでアバターをアップロードする方法

次の手順でアバターと小道具をSteamワークショップにアップロードします。この例では、Animazeエディターを使用して作成したLive2Dアバターをワークショップに追加します。

1.管理者権限でSteamを開きます。そのためには、デスクトップのSteamアイコンで右クリックし、「管理者権限で実行する」を選択します

![]({{ '/assets/images/01_4-ea10822c.png' | relative_url }}){: width="332" height="269"}

2.SteamライブラリーからAnimazeエディターを開きます。ライブラリーにAnimazeエディターが表示されていない場合、カテゴリーメニューの「ツール」のチェックボックスがオンになっているかを確認してください。

![]({{ '/assets/images/02_4-d464b789.png' | relative_url }}){: width="402" height="294"}

3.Animazeエディターで「アセット」をクリックし、2Dアバターを追加する場合は「[Live2Dアバターをインポート]({{ '/manual/gettingstarted2d/gettingstarted/' | relative_url }})」をクリックし、[3Dアバター]({{ '/manual/gettingstarted3d/importavatar3d/' | relative_url }})または[小道具]({{ '/manual/gettingstarted3djpn/jpn3dgettingstarted/' | relative_url }})を追加する場合は「3Dオブジェクトをインポート」をクリックします

![]({{ '/assets/images/03_2-bd0e7bcf.png' | relative_url }}){: width="418" height="336"}

4.ポップアップウインドウでアバターを探します(今回はLive2Dアバターをアップロードします)。

5.アバターのmodel3.jsonファイルをダブルクリックし、エディターに読み込みます

![]({{ '/assets/images/04-dd188002.png' | relative_url }}){: width="512" height="238"}

ステップ3から5は、エディターで初めてアバターをインポートしたり、設定したりする場合にのみ実行してください。 

6.「インポート」をクリックします。Animazeエディターにアバターが表示されます

![]({{ '/assets/images/05-6156dd27.png' | relative_url }}){: width="534" height="492"}

7.「アセット」 \> 「アバターを読み込む」の順にクリックし、先ほどエディターにインポートしたアバターを見つけます

![]({{ '/assets/images/06-37ac55c3.png' | relative_url }}){: width="452" height="272"}

8.画面の左側の階層パネルで、アバターで右クリックし、「バンドル」を選択します。

1. バンドル済みのアバターを保存するフォルダーを選択します。

![]({{ '/assets/images/07-37ac55c3.png' | relative_url }}){: width="452" height="272"}

9.Animazeエディターで、「ツール」 \> 「Steamワークショップアップローダー」の順にクリックします

![]({{ '/assets/images/08-22a05e12.png' | relative_url }}){: width="370" height="278"}

1. SteamファイルIDフィールドは「0」のままにします。「0」は新しいアバターを追加する時に使用します。既存のアバターをアップデートする場合は、このフィールドに「0」の代わりにアバターIDを入力します。アバターIDはページリンクから見つけることができます(https://steamcommunity.com/sharedfiles/filedetails/?id\=1111111111)。
2. タイトル:アバターの名前を入力します
3. 説明:アバターの説明を入力します

![]({{ '/assets/images/09-2701165a.png' | relative_url }}){: width="396" height="244"}

10.バンドルフィールド: ポップアップウインドウで「参照」をクリックして、バンドル済みのアバターを探します

![]({{ '/assets/images/11-33d6c954.png' | relative_url }}){: width="383" height="246"}

![]({{ '/assets/images/10-5aaed4dd.png' | relative_url }}){: width="654" height="238"}

11.プレビューフィールド: ワークショップに表示するプレビューアイコンを指定します

![]({{ '/assets/images/11-33d6c954.png' | relative_url }}){: width="383" height="246"}

12.「アイテムをアップロード」をクリックします。クリックするとAnimazeアプリが開きます。または、すでにAnimazeが開いている場合は、Animazeアプリを操作できるようになります。

      プロのアドバイス:Animazeへのアップロードの進捗状況を確認できます。

13.アップロードが完了すると、インポートを確認するポップアップウインドウがAnimazeエディターで表示されます。

重要!Steamでは、新規アップロードしたアバターを自動的に一般公開します。アバターを非公開にしたい場合や、友達にのみ公開したい場合には、ワークショップのプライバシー設定を変更してください。エディターを使用してアップデートする度に、Steamによって、ワークショップ内のアバターのプライバシー設定が一般公開に再度設定されます。
