<script setup>
const layout = "center";
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