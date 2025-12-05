gdjs._357Code = {};
gdjs._357Code.localVariables = [];
gdjs._357Code.idToCallbackMap = new Map();
gdjs._357Code.GD_9548176_9544221Objects1= [];
gdjs._357Code.GD_9548176_9544221Objects2= [];
gdjs._357Code.GD_9545824_9548376Objects1= [];
gdjs._357Code.GD_9545824_9548376Objects2= [];
gdjs._357Code.GD_9545824_95483762Objects1= [];
gdjs._357Code.GD_9545824_95483762Objects2= [];
gdjs._357Code.GD_9545824_95483763Objects1= [];
gdjs._357Code.GD_9545824_95483763Objects2= [];
gdjs._357Code.GD_9545824_95483765Objects1= [];
gdjs._357Code.GD_9545824_95483765Objects2= [];
gdjs._357Code.GD_9545824_95483764Objects1= [];
gdjs._357Code.GD_9545824_95483764Objects2= [];
gdjs._357Code.GD_9545796_9549884_9595_9549440_9553469Objects1= [];
gdjs._357Code.GD_9545796_9549884_9595_9549440_9553469Objects2= [];
gdjs._357Code.GD_9545208_9547112_9551060_9549496Objects1= [];
gdjs._357Code.GD_9545208_9547112_9551060_9549496Objects2= [];


gdjs._357Code.mapOfGDgdjs_9546_9595357Code_9546GD_95959545796_95959549884_95959595_95959549440_95959553469Objects1Objects = Hashtable.newFrom({"다시_선택": gdjs._357Code.GD_9545796_9549884_9595_9549440_9553469Objects1});
gdjs._357Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Final Goodbye.mp3", false, 70, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본"), gdjs._357Code.GD_9545824_9548376Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "photo");
}
{for(var i = 0, len = gdjs._357Code.GD_9545824_9548376Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545824_9548376Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본"), gdjs._357Code.GD_9545824_9548376Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545824_9548376Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545824_9548376Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본"), gdjs._357Code.GD_9545824_9548376Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545824_9548376Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545824_9548376Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대본2"), gdjs._357Code.GD_9545824_95483762Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545824_95483762Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545824_95483762Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본2"), gdjs._357Code.GD_9545824_95483762Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545824_95483762Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545824_95483762Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본2"), gdjs._357Code.GD_9545824_95483762Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545824_95483762Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545824_95483762Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대본3"), gdjs._357Code.GD_9545824_95483763Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545824_95483763Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545824_95483763Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본3"), gdjs._357Code.GD_9545824_95483763Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545824_95483763Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545824_95483763Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 12;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본3"), gdjs._357Code.GD_9545824_95483763Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545824_95483763Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545824_95483763Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대본5"), gdjs._357Code.GD_9545824_95483765Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545824_95483765Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545824_95483765Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 14;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본5"), gdjs._357Code.GD_9545824_95483765Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545824_95483765Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545824_95483765Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 16;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본5"), gdjs._357Code.GD_9545824_95483765Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545824_95483765Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545824_95483765Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대본4"), gdjs._357Code.GD_9545824_95483764Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545824_95483764Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545824_95483764Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 18;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본4"), gdjs._357Code.GD_9545824_95483764Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545824_95483764Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545824_95483764Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 20;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본4"), gdjs._357Code.GD_9545824_95483764Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545824_95483764Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545824_95483764Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("다시_선택"), gdjs._357Code.GD_9545796_9549884_9595_9549440_9553469Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545796_9549884_9595_9549440_9553469Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545796_9549884_9595_9549440_9553469Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 25;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("다시_선택"), gdjs._357Code.GD_9545796_9549884_9595_9549440_9553469Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545796_9549884_9595_9549440_9553469Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545796_9549884_9595_9549440_9553469Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("다시_선택"), gdjs._357Code.GD_9545796_9549884_9595_9549440_9553469Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._357Code.mapOfGDgdjs_9546_9595357Code_9546GD_95959545796_95959549884_95959595_95959549440_95959553469Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "#5", true);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("나레이션"), gdjs._357Code.GD_9545208_9547112_9551060_9549496Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545208_9547112_9551060_9549496Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545208_9547112_9551060_9549496Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 22;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("나레이션"), gdjs._357Code.GD_9545208_9547112_9551060_9549496Objects1);
{for(var i = 0, len = gdjs._357Code.GD_9545208_9547112_9551060_9549496Objects1.length ;i < len;++i) {
    gdjs._357Code.GD_9545208_9547112_9551060_9549496Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._357Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._357Code.GD_9548176_9544221Objects1.length = 0;
gdjs._357Code.GD_9548176_9544221Objects2.length = 0;
gdjs._357Code.GD_9545824_9548376Objects1.length = 0;
gdjs._357Code.GD_9545824_9548376Objects2.length = 0;
gdjs._357Code.GD_9545824_95483762Objects1.length = 0;
gdjs._357Code.GD_9545824_95483762Objects2.length = 0;
gdjs._357Code.GD_9545824_95483763Objects1.length = 0;
gdjs._357Code.GD_9545824_95483763Objects2.length = 0;
gdjs._357Code.GD_9545824_95483765Objects1.length = 0;
gdjs._357Code.GD_9545824_95483765Objects2.length = 0;
gdjs._357Code.GD_9545824_95483764Objects1.length = 0;
gdjs._357Code.GD_9545824_95483764Objects2.length = 0;
gdjs._357Code.GD_9545796_9549884_9595_9549440_9553469Objects1.length = 0;
gdjs._357Code.GD_9545796_9549884_9595_9549440_9553469Objects2.length = 0;
gdjs._357Code.GD_9545208_9547112_9551060_9549496Objects1.length = 0;
gdjs._357Code.GD_9545208_9547112_9551060_9549496Objects2.length = 0;

gdjs._357Code.eventsList0(runtimeScene);
gdjs._357Code.GD_9548176_9544221Objects1.length = 0;
gdjs._357Code.GD_9548176_9544221Objects2.length = 0;
gdjs._357Code.GD_9545824_9548376Objects1.length = 0;
gdjs._357Code.GD_9545824_9548376Objects2.length = 0;
gdjs._357Code.GD_9545824_95483762Objects1.length = 0;
gdjs._357Code.GD_9545824_95483762Objects2.length = 0;
gdjs._357Code.GD_9545824_95483763Objects1.length = 0;
gdjs._357Code.GD_9545824_95483763Objects2.length = 0;
gdjs._357Code.GD_9545824_95483765Objects1.length = 0;
gdjs._357Code.GD_9545824_95483765Objects2.length = 0;
gdjs._357Code.GD_9545824_95483764Objects1.length = 0;
gdjs._357Code.GD_9545824_95483764Objects2.length = 0;
gdjs._357Code.GD_9545796_9549884_9595_9549440_9553469Objects1.length = 0;
gdjs._357Code.GD_9545796_9549884_9595_9549440_9553469Objects2.length = 0;
gdjs._357Code.GD_9545208_9547112_9551060_9549496Objects1.length = 0;
gdjs._357Code.GD_9545208_9547112_9551060_9549496Objects2.length = 0;


return;

}

gdjs['_357Code'] = gdjs._357Code;
