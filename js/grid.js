define(function() {
	return { 
		load : function() {
			  var i, offset, $cell;
			  
			  $('[data-offset]').each(function () {
			    $cell = $(this);
			    offset = $cell.data('offset');
			    for(i = 0; i < offset; i++) {
			      $cell.parent().prepend(
			        "<div class='cell hidden'></div>");
			    }
			  });
		}
	};
});
