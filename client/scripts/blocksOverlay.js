Template.blocksOverlay.helpers({
	'rows' : function(){
		var rows = [];
		var maxRows = Math.ceil($(window).height()/100);
		for (var i = 1; i <= maxRows; i++) {rows.push(i);}
		return rows;		
	},
	'columns' : function(){
		var columns = [];
		var maxColumns = Math.ceil($(window).width()/100);
		for (var i = 1; i <= maxColumns; i++) {columns.push(i);}
		return columns;	
	}
});