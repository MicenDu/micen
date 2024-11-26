<template>
    <main>
        <section class="container mx-auto mt-14">
            <div class="mx-5 pt-5 md:mx-20 ">
                <ContentDoc v-slot="{ doc }">
                    <article>
                        <ArticleHeader :title="doc.title" :date="doc.date" :tags="doc.tags" :image="doc.image">
                        </ArticleHeader>
                        <div class="grid grid-cols-1 md:grid-cols-10 gap-6 mt-6">
                            <!-- <ClientCard :company="doc.company" :types="doc.types" :tools="doc.tools"
                                class="md:col-span-2 w-fit h-fit md:sticky md:top-20">
                            </ClientCard> -->
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

.content h4 {
    @apply text-primary-blue text-base font-medium mb-2 mt-6;
}

.content p {
    @apply text-base text-zinc-500 leading-relaxed;
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
    @apply w-full h-auto my-3;
}
</style>