<template>
  <ul class="catagtory">
    <li
      :class="{ select: currentCatagtory === item.id }"
      v-for="item in catagtory"
      :key="item.id"
      @click="$store.commit('catagtory/updatdCurrentCatagtory', item.id)"
    >
    <!-- 对用的同步方法才行 -->
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['catagtory', 'currentCatagtory'])
  },
  created () {
    this.$store.dispatch('catagtory/getCatagtory')
    console.log(this)
  }
}
</script>

<style>
</style>
