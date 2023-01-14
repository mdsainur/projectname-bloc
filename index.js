// JavaScript Document


const menuIcon =document.getElementById("menu-Icon");
const menu =document.getElementById("menu");

menuIcon.addEventListener("click",()={
	
	
if(menu.className==='hiden'){
	
	menu.classList.remove('hiden');
}else{
	
	menu.classList.add('hiden');
	
	
}
});



var bg_navbar=document.getElementById('blog-header');
window.onscroll=function(){
	
	var scroll_nav=window.scrollY;
	if(scroll_nav>100){
		
		bg_navbar.classList.add('after-scroll-navbar');
		
	}else{
		bg_navbar.classList.remove('after-scroll-navbar');
		
	}
}

