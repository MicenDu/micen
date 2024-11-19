<template>
    <section class="container mx-auto">
        <div class="mx-5 pt-5 md:mx-20 ">
            <h1
                class="text-4xl font-bold text-left pt-20 mb-5 bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-light-green w-fit">
                一些项目</h1>
            <ProjectCard v-for="project in projectsData" :key="project.title" :imgUrl="project.imgUrl"
                :link="project.link">
                <NuxtImg :src="project.imgUrl" />
                <template #title>{{ project.title }}</template>
                <template #description>{{ project.description }}</template>
                <template #year>{{ project.year }}</template>
                <template #region>{{ project.region }}</template>
            </ProjectCard>
        </div>
    </section>

</template>

<script setup>
const projectsData = [
    {
        title: "项目标题1",
        description: "项目描述内容...",
        year: "2024",
        region: "中国、非洲",
        link: "/projects/1",
        imgUrl: "/images/projects/project.webp"
    },
    {
        title: "项目标题2",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        year: "2024",
        region: "非洲",
        link: "/projects/2",
        imgUrl: "/images/projects/mosquito.png"
    },
]

</script>