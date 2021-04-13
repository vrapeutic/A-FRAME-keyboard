
AFRAME.registerComponent("keyboard-events", {
  
    init: function()
    {
        let el = this.el;
    console.log("keyboard ready to take events");
    el.addEventListener('enter',function(){
        console.log("keyboard entered");
          
        });
        el.addEventListener('input',function(){
            //console.log("keyboard entered");
              
            });
 
    }})