<template>
  <div id="app-admin" class="flex">
    <aside>
      <div class="menu-top">ACESS</div>
      <div class="menu-list">
        <div>
          <router-link to="/admin/user">User Manage</router-link>
        </div>
      </div>
    </aside>
    <div id="container" class="flex">
      <Header header-title="Power System"></Header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>
<script>
import Header from '@components/common/Header'
// import Footer from './Footer'
export default {
  name: 'admin',
  components: {
    Header,
    // Footer
  }
}
</script>
<style lang="less" scoped>
@import url('../assets/style/admin.less');
#app-admin {
  height: 100%;
  aside {
    width: 200px;
    background: linear-gradient(-90deg, #D1FFEC 0%, #57F2CC 100%);
    box-shadow: 2px 2px 5px #D1FFEC inset;
  }
  .menu-top {
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: goldenrod;
  }
  .menu-list {
    div {
      padding: 10px 20px;
      height: 50px;
      display: flex;
      align-items: center;
    }
  }
  #container {
    flex: 1;
    flex-direction: column;
  }
  main {
    flex: 1;
    overflow: auto;
  }
}
</style>