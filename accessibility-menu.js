const accessibilityMenuStyles = `    :root {
        --acc_color_1: #000;
        --acc_color_2: #fff;
        --border_radius: 25px;
    }

    .hidden {
        display: none !important;
    }

    #accessibility-modal, #accessibility-modal * {
        transition: all 0.3s ease 0s;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        line-height: 1;
        letter-spacing: 0;
    }

    #accessibility-modal {
        position: fixed;
        top: 5vh;
        left: 0;
        width: 100%;
        height: 90vh;
        background: var(--acc_color_2);
        z-index: 1000;
        justify-content: center;
        border-radius: 0 var(--border_radius) var(--border_radius) 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        overflow: clip;
    }

    #accessibility-modal #closeBtn {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: var(--border_radius);
        background: var(--acc_color_2);
        cursor: pointer;
        overflow: clip;
        border: none;
        outline: none;
    }

    #accessibility-modal.left #closeBtn {
        top: 0;
        right: 0;
        margin: 15px 0;
    }

    #accessibility-modal.right #closeBtn {
        top: 0;
        left: 0;
        margin: 15px;
    }

    #accessibility-modal.top #closeBtn {
        top: 0;
        left: 0;
        margin: 15px;
    }

    #accessibility-modal.bottom #closeBtn {
        top: 0;
        left: 0;
        margin: 15px;
    }

    #accessibility-modal #closeBtn box-icon {
        top: 0;
        left: 0;
        position: absolute;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #accessibility-modal.left {
        left: 0;
        right: auto;
        max-width: 500px;
        border-radius: 0 var(--border_radius) var(--border_radius) 0;
    }

    #accessibility-modal.right {
        right: 0;
        left: auto;
        max-width: 500px;
        border-radius: var(--border_radius) 0 0 var(--border_radius);
    }

    #accessibility-modal.top {
        top: 0;
        left: 1%;
        width: 98%;
        height: auto;
        max-height: 90vh;
        border-radius: 0 0 var(--border_radius) var(--border_radius);
    }

    #accessibility-modal.bottom {
        top: auto;
        bottom: 0;
        left: 1%;
        width: 98%;
        height: auto;
        max-height: 90vh;
        border-radius: var(--border_radius) var(--border_radius) 0 0;
    }

    #accessibility-modal.close {
        width: 50px;
        height: 50px;
        border-radius: var(--border_radius);
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        overflow: clip;
        margin: 5px;
    }

    #accessibility-modal.close .acc-item {
        opacity: 0;
    }

    #accessibility-modal.close #closeBtn {
        position: absolute;
        width: 50px;
        height: 50px;
        border: none;
        background: none;
        color: var(--acc_color_2);
        background: var(--acc_color_1);
        font-size: 20px;
        cursor: pointer;
        margin: 0;
    }

    #accessibility-modal.close #closeBtn box-icon {
        top: 0;
        left: 0;
        position: absolute;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #accessibility-modal.close:hover #closeBtn {
        filter: opacity(0.8);
    }

    #accessibility-modal #headerContent {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% - 80px);
        height: 50px;
        background: var(--acc_color_1);
        color: var(--acc_color_2);
        border-radius: var(--border_radius);
        margin: 10px 10px 10px 70px;
    }

    #accessibility-modal.left #headerContent {
        margin: 10px 70px 10px 10px;
    }

    #accessibility-modal.right #headerContent {
        margin: 10px 10px 10px 70px;
    }

    #accessibility-modal #headerContent p {
        margin-top: 15px;
        font-size: 20px;
        font-weight: 600;
    }

    #accessibility-modal.close #headerContent {
        display: none;
    }

    #accessibility-tools {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: start;
        width: 100%;
        height: auto;
        transition: all 0.3s ease 2s;
    }

    .acc-item {
        min-width: 120px;
        width: 33%;
        max-width: 200px;
        height: auto;
        margin: 0;
        cursor: pointer;
    }

    .acc-item:hover .acc-child {
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
        border: 1px solid var(--acc_color_1);
    }

    .acc-item:hover .acc-child.active {
        filter: opacity(0.8);
        border: 1px solid var(--acc_color_2);
    }

    .acc-child {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        aspect-ratio: 1/1;
        background: var(--acc_color_2);
        border-radius: var(--border_radius);
        margin: 10px;
        padding: 10px 10px 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border: 1px solid var(--acc_color_1);
    }

    .acc-child.active {
        background: var(--acc_color_1);
        color: var(--acc_color_2);
        box-shadow: none;
        border: 1px solid var(--acc_color_1);
    }

    .acc-progress-parent {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 10px;
    }

    .acc-progress-child {
        min-width: 30%;
        width: 48%;
        max-width: 48%;
        height: 3px;
        margin: 0 1%;
        background: var(--acc_color_1);
        border-radius: 5px;
    }

    .acc-child.active .acc-progress-child {
        background: var(--acc_color_2);
        opacity: 0.5;
    }

    .acc-child.active .acc-progress-child.active {
        opacity: 1;
    }

    /*Accessibility Tools*/
    .invert {
        filter: invert(1);
    }

    .grayscale {
        filter: grayscale(1);
    }

    .low-saturation {
        filter: saturate(20%);
    }

    .high-saturation {
        filter: saturate(200%);
    }

    .underline-style-0 a {
        text-decoration: none;
        background: black !important;
        color: yellow !important;
        font-weight: bolder;
    }

    .underline-style-0 a:hover {
        text-decoration: underline !important;
    }

    .underline-style-1 a {
        text-decoration: none;
        background: #FFD740 !important;
        color: #005A9C !important;
        font-weight: bolder;
    }

    .underline-style-1 a::before {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-bottom: 3px solid #FFD740;
        border-left: 3px solid #FFD740;
        transition: all 0.3s ease;
    }

    .underline-style-1 a:hover::before {
        width: 100%;
        height: 100%;
        border: 5px solid #FFD740;
    }

    .underline-style-1 a:hover {
        text-decoration: underline !important;
    }

    .underline-style-2 a {
        font-weight: bolder;
    }

    .underline-style-2 a:hover {
        text-decoration: underline !important;
    }

    .underline-style-2 a::before {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 5px;
        background: #FFD740;
        bottom: 0;
    }

    .contrast-style-0 {
        filter: contrast(0.5);
    }
    
    .contrast-style-1 {
        filter: contrast(1.5);
    }
    
    .contrast-style-2 {
        filter: contrast(2);
    }

    .hide-images img {
        display: none;
    }
    
    .hide-video video {
        display: none;
    }
   
   .line-height-0 *{
        line-height: 1.5;
   }
    
    .line-height-1 *{
        line-height: 1.8;
   }
    
    .line-height-2 *{
        line-height: 2;
   }
    
`;
const accessibilityMenuHTML = `<div id="accessibility-modal" class="right close">
    <button id="closeBtn" style="z-index: 99999;">
        <box-icon type='solid' color='white' name='universal-access'></box-icon>
    </button>
    <div id="headerContent">
        <p>Accessibility Tools</p>
    </div>
    <div id="accessibility-tools">

        <div class="acc-item">
            <div class="acc-child" id="invert-colors">
                <box-icon name='adjust' type='solid'></box-icon>
                <p>Invert Colours</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

        <div class="acc-item">
            <div class="acc-child" id="grayscale">
                <box-icon name='droplet-half' type='solid'></box-icon>
                <p>Grayscale</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

        <div class="acc-item">
            <div class="acc-child" id="saturation">
                <box-icon name='color' type='solid'></box-icon>
                <p>Low Saturation</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1 active"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                </div>
            </div>
        </div>

        <div class="acc-item">
            <div class="acc-child" id="underline">
                <box-icon name='link'></box-icon>
                <p>Links Highlight</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

        <div class="acc-item">
            <div class="acc-child" id="font-size">
                <box-icon name='font-size'></box-icon>
                <p>Font Size</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

        <div class="acc-item">
            <div class="acc-child" id="line-height">
                <box-icon name='expand-vertical'></box-icon>
                <p>Line Height</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

        <div class="acc-item">
            <div class="acc-child" id="letter-spacing">
                <box-icon name='expand-horizontal'></box-icon>
                <p>Letter Spacing</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

        <div class="acc-item">
            <div class="acc-child" id="text-align">
                <box-icon name='align-left'></box-icon>
                <p>Text Align</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

        <div class="acc-item">
            <div class="acc-child" id="contrast">
                <box-icon name='brightness-half' type='solid'></box-icon>
                <p>Contrast</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

        <div class="acc-item">
            <div class="acc-child" id="hide-images">
                <box-icon type='solid' name='camera-off'></box-icon>
                <p>Hide image</p>
            </div>
        </div>
        
        <div class="acc-item">
            <div class="acc-child" id="hide-video">
                <box-icon type="solid" name='video-off' ></box-icon>
                <p>Hide video</p>
            </div>
        </div>

    </div>
</div><script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>`;
document.addEventListener("DOMContentLoaded", function () {

    // Load Boxicons script
    const boxiconsScript = document.createElement("script");
    boxiconsScript.src = "https://unpkg.com/boxicons@2.1.4/dist/boxicons.js";
    document.body.appendChild(boxiconsScript);

    const accessibilityMenuStyleElement = document.createElement("style");
    accessibilityMenuStyleElement.innerHTML = accessibilityMenuStyles;
    document.head.appendChild(accessibilityMenuStyleElement);

    document.body.insertAdjacentHTML("beforeend", accessibilityMenuHTML);

    //accessibility tool
    const accessibilityModal = document.getElementById('accessibility-modal');
    const closeBtn = document.getElementById('closeBtn');
    const accessibilityTools = document.getElementById('accessibility-tools');

    closeBtn.addEventListener('click', () => {
        accessibilityModal.classList.toggle('close');
        closeBtn.innerHTML = accessibilityModal.classList.contains('close') ? '<box-icon type="solid" color="white" name="universal-access"></box-icon>' : accessibilityModal.classList.contains('top') ? '<box-icon type="solid" color="black" name="chevrons-up"></box-icon>' : accessibilityModal.classList.contains('bottom') ? '<box-icon type="solid" color="black" name="chevrons-down"></box-icon>' : accessibilityModal.classList.contains('left') ? '<box-icon type="solid" color="black" name="chevrons-left"></box-icon>' : accessibilityModal.classList.contains('right') ? '<box-icon type="solid" color="black" name="chevrons-right"></box-icon>' : '';
        accessibilityTools.style.display = accessibilityModal.classList.contains('close') ? setTimeout(() => {
            accessibilityTools.style.display = 'none';
        }, 200) : 'flex';
    });

    const accItems = document.querySelectorAll('.acc-item');

    accItems.forEach(item => {
        item.addEventListener('click', () => {
            item.querySelector('.acc-child').classList.toggle('active');
            item.querySelectorAll('box-icon').forEach(icon => {
                icon.setAttribute('color', item.querySelector('.acc-child').classList.contains('active') ? 'white' : 'black');
            });
        });
    });

    const docElemnt = document.querySelector('html');

    document.querySelector('#invert-colors').addEventListener('click', () => {
        const item = document.querySelector('#invert-colors');
        docElemnt.classList.toggle('invert');
    });

    document.querySelector('#grayscale').addEventListener('click', () => {
        const item = document.querySelector('#grayscale');
        docElemnt.classList.toggle('grayscale');
    });

    let saturationClickCount = 0;
    document.querySelector('#saturation').addEventListener('click', () => {
        const item = document.querySelector('#saturation');
        if (saturationClickCount === 2) {
            saturationClickCount = 0;
            item.querySelector('p').innerText = 'Low Saturation';
            item.querySelector('.acc-progress-parent').classList.add('hidden');
            item.classList.add('active');
            docElemnt.classList.remove('high-saturation');
            docElemnt.classList.remove('low-saturation');
        } else {
            item.classList.remove('active');
            if (saturationClickCount === 0) {
                docElemnt.classList.add('low-saturation');
                item.querySelector('p').innerText = 'Low Saturation';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.add('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
            } else if (saturationClickCount === 1) {
                docElemnt.classList.remove('low-saturation');
                docElemnt.classList.add('high-saturation');
                item.querySelector('p').innerText = 'High Saturation';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.add('active');
            }
            saturationClickCount++;
        }
    });

    let underlineClickCount = 0;
    document.querySelector('#underline').addEventListener('click', () => {
        const item = document.querySelector('#underline');
        if (underlineClickCount === 3) {
            underlineClickCount = 0;
            item.querySelector('.acc-progress-parent').classList.add('hidden');
            item.classList.add('active');
            docElemnt.classList.remove('underline');
            docElemnt.classList.remove('underline-style-0');
            docElemnt.classList.remove('underline-style-1');
            docElemnt.classList.remove('underline-style-2');
        } else {
            item.classList.remove('active');
            if (underlineClickCount === 0) {
                docElemnt.classList.add('underline');
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.add('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
                docElemnt.classList.add('underline-style-0');
                docElemnt.classList.remove('underline-style-1');
                docElemnt.classList.remove('underline-style-2');
            } else if (underlineClickCount === 1) {
                docElemnt.classList.remove('underline-style-0');
                docElemnt.classList.add('underline-style-1');
                docElemnt.classList.remove('underline-style-2');
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.add('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (underlineClickCount === 2) {
                docElemnt.classList.remove('underline-style-0');
                docElemnt.classList.remove('underline-style-1');
                docElemnt.classList.add('underline-style-2');
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.add('active');
            }
            underlineClickCount++;
        }

    });

    let fontSizeClickCount = 0;
    document.querySelector('#font-size').addEventListener('click', () => {
        const item = document.querySelector('#font-size');
        if (fontSizeClickCount === 3) {
            fontSizeClickCount = 0;
            item.querySelector('.acc-progress-parent').classList.add('hidden');
            item.classList.add('active');
            docElemnt.style.fontSize = '';
        } else {
            item.classList.remove('active');
            if (fontSizeClickCount === 0) {
                docElemnt.style.fontSize = '1.3rem';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.add('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (fontSizeClickCount === 1) {
                docElemnt.style.fontSize = '1.5rem';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.add('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (fontSizeClickCount === 2) {
                docElemnt.style.fontSize = '1.8rem';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.add('active');
            }
            fontSizeClickCount++;
        }

    });

    let lineHeightClickCount = 0;
    document.querySelector('#line-height').addEventListener('click', () => {
        const item = document.querySelector('#line-height');
        if (lineHeightClickCount === 3) {
            lineHeightClickCount = 0;
            item.querySelector('.acc-progress-parent').classList.add('hidden');
            item.classList.add('active');
            docElemnt.classList.remove('line-height-0');
            docElemnt.classList.remove('line-height-1');
            docElemnt.classList.remove('line-height-2');
        } else {
            item.classList.remove('active');
            if (lineHeightClickCount === 0) {
                docElemnt.classList.add('line-height-0');
                docElemnt.classList.remove('line-height-1');
                docElemnt.classList.remove('line-height-2');
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.add('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (lineHeightClickCount === 1) {
                docElemnt.classList.remove('line-height-0');
                docElemnt.classList.add('line-height-1');
                docElemnt.classList.remove('line-height-2');
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.add('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (lineHeightClickCount === 2) {
                docElemnt.classList.remove('line-height-0');
                docElemnt.classList.remove('line-height-1');
                docElemnt.classList.add('line-height-2');
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.add('active');
            }
            lineHeightClickCount++;
        }

    });

    let letterSpacingClickCount = 0;
    document.querySelector('#letter-spacing').addEventListener('click', () => {
        const item = document.querySelector('#letter-spacing');
        if (letterSpacingClickCount === 3) {
            letterSpacingClickCount = 0;
            item.querySelector('.acc-progress-parent').classList.add('hidden');
            item.classList.add('active');
            docElemnt.style.letterSpacing = '';
        } else {
            item.classList.remove('active');
            if (letterSpacingClickCount === 0) {
                docElemnt.style.letterSpacing = '0.1rem';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.add('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (letterSpacingClickCount === 1) {
                docElemnt.style.letterSpacing = '0.2rem';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.add('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (letterSpacingClickCount === 2) {
                docElemnt.style.letterSpacing = '0.3rem';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.add('active');
            }
            letterSpacingClickCount++;
        }

    });

    let textAlignClickCount = 0;
    document.querySelector('#text-align').addEventListener('click', () => {
        const item = document.querySelector('#text-align');
        if (textAlignClickCount === 3) {
            textAlignClickCount = 0;
            item.querySelector('.acc-progress-parent').classList.add('hidden');
            item.classList.add('active');
            docElemnt.style.textAlign = '';
        } else {
            item.classList.remove('active');
            if (textAlignClickCount === 0) {
                docElemnt.style.textAlign = 'left';
                item.parentElement.querySelector('box-icon').setAttribute('name', 'align-left');
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.add('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (textAlignClickCount === 1) {
                docElemnt.style.textAlign = 'center';
                item.parentElement.querySelector('box-icon').setAttribute('name', 'align-middle');
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.add('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (textAlignClickCount === 2) {
                docElemnt.style.textAlign = 'right';
                item.parentElement.querySelector('box-icon').setAttribute('name', 'align-right');
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.add('active');
            }
            textAlignClickCount++;
        }

    });

    let contrastClickCount = 0;
    document.querySelector('#contrast').addEventListener('click', () => {
        const item = document.querySelector('#contrast');
        if (contrastClickCount === 3) {
            contrastClickCount = 0;
            item.querySelector('.acc-progress-parent').classList.add('hidden');
            item.classList.add('active');
            docElemnt.classList.remove('contrast');
            docElemnt.classList.remove('contrast-style-0');
            docElemnt.classList.remove('contrast-style-1');
            docElemnt.classList.remove('contrast-style-2');
        } else {
            item.classList.remove('active');
            if (contrastClickCount === 0) {
                docElemnt.classList.add('contrast');
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.add('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
                docElemnt.classList.add('contrast-style-0');
                docElemnt.classList.remove('contrast-style-1');
                docElemnt.classList.remove('contrast-style-2');
            } else if (contrastClickCount === 1) {
                docElemnt.classList.remove('contrast-style-0');
                docElemnt.classList.add('contrast-style-1');
                docElemnt.classList.remove('contrast-style-2');
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.add('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (contrastClickCount === 2) {
                docElemnt.classList.remove('contrast-style-0');
                docElemnt.classList.remove('contrast-style-1');
                docElemnt.classList.add('contrast-style-2');
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.add('active');
            }
            contrastClickCount++;
        }

    });

    document.querySelector('#hide-images').addEventListener('click', () => {
        docElemnt.classList.toggle('hide-images');
    });

    document.querySelector('#hide-video').addEventListener('click', () => {
        docElemnt.classList.toggle('hide-video');
    });

    //save the user's settings in cookies
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    //get the user's settings from cookies
    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    //load the user's settings from cookies
    function loadSettings() {
        const contrast = getCookie('contrast');
        const grayscale = getCookie('grayscale');
        const invert = getCookie('invert');
        const brightness = getCookie('brightness');
        const blur = getCookie('blur');
        const underline = getCookie('underline');
        const fontSize = getCookie('fontSize');

        if (contrast) {
            document.body.classList.add('contrast');
        }
        if (grayscale) {
            document.body.classList.add('grayscale');
        }
        if (invert) {
            document.body.classList.add('invert');
        }
        if (brightness) {
            document.body.classList.add('brightness');
        }
        if (blur) {
            document.body.classList.add('blur');
        }
        if (underline) {
            document.body.classList.add('underline');
        }
        if (fontSize) {
            document.body.style.fontSize = fontSize;
        }
    }

    loadSettings();

    //save the user's settings when the page is closed
    window.addEventListener('beforeunload', function () {
        const contrast = document.body.classList.contains('contrast') ? 'contrast' : '';
        const grayscale = document.body.classList.contains('grayscale') ? 'grayscale' : '';
        const invert = document.body.classList.contains('invert') ? 'invert' : '';
        const brightness = document.body.classList.contains('brightness') ? 'brightness' : '';
        const blur = document.body.classList.contains('blur') ? 'blur' : '';
        const underline = document.body.classList.contains('underline') ? 'underline' : '';
        const fontSize = document.body.style.fontSize;

        setCookie('contrast', contrast, 365);
        setCookie('grayscale', grayscale, 365);
        setCookie('invert', invert, 365);
        setCookie('brightness', brightness, 365);
        setCookie('blur', blur, 365);
        setCookie('underline', underline, 365);
        setCookie('fontSize', fontSize, 365);
    });

});