// document.body.style.backgroundColor = 'red';

const url = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat';





// fetch dictionary-api
fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
		"x-rapidapi-key": "2f2ac91e96msh1c6a7d50cfd1774p125899jsn0f3597fc82e7"
	}
}).then(response => {
	return response.json()
}).then(data => {
  console.log(data)

  useData(data)
}).catch(err => {
	console.error(err);
});


let useData = function (input){
  console.log(input)
}