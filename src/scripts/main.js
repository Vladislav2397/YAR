new Vue({
  el: '#carousel',
  data: {
    counter: 0
  }
})

let nav = new Vue({
  el: '#nav',
  data: {
    dropdownCatalogShow: true
  },
  methods: {
    dropdownToggle: function() {
      this.dropdownCatalogShow = !this.dropdownCatalogShow;
    }
  }
});