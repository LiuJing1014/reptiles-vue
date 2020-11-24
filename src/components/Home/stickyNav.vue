<template>
    <div id="stickyContainer">
        <div class="container">
            <div class="panelContainer">
                <div class="panel">
                    <a-menu v-model="current" mode="horizontal">
                        <a-menu-item key="index">首页</a-menu-item>
                        <a-menu-item key="phone">坚果手机</a-menu-item>
                        <a-menu-item key="tnt">TNT</a-menu-item>
                        <a-menu-item key="official">官方自营</a-menu-item>
                        <a-menu-item key="clothes">服饰箱包</a-menu-item>
                        <a-menu-item key="hot">抖音热销</a-menu-item>
                        <a-menu-item key="digital">数码3C</a-menu-item>
                        <a-menu-item key="life">家居生活</a-menu-item>
                        <a-menu-item key="electric">家用电器</a-menu-item>
                        <a-menu-item key="beauty">美妆个护</a-menu-item>
                        <a-menu-item key="service">服务</a-menu-item>
                    </a-menu>
                    <div class="searchTool">
                        <a-input><a-icon slot="prefix" type="search" /></a-input>
                    </div>
                </div>
            </div>
            <div class="panelHide"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'stickyNav',
    data(){
        return{
            current: ['index'],
        }
    },
    methods:{
        onSearch(value) {
            console.log(value);
        },
    }
}
</script>

<style scoped lang="scss">
    #stickyContainer{
        position: sticky;
        position: -webkit-sticky;
        top:0;
        z-index:100;

        .container{
            background-color: #fff;
            border-bottom: 1px solid #e1e1e1;
            height:75px;
            box-shadow: 0 4px 10px 0 rgba(0,0,0,.05);
            
            .panelContainer{
                width:1220px;
                margin:0 auto;

                .panel{
                    width:100%;
                    display: flex;
                    justify-content: space-between;

                    .ant-menu{
                        color:rgba(0,0,0,.7);
                        font-size: 14px;
                    }

                    .searchTool{
                        line-height: 75px;

                        .ant-input-affix-wrapper{
                            width: 330px;
                            height:36px; 
                        }
                    }
                }
            }
            .panelHide{
                height:0px;
                background-color: red;
                z-index:10;
                opacity: 1;
                overflow: hidden;
                transition: height .1s ease;
            }

            // &:hover{
            //     .panelHide{
            //         height:277px
            //     }
            // }
        }
    }

    .ant-menu-horizontal{
        line-height:74px;
        border-bottom: 1px solid #e1e1e1;
    
        .ant-menu-item{
            padding:0;
            margin-right:30px;
            vertical-align:top;
            border-bottom:none !important;
        }
    }
    .ant-menu-horizontal > .ant-menu-item-selected{
        color:#333 !important;
        font-weight: 700;
    }
    .ant-menu-horizontal > .ant-menu-item:hover{
        color:#5079d9;

    }
    
</style>