// FUNCIONALIDAD CLICK BOTON - PANEL IMAGEN - PANEL TEXTO
const buttonPanelImage = document.getElementById('img-button');
const buttonPanelText = document.getElementById('text-button');
const panelImage = document.getElementById('panel-img');
const panelText = document.getElementById('panel-text');
const buttonClose = document.getElementById('close-button-panel');
const asideContainer = document.getElementById('panel');

buttonPanelImage.addEventListener('click', function() {
    panelImage.style.display = 'block';
    panelImage.style.height = '970px';
    buttonClose.style.display = 'block';
    panelText.style.display = 'none';
    asideContainer.style.display = 'block';
});

buttonPanelText.addEventListener ('click', function() {
    panelText.style.display = 'block';
    panelText.style.height = '970px';
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

// CARGAR IMAGEN
const urlImg = document.getElementById('url-img');
const imgMeme = document.getElementById('img-meme');

urlImg.addEventListener('input', function(){
    const imgUrl = urlImg.value;

    if (imgUrl) {
        imgMeme.src = imgUrl;
        imgMeme.style.display = 'block'; 
    } else {
        imgMeme.src = '';
        imgMeme.style.display = 'none';
    }
});

// FONDO - COLOR
const panelColorBcg = document.getElementById('panel-color-input');
const figureImg = document.getElementById('meme-img');

panelColorBcg.addEventListener('input', function(){
    const colorSelect = panelColorBcg.value;
    figureImg.style.backgroundColor = colorSelect;
});

// FONDO - SELECT
const selectBcg = document.getElementById('panel-select');

selectBcg.addEventListener('change', function(){
    const selected = selectBcg.value;

    if (selected ==='aclarar'){
        imgMeme.style.mixBlendMode ='lighten';
    } else if (selected === 'oscurecer'){
        imgMeme.style.mixBlendMode = 'darken';
    } else if (selected === 'diferencia'){
        imgMeme.style.mixBlendMode = 'difference';
    } else if (selected === 'luminosidad'){
        imgMeme.style.mixBlendMode = 'luminosity';
    } else if (selected === 'multiplicar'){
        imgMeme.style.mixBlendMode = 'multiply';
    } else if (selected === 'ninguno'){
        imgMeme.style.mixBlendMode = 'normal';
    }
});

// FILTROS 
const inputBrillo = document.getElementById('brightness');
const inputOpacidad = document.getElementById('opacity');
const inputContraste = document.getElementById('contrast');
const inputDesenfoque = document.getElementById('blur');
const inputEscalaGrises = document.getElementById('grayscale');
const inputSepia = document.getElementById('sepia');
const inputHueRotation = document.getElementById('hue-rotation');
const inputSaturacion = document.getElementById('saturation');
const inputNegativo = document.getElementById('invert');

function aplicarFiltros() {
    let brightness = inputBrillo.value;
    let opacity = inputOpacidad.value;
    let contrast = inputContraste.value;
    let blur = inputDesenfoque.value;
    let grayScale = inputEscalaGrises.value;
    let sepia = inputSepia.value;
    let hue = inputHueRotation.value;
    let saturation = inputSaturacion.value;
    let invert = inputNegativo.value;

    imgMeme.style.filter = `
        brightness(${brightness})
        opacity(${opacity})
        contrast(${contrast}%)
        blur(${blur}px)
        grayscale(${grayScale}%)
        sepia(${sepia}%)
        hue-rotate(${hue}deg)
        saturate(${saturation}%)
        invert(${invert})
    `;
}

inputBrillo.addEventListener('input', actualizarFiltros);
inputOpacidad.addEventListener('input', actualizarFiltros);
inputContraste.addEventListener('input', actualizarFiltros);
inputDesenfoque.addEventListener('input', actualizarFiltros);
inputEscalaGrises.addEventListener('input', actualizarFiltros);
inputSepia.addEventListener('input', actualizarFiltros);
inputHueRotation.addEventListener('input', actualizarFiltros);
inputSaturacion.addEventListener('input', actualizarFiltros);
inputNegativo.addEventListener('input', actualizarFiltros);

// REESTABLECER FILTROS 
const buttonReset = document.getElementById('button-filter-default');

buttonReset.addEventListener('click', function(){
    inputBrillo.value = 1;
    inputOpacidad.value = 1;
    inputContraste.value = 100;
    inputDesenfoque.value = 0;
    inputEscalaGrises.value = 0;
    inputSepia.value = 0;
    inputHueRotation.value = 0;
    inputSaturacion.value = 100;
    inputNegativo.value = 0;

    aplicarFiltros();
});






