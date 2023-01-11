<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['action'])

const currentTiger = ref(0)

const images = [
    'tigers0.png',
    'tigers1.png',
    'tigers2.png',
    'tigers3.png',
    'tigers4.png',
    'tigers5.png',
]

const mainSrc = ref(new URL('/src/assets/scenes/tigers0.png', import.meta.url))
const smSrc = ref(new URL('/src/assets/scenes/sm/tigers0.png', import.meta.url))
const mdSrc = ref(new URL('/src/assets/scenes/md/tigers0.png', import.meta.url))
const lgSrc = ref(new URL('/src/assets/scenes/lg/tigers0.png', import.meta.url))

watch(
    () => props.action,
    () => {
        if (currentTiger.value < 5) {
            currentTiger.value++
        } else {
            currentTiger.value = 0
        }

        mainSrc.value = new URL(
            `/src/assets/scenes/${images[currentTiger.value]}`,
            import.meta.url
        )
        smSrc.value = new URL(
            `/src/assets/scenes/sm/${images[currentTiger.value]}`,
            import.meta.url
        )
        mdSrc.value = new URL(
            `/src/assets/scenes/md/${images[currentTiger.value]}`,
            import.meta.url
        )
        lgSrc.value = new URL(
            `/src/assets/scenes/lg/${images[currentTiger.value]}`,
            import.meta.url
        )
    }
)
</script>

<template>
    <img
        :src="mainSrc.href"
        :srcset="`
        ${smSrc.href}
        768w,
        ${mdSrc.href}
        1200w,
        ${lgSrc.href}
        1400w`"
        alt=""
    />
</template>
