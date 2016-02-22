Template.portfolio.helpers({
    'portfolio': function(){
         return Portfolio.find({}, {sort: {date: -1}});
    }
});


Template.portfolio.rendered=function() {
  $('#mix-container').mixItUp();
}
Template.portfolio.destroyed=function() {
  $('#mix-container').mixItUp('destroy',true);
}