<script setup>
const query = {
    path: '/blog',
    limit: 3,
    sort: { date: -1 },
}
</script>
<template>
    <ContentList :query="query">
        <template #default="{ list }">
            <GlassCard v-for="(blog, index) in list" :key="blog._path" :title="blog.title"
                :description="blog.description" :date="blog.date" :index="index" :link="blog._path">
            </GlassCard>
        </template>
        <template #not-found>
            <NotFound>NO ARTICLES FOUND</NotFound>
        </template>
    </ContentList>
</template>
