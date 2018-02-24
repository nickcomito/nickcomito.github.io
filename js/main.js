document.addEventListener('DOMContentLoaded', function(){
  var checkbox = document.querySelector('#nav-toggle');
  var checkboxLabel = document.querySelector('#nav-toggle-label');
  var menu = document.querySelector('#menu');
  
  function removeActive(){
    checkboxLabel.classList.remove('active');
    menu.classList.remove('active');
  }

  checkbox.onclick = function(){
    if (checkbox.checked){
      checkboxLabel.classList.add('active');
      menu.classList.add('active');
    } else{
      removeActive();
    }
  };

  menu.onclick = function(){
    removeActive();
    checkbox.checked = false;
  };
  
});