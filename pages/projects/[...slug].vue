<template>
    <main>
        <section class="container mx-auto">
            <div class="mx-5 py-20 md:mx-20 ">
                <ContentDoc v-slot="{ doc }">
                    <article>
                        <ArticleHeader :title="doc.title" :date="doc.date" :tags="doc.tags" :image="doc.image">
                        </ArticleHeader>
                        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 justify-between">
                            <ClientCard :company="doc.company" :types="doc.types" :tools="doc.tools"
                                class="md:col-span-2 w-fit h-fit md:sticky md:top-20 ">
                            </ClientCard>
                            <ContentRenderer :value="doc" class="content px-2 md:col-span-6 md:col-start-4" />
                        </div>
                    </article>
                </ContentDoc>
            </div>
        </section>
    </main>
</template>

<style>
.content h1 {
    @apply text-zinc-600 text-2xl font-medium mb-2 mt-6;
}

.content h2 {
    @apply text-zinc-600 text-xl font-medium mb-2 mt-6;
}

.content h3 {
    @apply text-zinc-600 text-lg font-medium mb-2 mt-6;
}

.content h4 {
    @apply text-zinc-600 text-base font-medium mb-2 mt-6;
}

.content p {
    @apply text-base text-zinc-500 leading-7;
}

.content ul li {
    @apply list-disc text-zinc-500 mb-1;
}

.content ol li {
    @apply list-decimal list-inside text-zinc-500 mb-1;
}

.content strong {
    @apply text-primary-blue/80 font-medium;
}

.content img {
    @apply w-full h-auto my-6;
}
blockquote{
    @apply border-l-2 border-zinc-300 pl-4 my-4 ;
}
</style>