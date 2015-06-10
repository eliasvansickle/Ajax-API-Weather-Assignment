$(document).ready(function() {
	$("form").submit(function() {
		var place = $("input[name = search]").val();
		$.get("http://api.openweathermap.org/data/2.5/weather?q="+place+"", function(res) {
			$(".place").html("<h1>"+place+"</h1>");
			$(".temp").html("<p>Temperature: "+Math.floor((((res.main.temp - 273)*(9/5)) + 32))+"</p>");
		}, "json");
		return false;
	});
});

