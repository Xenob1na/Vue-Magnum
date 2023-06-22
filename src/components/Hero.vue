<template>
    <div class="max-w-[1170px] mx-auto flex justify-between lg2:px-5 lg3:justify-center lg3:text-center lg3:max-w-[700px]" >
        <div class="max-w-[572px] mt-[110px] lg3:max-w-[800px]" v-motion-pop-visible>
            <div>
                <h1 class="font-bold text-[55px] uppercase leading-[130%] text-[#0D2344] mb-[14px]">Грузоперевозки <span class="text-[#F3970A]">по ХМАО и ЯНАО</span></h1>
                <p class="font-medium text-[20px] leading-[130%] text-[#0D2344]/[0.8] max-w-[528px] mb-[27px] lg3:max-w-[650px]">Мы занимаемся транспортными перевозками по направлению ХМАО и ЯНАО более 18 лет. Знаем наизусть каждый километр дорог. Доставим ваш груз качественно и оперативно!</p>
            </div>
            <div class="max-w-[370px] flex justify-between lg3:gap-3 lg3:max-w-[600px] lg3:justify-center" v-motion-pop-visible>
                <button class="text-[16px] text-white text-center bg-[#FFB800] rounded-[12px] py-5 px-[30px] hover:bg-[#FFCA42]" @click="() => TogglePopup('Calculate') ">Расчитать стоимость</button>
                <button class="text-[#FFB800] border-solid border-2 border-[#FFB800] px-[17px] py-4 rounded-[12px] hover:bg-[#FFB800] hover:text-white" @click="() => TogglePopup('Order') ">Заказать</button>
            </div>
        </div>
        <div class="mt-[30px] lg3:hidden" v-motion-pop-visible>
            <img src="/img/f1.png" alt="">
        </div>
    </div>
    <ModalOrder 
    v-if="Modal.Order"
    :TogglePopup="() => TogglePopup('Order') "
    />
    <ModalCalculate 
    v-if="Modal.Calculate"
    :TogglePopup="() => TogglePopup('Calculate') "
    />
</template>

<script setup>
import { ref } from 'vue';
import ModalOrder from './UI/ModalOrder.vue';
import ModalCalculate from './UI/ModalCalculate.vue';
const Modal = ref({
    Order: false,
    Calculate: false
})

const TogglePopup = (trigger) => {
    Modal.value[trigger] = !Modal.value[trigger]
}
</script>
