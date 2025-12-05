gdjs._51228_47785_50630_45716_32_51109_47732Code = {};
gdjs._51228_47785_50630_45716_32_51109_47732Code.localVariables = [];
gdjs._51228_47785_50630_45716_32_51109_47732Code.idToCallbackMap = new Map();
gdjs._51228_47785_50630_45716_32_51109_47732Code.GDNewSpriteObjects1= [];
gdjs._51228_47785_50630_45716_32_51109_47732Code.GDNewSpriteObjects2= [];
gdjs._51228_47785_50630_45716_32_51109_47732Code.GDNewSprite2Objects1= [];
gdjs._51228_47785_50630_45716_32_51109_47732Code.GDNewSprite2Objects2= [];


gdjs._51228_47785_50630_45716_32_51109_47732Code.mapOfGDgdjs_9546_959551228_959547785_959550630_959545716_959532_959551109_959547732Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._51228_47785_50630_45716_32_51109_47732Code.GDNewSprite2Objects1});
gdjs._51228_47785_50630_45716_32_51109_47732Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._51228_47785_50630_45716_32_51109_47732Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._51228_47785_50630_45716_32_51109_47732Code.mapOfGDgdjs_9546_959551228_959547785_959550630_959545716_959532_959551109_959547732Code_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "제목없는 장면2", true);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._51228_47785_50630_45716_32_51109_47732Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._51228_47785_50630_45716_32_51109_47732Code.GDNewSpriteObjects1.length = 0;
gdjs._51228_47785_50630_45716_32_51109_47732Code.GDNewSpriteObjects2.length = 0;
gdjs._51228_47785_50630_45716_32_51109_47732Code.GDNewSprite2Objects1.length = 0;
gdjs._51228_47785_50630_45716_32_51109_47732Code.GDNewSprite2Objects2.length = 0;

gdjs._51228_47785_50630_45716_32_51109_47732Code.eventsList0(runtimeScene);
gdjs._51228_47785_50630_45716_32_51109_47732Code.GDNewSpriteObjects1.length = 0;
gdjs._51228_47785_50630_45716_32_51109_47732Code.GDNewSpriteObjects2.length = 0;
gdjs._51228_47785_50630_45716_32_51109_47732Code.GDNewSprite2Objects1.length = 0;
gdjs._51228_47785_50630_45716_32_51109_47732Code.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['_51228_47785_50630_45716_32_51109_47732Code'] = gdjs._51228_47785_50630_45716_32_51109_47732Code;
