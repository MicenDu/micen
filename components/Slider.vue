<template>
    <div class="m-5 md:mx-20">
        <div class="flex justify-between items-center">
            <SectionTitle>生活</SectionTitle>
            <div>
                <button @click="prevSlide">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class=" hover:fill-primary-blue" :class="prevClass">
                        <path
                            d="M17 8.24251H4.15881L10.8025 2.08349L9.63572 1L1 9L9.63572 17L10.8025 15.9229L4.15881 9.77156H17V8.24251Z"
                            fill-opacity="0.8" />
                    </svg>
                </button>
                <button @click="nextSlide">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class=" hover:fill-primary-blue rotate-180 ml-2" :class="nextClass">
                        <path
                            d="M17 8.24251H4.15881L10.8025 2.08349L9.63572 1L1 9L9.63572 17L10.8025 15.9229L4.15881 9.77156H17V8.24251Z"
                            fill-opacity="0.8" />
                    </svg>
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
        'fill-zinc-300': curSlide.value === 0,
        'fill-primary-blue': curSlide.value !== 0,
    };
});

const nextClass = computed(() => {
    return {
        'fill-zinc-300': curSlide.value === maxSlide - 1,
        'fill-primary-blue': curSlide.value !== maxSlide - 1,
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
    console.log("onMounted");
    const quoteCards = document.querySelectorAll('#quote-card');
    console.log(quoteCards[0].offsetWidth);

    if (quoteCards.length > 0) {
        cardWidth.value = quoteCards[0].offsetWidth + 32;
    }
    console.log('Width:' + cardWidth.value);
    console.log('cur' + curSlide.value);

    window.addEventListener('keydown', handleKeydown)
})
</script>
