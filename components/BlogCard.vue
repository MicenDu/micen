<template>
    <article>
        <div class="">
            <a :href="link">
                <NuxtImg :src="imgUrl" alt="" format="avif, webp"
                    class="object-cover object-center h-40 xl:h-64 w-full box-border" />
                <div class="glass-border w-full">

                    <div class="flex justify-between p-4">
                        <h2 class="text-zinc-600">
                            <slot name="title"></slot>
                        </h2>
                        <time datetime="2022-01-22" class="text-gray-400">
                            <slot name="date"></slot>
                        </time>
                    </div>

                </div>
            </a>
        </div>
    </article>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})
</script>
