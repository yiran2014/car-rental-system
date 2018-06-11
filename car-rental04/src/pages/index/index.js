import 'normalize.css'
import './index.scss'
import {fetch,rap} from 'js/fetch'
import Vue from 'vue'

let url={
	list:'popRecommendation/list.do',
	slidelist:'slide/slideList.do'
}

url=rap(url)
import Slide from 'components/slide/slide.vue'
import Top from 'components/top/top.vue'
import Foot from 'components/foot/foot.vue'
import Search from 'components/search/search.vue'
new Vue({
  el: '#body',
  data:{
  	carList:'',
  	partsList:'',
  	slideList:''
    
  },
  created(){
  	this.getlist()
  	this.getlist(3)
  	this.getSlidelist()
  },
  methods:{
  	getlist(type=undefined){
  		fetch(url.list,{
  			businessType:type
  		}).then(res=>{
  			if(type){
  				this.partsList=res.data.popRecommendationList
  			}else{
				this.carList=res.data.popRecommendationList
  			}
  		})
  	},
  	reduceNum(list){
  		if(list.num<=1){
  			return
  		}else{
			list.num--
  		}	
  	},
  	addNum(list){
  		list.num++
  	},
  	getSlidelist(){
  		fetch(url.slidelist).then(res=>{
  			console.log(res)
  			this.slideList=res.data.slideList
    //     this.$nextTick(()=>{
    //       this.timer=setInterval(()=>{
    //         this.autoPlay()
    //       },2000)
    //     })
  		 })
  	}

  },
     components:{
      Slide,
      Top,
      Foot,
      Search
    }

})