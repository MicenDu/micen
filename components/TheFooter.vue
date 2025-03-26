<script setup>
import IconGithub from '~icons/mdi/github';
import PhLinkedinLogoBold from '~icons/ph/linkedin-logo-bold';
import MdiInstagram from '~icons/mdi/instagram';
const navigation = [
    { name: '首页', href: '/' },
    { name: '项目', href: '/projects' },
    { name: '生活', href: '/life' },
    { name: '关于', href: '/about' },
]
//get current year
const year = new Date().getFullYear();
</script>

<template>
    <footer class="glass flex bottom-0 w-full mt-20 justify-center">
        <div class="flex flex-row justify-between container relative py-6 mx-8 md:mx-16 ">
            <div class="flex text-sm text-gray-500 flex-col gap-4 md:flex-row md:gap-8 dark:text-zinc-300">
                <span class="font-medium">Micen © {{ year }}</span>
                <div class="flex gap-6 ">
                    <a v-for="item in navigation" :key="item.name" :href="item.href">{{ item.name }}</a>
                </div>
            </div>
            <div class="gap-4 grid grid-cols-2 md:grid-cols-4 ">
                <a href="https://github.com/Micenjia">
                    <icon-github class="icons" />
                </a>
                <a href="https://www.linkedin.com/in/qujiadu/">
                    <ph-linkedin-logo-bold class="icons" />
                </a>
                <a href="https://www.instagram.com/micenjia/">
                    <mdi-instagram class="icons" />
                </a>
                <a href="mailto:duqujia@hotmail.com">
                    <i-custom-mail class="icons" />
                </a>
            </div>
        </div>


    </footer>
</template>
