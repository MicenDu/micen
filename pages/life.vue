<script setup>
definePageMeta({
    layout: 'default'
});

const blogData = [
    {
        title: '二篇文章',
        date: '2023-01-01',
        imgUrl: './images/blogs/article.png',
        link: '/blog/1'

    },
    {
        title: '只工作，不上班',
        date: '2023-01-02',
        imgUrl: './images/blogs/article1.png',
        link: '/blog/2'
    },
    {
        title: '只工作，不上班',
        date: '2023-01-02',
        imgUrl: './images/blogs/article2.png',
        link: '/blog/3'
    },
]
const watchData = [
    {
        title: '周处除三害',
        author: '黄精甫',
        year: '2023',
        imgUrl: './images/the_pig_the_snake_and_the_pigeon.jpg'
    },
    {
        title: '黑客与画家',
        author: '保罗·格雷厄姆',
        year: '2022',
        imgUrl: './images/hackers_and_painters.jpg'
    },
]
</script>

<template>
    <section class="container mx-auto">
        <div class="mx-5 pt-5 md:mx-20 ">
            <h1
                class="text-4xl font-bold text-left pt-20 mb-5 bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-light-green w-fit">
                在看</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between xl:gap-12">
                <Reel v-for="watch in watchData" :key="watch.title" :imgUrl="watch.imgUrl">
                    <img :src="watch.imgUrl" alt="" placeholder>
                    <template #title>{{ watch.title }}</template>
                    <template #author>{{ watch.author }}</template>
                    <template #year>{{ watch.year }}</template>
                </Reel>
            </div>

        </div>
    </section>
    <section class="container mx-auto mt-8">
        <div class="m-5 md:mx-20 ">
            <h1
                class="text-4xl font-bold text-left pt-20 mb-5 bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-light-green w-fit">
                文</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 justify-between gap-4 xl:gap-12">
                <BlogCard v-for="blog in blogData" :key="blog.title" :imgUrl="blog.imgUrl" :link='blog.link'>
                    <img :src="blog.imgUrl" alt="">
                    <template #title>{{ blog.title }}</template>
                    <template #date>{{ blog.date }}</template>
                </BlogCard>
            </div>
        </div>
    </section>
</template>
