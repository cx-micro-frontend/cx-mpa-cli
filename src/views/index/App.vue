<template>
  <div id="app" class="Layout">
    <ns-drawer>
      <div slot="content">
        <ns-nav-bar title="主页">
          <ns-icon name="wap-nav" slot="left" @click="handleToggleDrawer"/>
          <ns-icon name="search" slot="right"/>
        </ns-nav-bar>
        <!-- main-content -->
        <ns-index-bar>
          <ns-index-anchor index="G"/>
          <ns-cell title="高仓雄"/>
          <ns-index-anchor index="L"/>
          <ns-cell title="罗益"/>
          <ns-index-anchor index="Z"/>
          <ns-cell title="朱炎"/>
          <ns-cell title="周霞"/>
        </ns-index-bar>
      </div>
    </ns-drawer>
  </div>
</template>

<script>
  import create from '../../utils/core/create';
  import { NavBar, Button, Icon, IndexBar, IndexAnchor, Cell } from 'vant';
  import Drawer from '../../components/Drawer/Drawer';

  export default create({
    name: 'App',
    components: {
      Button,
      NavBar,
      Drawer,
      Icon,
      IndexBar,
      IndexAnchor,
      Cell,
    },
    data() {
      return {};
    },
    created() {

    },
    methods: {
      handleToggleDrawer() {
        this.$store.dispatch('toggleDrawerState');
      },
    },
  });
</script>

<style rel=" stylesheet/scss" lang="scss">
</style>
