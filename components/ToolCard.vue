<template>
    <div class="w-full h-auto rounded-sm hover:bg-zinc-200 dark:hover:bg-zinc-600">
        <a :href="toolLink" class="flex flex-row items-center justify-center gap-4 my-3 mx-4 " target="_blank">
            <img :src="iconPath" :alt="toolName" class="w-10 h-10">
            <div class="flex flex-col justify-center  gap-0.5 w-full">
                <p class="font-medium text-sm text-neutral-700 dark:text-zinc-300">
                    {{ toolName }}
                </p>
                <p class="text-xs  text-zinc-400">
                    {{ toolFunction }}
                </p>
            </div>
        </a>
    </div>
</template>

<script setup>
defineProps({
    iconPath: {
        type: String,
        required: true
    },
    toolName: {
        type: String,
        required: true
    },
    toolLink: {
        type: String,
        required: true
    },
    toolFunction: {
        type: String,
        required: true
    }
})
</script>
