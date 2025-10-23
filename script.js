function volume_sphere(event) {
    event.preventDefault(); 

    const r = document.querySelector('#radius');
    const v = document.querySelector('#volume');

    const radius = Number(r.value);

    if (isNaN(radius) || radius <= 0) {
        v.value = "Invalid radius";
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    v.value = volume.toFixed(2); 
}

window.onload = () => {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
