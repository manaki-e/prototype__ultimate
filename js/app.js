/* =========================================
jQueryを使って作成しようとした


$(function () {
  $("li").mousedown(function () {
    // draggable(this);

    // let startY =this.clientY;
    // let startX =this.clientX;
    
    $(this).mousemove(function (e) {
      var event = e ? e : window.event;
      this.style.top = event.clientY + 'px';
      this.style.left = event.clientX + 'px';
      
      //   var place = this ? this : window.event;
      //   $(this).css({"top": `${place}.clientY + px`, "left": `${place}.clientX + px`});
      // });

    });
  });

  $(document).mouseup(function () {
    $(document).mousemove() = null;
  })
});

============================================ */

/* ================================================
idからliを取得して移動させる
================================================= */

draggable(document.getElementById("1"));
draggable(document.getElementById("2"));
draggable(document.getElementById("3"));
draggable(document.getElementById("4"));
draggable(document.getElementById("5"));
draggable(document.getElementById("6"));
draggable(document.getElementById("7"));
draggable(document.getElementById("8"));
draggable(document.getElementById("9"));
draggable(document.getElementById("10"));
draggable(document.getElementById("11"));
draggable(document.getElementById("12"));
draggable(document.getElementById("13"));
draggable(document.getElementById("14"));
draggable(document.getElementById("15"));

function draggable(target) {

  target.onmousedown = function () {

    let startY = target.getBoundingClientRect().top;
    let startX = target.getBoundingClientRect().left;

    document.onmousemove = function (e) {
      var event = e ? e : window.event;
      target.style.top = event.clientY + 'px';
      target.style.left = event.clientX - startX + 'px';
    }
  };
};

document.onmouseup = function () {
  document.onmousemove = null;
};