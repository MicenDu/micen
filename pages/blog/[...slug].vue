<template>
    <main>
        <section class="container mx-auto pt-14 min-h-[85vh]">
            <div class="mx-5 pt-5 md:mx-20 ">
                <ContentDoc v-slot="{ doc }">
                    <article>
                        <ArticleHeader :title="doc.title" :date="doc.date" :tags="doc.tags" :image="doc.image">
                        </ArticleHeader>
                        <div class="grid grid-cols-1 md:grid-cols-10 gap-6 mt-6">
                            <ContentRenderer :value="doc" class="content px-2 md:col-span-6 md:col-start-3" />
                        </div>
                    </article>
                </ContentDoc>
            </div>
        </section>
    </main>
</template>

<style>
.content h1 {
    @apply text-primary-blue text-2xl font-medium mb-2 mt-6;
}

.content h2 {
    @apply text-primary-blue text-xl font-medium mb-2 mt-6;
}

.content h3 {
    @apply text-primary-blue text-lg font-medium mb-2 mt-6;
}

.content p {
    @apply text-lg text-zinc-500 leading-relaxed;
}

.content ul li {
    @apply list-disc text-zinc-500 mb-1 text-lg;
}

.content ol li {
    @apply list-decimal list-inside text-zinc-500 mb-1 text-lg;
}

.content strong {
    @apply text-primary-blue/80 font-medium;
}

.content img {
    @apply w-full h-auto my-3;
}

.content ul{
    @apply list-inside
}
</style>