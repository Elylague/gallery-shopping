console.log('Hello World!');
const containerRobes=document.querySelector('.robes');
const tabImagesUrl=['Robe-1.jpg', 'Robe-2.jpg','Robe-3.jpg', 'Robe-4.jpg','Robe-5.jpg', 'Robe-5.jpg', 'Robe-7.jpg', 'Robe-8.jpg','Robe-9.jpg', 'Robe-10.jpg', 'Robe-11.jpg','Robe-12.jpg', 'Robe-13.jpg', 'Robe-14.jpg','Robe-15.jpg', 'Robe-16.jpg', 'Robe-17.jpg' ]



tabImagesUrl.forEach((url, index)=> {
  const parag=document.createElement('p');
  parag.textContent='une belle robe pour toutes'
  const diveRobe=document.createElement('div')
  diveRobe.className='robe'
  
  const images = document.createElement('img');
  images.setAttribute('src', `./images/${url}`);
  diveRobe.append(images, parag);
  
  containerRobes.appendChild(diveRobe);
 // console.log(images);
  
  
  
})