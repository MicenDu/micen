<script setup>
const layout = "center";
useSeoMeta({
  title: 'Micen',
  ogTitle: 'Micen',
  description: '这是 Micen, 一名设计工程师的个人网站',
  ogDescription: '这是 Micen, 一名设计工程师的个人网站',
})
</script>

<template>
  <div>
    <HeroSection></HeroSection>
    <main>
      <NuxtLayout :name="layout">
        <SectionTitle>项目</SectionTitle>
        <MainProjects></MainProjects>
        <Slider></Slider>
        <MainLife></MainLife>
      </NuxtLayout>
    </main>
  </div>
</template>