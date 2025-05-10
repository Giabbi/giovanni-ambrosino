function toggleNav(){
    const nav=document.getElementById('nav-links');
    nav.classList.toggle('open');
  }
  // dynamic year
  document.addEventListener('DOMContentLoaded',()=>{
    const y=document.getElementById('year');
    if(y) y.textContent=new Date().getFullYear();
  });