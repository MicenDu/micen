<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
})

const imageRef = ref(null)
const isPortrait = ref(false)
const isLoading = ref(true)

const preloadAndCheckImage = () => {
    return new Promise((resolve) => {
        const img = new Image()
        img.src = props.imgUrl
        
        img.onload = () => {
            const isImagePortrait = img.naturalHeight > img.naturalWidth
            resolve(isImagePortrait)
        }
    })
}

onMounted(async () => {
    isPortrait.value = await preloadAndCheckImage()
    isLoading.value = false
})
</script>

<template>
    <article v-if="isLoading" class="mx-auto h-64 md:h-96 w-full">
        <div class="w-full h-full bg-gray-100/80 animate-pulse rounded"></div>
    </article>

    <article v-else 
        class="mx-auto h-64 flex w-full md:h-96 transition-all duration-300" 
        :class="isPortrait ? 'flex-row' : 'flex-col'">
        <div :class="[
            'shrink glass-border p-4 md:p-6 grow transition-all duration-300',
            isPortrait ? 'w-fit' : 'w-full'
        ]">
            <a href="" 
                class="text-neutral-600 mb-2 dark:text-zinc-200 flex gap-4 h-full justify-between" 
                :class="[isPortrait ? 'flex-col' : 'flex-row']"
            >
                <div>
                    <h2 class="mb-2">{{ title }}</h2>
                    <p class="text-sm">{{ author }}</p>
                </div>
                <time :datetime="year">{{ year }}</time>
            </a>
        </div>
        <div class="overflow-hidden">
            <NuxtImg 
                :src="imgUrl" 
                :alt="title" 
                ref="imageRef"
                :class="[
                    'object-cover object-center transition-all duration-300',
                    isPortrait ? 'h-64 md:h-96' : 'w-full md:h-64'
                ]"
            />
        </div>
    </article>
</template>

<style scoped>
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: .5; }
}
</style>