<template>
    <div class="pb-2">
        <p class="text-zinc-600 text-sm mt-4 mb-4 ">
            <slot name="category"></slot>
        </p>
        <div class="grid grid-cols-2 gap-6 md:grid-cols-3">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>