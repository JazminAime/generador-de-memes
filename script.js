// FUNCIONALIDAD CLICK BOTON - PANEL IMAGEN - PANEL TEXTO
const buttonPanelImage = document.getElementById('img-button');
const buttonPanelText = document.getElementById('text-button');
const panelImage = document.getElementById('panel-img');
const panelText = document.getElementById('panel-text');
const buttonClose = document.getElementById('close-button-panel');
const asideContainer = document.getElementById('panel');

buttonPanelImage.addEventListener('click', function() {
    panelImage.style.display = 'block';
    panelImage.style.height = '1070px';
    buttonClose.style.display = 'block';
    panelText.style.display = 'none';
    asideContainer.style.display = 'block';
});

buttonPanelText.addEventListener ('click', function() {
    panelText.style.display = 'block';
    panelText.style.height = '1070px';
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

// PANEL IMAGEN

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

inputBrillo.addEventListener('input', aplicarFiltros);
inputOpacidad.addEventListener('input', aplicarFiltros);
inputContraste.addEventListener('input', aplicarFiltros);
inputDesenfoque.addEventListener('input', aplicarFiltros);
inputEscalaGrises.addEventListener('input', aplicarFiltros);
inputSepia.addEventListener('input', aplicarFiltros);
inputHueRotation.addEventListener('input', aplicarFiltros);
inputSaturacion.addEventListener('input', aplicarFiltros);
inputNegativo.addEventListener('input', aplicarFiltros);

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

// DESCARGAR MEME
const buttonDownload = document.getElementById('button-download');
const memeContainer = document.getElementById('meme-container');

function descargarMeme () {
    domtoimage.toBlob(memeContainer).then(function (blob) {
        saveAs(blob, 'mi-meme.png')
    }
    )
}

buttonDownload.addEventListener('click', descargarMeme);

// PANEL TEXTO
// TEXTO SUPERIOR - INFERIOR
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const inputTopText = document.getElementById('input-top-text');
const noTopText = document.getElementById('no-top-text');
const inputBottomText = document.getElementById('input-bottom-text');
const noBottomText = document.getElementById('no-bottom-text');

inputTopText.addEventListener('input', function(){
    topText.innerText = inputTopText.value;
});

noTopText.addEventListener('change', function(){
    if (noTopText.checked){
        topText.style.display = 'none';
    }
    else {
        topText.style.display= 'flex';
        topText.style.textAlign = 'center';
    }
});

inputBottomText.addEventListener('input', function(){
    bottomText.innerText = inputBottomText.value;
});

noBottomText.addEventListener('change', function(){
    if (noBottomText.checked){
        bottomText.style.display = 'none';
    } else {
        bottomText.style.display = 'flex';
        bottomText.style.textAlign = 'center';
    }
});

// FUENTE 
fontSelect = document.getElementById('text-select-font');

fontSelect.addEventListener('change', function(){
    const selected = fontSelect.value;

    if (selected === 'Arial'){
        topText.style.fontFamily = 'arial';
        bottomText.style.fontFamily = 'arial';
    } else if (selected === 'Arial Black'){
        topText.style.fontFamily = 'arial black';
        bottomText.style.fontFamily = 'arial black';
    } else if (selected === 'American           typewriter'){
        topText.style.fontFamily = 'American typewriter';
        bottomText.style.fontFamily = 'American Typewriter';
    } else if (selected === 'Andale Mono'){
        topText.style.fontFamily = 'Andale Mono';
        bottomText.style.fontFamily = 'Andale Mono';
    } else if (selected === 'Comic Sans MS'){
        topText.style.fontFamily = 'comic sans ms';
        bottomText.style.fontFamily = 'comic sans ms';
    } else if (selected === 'Helvetica'){
        topText.style.fontFamily = 'Helvetica';
        bottomText.style.fontFamily = 'Helvetica';
    } else if (selected === 'Impact'){
        topText.style.fontFamily = 'impact';
        bottomText.style.fontFamily = 'impact';
    } else if (selected === 'Verdana'){
        topText.style.fontFamily = 'verdana';
        bottomText.style.fontFamily = 'verdana';
    } else if (selected === 'Times New Roman'){
        topText.style.fontFamily = 'times new roman';
        bottomText.style.fontFamily = 'times new roman';
    }
});

// TAMAÑO FUENTE
textSize = document.getElementById('text-size');

textSize.addEventListener('input', function(){
    sizeSelected = textSize.value;
    topText.style.fontSize = `${sizeSelected}px`;
    bottomText.style.fontSize = `${sizeSelected}px`;
});

// TEXTO JUSTIFICADO
leftAlign = document.getElementById('text-left-align');
centerAlign = document.getElementById('text-center-align');
rightAlign = document.getElementById('text-right-align');

leftAlign.addEventListener('click', function(){
    topText.style.justifyContent = 'left';
    bottomText.style.justifyContent = 'left';
});

centerAlign.addEventListener('click', function(){
    topText.style.justifyContent = 'center';
    bottomText.style.justifyContent = 'center';
});

rightAlign.addEventListener('click', function(){
    topText.style.justifyContent = 'right';
    bottomText.style.justifyContent = 'right';
});

// COLOR TEXTO
textColor = document.getElementById('text-color');

textColor.addEventListener('input', function(){
    const colorText = textColor.value;
    topText.style.color = colorText;
    bottomText.style.color = colorText
});

// FONDO TEXTO
const bcgText = document.getElementById('background-text');

bcgText.addEventListener('input', function(){
    const bcgTexto = bcgText.value;
    topText.style.backgroundColor = bcgTexto
    ;
    bottomText.style.backgroundColor = bcgTexto;
});

// FONDO TRANSPARENTE
const bcgTransparent = document.getElementById('transparent-checkbox');

bcgTransparent.addEventListener('change', function(){
    if (bcgTransparent.checked){
        topText.style.backgroundColor = 'transparent';
        bottomText.style.backgroundColor = 'transparent';
    } else {
        const bcgTexto = bcgText.value;
        topText.style.backgroundColor = bcgTexto;
        bottomText.style.backgroundColor = bcgTexto;
    }
});

// CONTORNO
const noOutline = document.getElementById('no-outline');
const lightOutline = document.getElementById('light-outline');
const darkOutline = document.getElementById('dark-outline');

noOutline.addEventListener('click', function(){
    topText.style.textShadow = 'none';
    bottomText.style.textShadow = 'none';
})

lightOutline.addEventListener('click', function(){
    topText.style.textShadow = '2px 2px #FFF, -2px 2px #FFF, 2px -2px #FFF, -2px -2px #FFF';
    bottomText.style.textShadow = '2px 2px #FFF, -2px 2px #FFF, 2px -2px #FFF, -2px -2px #FFF';
})

darkOutline.addEventListener('click', function(){
    topText.style.textShadow = '2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000';
    bottomText.style.textShadow = '2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000';
})

//  PADDING DE TEXTO
 const inputPadding = document.getElementById('input-padding');

 inputPadding.addEventListener('input', function(){
     const selectedPadding = inputPadding.value;
     topText.style.padding = `${selectedPadding}px 10px`;
     bottomText.style.padding = `${selectedPadding}px 10px`;
 })

// INTERLINEADO
const lineHeight = document.getElementById('line-height-text');

lineHeight.addEventListener('change', function(){
const selected = lineHeight.value;
topText.style.lineHeight = selected;
bottomText.style.lineHeight = selected;
});

// RESPONSIVE





