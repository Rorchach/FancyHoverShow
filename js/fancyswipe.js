
$(document).ready(function(){

		var fancyParentHeight = $('.fancy').height();
		var fancyParentWidth = $('.fancy').width();
		fancyBottom = fancyParentHeight + " 0 0 0";
		fancyTop = "-"+fancyParentHeight + " 0 0 0";
		fancyRight = "0 0 0 "+fancyParentWidth;
		fancyLeft = "0 0 0 -"+fancyParentWidth;
		fancyBottom = fancyParentHeight + " 0 0 0";

		fancyLeftTop = "-"+fancyParentHeight+" 0 0 -"+fancyParentWidth;
		fancyRightTop = "-"+fancyParentHeight+" 0 0 "+fancyParentWidth;
		fancyRightBottom = fancyParentHeight+" 0 0 "+fancyParentWidth;
		fancyLeftBottom = fancyParentHeight+" 0 0 -"+fancyParentWidth;
		})

$(function($){
	$.fn.fancyswipe = function(settings){

		var defaults = {
			position: fancyBottom,
			timing: 'fast'
		};

		var settings = $.extend(defaults, settings);
		var $fancyhide = $(this).find('.fancyhide');
		$fancyhide.css("visibility","visible")
		 		  .animate({margin:settings.position},0);

		$(this).hover(
			//mouse in
			function(){
				$(this).find('.fancyhide').stop().animate({margin:"0"},settings.timing);
			},

			//mouse out
			function(){
				$(this).find('.fancyhide').stop().animate({margin:settings.position},settings.timing);
			}
			);
		return this;
	}
})(jQuery);