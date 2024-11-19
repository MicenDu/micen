<template>
    <footer class="glass bottom-0 w-full mt-20">
        <div class="flex flex-row container justify-between relative py-6 px-8 md:px-0 md:mx-auto">
            <div class="flex text-sm text-gray-500 flex-col gap-4 md:flex-row md:gap-8">
                <span class="font-medium text-gray-600">Micen © 2024</span>
                <div class="flex gap-6 ">
                    <a v-for="item in navigation" :key="item.name" :href="item.href">{{ item.name }}</a>
                </div>
            </div>
            <div class="gap-4 grid grid-cols-2 md:grid-cols-4 ">
                <a href="">
                    <img src="../assets/icons/Github.svg" alt="">
                </a>
                <a href="">
                    <img src="../assets/icons/LinkedIn.svg" alt="">
                </a>
                <a href="">
                    <img src="../assets/icons/Mail.svg" alt="">
                </a>
                <a href="">
                    <img src="../assets/icons/Instagram.svg" alt="">
                </a>
            </div>
        </div>


    </footer>
</template>

<script setup>
const navigation = [
    { name: '首页', href: '/' },
    { name: '项目', href: '/projects' },
    { name: '生活', href: '/life' },
    { name: '关于', href: '/about' },
]
</script>