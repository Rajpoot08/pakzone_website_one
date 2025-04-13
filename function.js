let menu_btn=document.getElementById('menu_btn')
let nav=document.getElementsByTagName('nav')[0]
let closer=document.getElementById('close')
menu_btn.addEventListener('click',slide)
closer.addEventListener('click',closeit)
function slide(){
    nav.style.width='50vw'
    closer.style.display='inline'
    menu_btn.style.display='none'
}
function closeit(){
     closer.style.display='none'
      nav.style.width='0vw'
      menu_btn.style.display='inline'
}