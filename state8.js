demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor= "#9ACD32";
        console.log('state8');
        addChangeStateEventListeners();
    },
    update: function(){}
};