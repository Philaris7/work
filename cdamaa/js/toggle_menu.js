
var state = false;

document.addEventListener('DOMContentLoaded', init, false);
function init(){

  function toggleMenu () {
    if(state == false){
        document.getElementsByClassName("top_menu")[0].style.display = "block";
        state = true;
    }else{
        document.getElementsByClassName("top_menu")[0].style.display = "none";
        state = false;
    }  
  }
  
  var menuIcon = document.getElementById('menu_icon');
  menuIcon.addEventListener('click', toggleMenu, true);
};
