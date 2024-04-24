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
        text-align: center;
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
        display: flex;
        justify-content: center;
        align-items: center;
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

    #accessibility-modal #closeBtn svg {
        width: 40px;
        height: 40px;
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

    #accessibility-tools svg,
    #accessibility-tools img{
        width: 30px;
        height: 30px;
        margin-bottom: 10px;
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

    .underline-style-0 a:hover , 
     .underline-style-2 a:hover ,
      .underline-style-1 a:hover{
        text-decoration: underline !important;
    }

    .underline-style-1 a {
        text-decoration: none;
        background: #FFD740 !important;
        color: #005A9C !important;
        font-weight: bolder;
    }

    .underline-style-2 a {
        text-decoration: none;
        background: white !important;
        color: black !important;
        font-weight: bolder;
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

    /*Apply Two or more filters*/
    .invert.grayscale {
        filter: invert(1) grayscale(1);
    }
    
    .invert.low-saturation {
        filter: invert(1) saturate(20%);
    }
    
    .invert.high-saturation {
        filter: invert(1) saturate(200%);
    }
    
    .invert.contrast-style-0 {
        filter: invert(1) contrast(0.5);
    }
    
    .invert.contrast-style-1 {
        filter: invert(1) contrast(1.5);
    }
    
    .invert.contrast-style-2 {
        filter: invert(1) contrast(2);
    }
    
    .grayscale.low-saturation {
        filter: grayscale(1) saturate(20%);
    }
    
    .grayscale.high-saturation {
        filter: grayscale(1) saturate(200%);
    }
    
    .grayscale.contrast-style-0 {
        filter: grayscale(1) contrast(0.5);
    }
    
    .grayscale.contrast-style-1 {
        filter: grayscale(1) contrast(1.5);
    }
    
    .grayscale.contrast-style-2 {
        filter: grayscale(1) contrast(2);
    }
    
    .low-saturation.high-saturation {
        filter: saturate(20%) saturate(200%);
    }
    
    .low-saturation.contrast-style-0 {
        filter: saturate(20%) contrast(0.5);
    }
    
    .low-saturation.contrast-style-1 {
        filter: saturate(20%) contrast(1.5);
    }
    
    .low-saturation.contrast-style-2 {
        filter: saturate(20%) contrast(2);
    }
    
    .high-saturation.contrast-style-0 {
        filter: saturate(200%) contrast(0.5);
    }
    
    .high-saturation.contrast-style-1 {
        filter: saturate(200%) contrast(1.5);
    }
    
    .high-saturation.contrast-style-2 {
        filter: saturate(200%) contrast(2);
    }
    
    .contrast-style-0.contrast-style-1 {
        filter: contrast(0.5) contrast(1.5);
    }
    
    .contrast-style-0.contrast-style-2 {
        filter: contrast(0.5) contrast(2);
    }
    
    .contrast-style-1.contrast-style-2 {
        filter: contrast(1.5) contrast(2);
    }
    
    .invert.grayscale.low-saturation {
        filter: invert(1) grayscale(1) saturate(20%);
    }
    
    .invert.grayscale.high-saturation {
        filter: invert(1) grayscale(1) saturate(200%);
    }
    
    .invert.grayscale.contrast-style-0 {
        filter: invert(1) grayscale(1) contrast(0.5);
    }
    
    .invert.grayscale.contrast-style-1 {
        filter: invert(1) grayscale(1) contrast(1.5);
    }
    
    .invert.grayscale.contrast-style-2 {
        filter: invert(1) grayscale(1) contrast(2);
    }
    
    .invert.low-saturation.high-saturation {
        filter: invert(1) saturate(20%) saturate(200%);
    }
    
    .invert.low-saturation.contrast-style-0 {
        filter: invert(1) saturate(20%) contrast(0.5);
    }
    
    .invert.low-saturation.contrast-style-1 {
        filter: invert(1) saturate(20%) contrast(1.5);
    }
    
    .invert.low-saturation.contrast-style-2 {
        filter: invert(1) saturate(20%) contrast(2);
    }
    
    .invert.high-saturation.contrast-style-0 {
        filter: invert(1) saturate(200%) contrast(0.5);
    }
    
    .invert.high-saturation.contrast-style-1 {
        filter: invert(1) saturate(200%) contrast(1.5);
    }
    
    .invert.high-saturation.contrast-style-2 {
        filter: invert(1) saturate(200%) contrast(2);
    }
    
    .invert.contrast-style-0.contrast-style-1 {
        filter: invert(1) contrast(0.5) contrast(1.5);
    }
    
    .invert.contrast-style-0.contrast-style-2 {
        filter: invert(1) contrast(0.5) contrast(2);
    }
    
    .invert.contrast-style-1.contrast-style-2 {
        filter: invert(1) contrast(1.5) contrast(2);
    }
    
    .grayscale.low-saturation.high-saturation {
        filter: grayscale(1) saturate(20%) saturate(200%);
    }
    
    .grayscale.low-saturation.contrast-style-0 {
        filter: grayscale(1) saturate(20%) contrast(0.5);
    }
    
    .grayscale.low-saturation.contrast-style-1 {
        filter: grayscale(1) saturate(20%) contrast(1.5);
    }
    
    .grayscale.low-saturation.contrast-style-2 {
        filter: grayscale(1) saturate(20%) contrast(2);
    }
    
    .grayscale.high-saturation.contrast-style-0 {
        filter: grayscale(1) saturate(200%) contrast(0.5);
    }
    
    .grayscale.high-saturation.contrast-style-1 {
        filter: grayscale(1) saturate(200%) contrast(1.5);
    }
    
    .grayscale.high-saturation.contrast-style-2 {
        filter: grayscale(1) saturate(200%) contrast(2);
    }
    
    .grayscale.contrast-style-0.contrast-style-1 {
        filter: grayscale(1) contrast(0.5) contrast(1.5);
    }
    
    .grayscale.contrast-style-0.contrast-style-2 {
        filter: grayscale(1) contrast(0.5) contrast(2);
    }
    
    .grayscale.contrast-style-1.contrast-style-2 {
        filter: grayscale(1) contrast(1.5) contrast(2);
    }
    
    .low-saturation.high-saturation.contrast-style-0 {
        filter: saturate(20%) saturate(200%) contrast(0.5);
    }
    
    .low-saturation.high-saturation.contrast-style-1 {
        filter: saturate(20%) saturate(200%) contrast(1.5);
    }
    
    .low-saturation.high-saturation.contrast-style-2 {
        filter: saturate(20%) saturate(200%) contrast(2);
    }
    
    .low-saturation.contrast-style-0.contrast-style-1 {
        filter: saturate(20%) contrast(0.5) contrast(1.5);
    }
    
    .low-saturation.contrast-style-0.contrast-style-2 {
        filter: saturate(20%) contrast(0.5) contrast(2);
    }
    
    .low-saturation.contrast-style-1.contrast-style-2 {
        filter: saturate(20%) contrast(1.5) contrast(2);
    }
    
    .high-saturation.contrast-style-0.contrast-style-1 {
        filter: saturate(200%) contrast(0.5) contrast(1.5);
    }
    
    .high-saturation.contrast-style-0.contrast-style-2 {
        filter: saturate(200%) contrast(0.5) contrast(2);
    }
    
    .high-saturation.contrast-style-1.contrast-style-2 {
        filter: saturate(200%) contrast(1.5) contrast(2);
    }
    
    .contrast-style-0.contrast-style-1.contrast-style-2 {
        filter: contrast(0.5) contrast(1.5) contrast(2);
    }
    
    .invert.grayscale.low-saturation.high-saturation {
        filter: invert(1) grayscale(1) saturate(20%) saturate(200%);
    }
    
    .invert.grayscale.low-saturation.contrast-style-0 {
        filter: invert(1) grayscale(1) saturate(20%) contrast(0.5);
    }
    
    .invert.grayscale.low-saturation.contrast-style-1 {
        filter: invert(1) grayscale(1) saturate(20%) contrast(1.5);
    }
    
    .invert.grayscale.low-saturation.contrast-style-2 {
        filter: invert(1) grayscale(1) saturate(20%) contrast(2);
    }
    
    .invert.grayscale.high-saturation.contrast-style-0 {
        filter: invert(1) grayscale(1) saturate(200%) contrast(0.5);
    }
    
    .invert.grayscale.high-saturation.contrast-style-1 {
        filter: invert(1) grayscale(1) saturate(200%) contrast(1.5);
    }
    
    .invert.grayscale.high-saturation.contrast-style-2 {
        filter: invert(1) grayscale(1) saturate(200%) contrast(2);
    }
    
    .invert.low-saturation.high-saturation.contrast-style-0 {
        filter: invert(1) saturate(20%) saturate(200%) contrast(0.5);
    }
    
    .invert.low-saturation.high-saturation.contrast-style-1 {
        filter: invert(1) saturate(20%) saturate(200%) contrast(1.5);
    }
    
    .invert.low-saturation.high-saturation.contrast-style-2 {
        filter: invert(1) saturate(20%) saturate(200%) contrast(2);
    }
    
    .invert.low-saturation.contrast-style-0.contrast-style-1 {
        filter: invert(1) saturate(20%) contrast(0.5) contrast(1.5);
    }
    
    .invert.low-saturation.contrast-style-0.contrast-style-2 {
        filter: invert(1) saturate(20%) contrast(0.5) contrast(2);
    }
    
    .invert.low-saturation.contrast-style-1.contrast-style-2 {
        filter: invert(1) saturate(20%) contrast(1.5) contrast(2);
    }
    
    .invert.high-saturation.contrast-style-0.contrast-style-1 {
        filter: invert(1) saturate(200%) contrast(0.5) contrast(1.5);
    }
    
    .invert.high-saturation.contrast-style-0.contrast-style-2 {
        filter: invert(1) saturate(200%) contrast(0.5) contrast(2);
    }
    
    .invert.high-saturation.contrast-style-1.contrast-style-2 {
        filter: invert(1) saturate(200%) contrast(1.5) contrast(2);
    }
    
    .grayscale.low-saturation.high-saturation.contrast-style-0 {
        filter: grayscale(1) saturate(20%) saturate(200%) contrast(0.5);
    }
    
    .grayscale.low-saturation.high-saturation.contrast-style-1 {
        filter: grayscale(1) saturate(20%) saturate(200%) contrast(1.5);
    }
    
    .grayscale.low-saturation.high-saturation.contrast-style-2 {
        filter: grayscale(1) saturate(20%) saturate(200%) contrast(2);
    }
    
    .grayscale.low-saturation.contrast-style-0.contrast-style-1 {
        filter: grayscale(1) saturate(20%) contrast(0.5) contrast(1.5);
    }
    
    .grayscale.low-saturation.contrast-style-0.contrast-style-2 {
        filter: grayscale(1) saturate(20%) contrast(0.5) contrast(2);
    }
    
    .grayscale.low-saturation.contrast-style-1.contrast-style-2 {
        filter: grayscale(1) saturate(20%) contrast(1.5) contrast(2);
    }
    
    .grayscale.high-saturation.contrast-style-0.contrast-style-1 {
        filter: grayscale(1) saturate(200%) contrast(0.5) contrast(1.5);
    }
    
    .grayscale.high-saturation.contrast-style-0.contrast-style-2 {
        filter: grayscale(1) saturate(200%) contrast(0.5) contrast(2);
    }
    
    .grayscale.high-saturation.contrast-style-1.contrast-style-2 {
        filter: grayscale(1) saturate(200%) contrast(1.5) contrast(2);
    }
    
    .low-saturation.high-saturation.contrast-style-0.contrast-style-1 {
        filter: saturate(20%) saturate(200%) contrast(0.5) contrast(1.5);
    }
    
    .low-saturation.high-saturation.contrast-style-0.contrast-style-2 {
        filter: saturate(20%) saturate(200%) contrast(0.5) contrast(2);
    }
    
    .low-saturation.high-saturation.contrast-style-1.contrast-style-2 {
        filter: saturate(20%) saturate(200%) contrast(1.5) contrast(2);
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
    
    #reset-all{
        width: calc(100% - 20px);
        height: 50px;
        background: var(--acc_color_1);
        color: var(--acc_color_2);
        border-radius: var(--border_radius);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }
    
`;
const accessibilityMenuHTML = `<div id="accessibility-modal" class="right close">
    <button id="closeBtn" style="z-index: 99999;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             class="bi bi-universal-access-circle" viewBox="0 0 16 16">
            <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143m-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z"/>
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8"/>
        </svg>
    </button>
    <div id="headerContent">
        <p>Accessibility Tools</p>
    </div>
    <div id="accessibility-tools">

<!--invert colors-->
        <div class="acc-item">
            <div class="acc-child" id="invert-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-circle-half"
                     viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
                </svg>
                <p>Invert Colours</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

<!--grayscale-->
        <div class="acc-item">
            <div class="acc-child" id="grayscale">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-droplet-half" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                    <path fill-rule="evenodd"
                          d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"/>
                </svg>
                <p>Grayscale</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>
        
<!--saturation-->
        <div class="acc-item">
            <div class="acc-child" id="saturation">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette"
                     viewBox="0 0 16 16">
                    <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                    <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7"/>
                </svg>
                <p>Low Saturation</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1 active"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                </div>
            </div>
        </div>
        
<!--links highlight-->
        <div class="acc-item">
            <div class="acc-child" id="underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-link-45deg" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                </svg>
                <p>Links Highlight</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>
        
<!--font size-->
        <div class="acc-item">
            <div class="acc-child" id="font-size">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 12V17H17.5C17.7761 17 18 17.2239 18 17.5C18 17.7761 17.7761 18 17.5 18H15.5C15.2239 18 15 17.7761 15 17.5C15 17.2239 15.2239 17 15.5 17H16V12H14V12.5C14 12.7761 13.7761 13 13.5 13C13.2239 13 13 12.7761 13 12.5V11.5C13 11.2239 13.2239 11 13.5 11H19.5C19.7761 11 20 11.2239 20 11.5V12.5C20 12.7761 19.7761 13 19.5 13C19.2239 13 19 12.7761 19 12.5V12H17ZM10 6V17H11.5C11.7761 17 12 17.2239 12 17.5C12 17.7761 11.7761 18 11.5 18H7.5C7.22386 18 7 17.7761 7 17.5C7 17.2239 7.22386 17 7.5 17H9V6H5V7.5C5 7.77614 4.77614 8 4.5 8C4.22386 8 4 7.77614 4 7.5V5.5C4 5.22386 4.22386 5 4.5 5H14.5C14.7761 5 15 5.22386 15 5.5V7.5C15 7.77614 14.7761 8 14.5 8C14.2239 8 14 7.77614 14 7.5V6H10Z"
                          fill="black"/>
                </svg>
                <p>Font Size</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

<!--line height-->
        <div class="acc-item">
            <div class="acc-child" id="line-height">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5.70711V17.2929L20.1464 16.1464C20.3417 15.9512 20.6583 15.9512 20.8536 16.1464C21.0488 16.3417 21.0488 16.6583 20.8536 16.8536L18.8536 18.8536C18.6583 19.0488 18.3417 19.0488 18.1464 18.8536L16.1464 16.8536C15.9512 16.6583 15.9512 16.3417 16.1464 16.1464C16.3417 15.9512 16.6583 15.9512 16.8536 16.1464L18 17.2929V5.70711L16.8536 6.85355C16.6583 7.04882 16.3417 7.04882 16.1464 6.85355C15.9512 6.65829 15.9512 6.34171 16.1464 6.14645L18.1464 4.14645C18.3417 3.95118 18.6583 3.95118 18.8536 4.14645L20.8536 6.14645C21.0488 6.34171 21.0488 6.65829 20.8536 6.85355C20.6583 7.04882 20.3417 7.04882 20.1464 6.85355L19 5.70711ZM8 18V5H4V6.5C4 6.77614 3.77614 7 3.5 7C3.22386 7 3 6.77614 3 6.5V4.5C3 4.22386 3.22386 4 3.5 4H13.5C13.7761 4 14 4.22386 14 4.5V6.5C14 6.77614 13.7761 7 13.5 7C13.2239 7 13 6.77614 13 6.5V5H9V18H10.5C10.7761 18 11 18.2239 11 18.5C11 18.7761 10.7761 19 10.5 19H6.5C6.22386 19 6 18.7761 6 18.5C6 18.2239 6.22386 18 6.5 18H8Z"
                          fill="black"/>
                </svg>
                <p>Line Height</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>
        
<!--letter spacing-->
        <div class="acc-item">
            <div class="acc-child" id="letter-spacing">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5.70711V17.2929L20.1464 16.1464C20.3417 15.9512 20.6583 15.9512 20.8536 16.1464C21.0488 16.3417 21.0488 16.6583 20.8536 16.8536L18.8536 18.8536C18.6583 19.0488 18.3417 19.0488 18.1464 18.8536L16.1464 16.8536C15.9512 16.6583 15.9512 16.3417 16.1464 16.1464C16.3417 15.9512 16.6583 15.9512 16.8536 16.1464L18 17.2929V5.70711L16.8536 6.85355C16.6583 7.04882 16.3417 7.04882 16.1464 6.85355C15.9512 6.65829 15.9512 6.34171 16.1464 6.14645L18.1464 4.14645C18.3417 3.95118 18.6583 3.95118 18.8536 4.14645L20.8536 6.14645C21.0488 6.34171 21.0488 6.65829 20.8536 6.85355C20.6583 7.04882 20.3417 7.04882 20.1464 6.85355L19 5.70711ZM8 18V5H4V6.5C4 6.77614 3.77614 7 3.5 7C3.22386 7 3 6.77614 3 6.5V4.5C3 4.22386 3.22386 4 3.5 4H13.5C13.7761 4 14 4.22386 14 4.5V6.5C14 6.77614 13.7761 7 13.5 7C13.2239 7 13 6.77614 13 6.5V5H9V18H10.5C10.7761 18 11 18.2239 11 18.5C11 18.7761 10.7761 19 10.5 19H6.5C6.22386 19 6 18.7761 6 18.5C6 18.2239 6.22386 18 6.5 18H8Z"
                          fill="black"/>
                </svg>
                <p>Letter Spacing</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>
        
<!--text align-->
        <div class="acc-item">
            <div class="acc-child" id="text-align">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 13H14.5C14.7761 13 15 13.2239 15 13.5C15 13.7761 14.7761 14 14.5 14H10.5C10.2239 14 10 13.7761 10 13.5C10 13.2239 10.2239 13 10.5 13H12V5H5V6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5V4.5C4 4.22386 4.22386 4 4.5 4H20.5C20.7761 4 21 4.22386 21 4.5V6.5C21 6.77614 20.7761 7 20.5 7C20.2239 7 20 6.77614 20 6.5V5H13V13ZM5.70711 18H19.2929L18.1464 16.8536C17.9512 16.6583 17.9512 16.3417 18.1464 16.1464C18.3417 15.9512 18.6583 15.9512 18.8536 16.1464L20.8536 18.1464C21.0488 18.3417 21.0488 18.6583 20.8536 18.8536L18.8536 20.8536C18.6583 21.0488 18.3417 21.0488 18.1464 20.8536C17.9512 20.6583 17.9512 20.3417 18.1464 20.1464L19.2929 19H5.70711L6.85355 20.1464C7.04882 20.3417 7.04882 20.6583 6.85355 20.8536C6.65829 21.0488 6.34171 21.0488 6.14645 20.8536L4.14645 18.8536C3.95118 18.6583 3.95118 18.3417 4.14645 18.1464L6.14645 16.1464C6.34171 15.9512 6.65829 15.9512 6.85355 16.1464C7.04882 16.3417 7.04882 16.6583 6.85355 16.8536L5.70711 18Z"
                          fill="black"/>
                </svg>
                <p>Text Align</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>
        
<!--contrast-->
        <div class="acc-item">
            <div class="acc-child" id="contrast">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-transparency" viewBox="0 0 16 16">
                    <path d="M0 6.5a6.5 6.5 0 0 1 12.346-2.846 6.5 6.5 0 1 1-8.691 8.691A6.5 6.5 0 0 1 0 6.5m5.144 6.358a5.5 5.5 0 1 0 7.714-7.714 6.5 6.5 0 0 1-7.714 7.714m-.733-1.269q.546.226 1.144.33l-1.474-1.474q.104.597.33 1.144m2.614.386a5.5 5.5 0 0 0 1.173-.242L4.374 7.91a6 6 0 0 0-.296 1.118zm2.157-.672q.446-.25.838-.576L5.418 6.126a6 6 0 0 0-.587.826zm1.545-1.284q.325-.39.576-.837L6.953 4.83a6 6 0 0 0-.827.587l4.6 4.602Zm1.006-1.822q.183-.562.242-1.172L9.028 4.078q-.58.096-1.118.296l3.823 3.824Zm.186-2.642a5.5 5.5 0 0 0-.33-1.144 5.5 5.5 0 0 0-1.144-.33z"/>
                </svg>
                <p>Contrast</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>
        
<!--hide images-->
        <div class="acc-item">
            <div class="acc-child" id="hide-images">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.8,4L4.8,4l1,1L4.8,4z M19.7,19L19.7,19l0.8,0.8L19.7,19z"/>
                    <path d="M18,7h-2c-0.5,0-1,0.5-1,1v2c0,0.5,0.5,1,1,1h2c0.5,0,1-0.5,1-1V8C19,7.5,18.5,7,18,7z M18,10h-2V8h2V10z"/>
                    <path d="M22,6.5v11c0,0.6-0.2,1.1-0.6,1.6l-0.6-0.6l-0.1-0.1l-4.9-4.9l0.3-0.3c0.2-0.2,0.5-0.2,0.7,0l4.2,4.1V6.5
\tC21,5.7,20.3,5,19.5,5H7.4l-1-1h13.1C20.9,4,22,5.1,22,6.5z"/>
                    <path d="M1.9,1.1L1.1,1.9l2.4,2.4C2.6,4.6,2,5.5,2,6.5v11C2,18.9,3.1,20,4.5,20h14.8l2.9,2.9l0.7-0.7L1.9,1.1z M3,6.5
\tC3,5.8,3.5,5.1,4.3,5l10,10l-0.8,0.8l-5.7-5.6c-0.2-0.2-0.5-0.2-0.7,0L3,14.3V6.5z M4.5,19C3.7,19,3,18.3,3,17.5v-1.8l4.5-4.5
\tl5.7,5.6c0.2,0.2,0.5,0.2,0.7,0l1.1-1.1l3.3,3.3H4.5z"/>
                </svg>
                <p>Hide image</p>
            </div>
        </div>
        
<!--hide video-->
        <div class="acc-item">
            <div class="acc-child" id="hide-video">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-camera-video-off" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M10.961 12.365a2 2 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l.714 1H9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-.144.518zM1.428 4.18A1 1 0 0 0 1 5v6a1 1 0 0 0 1 1h5.014l.714 1H2a2 2 0 0 1-2-2V5c0-.675.334-1.272.847-1.634zM15 11.73l-3.5-1.555v-4.35L15 4.269zm-4.407 3.56-10-14 .814-.58 10 14z"/>
                </svg>
                <p>Hide video</p>
            </div>
        </div>
        
<!--change cursor-->
        <div class="acc-item">
            <div class="acc-child" id="change-cursor">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.85333 19.8536C8.58758 20.1193 8.13463 20.0079 8.02253 19.6492L3.02253 3.64915C2.90221 3.26413 3.26389 2.90246 3.64891 3.02278L19.6489 8.02278C20.0076 8.13487 20.1191 8.58782 19.8533 8.85357L16.2069 12.5L20.8533 17.1465C21.0486 17.3417 21.0486 17.6583 20.8533 17.8536L17.8533 20.8536C17.6581 21.0488 17.3415 21.0488 17.1462 20.8536L12.4998 16.2071L8.85333 19.8536ZM4.26173 4.26197L8.73053 18.5621L12.1462 15.1465C12.3415 14.9512 12.6581 14.9512 12.8533 15.1465L17.4998 19.7929L19.7927 17.5L15.1462 12.8536C14.951 12.6583 14.951 12.3417 15.1462 12.1465L18.5619 8.73078L4.26173 4.26197Z"
                          fill="black"/>
                </svg>
                <p>Change Cursors</p>
            </div>
        </div>
    </div>
    
<!--reset all-->
<button id="reset-all">
    Reset All
</button>

</div>`;
document.addEventListener("DOMContentLoaded", function () {

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
        closeBtn.innerHTML = accessibilityModal.classList.contains('close') ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-universal-access-circle" viewBox="0 0 16 16">\n' +
            '  <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143m-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z"/>\n' +
            '  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8"/>\n' +
            '</svg>' : accessibilityModal.classList.contains('top') ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">\n' +
            '  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>\n' +
            '</svg>' : accessibilityModal.classList.contains('bottom') ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n' +
            '  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>\n' +
            '</svg>' : accessibilityModal.classList.contains('left') ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n' +
            '  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>\n' +
            '</svg>' : accessibilityModal.classList.contains('right') ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n' +
            '  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>\n' +
            '</svg>' : '';
        accessibilityTools.style.display = accessibilityModal.classList.contains('close') ? setTimeout(() => {
            accessibilityTools.style.display = 'none';
        }, 200) : 'flex';
    });

    const accItems = document.querySelectorAll('.acc-item');

    accItems.forEach(item => {
        item.addEventListener('click', () => {
            item.querySelector('.acc-child').classList.toggle('active');
            item.querySelectorAll('path').forEach(icon => {
                icon.style.fill = item.querySelector('.acc-child').classList.contains('active') ? 'var(--acc_color_2)' : 'var(--acc_color_1)';
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
                item.parentElement.querySelector('svg').innerHTML = `<path d="M4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6H19.5C19.7761 6 20 6.22386 20 6.5C20 6.77614 19.7761 7 19.5 7H4.5ZM4.5 15C4.22386 15 4 14.7761 4 14.5C4 14.2239 4.22386 14 4.5 14H19.5C19.7761 14 20 14.2239 20 14.5C20 14.7761 19.7761 15 19.5 15H4.5ZM4.5 11C4.22386 11 4 10.7761 4 10.5C4 10.2239 4.22386 10 4.5 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H4.5ZM4.5 19C4.22386 19 4 18.7761 4 18.5C4 18.2239 4.22386 18 4.5 18H13.5C13.7761 18 14 18.2239 14 18.5C14 18.7761 13.7761 19 13.5 19H4.5Z" fill="black"/>`;
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.add('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (textAlignClickCount === 1) {
                docElemnt.style.textAlign = 'center';
                item.parentElement.querySelector('svg').innerHTML = `<path d="M4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6H19.5C19.7761 6 20 6.22386 20 6.5C20 6.77614 19.7761 7 19.5 7H4.5ZM4.5 15C4.22386 15 4 14.7761 4 14.5C4 14.2239 4.22386 14 4.5 14H19.5C19.7761 14 20 14.2239 20 14.5C20 14.7761 19.7761 15 19.5 15H4.5ZM7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10H16.5C16.7761 10 17 10.2239 17 10.5C17 10.7761 16.7761 11 16.5 11H7.5ZM7.5 19C7.22386 19 7 18.7761 7 18.5C7 18.2239 7.22386 18 7.5 18H16.5C16.7761 18 17 18.2239 17 18.5C17 18.7761 16.7761 19 16.5 19H7.5Z" fill="black"/>`;
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.add('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (textAlignClickCount === 2) {
                docElemnt.style.textAlign = 'right';
                item.parentElement.querySelector(`svg`).innerHTML = `<path d="M4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6H19.5C19.7761 6 20 6.22386 20 6.5C20 6.77614 19.7761 7 19.5 7H4.5ZM4.5 15C4.22386 15 4 14.7761 4 14.5C4 14.2239 4.22386 14 4.5 14H19.5C19.7761 14 20 14.2239 20 14.5C20 14.7761 19.7761 15 19.5 15H4.5ZM10.5 11C10.2239 11 10 10.7761 10 10.5C10 10.2239 10.2239 10 10.5 10H19.5C19.7761 10 20 10.2239 20 10.5C20 10.7761 19.7761 11 19.5 11H10.5ZM10.5 19C10.2239 19 10 18.7761 10 18.5C10 18.2239 10.2239 18 10.5 18H19.5C19.7761 18 20 18.2239 20 18.5C20 18.7761 19.7761 19 19.5 19H10.5Z" fill="black"/>`;
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

    document.querySelector('#reset-all').addEventListener('click', () => {
        docElemnt.classList.remove('invert');
        docElemnt.classList.remove('grayscale');
        docElemnt.classList.remove('high-saturation');
        docElemnt.classList.remove('low-saturation');
        docElemnt.classList.remove('underline');
        docElemnt.classList.remove('underline-style-0');
        docElemnt.classList.remove('underline-style-1');
        docElemnt.classList.remove('underline-style-2');
        docElemnt.style.fontSize = '';
        docElemnt.classList.remove('line-height-0');
        docElemnt.classList.remove('line-height-1');
        docElemnt.classList.remove('line-height-2');
        docElemnt.style.letterSpacing = '';
        docElemnt.style.textAlign = '';
        docElemnt.classList.remove('contrast');
        docElemnt.classList.remove('contrast-style-0');
        docElemnt.classList.remove('contrast-style-1');
        docElemnt.classList.remove('contrast-style-2');
        docElemnt.classList.remove('hide-images');
        docElemnt.classList.remove('hide-video');

        //reset the progress bar
        document.querySelectorAll('.acc-progress-parent').forEach(child => {
            child.classList.add('hidden');
        });

        //reset the active state of the accessibility tools
        document.querySelectorAll('.acc-child').forEach(child => {
            child.classList.remove('active');
            child.querySelectorAll('path').forEach(icon => {
                icon.style.fill = 'var(--acc_color_1)';
            });
        });
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