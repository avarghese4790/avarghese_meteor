Template.registerHelper('formatDate', function(date){
  return moment(date).format('H:mm M/D/YY');
});

Template.registerHelper('formatTimelineDate', function(date){
  return moment(date).format('MM/DD/YYYY');
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
    if(!Roles.userIsInRole(user,['admin'], 'default-group')) {
      return true;
    }
    return false;
});
