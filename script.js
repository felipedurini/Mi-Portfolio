var barra=document.getElementById('barra')
var body=document.querySelector('body')

barra.addEventListener('click',function(){
  $('body').getJSON('https://proyectcolor.netlify.app/')
})