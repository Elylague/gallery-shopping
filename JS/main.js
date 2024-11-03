/*
  // Vérifier l'URL et rediriger sans extension si nécessaire
  if (window.location.pathname.endsWith('.html')) {
    const newURL = window.location.pathname.replace(/\.html$/, '');
    window.location.replace(newURL);
  }
*/
const templateGrid = document.getElementById('template-grid');

const containerRobes=document.querySelector('.robes');
const tabImagesUrl=['Robe-1.jpg', 'Robe-2.jpg','Robe-3.jpg', 'Robe-4.jpg','Robe-5.jpg', 'Robe-6.jpg', 'Robe-7.jpg', 'Robe-8.jpg','Robe-9.jpg', 'Robe-10.jpg', 'Robe-11.jpg','Robe-12.jpg', 'Robe-13.jpg', 'Robe-14.jpg','Robe-15.jpg', 'Robe-16.jpg', 'Robe-17.jpg' ]



tabImagesUrl.forEach((url, index)=> {

  const template =templateGrid.content.cloneNode(true);
  //template.querySelector('div.robe')//.className='robe';
  const ancherImage=template.querySelector('div a')
  //ancherImage.setAttribute('href', 'detail.html')
  ancherImage.className='ancher-image'
  template.querySelector('div a img').setAttribute('src', `/images/${url}`);
containerRobes.appendChild(template)
//console.log(template)

})


function addEvent(param) {
  //console.log(window.location.origin, 'ORIGIN')
  const myAnchers=document.querySelectorAll('a.ancher-image');
  const buttonInDiv=document.querySelectorAll('.details button');
 
  buttonInDiv.forEach((bouton) =>{
    bouton.addEventListener('click', detailInButton)
  } )
  
  myAnchers.forEach((ancher)=>{
    ancher.addEventListener("click", detailImages)
  })
 /// console.log(myAnchers)
  // Tab to edit
}
addEvent()


function detailImages(event) {
// console.log(event, 'TARGET')
event.preventDefault()
const srcImage=event.target.src.replace(`${window.location.origin}/`, "");




  window.location=`detail.html?src=${srcImage}`

}


function detailInButton(event) {
  event.preventDefault()
  const img=event.target.parentNode.parentElement.querySelector('img');
  const srcImg=img.src.replace(`${window.location.origin}/`, "");
 // console.log(srcImg, 'detailInParag');
  window.location=`detail.html?src=${srcImg}`

}
