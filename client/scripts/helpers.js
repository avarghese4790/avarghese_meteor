Template.registerHelper('formatDate', function(date){
  return moment(date).format('H:mm M/D/YY');
});

Template.registerHelper('formatDateShort', function(date){
  return moment(date).format('M/D/YY');
});

Template.registerHelper('formatDateWithSeconds', function(date){
  return moment(date).format('H:mm:ss M/D/YY');
});

Template.registerHelper('authorized', function(){
     var user = Meteor.user();
    if(user) {
      return true;
    }
    return false;
});

Template.registerHelper('notAuthorized', function(){
    var user = Meteor.user();
    if(!user) {
      return true;
    }
    return false;
});
