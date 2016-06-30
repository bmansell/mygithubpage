$(document).ready( ($) => {

  $(".scroll").bind('click', event => {
    $('html,body').animate( {
       scrollTop:$("#carousel-example-generic").scrollTop() + $("#carousel-example-generic").height()
     } , 800);
  });

});
