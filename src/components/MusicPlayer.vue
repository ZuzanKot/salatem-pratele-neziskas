<script setup>
import { onMounted, watch } from 'vue'
import { Howl } from 'howler'

const props = defineProps(['attack'])

const attackPath = new URL('/src/assets/sound/attack.mp3', import.meta.url)
const bgPath = new URL('/src/assets/sound/bg.mp3', import.meta.url)

watch(
    () => props.attack,
    (newValue) => {
        if (newValue === true) {
            const sound = new Howl({
                src: [attackPath.href],
            })

            sound.play()
        }
    }
)

onMounted(() => {
    const sound = new Howl({
        src: [bgPath.href],
    })

    sound.play()
})
</script>

<template>
    <div></div>
</template>
