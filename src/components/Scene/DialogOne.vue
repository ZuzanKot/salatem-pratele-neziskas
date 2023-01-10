<script setup>
import { onMounted, ref } from 'vue'
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
            'No to mi povídej, já zas celej den nakládal ředkvičky, abys je mohl jíst a zpracovával květáky, a to je furt zrnko písku sem, zrnko písku tam, tu nějakej mikrošnek pod listem.',
    },
    {
        tiger: 2,
        message:
            'Raději jsem pak upek čokoládovej dort podle nějakýho švédskýho receptu, tam žádnej písek nebyl.',
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

const branchOneTexts = [
    {
        tiger: 1,
        message:
            'Nojo, to já se jen tak ujišťuju. Ale to by se ve městě fakt nestalo, slimáci, si to představ!',
    },
    {
        tiger: 2,
        message:
            'Si teď představuju, jak se ti slimáci plazej po Karlově mostě a po všech těch sochách tam, haha, grr grr.',
    },
    {
        tiger: 1,
        message:
            'Ale zas by tam asi neměli moc co okusovat, nebo myslíš, že by prošli evolucí a začali by okusovat domy?',
    },
    {
        tiger: 2,
        message:
            'Ježiš, to snad ne, ty jsi vtipnej. Ale když to říkáš, tak by třeba fakt prošli evolucí, ale nezačli by jíst domy,',
    },
    {
        tiger: 2,
        message:
            'ale ty domy by začaly nosit na zádech, každej slimák v skrytu duše touží bejt šnekem, haha, grr grr.',
    },
    {
        tiger: 1,
        message: 'Haha. Ale někdy to musí bejt praktický, mít dům všude sebou.',
    },
    {
        tiger: 2,
        message: 'Jo, vyřešila by se tim bytová krize.',
    },
]

const branchTwoTexts = [
    {
        tiger: 1,
        message:
            'Ale prosimtě, vždyť jsem ti o tom už říkal, proč myslíš, že jsem připravil ten piknikovej koš a deky?',
    },
    {
        tiger: 2,
        message: 'Tak já myslel, že si děláme prostě hezkej večer.',
    },
    {
        tiger: 1,
        message:
            'Ale to se fakt nevylučuje, ber to jako hru! To sis jako malej nikdy nepostavil bunkr když šli rodiče spát a neponocoval s baterkou vevnitř?',
    },
    {
        tiger: 2,
        message:
            'Máš pravdu, to jsem dělal. A my jsme teď jakože v zahrádkovym bunkru?',
    },
    {
        tiger: 1,
        message:
            'Přesně tak a máme důležitou misi ochránit saláty, aby nezbyly jen ředkvičky, to by bylo fakt hrozný! ',
    },
    {
        tiger: 2,
        message:
            'Neboj, já ty ředkvičky dneska naložil a jsou fakt dobrý, vůbec nepálej, zejtra ti z nich udělám nejlepší sendvič, co jsi kdy měl!',
    },
    {
        tiger: 1,
        message: 'Nejlepší sendvič co obsahuje ředkvičky? To zní jako výzva. ',
    },
    {
        tiger: 2,
        message:
            'Budeš koukat, co s nima dovedu! I Gordon Ramsay by si ho s chutí dal.',
    },
    {
        tiger: 1,
        message: 'Král sendvičů!',
    },
    {
        tiger: 2,
        message: 'A pak bychom tu s nima mohli rozjet byznys.',
    },
    {
        tiger: 1,
        message: 'Sendvičovej catering u vody.',
    },
    {
        tiger: 2,
        message: 'Sendviče ze zahrádkářský kolonie zní fakt megakůl.',
    },
]

let partTwoTexts = []

const partThreeTexts = [
    {
        tiger: 1,
        message:
            'Hele, slyšels to? Jsem měl pocit, že slyšim něco se tu plížit.',
    },
    {
        tiger: 2,
        message:
            'Jo, znělo to ale jen jako šustění trávy, je už zas docela suchá.',
    },
    {
        tiger: 1,
        message: 'A zároveň tu je slyšet fakt hodně různejch piditvorů.',
    },
    {
        tiger: 2,
        message:
            'Tak tady nejsme ve městě, tady všechno nějak žije a má svůj zvuk. Grr grr.',
    },
    {
        tiger: 1,
        message:
            'To máš asi pravdu. To je něco, v čem je město předvídatelný, v zadržování drobnejch zvuků.',
    },
    {
        tiger: 2,
        message:
            'Ale zas je to tam fakt hlasitý, zvlášť když bydlíš na hlavní ulici, to se ti pak třese celá postel.',
    },
    {
        tiger: 1,
        message: 'A je fakt, že ten noční čas tam bejvá dost hustej.',
    },
    {
        tiger: 2,
        message:
            'Hele, ale koukej, ten hluk byla jen naše kočka, asi se s náma chtěla hřát u ohně.\n',
    },
    {
        tiger: 1,
        message:
            'Tak vida! Ale i tak, nahnalo mi to trochu strach. Dostal jsem z toho chuť na nějaký příběh, nemáš něco po tlapě?',
    },
    {
        tiger: 2,
        message: 'No něco by mě určitě napadlo.',
    },
    {
        tiger: 1,
        message: 'Jdi na to Tygře!',
    },
    {
        tiger: 2,
        message: 'No tak já jsem znal jednoho týpka, říkejme mu Béďa.',
    },
    {
        tiger: 2,
        message:
            'Ten žil ve stanu v Letňanech. Nemusel, prostě jen chtěl, přišlo mu to dobrodružný a moc věcí ho na světě štvalo.',
    },
    {
        tiger: 2,
        message:
            'Nevim, my jsme hlavně pili pivo a hráli karty. Tak jsem za ním jednou šel a už byla vlastně tma a já ho nemoh najít, protože ono to neni tak snadný,',
    },
    {
        tiger: 2,
        message:
            'těch stanů je víc a často jsou v pohybu. Ale já se nevzdával, říkal jsem si, že to pivo nebudu přece pít sám, a že už tu přece jen jsem,',
    },
    {
        tiger: 2,
        message:
            'tak jsem hledal dál. A znáš to, je tma, praskaj větvičky a šustí stany, stíny se hejbou, začneš si domejšlet věci. Grr grr.',
    },
    {
        tiger: 2,
        message:
            'A najednou jsem zaslechl takovej hrozně divnej zvuk, bylo to trochu jako houkání sanitky, ale zároveň to nebyl stroj, to mi bylo jasný.',
    },
    {
        tiger: 2,
        message:
            'Chtěl jsem hned odejít, ale jak už to bejvá, tak jsem samozřejmě upad a to už jsem měl fakt nahnáno a začaly se blížit kroky a pak se objevila i postava.',
    },
    {
        tiger: 2,
        message:
            'Ale nakonec se ukázalo, že to byl jen Béďa, co našel kotě a tak mu trochu pobrukoval, ale říkám ti, že to bylo fakt divný. Grr grr.',
    },
    {
        tiger: 2,
        message:
            'No nicméně to je příběh o tom, jak jsme přišli ke kočce, protože Béďa ji pak už nechtěl, moc práce prej.',
    },
    {
        tiger: 1,
        message:
            'Hele, jako dobrý, já Béďu taky znám, však jsme u něj byli párkrát spolu, ale řeknu ti, že jako strašidelná historka to není nic moc.\n',
    },
    {
        tiger: 2,
        message:
            'No to říkáš teď, ale tys tam nebyl, tma v Letňanech mezi stany neni žádná legrace, no fakt. A ty máš snad nějakou spooky historku? Grr grr.',
    },
    {
        tiger: 1,
        message:
            'Počkej, zkusim si na nějakou vzpomenout, ale asi mě jen napadá příběh o tom, jak mi mizely pruhy.',
    },
    {
        tiger: 2,
        message: 'Tobě mizely pruhy? To zní strašně!',
    },
    {
        tiger: 1,
        message:
            'Bylo to, když jsem byl ještě malej a ještě jsem na sobě neměl všechny pruhy, protože ty dorůstaj, ale to ti nemusim říkat.',
    },
    {
        tiger: 1,
        message:
            'U nás doma se tradovalo, že mezi čtvrtym a pátym rokem se to zlomí a tobě všechny pruhy dorostou a pak už se z tebe stává Ten tygr.',
    },
    {
        tiger: 1,
        message:
            'Je to velká věc, pořádá se pak pruhovaná slavnost, celá rodina se sejde, dostaneš pruhovanej dres a dort a jsou tam lampiony, je to skvělý.',
    },
    {
        tiger: 1,
        message:
            'No ale mně, když mi začalo táhnout na pátej rok, tak mi začaly mizet pruhy. Nikdo moc nechápal, co se děje,',
    },
    {
        tiger: 1,
        message:
            'ale moje babička, která je trochu pověrčivá, a která s náma v tý době bydlela, se začala bát, že se ze mě stane puma',
    },
    {
        tiger: 1,
        message:
            'a víš, jak to mezi tygry a pumami vře, grr grr. Tak našim doporučila, ať mě zamknou v pokoji',
    },
    {
        tiger: 1,
        message:
            'a zatim mi vařila hořkej výluh z bylin, že prej to obnoví pruhovanej růst. A nikdo nic nenamítal.',
    },
    {
        tiger: 1,
        message:
            'Já naštěstí dost brzo našel svoje pruhy, jak se schovávaj ve skříni, takže nakonec byla i slavnost a nikdo už pak o tom nemluvil, ale občas na to myslim.',
    },
    {
        tiger: 2,
        message:
            'Tyjo, to zní, že sis prožil pěkný trauma, to je mi moc líto. A dík, že to se mnou sdílíš, grr grr',
    },
    {
        tiger: 1,
        message:
            'To je samozřejmý, cejtim se s tebou v bezpečí a máme hezkej večer, plnej tepla. Ale když zmiňuju to bezpečí, tak už možná nastal čas, zkontrolovat saláty.',
    },
    {
        tiger: 1,
        message: 'Takjo, vemu kýbl a jdem na to!',
    },
]
const spaceHandler = function (e) {
    if (e.keyCode === 32) {
        nextAction()
    }
}

const chooseBranch = function (branch) {
    currentBranch.value = branch
    showChoice.value = false
    partTwoTexts = branch === 1 ? branchOneTexts : branchTwoTexts
    partTwo.value = true
}

onMounted(() => {
    document.addEventListener('keydown', spaceHandler)
})

const currentActionFirstPart = ref(0)
const currentActionSecondPart = ref(0)
const currentActionThirdPart = ref(0)
const action = ref(0)
const currentTiger = ref(1)
const showChoice = ref(false)
const currentBranch = ref(null)
const partOne = ref(true)
const partTwo = ref(false)
const partThree = ref(false)
const message = ref(introTexts[0].message)

function handleFirstPart() {
    if (currentActionFirstPart.value < introTexts.length - 1) {
        currentActionFirstPart.value++
        message.value = introTexts[currentActionFirstPart.value].message
        currentTiger.value = introTexts[currentActionFirstPart.value].tiger
    } else {
        partOne.value = false
        showChoice.value = true
        message.value = ''
    }
}

function handleSecondPart() {
    if (currentActionSecondPart.value < partTwoTexts.length) {
        message.value = partTwoTexts[currentActionSecondPart.value].message
        currentTiger.value = partTwoTexts[currentActionSecondPart.value].tiger
        currentActionSecondPart.value++
    } else {
        partTwo.value = false
        partThree.value = true
    }
}

function handleThirdPart() {
    if (currentActionThirdPart.value < partThreeTexts.length) {
        message.value = partThreeTexts[currentActionThirdPart.value].message
        currentTiger.value = partThreeTexts[currentActionThirdPart.value].tiger
        currentActionThirdPart.value++
    } else {
        partThree.value = false
        emit('nextScene')
    }
}

// TODO: refactor!
function nextAction() {
    if (partOne.value === true) {
        handleFirstPart()
        action.value++
    } else if (partTwo.value === true) {
        handleSecondPart()
        action.value++
    } else if (partThree.value === true) {
        handleThirdPart()
        action.value++
    }
}
</script>

<template>
    <SceneContainer class="absolute cursor-pointer" @click="nextAction">
        <div class="flex-col justify-start">
            <DialogTiger :action="action" />
            <DialogBox>
                <p
                    v-show="message"
                    class="py-3 text-sm sm:text-md lg:text-xl z-10 cursor-pointer px-2 text-primary sm:px-6 lg:px-12"
                    :class="{
                        'text-right': currentTiger === 2,
                        'text-dark': currentTiger === 2,
                    }"
                >
                    {{ message }}
                </p>
                <ul
                    v-show="showChoice"
                    class="list-disc py-3 text-xs sm:text-md lg:text-xl z-10 cursor-pointer px-2 sm:px-6 lg:px-12 text-dark space-y-2 flex flex-col items-end"
                >
                    <li>
                        <button
                            class="block hover:underline relative choice-button animate-pulse"
                            @click="chooseBranch(1)"
                        >
                            No jasně, slyšel, však kvůli tomu děláme tu hlídku,
                            ne?
                        </button>
                    </li>
                    <li>
                        <button
                            class="block hover:underline relative choice-button animate-pulse"
                            @click="chooseBranch(2)"
                        >
                            Cože, to existuje? No počkej a co jako s tím?
                        </button>
                    </li>
                </ul>
            </DialogBox>
        </div>
    </SceneContainer>
</template>
