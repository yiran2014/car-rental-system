import 'normalize.css'
import './index.scss'
import { fetch, rap } from 'js/fetch.js'
let url = {
  list: '/merchandiseHot/list.do',
  slideList: '/slide/listSlides.do'
}
url = rap(url)

import Slide from 'components/slide/slide.vue'
import Top from 'components/top/top.vue'
import Search from 'components/search/Search.vue'
import Foot from 'components/foot/foot.vue'

new Vue({
  el: '#body',
  data: {
    excavatorList: '',
    partsList: '',
    slideList: '',

  },
  created() {
    this.getList()
    this.getList(3)
    this.getSlideList()
  },
  methods: {
    getList(type = undefined) {
      fetch(url.list, {
        businessType: type
      }).then(res => {
        if (type) {
          this.partsList = res.data.merchandiseHotVOList
        } else {
          this.excavatorList = res.data.merchandiseHotVOList
        }
      })
    },
    getSlideList() {
      fetch(url.slideList).then(res => {
        this.slideList = res.data.slideList
      })
    },
    reduceNum(list) {
      if (list.num <= 1) {
        return
      }
      list.num--
    },
    addNum(list) {
      list.num++
    },

  },
  components:{
    Slide,
    Top,
    Search,
    Foot
  }
})
