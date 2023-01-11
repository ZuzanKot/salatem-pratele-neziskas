<script setup>
import { onMounted, ref } from 'vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import SceneContainer from '@/components/SceneContainer.vue'
import SlugButton from '@/components/SlugButton.vue'

const bgImage = ref()
const containerWidth = ref('')
const containerHeight = ref('')

const getRandomNumber = function (min, max) {
    return Math.random() * (max - min) + min
}

const handleSlug = function () {
    console.log('slug clicked')
}

onMounted(() => {
    bgImage.value = document.getElementById('bg-image')

    containerWidth.value = bgImage.value.clientWidth
    containerHeight.value = bgImage.value.clientHeight

    window.addEventListener('resize', () => {
        containerWidth.value = bgImage.value.clientWidth
        containerHeight.value = bgImage.value.clientHeight
    })

    document.querySelector('button').style.top =
        getRandomNumber(0, containerHeight) + 'px'
    document.querySelector('button').style.left =
        getRandomNumber(0, containerWidth) + 'px'
})
</script>

<template>
    <SceneContainer class="absolute">
        <SceneContainer
            class="relative flex w-auto max-w-full items-center justify-content-center"
        >
            <ResponsiveImage
                id="bg-image"
                src="garden.png"
                alt=""
                class="absolute max-h-full"
            />
            <SlugButton
                v-for="i in 6"
                :key="i"
                class="z-10 heartbeat absolute"
                @clicked="handleSlug"
            />
        </SceneContainer>
    </SceneContainer>
</template>

<style scoped>
.heartbeat {
    animation: heartbeat 1s ease-in-out both;
}

@keyframes heartbeat {
    from {
        transform: scale(1);
        animation-timing-function: ease-out;
    }
    10% {
        transform: scale(0.91);
        animation-timing-function: ease-in;
    }
    17% {
        transform: scale(0.98);
        animation-timing-function: ease-out;
    }
    33% {
        transform: scale(0.87);
        animation-timing-function: ease-in;
    }
    45% {
        transform: scale(1);
        animation-timing-function: ease-out;
    }
}
</style>
