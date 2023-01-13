<script setup>
import { onMounted, ref, watch } from 'vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import SceneContainer from '@/components/SceneContainer.vue'
import SlugButton from '@/components/SlugButton.vue'

const emit = defineEmits(['nextScene'])
const slugs = ref([])

const handleSlug = (id) => {
    slugs.value = slugs.value.map((slug) => {
        if (slug.id === id) {
            slug.active = false
        }
        return slug
    })
}

const randomIntFromInterval = (min, max) => {
    return Math.random() * (max - min) + min
}

onMounted(() => {
    for (let i = 0; i < 8; i++) {
        slugs.value.push({
            id: i,
            active: true,
            x: randomIntFromInterval(0, 45),
            y: randomIntFromInterval(0, 45),
            size: randomIntFromInterval(0.7, 1),
        })
    }
})

watch(
    () => slugs,
    () => {
        if (slugs.value.filter((slug) => slug.active).length === 0) {
            emit('nextScene')
        }
    }
)
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
            <div
                class="grid grid-cols-3 gap-4 place-items-stretch w-full h-full"
            >
                <div
                    v-for="slug in slugs"
                    class="h-full w-full relative"
                    :key="slug.id"
                >
                    <SlugButton
                        class="z-10 heartbeat absolute"
                        :class="{
                            'roll-out': !slug.active,
                        }"
                        :style="{
                            top: `${slug.y}%`,
                            left: `${slug.x}%`,
                            transform: 'scale(' + slug.size + ')',
                        }"
                        @clicked="handleSlug(slug.id)"
                    />
                </div>
            </div>
        </SceneContainer>
    </SceneContainer>
</template>

<style scoped>
.heartbeat {
    animation: heartbeat 1s ease-in-out 3 both;
}

.roll-out {
    animation: roll-out 0.6s ease-in both;
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

@keyframes roll-out {
    0% {
        transform: translateX(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateX(-1000px) rotate(-540deg);
        opacity: 0;
        display: none;
    }
}
</style>
