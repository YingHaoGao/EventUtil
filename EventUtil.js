/*
 * es5中用于兼容IE浏览器的事件集合
 * */

//创建全局对象EventUtil
EventUitl = {
  //绑定事件
  addHandler: function (element, type, handler, bubbles) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler);  //IE只支持冒泡
    } else {
      element['on' + type] = handler;
    }
  },
  //解除事件绑定
  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent('on' + type, handler);
    } else {
      element.['on' + type] = null;
    }
  },
  //获取事件对象
  getEvent: function (event) {
    return event ? event : window.event;
  },
  //获取事件元素
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  //阻止默认事件
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  //阻止冒泡
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
  //获取事件相关元素
  getRelatedTarget: function (event) {
    if (event.relatedTarget) {
      return event.relatedTarget;
    } else if (event.toElement) {
      return event.toElement;
    } else if (event.fromElement) {
      return event.fromElement;
    } else {
      return null;
    }
  },
  //获取鼠标按钮编号   0：主按钮； 1：滚轮； 2：右键；
  getButton: function (event) {
    if (document.implementation.hasFeature("MouseEvent", "2.0")) {
      return event.button;
    } else {
      switch (event.button) {
        case 0:
        case 1:
        case 3:
        case 5:
        case 7:
          return 0;
        case 2:
        case 6:
          return 2;
        case 4:
          return 1;
      }
    }
  },
  //获取滚轮滚动值    负数：向后滚动； 整数：向前滚动；
  getWheelDelta: function (event) {
    if (event.wheelDelta) {
      return (client.engine.opera && client.engine.opera < 9.5 ?
        -event.wheelDelta : event.wheelDelta);
    } else {
      return -event.detail * 40;
    }
  },
  //获取键盘事件的 ASCII 编码
  getCharCode: function (event) {
    if (typeof event.charcode == 'number') {
      return event.charCode;
    } else {
      return event.keyCode;
    }
  }
}












