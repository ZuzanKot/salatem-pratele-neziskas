<script setup>
import { onMounted, ref } from 'vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import SceneContainer from '@/components/SceneContainer.vue'

const texts = [
    'Tak už nás to taky doběhlo. I když jsme se fakt snažili. Šetřili jsme kde to šlo, stěhovali se do menších a menších bytů, až nakonec žádný byty nezbyly. A ty co zbyly, tak na ně byl pořadník. Řešil se sociální status, museli jste být prověřený skrz naskrz a mohlo to trvat několik týdnů. A čas jsou peníze a peníze jsou postel a střecha nad hlavou a to jsme neměli.',
    'Začali jsme hledat možnosti mimo město. Kamarád nám doporučil rozhlédnout se po nebytových jednotkách. Trochu nás to dostalo, byli jsme zvyklí bydlet ve velkých domech na hlavní ulici plný ruchu a obchodů. Ale hledali jsme a celkem rychle se nám podařilo objevit vhodný místo v zahrádkářský kolonii.',
    'Do zahrádkářské kolonie jsme se nastěhovali zkraje jara. Což je ještě takovej ten čas, kdy je ráno lehká jinovatka, ale už to voní čerstvou trávou a přes den slunce hodně hřeje, když na něj počkáš a necháš ho na sebe svítit.',
    'Je to tu hodně hezký. Máme malej dřevěnej domek s prosklenou verandou, na kterou svítí ráno slunce a dáváme si tu ranní kafe. Kafe vaříme ve starý mokakonvičce na dvojplotýnce. Máme i maličký zelený kamna.',
    'Dalo by se říct, že jsme šťastní, nic nám nechybí, ale začali jsme trpět nespavostí. Asi nás dohnal stres z hledání bydlení a velká proměna prostředí toho, co jsme byli zvyklí a toho, kdo jsme byli.',
    'Došlo nám, že je to všechno o přizpůsobivosti. A tak jsme se rozhodli přizpůsobit ročnímu období a zasadit salát a zeleninu. Stát se zahradníky a pečovat o zahradu, jako pečujem o sebe.',
    'Jediným problémem se ale ukázali škůdci, co maj zeleninu asi stejně rádi jako my. Ale my jsme přizpůsobiví a trpíme nespavostí, tak jsme se rozhodli vyřešit problém se škůdci noční hlídkou u ohně.',
]

const emit = defineEmits(['nextScene'])

const spaceHandler = function (e) {
    if (e.keyCode === 32) {
        nextAction()
    }
}

onMounted(() => {
    document.addEventListener('keydown', spaceHandler)
})

const currentAction = ref(0)

function nextAction() {
    if (currentAction.value < texts.length - 1) {
        currentAction.value++
    } else {
        emit('nextScene')
    }
}
</script>

<template>
    <SceneContainer class="absolute" @click="nextAction">
        <SceneContainer
            class="relative flex w-auto max-w-full items-center justify-content-center"
        >
            <ResponsiveImage
                src="intro-bg.png"
                alt=""
                class="absolute max-h-full cursor-pointer"
            />
            <p
                class="text-xs sm:text-md md:text-xl xl:text-3xl 2xl:text-5xl z-10 cursor-pointer px-2 text-primary drop-shadow-primary sm:px-6 lg:px-12"
            >
                {{ texts[currentAction] }}
            </p>
        </SceneContainer>
    </SceneContainer>
</template>
