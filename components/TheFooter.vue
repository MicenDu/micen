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

</script>

<template>
    <footer class="glass bottom-0 w-full mt-20">
        <div class="flex flex-row container justify-between relative py-6 px-8 md:px-0 md:mx-auto">
            <div class="flex text-sm text-gray-500 flex-col gap-4 md:flex-row md:gap-8 dark:text-zinc-300">
                <span class="font-medium">Micen © 2024</span>
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
                <a href="https://www.instagram.com/micenjia/" class="icons">
                    <mdi-instagram />
                </a>
                <a href="mailto:duqujia@hotmail.com" class="icons">
                    <i-custom-mail />
                </a>
            </div>
        </div>


    </footer>
</template>
