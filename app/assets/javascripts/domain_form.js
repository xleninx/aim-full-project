$(function(){
  $('#call-json').on('click', function(){
    $.get('/domain_status/by_domain.json', {domain: $('#domain').val()}, function(data){
      $('.json-request').html('<h3>Status: '+data['status']+'</h3>')
    })
  });
});