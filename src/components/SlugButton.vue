<script setup>
const image = new URL('/src/assets/slug.png', import.meta.url)
</script>

<template>
    <button @click="$emit('clicked')" class="cursor-pointer">
        <img
            :src="image.href"
            alt="Slimák"
            class="jello z-10"
            style="max-width: 200px"
        />
    </button>
</template>

<style scoped>
.jello:hover {
    animation: jello 0.9s both;
}

img {
    max-width: 4rem;
}

@media (min-width: 548px) {
    img {
        max-width: 8rem;
    }
}

@media (min-width: 768px) {
    img {
        max-width: 12rem;
    }
}

@media (min-width: 1200px) {
    img {
        max-width: 16rem;
    }
}
</style>
