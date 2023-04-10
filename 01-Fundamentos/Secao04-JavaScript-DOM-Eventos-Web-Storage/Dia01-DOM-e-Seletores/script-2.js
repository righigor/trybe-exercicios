const emergency = document.getElementsByClassName('emergency-tasks');
const fundoTitulo = document.querySelectorAll('h3');
const nonEmergency = document.getElementsByClassName('no-emergency-tasks');
const header = document.getElementById('header-container');
const footer = document.getElementById('footer-container');

header.style.backgroundColor = 'green';
footer.style.backgroundColor = 'darkgreen';
emergency[0].style.backgroundColor = 'red';
nonEmergency[0].style.backgroundColor = 'yellow';
fundoTitulo[0].style.backgroundColor = 'purple';
fundoTitulo[1].style.backgroundColor = 'purple';
fundoTitulo[2].style.backgroundColor = 'black';
fundoTitulo[3].style.backgroundColor = 'black';
