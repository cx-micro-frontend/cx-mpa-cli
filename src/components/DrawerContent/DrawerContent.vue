<template>
  <div class="DrawerContent">
    <img class='avator' src="../../assets/img/avator/avator.jpg" alt="avator"/>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(item,index) in navlist" :key="index" :title="item.name"
                @click="navjump(item.path)"
      />
    </van-list>
  </div>
</template>

<script>
  import { List } from 'vant';
  import { Cell } from 'vant';

  export default {
    name: 'DrawerContent',
    components: {
      'van-list': List,
      'van-cell': Cell,
    },
    data() {
      return {
        navlist: [],
        loading: false,
        finished: false,
      };
    },
    created() {
      this.initGetNav();

    },
    methods: {
      initGetNav() {
        // this.$api.nav.getNav(q).then(res => {
        //   this.navlist = res.resultData;
        //   this.loading = false;
        //   this.finished = true;
        // });
        this.navlist = [
          { 'name': 'Index', 'path': '../index/index.html' },
          { 'name': '主页Home', 'path': '../Home/index.html' },
          { 'name': '关于', 'path': '../About/index.html' },
          { 'name': '详情', 'path': '../Details/index.html' },
        ];
        this.loading = false;
        this.finished = true;
      },
      navjump(path) {
        console.log('侧边导航点击跳转：', path);
        window.location.href = path;
      },
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          this.navlist.push(
            { 'name': 'xxx', 'path': '/index.html' },
          );
        }, 500);
      },
    },
  };
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
  .DrawerContent {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: #fff;
    .avator {
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
    }
  }
</style>
