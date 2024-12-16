<template>
    <article class="glass-border px-6 pt-6 pb-8 my-4 md:my-8 md:px-28 md:pb-12 md:pt-14">
        <nuxt-link :to="link">
            <div class="flex flex-col md:flex-row gap-3 md:gap-24 items-start md:items-center">
                <p class="text-2xl md:text-7xl font-serif font-bold text-zinc-600 dark:text-zinc-300">
                    {{ chineseNumbers(index) }}</p>
                <div class="flex flex-col gap-4 w-full">
                    <h2 class="text-lg md:text-2xl font-serif text-zinc-600 font-bold dark:text-zinc-200">{{ title }}
                    </h2>
                    <p class="font-serif text-lg text-zinc-500 dark:text-zinc-300">{{ description }}</p>
                    <p class="font-mono w-full text-end text-sm text-zinc-500 dark:text-zinc-300 hidden md:block">
                        <time :datetime="date">{{ date }}</time>
                    </p>
                </div>
            </div>
        </nuxt-link>
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
        type: Number,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})
function chineseNumbers(num) {
    const chineseDigits = ['壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾'];
    return chineseDigits[num];
}
</script>