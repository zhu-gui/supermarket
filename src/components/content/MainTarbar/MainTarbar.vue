<template>
  <Tabbar>
    <!--activeColor动态改变颜色-->
    <TarbarItem path="/home" activeColor="deepPink">
      <img slot="item-icon"  src="~assets/img/tabbar/home.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
      <div slot="item-text">首页</div>
    </TarbarItem>
    <TarbarItem path="/category" activeColor="deepPink">
      <img slot="item-icon"  src="~assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
      <div slot="item-text">分类</div>
    </TarbarItem>
    <TarbarItem path="/cart" activeColor="deepPink">
      <img slot="item-icon"  src="~assets/img/tabbar/shopcart.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg">
      <div slot="item-text">购物车</div>
    </TarbarItem>
    <TarbarItem path="profile" activeColor="deepPink">
      <img slot="item-icon"  src="~assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
      <div slot="item-text">我的</div>
    </TarbarItem>

  </Tabbar>
</template>

<script>
import Tabbar from "./tabbar/Tabbar";
import TarbarItem from "./tabbar/TarbarItem";
export default {
  name: "MainTarbar",
  components:{
    Tabbar,
    TarbarItem
  }
}
</script>

<style scoped>

</style>
