import './productLists.scss'
require('normalize.css')
import Vue from 'vue'

import { Message } from 'element-ui'

import Top from 'components/top/top.vue'
import Search from 'components/search/search.vue'
import Foot from 'components/foot/foot.vue'
import utils from 'js/utils.js'
import {fetch,rap} from 'js/fetch.js'

let url={
	classify:'lists/classify.do',
	lists:'/lists/lists.do',
	articles:'article/articles.do'

}
url=rap(url)
//从url上获取两个参数，并把他们给了两个变量
//let keyword=utils.getQuery('keyword')
//let state=parseInt(utils.getQuery('state'))
new Vue({
  el: '#app',
  data: {
  	positionMsg:'',
  	keyword:utils.getQuery('keyword'),
  	state:parseInt(utils.getQuery('state')),
  	classifyList:'',
  	typeList:'',
  	brandIndex:0,
  	typeIndex:0,
  	lists:''
  },
  //初始化
  created(){
  	this.getPositionMsg()
  	if(!this.keyword){
  		this.getClassify()
  	}
  	this.query()
  },
  methods:{
  	getPositionMsg(){
  		if(this.keyword){
  		this.positionMsg='搜索'
  	}else{
  		switch(this.state){
  			case 1:
  			this.positionMsg='挖掘机租赁'
  			break
  			case 2:
			this.positionMsg='挖掘机销售'
  			break
  			case 3:
			this.positionMsg='配件商城'
  			break
  		}
  	}
  	},
  	getClassify(){
  		fetch(url.classify).then(res=>{
  			this.classifyList=res.data.classifyList
  			this.typeList=res.data.classifyList[0].childrenList
  		})
  	},
  	selectBrand(index){
  		this.brandIndex=index
  		this.typeList=this.classifyList[index].childrenList
  		this.query()
  	},
  	selectType(index){
  		this.typeIndex=index
  		this.query()
  	},
  	query(){
  		let reqUrl=''
  		if(this.state===4){
  			reqUrl=url.articles
  		}else{
  			reqUrl=url.lists
  		}
  		fetch(reqUrl,{

  		}).then(res=>{
  			this.lists=res.data.list
  		})
  	}
  },
  components: {
    Top,
    Foot,
    Search
  }
})
