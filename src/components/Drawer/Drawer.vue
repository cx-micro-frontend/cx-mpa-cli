<template>
  <ns-drawer-layout
    ref="drawerLayout"
    @slide-start="handleSlideStart"
    @slide-move="handleSlideMove"
    @slide-end="handleSlideEnd"
    @mask-click="handleMaskClick"
  >
    <div class="drawer" slot="drawer">
      <!-- drawer-content -->
      <ns-drawer-content></ns-drawer-content>
    </div>
    <div class="content" slot="content">
      <!-- main-content -->
      <slot name="content"></slot>
    </div>
  </ns-drawer-layout>
</template>

<script>
  import { mapGetters } from 'vuex';
  import create from '../../utils/core/create';
  import { DrawerLayout } from 'vue-drawer-layout';
  import drawerContent from '../DrawerContent/DrawerContent';

  export default create({
    name: 'App',
    components: { drawerContent, DrawerLayout },
    data() {
      return {};
    },

    computed: {
      ...mapGetters(['drawerState']),
    },
    watch: {
      drawerState(val) {
        this.$refs['drawerLayout'].toggle();
      },
    },
    methods: {
      handleSlideStart() {
        console.info('slide-start');
      },
      handleSlideMove(position) {
        console.info('slide-move', position);
      },
      handleSlideEnd(visible) {
        console.info('slide-end', visible);
      },
      handleMaskClick() {
        console.info('mask-click');
        this.$refs['drawerLayout'].toggle(false);
      },
      handleToggleDrawer() {
        this.$refs['drawerLayout'].toggle();
      },
    },
    created() {
    },
  });
</script>

<style rel=" stylesheet/scss" lang="scss">

  .drawer-wrap {
    .drawer {
      height: 100%;
    }
  }
</style>
