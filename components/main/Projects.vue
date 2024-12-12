<script setup>
const query = {
    path: '/projects',
    limit: 2,
    sort: { date: -1 },
}
</script>

<template>
    <ContentList :query="query" path="/projects">
        <template #default="{ list }">
            <ProjectCard v-for="project in list" :key="project._path" :imgUrl="project.image" :title="project.title"
                :description="project.description" :year='project.date' :tags="project.tags" :link="project._path">
            </ProjectCard>
        </template>
        <template #not-found>
            <p>No project found.</p>
        </template>
    </ContentList>
</template>
