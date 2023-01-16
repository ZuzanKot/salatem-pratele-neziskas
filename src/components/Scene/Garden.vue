<script setup>
import { onMounted, ref, watch } from 'vue'
import { Howl } from 'howler'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import SceneContainer from '@/components/SceneContainer.vue'
import SlugButton from '@/components/SlugButton.vue'
import BigSlugButton from '@/components/BigSlugButton.vue'

const clickSound = new URL('/src/assets/sound/click.mp3', import.meta.url)

const emit = defineEmits(['nextScene'])
const slugs = ref([])
const bigSlug = ref(false)

const handleSlug = (id) => {
    slugs.value = slugs.value.map((slug) => {
        if (slug.id === id) {
            slug.active = false
        }
        return slug
    })
    playSound()
}

const handleBigSlug = (event) => {
    let button = event.target

    if (button.tagName === 'IMG') {
        button = button.parentElement
    }

    button.classList.remove('slide-in')
    button.classList.add('roll-out')

    playSound()

    setTimeout(() => {
        emit('nextScene')
    }, 1200)
}

const randomIntFromInterval = (min, max) => {
    return Math.random() * (max - min) + min
}

const playSound = () => {
    const sound = new Howl({
        src: clickSound.href,
        loop: false,
        autoplay: true,
    })

    sound.play()
}

onMounted(() => {
    for (let i = 0; i < 8; i++) {
        slugs.value.push({
            id: i,
            active: true,
            x: randomIntFromInterval(0, 45),
            y: randomIntFromInterval(0, 25),
            size: randomIntFromInterval(0.7, 1),
        })
    }
})

watch(
    () => slugs,
    () => {
        if (slugs.value.filter((slug) => slug.active).length === 0) {
            setTimeout(() => {
                bigSlug.value = true
            }, 1000)
        }
    },
    {
        deep: true,
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
                <BigSlugButton
                    v-if="bigSlug"
                    class="absolute inset-1/2 slide-in z-10"
                    @click="handleBigSlug($event)"
                />
                <div
                    v-for="slug in slugs"
                    class="h-full w-full relative z-0"
                    :key="slug.id"
                >
                    <SlugButton
                        class="heartbeat absolute"
                        :class="{
                            'roll-out': !slug.active,
                            'z-20': slug.id === 0,
                        }"
                        :style="{
                            top: `${slug.y}%`,
                            left: `${slug.x}%`,
                            transform: 'scale(' + slug.size + ')',
                        }"
                        @click="handleSlug(slug.id)"
                    />
                </div>
            </div>
        </SceneContainer>
    </SceneContainer>
</template>
