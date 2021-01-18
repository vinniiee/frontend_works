
// $('h1').click(function(){
//   $(this).text("YOLO!");
// })

// $('input').keypress(function(){
//   $("h1").toggleClass("turnBlue");
// })


// $('input').keypress(function(event){
// if (event.which===97 || 13){
//   $("h1").toggleClass("turnBlue");
// }
// })


//on()
$('h1').on('dblclick',function(){
  $(this).toggleClass("turnBlue");
})
