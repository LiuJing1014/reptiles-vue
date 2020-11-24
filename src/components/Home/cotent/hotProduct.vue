<template>
    <div id="hotContainer">
        <header><h5>热门商品</h5></header>
        <div class="pictArea">
            <div v-for="(item,index) in list" :key="index" class="item">
                <div class="pict"><img :src="item.img" /></div>
                <div class="article">
                    <h3>{{item.title}}</h3>
                    <h5>{{item.describe}}</h5>
                </div>
                <div class="colors"></div>
                <div>{{item.price}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { hotProduct } from '../../../apis/home/index' //获取热门商品
export default {
    name:'hotProduct',
    created(){
        this.getProduct()
    },
    data(){
        return{
            list:[]
        }
    },
    methods:{
        async getProduct(){
            let list = await hotProduct()
            if( list.code == '0' ){
                this.list = list.data
                console.log(list)
            }else{
                this.$message.error(list.message)
            }
        },
    }
}
</script>

<style scoped lang="scss">
    #hotContainer{
        margin-top:25px;
        border-radius: 8px;
        border:1px solid rgba(0,0,0,.14);
        box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);

        header{
            border-radius: 8px 8px 0 0 ;
            background-color: #fafafa;
            border-bottom: 1px solid rgba(0,0,0,.1);

            h5{
                line-height: 60px;
                color:#666;
                font-size: 18px;
                font-weight: bold;
                margin-left:25px;
            }
        }

        .pictArea{
            height:429px;
            display: flex;

            .item{
                flex:1;
                padding-top:45px;
                box-sizing: border-box;
                border-bottom: 1px solid #efefef;
                border-right: 1px solid #efefef;
                display: flex;
                flex-direction: column;
                align-items: center;

                .pict{
                    width:216px;
                    height: 216px;
                    margin-bottom: 15px;
                }

                .article{
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    h3{
                        color:#000;
                        font-size: 14px;
                        font-weight: 700;
                    }

                    h5{
                        color:#999;
                        font-size: 12px;
                        padding:15px 12px 0;
                    }
                }
            }
        }
    }
</style>