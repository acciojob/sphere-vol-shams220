function volume_sphere() {
    //Write your code here
	const r = document.querySelector('input[name="radius"]');
	const v = document.querySelector('input[name="volume"]');

	const submitBtn = document.querySelector('#submit');

	submitBtn.addEventListener('click',()=>{

		v.value =  (Number(4 / 3) * Math.PI * Math.pow(r, 3));
	})
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
