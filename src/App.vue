<template>
  <div id="app">
    <div id="page-content-wrapper" :class="{ showNav: NavVisibilityFun }">
      <AppNavBar />
      <Sidebar />
      <router-view />
      <AppFooter />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar";
import AppNavBar from "@/components/AppNavBar";
import AppFooter from "@/components/AppFooter";

export default {
  name: "App",
  components: {
    Sidebar,
    AppNavBar,
    AppFooter
  },
  computed: {
    NavVisibilityFun() {
      return this.$store.state.navVisibility;
    }
  }
};
</script>

<style lang="scss">
#page-content-wrapper {
  font-family: "Josefin Sans", sans-serif;
  transition: padding-right 0.4s;
  &.showNav {
    padding-right: 248px;
  }
}
@media (max-width: 768px) {
  #page-content-wrapper {
    &.showNav {
      padding-right: 200px;
    }
  }
}
</style>
