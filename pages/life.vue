<script setup>
const layout = 'center';
const watchData = [
    {
        title: '美丽新世界',
        author: '阿道司·赫胥黎',
        year: '1932',
        imgUrl: './images/reels/Brave_New_World.jpg'
    },
    {
        title: '被解救的姜戈',
        author: '昆汀·塔伦蒂诺',
        year: '2012',
        imgUrl: 'images/reels/Django_Unchained.jpg'
    },
]
// page
const page = ref(1)
const perPage = 4
const query = computed(() => ({
    path: '/blog',
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
    <NuxtLayout :name="layout">
        <h1
            class="text-4xl font-bold text-left pt-20 mb-5 bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-light-green w-fit">
            在看</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between xl:gap-12">
            <Reel v-for="watch in watchData" :key="watch.title" :imgUrl="watch.imgUrl" :title="watch.title"
                :author="watch.author" :year="watch.year">
            </Reel>
        </div>

        <h1
            class="text-4xl font-bold text-left pt-20 mb-5 bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-light-green w-fit">
            文</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 justify-between gap-4 xl:gap-12">
            <ContentList :query="query">
                <template #default="{ list }">
                    <BlogCard v-for="blog in list" :title="blog.title" :date="blog.date" :imgUrl="blog.image"
                        :alt="blog.alt" :link='blog._path'>
                    </BlogCard>
                </template>
                <template #not-found>
                    <NotFound>NO ARTICLES FOUND</NotFound>
                </template>
            </ContentList>
        </div>
        <div class="text-right flex items-center justify-center mt-4 md:justify-end gap-2 md:gap-4"
            v-if="totalPages > 1">
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
