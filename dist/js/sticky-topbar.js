"use strict";

!function () {
  var view = View('#topNavBar');
  var controller = {
    view: null,
    init: function init(view) {
      this.view = view;
      this.bindEvents(); // this.bindEvents.call(this)
    },
    bindEvents: function bindEvents() {
      var view = this.view;
      window.addEventListener('scroll', function (x) {
        if (window.scrollY > 0) {
          this.active();
        } else {
          this.deactive();
        }
      }.bind(this)); // this需要绑定，或者用箭头函数，箭头函数内外的this一致,箭头函数没有this
    },
    active: function active() {
      view.classList.add('sticky');
    },
    deactive: function deactive() {
      view.classList.remove('sticky');
    }
  };
  controller.init(view); // controller.init.call(controller,view)
}.call();