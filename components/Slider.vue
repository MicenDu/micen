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
            <QuoteCard v-for="quote in quotes"
            :cite="quote.cite"
            :quote="quote.quote"
            :year="quote.year"
            class="transition-transform duration-300" id="quote-card">
               
            </QuoteCard>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import QuoteCard from './QuoteCard.vue';
const quotes = [
    { quote: '感觉像吃了仙人掌一样难受', cite: '美丽新世界', year: 1932 },
    { quote:'帕金森定律被证明与摩尔定律一样颠扑不破', cite:'黑客与画家', year: 2011},
    { quote: '都怪这吉他，弹得太凄凉', cite: '驴得水', year: 2016 },
    
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
