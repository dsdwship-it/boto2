gdjs._354Code = {};
gdjs._354Code.localVariables = [];
gdjs._354Code.idToCallbackMap = new Map();
gdjs._354Code.GD_9548176_9544221Objects1= [];
gdjs._354Code.GD_9548176_9544221Objects2= [];
gdjs._354Code.GD_9552824_9551592Objects1= [];
gdjs._354Code.GD_9552824_9551592Objects2= [];
gdjs._354Code.GD_9554588_9545339Objects1= [];
gdjs._354Code.GD_9554588_9545339Objects2= [];
gdjs._354Code.GD_9550556_95522922Objects1= [];
gdjs._354Code.GD_9550556_95522922Objects2= [];
gdjs._354Code.GD_9554660_9549828_9553552Objects1= [];
gdjs._354Code.GD_9554660_9549828_9553552Objects2= [];
gdjs._354Code.GD_9545336_9550612_9544032_9544592Objects1= [];
gdjs._354Code.GD_9545336_9550612_9544032_9544592Objects2= [];
gdjs._354Code.GD_9545824_9548376Objects1= [];
gdjs._354Code.GD_9545824_9548376Objects2= [];


gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554660_95959549828_95959553552Objects1Objects = Hashtable.newFrom({"햄스터": gdjs._354Code.GD_9554660_9549828_9553552Objects1});
gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959552824_95959551592Objects1Objects = Hashtable.newFrom({"치즈": gdjs._354Code.GD_9552824_9551592Objects1});
gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554660_95959549828_95959553552Objects1Objects = Hashtable.newFrom({"햄스터": gdjs._354Code.GD_9554660_9549828_9553552Objects1});
gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554588_95959545339Objects1Objects = Hashtable.newFrom({"피넛": gdjs._354Code.GD_9554588_9545339Objects1});
gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554660_95959549828_95959553552Objects1Objects = Hashtable.newFrom({"햄스터": gdjs._354Code.GD_9554660_9549828_9553552Objects1});
gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959550556_959595522922Objects1Objects = Hashtable.newFrom({"야채2": gdjs._354Code.GD_9550556_95522922Objects1});
gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959545336_95959550612_95959544032_95959544592Objects1Objects = Hashtable.newFrom({"넘어가기": gdjs._354Code.GD_9545336_9550612_9544032_9544592Objects1});
gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554660_95959549828_95959553552Objects1Objects = Hashtable.newFrom({"햄스터": gdjs._354Code.GD_9554660_9549828_9553552Objects1});
gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959552824_95959551592Objects1Objects = Hashtable.newFrom({"치즈": gdjs._354Code.GD_9552824_9551592Objects1});
gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554660_95959549828_95959553552Objects1Objects = Hashtable.newFrom({"햄스터": gdjs._354Code.GD_9554660_9549828_9553552Objects1});
gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554588_95959545339Objects1Objects = Hashtable.newFrom({"피넛": gdjs._354Code.GD_9554588_9545339Objects1});
gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554660_95959549828_95959553552Objects1Objects = Hashtable.newFrom({"햄스터": gdjs._354Code.GD_9554660_9549828_9553552Objects1});
gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959550556_959595522922Objects1Objects = Hashtable.newFrom({"야채2": gdjs._354Code.GD_9550556_95522922Objects1});
gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959552824_95959551592Objects1Objects = Hashtable.newFrom({"치즈": gdjs._354Code.GD_9552824_9551592Objects1});
gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554588_95959545339Objects1Objects = Hashtable.newFrom({"피넛": gdjs._354Code.GD_9554588_9545339Objects1});
gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959550556_959595522922Objects1Objects = Hashtable.newFrom({"야채2": gdjs._354Code.GD_9550556_95522922Objects1});
gdjs._354Code.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("넘어가기"), gdjs._354Code.GD_9545336_9550612_9544032_9544592Objects1);
gdjs.copyArray(runtimeScene.getObjects("대본"), gdjs._354Code.GD_9545824_9548376Objects1);
{for(var i = 0, len = gdjs._354Code.GD_9545336_9550612_9544032_9544592Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9545336_9550612_9544032_9544592Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._354Code.GD_9545824_9548376Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9545824_9548376Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "phototimer5");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer5") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본"), gdjs._354Code.GD_9545824_9548376Objects1);
{for(var i = 0, len = gdjs._354Code.GD_9545824_9548376Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9545824_9548376Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "phototimer5") > 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("대본"), gdjs._354Code.GD_9545824_9548376Objects1);
{for(var i = 0, len = gdjs._354Code.GD_9545824_9548376Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9545824_9548376Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("치즈"), gdjs._354Code.GD_9552824_9551592Objects1);
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._354Code.GD_9554660_9549828_9553552Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554660_95959549828_95959553552Objects1Objects, gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959552824_95959551592Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15648092);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("피넛"), gdjs._354Code.GD_9554588_9545339Objects1);
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._354Code.GD_9554660_9549828_9553552Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554660_95959549828_95959553552Objects1Objects, gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554588_95959545339Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15649132);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("야채2"), gdjs._354Code.GD_9550556_95522922Objects1);
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._354Code.GD_9554660_9549828_9553552Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554660_95959549828_95959553552Objects1Objects, gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959550556_959595522922Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15649740);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("넘어가기"), gdjs._354Code.GD_9545336_9550612_9544032_9544592Objects1);
{for(var i = 0, len = gdjs._354Code.GD_9545336_9550612_9544032_9544592Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9545336_9550612_9544032_9544592Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("넘어가기"), gdjs._354Code.GD_9545336_9550612_9544032_9544592Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959545336_95959550612_95959544032_95959544592Objects1Objects, runtimeScene, true, false);
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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._354Code.GD_9554660_9549828_9553552Objects1);
{for(var i = 0, len = gdjs._354Code.GD_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9554660_9549828_9553552Objects1[i].addForce(400, 0, 0);
}
}
{for(var i = 0, len = gdjs._354Code.GD_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9554660_9549828_9553552Objects1[i].getBehavior("Animation").setAnimationName("오른쪽");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._354Code.GD_9554660_9549828_9553552Objects1);
{for(var i = 0, len = gdjs._354Code.GD_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9554660_9549828_9553552Objects1[i].addForce(-(400), 0, 0);
}
}
{for(var i = 0, len = gdjs._354Code.GD_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9554660_9549828_9553552Objects1[i].getBehavior("Animation").setAnimationName("왼쪽");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._354Code.GD_9554660_9549828_9553552Objects1);
{for(var i = 0, len = gdjs._354Code.GD_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9554660_9549828_9553552Objects1[i].addForce(0, -(400), 0);
}
}
{for(var i = 0, len = gdjs._354Code.GD_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9554660_9549828_9553552Objects1[i].getBehavior("Animation").setAnimationName("뒷모습");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._354Code.GD_9554660_9549828_9553552Objects1);
{for(var i = 0, len = gdjs._354Code.GD_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9554660_9549828_9553552Objects1[i].addForce(0, 400, 0);
}
}
{for(var i = 0, len = gdjs._354Code.GD_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9554660_9549828_9553552Objects1[i].getBehavior("Animation").setAnimationName("앞모습");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._354Code.GD_9554660_9549828_9553552Objects1);
{for(var i = 0, len = gdjs._354Code.GD_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9554660_9549828_9553552Objects1[i].getBehavior("Animation").setAnimationName("멈췄을때");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._354Code.GD_9554660_9549828_9553552Objects1);
{for(var i = 0, len = gdjs._354Code.GD_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9554660_9549828_9553552Objects1[i].getBehavior("Animation").setAnimationName("멈췄을때");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._354Code.GD_9554660_9549828_9553552Objects1);
{for(var i = 0, len = gdjs._354Code.GD_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9554660_9549828_9553552Objects1[i].getBehavior("Animation").setAnimationName("멈췄을때");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._354Code.GD_9554660_9549828_9553552Objects1);
{for(var i = 0, len = gdjs._354Code.GD_9554660_9549828_9553552Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9554660_9549828_9553552Objects1[i].getBehavior("Animation").setAnimationName("멈췄을때");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("치즈"), gdjs._354Code.GD_9552824_9551592Objects1);
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._354Code.GD_9554660_9549828_9553552Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554660_95959549828_95959553552Objects1Objects, gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959552824_95959551592Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._354Code.GD_9552824_9551592Objects1 */
{for(var i = 0, len = gdjs._354Code.GD_9552824_9551592Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9552824_9551592Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "respawn_치즈");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("피넛"), gdjs._354Code.GD_9554588_9545339Objects1);
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._354Code.GD_9554660_9549828_9553552Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554660_95959549828_95959553552Objects1Objects, gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554588_95959545339Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._354Code.GD_9554588_9545339Objects1 */
{for(var i = 0, len = gdjs._354Code.GD_9554588_9545339Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9554588_9545339Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "respawn_피넛");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("야채2"), gdjs._354Code.GD_9550556_95522922Objects1);
gdjs.copyArray(runtimeScene.getObjects("햄스터"), gdjs._354Code.GD_9554660_9549828_9553552Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554660_95959549828_95959553552Objects1Objects, gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959550556_959595522922Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._354Code.GD_9550556_95522922Objects1 */
{for(var i = 0, len = gdjs._354Code.GD_9550556_95522922Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9550556_95522922Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "respawn_야채2");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "respawn_치즈") > 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15661644);
}
}
if (isConditionTrue_0) {
gdjs._354Code.GD_9552824_9551592Objects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "respawn_치즈");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959552824_95959551592Objects1Objects, gdjs.randomInRange(50, 650), gdjs.randomInRange(200, 1000), "UI");
}
{for(var i = 0, len = gdjs._354Code.GD_9552824_9551592Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9552824_9551592Objects1[i].getBehavior("Scale").setScale(0.19);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "respawn_피넛") > 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15662068);
}
}
if (isConditionTrue_0) {
gdjs._354Code.GD_9554588_9545339Objects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "respawn_치즈");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959554588_95959545339Objects1Objects, gdjs.randomInRange(50, 600), gdjs.randomInRange(200, 1000), "UI");
}
{for(var i = 0, len = gdjs._354Code.GD_9554588_9545339Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9554588_9545339Objects1[i].getBehavior("Scale").setScale(0.19);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "respawn_야채2") > 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15663468);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("야채2"), gdjs._354Code.GD_9550556_95522922Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "respawn_치즈");
}
{for(var i = 0, len = gdjs._354Code.GD_9550556_95522922Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9550556_95522922Objects1[i].getBehavior("Scale").setScale(0.19);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs._354Code.mapOfGDgdjs_9546_9595354Code_9546GD_95959550556_959595522922Objects1Objects, gdjs.randomInRange(50, 600), gdjs.randomInRange(200, 600), "UI");
}
{for(var i = 0, len = gdjs._354Code.GD_9550556_95522922Objects1.length ;i < len;++i) {
    gdjs._354Code.GD_9550556_95522922Objects1[i].getBehavior("Scale").setScale(0.19);
}
}
}

}


};

gdjs._354Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._354Code.GD_9548176_9544221Objects1.length = 0;
gdjs._354Code.GD_9548176_9544221Objects2.length = 0;
gdjs._354Code.GD_9552824_9551592Objects1.length = 0;
gdjs._354Code.GD_9552824_9551592Objects2.length = 0;
gdjs._354Code.GD_9554588_9545339Objects1.length = 0;
gdjs._354Code.GD_9554588_9545339Objects2.length = 0;
gdjs._354Code.GD_9550556_95522922Objects1.length = 0;
gdjs._354Code.GD_9550556_95522922Objects2.length = 0;
gdjs._354Code.GD_9554660_9549828_9553552Objects1.length = 0;
gdjs._354Code.GD_9554660_9549828_9553552Objects2.length = 0;
gdjs._354Code.GD_9545336_9550612_9544032_9544592Objects1.length = 0;
gdjs._354Code.GD_9545336_9550612_9544032_9544592Objects2.length = 0;
gdjs._354Code.GD_9545824_9548376Objects1.length = 0;
gdjs._354Code.GD_9545824_9548376Objects2.length = 0;

gdjs._354Code.eventsList0(runtimeScene);
gdjs._354Code.GD_9548176_9544221Objects1.length = 0;
gdjs._354Code.GD_9548176_9544221Objects2.length = 0;
gdjs._354Code.GD_9552824_9551592Objects1.length = 0;
gdjs._354Code.GD_9552824_9551592Objects2.length = 0;
gdjs._354Code.GD_9554588_9545339Objects1.length = 0;
gdjs._354Code.GD_9554588_9545339Objects2.length = 0;
gdjs._354Code.GD_9550556_95522922Objects1.length = 0;
gdjs._354Code.GD_9550556_95522922Objects2.length = 0;
gdjs._354Code.GD_9554660_9549828_9553552Objects1.length = 0;
gdjs._354Code.GD_9554660_9549828_9553552Objects2.length = 0;
gdjs._354Code.GD_9545336_9550612_9544032_9544592Objects1.length = 0;
gdjs._354Code.GD_9545336_9550612_9544032_9544592Objects2.length = 0;
gdjs._354Code.GD_9545824_9548376Objects1.length = 0;
gdjs._354Code.GD_9545824_9548376Objects2.length = 0;


return;

}

gdjs['_354Code'] = gdjs._354Code;
