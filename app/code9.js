gdjs._356Code = {};
gdjs._356Code.localVariables = [];
gdjs._356Code.idToCallbackMap = new Map();
gdjs._356Code.GD_9548176_9544221Objects1= [];
gdjs._356Code.GD_9548176_9544221Objects2= [];
gdjs._356Code.GD_9545824_95483761Objects1= [];
gdjs._356Code.GD_9545824_95483761Objects2= [];


gdjs._356Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본1"), gdjs._356Code.GD_9545824_95483761Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "photo");
}
{for(var i = 0, len = gdjs._356Code.GD_9545824_95483761Objects1.length ;i < len;++i) {
    gdjs._356Code.GD_9545824_95483761Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본1"), gdjs._356Code.GD_9545824_95483761Objects1);
{for(var i = 0, len = gdjs._356Code.GD_9545824_95483761Objects1.length ;i < len;++i) {
    gdjs._356Code.GD_9545824_95483761Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본1"), gdjs._356Code.GD_9545824_95483761Objects1);
{for(var i = 0, len = gdjs._356Code.GD_9545824_95483761Objects1.length ;i < len;++i) {
    gdjs._356Code.GD_9545824_95483761Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "#7", false);
}
}

}


};

gdjs._356Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._356Code.GD_9548176_9544221Objects1.length = 0;
gdjs._356Code.GD_9548176_9544221Objects2.length = 0;
gdjs._356Code.GD_9545824_95483761Objects1.length = 0;
gdjs._356Code.GD_9545824_95483761Objects2.length = 0;

gdjs._356Code.eventsList0(runtimeScene);
gdjs._356Code.GD_9548176_9544221Objects1.length = 0;
gdjs._356Code.GD_9548176_9544221Objects2.length = 0;
gdjs._356Code.GD_9545824_95483761Objects1.length = 0;
gdjs._356Code.GD_9545824_95483761Objects2.length = 0;


return;

}

gdjs['_356Code'] = gdjs._356Code;
