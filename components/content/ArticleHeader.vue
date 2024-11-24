<template>
    <div class="flex justify-center">
        <!-- <a href="#"
            class="text-primary-blue/80 bg-blue-100 hover:bg-blue-200 border-2 border-white/20 rounded-full px-2.5 py-0 mx-1 text-sm font-normal text-center w-fit "
            @click.prevent> -->

        <slot></slot>
        <!-- </a> -->
    </div>
</template>

<script setup>
defineProps({
    tags: {
        type: Array,
        required: true
    }
})
</script>
