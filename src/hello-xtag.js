xtag.register('hello-xtag', {
  content: '<h3>Hello Xtag</h3>',
  lifecycle: {
    created: function () {
      this.test()
    }
  },
  methods: {
    test: function () {
      console.log('created')
    }
  },
  accessors: {
    msg: {
      attribute: {},
      get: function () {},
      set: function () {}
    }
  }
})
