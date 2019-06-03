<template>
    <div class="lodings" v-if="loading">
      <div class="text-center">
        <b-spinner variant="primary" class="m-5"  label="Text Centered"></b-spinner>
      </div>
    </div>
</template>

<script>
    export default {
      data: () => ({
        loading: true
      }),
      methods: {
        start () {
          this.loading = true
        },
        finish () {
          this.loading = false
        }
      }
    }
</script>

<style scoped>
  .lodings{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99999;
    top: 0;
    left: 0;
    background: #000000;
  }
</style>
