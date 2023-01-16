// 讓以自訂的景點打開資訊
$('.custom-loc').click((e) => { 
  $('#locInfo-tab').addClass('active');
  $('#locInfo').addClass('show active');
  $('#cusLoc-tab').removeClass('active');
  $('#cusLoc').removeClass('show active');
});

//在活動名稱後方的自訂景點開啟
$('#custom-Loc').click((e) => { 
  let locInfo = $('#loc-info'); 
  //如果地點資訊卡片沒有打開 那就把它開啟
  if(!locInfo.hasClass('show')){
    locInfo.addClass('show');
    //如果資訊卡都開啟，在看是不再在自訂景點內，如果是就把資訊卡整個關掉
  }else if($('#cusLoc-tab').hasClass('active')||$('#cusLoc').hasClass('show active')){;
    locInfo.removeClass('show');
  }
    $('#cusLoc-tab').addClass('active');
    $('#cusLoc').addClass('show active');
    $('#locInfo-tab').removeClass('active');
    $('#locInfo').removeClass('show active');
});
