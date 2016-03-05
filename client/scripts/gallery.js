Template.gallery.events({
  'keyup #tg-loc-search-term': function() { 
      Session.set('tg-search-term', event.target.value);
  },
  'change #tg-select-tag': function() { 
      Session.set('tg-filter-tag', event.target.value);
  }
});

Template.gallery.helpers({
  'locations': function(){
       if(Session.get('tg-search-term')){
         return Locations.find({name: { $regex: Session.get('tg-search-term')+".*", $options: 'i' }}, {sort: {date: -1}});
       } else if(Session.get('tg-filter-tag')){
         return Locations.find({tags: { $regex: Session.get('tg-filter-tag')+"*", $options: 'i' }}, {sort: {date: -1}});
       } else {
         return Locations.find({}, {sort: {date: -1}});
       }
  },
  'tags': function(){
       return ["tropical","cold","nature","resort","east-coast","water-sports", "hiking", "touring","driving","canyoneering","volcanic-bath"]
  }
});

