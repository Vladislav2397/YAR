let carousel = new Vue({
  el: '#carousel',
  data: {
    counter: 0
  }
})

let nav = new Vue({
  el: '#nav',
  data: {
    catalogShow: true,
    countItems: 0,
    price: 0
  },
  methods: {
    catalogToggle: function() {
      catalog.showToggle()
    }
  }
})

let catalog = new Vue({
  el: '#catalog',
  data: {
    isShow: true
  },
  methods: {
    showToggle: function() {
      this.isShow = !this.isShow;
    }
  }
})

let categories = new Vue({
  el: '#dropdown',
  data: {
    isFixed: true,
    isShow: true
  }
})

if (document.querySelector('.dropdown__link')) {
  let dropdownItems = document.querySelectorAll('.dropdown__link')
  for (let i = 0; i < dropdownItems.length - 1; i++) {
    if (dropdownItems[i].text.length >= 35) {
      dropdownItems[i].classList.add('dropdown__span')
    }
  }
}