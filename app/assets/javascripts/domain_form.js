$(function(){
  $('.link-url').on('click', function(ev){
    ev.preventDefault();
    $('#domain').val($(this).children('.url').text());
    console.log($(this).children('.url').text())
  });

  $('#call-json').on('click', function(){
    $.get('/domain_status/by_domain.json', {domain: $('#domain').val()}, function(data){
      $('.json-request').html('<h3>Status: '+data['status']+'</h3>')
    })
  });
});