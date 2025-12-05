gdjs._352Code = {};
gdjs._352Code.localVariables = [];
gdjs._352Code.idToCallbackMap = new Map();
gdjs._352Code.GD_9548148_9545797Objects1= [];
gdjs._352Code.GD_9548148_9545797Objects2= [];
gdjs._352Code.GD_9547676_9551648Objects1= [];
gdjs._352Code.GD_9547676_9551648Objects2= [];
gdjs._352Code.GD_9554660_9549828_95535521Objects1= [];
gdjs._352Code.GD_9554660_9549828_95535521Objects2= [];
gdjs._352Code.GD_9552824_9551592Objects1= [];
gdjs._352Code.GD_9552824_9551592Objects2= [];
gdjs._352Code.GD_9545824_9548376Objects1= [];
gdjs._352Code.GD_9545824_9548376Objects2= [];


gdjs._352Code.mapOfGDgdjs_9546_9595352Code_9546GD_95959554660_95959549828_959595535521Objects1Objects = Hashtable.newFrom({"햄스터1": gdjs._352Code.GD_9554660_9549828_95535521Objects1});
gdjs._352Code.mapOfGDgdjs_9546_9595352Code_9546GD_95959552824_95959551592Objects1Objects = Hashtable.newFrom({"치즈": gdjs._352Code.GD_9552824_9551592Objects1});
gdjs._352Code.mapOfGDgdjs_9546_9595352Code_9546GD_95959554660_95959549828_959595535521Objects1Objects = Hashtable.newFrom({"햄스터1": gdjs._352Code.GD_9554660_9549828_95535521Objects1});
gdjs._352Code.mapOfGDgdjs_9546_9595352Code_9546GD_95959547676_95959551648Objects1Objects = Hashtable.newFrom({"먼지": gdjs._352Code.GD_9547676_9551648Objects1});
gdjs._352Code.mapOfGDgdjs_9546_9595352Code_9546GD_95959554660_95959549828_959595535521Objects1Objects = Hashtable.newFrom({"햄스터1": gdjs._352Code.GD_9554660_9549828_95535521Objects1});
gdjs._352Code.mapOfGDgdjs_9546_9595352Code_9546GD_95959552824_95959551592Objects1Objects = Hashtable.newFrom({"치즈": gdjs._352Code.GD_9552824_9551592Objects1});
gdjs._352Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Whisker Wonderland.mp3", false, 30, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본"), gdjs._352Code.GD_9545824_9548376Objects1);
gdjs.copyArray(runtimeScene.getObjects("햄스터1"), gdjs._352Code.GD_9554660_9549828_95535521Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber((( gdjs._352Code.GD_9554660_9549828_95535521Objects1.length === 0 ) ? 0 :gdjs._352Code.GD_9554660_9549828_95535521Objects1[0].getPointX("")));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber((( gdjs._352Code.GD_9554660_9549828_95535521Objects1.length === 0 ) ? 0 :gdjs._352Code.GD_9554660_9549828_95535521Objects1[0].getPointY("")));
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "phototimer5");
}
{for(var i = 0, len = gdjs._352Code.GD_9545824_9548376Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9545824_9548376Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer5") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본"), gdjs._352Code.GD_9545824_9548376Objects1);
{for(var i = 0, len = gdjs._352Code.GD_9545824_9548376Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9545824_9548376Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer5") > 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본"), gdjs._352Code.GD_9545824_9548376Objects1);
{for(var i = 0, len = gdjs._352Code.GD_9545824_9548376Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9545824_9548376Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("치즈"), gdjs._352Code.GD_9552824_9551592Objects1);
gdjs.copyArray(runtimeScene.getObjects("햄스터1"), gdjs._352Code.GD_9554660_9549828_95535521Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._352Code.mapOfGDgdjs_9546_9595352Code_9546GD_95959554660_95959549828_959595535521Objects1Objects, gdjs._352Code.mapOfGDgdjs_9546_9595352Code_9546GD_95959552824_95959551592Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터1"), gdjs._352Code.GD_9554660_9549828_95535521Objects1);
{for(var i = 0, len = gdjs._352Code.GD_9554660_9549828_95535521Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9554660_9549828_95535521Objects1[i].addForce(400, 0, 0);
}
}
{for(var i = 0, len = gdjs._352Code.GD_9554660_9549828_95535521Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9554660_9549828_95535521Objects1[i].getBehavior("Animation").setAnimationName("오른쪽");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터1"), gdjs._352Code.GD_9554660_9549828_95535521Objects1);
{for(var i = 0, len = gdjs._352Code.GD_9554660_9549828_95535521Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9554660_9549828_95535521Objects1[i].addForce(-(400), 0, 0);
}
}
{for(var i = 0, len = gdjs._352Code.GD_9554660_9549828_95535521Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9554660_9549828_95535521Objects1[i].getBehavior("Animation").setAnimationName("왼쪽");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터1"), gdjs._352Code.GD_9554660_9549828_95535521Objects1);
{for(var i = 0, len = gdjs._352Code.GD_9554660_9549828_95535521Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9554660_9549828_95535521Objects1[i].addForce(0, -(400), 0);
}
}
{for(var i = 0, len = gdjs._352Code.GD_9554660_9549828_95535521Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9554660_9549828_95535521Objects1[i].getBehavior("Animation").setAnimationName("뒷모습");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터1"), gdjs._352Code.GD_9554660_9549828_95535521Objects1);
{for(var i = 0, len = gdjs._352Code.GD_9554660_9549828_95535521Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9554660_9549828_95535521Objects1[i].addForce(0, 400, 0);
}
}
{for(var i = 0, len = gdjs._352Code.GD_9554660_9549828_95535521Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9554660_9549828_95535521Objects1[i].getBehavior("Animation").setAnimationName("앞모습");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터1"), gdjs._352Code.GD_9554660_9549828_95535521Objects1);
{for(var i = 0, len = gdjs._352Code.GD_9554660_9549828_95535521Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9554660_9549828_95535521Objects1[i].getBehavior("Animation").setAnimationName("멈췄을때");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터1"), gdjs._352Code.GD_9554660_9549828_95535521Objects1);
{for(var i = 0, len = gdjs._352Code.GD_9554660_9549828_95535521Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9554660_9549828_95535521Objects1[i].getBehavior("Animation").setAnimationName("멈췄을때");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터1"), gdjs._352Code.GD_9554660_9549828_95535521Objects1);
{for(var i = 0, len = gdjs._352Code.GD_9554660_9549828_95535521Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9554660_9549828_95535521Objects1[i].getBehavior("Animation").setAnimationName("멈췄을때");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터1"), gdjs._352Code.GD_9554660_9549828_95535521Objects1);
{for(var i = 0, len = gdjs._352Code.GD_9554660_9549828_95535521Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9554660_9549828_95535521Objects1[i].getBehavior("Animation").setAnimationName("멈췄을때");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("먼지"), gdjs._352Code.GD_9547676_9551648Objects1);
gdjs.copyArray(runtimeScene.getObjects("햄스터1"), gdjs._352Code.GD_9554660_9549828_95535521Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._352Code.mapOfGDgdjs_9546_9595352Code_9546GD_95959554660_95959549828_959595535521Objects1Objects, gdjs._352Code.mapOfGDgdjs_9546_9595352Code_9546GD_95959547676_95959551648Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._352Code.GD_9554660_9549828_95535521Objects1 */
{for(var i = 0, len = gdjs._352Code.GD_9554660_9549828_95535521Objects1.length ;i < len;++i) {
    gdjs._352Code.GD_9554660_9549828_95535521Objects1[i].setPosition(52,840);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("치즈"), gdjs._352Code.GD_9552824_9551592Objects1);
gdjs.copyArray(runtimeScene.getObjects("햄스터1"), gdjs._352Code.GD_9554660_9549828_95535521Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._352Code.mapOfGDgdjs_9546_9595352Code_9546GD_95959554660_95959549828_959595535521Objects1Objects, gdjs._352Code.mapOfGDgdjs_9546_9595352Code_9546GD_95959552824_95959551592Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "#3", false);
}
}

}


};

gdjs._352Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._352Code.GD_9548148_9545797Objects1.length = 0;
gdjs._352Code.GD_9548148_9545797Objects2.length = 0;
gdjs._352Code.GD_9547676_9551648Objects1.length = 0;
gdjs._352Code.GD_9547676_9551648Objects2.length = 0;
gdjs._352Code.GD_9554660_9549828_95535521Objects1.length = 0;
gdjs._352Code.GD_9554660_9549828_95535521Objects2.length = 0;
gdjs._352Code.GD_9552824_9551592Objects1.length = 0;
gdjs._352Code.GD_9552824_9551592Objects2.length = 0;
gdjs._352Code.GD_9545824_9548376Objects1.length = 0;
gdjs._352Code.GD_9545824_9548376Objects2.length = 0;

gdjs._352Code.eventsList0(runtimeScene);
gdjs._352Code.GD_9548148_9545797Objects1.length = 0;
gdjs._352Code.GD_9548148_9545797Objects2.length = 0;
gdjs._352Code.GD_9547676_9551648Objects1.length = 0;
gdjs._352Code.GD_9547676_9551648Objects2.length = 0;
gdjs._352Code.GD_9554660_9549828_95535521Objects1.length = 0;
gdjs._352Code.GD_9554660_9549828_95535521Objects2.length = 0;
gdjs._352Code.GD_9552824_9551592Objects1.length = 0;
gdjs._352Code.GD_9552824_9551592Objects2.length = 0;
gdjs._352Code.GD_9545824_9548376Objects1.length = 0;
gdjs._352Code.GD_9545824_9548376Objects2.length = 0;


return;

}

gdjs['_352Code'] = gdjs._352Code;
