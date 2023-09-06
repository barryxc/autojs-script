module.exports = {
  //点击控件所在坐标
  btn_position_click: function (x) {
    if (x) click(x.bounds().centerX(), x.bounds().centerY());
  },

  //不断查找元素x的父元素，指定满足要求(解决模拟器和手机查找元素不一致问题)
  btn_assure_click: function (x) {
    if (x && x.clickable()) return x.click();
    for (var ii = 0; ii < 6; ii++) {
      if (!x) break;
      x = x.parent();
      if (x && x.clickable()) return x.click();
      var list_x = x.children();
      for (var i = 0; i < list_x.length; i++) {
        if (list_x[i] && list_x[i].clickable()) {
          return list_x[i].click();
        }
      }
    }
    return false;
  },

  showLog: function (message, show) {
    console.log(message);
    if (show) {
      toast(message);
    }
  },

  isFarmHomePage: function () {
    return text("芭芭农场，免费领水果，助果农增收")
      .packageName(config.packageName)
      .drawingOrder(0)
      .exists();
  },
  exit:function(){
    globalThis.exit();
  }
};
