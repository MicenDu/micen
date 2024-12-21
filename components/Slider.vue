<template>
    <div class="flex justify-between items-center mt-16">
        <SectionTitle>生活</SectionTitle>
        <div class="flex gap-2">
            <button @click="prevSlide">
                <p class="font-serif text-4xl font-thin text-zinc-300 hover:text-primary-blue dark:text-zinc-400"
                    :class="prevClass">←
                </p>
            </button>
            <button @click="nextSlide">
                <p class="font-serif text-4xl font-thin text-zinc-300 hover:text-primary-blue dark:text-zinc-400"
                    :class="nextClass">→
                </p>
            </button>
        </div>
    </div>
    <div class="overflow-hidden relative w-full">

        <div class="flex gap-8 transition-transform duration-300 "
            :style="{ transform: `translateX(${cardWidth * (-curSlide)}px)` }">
            <QuoteCard v-for="(quote, index) in quotes" class="transition-transform duration-300" id="quote-card">
                <template #quote>{{ quote.quote }}</template>
                <template #cite>{{ quote.cite }}</template>
                <template #year>{{ quote.year }}</template>
            </QuoteCard>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import QuoteCard from './QuoteCard.vue';
const quotes = [
    { quote: '这是正经班吗？', cite: '漫长的季节', year: 2023 },
    { quote: '这是正班吗？', cite: '漫长的季', year: 2024 },
    { quote: '这是班吗？', cite: '漫长的', year: 2025 },
];

let curSlide = ref(0);
let cardWidth = ref(0);
const maxSlide = quotes.length;

//button color
const prevClass = computed(() => {
    return {
        'text-zinc-300': curSlide.value === 0,
        'text-primary-blue/50': curSlide.value !== 0,
    };
});

const nextClass = computed(() => {
    return {
        'text-zinc-300': curSlide.value === maxSlide - 1,
        'text-primary-blue/50': curSlide.value !== maxSlide - 1,
    };
});

const nextSlide = () => {
    if (curSlide.value == maxSlide - 1) {
        curSlide.value = 0;
    } else {
        curSlide.value++;
    }
    console.log(curSlide.value);
}
const prevSlide = () => {
    console.log(maxSlide + '********');
    if (curSlide.value == 0) {
        curSlide.value = maxSlide - 1;
    } else {
        curSlide.value--;
    }
    console.log(curSlide.value);
}
const handleKeydown = (e) => {
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'ArrowRight') nextSlide()
}

onMounted(() => {
    const quoteCards = document.querySelectorAll('#quote-card');
    console.log(quoteCards[0].offsetWidth);

    if (quoteCards.length > 0) {
        cardWidth.value = quoteCards[0].offsetWidth + 32;
    }
    console.log('Width:' + cardWidth.value + ' ' + 'cur' + curSlide.value);

    window.addEventListener('keydown', handleKeydown)
})
</script>
