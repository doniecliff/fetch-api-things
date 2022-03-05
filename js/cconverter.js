// document.body.style.backgroundColor = 'red';

const urlNations = 'https://currency-exchange.p.rapidapi.com/listquotes';
const urlExchange = 'https://currency-exchange.p.rapidapi.com/exchange?from=SGD&to=MYR&q=1.0'

// new url exchangeDotIO
const urlXio = 'https://v6.exchangerate-api.com/v6/29d028202c77a23de291e856/latest/USD';

// inputs


// selects
const selectElems = document.querySelectorAll('.select-nation')




// outputs
// const 


// fetch countries
fetch(urlNations, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "currency-exchange.p.rapidapi.com",
		"x-rapidapi-key": "2f2ac91e96msh1c6a7d50cfd1774p125899jsn0f3597fc82e7"
	}
})
.then(response => {
	return response.json();
}).then((data) => {
	console.log(data)

	useNatn(data)
})
.catch(err => {
	console.error(err);
});


// fetch exchange
fetch(urlExchange, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "currency-exchange.p.rapidapi.com",
		"x-rapidapi-key": "2f2ac91e96msh1c6a7d50cfd1774p125899jsn0f3597fc82e7"
	}
})
.then(response => {
	return response.json();
	// console.log(response)
})
.then((data) => {
console.log(data)

// useXd(data)
})
.catch(err => {
	console.error(err);
});


console.log(selectElems)



let useNatn = function (input){

// console.log(input)
selectElems[0].style.color = 'grey'

for (let i = 0; i < input.length; i++){
	selectElems[0].innerHTML += `
	<option class="aNatn">${input[i]}</option>`
	
	
	selectElems[1].innerHTML += `
	<option class="aNatn">${input[i]}</option>`
}
}


// let useXd = function (input){



// }

// fetch new api - see whats inside- study it, docs 4rm site 
fetch(urlXio)
.then((res) => {return res.json()})
.then((data) => { 
	console.log(data)

	// useNew(data);
})

// use data in api
let useNew = function(input){
	console.log(input)

}





// })
// .catch(err => {
// 	console.error(err);
// });








//  test fetch
// fetch(url)
// .then((res) => {return res.json()
// }).then((data) => {
// 	console.log(data)

// 	useData(data)

// })


// fetch(url, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "currencyconverter.p.rapidapi.com",
// 		"x-rapidapi-key": "2f2ac91e96msh1c6a7d50cfd1774p125899jsn0f3597fc82e7"
// 	}
// })
// .then(response => {
// 	// console.log(response);
//   return response.json()
// }).then((data) => {
//   console.log(data)

//   // useData(data)
// })
// .catch(err => {
// 	console.error(err);
// });

// let useData = function (input){

// }