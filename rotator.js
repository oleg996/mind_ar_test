AFRAME.registerComponent("rotator", {

    init: function(){
        var intervalId = window.setInterval(function(){
            this.el.object3D.rotation.z += 1;
          }, 30);


    }



});