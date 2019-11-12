<template>
  <div>
    <!-- <button><router-link to='/my'>dianji</router-link> </button> -->
    <div @click='fn'>点击111111</div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    fn(){
      this.$router.push('/my')
    }
  },
  components: {}
};
</script>

<style lang="less">
div {
  font-size: 0.3rem;
}
</style>
