

//console.log(window.location)
window.addEventListener('DOMContentLoaded', renderImage)



function renderImage(event) {
  const url=window.location.href
 //console.log(url)
  const neWurl=new URL(url)
  
  const params=neWurl.searchParams.get('src')
const template=document.getElementById('template-img')
const imgTemp=template.content.querySelector('img')
imgTemp.setAttribute('src', `./${params}`)
const content=template.content.cloneNode(true)

document.body.appendChild(content)


  
}


