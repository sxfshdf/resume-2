window.Model = function(options){
  let resourceName = options.resourceName
  return {
    init: function(){
      var APP_ID = 'yCrGpMgeFfjU1JsXWNWDcE5D-gzGzoHsz'
      var APP_KEY = 'NSXkzBTG6NOAP8XU2LlJ5XcV'

      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    // 获取数据
    fetch: function(){
      var query = new AV.Query(resourceName)
      return query.find() // 返回 Promise 对象
    },
    //创建数据
    save: function( object ){
      var X = AV.Object.extend(resourceName);
      var x = new X()
      return x.save(object)
    }
  }
}