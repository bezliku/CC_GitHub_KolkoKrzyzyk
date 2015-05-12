var imie1, imie2;

$( "#formularz" ).submit(function( event ) {

   event.preventDefault();

   imie1 = $("#gracz1").val();
   imie2 = $("#gracz2").val(); 
   $("#imie1").html(imie1);
   $("#imie2").html(imie2);

   $(this).hide();
   $("#imie1, #imie2, #plansza").show();

});


var table = [
[null, null, null],
[null, null, null],
[null, null, null]
];


var mark = "x";

$("td").click(function(){
  var col = $(this).parent().children().index($(this));
  var row = $(this).parent().parent().children().index($(this).parent());
 
  table[row][col] = mark;
  $(this).html(mark);

  var win = false;


  if (table[0][0] == mark && table[1][1] == mark && table[2][2] == mark) {
      win = true;
  } else if (table[0][2] == mark && table[1][1] == mark && table[2][0] == mark) {
      win = true;
  } else {

    for(i=0; i<=2; i++) {

      if (table[i][0] == mark && table[i][1] == mark && table[i][2] == mark) {
              win = true;
        } else if (table[0][i] == mark && table[1][i] == mark && table[2][i] == mark) {
              win = true;
        }

    }
 

  }




  if( win == true) {
    var wygrany;
    if(mark == "x") {
      wygrany = imie1;
    } else {
      wygrany = imie2;
    }
    $("#wynik").html("Koniec gry! Wygrał: " + wygrany);
    $("#again").show();
  } 


  if(mark=="x") {
    mark = "o";
  } else {
    mark = "x";
  }

});


$("#again").click(function(){
  location.reload();
});
