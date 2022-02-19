<p align="center">
    <img width="150" src="https://jsdev.best/vinfinite-scroll.png" alt="Vinfinite Scroll">
</p>

# Vinfinite Scroll

For the Vue2 version, go [here](https://github.com/amirhshahbazi/vinfinite-scroll).

> Infinite scroll component for Vue.js
- 🟩 Easy to use
- 🟩 SSR compatible
---

## Installation

```bash
yarn add vinfinite-scroll-next
# or using npm:
npm install vinfinite-scroll-next
```

---

## Usage

### Import the component
```js
import VinfiniteScrollNext from 'vinfinite-scroll-next'
```

### Add the component to the end of the list you want to use
Every time the scroll position reaches `vinfinite-scroll`, the `notifyEndReached` is invoked.
```js
  <div class="list">
    <div v-for="(item) in list" :key="item">
      {{ item }}
    </div>
    <vinfinite-scroll-next @notifyEndReached="notify"></vinfinite-scroll-next>
  </div>
```

### Add data to the previous list whenever scroll is reached (Composition API)
```js
    const notify = () => {
      list.value = list.value.concat(Array.from({length: 100}, (v, k) => k + 1 + list.value.length))
    }
```

## Complete example

```js
<template>
  <div class="list">
    <div v-for="(item) in list" :key="item">
      {{ item }}
    </div>
    <vinfinite-scroll-next @notifyEndReached="notify"></vinfinite-scroll-next>
  </div>
</template>

<script>
import VinfiniteScrollNext from 'vinfinite-scroll-next'
import { onMounted, ref } from "vue"

export default {
  name: 'App',
  components: {
    VinfiniteScrollNext
  },
  setup() {
    let list = ref([])

    onMounted(() => {
      list.value = Array.from({length: 100}, (v, k) => k + 1)
    })

    const notify = () => {
      list.value = list.value.concat(Array.from({length: 100}, (v, k) => k + 1 + list.value.length))
    }

    return {
      list, notify
    }
  }
}
</script>


```

---

## License

[MIT](http://opensource.org/licenses/MIT)
