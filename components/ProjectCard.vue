<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  }
})
</script>

<template>
  <article class="mx-auto my-4 md:my-8 lg:w-full">
    <slot name="default">
      <a :href="link" class="grid lg:grid-cols-10 grid-reverse max-h-96 overflow-hidden">
        <div class="p-8 glass-border flex-col justify-between hidden col-span-4 max-h-96 lg:flex ">
          <div>
            <div class="flex justify-between items-center text-gray-400 text-sm my-4">
              <time :datetime="year">
                {{ year.slice(0, 4) }}
              </time>
              <p class="font-normal">
                {{ tags[0] }}
              </p>
            </div>
            <div>
              <h2 class="uppercase text-zinc-600 mb-2">
                {{ title }}
              </h2>
              <p class="text-gray-500 mb-2 leading-6">
                {{ description }}
              </p>
            </div>
          </div>
          <div>
            <p class="text-gray-400 text-sm">关于项目</p>
          </div>
        </div>
        <div class="max-h-96 overflow-hidden shrink-0 lg:col-span-6 relative ">
          <NuxtImg :src="imgUrl" alt="" class="w-full h-full object-cover object-center" loading="lazy" placeholder
            format="avif,webp" />
        </div>
        <div class="p-4 glass-border col-auto lg:hidden">
          <div class="text-sm mb-4">
            <h2 class=" text-zinc-600 font-bold text-sm">
              {{ title }}
            </h2>
            <p class="text-gray-500 leading-6 mb-2">
              {{ description }}
            </p>
          </div>
          <div class="flex justify-between items-center text-gray-400 text-xs my-2">
            <time :datetime="year">
              {{ year.slice(0, 4) }}
            </time>
            <p>
              {{ tags[0] }}
            </p>
          </div>
        </div>

      </a>
    </slot>
    <slot name="not-found"></slot>
  </article>

</template>
