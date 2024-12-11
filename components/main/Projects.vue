<script setup>
const { data } = await useAsyncData('projects', () => queryContent('/projects').limit(2).sort({ date: - 1 }).find(),)
</script>

<template>
    <ContentList path="/projects">
        <template #default="{ list }">
            <ProjectCard v-for="project in data" :key="project._path" :imgUrl="project.image" :title="project.title"
                :description="project.description" :year='project.date' :tags="project.tags" :link="project._path">
            </ProjectCard>
        </template>
        <template #not-found>
            <p>No project found.</p>
        </template>
    </ContentList>
</template>
