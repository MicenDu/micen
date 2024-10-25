<template>
    <div>
        <header class="bg-zinc-300 justify-center flex absolute inset-x-0 top-0 z-50">
            <nav class="container justify-between items-center h-14 mx-16 hidden lg:flex">
                <div class="flex gap-8 items-center">
                    <a href="">
                        <img src="../asssets/Logo-50.png" alt="" class="stroke-1">
                    </a>
                    <menu class="flex gap-5 text-gray-600 items-center">
                        <li><a href="/">首页</a></li>
                        <li><a href="/projects">项目</a></li>
                        <li><a href="/life">生活</a></li>
                        <li><a href="/about">关于</a></li>
                        <li>
                            <button>
                                <img src="../asssets/icon/Search.svg" alt="">
                            </button>
                        </li>
                    </menu>
                </div>
                <div class="flex gap-5">
                    <button>
                        <img src="../asssets/icon/Translate.svg" alt="">
                    </button>
                    <button>
                        <img src="../asssets/icon/Moon.svg" alt="">
                    </button>
                    <a href="">
                        <img src="../asssets/icon/Github.svg" alt="">
                    </a>
                </div>
            </nav>
            <!-- Mobile menu, show/hide based on menu open state. -->
            <div class="lg:hidden w-full mx-8 item-center">
                <div class="h-14  flex items-center justify-between">
                    <a href="" class="flex">
                        <img src="../asssets/Logo-50.png" alt="" class="stroke-1">
                    </a>
                    <ul class="flex gap-4 justify-end items-center">
                        <li>
                            <a href="">
                                <img src="../asssets/icon/Search.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <button>
                                <img src="../asssets/icon/Menu.svg" alt="">
                            </button>
                        </li>
                    </ul>
                </div>
                <!-- open -->
                <div class="flex flex-col gap-y-4 mt-4 mb-8">
                    <div class="flex justify-between">
                        <a href="">
                            <img src="../asssets/Logo-50.png" alt="" class="stroke-1">
                        </a>
                        <button>
                            <img src="../asssets/icon/Close.svg" alt="">
                        </button>
                    </div>
                    <div class="flex justify-between items-end">
                        <menu class="space-y-2 text-gray-600 text-xl pl-2 ">
                            <li><a href="/">首页</a></li>
                            <li><a href="/projects">项目</a></li>
                            <li><a href="/life">生活</a></li>
                            <li><a href="/about">关于</a></li>
                        </menu>
                        <ul class="flex justify-between w-fit gap-4">
                            <li>
                                <img src="../asssets/icon/Translate.svg" alt="">
                            </li>
                            <li>
                                <img src="../asssets/icon/Moon.svg" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </header>
    </div>
</template>

<script setup>

</script>
<style scoped lang='less'></style>