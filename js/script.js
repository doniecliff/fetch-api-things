// document.body.style.backgroundColor = 'red';

const navItems = document.querySelectorAll('#navi > .col-6 .col');

const url = 'https://randomuser.me/api/';

const newUser = document.getElementById('newUser'); // - to get new user



// output things
const userPic = document.getElementById('userPic');
const propKey = document.getElementById('propKey');
const propValue = document.getElementById('propValue');

// console.log(userPic)

// note: READ - to  knw properties of any element goto pointer - path - the Element (& u can see all the properties of d target element)
userPic.addEventListener('click', (e)=>{
	console.log(e)
})


// display new user btn
userPic.parentElement.addEventListener('mouseover', () => {
	newUser.classList.remove('d-none');
	newUser.classList.add('d-block');
})
userPic.addEventListener('mouseout', ()=> {
	newUser.classList.add('d-none');
	newUser.classList.remove('d-block');
})



console.log(navItems);



// getData = function(input){

// 	return input;
// }

// test fetch
fetch(url)
.then((res) => {return res.json()
}).then((data) => {
	console.log(data)

	useData(data)

})


let useData = function (input) {
	console.log(input)

	console.log(input.results[0])


	// first initial state
	userPic.src = input.results[0].picture.large
	propKey.textContent = 'My name is';
	propValue.textContent = `${input.results[0].name.last}  ${input.results[0].name.first}`;
	navItems[0].children[0].style.color = '#83BA43';

for(let i = 0; i < navItems.length; i++){
	navItems[i].addEventListener('mouseover', (e)=>{

		// Set other tab to default color
		for(let i = 0; i < navItems.length; i++) {
			navItems[i].children[0].style.color = 'black';
		}

		navItems[i].children[0].style.color = '#83BA43';


		//for the tabs
		if (i === 0){
			propKey.textContent = 'My name is';
			propValue.textContent = `${input.results[0].name.last}  ${input.results[0].name.first}`;
		}
		else if (i === 1){
			propKey.textContent = 'My email is';
			propValue.textContent = `${input.results[0].email}`;
		}
		else if (i === 2){
			propKey.textContent = 'I was Born';
			propValue.textContent = `${input.results[0].dob.date}`;
		}
		else if (i === 3){
			propKey.textContent = 'I live at';
			propValue.textContent = `${input.results[0].location.street.number} ${input.results[0].location.street.name}`;
		}


	})
}
}


newUser.addEventListener('click', () => {
	window.location.reload();
})


//  {
	// method: 'GET',
	// headers: {
	// 	'Content-Type': 'application/json'
	// }
	// body: JSON.stringify({

	// }) 

// promise, async await, then & try err handling, fetch