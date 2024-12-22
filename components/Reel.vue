<script setup>
defineProps({
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

const checkImageRatio = () => {
    const img = imageRef.value;
    if (img) {
        isPortrait.value = img.naturalHeight > img.naturalWidth;
    }
}
onMounted(() => {
    checkImageRatio();
})
</script>
<template>
    <article class="mx-auto h-64 flex w-full md:h-96 " :class="isPortrait ? 'flex-row' : 'flex-col'">
        <div :class="[
            'shrink glass-border p-4 md:p-6 grow',
            isPortrait ? 'w-fit' : 'w-full'
        ]">
            <a href="" class="text-primary-blue flex gap-4 h-full justify-between" :class="[
                isPortrait ? 'flex-col' : 'flex-row']">
                <div>
                    <h2 class="mb-2">
                        {{ title }}
                    </h2>
                    <p class="text-sm">
                        {{ author }}
                    </p>
                </div>
                <time :datetime="year">
                    {{ year }}
                </time>
            </a>
        </div>
        <div class="overflow-hidden">
            <img :src="imgUrl" :alt="title" ref="imageRef" :class="[
                'object-cover object-center',
                isPortrait ? 'h-64 md:h-96' : 'w-full md:h-64'
            ]" />
        </div>
    </article>
</template>
