<template>
    <div class="p-4 my-4 glass-border flex flex-col justify-center gap-2 flex-shrink-0 
                min-h-44 w-[90vw] max-w-3xl mx-auto
                md:min-h-52 md:h-80 md:p-8">
        <p class="mt-8">
            <p class="text-3xl font-bold text-zinc-700 line-clamp-3 mb-3 w-full text-center font-serif md:text-4xl dark:text-zinc-200">
                “{{quote}}”
            </p>
        </p>
        <div class="flex justify-end">
            <cite class="text-zinc-400 font-serif">
                —— {{cite}}
                <span class="font-mono">
                    ({{year}})
                </span>
            </cite>
        </div>
    </div>
</template>

<script setup>
defineProps({
    quote: String,
    cite: String,
    year: Number
})
</script>