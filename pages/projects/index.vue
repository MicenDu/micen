<script setup>
const layout = "center";
// page
const page = ref(1)
const perPage = 4
const query = computed(() => ({
    path: '/projects',
    limit: perPage,
    skip: (page.value - 1) * perPage,
    sort: [{ date: -1 }]
}))

// total Pages
const { data: total } = await useAsyncData('projects-count', () =>
    queryContent('projects').count()
)

const totalPages = computed(() => Math.ceil(total.value / perPage))

// newPage
const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages.value) {
        page.value = newPage
    }
}
</script>
<template>
    <NuxtLayout :name='layout'>
        <h1
            class="text-4xl font-bold text-left pt-20 mb-5 bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-light-green w-fit">
            一些项目
        </h1>

        <ContentList :query="query" v-slot="{ list }">
            <ProjectCard v-for="project in list" :key="project._path" :imgUrl="project.image" :title="project.title"
                :description="project.description" :year='project.date.slice(0, 4)' :tags="project.tags"
                :link="project._path" />
        </ContentList>

        <div class="text-right flex items-center justify-center mt-4 md:justify-end gap-2 md:gap-4" v-if="totalPages != 1">
            <button @click="handlePageChange(page - 1)" :disabled="page === 1" class="disabled:opacity-50">
                <p class="text-2xl font-thin font-mono text-zinc-300 hover:text-primary-blue/80">&lt;</p>
            </button>

            <span class="text-zinc-400 text-sm">
                {{ page }} / {{ totalPages }}
            </span>

            <button @click="handlePageChange(page + 1)" :disabled="page === totalPages" class="disabled:opacity-50">
                <p class="text-2xl font-thin font-mono text-zinc-300 hover:text-primary-blue/80">&gt;</p>
            </button>
        </div>
    </NuxtLayout>
</template>
