<script setup>
const image = new URL('/src/assets/big-slug.png', import.meta.url)
</script>

<template>
    <button @click="$emit('clicked')" class="cursor-pointer">
        <img :src="image.href" alt="Slimák" class="jello" />
    </button>
</template>

<style scoped>
.jello:hover {
    animation: jello 0.9s both;
}

img {
    max-width: 6rem;
}

@media (min-width: 548px) {
    img {
        max-width: 14rem;
    }
}

@media (min-width: 768px) {
    img {
        max-width: 18rem;
    }
}

@media (min-width: 1200px) {
    img {
        max-width: 24rem;
    }
}
</style>
