<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import svgBackground from './components/svgBackground.vue'

</script>

<template>

  <svgBackground/>
  <div className="flex flex-col items-center">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    
    <RouterView />

    
    <footer className="w-screen h-36 mt-20 overflow-hidden">
      <div id="footer-style">
        <div className="flex flex-col items-center font-custom1">
          <ul className="flex">
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
          <p className="text-[#515d64]">
            ©2024 Adrien Jacquenet, All rights reserved.
          </p>
        </div>
      </div>
    </footer>

  </div>

</template>
