<script lang="ts">
import {defineComponent, onMounted, onBeforeUnmount, watch} from 'vue'
import useObserver from "@/useObserver"


export default /*#__PURE__*/defineComponent({
  name: 'VinfiniteScrollNext', // vue component name
  setup(_props, { emit }) {
    let { observer, observerChanged, time } = useObserver()

    onMounted(() => {
      observer.value = new IntersectionObserver(([entry]) => {
        observerChanged(entry)
      })

      const element = document.querySelector('.vinfinite-scroll')!
      observer.value.observe(element)
    })

    onBeforeUnmount(() => {
      observer?.value?.disconnect()
    })

    watch(time, () => {
      emit('notifyEndReached')
    })
  }
});
</script>

<template>
  <div class="vinfinite-scroll">
  </div>
</template>
