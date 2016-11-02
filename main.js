// var Component = require('./components/MainComponent.html');
// new Component({ el: document.body });
//
//
// console.log('ohai')

const Ractive = require('ractive')
const HelloWorld = require('./components/hello-world.html')

Ractive.components.helloWorld = HelloWorld

const master = new Ractive({
  el: '#main',
  template: '<helloWorld name={{foo}}></helloWorld>',
  data: {
    foo: 'lalal'
  }
})

// let ractive = new HelloWorld({
//   el: '#main',
//   // data: {
//   //   name: 'Foo'
//   // }
// })

// const CheckBox = Ractive.extend({
//   isolated: true,
//   template: `<label>
//     <input type="checkbox" checked="{{checked}}">{{label}}
//   </label>`,
//   data: {
//     checked: false
//   }
// })
//
// const Ractive = require('ractive')

// let ractive = new Ractive({
//   el: '#main',
//   template: '<h1>{{name}}</h1>',
//   data: {
//     name: 'world'
//   }
// })

//
