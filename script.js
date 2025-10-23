function volume_sphere() {
    //Write your code here
	const r = document.querySelector('input[name="radius"]');
	const v = document.querySelector('input[name="volume"]');

	
    const radius = Number(r.value);

    if (isNaN(radius) || radius <= 0) {
        v.value = "Invalid radius";
        return;
    }


	const submitBtn = document.querySelector('#submit');

	submitBtn.addEventListener('click',()=>{

		v.value =  (4 / 3) * Math.PI * Math.pow(r.value, 3);
	})
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
