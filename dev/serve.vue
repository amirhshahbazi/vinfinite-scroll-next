<script lang="ts">
import { defineComponent } from 'vue';
import VinfiniteScrollNext from '@/vinfinite-scroll-next.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VinfiniteScrollNext
  },
  methods: {
    logIt() {
      console.log('intersected')
    }
  }
});
</script>

<template>
  <div id="app">
    <vinfinite-scroll-next v-on:notifyEndReached="logIt" />
  </div>
</template>
