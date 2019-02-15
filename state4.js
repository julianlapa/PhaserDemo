demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor= "#FFA07A";
        console.log('state4');
        addChangeStateEventListeners();
    },
    update: function(){}
};