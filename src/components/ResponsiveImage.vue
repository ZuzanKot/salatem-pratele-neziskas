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
</script>

<template>
    <img
        :src="`/scenes/${props.src}`"
        :srcset="`
        /scenes/sm/${props.src}
        768w,
        /scenes/md/${props.src}
        1200w,
        /scenes/lg/${props.src}
        1400w`"
        :alt="props.alt"
    />
</template>
