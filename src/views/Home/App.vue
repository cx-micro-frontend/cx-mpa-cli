<template>
  <div id="app" class="Layout">
    <ns-drawer>
      <div slot="content">
        <ns-nav-bar title="Home页面">
          <ns-icon name="wap-nav" slot="left" @click="handleToggleDrawer"/>
          <ns-icon name="search" slot="right"/>
        </ns-nav-bar>
        <!-- main-content -->
        <div class="cover">
          <img class='coverimg' src="../../assets/img/avator/pic.jpg" alt="pic"/>
        </div>
        <ns-row>
          <ns-col span="8" v-for="(item,index) in btnOptions" :key="index">
            <ns-button :type="item.type" @click="btnJump(item.path)">
              {{item.label}}
            </ns-button>
          </ns-col>
        </ns-row>

      </div>
    </ns-drawer>
  </div>
</template>

<script>
  import create from '../../utils/core/create';
  import { NavBar, Button, Icon, Row, Col } from 'vant';
  import Drawer from '../../components/Drawer/Drawer';

  export default create({
    name: 'Home',
    components: {
      Button,
      NavBar,
      Drawer,
      Icon,
      Row,
      Col,
    },
    data() {
      return {
        btnOptions: [
          { label: '跳转Index', type: 'primary', path: '../index/index.html' },
          { label: '跳转About', type: 'warning', path: '../About/index.html' },
          { label: '跳转Details', type: 'info', path: '../Details/index.html' },
        ],
      };
    },
    created() {

    },
    methods: {
      btnJump(path) {
        console.log('导航点击跳转：', path);
        window.location.href = path;
      },
      handleToggleDrawer() {
        this.$store.dispatch('toggleDrawerState');
      },
    },
  });
</script>

<style rel=" stylesheet/scss" lang="scss">
  @import '../../style/modules/img';

  .van-col {
    text-align: center;
  }
</style>
