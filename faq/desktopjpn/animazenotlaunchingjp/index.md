---
layout: page
title: "クリーンな再インストールをするにはどうすれば良いですか？"
source_url: https://www.animaze.us/faq/desktopjpn/animazenotlaunchingjp
---

# クリーンな再インストールをするにはどうすれば良いですか？

アプリに問題が発生して再インストールしたい場合、クリーンな再インストールを行ってください。クリーンな再インストールの手順：

1.SteamからAnimazeをアンインストールします。そのためには、Animazeで右クリックし、「管理」\>「アンインストール」の順にクリックします

![Reinstall Animaze]({{ '/assets/images/01_5-2c01901f.png' | relative_url }} "Reinstall Animaze"){: width="512" height="284"}

2.Steam\\steamapps\\commonフォルダーを開き、Animazeフォルダーを削除します

![Reinstall Animaze]({{ '/assets/images/02_5-ab74f97c.png' | relative_url }} "Reinstall Animaze"){: width="700" height="548"}

3.Animazeを再インストールします

4.Steamを閉じて、管理者権限を使用して再起動します

5.SteamのAnimazeで右クリックし、「プロパティ」 \> 「ローカルファイル」 \> 「ゲームファイルの整合性を確認」の順にクリックします

![Reinstall Animaze]({{ '/assets/images/03_3-1745e33c.png' | relative_url }} "Reinstall Animaze"){: width="800" height="435"}

6 ファイルの確認が終了したら自動的にAnimazeが起動します。

Animazeが起動できない、またはインストールができない場合、ファイアウォールでSteamまたはAnimazeがブロックされていないかを確認してください。さらに、ソフトウェアリスト内でAnimazeを右クリックし、Steamライブラリで「プロパティ」 \> 「ローカルファイル」 \> 「ゲームファイルの整合性を確認」の順にクリックします。その後、起動またはダウンロードを行い、再度起動を試してください。

それでも起動できない場合、原因を調査する必要があります。原因を調査するために、以下のファイルをsupport\[@\]animaze\[.\]usまで送信してください:

- C:\\Program Files (x86)\\Steam\\logs\\runprocess\\_log
- C:\\Program Files (x86)\\Steam\\logs\\installscript\\_log
- C:\\Program Files (x86)\\Steam\\logs\\appinfo\\_log
- Dxdiag: WindowsキーとRキーを押し、「dxdiag」と入力して実行します。表示されるすべての情報をテキストファイルに保存してください。
