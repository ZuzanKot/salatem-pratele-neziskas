<script setup>
import { onMounted, watch } from 'vue'
import { Howl } from 'howler'

const props = defineProps(['attack'])

watch(
    () => props.attack,
    (newValue) => {
        console.log('attack', newValue)
        if (newValue === true) {
            const sound = new Howl({
                src: ['/sound/attack.mp3'],
            })

            sound.play()
        }
    }
)

onMounted(() => {
    const sound = new Howl({
        src: ['/sound/bg.mp3'],
    })

    sound.play()
})
</script>

<template>
    <div></div>
</template>
