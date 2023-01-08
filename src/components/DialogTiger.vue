<script setup>
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import { computed, ref } from 'vue'

const numberOfTigerImages = 6
const currentTigerImage = ref(0)
//computed()
</script>

<template>
    <ResponsiveImage :src="`tigers${currentTigerImage}.png`" alt="" />
</template>
