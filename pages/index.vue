<script setup>
const route = useRoute()
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
const blogData = [
  {
    title: '二篇文章',
    date: '2023-01-01',
    imgUrl: './images/blogs/article.png',
    link: '/blogs/2'
  },
  {
    title: '只工作，不上班',
    date: '2023-01-02',
    imgUrl: './images/blogs/article1.png',
    link: '/blogs/3'
  },
]
const blogData2 = [
  {
    title: '一篇文章',
    date: '2023-01-01',
    blogImg: '/images/blogs/img1.jpg',
    link: '/blogs/1'
  },
]
</script>

<template>
  <div>
    <HeroSection></HeroSection>
    <section class="container mx-auto mt-8">
      <div class="m-5 md:mx-20 md:my-16">
        <SectionTitle>项目</SectionTitle>
        <ProjectCard v-for="project in projectsData" :key="project.title" :imgUrl="project.imgUrl" :link="project.link">
          <img :src="project.imgUrl">
          <template #title>{{ project.title }}</template>
          <template #description>{{ project.description }}</template>
          <template #year>{{ project.year }}</template>
          <template #region>{{ project.region }}</template>
        </ProjectCard>
      </div>

    </section>
    <section class="container mx-auto mt-8">
      <Slider></Slider>
      <div class="m-5 md:mx-20 md:my-16">
        <div class="grid-cols-2 gap-4 xl:grid">
          <!-- Article 1 -->
          <div class="mb-4 xl:col-span-1 xl:row-span-2 h-full">
            <article>
              <div class="">
                <a :href="blogData2[0].link">
                  <img :src="blogData2[0].blogImg" alt=""
                    class="object-cover object-center xl:h-[592px] w-full box-border">
                  <div class="glass-border w-full">

                    <div class="flex justify-between p-4">
                      <h2 class="text-zinc-600">
                        {{ blogData2[0].title }}
                      </h2>
                      <time datetime="2022-01-22" class="text-gray-400">
                        {{ blogData2[0].date }}
                      </time>
                    </div>
                  </div>
                </a>
              </div>
            </article>
          </div>

          <div class="content-between grid gap-4">
            <BlogCard v-for="blog in blogData" :key="blog.title" :imgUrl="blog.imgUrl" :link="blog.link">
              <img :src="blog.imgUrl" alt="">
              <template #title>{{ blog.title }}</template>
              <template #date>{{ blog.date }}</template>
            </BlogCard>
          </div>
        </div>

      </div>
    </section>


    <section class="hidden">
      <h1>Nuxt Routing set up successfully!</h1>
      <p>Current route: {{ route.path }}</p>
    </section>
  </div>
</template>
