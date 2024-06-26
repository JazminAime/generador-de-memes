// FUNCIONALIDAD CLICK BOTON - PANEL IMAGEN - PANEL TEXTO
const buttonPanelImage = document.getElementById('img-button');
const buttonPanelText = document.getElementById('text-button');
const panelImage = document.getElementById('panel-img');
const panelText = document.getElementById('panel-text');

buttonPanelImage.addEventListener('click', function() {
    panelImage.style.display = 'block';
    panelImage.style.height = '835px';
    panelText.style.display = 'none';
});

buttonPanelText.addEventListener ('click', function() {
    panelText.style.display = 'block';
    panelText.style.height = '835px';
    panelImage.style.display = 'none';
});
