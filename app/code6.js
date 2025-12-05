gdjs._353Code = {};
gdjs._353Code.localVariables = [];
gdjs._353Code.idToCallbackMap = new Map();
gdjs._353Code.GD_9548176_9544221Objects1= [];
gdjs._353Code.GD_9548176_9544221Objects2= [];
gdjs._353Code.GD_9544160_9551008_9549353_9595_9548176_9544221Objects1= [];
gdjs._353Code.GD_9544160_9551008_9549353_9595_9548176_9544221Objects2= [];
gdjs._353Code.GD_9545824_9548376Objects1= [];
gdjs._353Code.GD_9545824_9548376Objects2= [];
gdjs._353Code.GD_9545824_95483762Objects1= [];
gdjs._353Code.GD_9545824_95483762Objects2= [];
gdjs._353Code.GD_9545824_95483763Objects1= [];
gdjs._353Code.GD_9545824_95483763Objects2= [];
gdjs._353Code.GD_9545824_95483764Objects1= [];
gdjs._353Code.GD_9545824_95483764Objects2= [];
gdjs._353Code.GD_9545824_95483765Objects1= [];
gdjs._353Code.GD_9545824_95483765Objects2= [];
gdjs._353Code.GD_9544036_95498851Objects1= [];
gdjs._353Code.GD_9544036_95498851Objects2= [];
gdjs._353Code.GD_9544036_9549885_95952Objects1= [];
gdjs._353Code.GD_9544036_9549885_95952Objects2= [];
gdjs._353Code.GD_9544036_95498853Objects1= [];
gdjs._353Code.GD_9544036_95498853Objects2= [];
gdjs._353Code.GD_9548260_9553948Objects1= [];
gdjs._353Code.GD_9548260_9553948Objects2= [];
gdjs._353Code.GD_9553804_9547749Objects1= [];
gdjs._353Code.GD_9553804_9547749Objects2= [];


gdjs._353Code.mapOfGDgdjs_9546_9595353Code_9546GD_95959553804_95959547749Objects1Objects = Hashtable.newFrom({"투명": gdjs._353Code.GD_9553804_9547749Objects1});
gdjs._353Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본"), gdjs._353Code.GD_9545824_9548376Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "phototimer5");
}
{for(var i = 0, len = gdjs._353Code.GD_9545824_9548376Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9545824_9548376Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer5") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본"), gdjs._353Code.GD_9545824_9548376Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9545824_9548376Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9545824_9548376Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer5") > 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본"), gdjs._353Code.GD_9545824_9548376Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9545824_9548376Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9545824_9548376Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대본2"), gdjs._353Code.GD_9545824_95483762Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9545824_95483762Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9545824_95483762Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer5") > 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본2"), gdjs._353Code.GD_9545824_95483762Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9545824_95483762Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9545824_95483762Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer5") > 8;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본2"), gdjs._353Code.GD_9545824_95483762Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9545824_95483762Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9545824_95483762Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대본3"), gdjs._353Code.GD_9545824_95483763Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9545824_95483763Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9545824_95483763Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer5") > 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본3"), gdjs._353Code.GD_9545824_95483763Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9545824_95483763Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9545824_95483763Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer5") > 13;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본3"), gdjs._353Code.GD_9545824_95483763Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9545824_95483763Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9545824_95483763Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("간식1"), gdjs._353Code.GD_9544036_95498851Objects1);
gdjs.copyArray(runtimeScene.getObjects("간식3"), gdjs._353Code.GD_9544036_95498853Objects1);
gdjs.copyArray(runtimeScene.getObjects("간식_2"), gdjs._353Code.GD_9544036_9549885_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("대본4"), gdjs._353Code.GD_9545824_95483764Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9545824_95483764Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9545824_95483764Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._353Code.GD_9544036_95498851Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9544036_95498851Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._353Code.GD_9544036_9549885_95952Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9544036_9549885_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._353Code.GD_9544036_95498853Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9544036_95498853Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer5") > 13;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("간식1"), gdjs._353Code.GD_9544036_95498851Objects1);
gdjs.copyArray(runtimeScene.getObjects("간식3"), gdjs._353Code.GD_9544036_95498853Objects1);
gdjs.copyArray(runtimeScene.getObjects("간식_2"), gdjs._353Code.GD_9544036_9549885_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("대본4"), gdjs._353Code.GD_9545824_95483764Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9545824_95483764Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9545824_95483764Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._353Code.GD_9544036_95498851Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9544036_95498851Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._353Code.GD_9544036_9549885_95952Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9544036_9549885_95952Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._353Code.GD_9544036_95498853Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9544036_95498853Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer5") > 15;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본4"), gdjs._353Code.GD_9545824_95483764Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9545824_95483764Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9545824_95483764Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대본5"), gdjs._353Code.GD_9545824_95483765Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9545824_95483765Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9545824_95483765Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer5") > 15;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본5"), gdjs._353Code.GD_9545824_95483765Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9545824_95483765Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9545824_95483765Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("버튼"), gdjs._353Code.GD_9548260_9553948Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9548260_9553948Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9548260_9553948Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer5") > 16;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("버튼"), gdjs._353Code.GD_9548260_9553948Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9548260_9553948Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9548260_9553948Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("투명"), gdjs._353Code.GD_9553804_9547749Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9553804_9547749Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9553804_9547749Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("투명"), gdjs._353Code.GD_9553804_9547749Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer5") > 16;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._353Code.mapOfGDgdjs_9546_9595353Code_9546GD_95959553804_95959547749Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("버튼"), gdjs._353Code.GD_9548260_9553948Objects1);
{for(var i = 0, len = gdjs._353Code.GD_9548260_9553948Objects1.length ;i < len;++i) {
    gdjs._353Code.GD_9548260_9553948Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "#4", true);
}
}

}


};

gdjs._353Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._353Code.GD_9548176_9544221Objects1.length = 0;
gdjs._353Code.GD_9548176_9544221Objects2.length = 0;
gdjs._353Code.GD_9544160_9551008_9549353_9595_9548176_9544221Objects1.length = 0;
gdjs._353Code.GD_9544160_9551008_9549353_9595_9548176_9544221Objects2.length = 0;
gdjs._353Code.GD_9545824_9548376Objects1.length = 0;
gdjs._353Code.GD_9545824_9548376Objects2.length = 0;
gdjs._353Code.GD_9545824_95483762Objects1.length = 0;
gdjs._353Code.GD_9545824_95483762Objects2.length = 0;
gdjs._353Code.GD_9545824_95483763Objects1.length = 0;
gdjs._353Code.GD_9545824_95483763Objects2.length = 0;
gdjs._353Code.GD_9545824_95483764Objects1.length = 0;
gdjs._353Code.GD_9545824_95483764Objects2.length = 0;
gdjs._353Code.GD_9545824_95483765Objects1.length = 0;
gdjs._353Code.GD_9545824_95483765Objects2.length = 0;
gdjs._353Code.GD_9544036_95498851Objects1.length = 0;
gdjs._353Code.GD_9544036_95498851Objects2.length = 0;
gdjs._353Code.GD_9544036_9549885_95952Objects1.length = 0;
gdjs._353Code.GD_9544036_9549885_95952Objects2.length = 0;
gdjs._353Code.GD_9544036_95498853Objects1.length = 0;
gdjs._353Code.GD_9544036_95498853Objects2.length = 0;
gdjs._353Code.GD_9548260_9553948Objects1.length = 0;
gdjs._353Code.GD_9548260_9553948Objects2.length = 0;
gdjs._353Code.GD_9553804_9547749Objects1.length = 0;
gdjs._353Code.GD_9553804_9547749Objects2.length = 0;

gdjs._353Code.eventsList0(runtimeScene);
gdjs._353Code.GD_9548176_9544221Objects1.length = 0;
gdjs._353Code.GD_9548176_9544221Objects2.length = 0;
gdjs._353Code.GD_9544160_9551008_9549353_9595_9548176_9544221Objects1.length = 0;
gdjs._353Code.GD_9544160_9551008_9549353_9595_9548176_9544221Objects2.length = 0;
gdjs._353Code.GD_9545824_9548376Objects1.length = 0;
gdjs._353Code.GD_9545824_9548376Objects2.length = 0;
gdjs._353Code.GD_9545824_95483762Objects1.length = 0;
gdjs._353Code.GD_9545824_95483762Objects2.length = 0;
gdjs._353Code.GD_9545824_95483763Objects1.length = 0;
gdjs._353Code.GD_9545824_95483763Objects2.length = 0;
gdjs._353Code.GD_9545824_95483764Objects1.length = 0;
gdjs._353Code.GD_9545824_95483764Objects2.length = 0;
gdjs._353Code.GD_9545824_95483765Objects1.length = 0;
gdjs._353Code.GD_9545824_95483765Objects2.length = 0;
gdjs._353Code.GD_9544036_95498851Objects1.length = 0;
gdjs._353Code.GD_9544036_95498851Objects2.length = 0;
gdjs._353Code.GD_9544036_9549885_95952Objects1.length = 0;
gdjs._353Code.GD_9544036_9549885_95952Objects2.length = 0;
gdjs._353Code.GD_9544036_95498853Objects1.length = 0;
gdjs._353Code.GD_9544036_95498853Objects2.length = 0;
gdjs._353Code.GD_9548260_9553948Objects1.length = 0;
gdjs._353Code.GD_9548260_9553948Objects2.length = 0;
gdjs._353Code.GD_9553804_9547749Objects1.length = 0;
gdjs._353Code.GD_9553804_9547749Objects2.length = 0;


return;

}

gdjs['_353Code'] = gdjs._353Code;
