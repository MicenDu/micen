<script setup>
const { data } = await useAsyncData('blog', () => queryContent('/blog').limit(3).sort({ date: - 1 }).find(),)
</script>
<template>
    <ContentList path="/blog">
        <template #default="{ list }">
            <GlassCard v-for="(blog, index) in data" :key="blog._path" :title="blog.title"
                :description="blog.description" :date="blog.date" :index="index" :link="blog._path">
            </GlassCard>
        </template>
        <template #not-found>
            <p>No articles found.</p>
        </template>
    </ContentList>
</template>
