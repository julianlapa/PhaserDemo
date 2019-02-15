demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor= "#E6E6FA";
        console.log('state5');
        addChangeStateEventListeners();
    },
    update: function(){}
};