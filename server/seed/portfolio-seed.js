Portfolio.remove({});
if(Portfolio.find({}).count() === 0){
	var portfolioMap = {
		"1":{
			category:"demo",
			title: "Blocks Demo",
			icon: "fa-th-large",
			wowDelay: ".3s",
			source: "/blocks",
			display: "col-md-4 hide"
		},
		"2":{
			category:"demo",
			title: "Monopoly Simulator",
			icon: "fa-usd",
			wowDelay: ".4s",
			source: "/monopoly",
			display: "col-md-4 hide"
		},
		"3":{
			category:"demo",
			title: "Travel Gallery Design",
			icon: "fa-globe",
			wowDelay: ".5s",
			source: "/travel",
			display: "col-md-4"
		},
		"4":{
			category:"professional",
			title: "Career Recharge",
			icon: "fa-bolt",
			wowDelay: ".6s",
			source: "/career",
			display: "col-md-4"
		},
		"5":{
			category:"personal",
			title: "Admin Console",
			icon: "fa-lock",
			wowDelay: ".7s",
			source: "/admin",
			display: "col-md-4 hide"
		},
		"6":{
			category:"personal",
			title: "Jekyll Blog",
			icon: "fa-pencil",
			wowDelay: ".8s",
			source: "http://avarghese4790.github.io/",
			display: "col-md-4"
		}
	};

	for(var key in portfolioMap) {
	  Portfolio.insert(portfolioMap[key]);  
	}
}