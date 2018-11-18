"use strict";

!function () {
  var view = document.querySelectorAll('[data-x]');
  var controller = {
    view: null,
    init: function init(view) {
      this.view = view;
      this.addOffset();
      this.removeOffset();
      this.bindEvents();
    },
    bindEvents: function bindEvents() {
      var _this = this;

      window.addEventListener('scroll', function () {
        _this.removeOffset();
      });
    },
    addOffset: function addOffset() {
      //添加 offset
      for (var i = 0; i < this.view.length; i++) {
        this.view[i].classList.add('offset');
      }
    },
    removeOffset: function removeOffset() {
      var specialTags = this.view;
      var minIndex = 0;

      for (var i = 0; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) minIndex = i;
      } // minIndex 就是离窗口最近的元素


      specialTags[minIndex].classList.remove('offset');
      var id = specialTags[minIndex].id;
      var a = document.querySelector('a[href="#' + id + '"]');
      var li = a.parentNode;
      var brothersAndMe = li.parentNode.children;

      for (var _i = 0; _i < brothersAndMe.length; _i++) {
        brothersAndMe[_i].classList.remove('highlight');
      }

      li.classList.add('highlight');
    }
  };
  controller.init(view);
}.call();