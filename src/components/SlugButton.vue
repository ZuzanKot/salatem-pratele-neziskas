<script setup>
const image = new URL('/src/assets/slug.png', import.meta.url)
</script>

<template>
    <button
        @click="$emit('clicked')"
        class="cursor-pointer"
        style="max-width: 200px"
    >
        <img :src="image.href" alt="Slimák" class="jello" />
    </button>
</template>

<style scoped>
.jello:hover {
    animation: jello 0.9s both;
}

@keyframes jello {
    0% {
        transform: scale3d(1, 1, 1);
    }
    30% {
        transform: scale3d(1.25, 0.75, 1);
    }
    40% {
        transform: scale3d(0.75, 1.25, 1);
    }
    50% {
        transform: scale3d(1.15, 0.85, 1);
    }
    65% {
        transform: scale3d(0.95, 1.05, 1);
    }
    75% {
        transform: scale3d(1.05, 0.95, 1);
    }
    100% {
        transform: scale3d(1, 1, 1);
    }
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
