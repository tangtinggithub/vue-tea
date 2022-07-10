<template>
  <div class="home">
    <Header></Header>
    
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue"
import Header from "@/components/home/Header.vue";
export default {
  name: "HomeView",
  components: {
    Tabbar,
    Header
  }
};
</script>

</style>
