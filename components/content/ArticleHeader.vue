<template>
    <div class="flex justify-center">
        <div class="flex flex-col gap-3 items-center w-full">
            <div class="text-center">
                <p class="text-primary-blue text-2xl md:text-4xl font-medium mb-5 mt-3">
                    {{ title }}
                </p>
                <time class="text-primary-blue/80 my-3 font-sans;">
                    {{ date }}
                </time>
            </div>
            <div>
                <a v-for="tag in tags" :key="tag"
                    class="text-primary-blue/80 bg-blue-100 hover:bg-blue-200 border-2 border-white/20 rounded-full px-2.5 py-0 mx-1 text-sm font-normal text-center w-fit cursor-default">
                    {{ tag }}
                </a>
            </div>
            <img :src="image" :alt="alt" class="mt-3 w-full">
        </div>
    </div>
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
    tags: {
        type: Array,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    alt: {
        type: String,
        required: true
    }
})
</script>
