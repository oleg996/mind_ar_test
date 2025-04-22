AFRAME.registerComponent("rotator", {

    init: function(){
        var model = this.el.object3D.rotation;
        var intervalId = window.setInterval(function(){
             model.y += 0.01;
             
          }, 30);


    }



});