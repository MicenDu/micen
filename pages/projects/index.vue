<script setup>
</script>
<template>
    <section class="container mx-auto">
        <div class="mx-5 pt-5 md:mx-20 ">
            <h1
                class="text-4xl font-bold text-left pt-20 mb-5 bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-light-green w-fit">
                一些项目</h1>
            <ContentList path="/projects" v-slot="{ list }">
                <ProjectCard v-for="project in list" :key="project._path" :imgUrl="project.image" :title="project.title"
                    :description="project.description" :year='project.date.slice(0, 4)' :tags="project.tags"
                    :link="project._path">
                    link">
                </ProjectCard>
            </ContentList>
        </div>
    </section>

</template>
