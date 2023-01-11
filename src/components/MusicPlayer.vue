<script setup>
import { ref, watch } from 'vue'
import { Howl } from 'howler'

const props = defineProps(['src', 'loop'])

const sound = ref(null)

watch(
    () => props.src,
    (newValue) => {
        if (sound.value) {
            sound.value.stop()
        }

        if (newValue) {
            sound.value = new Howl({
                src: [props.src],
                loop: props.loop,
                autoplay: true,
            })

            sound.value.play()
        } else {
            sound.value.stop()
        }
    }
)
</script>

<template>
    <div></div>
</template>
