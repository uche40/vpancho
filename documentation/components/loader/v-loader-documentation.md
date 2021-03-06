### V-Loader

Vuero ships with a dead simple and versatile `<V-Loader />` component.
This loader is mostly CSS based and gets activated by passing a `true` value
to the `active` prop. You can change the loader size using the `size` prop.
4 sizes are available: `small`, default, `large` and `xl`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'
const isLoaderActive = ref(false)

const toggleLoaders = () => {
  isLoaderActive.value = !isLoaderActive.value
}
</script>

<template>
  <V-Loader size="large" :active="isLoaderActive">
    <!-- content ... --->
  </V-Loader>
</template>
```

<!--/code-->
