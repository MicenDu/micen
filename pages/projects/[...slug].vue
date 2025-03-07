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
