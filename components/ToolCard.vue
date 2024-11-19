<template>
    <div class="w-fit h-auto">
        <a :href="toolLink" class="flex flex-row items-center justify-center gap-4" target="_blank">
            <img :src="iconPath" :alt="toolName" class="w-10 h-10">
            <div class="flex flex-col justify-center  gap-0.5">
                <p class="font-medium text-sm text-neutral-700">
                    <slot name='toolName'></slot>
                </p>
                <p class="text-xs text-neutral-500">
                    <slot name="toolFunction"></slot>
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
    }
})
</script>
