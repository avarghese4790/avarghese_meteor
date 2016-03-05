Template.messages.events({
  'click .message' : function (e) {
      var id =  e.currentTarget.id;
      var message = Messages.findOne({_id: id});
      message.read = true;
      Session.set('selectedMessage', message);
      Meteor.call('updateMessage', id, message);
      Session.set('newMessages', (Messages.find({read:false}).count() > 0));
      $('#messageModal').modal('show');
	},
  'click #delete-message-btn' : function (e) {
      $('#messages').removeClass('animated bounceIn');
      Meteor.call('removeMessage',{_id:Session.get('selectedMessage')._id});
      Session.set('newMessages', false);
      $('#messageModal').modal('hide');
      $('#messages').addClass('animated bounceIn');
  },
  'click #delete-all-messages-btn' : function () {
      $('#messages').removeClass('animated bounceIn');
      Meteor.call('removeMessage', {});
      $('#messages').addClass('animated bounceIn');
  },
  'click #export-messages-btn' : function(){
      Meteor.call('exportMessages');
  }
});

Template.messages.helpers({
  'messages': function(){
     return Messages.find({}, {sort: {date: -1}});
  },
  'selectedMessage': function(){
     return Session.get('selectedMessage');
  },
  'shortenName': function(name) {
    if(name.length > 8) {
     return name.substring(0, 6) + "..";
    }
    return name;
  },
  'messagePreview': function(message) {
    if(message.length > 33) {
      return message.substring(0, 30) + "..";
    }
    return message;
  },
  'messagesExist': function(){
    return (Messages.find({}).count() > 0);
  },
  'newMessage': function(message){
    return !message.read;
  }
});