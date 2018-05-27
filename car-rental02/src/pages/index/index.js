import 'normalize.css'
import './index.scss'
import {fetch,rap} from 'js/fetch'
import Vue from 'vue'

let url={
	list:'popRecommendation/list.do',
	slidelist:'slide/slideList.do'
}

url=rap(url)

new Vue({
  el: '.main-content-w',
  data:{
  	carList:'',
  	partsList:'',
  	slideList:'',
    currentIndex:0,
    timer:null
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
        this.$nextTick(()=>{
          this.timer=setInterval(()=>{
            this.autoPlay()
          },2000)
        })
  		})
  	},
    change(index){
      this.currentIndex=index
    },
    autoPlay(){
      this.currentIndex++
      if(this.currentIndex===this.slideList.length){
        this.currentIndex=0
      }
    },
    stop(){
      clearInterval(this.timer)
      this.timer=null
    },
    go(){
      this.timer=setInterval(()=>{
        this.autoPlay()
      },2000)
    }
  }
})