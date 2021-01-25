<template>
  <!--所有的item只展示一个图片，一个文字-->
  <div class="tab-bar-item">
<!--    <img src="../../assets/img/tabbar/home.svg">-->
<!--    <div>首页</div>-->
    <!--使用插槽-->
   <div v-if="!isActive" @click="itemClick">
     <slot name="item-icon"></slot>
   </div>
   <div v-else @click="itemClick">
     <slot name="item-icon-active"></slot>
   </div>
    <!--动态绑定可以使用计算属性-->
    <div :style="activeStyle" @click="itemClick">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TarbarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
      // isActive: false
    }
  },
  computed:{
    isActive(){
      //计算属性动态绑定当前路径
      return this.$route.path.indexOf(this.path)!== -1
    },
    activeStyle(){
      //是不是活跃状态，三元表达式
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/*.active{*/
/*  color: red;*/
/*}*/
</style>
