$(window).on('load', ()=> {

  $(".preview").hide()

  $('.img').on("click",function(){

    var id = $(this).attr('id').replace(/[^0-9]/g, '');
    var id_name = "#img"+id
    var exit_name = "#exit"+id

    $('.preview'+id).fadeIn();
    $('body').css({
     'overflow': 'hidden'
    })
    $(exit_name).on("click",() => {
      $(exit_name).closest(".preview").fadeOut()
      $('body').css({
        'overflow': 'scroll'
       })
    });
  })
})




