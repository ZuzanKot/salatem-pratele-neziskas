<script setup>
import { onMounted } from 'vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import SceneContainer from '@/components/SceneContainer.vue'
const emit = defineEmits(['nextScene'])

const spaceHandler = function (e) {
    if (e.keyCode === 32) {
        emit('nextScene')
    }
}
onMounted(() => {
    document.addEventListener('keydown', spaceHandler)
})
</script>

<template>
    <SceneContainer class="absolute">
        <ResponsiveImage
            src="cover.png"
            alt=""
            class="cursor-pointer"
            @keyup.enter="$emit('nextScene')"
            @click="() => $emit('nextScene')"
        />
    </SceneContainer>
</template>
