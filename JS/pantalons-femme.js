/*
  // Vérifier l'URL et rediriger sans extension si nécessaire
  if (window.location.pathname.endsWith('.html')) {
    const newURL = window.location.pathname.replace(/\.html$/, '');
    window.location.replace(newURL);
  }
*/
const templateGrid=document.getElementById('template-grid')
const containerRobes = document.querySelector('.robes');
const tabImagesUrl = ['Pantalon-woman-1.jpg', 'Pantalon-woman-2.jpg', 'pantalon-woman-3.jpg', 'pantalon-woman-4.jpg', 'pantalon-woman-5.jpg', 'pantalon-woman-6.jpg', 'pantalon-woman-7.jpg']



tabImagesUrl.forEach((url, index) => {

const template = templateGrid.content.cloneNode(true);
//template.querySelector('div.robe') //.className='robe';
const ancherImage = template.querySelector('div a')
//ancherImage.setAttribute('href', 'detail.html')
ancherImage.className = 'ancher-image'
template.querySelector('div a img').setAttribute('src', `/images/${url}`);
containerRobes.appendChild(template)
//console.log(template)


})


function addEvent(param) {
  //console.log(window.location.origin, 'ORIGIN')
  const myAnchers = document.querySelectorAll('a.ancher-image');
const buttonInDiv = document.querySelectorAll('.details button');

buttonInDiv.forEach((bouton) => {
  bouton.addEventListener('click', detailInButton)
})

  myAnchers.forEach((ancher) => {
    ancher.addEventListener("click", detailImages)
  })
  //  console.log(myAnchers)
  // Tab to edit
}
addEvent()


function detailImages(event) {
  event.preventDefault()
  const srcImage = event.target.src.replace(`${window.location.origin}/`, "");
  //const altImage=event.alt;
  //console.log(srcImage)
  //const origin="http://localhost:8080/"
  window.location = `detail.html?src=${srcImage}`
  //console.log(srcImage)
};


function detailInButton(event) {
  event.preventDefault()
  const img=event.target.parentNode.parentElement.querySelector('img');
  const srcImg=img.src.replace(`${window.location.origin}/`, "");
  console.log(srcImg, 'detailInParag');
  window.location=`detail.html?src=${srcImg}`

}


console.log('PANTALONS POUR FEMME')