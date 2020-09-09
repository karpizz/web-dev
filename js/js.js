// var number = 9+8;
// var vcs ="HELLO";
// var relationship = (vcs==number);
// console.log (number + ", " +vcs+ ", " + typeof(vcs) + ", " + relationship);


// while (number >=1) {
// 	console.log(number);
// 	number--;
// }


// for (i = 15; i >= 0; i--) {
// 	console.log(i);
// }

// var numAvys=4;
// var numMenuo=1;
// var kiekMenSpausdinti=12;

// for(; numMenuo <= kiekMenSpausdinti; numMenuo++) {
// 	numAvys*=4;
// 	console.log("Po " + numMenuo + " menesio bus " + numAvys + " aviu");
// }

// while(numMenuo <= kiekMenSpausdinti) {
// 	numAvys*=4;
// 	console.log("Po " + numMenuo + " menesio bus " + numAvys + " aviu");
// 	numMenuo++;
// }

// var currentGen = 1;
// var totalGen = 19;
// var totalMW = 0;
// var lowMW = 62;
// var highMW = 124;

// while(currentGen<=4) {
// 	totalMW+=62;
// 	console.log("Generatorius #" + currentGen + " ijungtas, pridejo " + lowMW + " MW, viso generuojama" + totalMW + " MW!")
// 	currentGen++;
// }

// for (currentGen = 5; currentGen<= totalGen; currentGen++){
// 	totalMW+=124;
// 	console.log("Generatorius #" + currentGen + " ijungtas, pridejo " + highMW + " MW, viso generuojama" + totalMW + " MW!")
// }

// if(currentGen%2==0 && currentGen<=totalGen)

// var num=10;
// while(num>0) {
// 	if(num % 2 ==0){
// 		console.log(num);
// 	}
	
// 	num--;
// }

// var num1 = 5;
// var num2 = 10;

// if (num1 < num2) {
// 	console.log(num2);
// 	}
// 	else {
// 		console.log(num1);
// 	}

// 	else if (num1 > num2){
// 		console.log(num1);
// 		}
// 	else{
// 		console.log(num2);
// 	}
	
// function maxOf2(a,b){
// 	if (a>=b){
// 		console.log(a);
// 	} else {
// 		console.log(b);
// 	}
// }

// maxOf2(12,50);

// var turimVarda = false;
// while(turimVarda== false){
// 	var userVardas = prompt("say me name");

// 	if(confirm("Are u sure " + userVardas + "?")){
// 		alert("Hi " + userVardas + "!");
// 		turimVarda=true;
// 	}
// }

// function kiekE(){
// 	var fraze = prompt("Kokia?");
// 	if (typeof(fraze) != "string") { 
// 	alert("BAD!");
// 	return false;
// } else {
// 	var eSkaicius = 0;
// 	for (var index=0; index < fraze.length; index++){
// 		if (fraze.charAt(index) == 'e' || fraze.charAt(index) == 'E'){
// 			eSkaicius++;
// 		}
// 	}
// 	alert(fraze + "\n" + " here is " + eSkaicius + " E raides");
// 	return true;
// 	}
// }
// console.log(kiekE());

// var celsi = -3.3;
// var faren = 26;
// 	 celsi=(faren-32)*0.5556;
// var yolo = "Siuo metu Lietuvoje laipsniu pagal celsiju.";
// console.log(yolo.substr(0,20) + celsi.toFixed(1) + yolo.substr(19,41));


// if else paprastesniu budu

// var tiesa = false;
// tiesa ? console.log("taip") : console.log("ne");

// var shit = "eorwerwe, as, wew, fdf, ccx, iui, zcza";
// console.log(shit.split(", ").sort().reverse());

// Uzduotis nr. X

// toLowerCase()
// split('')
// sort()
// join('')
// match()
// lenght

// function dublicateCounter() {
// 	var text = document.getElementById('text').value;
// 	document.getElementById("dup").innerHTML = "Dublikatu skaicius: "
// 	+ (text.toLowerCase().split('').join('').match(/([^])\1+/g)).length;	
// }

// var name = "lulz pulz";
// console.log(firstUpper(name));

// function firstUpper(fullName){

// }

// document.getElementById("ekranoPlotisAukstis").innerHTML = "Ats.: " + screen.width + "px\n" +screen.height + "px";

// $(document).ready(function(){
// 	$('button').on('click', function(){
// 		var message = $('<span>Call 1-555-jqueary-air to book this tour</span>');
// 		$(this).closest('.tour').append(message);
// 		$(this).remove();
// 	});
// });


// $(document).ready(function(){
// 	$('button').on('click', function(){
// 		var tour = $(this).closest(.'tour');
// 		var discount = tour.data('discount');
// 		var message = $('<span>Call 1-555-jqueary-air to book this tour</span>');
// 		tour.append(message);
// 		$(this).remove();
// 	});
// });

// $(document).ready(function(){
// 	$('#filters').on('click', '.on-sale', function(){
// 		$('.highlighted').removeClass('.highlighted');
// 		$(".tour").filter(".on-sale").addClass('.highlighted');
// 	});
// });


$(document).ready(function(){
	// $("body").prepend("<h1>jQueary Pratimai</h1>");
	// $(".ops h2").css({'background-color': 'red'});
	// $("body").css({'background-color': 'lightgrey'});
	// $(".blink").each(function() {
 //    var elem = $(this);
 //    setInterval(function() {
 //        if (elem.css('visibility') == 'hidden') {
 //            elem.css('visibility', 'visible');
 //        } else {
 //            elem.css('visibility', 'hidden');
 //        }    
 //    }, 500);
	// });
    $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    
    $('[data-toggle="tooltip"]').tooltip();
    
    $("a[href='#toTop']").click(function(){
    	$("html, body").animate({ scrollTop: 0 }, "slow");
  	return false;
    });

    $("a[href='#apie']").click(function(){
        $("html, body").animate({ scrollTop: $('#apiescroll').offset().top }, "slow");
    return false;
    });

    // $("#accept").click(function() {
    //         if ($('#accept:checked').length > 0) {
    //             $('#submitbtn').removeAttr('disabled');
    //         } else {
    //             $('#submitbtn').attr('disabled', 'disabled');
    //         }
    //     });

    // setInterval(function(){
    //     // Immediately fade to opacity: 0 in 0ms
    //     $(".ops h2:first").fadeTo( 0, 0);
    //     // Wait .75sec then fade to opacity: 1 in 0ms
    //     setTimeout(function(){
    //         $(".ops h2:first").fadeTo( 0, 1);
    //     }, 550);
    // }, 1000);
});

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
 
//   slides[slideIndex-1].style.display = "block"; 
// }
