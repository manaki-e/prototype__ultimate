$(function () {
  $("li").mousedown(function () {
    draggable(this);
    
    let startY =this.clientY;
    let startX =this.clientX;

    function draggable(target) {
      target.onmousedown = function() {
        document.onmousemove = mouseMove;
      };
      document.onmouseup = function() {
        document.onmousemove = null;
      };
      function mouseMove(e) {
        // console.log(e);
        var event = e ? e : window.event;
        // console.log(event);
        target.style.top = event.clientY+ 'px';
        target.style.left = event.clientX + 'px';
      }
    }
    
  //   var place = this ? this : window.event;
  //   $(this).css({"top": `${place}.clientY + px`, "left": `${place}.clientX + px`});
  // });

  // $(this).mouseup(function(e){
  //   return;
  });
});


// draggable(document.getElementById("1"));
// draggable(document.getElementById("2"));
