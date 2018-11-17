!function(){
  var view = document.querySelectorAll('[data-x]')
  var controller = {
    view: null, 
    init: function(view){
      this.view = view
      this.addOffset()
      this.removeOffset()
      this.bindEvents()  
    },
    bindEvents: function(){ window.addEventListener('scroll',()=>{
      this.removeOffset()
      })
    },
    addOffset: function(){
      //添加 offset
      for(let i = 0; i < this.view.length; i++){
        this.view[i].classList.add('offset')
      }
    },
    removeOffset: function(){ 
      let specialTags = this.view
      let minIndex = 0
      for(let i = 0; i < specialTags.length; i++){
        if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY))
          minIndex = i
      }
      // minIndex 就是离窗口最近的元素
      specialTags[minIndex].classList.remove('offset')
      
      let id = specialTags[minIndex].id
      let a = document.querySelector('a[href="#' + id +'"]')
      let li = a.parentNode
      let brothersAndMe = li.parentNode.children
      for(let i = 0; i < brothersAndMe.length; i++){
        brothersAndMe[i].classList.remove('highlight')
      }
      li.classList.add('highlight')
    }
  }
  controller.init(view)
}.call()
