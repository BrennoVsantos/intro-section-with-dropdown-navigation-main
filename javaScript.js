const featuresBtn = document.querySelector('#btn-features');
const companyBtn = document.querySelector('#btn-company');
const featuresContainer = document.querySelector('.features-container');
const companyContainer = document.querySelector('.company-container');

const mobileFeature = document.querySelector('#mob-feature-btn');
const mobFeatureContainer = document.querySelector('.features-mob');

const mobileCompanyBtn = document.querySelector('#company-feature-btn');
const mobCompanyContainer = document.querySelector('.Company-mob')

const btnMenu = document.querySelector('.menu');
const navContainer = document.querySelector('.mob-nav');

const arrowDown = "images/icon-arrow-down.svg";
const arrowUp = "images/icon-arrow-up.svg";

const featIcon = document.querySelector('.ftr');
const companyIconMb = document.querySelector('.ftrMb');

const companyIcon = document.querySelector('.cpn');
const companyIconMbl = document.querySelector('.cpnMbl');


featuresBtn.addEventListener('click', () => {
    featuresContainer.classList.toggle('feat-on');
    updateIcon(featIcon);
});

companyBtn.addEventListener('click', () => {
    companyContainer.classList.toggle('company-on');
    updateIcon(companyIcon);
})

mobileFeature.addEventListener('click', () => {
    mobFeatureContainer.classList.toggle('mob-feat-on');
    updateIcon(companyIconMb);
});

mobileCompanyBtn.addEventListener('click', () => {
    mobCompanyContainer.classList.toggle('mob-company-on');
    updateIcon(companyIconMbl);
});

btnMenu.addEventListener('click', () => {
    navContainer.classList.toggle('mob-nav-on');
})

function updateIcon(e){
    if(e.style.transform ==="rotate(180deg)"){
        e.style.transform = "rotate(0deg)"
    } else {
        e.style.transform = "rotate(180deg)"
    }
};
