Template.messages.events({
  'click .message' : function (e) {
      Session.set('selectedMessage', Messages.findOne({_id: e.currentTarget.id}));
      $('#messageModal').modal('show');
	},
  'click #delete-message-btn' : function (e) {
      $('#messages').removeClass('animated bounceIn');
      Messages.remove({_id:Session.get('selectedMessage')._id});
      $('#messageModal').modal('hide');
      $('#messages').addClass('animated bounceIn');
  },
  'click #delete-all-messages-btn' : function (e) {
      $('#messages').removeClass('animated bounceIn');
      Messages.find({},{fields: {'_id':1}}).forEach(function (message) {
            Messages.remove({_id: message._id});
      });
      $('#messages').addClass('animated bounceIn');
  }
});

Template.messages.helpers({
  'messages': function(){
     return Messages.find({}, {sort: {date: -1}});
  },
  'selectedMessage': function(){
     return Session.get('selectedMessage');
  },
  shortenName(name) {
    if(name.length > 8) {
     return name.substring(0, 6) + "..";
    }
    return name;
  },
  messagePreview(message) {
    if(message.length > 33) {
      return message.substring(0, 30) + "..";
    }
    return message;
  },
  messagesExist(){
    return (Messages.find({}).count() > 0);
  }
});