<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <NavBar></NavBar>

    <TheFooter></TheFooter>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  // 作为字符串，
  // 其中`%s`会被标题替换
  titleTemplate: (productCategory) => {
    return productCategory != 'Micen'
      ? `${productCategory} | Micen`
      : 'Micen'
  },
})
</script>
