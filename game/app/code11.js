gdjs._358Code = {};
gdjs._358Code.localVariables = [];
gdjs._358Code.idToCallbackMap = new Map();
gdjs._358Code.GD_9548176_9544221Objects1= [];
gdjs._358Code.GD_9548176_9544221Objects2= [];
gdjs._358Code.GD_9545824_95483761Objects1= [];
gdjs._358Code.GD_9545824_95483761Objects2= [];
gdjs._358Code.GD_9545824_95483762Objects1= [];
gdjs._358Code.GD_9545824_95483762Objects2= [];
gdjs._358Code.GD_9545824_95483763Objects1= [];
gdjs._358Code.GD_9545824_95483763Objects2= [];
gdjs._358Code.GD_9545208_9547112_9551060_9549496Objects1= [];
gdjs._358Code.GD_9545208_9547112_9551060_9549496Objects2= [];
gdjs._358Code.GD_9545796_9549884_9595_9549440_9553469_9554616_9544592Objects1= [];
gdjs._358Code.GD_9545796_9549884_9595_9549440_9553469_9554616_9544592Objects2= [];


gdjs._358Code.mapOfGDgdjs_9546_9595358Code_9546GD_95959545796_95959549884_95959595_95959549440_95959553469_95959554616_95959544592Objects1Objects = Hashtable.newFrom({"다시_선택하기": gdjs._358Code.GD_9545796_9549884_9595_9549440_9553469_9554616_9544592Objects1});
gdjs._358Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Bittersweet Goodbye.mp3", false, 80, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본1"), gdjs._358Code.GD_9545824_95483761Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "photo");
}
{for(var i = 0, len = gdjs._358Code.GD_9545824_95483761Objects1.length ;i < len;++i) {
    gdjs._358Code.GD_9545824_95483761Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본1"), gdjs._358Code.GD_9545824_95483761Objects1);
{for(var i = 0, len = gdjs._358Code.GD_9545824_95483761Objects1.length ;i < len;++i) {
    gdjs._358Code.GD_9545824_95483761Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본1"), gdjs._358Code.GD_9545824_95483761Objects1);
{for(var i = 0, len = gdjs._358Code.GD_9545824_95483761Objects1.length ;i < len;++i) {
    gdjs._358Code.GD_9545824_95483761Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대본2"), gdjs._358Code.GD_9545824_95483762Objects1);
{for(var i = 0, len = gdjs._358Code.GD_9545824_95483762Objects1.length ;i < len;++i) {
    gdjs._358Code.GD_9545824_95483762Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본2"), gdjs._358Code.GD_9545824_95483762Objects1);
{for(var i = 0, len = gdjs._358Code.GD_9545824_95483762Objects1.length ;i < len;++i) {
    gdjs._358Code.GD_9545824_95483762Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본2"), gdjs._358Code.GD_9545824_95483762Objects1);
{for(var i = 0, len = gdjs._358Code.GD_9545824_95483762Objects1.length ;i < len;++i) {
    gdjs._358Code.GD_9545824_95483762Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대본3"), gdjs._358Code.GD_9545824_95483763Objects1);
{for(var i = 0, len = gdjs._358Code.GD_9545824_95483763Objects1.length ;i < len;++i) {
    gdjs._358Code.GD_9545824_95483763Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 9;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본3"), gdjs._358Code.GD_9545824_95483763Objects1);
{for(var i = 0, len = gdjs._358Code.GD_9545824_95483763Objects1.length ;i < len;++i) {
    gdjs._358Code.GD_9545824_95483763Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 11;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본3"), gdjs._358Code.GD_9545824_95483763Objects1);
{for(var i = 0, len = gdjs._358Code.GD_9545824_95483763Objects1.length ;i < len;++i) {
    gdjs._358Code.GD_9545824_95483763Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("나레이션"), gdjs._358Code.GD_9545208_9547112_9551060_9549496Objects1);
{for(var i = 0, len = gdjs._358Code.GD_9545208_9547112_9551060_9549496Objects1.length ;i < len;++i) {
    gdjs._358Code.GD_9545208_9547112_9551060_9549496Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 11;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("나레이션"), gdjs._358Code.GD_9545208_9547112_9551060_9549496Objects1);
{for(var i = 0, len = gdjs._358Code.GD_9545208_9547112_9551060_9549496Objects1.length ;i < len;++i) {
    gdjs._358Code.GD_9545208_9547112_9551060_9549496Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("다시_선택하기"), gdjs._358Code.GD_9545796_9549884_9595_9549440_9553469_9554616_9544592Objects1);
{for(var i = 0, len = gdjs._358Code.GD_9545796_9549884_9595_9549440_9553469_9554616_9544592Objects1.length ;i < len;++i) {
    gdjs._358Code.GD_9545796_9549884_9595_9549440_9553469_9554616_9544592Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 14;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("다시_선택하기"), gdjs._358Code.GD_9545796_9549884_9595_9549440_9553469_9554616_9544592Objects1);
{for(var i = 0, len = gdjs._358Code.GD_9545796_9549884_9595_9549440_9553469_9554616_9544592Objects1.length ;i < len;++i) {
    gdjs._358Code.GD_9545796_9549884_9595_9549440_9553469_9554616_9544592Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("다시_선택하기"), gdjs._358Code.GD_9545796_9549884_9595_9549440_9553469_9554616_9544592Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._358Code.mapOfGDgdjs_9546_9595358Code_9546GD_95959545796_95959549884_95959595_95959549440_95959553469_95959554616_95959544592Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "#5", true);
}
}

}


};

gdjs._358Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._358Code.GD_9548176_9544221Objects1.length = 0;
gdjs._358Code.GD_9548176_9544221Objects2.length = 0;
gdjs._358Code.GD_9545824_95483761Objects1.length = 0;
gdjs._358Code.GD_9545824_95483761Objects2.length = 0;
gdjs._358Code.GD_9545824_95483762Objects1.length = 0;
gdjs._358Code.GD_9545824_95483762Objects2.length = 0;
gdjs._358Code.GD_9545824_95483763Objects1.length = 0;
gdjs._358Code.GD_9545824_95483763Objects2.length = 0;
gdjs._358Code.GD_9545208_9547112_9551060_9549496Objects1.length = 0;
gdjs._358Code.GD_9545208_9547112_9551060_9549496Objects2.length = 0;
gdjs._358Code.GD_9545796_9549884_9595_9549440_9553469_9554616_9544592Objects1.length = 0;
gdjs._358Code.GD_9545796_9549884_9595_9549440_9553469_9554616_9544592Objects2.length = 0;

gdjs._358Code.eventsList0(runtimeScene);
gdjs._358Code.GD_9548176_9544221Objects1.length = 0;
gdjs._358Code.GD_9548176_9544221Objects2.length = 0;
gdjs._358Code.GD_9545824_95483761Objects1.length = 0;
gdjs._358Code.GD_9545824_95483761Objects2.length = 0;
gdjs._358Code.GD_9545824_95483762Objects1.length = 0;
gdjs._358Code.GD_9545824_95483762Objects2.length = 0;
gdjs._358Code.GD_9545824_95483763Objects1.length = 0;
gdjs._358Code.GD_9545824_95483763Objects2.length = 0;
gdjs._358Code.GD_9545208_9547112_9551060_9549496Objects1.length = 0;
gdjs._358Code.GD_9545208_9547112_9551060_9549496Objects2.length = 0;
gdjs._358Code.GD_9545796_9549884_9595_9549440_9553469_9554616_9544592Objects1.length = 0;
gdjs._358Code.GD_9545796_9549884_9595_9549440_9553469_9554616_9544592Objects2.length = 0;


return;

}

gdjs['_358Code'] = gdjs._358Code;
