Locations.remove({});
if(Locations.find().count() === 0){
    Locations.insert({
      name:"Maldives",
      date:"2015-06-16",
      description:"a description",
      imgUrl:"http://i.imgur.com/x8f8KgRh.jpg",
      rank: 1,
      tags: "tropical,resort,water-sports",
      places: "",
      source: "http://imgur.com/a/AHnS7"
    });
    Locations.insert({
      name:"Cozumel",
      date:"2011-01-03",
      description:"a description",
      imgUrl:"http://i.imgur.com/jFY8k8Kh.jpg",
      rank: 3,
      tags: "cruise",
      places: "",
      source: "http://imgur.com/a/h8Svy"
    });
    Locations.insert({
      name:"Paris",
      date:"2015-06-21",
      description:"a description",
      imgUrl:"http://i.imgur.com/4o5ud9kh.jpg",
      rank: 3,
      tags: "city,tourism",
      places: "",
      source: "http://imgur.com/a/8fFJT"
    });
    Locations.insert({
      name:"Abu Dhabi/India",
      date:"2010-05-08",
      description:"a description",
      imgUrl:"http://i.imgur.com/feiBatGh.jpg",
      rank: 3,
      tags: "tourism,hiking",
      places: "",
      source: "http://imgur.com/a/Y6Ww7"
    });
    Locations.insert({
      name:"Vancouver",
      date:"2015-09-03",
      description:"a description",
      imgUrl:"http://i.imgur.com/WtjP0CEh.jpg",
	  rank: 3,
      tags: "cold,nature,hiking",
      places: "",
      source: "http://imgur.com/a/FrNOL"
    });
    Locations.insert({
      name:"Cancun",
      date:"2015-11-13",
      description:"a description",
      imgUrl:"http://i.imgur.com/Vz7Yeoch.jpg",
      rank: 3,
      tags: "tropical,canyoneering",
      places: "",
      source: "http://imgur.com/a/Y1IKS"
    });
    Locations.insert({
      name:"Saint Lucia",
      date:"2015-11-27",
      description:"a description",
      imgUrl:"http://i.imgur.com/3Jr1CVKh.jpg",
      rank: 1,
      tags: "tropical,resort,volcanic-bath",
      places: "",
      source: "http://imgur.com/a/OZl4l"
    });
    Locations.insert({
      name:"Japan",
      date:"2014-12-19",
      description:"a description",
      imgUrl:"http://i.imgur.com/sWsF4tMh.jpg",
      rank: 2,
      tags: "city",
      places: "",
      source: "http://imgur.com/a/wF1UV"
    });
    Locations.insert({
      name:"East Coast N",
      date:"2014-11-08",
      description:"a description",
      imgUrl:"http://i.imgur.com/Em5c4kdh.jpg",
      rank: 2,
      tags: "east-coast,driving,roadtrip",
      places: "",
      source: "http://imgur.com/a/x8Onv"
    });
    Locations.insert({
      name:"East Coast S",
      date:"2015-04-23",
      description:"a description",
      imgUrl:"http://i.imgur.com/7iQpKc8h.jpg",
      rank: 2,
      tags: "east-coast,driving,roadtrip",
      places: "san-francisco,los-angeles,san-diego",
      source: "http://imgur.com/a/03ibF"
    });
	Locations.insert({
      name:"Cabo San Lucas",
      date:"2016-02-06",
      description:"a description",
      imgUrl:"http://i.imgur.com/PWBSQp9h.jpg",
      rank: 0,
      tags: "parasailing,tropical",
      places: "",
      source: "http://imgur.com/a/of5lB"
    });
    Locations.insert({
      name:"New York",
      date:"2014-08-30",
      description:"a description",
      imgUrl:"http://i.imgur.com/e8s5F8xh.jpg",
      rank: 0,
      tags: "city",
      places: "",
      source: "http://imgur.com/a/WJnS3"
    });
}