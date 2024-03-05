$(function(){
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $('.hamburger').on('click', function() {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  /*=================================================
  お知らせタブ切り替え
  ===================================================*/
  // 初期表示（「お知らせ」の方を表示する）
  // ※eq(0)で1つめのタブとコンテンツにactiveクラスを設定する。
  $('#news .tab').eq(0).addClass('active');
  $('#news .tab-content').eq(0).addClass('active');

  // タブクリック時
  $('#news .tab').on('click', function() {
    // 一旦、activeクラスを全て削除する
    $('#news .tab').removeClass('active');
    $('#news .tab-content').removeClass('active');

    // 何番目のタブがクリックされたかを取得
    let index = $('#news .tab').index(this);
    // クリックされた方のタブとコンテンツにactiveクラスを設定する
    $('#news .tab').eq(index).addClass('active');
    $('#news .tab-content').eq(index).addClass('active');
  });
});