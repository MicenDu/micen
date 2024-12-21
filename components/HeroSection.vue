<template>
    <div class="h-96 flex justify-center w-full md:h-[75vh]">
        <!-- <img src="/assets/images/bg_gradient.svg" alt=""
            class="absolute object-cover w-full inset-0 z-10 h-96 md:h-[75vh] blur-[72px]"> -->
        <i-bg-gradient class="absolute object-cover w-full inset-0 z-10 h-96 md:h-[75vh] blur-[72px]" />
        <!-- <iframe src='https://my.spline.design/herosection-1d552219c8fbb5a64afbf85567f8d549/' frameborder='0'
            width='100%' height='100%' class=" absolute object-cover w-full inset-0  "></iframe> -->
        <div class="flex container flex-col justify-center items-start w-full m-8 gap-4 z-10 md:pl-20 ">
            <h1
                class="text-2xl font-bold  leading-normal w-fit sm:text-3xl md:text-6xl md:leading-normal bg-gradient-to-r from-primary-blue to-light-green bg-clip-text text-transparent">
                你好哇！这是Micen
                <br> 一名<span>设计工程师</span>
            </h1>
            <!-- <GlassButton>Say Hi~ o(*￣▽￣*)ブ</GlassButton> -->
        </div>



    </div>
</template>




<script setup>
const { locale, setLocale } = useI18n();
</script>
