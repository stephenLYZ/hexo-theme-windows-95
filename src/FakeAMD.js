//  A simple AMD loader
//  Author by StephenLiu
//  

(function(root) {
  class FakeAMD { 
    constructor(root) {
      root.define = this.define.bind(this)
      root.require = this.require.bind(this)
      root.require.config = this.requireConfig.bind(this)
    }

    define(name, deps, factory) {
      
    }

    require() {
      console.log('require function')
    }

    requireConfig() {
      console.log('require config function')
    }
  }
  // 实例化FakeAMD类，传入window
  let fakeAmd = new FakeAMD(root)
})(window)

