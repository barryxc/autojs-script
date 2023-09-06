var commonModule = require("./common.js");
var config = require("./config.js");

console.show();

commonModule.showLog("开始执行", true);

console.log(config.packageName);
var taobao = getAppName(config.packageName);
if (!taobao) {
  commonModule.showLog("未安装淘宝", true);
  exit();
}

launchPackage(config.packageName);

//是否是芭芭农场首页
if (!commonModule.isFarmHomePage()) {
  var mytaobao = desc("我的淘宝").findOne(config.findTimeOut);
  if (!mytaobao) {
    printLog("无法找到我的淘宝按钮，无法进入农场", true);
    exit();
  } else {
    commonModule.btn_assure_click(mytaobao);
    var btnFarm = desc("芭芭农场").findOne(config.findTimeOut);
    if (!btnFarm) {
      printLog("未找到芭芭农场", true);
      exit();
    }
    commonModule.btn_assure_click(btnFarm);
  }
}

commonModule.showLog("进入芭芭农场页", true);
sleep(3000);
closeFc();



commonModule.showLog("执行结束", true);
setTimeout(() => {
  console.hide();
}, 3000);


//关闭浮层
function closeFc() {
  setInterval(() => {
    var hpFrame = id("hp-pop-frame-title").findOnce();
    if (hpFrame) {
      className("android.widget.Button").text("关闭").findOne().click();
    }

    var hongbaoFc = className("android.widget.FrameLayout")
      .desc("浮层")
      .findOne(5000);
    if (hongbaoFc) {
      className("android.widget.FrameLayout")
        .desc("浮层关闭按钮")
        .findOne(5000)
        .click();
    }
  }, 500);
}
