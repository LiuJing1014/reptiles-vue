<template>
    <div id="newContainer">
        <div class="item">
            <img src="https://resource.smartisan.com/resource/fbefae00ef98859f342e9f56889899a0.jpg?x-oss-process=image/resize,w_600/format,webp" alt="广告位图片"/>
            <a class="mask"></a>
        </div>
        <div class="item">
            <img src="https://resource.smartisan.com/resource/1023fe9691eaf03abbfd261b36df4985.png?x-oss-process=image/resize,w_600/format,webp" alt="广告位图片"/>
            <a class="mask"></a>
        </div>
        <div class="item">
            <img src="https://resource.smartisan.com/resource/33ea4bfa05068e0741b7278fec9da8a6.jpg?x-oss-process=image/resize,w_600/format,webp" alt="广告位图片"/>
            <a class="mask"></a>
        </div>
        <div class="item">
            <img src="https://resource.smartisan.com/resource/fdc4370d1ce14a67fadc35d74209ac0f.jpg?x-oss-process=image/resize,w_600/format,webp" alt="广告位图片"/>
            <a class="mask"></a>
        </div>
    </div>
</template>

<script>
export default {
    name:'newProduct'
}
</script>

<style scoped lang="scss">
    #newContainer{
        height:200px;
        display: flex;
        border-radius: 8px;
        margin-top:25px;
        border:1px solid rgba(0,0,0,.14);
        box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);

        .item{
            width:calc( 100% / 4 );
            height:100%;
            position: relative;

            img{
                width:100%;
                height:100%
            }

            .mask{
                position: absolute;
                top:0;
                left:0;
                right:0;
                bottom:0;
                transition: all .3s ease-out;

                &:hover{
                    box-shadow: inset 0 0 38px rgba(0,0,0,.08);
                }
            }

            &:first-of-type{
                img{
                    border-radius: 8px 0 0 8px;
                }
            }
            &:last-of-type{
                img{
                    border-radius: 0 8px 8px 0;
                }
            }
        }
        
    }
</style>