<template>
<div class="carousel-wrap mt13">
  <transition-group tag="ul" class='slide-ul' name="list">
    <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
      <a :href="list.clickUrl" >
        <img :src="list.image" :alt="list.desc">
      </a>
    </li>
  </transition-group>
  <div class="carousel-items">
    <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
  </div>
</div>
</template>

<script>
  export default {
    name:'slide',
    props:['slideList','model'],
    data() {
      return {
        currentIndex: 0,
        timer: null
      }
    },
    // beforeCreate() {
    //   console.log(this.model)
    // },
    created() {
      // console.log(this.model)
      require(`./${this.model}.css`)
    },
    mounted() {
      this.timer = setInterval(() => {
            this.autoPlay()
          }, 4000)
    },
    methods: {
      change(index) {
        this.currentIndex = index
      },
      autoPlay() {
        this.currentIndex++;
        if (this.currentIndex > this.slideList.length - 1) {
          this.currentIndex = 0
        }
      },
      go() {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      },
      stop() {
        clearInterval(this.timer)
        this.timer = null
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../modules/sass/variables.scss";
  .carousel-wrap {
  position: relative;
  height: 453px;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}

.slide-ul {
  width: 100%;
  height: 100%;
  li {
    position: absolute;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 380px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
  span {
    display: inline-block;
    height: 6px;
    width: 30px;
    margin: 0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
  }
  .active {
    background-color: $btn-color;
  }
}


</style>
