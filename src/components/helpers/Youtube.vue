<template>
  <div class="videoContainer">
    <iframe width="100%" height="auto" :src="src" :title="title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>
<style scoped>
.videoContainer {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 of the videos */
}
.videoContainer > iframe {
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  border: 2px solid rgba(0, 0, 0, 0.25);
}
</style>
