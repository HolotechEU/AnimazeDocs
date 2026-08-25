---
layout: page
title: "録画を保存後に動画/音声のディレイを追加する方法"
source_url: https://www.animaze.us/faq/desktopjpn/delayafterrecordingjp
---

# 録画を保存後に動画/音声のディレイを追加する方法

Animazeを使用した動画の録画はアーリーアクセス段階のため、いくつかの問題が報告されています。Animazeを使用して録画された動画で、音声と映像のずれが発生する場合があります。 

この問題を解決するために現在システムレベルの開発を進めています。問題が解決されるまでの間、お使いの動画編集プログラムを使用して、音声と映像を手動で同期させることができます。これをOpenShotで行う手順について説明します。OpenShotは無料の動画編集ツールで、<https://www.openshot.org/download>からダウンロードできます。

録画を始める直前に、自分へのライティングが適切であることを確認し、アバターのキャリブレーションを行います。これにより、最高品質の動画を作成できます。詳しくは、[こちらの]({{ '/faq/animazedesktop/tipsandtricksfortracking/' | relative_url }})ライティングとウェブカメラのセットアップについてのFAQを参照してください。

さらに、音声との同期の結果は、お使いのマイクの品質に依存します。

録画中にコマ落ちなどのパフォーマンスの問題が起きる場合、V-syncをオンにし、低フレームレート(48または30 fps)でアプリを起動してください。フレームレートは、Animazeの設定メニューの「動画のグラフィック」タブから変更できます。レンダースケール、シャドウマップの解像度、毛皮の質を下げることによっても、動画の安定性と品質を向上させることができます。

現在Animazeの動画は、1280x693ピクセルの固定解像度でキャプチャされます。 

次の手順で、OpenShotを使用して音声と映像を手動で同期させます:

 OpenShot動画エディターを開き、「プロジェクトファイル」タブにAnimazeで録画したファイルをドラッグします

![]({{ '/assets/images/43_01_How_to_add_a_videoAudio_delay_after_saving_a_recording-fd5f0b68.png' | relative_url }}){: width="800" height="436"}

動画ファイルを「プロジェクトファイル」タブから、タイムラインの1つにドラッグします

![]({{ '/assets/images/43_02_How_to_add_a_videoAudio_delay_after_saving_a_recording-6795cf54.png' | relative_url }}){: width="800" height="439"}

タイムラインタブの動画を右クリックし、「オーディオを切り離す」 -\> 「シングルクリップ」の順にクリックします

![]({{ '/assets/images/43_03_How_to_add_a_videoAudio_delay_after_saving_a_recording-9702e50a.png' | relative_url }}){: width="800" height="439"}

オーディオトラックをクリックし、動画のアクションと同期する場所までドラッグします

![]({{ '/assets/images/43_04_How_to_add_a_videoAudio_delay_after_saving_a_recording-52b961d6.png' | relative_url }}){: width="800" height="438"}

動画のフォーマットを選んでエクスポートします

![]({{ '/assets/images/43_05_How_to_add_a_videoAudio_delay_after_saving_a_recording-605fc12e.png' | relative_url }}){: width="512" height="280"}

![]({{ '/assets/images/43_06_How_to_add_a_videoAudio_delay_after_saving_a_recording-9c5a38dc.png' | relative_url }}){: width="800" height="440"}
