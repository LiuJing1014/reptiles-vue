<template>
    <div id="homeContainer">
        <headerNav />
        <stickyNav />
        <homeContent />
        <div></div>
    </div>
</template>

<script>
import headerNav from '../components/Home/header' //头部导航
import stickyNav from '../components/Home/stickyNav' //粘性导航
import homeContent from '../components/Home/cotent/index' //首页内容

export default {
    name: 'Home',
    components:{
        headerNav,
        stickyNav,
        homeContent
    }
}
</script>

// <style scoped lang="scss"> 
//     #homeContainer{
//         width:100%;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-content: center;
//     }
// </style>
