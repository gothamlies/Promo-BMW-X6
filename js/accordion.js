document.addEventListener("DOMContentLoaded", ()=> {
    
    const featureLinkElems = document.querySelectorAll(".feature__link");
    const featureSubElems = document.querySelectorAll(".feature-sub");

    for (let i = 0; i < featureLinkElems.length; i++) {
        featureLinkElems[i].addEventListener('click', () => {
            if(featureLinkElems[i].classList.contains('feature__link_active')) 
            {
                featureLinkElems[i].classList.remove('feature__link_active')
                featureSubElems[i].classList.add('hidden')
            } 
            else 
            {
                featureLinkElems.forEach((featureLinkElem) => {
                    featureLinkElem.classList.remove('feature__link_active')
                })
                featureSubElems.forEach((featureSubElem) => {
                    featureSubElem.classList.add('hidden')
                })
                featureLinkElems[i].classList.add('feature__link_active')
                featureSubElems[i].classList.remove('hidden')
            }
        })
    }
});

