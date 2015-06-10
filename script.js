$(document).ready(function() {
	$("form").submit(function() {
		var place = $("input[name = search]").val();
		$.get("http://api.openweathermap.org/data/2.5/weather?q="+"", function(res), "json");

		return false;
	});
});

