
window.onscroll = function() {myFunction()},function() {scrollFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
window.onload = myload;

function myload() {

	if(localStorage.table1)
   document.getElementById("table2").innerHTML = localStorage.table1
}


function function2(){
  table = document.getElementById("table2");

  row = table.insertRow(2);
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);
  cell3 = row.insertCell(2);
  var x = document.getElementById("talent"); 
  cell1.innerHTML = x.elements[0].value;
  cell2.innerHTML = x.elements[1].value;
  cell3.innerHTML = x.elements[2].value;

  localStorage.table1 = document.getElementById("table2").innerHTML;
}


function clickCounter() {
  
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "Number of Visitors " + localStorage.clickcount ;
  } 

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button/
//window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
 }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

 function image() {

  console.log(document.getElementById("btn").src);

    if(localStorage.count)
    {
      if(localStorage.count < 4)
      localStorage.count = Number(localStorage.count) + 1;
      else
      localStorage.count = 1;
    }
    else
      localStorage.count = 1;

	var ccd = localStorage.count.toString();

    document.getElementById("btn").src = "./img/"+ ccd + ".jpg";
    

}   

