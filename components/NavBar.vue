<template>
    <div>
        <header
            class="justify-center flex fixed top-0 left-0 right-0 z-40 bg-glass-white-4 backdrop-blur-xl md:backdrop-blur-md">
            <nav class="container justify-between items-center h-14 mx-16 hidden lg:flex ">
                <div class="flex gap-8 items-center">
                    <a href="">
                        <img src="../assets/Logo-50.png" alt="" class="stroke-1">
                    </a>
                    <menu class="flex gap-5 text-zinc-600 items-center">
                        <li><a href="/">首页</a></li>
                        <li><a href="/projects">项目</a></li>
                        <li><a href="/life">生活</a></li>
                        <li><a href="/about">关于</a></li>
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
                    <button>
                        <img src="../assets/icons/Moon.svg" alt="">
                    </button>
                    <a href="">
                        <img src="../assets/icons/Github.svg" alt="">
                    </a>
                </div>
            </nav>
            <!-- Mobile menu, show/hide based on menu open state. -->

            <div class="lg:hidden w-full mx-8 item-center dark:bg-primary-blue">
                <div class="h-14 flex justify-between items-center">
                    <a href="/" class="flex">
                        <img src="../assets/Logo-50.png" alt="" class="stroke-1">
                    </a>
                    <ul class="flex gap-4 items-start pt-2">
                        <li v-show="!showMenu">
                            <button>
                                <!-- <img src="../assets/icons/Search.svg" alt=""> -->
                                <img src="../assets/icons/Moon.svg" alt="">
                            </button>
                        </li>
                        <li v-show="!showMenu">
                            <button @click="showMenu = !showMenu">
                                <img src="../assets/icons/Menu.svg" alt="">
                            </button>
                        </li>
                        <li v-show="showMenu">
                            <button class="pr-1" @click="showMenu = !showMenu">
                                <img src="../assets/icons/Close.svg" alt="">
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="flex justify-between items-end mt-2 mb-4 transition ease-in-out" v-show="showMenu">
                    <menu class="space-y-2 text-zinc-600 text-xl pl-2 ">
                        <li><a href="/">首页</a></li>
                        <li><a href="/projects">项目</a></li>
                        <li><a href="/life">生活</a></li>
                        <li><a href="/about">关于</a></li>
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

<script setup>
const showMenu = ref(false);
</script>
