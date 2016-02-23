Portfolio.remove({});
if(Portfolio.find({}).count() === 0){
Portfolio.insert({
 	category:"professional",
 	title: "Portfolio Item #1",
 	icon: "fa-exclamation",
 	wowDelay: ".1s",
 	source: "#",
 	display: "col-md-4 hide"
 });
 Portfolio.insert({
 	category:"personal",
 	title: "Portfolio Item #2",
 	icon: "fa-exclamation",
 	wowDelay: ".2s",
 	source: "#",
 	display: "col-md-4 hide"
 });
 Portfolio.insert({
 	category:"personal",
 	title: "Blocks Demo",
 	icon: "fa-th-large",
 	wowDelay: ".3s",
 	source: "/blocks",
 	display: "col-md-4"
 });
  Portfolio.insert({
 	category:"personal",
 	title: "Monopoly Simulator",
 	icon: "fa-usd",
 	wowDelay: ".4s",
 	source: "/monopoly",
 	display: "col-md-4	"
 });
 Portfolio.insert({
 	category:"personal",
 	title: "Travel Gallery Design",
 	icon: "fa-globe",
 	wowDelay: ".5s",
 	source: "/travel",
 	display: "col-md-4"
 });
 Portfolio.insert({
 	category:"professional",
 	title: "Career Recharge",
 	icon: "fa-bolt",
 	wowDelay: ".6s",
 	source: "/career",
 	display: "col-md-4"
 });
  Portfolio.insert({
 	category:"professional",
 	title: "Admin Console",
 	icon: "fa-lock",
 	wowDelay: ".7s",
 	source: "/admin",
 	display: "col-md-4"
 });
}