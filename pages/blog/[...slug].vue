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
