<script setup>
import LineMdMoonRisingTwotoneAltLoop from '~icons/line-md/moon-rising-twotone-alt-loop';
import LineMdMoonToSunnyOutlineLoopTransition from '~icons/line-md/moon-to-sunny-outline-loop-transition';
import LineMdMenuToCloseTransition from '~icons/line-md/menu-to-close-transition';
import IconGithub from '~icons/mdi/github';
const showMenu = ref(false);
const light = ref(false);
const colorMode = useColorMode()
const navigation = [
    { name: '首页', href: '/' },
    { name: '项目', href: '/projects' },
    { name: '生活', href: '/life' },
    { name: '关于', href: '/about' },
]
onMounted(() => {
    const now = new Date()
    const hours = now.getHours()
    colorMode.preference = hours >= 6 && hours < 18 ? 'light' : 'dark'
    console.log('Automatically set color mode based on current time:', {
        time: now.toLocaleTimeString(),
        colorMode: colorMode.preference
    })
})

</script>

<template>
    <div>
        <header
            class="justify-center flex fixed top-0 left-0 right-0 z-40 bg-glass-white-4 backdrop-blur-md shadow-xs border-b-1 border-white/20  dark:bg-black/40">
            <nav class="container justify-between items-center h-14 mx-16 hidden md:flex ">
                <div class="flex gap-8 items-center">
                    <a href="/">
                        <img src="@/assets/Logo-50.png" alt="" class="stroke-1">
                    </a>
                    <menu class="flex gap-5 text-zinc-600 items-center dark:text-zinc-300">
                        <li v-for="item in navigation" :key="item.name">
                            <a :href="item.href">{{
                                item.name }}</a>
                        </li>
                        <!-- <li>
                            <button>
                                <img src="../assets/icons/Search.svg" alt="">
                            </button>
                        </li> -->
                    </menu>
                </div>
                <div class="flex gap-5">
                    <!-- <button>
                        <img src="../assets/icons/Translate.svg" alt="">
                    </button> -->
                    <button @click="$colorMode.preference = 'dark'" v-show="$colorMode.preference != 'dark'">
                        <!-- <img src="../assets/icons/Moon.svg" alt=""> -->
                        <line-md-moon-rising-twotone-alt-loop class="icons" />

                    </button>
                    <button @click="$colorMode.preference = 'light'" v-show="$colorMode.preference == 'dark'">
                        <!-- <img src="../assets/icons/Sun.svg" alt=""> -->
                        <line-md-moon-to-sunny-outline-loop-transition class="icons" />

                    </button>
                    <a href="https://github.com/Micenjia">
                        <icon-github class="icons" />
                    </a>
                </div>
            </nav>
            <!-- Mobile menu, show/hide based on menu open state. -->

            <div class="md:hidden w-full mx-8 item-center dark:text-white">
                <div class="h-14 flex justify-between items-center">
                    <a href="/" class="flex">
                        <img src="../assets/Logo-50.png" alt="" class="stroke-1">
                    </a>
                    <ul class="flex gap-4 items-start pt-2">
                        <li v-show="!showMenu">
                            <button @click="$colorMode.preference = 'dark'"
                                v-show="$colorMode.preference == 'light' || $colorMode.preference == 'system'">
                                <!-- <img src="../assets/icons/Search.svg" alt=""> -->
                                <line-md-moon-rising-twotone-alt-loop class="icons " />
                            </button>
                            <button @click="$colorMode.preference = 'light'" v-show="$colorMode.preference == 'dark'">
                                <line-md-moon-to-sunny-outline-loop-transition class="icons" />
                            </button>
                        </li>
                        <li v-show="!showMenu">
                            <button @click="showMenu = !showMenu">
                                <i-custom-menu class="icons stroke-2" />
                            </button>
                        </li>
                        <li v-show="showMenu">
                            <button class="pr-1" @click="showMenu = !showMenu">
                                <line-md-menu-to-close-transition class="icons stroke-2" />
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="flex justify-between items-end mt-2 mb-4 transition ease-in-out" v-show="showMenu">
                    <menu class="space-y-2 text-zinc-500 text-xl pl-2 dark:text-zinc-300">
                        <li v-for="item in navigation" :key="item.name">
                            <a :href="item.href">{{
                                item.name }}</a>
                        </li>
                    </menu>
                    <!-- <ul class="flex justify-between w-fit gap-4">
                        <li>
                            <button>
                                <img src="../assets/icons/Translate.svg" alt="">
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src="../assets/icons/Moon.svg" alt="">
                            </button>
                        </li>
                    </ul> -->
                </div>
            </div>
        </header>
    </div>
</template>
