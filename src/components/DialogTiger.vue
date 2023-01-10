<script setup>
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import { ref, watch } from 'vue'

const props = defineProps(['action'])

const currentTigerImage = ref(0)

watch(
    () => props.action,
    () => {
        if (currentTigerImage.value < 5) {
            currentTigerImage.value++
        } else {
            currentTigerImage.value = 0
        }
    }
)
</script>

<template>
    <ResponsiveImage :src="`tigers${currentTigerImage}.png`" alt="" />
</template>
