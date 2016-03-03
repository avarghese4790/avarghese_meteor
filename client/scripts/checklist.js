Template.checklist.events({
	'click #add-item-btn' : function () {
		if($('#new-item').val()){
			$('#checklist').removeClass('animated bounceIn');
			Meteor.call('insertChecklistItem', {
				item: $('#new-item').val(),
				date: new Date(),
				completed: false
			});
			$('#new-item').val('');
			$('#checklist').addClass('animated bounceIn');
		}
	},
	'click .delete-item-btn' : function (e) {
		Meteor.call('removeChecklistItem', e.currentTarget.id);
	},
	'click .uncheck-item-btn' : function (e) {
		var docId = e.currentTarget.id;
		var item = Checklist.findOne({_id:docId});
		item.completed = false;
		item.lastModified = new Date();
		Meteor.call('updateChecklistItem', docId, item);
	},
	'click .complete-item-btn' : function (e) {
		var docId = e.currentTarget.id;
		var item = Checklist.findOne({_id:docId});
		item.item = $('input[id*='+docId+']').val();
		item.completed = true;
		item.lastModified = new Date();
		Meteor.call('updateChecklistItem', docId, item);
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