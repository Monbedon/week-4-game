
$(document).ready(function(){
	
	var wins = 0;
	var losses = 0;
	var totalNum = 0;
	var sum = $("#gems").val();

	var randomNumGen = Math.floor((Math.random() * 120) + 1);
	var el = $(".three");
	el.text(randomNumGen);
	console.log(el.text());
		
	
$(".five, .six, .seven, .eight" ).on("click",function(){	
$ ("#gems").each(function(){
	for( var i = 0; i < 1; i++){

			var random = Math.floor(Math.random() * 12) + 1;

				totalNum = random + totalNum;

	$(".ten").html("<h1>" + totalNum + "</h1>")
	
};
	});
	});

});
	
		if(randomNumGen === totalNum){
		wins++;
	}

		if(!randomNumGen === totalNum){
		losses++;
	}
		

	// 	for( var i = 0; i <= 12; i++){

	// 		var random = Math.floor(Math.random() * 12) + 1;

	// 			totalNum = random + totalNum;
	// 	}

	// 	console.log(totalNum)
		
	// 	$(".ten").append("<h1>" + totalNum + "</h1>")
	// });


	// $(".six").on("click",function(){
	// 	for( var i = 0; i <= 12; i++){

	// 		var random = Math.floor(Math.random() * 12) + 1;

	// 			totalNum = random + totalNum;
	// 	}

	// 	console.log(totalNum)
		
	// 	$(".ten").append("<h1>" + totalNum + "</h1>")


	// $(".seven").on("click",function(){
	// 	for( var i = 0; i <= 12; i++){

	// 		var random = Math.floor(Math.random() * 12) + 1;

	// 			totalNum = random + totalNum;
	// 	}

	// 	console.log(totalNum)
		
	// 	$(".ten").append("<h1>" + totalNum + "</h1>")


	// $(".eight").on("click",function(){
	// 	for( var i = 0; i <= 12; i++){

	// 		var random = Math.floor(Math.random() * 12) + 1;

	// 			totalNum = random + totalNum;
	// 	}

	// 	console.log(totalNum)
		
	// 	$(".ten").append("<h1>" + totalNum + "</h1>")
	// });	
	// });	
	// });










