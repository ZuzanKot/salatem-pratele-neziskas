<script setup>
import { ref } from 'vue'
import Intro from '@/components/Scene/Intro.vue'
import Cover from '@/components/Scene/Cover.vue'
import SceneContainer from '@/components/SceneContainer.vue'
import DialogOne from '@/components/Scene/DialogOne.vue'
import Garden from '@/components/Scene/Garden.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'

const currentScene = ref(0)

function nextScene() {
    currentScene.value++
}
</script>

<template>
    <main
        class="bg-black h-full p-0 sm:px-6 sm:py-6 flex justify-center items-center h-full"
    >
        <SceneContainer class="relative">
            <Transition mode="out-in">
                <Cover v-if="currentScene === 0" @next-scene="nextScene" />
            </Transition>
            <Transition>
                <Intro v-if="currentScene === 1" @next-scene="nextScene" />
            </Transition>
            <Transition>
                <DialogOne v-if="currentScene === 2" @next-scene="nextScene" />
            </Transition>
            <Transition>
                <Garden v-if="currentScene === 3" @next-scene="nextScene" />
            </Transition>
        </SceneContainer>
        <MusicPlayer :attack="currentScene === 3" />
    </main>
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 1s;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
