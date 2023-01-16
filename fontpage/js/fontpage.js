$('#chat-icon').click((e) => { 
  $('#chat-icon').css('display','none');
  $('#service-box').css('display','block');
});

$('#close-chatbox').click(function (e) { 
  $('#chat-icon').css('display','block');
  $('#service-box').css('display','none');
});