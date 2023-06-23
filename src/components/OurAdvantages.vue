<template>
    <div v-motion-pop-visible>
        <div class="flex justify-between mb-2 mt-[120px]">
            <h2 class="text-[45px] leading-[130%] uppercase font-bold text-[#0D2344] lg2:text-[40px]">Наши <span class="text-[#F3970A]">Плюсы</span></h2>
            <img src="/img/f3.svg" alt="" class="lg2:max-w-[700px] lg4:hidden lg3:max-w-[670px]">
        </div>
        <div>
            <div class="inline-grid grid-cols-2 gap-[30px] max-w-[960px] mt-[44px] sm2:grid-cols-1">
                <div class="max-w-[430px] sm2:max-w-[700px]" v-for="(abouts, index) in about">
                    <h4 class="text-[22px] font-bold text-[#0D2344]">{{ abouts.title }}</h4>
                    <p class="text-[18px] font-medium text-[#0D2344]/[0.8]">{{ abouts.body }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const about = ref([
    {
        title: 'Расчет стоимости в секунды',
        body: 'Вы оставляете заявку на сайте, и мы вам перезвоним или вышлем письмо с ответом в течении 30* минут.'
    },
    {
        title: 'На связи круглосуточно',
        body: 'Если Вам нужно срочно узнать какую-либо информацию, Вы можете написать нам на почту до 19:30*.'
    },
    {
        title: 'Пропуски',
        body: 'Для нашего транспорта мы оформляем сомастоятельно пропуски до нужных пунктов сдачи.'
    },
    {
        title: 'Любая удобная форма оплаты',
        body: 'Оплачивайте заказ любым удобным для Вас способом по прибытии груза в пункт назначения.'
    }
])
</script>
