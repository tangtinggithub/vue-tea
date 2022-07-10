<template>
  <div class="tabbar">
     <ul>
         <li>
             <img src="../../assets/images/01.jfif" alt="">
             <span>首页</span>
         </li>
     </ul>
  </div>
</template>

<script>
export default {
    name:'Tabbar',

}
</script>

</style>>
.tabbar{
    position: fixed;
    left:0;
    bottom: 0;
    width: 100%;
    height: 2rem;
    background-color: #fff;
    z-index: 999;
    font

}
.tabbar ul{
    display: flex;
    justify-content: space-around;
}
.tabbar ul li{
    display: flex;
    flex-direction: column;
}


</style>