Locations.remove({});
if(Locations.find().count() === 0){
    var locationMap = {
      "Italy": {
        "name":"Italy",
        "date":"2016-05-04",
        "description":"a description",
        "imgUrl":"http://i.imgur.com/x8f8KgRh.jpg",
        "rank": 1,
        "tags": "countryside",
        "places": "",
        "source": "http://imgur.com/a/dEvSb"
      },  
      "Colorado": {
        "name":"Colorado",
        "date":"2016-04-09",
        "description":"a description",
        "imgUrl":"http://i.imgur.com/x8f8KgRh.jpg",
        "rank": 1,
        "tags": "tropical,resort,water-sports",
        "places": "",
        "source": "http://imgur.com/a/AHnS7"
      },        
      "Maldives": {
        "name":"Maldives",
        "date":"2015-06-16",
        "description":"a description",
        "imgUrl":"http://i.imgur.com/x8f8KgRh.jpg",
        "rank": 1,
        "tags": "tropical,resort,water-sports",
        "places": "",
        "source": "http://imgur.com/a/AHnS7"
      },
      "Cozumel":{
        "name":"Cozumel",
        "date":"2011-01-03",
        "description":"a description",
        "imgUrl":"http://i.imgur.com/jFY8k8Kh.jpg",
        "rank": 20,
        "tags": "cruise",
        "places": "",
        "source": "http://imgur.com/a/h8Svy"
      },
      "Paris":{
        "name":"Paris",
        "date":"2015-06-21",
        "description":"a description",
        "imgUrl":"http://i.imgur.com/4o5ud9kh.jpg",
        "rank": 10,
        "tags": "city,tourism",
        "places": "",
        "source": "http://imgur.com/a/8fFJT"
      },
      "Abu Dhabi/India":{
        "name":"Abu Dhabi/India",
        "date":"2010-05-08",
        "description":"a description",
        "imgUrl":"http://i.imgur.com/feiBatGh.jpg",
        "rank": 20,
        "tags": "tourism,hiking",
        "places": "",
        "source": "http://imgur.com/a/Y6Ww7"
      },
      "Vancouver":{
        "name":"Vancouver",
        "date":"2015-09-03",
        "description":"a description",
        "imgUrl":"http://i.imgur.com/WtjP0CEh.jpg",
        "rank": 10,
        "tags": "cold,nature,hiking",
        "places": "",
        "source": "http://imgur.com/a/FrNOL"
      },
      "Cancun":{
        "name":"Cancun",
        "date":"2015-11-13",
        "description":"a description",
        "imgUrl":"http://i.imgur.com/Vz7Yeoch.jpg",
        "rank": 5,
        "tags": "tropical,canyoneering",
        "places": "",
        "source": "http://imgur.com/a/Y1IKS"
      },
      "Saint Lucia":{
        "name":"Saint Lucia",
        "date":"2015-11-27",
        "description":"a description",
        "imgUrl":"http://i.imgur.com/3Jr1CVKh.jpg",
        "rank": 1,
        "tags": "tropical,resort,volcanic-bath",
        "places": "",
        "source": "http://imgur.com/a/OZl4l"
      },
      "Japan":{
        "name":"Japan",
        "date":"2014-12-19",
        "description":"a description",
        "imgUrl":"http://i.imgur.com/sWsF4tMh.jpg",
        "rank": 10,
        "tags": "city",
        "places": "",
        "source": "http://imgur.com/a/wF1UV"
      },
      "East Coast N":{
        "name":"East Coast N",
        "date":"2014-11-08",
        "description":"a description",
        "imgUrl":"http://i.imgur.com/Em5c4kdh.jpg",
        "rank": 10,
        "tags": "east-coast,driving,roadtrip",
        "places": "",
        "source": "http://imgur.com/a/x8Onv"
      },
      "East Coast S":{
        "name":"East Coast S",
        "date":"2015-04-23",
        "description":"a description",
        "imgUrl":"http://i.imgur.com/7iQpKc8h.jpg",
        "rank": 10,
        "tags": "east-coast,driving,roadtrip",
        "places": "san-francisco,los-angeles,san-diego",
        "source": "http://imgur.com/a/03ibF"
      },
      "Cabo San Lucas":{
        "name":"Cabo San Lucas",
        "date":"2016-02-06",
        "description":"a description",
        "imgUrl":"http://i.imgur.com/PWBSQp9h.jpg",
        "rank": 10,
        "tags": "parasailing,tropical",
        "places": "",
        "source": "http://imgur.com/a/of5lB"
      },
      "New York":{
        "name":"New York",
        "date":"2014-08-30",
        "description":"a description",
        "imgUrl":"http://i.imgur.com/e8s5F8xh.jpg",
        "rank": 20,
        "tags": "city",
        "places": "",
        "source": "http://imgur.com/a/WJnS3"
      },
      "Puerto Rico":{
        "name":"Puerto Rico",
        "date":"2014-08-30",
        "description":"a description",
        "imgUrl":"",
        "rank": 10,
        "tags": "city",
        "places": "",
        "source": ""
      }
    };

    for(var key in locationMap) {
      Locations.insert(locationMap[key]);  
    }
    
}