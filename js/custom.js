//custom jquery and javascript
$(document).ready(function(){
	$('.category-link > p').hide();
	
	$(".category-link").click(function(e) {
		$(".article").hide();
		$(".article-" + $(this).html()).show();
	});
});