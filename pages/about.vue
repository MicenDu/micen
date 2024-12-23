<template>
    <div class="grid grid-cols-1 md:max-w-7xl mx-auto gap-4 grid-flow-dense md:grid-cols-3 ">
        <section class="container mx-auto md:col-span-3 md:mb-4">
            <div class="m-5 pt-20">
                <div class="grid grid-cols-2 gap-8 items-center md:grid-cols-3">
                    <div class="md:col-span-2">
                        <h1
                            class="text-3xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-light-green w-fit md:text-5xl">
                            Micen</h1>
                        <p class="text-zinc-500 my-2 leading-6 text-sm md:text-2xl dark:text-zinc-300">用户体验设计师 / 也搞前端 /
                            还拍点照片</p>
                    </div>
                    <img class="h-20 w-20 rounded-full mx-auto md:-order-1 md:w-40 md:h-40"
                        src="../assets/images/avatar.png" alt="">
                </div>
            </div>
        </section>
        <section class="container md:px-5">
            <div class="m-5 ">
                <SectionTitle class="font-medium">关于我</SectionTitle>
                <p class="text-zinc-500 mb-2 leading-8 text-sm w-fit dark:text-zinc-400">一名用户体验设计师、SDE(Someone Does
                    Everything)。工业设计出身，但接触前端后，对其有着极大兴趣。于是自己设计了亿下个人网站，在此留下一些自己的想法和痕迹。</p>
            </div>
        </section>
        <section class="container md:col-span-2 md:row-span-3">
            <div class="m-5">
                <SectionTitle class="font-medium">擅长工具</SectionTitle>
                <ToolCardStack v-for="stack in toolsData">
                    <template #category>{{ stack.category }}</template>
                    <ToolCard v-for="tool in stack.tools" :icon="tool.icon" :toolName="tool.toolName"
                        :toolLink="tool.toolLink" :toolFunction="tool.toolFunction">
                        <template #icon>
                            <component :is="tool.icon"></component>
                        </template>
                    </ToolCard>
                </ToolCardStack>
            </div>
        </section>
        <section class="container md:px-5">
            <div class="m-5">
                <SectionTitle class="font-medium">其他技能</SectionTitle>
                <div class="flex flex-wrap gap-2">
                    <Tag v-for="tag in tags" :key="tag">{{ tag }}</Tag>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import Figma from '~icons/tools/figma';
import Photoshop from '~icons/tools/photoshop';
import Powerpoint from '~icons/tools/powerpoint';
import Vue from '~icons/tools/vue';
import Nuxt from '~icons/tools/nuxt';
import Tailwindcss from '~icons/devicon/tailwindcss'
import JavaScript from '~icons/tools/javascript';
import HTML from '~icons/tools/html';
import CSS from '~icons/tools/css';
import Davinci from '~icons/tools/davinci';
import CapCut from '~icons/tools/capcut';
import Lightroom from '~icons/tools/lightroom';
import Feishu from '~icons/tools/feishu';
import ChatGPT from '~icons/tools/chatgpt';
import Github from '~icons/tools/github';
import Notion from '~icons/tools/notion';

const toolsData = [
    {
        category: "设计",
        tools: [
            {
                toolName: "Figma",
                toolFunction: "UI/UX设计",
                icon: Figma,
                toolLink: 'https://www.figma.com/',
            },
            {
                toolName: "Photoshop",
                toolFunction: "图片处理",
                icon: Photoshop,
                toolLink: 'https://www.adobe.com/products/photoshop.html',

            },
            {
                toolName: "Powerpoint",
                toolFunction: "幻灯片演示",
                icon: Powerpoint,
                toolLink: 'https://www.microsoft.com/zh-cn/microsoft-365/powerpoint'

            },
        ]
    },
    {
        category: "前端",
        tools: [
            {
                toolName: "Vue",
                toolFunction: "前端框架",
                icon: Vue,
                toolLink: 'https://v3.cn.vuejs.org/'
            },
            {
                toolName: "Nuxt",
                toolFunction: "通用应用框架",
                icon: Nuxt,
                toolLink: 'https://nuxt.com.cn/'
            },
            {
                toolName: "Tailwind",
                toolFunction: "原子化CSS框架",
                icon: Tailwindcss,
                toolLink: 'https://tailwindcss.com/'
            },
            {
                toolName: "JavaScript",
                toolFunction: "编程语言",
                icon: JavaScript,
                toolLink: 'https://zh.javascript.info/'
            },
            {
                toolName: "HTML",
                toolFunction: "超文本标记语言",
                icon: HTML,
                toolLink: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML'
            },
            {
                toolName: "CSS",
                toolFunction: "层叠样式表",
                icon: CSS,
                toolLink: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS'

            },

        ]
    },
    {
        category: "影视",
        tools: [
            {
                toolName: "DaVinci Resolve",
                toolFunction: "视频调色",
                icon: Davinci,
                toolLink: 'https://www.blackmagicdesign.com/products/davinciresolve/'
            },
            {
                toolName: "CapCut",
                toolFunction: "视频剪辑",
                icon: CapCut,
                toolLink: 'https://www.capcut.com/'

            },
            {
                toolName: "Lightroom",
                toolFunction: "图像后期",
                icon: Lightroom,
                toolLink: 'https://www.adobe.com/products/photoshop-lightroom.html'
            },

        ]
    },
    {
        category: "效率",
        tools: [
            {
                toolName: "飞书",
                toolFunction: "高效办公",
                icon: Feishu,
                toolLink: 'https://www.feishu.cn/'
            },
            {
                toolName: "ChatGPT",
                toolFunction: "AI 对话",
                icon: ChatGPT,
                toolLink: 'https://chatgpt.com/'
            },
            {
                toolName: "Github",
                toolFunction: "代码托管",
                icon: Github,
                toolLink: 'https://github.com/'
            },
            {
                toolName: "Notion",
                toolFunction: "笔记管理",
                icon: Notion,
                toolLink: 'https://www.notion.so/'
            }
        ]
    }
]
const tags = ['IT 运维', '空调清洁', '司机师傅', '做饭洗碗', '撸猫铲屎', '通厕所', '墙面打孔']
</script>