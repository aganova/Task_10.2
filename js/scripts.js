$(function() {
	var header = $("header");
	var newElem = '<figure><img id="image" src="images/jquery.png" alt="jQuery"></figure>';
	header.append(newElem);
	$("figure").height("350px").css("marginTop", "0");
	$("#image").css("display", "block").height("90%").css("margin", "0 auto");
	$("#image").mouseover(function() { 
		$(this).fadeOut().fadeIn();
	});

	var span = $("span");
	span.each(function(index, element) {
		$("span:even").css("color","#b76fa5");
		$ ("span:odd").css("color","darkgreen");
	});

	var spanText = span.eq(1).text();
	var newContent = " dolor sit amet";
	span.eq(1).text(spanText + newContent);

	var paragraphs = $('p');
	paragraphs.each(function(index, element) {
		var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
	    $(element).append(button);
	});

	$("button").click(function() {
		alert($(this).attr("data-tmp"));
	});

	$("button").css("backgroundColor", "purple").css("color", "#fff").width("60px").height("30px").css("border", "none").css("marginLeft", "10px").css("borderRadius", "5px");

	var container = $(".container");
	var lastParagraph = '<div><p><a href="#">Message</a></p></div>';
	container.append(lastParagraph);

	$("a").click(function(event) {
		alert('Thanks for visiting!');
		event.preventDefault();
		$(this).hide("slow");
	});
});