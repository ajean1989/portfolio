<script setup lang="ts">

    import { ref } from 'vue'
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const currentURI = computed(() => route.fullPath); // Obtenir l'URI complète

    console.log("aaa")

    console.log(currentURI)

    const navbar = ref({
        "/about" : ["/experiences", "/contact"],
        "/experiences" : ["/contact", "/about"],
        "/contact" : ["/about", "/experiences"]
    })

</script>

<template>
    <nav>
        <ul className=" flex justify-around w-screen font-custom2 mt-10 text-xl tracking-wideest">
            <li v-for="i in navbar[currentURI]">
                <RouterLink :to=i>{{ i.toUpperCase().slice(1) }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>