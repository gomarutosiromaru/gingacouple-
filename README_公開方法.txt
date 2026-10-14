銀河カップル — FINAL CINEMATIC STORYWORLD

■ このバージョンについて
V14のファイルにエフェクトを積み増したものではなく、UIと演出をゼロから再構築した静的Webサイトです。
既存の公式キャラクター設定シートから「ごまる」「しらたま」の立ち絵を切り出して使用しています。
HTML / CSS / JavaScript / Canvas 2D / IntersectionObserver / Web Audio（BGM再生）を使用。

■ 特徴
・映画風のオープニング（4場面、約18秒、手動送り／スキップ対応）
・独自の星空エンジンと流れ星、パララックス、レイヤー演出
・キャラクターの浮遊、吹き出し、スクロール連動演出
・気分を選ぶと会話が変わる体験（固定シナリオ。AIチャットではありません）
・キャラクター紹介、2話の漫画拡大表示、SNSへの導線
・6言語（日本語／英語／中国語簡体字／韓国語／スペイン語／フランス語）
・モバイル対応、キーボード操作、動きを減らす設定への配慮
・音声は自動再生せず、利用者がオンにした時だけ流れます
・外部解析サービスや個人情報送信コードは入れていません

■ GitHub Pagesでの公開（初めてでもOK）
1. このZIPを解凍します。
2. GitHubの https://github.com/gomarutosiromaru/gingacouple-/ を開きます。
3. 既存のindex.htmlを別の場所に保存し、バックアップを取ります。
4. 「Add file」→「Upload files」を選択します。
5. 解凍したフォルダの中の「index.html」「style.css」「app.js」「translations.js」と
   「assets」フォルダ内のファイルをアップロードします。
   ※ assetsフォルダの階層を必ず維持してください。
   ※ GitHubのWebアップロードではフォルダを直接ドラッグするか、
      assetsフォルダ内のファイルを正しいパスで追加してください。
6. 「Commit changes」を押します。
7. https://gomarutosiromaru.github.io/gingacouple-/ にアクセスして表示を確認します。
   公開反映には少し時間がかかる場合があります。

■ 注意
・これは独自のブラウザ向けアニメーションであり、映画の手描き作画や本格3D映像と同等ではありません。
・漫画画像の中の日本語は未翻訳です。サイトにその旨を表示します。
・翻訳はネイティブ校正前の暫定版です。
・外部Google Fontsを読み込みます。オフラインでも代替フォントで表示されます。
・コードの構文検査は行っていますが、この実行環境ではChromiumへの接続が制限され、
  実際のブラウザでの表示・クリックテストは完了できませんでした。
・現在のサイトは自動更新されません。アップロード後に公開サイトを確認してください。

■ ファイル
index.html = 全体構造
style.css = デザイン・アニメーション
app.js = 星空・物語・会話・操作
translations.js = 多言語テキスト
assets/gomaru.png, shiratama.png = 設定資料から切り出したキャラクター
assets/episode1.jpg, episode2.jpg = 漫画
assets/dreamy-galaxy-bgm.wav = BGM
