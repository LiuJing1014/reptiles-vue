<template>
    <div id="contentContainer">
        <RotationChart />
        <NewProduct />
        <HotProduct />
    </div>
</template>

<script>
import RotationChart from './rotationChart' //走马灯
import NewProduct from './newProduct' //新产品
import HotProduct from './hotProduct' //热门商品
export default {
    name:'homeContent',
    components:{
        RotationChart,
        NewProduct,
        HotProduct
    }
}
</script>

<style scoped lang="scss">
    #contentContainer{
        width:1220px;
        min-height:calc(100vh - 320px);
        margin:0 auto;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }
</style>