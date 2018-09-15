function renderShablones(){
  document.getElementById('open-toolbox').checked = false;
  var shablones = document.createElement('div');
  shablones.className = 'dark-mask';
  var close = document.createElement('div');
  close.onclick = function(){
    shablones.remove();
  }
  var closeImg = new Image();
  closeImg.src = 'assets/icon/close-modal.png';
  close.appendChild(closeImg);
  close.className = 'close-shablones';
  var shabloneContainer = document.createElement('div');
  shablones.appendChild(close);
  shabloneContainer.className = 'container-of-shablones';
  for (var i = 0; i < 18; i++){
    let shablone = document.createElement('div');
    shablone.className = 'shablone';
    let container = document.createElement('div');

    let img = new Image();
    img.src = 'assets/shablones/' + (i+1) + '.png';
    img.onload = function(){
      if (this.width > this.height)
         this.style.width = "95%";
        else    this.style.height = "95%";
    }
    shablone.setAttribute('data-img',img.src);
    shablone.onclick = function(){
      draw.loadShablone(this.getAttribute('data-img'));
      shablones.remove();
    }
    container.appendChild(img);
    container.className = 'imgcontainer';
    shablone.appendChild(container);
    let name = document.createElement('div');
    name.innerHTML = 'Шаблон '+(i+1);
    name.className = 'shablone-name';
    shablone.appendChild(name);
    shabloneContainer.appendChild(shablone);
  }
  shablones.appendChild(shabloneContainer);
  document.body.appendChild(shablones);
}
