<template>
    <article class="glass-border px-6 pt-6 pb-8 my-4  md:my-8 md:px-28 md:py-12">
        <div class="flex flex-col md:flex-row gap-3 md:gap-24 items-start md:items-center">
            <p class="text-2xl md:text-7xl font-serif font-bold text-zinc-600">{{ index }}</p>
            <div class="flex flex-col gap-4 w-full">
                <h2 class="text-lg md:text-2xl font-serif text-zinc-600 font-bold">{{ title }}</h2>
                <p class="font-serif text-lg text-zinc-500">{{ description }}</p>
                <p class="font-mono w-full text-end text-sm text-zinc-500 hidden md:block">
                    <time :datetime="date">{{ date }}</time>
                </p>
            </div>
        </div>
    </article>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    index: {
        type: Object,
        required: true
    }
})

</script>