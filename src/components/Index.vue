<template>
  <div>
    <h3>Index Page</h3>
    <p>{{ $store.state.count }}</p>
    <button @click="$store.commit('increment')">+</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>