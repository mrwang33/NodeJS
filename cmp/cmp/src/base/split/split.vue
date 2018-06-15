<template>
  <div class="split">
      {{ecsTitle}}
  </div>
</template>
<script>
export default {
  props: {
    ecsTitle: String
  }
}
</script>
<style lang="scss" scoped>
.split {
  padding: 15px 0;
  border-bottom: dotted 1px rgba(108, 106, 213, 0.3);
  color: #333;
  font-size: 15px;
}
</style>
