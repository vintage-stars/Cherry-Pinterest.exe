// ==UserScript==
// @name         Pinterest Userscript
// @namespace    Violentmonkey Scripts
// @version      1.1
// @description  Makes your pinterest cherry pink
// @author       harprit
// @match        https://www.pinterest.com/*
// @grant        GM_addStyle
// @run-at       document-end
// @license      MIT
// ==/UserScript==
 
/*REQUIRES GATCHINA FONT TO BE LOCAL
DOWNLOAD HERE: https://fontesk.com/gatchina-font/#google_vignette */
/*font allows redistribution and adaptation, font is made by author Dimitri Antonov / Blue Curve Designstudio*/
 
 
 
/*Changing Pinterest Fonts == BASIC TEXT DETAIL==*/
 
GM_addStyle(`
    @font-face {
        font-family: 'Gatchina';
        src: local('Gatchina'), local('Gatchina-Regular');
    }
 
    *{
    font-family: 'Gatchina', serif !important;
    font-size: 16px !important;
    letter-spacing: 0.3px !important;
    color: #E5EDF5 !important;
    }
 
    *{
    text-shadow:
        0 1px 0 rgba(255, 255, 255, 0.4),
        0 2px 0 rgba(0, 0, 0, 0.8),
        0 0 2px rgba(255, 255, 255, 0.2) !important;
    }
 
    /*SideBar Image Pinkk :D*/
    #VerticalNavContent {
        background-image: url('https://i.pinimg.com/736x/78/47/03/78470344718f5a3dca8e7e31d2a1a360.jpg') !important;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        border-right: 4px solid #ffd7e849 !important;
    }
 
    /*pfp change, feel free to import ur own URL*/
    img[alt="Your profile"] {
        content: url('https://i.pinimg.com/736x/fd/4e/71/fd4e713c9193f09867a3a45a0f2ce27f.jpg') !important;
        width: 50px !important;
        height: 50px !important;
        border: none !important;
        outline: none !important;
    }
 
    /*Changing icon and button colours*/
    div.button_n.primary_n {
        background-color: #bca1b782 !important;
    }
 
    div.iconButtonWhite_T{
        background-color: #bca1b782 !important;
    }
 
    div.pinterest-logo-home-button{
        background-color: #bca1b782 !important;
    }
 
 
    #VerticalNavContent svg path {
        fill: #bca1b782 !important;
        stroke: #bca1b782 !important;
    }
 
 
    .space-particle {
        position: fixed;
        top: -40px;
        z-index: 99999;
        pointer-events: none;
        user-select: none;
 
    animation:
        space-fall var(--fall-duration) linear var(--fall-delay) infinite,
        space-drift 3s ease-in-out infinite alternate;
 
    will-change: transform;
}
 
@keyframes space-fall {
    from {
        transform: translateY(-40px);
    }
    to {
        transform: translateY(110vh);
    }
}
 
@keyframes space-drift {
    from {
        margin-left: -15px;
    }
    to {
        margin-left: 15px;
    }
}
 
.space-particle img {
    width: 100%;
    height: 100%;
    object-fit: contain;}
 
@media (prefers-reduced-motion: reduce) {
    .space-particle {
        animation: none !important;
        display: none !important;
    }
}
 
 
`);
 
 
/*cat GIFFFF (inspo from space hey by xXjellyfishl0vrXx)*/
/*i just took her uhh gif link*/
 
(function() {
    'use strict';
 
    const cat = document.createElement('img');
 
    cat.src = 'https://autism.crd.co/assets/images/gallery03/45050ba7_original.gif?v=69d6a439';
    cat.alt = 'cat kittycat';
 
 
    cat.style.position = 'fixed';
    cat.style.bottom = '30px';
    cat.style.left = '80px';
    cat.style.maxWidth = '700px';
    cat.style.zIndex = '200';
    cat.style.pointerEvents = 'none' ;
 
    document.body.appendChild(cat);
})();
 
(function() {
    'use strict';
 
    const particleCount = 18;
    const particleImage =
       'https://p1.hiclipart.com/preview/1010/340/872/pixel-orange-star-illustration-png-clipart.jpg';
 
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const img = document.createElement('img');
 
        particle.className = 'space-particle';
        img.src = particleImage;
        img.alt = '';
 
        const size = 10 + Math.random() * 16;
        const duration = 7 + Math.random() * 12;
        const delay = Math.random() * -20;
 
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.setProperty('--fall-duration', duration + 's');
        particle.style.setProperty('--fall-delay', delay + 's');
 
        particle.appendChild(img);
        document.body.appendChild(particle);
    }
})();