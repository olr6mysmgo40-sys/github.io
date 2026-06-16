/* ------------------------------
   背景の散らし写真
------------------------------ */
const bg = document.querySelector('.gallery-bg');

const bgPhotos = [
  "picture/20250628夏覚リリイベ新宿タワレコ_みみ-2.jpg",
  "picture/20250712夏覚名古屋リリイベ_みみ-2.jpg",
  "picture/20250809_リリイベ幕張イオン＠なめこっち-2.jpeg",
  "picture/20250824_Fancy Frontier開拓動漫祭 45花博公園爭艷館_ピーター-2.png",
  "picture/20250906フリーライブダイバーシティ東京 _＠さとる-2.jpg",
  "picture/20250906フリラお台場@清2026-2.jpg",
  "picture/20250914FCイベントSUPERNOVA KAWASAKI_@さとる-2.jpg",
  "picture/20251103ツアー名古屋@清2026-2.jpg",
  "picture/20251106_名古屋パルコリリイベ_すけとーだら-2.jpg",
  "picture/20250906フリーライブダイバーシティ東京 _＠さとる-2.jpg",
  "picture/20251123代官山UNIT_Izuru-2.jpg",
  "picture/20251207_『わたしファンファーレ』リリイベ タワーレコード渋谷店9F イベントスペース(撮影者 ふくらぎ)-2.jpg",
  "picture/20251207_リリイベタワレコ渋谷＠なめこっち-2.jpeg",
  "picture/20251214‗名古屋リリイベ‗ごとじゅん-2.jpeg",
  "picture/20251216_チャリやま-2.jpg",
  "picture/20251221たつたつ-2.jpeg",
  "picture/20260117_ リリイベタワーレコード吉祥寺パルコ店 みたらし大吾さん-2.jpg",
  "picture/20260117_タワレコ吉祥寺パルコ店_熊谷コーイチ-2.jpg",
  "picture/20260117_リリイベタワーレコード吉祥寺パルコ店 みたらし大吾さん(1)-2.jpg",
  "picture/20260117リリイベタワーレコード 吉祥寺パルコ店_＠さとる-2.jpg",
  "picture/20260117リリイベ吉祥寺＠清2026-2.jpg",
  "picture/20260118リリイベ汐留シオサイト_さとる-2.jpg",
  "picture/20260119_リリイベ汐留＠なめこっち(1)-2.jpeg",
  "picture/20260119_リリイベ汐留＠なめこっち(2)-2.jpeg",
  "picture/20260206_TSUIMA Inc. presents さっぽろ雪まつり アイドルライブ みたらし大吾さん-2.jpg",
  "picture/20260206_TSUIMA Inc. presents さっぽろ雪まつり アイドルライブ みたらし大吾さん2-2.jpg",
  "picture/20260206_消え好き雪まつり_TadashiK-2.jpg",
  "picture/20260309_3rdアニラ_さとる-2.jpg",
  "picture/20260309KTZepp横浜_Izuru-2.jpg",
  "picture/20260412_FCイベント_route727-2.jpg",
  "picture/20260412FCイベ_AOYAMA GRAND HALL_Izuru-2.jpg",
  "picture/20260412FCイベ_九郎(クロウ)-2.jpg",
  "picture/20260419_『Yondanda』リリースイベントタワーレコード吉祥寺パルコ店 みたらし大吾さん-2.jpg",
  "picture/20260419_リリイベ＠吉祥寺タワレコ_藪漕-2.jpg",
  "picture/20260419吉祥寺タワレコ_Izuru-2.jpg",
  "picture/20260419吉祥寺タワレコ_きっつん-2.jpg",
  "picture/20260425_『Yondanda』リリースイベント横浜スタジアム みたらし大吾さん-2.jpg",
  "picture/20260425_『Yondanda』リリースイベント横浜ワールドポーターズ みたらし大吾さん(1)-2.jpg",
  "picture/20260425_『Yondanda』リリースイベント横浜ワールドポーターズ みたらし大吾さん(2)-2.jpg",
  "picture/20260425_『Yondanda』リリースイベント横浜ワールドポーターズ みたらし大吾さん-2.jpg",
  "picture/20260425横浜ワールドポーターズ　さとし-2.jpg",
  "picture/20260429_『UP-T FESTIVAL vol. 7』神田スクエアホール みたらし大吾さん-2.jpg",
  "picture/20260429_『UP-T FESTIVAL vol.7』 神田スクエアホール みたらし大吾さん-2.jpg",
  "picture/20260504ヴィレッジヴァンガード渋谷店　さとし-2.jpg",
  "picture/20260504渋谷リリイベ‗ごとじゅん-2.jpeg",
  "picture/20260505_『歌舞伎町UP GATE↑↑2026』 歌舞伎町タワーステージ みたらし大吾さん-2.jpg",
  "picture/20260517_「Yondanda」リリース記念イベント＠タワーレコード錦糸町パルコ店_ピーター_1-2.png",
  "picture/20260517_「Yondanda」リリース記念イベント＠タワーレコード錦糸町パルコ店_ピーター_2-2.png",
  "picture/20260531_『Yondanda』リリースイベント越谷レイクタウン みたらし大吾さん(1)-2.jpg",
  "picture/20260531_『Yondanda』リリースイベント越谷レイクタウン みたらし大吾さん(2)-2.jpg",
  "picture/20260531_『Yondanda』リリースイベント越谷レイクタウン みたらし大吾さん-2.jpg",
  "picture/20260531レイクタウン_きっつん-2.jpg",
  "picture/20260606_フリーライブにて撮影_kamino-2.jpg",
  "picture/20260606_フリラ西武新宿駅PePe前広場_ピーター_1-2.png",
  "picture/20260606_フリラ西武新宿駅PePe前広場_ピーター_2-2.png",
  "picture/20260606_フリラ西武新宿駅PePe前広場_ピーター_3-2.png",
  "picture/20260606_フリラ西武新宿駅PePe前広場_ピーター_4-2.png",
  "picture/20260606_フリラ西武新宿駅PePe前広場_ピーター_5-2.png",
  "picture/20260606フリーライブPePe前広場_＠さとる-2.jpg",
  "picture/IMG_0031-2.jpeg",
  "picture/IMG_0078-2.jpeg",
  "picture/IMG_0141-2.jpeg",
  "picture/IMG_0236-2.jpeg",
  "picture/IMG_0246-2.jpeg",
  "picture/IMG_0683-2.jpeg",
  "picture/IMG_0727-2.jpeg",
  "picture/IMG_3864-2.jpeg",
  "picture/IMG_4268-2.jpeg",
  "picture/IMG_4491-2.jpeg",
  "picture/IMG_4758-2.jpeg",
  "picture/IMG_4920-2.jpeg",
  "picture/IMG_4984-2.jpeg",
  "picture/IMG_5157-2.jpeg",
  "picture/IMG_5226-2.jpeg",
  "picture/IMG_5542-2.jpeg",
  "picture/IMG_5706-2.jpeg",
  "picture/IMG_6033-2.jpeg",
  "picture/IMG_6087-2.jpeg",
  "picture/IMG_6444-2.jpeg",
  "picture/IMG_6470-2.jpeg",
  "picture/IMG_6767-2.jpeg",
  "picture/IMG_6883-2.jpeg",
  "picture/IMG_7400-2.jpeg",
  "picture/IMG_7600-2.jpeg",
  "picture/IMG_7865-2.jpeg",
  "picture/IMG_7884-2.jpeg",
  "picture/IMG_7911-2.jpeg",
  "picture/IMG_9105-2.jpeg",
  "picture/IMG_9187-2.jpeg",
  "picture/IMG_9458-2.jpeg",
  "picture/IMG_9646-2.jpeg",
  "picture/IMG_9669-2.jpeg",
  "picture/IMG_9786-2.jpeg",
  "picture/IMG_9799-2.jpeg",
  "picture/6b3d41dc-e34d-4a97-8a68-6b734a7eceb5-2.jpg"
];

// スマホは12枚、PCは25枚
const bgCount = window.innerWidth < 600 ? 12 : 25;

for (let i = 0; i < bgCount; i++) {
  const img = document.createElement('img');

  // ★ ランダムに写真を選ぶ
  const randomIndex = Math.floor(Math.random() * bgPhotos.length);
  img.src = bgPhotos[randomIndex];

  img.style.top = Math.random() * 90 + "%";
  img.style.left = Math.random() * 90 + "%";
  img.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

  bg.appendChild(img);
}


/* ------------------------------
   ギャラリー本体（キャプション付き）
------------------------------ */
const gallery = document.querySelector('.gallery');

const galleryPhotos = [
   { src: "picture/20250628夏覚リリイベ新宿タワレコ_みみ.jpg", caption: "20250628\夏覚リリイベ\n新宿タワーレコード\nみみさん" },
   { src: "picture/20250712夏覚名古屋リリイベ_みみ.jpg",caption: "" },
   { src: "picture/20250809_リリイベ幕張イオン＠なめこっち.jpeg",caption: "" },
   { src: "picture/20250824_Fancy Frontier開拓動漫祭 45@花博公園爭艷館_ピーター.png",caption: "" },
   { src: "picture/20250906フリーライブダイバーシティ東京 _＠さとる.jpg",caption: "" },
   { src: "picture/20250906フリラお台場@清2026.jpg",caption: "" },
   { src: "picture/20250914FCイベントSUPERNOVA KAWASAKI_@さとる.jpg",caption: "" },
   { src: "picture/20251103ツアー名古屋@清2026.jpg",caption: "" },
   { src: "picture/20251106_名古屋パルコリリイベ_すけとーだら.JPg",caption: "" },
   { src: "picture/20251123_ライブハウスツアー代官山UNIT_さとる.jpg",caption: "" },
   { src: "picture/20251123代官山UNIT_Izuru.jpg",caption: "" },
   { src: "picture/20251207_『わたしファンファーレ』リリイベ タワーレコード渋谷店9F イベントスペース(撮影者 ふくらぎ).jpg",caption: "" },
   { src: "picture/20251207_リリイベタワレコ渋谷＠なめこっち.jpeg",caption: "" },
   { src: "picture/20251214‗名古屋リリイベ‗ごとじゅん.jpeg",caption: "" },
   { src: "picture/20251216_チャリやま.jpg",caption: "" },
   { src: "picture/20251221たつたつ.jpeg",caption: "" },
   { src: "picture/20260117_ リリイベタワーレコード吉祥寺パルコ店 みたらし大吾さん.jpg",caption: "" },
   { src: "picture/20260117_タワレコ吉祥寺パルコ店_熊谷コーイチ.jpg",caption: "" },
   { src: "picture/20260117_リリイベタワーレコード吉祥寺パルコ店 みたらし大吾さん(1).jpg",caption: "" },
   { src: "picture/20260117リリイベタワーレコード 吉祥寺パルコ店_＠さとる.jpg",caption: "" },
   { src: "picture/20260117リリイベ吉祥寺＠清2026.jpg",caption: "" },
   { src: "picture/20260118リリイベ汐留シオサイト_さとる.jpg",caption: "" },
   { src: "picture/20260119_リリイベ汐留＠なめこっち(1).jpeg",caption: "" },
   { src: "picture/20260119_リリイベ汐留＠なめこっち(2).jpeg",caption: "" },
   { src: "picture/20260206_TSUIMA Inc. presents さっぽろ雪まつり アイドルライブ みたらし大吾さん2.jpg",caption: "" },
   { src: "picture/20260206_TSUIMA Inc. presents さっぽろ雪まつり アイドルライブ みたらし大吾さん2.jpg",caption: "" },
   { src: "picture/20260206_消え好き雪まつり_TadashiK.jpg",caption: "" },
   { src: "picture/20260309_3rdアニラ_さとる.jpg",caption: "" },
   { src: "picture/20260309KTZepp横浜_Izuru.jpg",caption: "" },
   { src: "picture/20260412_FCイベント_route727.jpg",caption: "" },
   { src: "picture/20260412FCイベ_AOYAMA GRAND HALL_Izuru.jpg",caption: "" },
   { src: "picture/20260412FCイベ_九郎(クロウ).jpg",caption: "" },
   { src: "picture/20260419_『Yondanda』リリースイベントタワーレコード吉祥寺パルコ店 みたらし大吾さん.jpg",caption: "" },
   { src: "picture/20260419_リリイベ＠吉祥寺タワレコ_藪漕.jpg",caption: "" },
   { src: "picture/20260419吉祥寺タワレコ_Izuru.jpg",caption: "" },
   { src: "picture/20260419吉祥寺タワレコ_きっつん.jpg",caption: "" },
   { src: "picture/20260425_『Yondanda』リリースイベント横浜スタジアム みたらし大吾さん.jpg",caption: "" },
   { src: "picture/20260425_『Yondanda』リリースイベント横浜ワールドポーターズ みたらし大吾さん(1).jpg",caption: "" },
   { src: "picture/20260425_『Yondanda』リリースイベント横浜ワールドポーターズ みたらし大吾さん(2).jpg",caption: "" },
   { src: "picture/20260425_『Yondanda』リリースイベント横浜ワールドポーターズ みたらし大吾さん.jpg",caption: "" },
   { src: "picture/20260425横浜ワールドポーターズ　さとし.jpg",caption: "" },
   { src: "picture/20260429_『UP-T FESTIVAL vol. 7』神田スクエアホール みたらし大吾さん.jpg",caption: "" },
   { src: "picture/20260429_『UP-T FESTIVAL vol.7』 神田スクエアホール みたらし大吾さん.jpg",caption: "" },
   { src: "picture/20260504ヴィレッジヴァンガード渋谷店　さとし.jpg",caption: "" },
   { src: "picture/20260504渋谷リリイベ‗ごとじゅん.jpeg",caption: "" },
   { src: "picture/20260505_『歌舞伎町UP GATE↑↑2026』 歌舞伎町タワーステージ みたらし大吾さん.jpg",caption: "" },
   { src: "picture/20260517_「Yondanda」リリース記念イベント＠タワーレコード錦糸町パルコ店_ピーター_1.png",caption: "" },
   { src: "picture/20260517_「Yondanda」リリース記念イベント＠タワーレコード錦糸町パルコ店_ピーター_2.png",caption: "" },
   { src: "picture/20260531_『Yondanda』リリースイベント越谷レイクタウン みたらし大吾さん(1).jpg",caption: "" },
   { src: "picture/20260531_『Yondanda』リリースイベント越谷レイクタウン みたらし大吾さん(2).jpg",caption: "" },
   { src: "picture/20260531_『Yondanda』リリースイベント越谷レイクタウン みたらし大吾さん.jpg",caption: "" },
   { src: "picture/20260531レイクタウン_きっつん.jpg",caption: "" },
   { src: "picture/20260606_フリーライブにて撮影_kamino.jpg",caption: "" },
   { src: "picture/20260606_フリラ西武新宿駅PePe前広場_ピーター_1.png",caption: "" },
   { src: "picture/20260606_フリラ西武新宿駅PePe前広場_ピーター_2.png",caption: "" },
   { src: "picture/20260606_フリラ西武新宿駅PePe前広場_ピーター_3.png",caption: "" },
   { src: "picture/20260606_フリラ西武新宿駅PePe前広場_ピーター_4.png",caption: "" },
   { src: "picture/20260606_フリラ西武新宿駅PePe前広場_ピーター_5.png",caption: "" },
   { src: "picture/20260606フリーライブPePe前広場_＠さとる.jpg",caption: "" },
   { src: "picture/IMG_0031.jpeg",caption: "" },
   { src: "picture/IMG_0078.jpeg",caption: "" },
   { src: "picture/IMG_0141.jpeg",caption: "" },
   { src: "picture/IMG_0236.jpeg",caption: "" },
   { src: "picture/IMG_0246.jpeg",caption: "" },
   { src: "picture/IMG_0683.jpeg",caption: "" },
   { src: "picture/IMG_0727.jpeg",caption: "" },
   { src: "picture/IMG_3864.jpeg",caption: "" },
   { src: "picture/IMG_4268.jpeg",caption: "" },
   { src: "picture/IMG_4491.jpeg",caption: "" },
   { src: "picture/IMG_4758.jpeg",caption: "" },
   { src: "picture/IMG_4920.jpeg",caption: "" },
   { src: "picture/IMG_4984.jpeg",caption: "" },
   { src: "picture/IMG_5157.jpeg",caption: "" },
   { src: "picture/IMG_5226.jpeg",caption: "" },
   { src: "picture/IMG_5542.jpeg",caption: "" },
   { src: "picture/IMG_5706.jpeg",caption: "" },
   { src: "picture/IMG_6033.jpeg",caption: "" },
   { src: "picture/IMG_6087.jpeg",caption: "" },
   { src: "picture/IMG_6444.jpeg",caption: "" },
   { src: "picture/IMG_6470.jpeg",caption: "" },
   { src: "picture/IMG_6767.jpeg",caption: "" },
   { src: "picture/IMG_6883.jpeg",caption: "" },
   { src: "picture/IMG_7400.jpeg",caption: "" },
   { src: "picture/IMG_7600.jpeg",caption: "" },
   { src: "picture/IMG_7865.jpeg",caption: "" },
   { src: "picture/IMG_7884.jpeg",caption: "" },
   { src: "picture/IMG_7911.jpeg",caption: "" },
   { src: "picture/IMG_9105.jpeg",caption: "" },
   { src: "picture/IMG_9187.jpeg",caption: "" },
   { src: "picture/IMG_9458.jpeg",caption: "" },
   { src: "picture/IMG_9646.jpeg",caption: "" },
   { src: "picture/IMG_9669.jpeg",caption: "" },
   { src: "picture/IMG_9786.jpeg",caption: "" },
   { src: "picture/IMG_9799.jpeg",caption: "" },
   { src: "picture/6b3d41dc-e34d-4a97-8a68-6b734a7eceb5.jpg",caption: "" }
];

galleryPhotos.forEach(item => {
  const img = document.createElement('img');
  img.src = item.src;
  img.dataset.caption = item.caption; // キャプションを保存
  gallery.appendChild(img);

  // クリックでモーダルを開く
  img.addEventListener('click', () => {
    document.getElementById('modal-img').src = item.src;
    document.getElementById('modal-caption').textContent = item.caption;
    document.getElementById('modal').style.display = 'flex';
  });
});

/* モーダルを閉じる（背景クリックで閉じる） */
document.getElementById('modal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

