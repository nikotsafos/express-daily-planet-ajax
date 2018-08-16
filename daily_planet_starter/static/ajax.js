$(document).ready(function() {

  $('#edit-form').submit(function(e) {
    e.preventDefault();
    var articleUrl = $(this).attr('action')
    var articleData = $(this).serialize();
    console.log('url is', teamUrl);
    console.log('data', teamData);

    $.ajax({
      method: 'PUT',
      url: articleUrl,
      data: articleData
    }).done(function(data){
      window.location = "/articles";
    }).fail(function(err){
      console.log('error', err)
    }); // end of ajax
  }); // end of edit-form submit
  $('#delete-btn').click(function(e){
    e.preventDefault();
    var articleUrl = $(this).attr('href');
    console.log('stuff is working url is', articleUrl);
    $.ajax({
      method: 'DELETE',
      url: articleUrl
    }).done(function(data){
      console.log('success', data);
      window.location = "/articles";
    }).fail(function(err){
      console.log('err', err);
    }); // end of ajax
  }); // end of delete btn click
}); // end of document ready
