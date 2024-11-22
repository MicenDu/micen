<template>
    <div class="flex flex-wrap w-fit justify-between gap-2 mt-3 sticky items-start p-4 glass-border md:flex-col">
        <div class="flex flex-col justify-center px-4 gap-1 w-fit">
            <p class="font-medium text-base text-neutral-600 ">客户</p>
            <div class="gap-1">
                <p class="text-sm text-neutral-500">
                    <slot name="company"></slot>
                </p>
            </div>
        </div>
        <div class="flex flex-col justify-center px-4 gap-1 w-fit">
            <p class="font-medium text-base text-neutral-600 ">类型</p>
            <div class="flex flex-row gap-1 md:flex-col">
                <!-- <p class="text-sm text-neutral-500"> -->
                <slot name="types"></slot>
                <!-- </p> -->
            </div>
        </div>
        <div class="flex flex-col justify-center px-4 gap-1 w-full">
            <p class="font-medium text-base text-neutral-600 ">工具方法</p>
            <div class="gap-1">
                <!-- <p class="text-sm text-neutral-500"> -->
                <slot name="tools"></slot>
                <!-- </p> -->
            </div>

        </div>
    </div>
</template>

<script setup>
defineProps({
    company: {
        type: String,
    },
    types: {
        type: Array,
    },
    tools: {
        type: Array,
    }
})
</script>
