// FUNCIONALIDAD CLICK BOTON - PANEL IMAGEN - PANEL TEXTO
const buttonPanelImage = document.getElementById('img-button');
const buttonPanelText = document.getElementById('text-button');
const panelImage = document.getElementById('panel-img');
const panelText = document.getElementById('panel-text');
const buttonClose = document.getElementById('close-button-panel');
const asideContainer = document.getElementById('panel');

buttonPanelImage.addEventListener('click', function() {
    panelImage.style.display = 'block';
    panelImage.style.height = '835px';
    buttonClose.style.display = 'block';
    panelText.style.display = 'none';
    asideContainer.style.display = 'block';
});

buttonPanelText.addEventListener ('click', function() {
    panelText.style.display = 'block';
    panelText.style.height = '835px';
    buttonClose.style.display = 'block';
    panelImage.style.display = 'none';
    asideContainer.style.display = 'block';
});

// MOSTRAR Y OCULTAR PANEL 
buttonClose.addEventListener('click', function() {
    asideContainer.style.display = 'none';
    buttonClose.style.display = 'none';
});

 // MODO CLARO - MODO OSCURO
const buttonDark = document.getElementById('button-dark-color');
const buttonLight = document.getElementById('button-light-color');
const body = document.getElementById('body');

buttonDark.addEventListener('click', function(){ 
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    buttonDark.style.display = 'none';
    buttonLight.style.display = 'inline';
});

buttonLight.addEventListener('click', function(){
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    buttonLight.style.display = 'none';
    buttonDark.style.display = 'inline';
});








