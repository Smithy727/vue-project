<template>
  <div class="progress-bar">uploading...</div>
</template>

<script>
import useStorage from '../composables/useStorage';

export default {
    name: "ProgressBar",
    props: ['file'],
    setup(props) {
      useStorage(props.file)
    }
}
</script>

<style>

</style>