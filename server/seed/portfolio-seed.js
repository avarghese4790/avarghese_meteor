Portfolio.remove({});
if(Portfolio.find({}).count() === 0){
 Portfolio.insert({
 	category:"personal",
 	imgUrl: "http://i.imgur.com/4rD8filh.jpg",
 	title: "Travel Gallery Design",
 	stellarRatio: ".4",
 	wowDelay: ".1s",
 	source: "/travel",
 	display: "col-md-4"
 });
Portfolio.insert({
 	category:"professional",
 	imgUrl: "http://i.imgur.com/ErM9Tvn.jpg",
 	title: "Portfolio Item #1",
 	stellarRatio: ".7",
 	wowDelay: ".2s",
 	source: "#",
 	display: "col-md-4"
 });
 Portfolio.insert({
 	category:"personal",
 	imgUrl: "http://i.imgur.com/ArXmbtp.jpg",
 	title: "Portfolio Item #2",
 	stellarRatio: ".4",
 	wowDelay: ".3s",
 	source: "#",
 	display: "col-md-4"
 });
  Portfolio.insert({
 	category:"personal",
 	imgUrl: "http://i.imgur.com/ArXmbtp.jpg",
 	title: "Portfolio Item #3",
 	stellarRatio: ".7",
 	wowDelay: ".4s",
 	source: "#",
 	display: "col-md-4"
 });
  Portfolio.insert({
 	category:"professional",
 	imgUrl: "http://i.imgur.com/hi85olC.png",
 	title: "Career Recharge",
 	stellarRatio: ".4",
 	wowDelay: ".5s",
 	source: "/career",
 	display: "col-md-4"
 });
}