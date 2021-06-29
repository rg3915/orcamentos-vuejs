<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://rg3915.github.io/orcamentos-vuejs/" target="_blank">Orçamentos</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}}</span>
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Powered by</span>
      <a href="https://rg3915.github.io/orcamentos-vuejs/">rg3915</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
