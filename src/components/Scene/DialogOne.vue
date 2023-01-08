<script setup>
import { onMounted, ref } from 'vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import SceneContainer from '@/components/SceneContainer.vue'
import DialogBox from '@/components/DialogBox.vue'
import DialogTiger from '@/components/DialogTiger.vue'
const emit = defineEmits(['nextScene'])

const introTexts = [
    {
        tiger: 1,
        message:
            'To byl zase den. Jsem hrozně unavenej, celej den jsem jednotil saláty a vytrhával plevel a odháněl kočky, který se chodily rozvalovat do hlíny.',
    },
    {
        tiger: 2,
        message:
            'No to mi povídej, já zas celej den nakládal ředkvičky, abys je mohl jíst a zpracovával květáky, a to je furt zrnko písku sem, zrnko písku tam, tu nějakej mikrošnek pod listem. Raději jsem pak upek čokoládovej dort podle nějakýho švédskýho receptu, tam žádnej písek nebyl.',
    },
    {
        tiger: 1,
        message: 'Byl to ale znamenitej koláč, díky za něj!',
    },
    {
        tiger: 2,
        message: 'Jojojo, grr grr.',
    },
    {
        tiger: 1,
        message:
            'Jsem fakt rád, že si můžem dát pivo, zároveň asi ne moc, musíme furt pokukovat po těch salátech, slyšels o tom, že tu jsou totálně přemnožení slimáci?',
    },
]
const spaceHandler = function (e) {
    if (e.keyCode === 32) {
        nextAction()
    }
}

onMounted(() => {
    document.addEventListener('keydown', spaceHandler)
})

const currentAction = ref(0)
const currentTiger = ref(1)
const currentBranch = ref(null)
const message = ref(introTexts[0].message)

function nextAction() {
    if (currentBranch.value === null) {
        currentAction.value++
        message.value = introTexts[currentAction.value].message
    } else if (currentAction.value < introTexts.length - 1) {
        currentAction.value++
    } else {
        //  emit('nextScene')
    }
}
</script>

<template>
    <SceneContainer class="absolute cursor-pointer" @click="nextAction">
        <div class="flex-col justify-start">
            <DialogTiger />
            <DialogBox>
                <p
                    class="py-3 text-sm sm:text-md lg:text-xl xl:text-3xl 2xl:text-5xl z-10 cursor-pointer px-2 text-primary drop-shadow-primary sm:px-6 lg:px-12"
                >
                    {{ message }}
                </p>
            </DialogBox>
        </div>
    </SceneContainer>
</template>
