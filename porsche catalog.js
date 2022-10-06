const porsche = {
	'Panamera': {
		img: "panamera.jpg",
		price: '20000000',
		mileage: '40000'
	},
	'Cayenne': {
		img: "cayenne.webp",
		price: '14000000',
		mileage: '270000'
	},
	'911': {
		img: "911.jpg",
		price: '20700000',
		mileage: '20500'
	},
	'Carrera': {
		img: "carrera.jpg",
		price: '37000000',
		mileage: '12000'
	},
	'Macan': {
		img: "macan.jpg",
		price: '6000000',
		mileage: '310000'
	},
	'Taycan': {
		img: "taycan.jpeg",
		price: '15000000',
		mileage: '92000'
	},
	'Spyder': {
		img: "spyder.webp",
		price: '30000000',
		mileage: '8230'
	}
}


const catalog = document.getElementById("main")
for (car of Object.keys(porsche)) {
	catalog.insertAdjacentHTML("beforeBegin", '<div class="element"><img class="kartinka" src="' + porsche[car]['img'] + '"><h2 class="zagolovok">' + car + '</h2><span class="cena">Price: '  + porsche[car]['price'] +  '₽</span><span class="probeg">Mileage: '  + porsche[car]['mileage'] +  'км</span></div>')
}
