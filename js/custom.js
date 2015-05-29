//custom jquery and javascript
$(document).ready(function(){
	$('.category-link > p').remove();
	
	$(".category-link").click(function(e) {
		$(".article").hide();
		$(".article-" + $(this).html()).show();
	});
});