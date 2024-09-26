<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import svgBackground from './components/svgBackground.vue'
  import navbar from './components/navbar.vue'
  import footerComposant from './components/footer.vue'
</script>

<template>

  <svgBackground/>
  <div className="flex flex-col items-center">
    <header>
      <div class="wrapper">
        <navbar />
      </div>
    </header>
    
    <RouterView />

    <footerComposant />
    

  </div>

</template>
