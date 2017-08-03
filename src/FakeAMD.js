//  A simple AMD loader
//  Author by StephenLiu
//  

(function(window) {
  class FakeAMD { 
    constructor(root) {
      root.define = this.define.bind(this)
      root.require = this.require.bind(this)
    }

    
    define() {
      console.log('define function')
    }

    require() {
      console.log('require function')
    }
  }
  // 实例化FakeAMD类，传入window
  let fakeAmd = new FakeAMD(window)
})(window)

