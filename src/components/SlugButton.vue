<script setup>
const image = new URL('/src/assets/slug.png', import.meta.url)
</script>

<template>
    <button @click="$emit('clicked')" class="cursor-pointer">
        <img :src="image.href" alt="Slimák" />
    </button>
</template>
