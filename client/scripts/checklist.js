Template.checklist.events({
	'click #add-item-btn' : function () {
		if($('#new-item').val()){
			$('#checklist').removeClass('animated bounceIn');
			Checklist.insert({
				item: $('#new-item').val(),
				date: new Date(),
				completed: false
			});
			$('#new-item').val('');
			$('#checklist').addClass('animated bounceIn');
		}
	},
	'click .delete-item-btn' : function (e) {
		Checklist.remove({_id:e.currentTarget.id})
	},
	'click .uncheck-item-btn' : function (e) {
		var item = Checklist.findOne({_id:e.currentTarget.id});
		item.completed = false;
		item.lastModified = new Date();
		Checklist.update(e.currentTarget.id, item)
	},
	'click .complete-item-btn' : function (e) {
		var item = Checklist.findOne({_id:e.currentTarget.id});
		item.item = $('input[id*='+e.currentTarget.id+']').val();
		item.completed = true;
		item.lastModified = new Date();
		Checklist.update(e.currentTarget.id, item)
	}
	
});

Template.checklist.helpers({
	'items' : function() {
		return Checklist.find({completed:false}, {sort:{date: -1}});
	},
	'completed' : function() {
		return Checklist.find({completed:true}, {sort:{date: -1}});
	},
	'anyCompleted' : function() {
		return (Checklist.find({completed:true}).count() > 0);
	}, 
	'itemsExist' : function() {
		return (Checklist.find({}).count() > 0);
	} 
});