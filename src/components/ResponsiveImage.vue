<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
})

const mainSrc = new URL(`/src/assets/scenes/${props.src}`, import.meta.url)
const smSrc = new URL(`/src/assets/scenes/sm/${props.src}`, import.meta.url)
const mdSrc = new URL(`/src/assets/scenes/md/${props.src}`, import.meta.url)
const lgSrc = new URL(`/src/assets/scenes/lg/${props.src}`, import.meta.url)
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
        :alt="props.alt"
    />
</template>
