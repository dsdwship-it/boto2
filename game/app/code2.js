gdjs._45824_49324_52824_45716_32_54868_47732_49549Code = {};
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.localVariables = [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.idToCallbackMap = new Map();
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548176_95442212Objects1= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548176_95442212Objects2= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493242Objects1= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493242Objects2= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493243Objects1= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493243Objects2= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493244Objects1= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493244Objects2= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554660_9549828_9553552Objects1= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554660_9549828_9553552Objects2= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554161_9554161_9595_9554660_9549828_9553552Objects1= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554161_9554161_9595_9554660_9549828_9553552Objects2= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493245Objects1= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493245Objects2= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545440_9546976_9554660_9549828_9553552Objects1= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545440_9546976_9554660_9549828_9553552Objects2= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493246Objects1= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493246Objects2= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548260_9553948Objects1= [];
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548260_9553948Objects2= [];


gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.mapOfGDgdjs_9546_959545824_959549324_959552824_959545716_959532_959554868_959547732_959549549Code_9546GD_95959548260_95959553948Objects1Objects = Hashtable.newFrom({"버튼": gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548260_9553948Objects1});
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("대사2"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493242Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "phototimer2");
}
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493242Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493242Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대사2"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493242Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493242Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493242Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대사2"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493242Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493242Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493242Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대사3"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493243Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "phototimer3");
}
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493243Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493243Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대사3"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493243Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493243Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493243Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 9;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대사3"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493243Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493243Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493243Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대사4"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493244Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "phototimer4");
}
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493244Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493244Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 11;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대사4"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493244Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493244Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493244Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 14;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대사4"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493244Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493244Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493244Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554660_9549828_9553552Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "phototimer5");
}
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554660_9549828_9553552Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554660_9549828_9553552Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554660_9549828_9553552Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554660_9549828_9553552Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554660_9549828_9553552Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("펑펑_햄스터"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554161_9554161_9595_9554660_9549828_9553552Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "phototimer6");
}
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554161_9554161_9595_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554161_9554161_9595_9554660_9549828_9553552Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("펑펑_햄스터"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554161_9554161_9595_9554660_9549828_9553552Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554161_9554161_9595_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554161_9554161_9595_9554660_9549828_9553552Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 21;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("펑펑_햄스터"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554161_9554161_9595_9554660_9549828_9553552Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554161_9554161_9595_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554161_9554161_9595_9554660_9549828_9553552Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대사5"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493245Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "phototimer7");
}
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493245Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493245Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 16;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대사5"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493245Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493245Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493245Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 19;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대사5"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493245Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493245Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493245Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("놀란햄스터"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545440_9546976_9554660_9549828_9553552Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "phototimer8");
}
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545440_9546976_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545440_9546976_9554660_9549828_9553552Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 21;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("놀란햄스터"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545440_9546976_9554660_9549828_9553552Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545440_9546976_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545440_9546976_9554660_9549828_9553552Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("대사6"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493246Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "phototimer9");
}
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493246Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493246Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 21;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대사6"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493246Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493246Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493246Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 24;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대사6"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493246Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493246Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493246Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("버튼"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548260_9553948Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "phototimer10");
}
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548260_9553948Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548260_9553948Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer2") > 24;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("버튼"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548260_9553948Objects1);
{for(var i = 0, len = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548260_9553948Objects1.length ;i < len;++i) {
    gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548260_9553948Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("버튼"), gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548260_9553948Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.mapOfGDgdjs_9546_959545824_959549324_959552824_959545716_959532_959554868_959547732_959549549Code_9546GD_95959548260_95959553948Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "구멍속", true);
}
}

}


};

gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548176_95442212Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548176_95442212Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493242Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493242Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493243Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493243Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493244Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493244Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554660_9549828_9553552Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554660_9549828_9553552Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554161_9554161_9595_9554660_9549828_9553552Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554161_9554161_9595_9554660_9549828_9553552Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493245Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493245Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545440_9546976_9554660_9549828_9553552Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545440_9546976_9554660_9549828_9553552Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493246Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493246Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548260_9553948Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548260_9553948Objects2.length = 0;

gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.eventsList0(runtimeScene);
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548176_95442212Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548176_95442212Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493242Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493242Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493243Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493243Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493244Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493244Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554660_9549828_9553552Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554660_9549828_9553552Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554161_9554161_9595_9554660_9549828_9553552Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9554161_9554161_9595_9554660_9549828_9553552Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493245Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493245Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545440_9546976_9554660_9549828_9553552Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545440_9546976_9554660_9549828_9553552Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493246Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9545824_95493246Objects2.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548260_9553948Objects1.length = 0;
gdjs._45824_49324_52824_45716_32_54868_47732_49549Code.GD_9548260_9553948Objects2.length = 0;


return;

}

gdjs['_45824_49324_52824_45716_32_54868_47732_49549Code'] = gdjs._45824_49324_52824_45716_32_54868_47732_49549Code;
