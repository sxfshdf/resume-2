"use strict";

!function () {
  var view = View('section.message');
  var model = Model({
    resourceName: 'Message'
  }); // var model = {
  //   initAV: function(){
  //     var APP_ID = 'yCrGpMgeFfjU1JsXWNWDcE5D-gzGzoHsz'
  //     var APP_KEY = 'NSXkzBTG6NOAP8XU2LlJ5XcV'
  //     AV.init({ appId: APP_ID, appKey: APP_KEY })
  //   },
  //   // 获取数据
  //   fetch: function(){
  //     var query = new AV.Query('Message')
  //     return query.find() // 返回 Promise 对象
  //   },
  //   //创建数据
  //   save: function( name, content ){
  //     var Message = AV.Object.extend('Message');
  //     var message = new Message()
  //     return message.save({ // 返回 Promise 对象
  //       'name': name,
  //       'content': content,
  //     })
  //   }
  // }

  var controller = Controller({
    init: function init(view, model) {
      this.messageList = view.querySelector('#messageList');
      this.form = view.querySelector('#postMessageForm');
      this.loadMessages();
    },
    saveMessages: function saveMessages() {
      var _this = this;

      var myform = this.form; // 查找元素，获取value

      var name = myform.querySelector('input[name=name]').value;
      var content = myform.querySelector('input[name=content]').value;
      var Message = AV.Object.extend('Message');
      var message = new Message();
      this.model.save({
        name: name,
        content: content
      }).then(function (object) {
        var li = document.createElement('li');
        li.innerText = "".concat(object.attributes.name, " :  ").concat(object.attributes.content);

        _this.messageList.appendChild(li);

        myform.querySelector('input[name=name]').value = '';
        myform.querySelector('input[name=content]').value = '';
      });
    },
    loadMessages: function loadMessages() {
      var _this2 = this;

      this.model.fetch().then(function (messages) {
        // 成功获得实例
        var array = messages.map(function (item) {
          return item.attributes;
        });
        array.forEach(function (item) {
          var li = document.createElement('li');
          li.innerText = "".concat(item.name, " :  ").concat(item.content);

          _this2.messageList.appendChild(li);
        });
      }, function (error) {// 异常处理
      });
    },
    bindEvents: function bindEvents() {
      var _this3 = this;

      this.form.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = _this3.form.querySelector('input[name=name]').value;

        var content = _this3.form.querySelector('input[name=content]').value;

        if (name === '') {
          alert('请输入用户名');

          _this3.form.querySelector('input[name=name]').focus();
        } else if (content === '') {
          alert('请输入内容');

          _this3.form.querySelector('input[name=content]').focus();
        } else {
          console.log(name);

          _this3.saveMessages();
        }
      });
    }
  }); // var controller = {
  //   view: null,
  //   model: null,
  //   messageList: null,
  //   form: null,
  //   init: function(view){
  //     this.view = view
  //     this.model = model
  //     this.messageList = view.querySelector('#messageList')
  //     this.form = view.querySelector('#postMessageForm')
  //     this.model.initAV()
  //     this.loadMessages()
  //     this.bindEvents()
  //   },
  //   bindEvents: function(){
  //     this.form.addEventListener('submit',(e)=>{
  //       e.preventDefault()
  //       this.saveMessages()
  //     })
  //   },
  //   saveMessages: function(){
  //     let myform = this.form
  //     // 查找元素，获取value
  //     let name = myform.querySelector('input[name=name]').value
  //     let content = myform.querySelector('input[name=content]').value
  //     var Message = AV.Object.extend('Message');
  //     var message = new Message()
  //     this.model.save({name:name, content:content}).then((object)=>{
  //       let li = document.createElement('li')
  //       li.innerText = `${object.attributes.name} :  ${object.attributes.content}`
  //       this.messageList.appendChild(li)
  //       myform.querySelector('input[name=name]').value=''
  //       myform.querySelector('input[name=content]').value=''
  //     })      
  //   },
  //   loadMessages:function(){
  //     this.model.fetch().then( (messages)=> {
  //       // 成功获得实例
  //       let array = messages.map(function(item){
  //         return item.attributes
  //       })
  //       array.forEach((item)=>{
  //         let li = document.createElement('li')
  //         li.innerText = `${item.name} :  ${item.content}`
  //         this.messageList.appendChild(li)
  //       })
  //     }, function (error) {
  //       // 异常处理
  //     })
  //   }
  // }

  controller.init(view, model);
}.call();