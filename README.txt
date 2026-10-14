銀河カップル ULTIMATE V8 — 導入方法

現在のGitHubリポジトリ gingacouple- に以下の2ファイルをアップロード:
  ultimate.css
  ultimate.js

GitHubで index.html を開き、末尾の </body> の直前に次の2行を追加:

<link rel="stylesheet" href="ultimate.css?v=8">
<script src="ultimate.js?v=8" defer></script>

Commit changes を押し、GitHub Pagesの反映後にページを再読み込み。
※CSSはbody末尾でも読み込めます。既存ファイルの画像・漫画・SNSリンクは変更しません。

内容:
・「銀河に入る」で星のトンネルが加速する映画風ワープ
・Web Audio APIによるチャージ→飛行→到着音（音声ファイル不要）
・既存の効果音ON/OFFに連動
・動きを減らすOS設定を尊重
・元のV7ワープとの二重実行を抑制
・漫画カードや見出しの微調整

注意:
・現在の公開index.htmlの構造に合わせた追加パッチです。
・ブラウザ実機での動作確認は未実施。導入前にindex.htmlをバックアップしてください。
・音はブラウザの制限によりボタン操作時のみ開始します。
・現時点でプロ品質を保証するものではありません。
