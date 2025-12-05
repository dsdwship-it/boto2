gdjs._355Code = {};
gdjs._355Code.localVariables = [];
gdjs._355Code.idToCallbackMap = new Map();
gdjs._355Code.GD_9548176_9544221Objects1= [];
gdjs._355Code.GD_9548176_9544221Objects2= [];
gdjs._355Code.GD_9548176_95442212Objects1= [];
gdjs._355Code.GD_9548176_95442212Objects2= [];
gdjs._355Code.GD_9545824_95483761Objects1= [];
gdjs._355Code.GD_9545824_95483761Objects2= [];
gdjs._355Code.GD_9545824_95483762Objects1= [];
gdjs._355Code.GD_9545824_95483762Objects2= [];
gdjs._355Code.GD_9545824_95483763Objects1= [];
gdjs._355Code.GD_9545824_95483763Objects2= [];
gdjs._355Code.GD_9545824_95483764Objects1= [];
gdjs._355Code.GD_9545824_95483764Objects2= [];
gdjs._355Code.GD_9545824_95483765Objects1= [];
gdjs._355Code.GD_9545824_95483765Objects2= [];
gdjs._355Code.GD_9545208_9544036_9545796Objects1= [];
gdjs._355Code.GD_9545208_9544036_9545796Objects2= [];
gdjs._355Code.GD_9546028_9550500_9544036_9545796Objects1= [];
gdjs._355Code.GD_9546028_9550500_9544036_9545796Objects2= [];
gdjs._355Code.GD_9553804_95477491Objects1= [];
gdjs._355Code.GD_9553804_95477491Objects2= [];
gdjs._355Code.GD_9553804_95477492Objects1= [];
gdjs._355Code.GD_9553804_95477492Objects2= [];


gdjs._355Code.mapOfGDgdjs_9546_9595355Code_9546GD_95959553804_959595477491Objects1Objects = Hashtable.newFrom({"투명1": gdjs._355Code.GD_9553804_95477491Objects1});
gdjs._355Code.mapOfGDgdjs_9546_9595355Code_9546GD_95959553804_959595477492Objects1Objects = Hashtable.newFrom({"투명2": gdjs._355Code.GD_9553804_95477492Objects1});
gdjs._355Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Through the Sunset Window.mp3", false, 70, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본1"), gdjs._355Code.GD_9545824_95483761Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "photo");
}
{for(var i = 0, len = gdjs._355Code.GD_9545824_95483761Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545824_95483761Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("투명1"), gdjs._355Code.GD_9553804_95477491Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._355Code.mapOfGDgdjs_9546_9595355Code_9546GD_95959553804_959595477491Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "#6", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("투명2"), gdjs._355Code.GD_9553804_95477492Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._355Code.mapOfGDgdjs_9546_9595355Code_9546GD_95959553804_959595477492Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "#8", true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본1"), gdjs._355Code.GD_9545824_95483761Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545824_95483761Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545824_95483761Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본1"), gdjs._355Code.GD_9545824_95483761Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545824_95483761Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545824_95483761Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대본2"), gdjs._355Code.GD_9545824_95483762Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545824_95483762Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545824_95483762Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본2"), gdjs._355Code.GD_9545824_95483762Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545824_95483762Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545824_95483762Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본2"), gdjs._355Code.GD_9545824_95483762Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545824_95483762Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545824_95483762Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대본3"), gdjs._355Code.GD_9545824_95483763Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545824_95483763Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545824_95483763Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 9;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본3"), gdjs._355Code.GD_9545824_95483763Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545824_95483763Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545824_95483763Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 11;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본3"), gdjs._355Code.GD_9545824_95483763Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545824_95483763Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545824_95483763Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대본4"), gdjs._355Code.GD_9545824_95483764Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545824_95483764Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545824_95483764Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 13;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본4"), gdjs._355Code.GD_9545824_95483764Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545824_95483764Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545824_95483764Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 15;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본4"), gdjs._355Code.GD_9545824_95483764Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545824_95483764Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545824_95483764Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대본5"), gdjs._355Code.GD_9545824_95483765Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545824_95483765Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545824_95483765Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 17;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본5"), gdjs._355Code.GD_9545824_95483765Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545824_95483765Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545824_95483765Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 19;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본5"), gdjs._355Code.GD_9545824_95483765Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545824_95483765Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545824_95483765Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("나간다"), gdjs._355Code.GD_9545208_9544036_9545796Objects1);
gdjs.copyArray(runtimeScene.getObjects("돌아간다"), gdjs._355Code.GD_9546028_9550500_9544036_9545796Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545208_9544036_9545796Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545208_9544036_9545796Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._355Code.GD_9546028_9550500_9544036_9545796Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9546028_9550500_9544036_9545796Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "photo") > 19;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("나간다"), gdjs._355Code.GD_9545208_9544036_9545796Objects1);
gdjs.copyArray(runtimeScene.getObjects("돌아간다"), gdjs._355Code.GD_9546028_9550500_9544036_9545796Objects1);
{for(var i = 0, len = gdjs._355Code.GD_9545208_9544036_9545796Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9545208_9544036_9545796Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._355Code.GD_9546028_9550500_9544036_9545796Objects1.length ;i < len;++i) {
    gdjs._355Code.GD_9546028_9550500_9544036_9545796Objects1[i].hide(false);
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

gdjs._355Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._355Code.GD_9548176_9544221Objects1.length = 0;
gdjs._355Code.GD_9548176_9544221Objects2.length = 0;
gdjs._355Code.GD_9548176_95442212Objects1.length = 0;
gdjs._355Code.GD_9548176_95442212Objects2.length = 0;
gdjs._355Code.GD_9545824_95483761Objects1.length = 0;
gdjs._355Code.GD_9545824_95483761Objects2.length = 0;
gdjs._355Code.GD_9545824_95483762Objects1.length = 0;
gdjs._355Code.GD_9545824_95483762Objects2.length = 0;
gdjs._355Code.GD_9545824_95483763Objects1.length = 0;
gdjs._355Code.GD_9545824_95483763Objects2.length = 0;
gdjs._355Code.GD_9545824_95483764Objects1.length = 0;
gdjs._355Code.GD_9545824_95483764Objects2.length = 0;
gdjs._355Code.GD_9545824_95483765Objects1.length = 0;
gdjs._355Code.GD_9545824_95483765Objects2.length = 0;
gdjs._355Code.GD_9545208_9544036_9545796Objects1.length = 0;
gdjs._355Code.GD_9545208_9544036_9545796Objects2.length = 0;
gdjs._355Code.GD_9546028_9550500_9544036_9545796Objects1.length = 0;
gdjs._355Code.GD_9546028_9550500_9544036_9545796Objects2.length = 0;
gdjs._355Code.GD_9553804_95477491Objects1.length = 0;
gdjs._355Code.GD_9553804_95477491Objects2.length = 0;
gdjs._355Code.GD_9553804_95477492Objects1.length = 0;
gdjs._355Code.GD_9553804_95477492Objects2.length = 0;

gdjs._355Code.eventsList0(runtimeScene);
gdjs._355Code.GD_9548176_9544221Objects1.length = 0;
gdjs._355Code.GD_9548176_9544221Objects2.length = 0;
gdjs._355Code.GD_9548176_95442212Objects1.length = 0;
gdjs._355Code.GD_9548176_95442212Objects2.length = 0;
gdjs._355Code.GD_9545824_95483761Objects1.length = 0;
gdjs._355Code.GD_9545824_95483761Objects2.length = 0;
gdjs._355Code.GD_9545824_95483762Objects1.length = 0;
gdjs._355Code.GD_9545824_95483762Objects2.length = 0;
gdjs._355Code.GD_9545824_95483763Objects1.length = 0;
gdjs._355Code.GD_9545824_95483763Objects2.length = 0;
gdjs._355Code.GD_9545824_95483764Objects1.length = 0;
gdjs._355Code.GD_9545824_95483764Objects2.length = 0;
gdjs._355Code.GD_9545824_95483765Objects1.length = 0;
gdjs._355Code.GD_9545824_95483765Objects2.length = 0;
gdjs._355Code.GD_9545208_9544036_9545796Objects1.length = 0;
gdjs._355Code.GD_9545208_9544036_9545796Objects2.length = 0;
gdjs._355Code.GD_9546028_9550500_9544036_9545796Objects1.length = 0;
gdjs._355Code.GD_9546028_9550500_9544036_9545796Objects2.length = 0;
gdjs._355Code.GD_9553804_95477491Objects1.length = 0;
gdjs._355Code.GD_9553804_95477491Objects2.length = 0;
gdjs._355Code.GD_9553804_95477492Objects1.length = 0;
gdjs._355Code.GD_9553804_95477492Objects2.length = 0;


return;

}

gdjs['_355Code'] = gdjs._355Code;
