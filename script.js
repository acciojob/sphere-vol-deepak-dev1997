
function volume_sphere() {
    const radius = document.getElementById('radius').value;
  const volumeField = document.getElementById('volume');
  const volume = (4/3) * Math.PI * Math.pow(radius, 3);
	volumeField.value = volume;
	event.preventDefault();
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
