<template>
  <div>
    Datas (test): {{ test }}<br>
    Props (prop1): {{ prop1 }}<br>
    Props (prop2): {{ prop2 }}<br>
  </div>
</template>

<script>
export default {

  props: {
    prop1: {
      type: String,
      default () {
        return 'prop1';
      }
    },
    prop2: {
      type: String,
      default () {
        return 'prop2';
      }
    }
  },

  data: function () {
    return {
      test: ''
    };
  },

  created () {
    console.log('created', this);
  },
  mounted () {
    console.log('mounted', this);
  },
  destroyed () {
    console.log('destroyed', this);
  }

};
</script>

<style lang="postcss">
.test {
  background: red;
}
</style>
