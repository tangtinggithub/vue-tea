<template>
  <header>
      <h1>
          <img src="@/assets/images/logo.jpg" alt="">
      </h1>
      <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <span>猜你喜欢</span>
      </div>
      <div class="kefu">
          <i class="iconfont icon-kefu"></i>
      </div>
      
  </header>
</template>

<script>
export default {
    name:'Header',

}
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height:1.189189rem ;
    background-color: #b0352f;
    
}
header h1{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 100%;
}
header h1 img{
     width: 80%;
     height:80%;
     border-radius: 0.2027rem;
     
    }
.search{
    display: flex;
    align-items: center;
    width: 6.648649rem;
    height: 0.810811rem;
    background-color: #fff;
    border-radius :12px; 
}
.search i{
    columns: rgb(c,c,c);
    opacity: 0.7;
    padding: 0 0.162162rem;

}
.search span{
    columns: rgb(c,c,c);
    opacity: 0.5;
    
     /* color: #b0352f; */
    padding: 0 0.162162rem;
    font-size: 0.378378rem;

}
.kefu{
    display: flex;
}
.icon-kefu{
    font-size: 0.7rem;
    color: #fff;
}


</style>>

