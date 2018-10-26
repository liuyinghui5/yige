<style scoped>
    .swiper-out img{
        width: 90%;
    }
</style>
<template>
    <div class="sw">
        <p>SWIPER测试</p>
        <div class="swiper-out">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide>
                    <div>
                        <img src="../../static/img/1.jpg" alt="">
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div>
                        <img src="../../static/img/2.jpg" alt="">
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div>
                        <img src="../../static/img/3.jpg" alt="">
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>

    export default {
        props: {},
        data () {
            return {

//                banners: [ '../../static/img/1.jpg', '../../static/img/2.jpg', '/../../static/img/3.jpg' ],
                swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
                    // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    notNextTick: true,
                    autoplay: {
                        delay: 2000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                    loop: true,
                    effect : 'coverflow',
                    slidesPerView: 3,
                    centeredSlides: true,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 20,
                        depth: 60,
                        modifier: 4,
                        slideShadows : true
                    },
//                    // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
//                    debugger: true,
//                    pagination: {
//                        el: '.swiper-pagination'
//                    },
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }


            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {},
        mounted() {
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            console.log('this is current swiper instance object', this.swiper)
//            this.swiper.slideTo(3, 1000, false)
        },
    }
</script>
