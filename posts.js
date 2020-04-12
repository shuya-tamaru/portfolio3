//jQueryのライブラリの読み込み
{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> */}

$(window).on('load', ()=> {

  $(".preview").hide()

  $('.img').on("click",function(){

    var id = $(this).attr('id').replace(/[^0-9]/g, '');
    var id_name = "#img"+id
    var exit_name = "#exit"+id

    $('.preview'+id).fadeIn();
    $(exit_name).on("click",() => {
      $(exit_name).closest(".preview").fadeOut()
    });
  })
})




