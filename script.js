
const dogbtn = document.getElementById('dogbtn');

const dog_result = document.getElementById('dog');


dogbtn.addEventListener('click', getRandomDog);



function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
            // console.log(data);
        
            // code for error images
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}
