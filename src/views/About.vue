<template>
    <div class="max-w-[1170px] mx-auto mt-[120px] lg2:mx-5">
        <div class="text-center">
            <div class="bg-[url('/img/f13.png')] h-[319px] bg-no-repeat bg-cover bg-center">
            <h1 class="text-[#F3970A] text-[55px] font-extrabold py-[124px] sm2:py-[90px]">О НАШЕЙ КOМПАНИИ</h1>
        </div>
        </div>
        <div>
            <div class="inline-grid grid-cols-2 gap-[40px] mt-[78px] mb-[40px] sm2:grid-cols-1">
                <div class="max-w-[569px] sm2:max-w-[650px]">
                    <p class="text-[18px] font-medium text-[#0D2344]/[0.8]">Мы занимаемся транспортными перевозками по направлению ХМАО и ЯНАО более 18 лет. Знаем наизусть каждый километр дорог. Доставим ваш груз качественно и оперативно!</p>
                </div>
                <div class="max-w-[569px] sm2:max-w-[650px]">
                    <p class="text-[18px] font-medium text-[#0D2344]/[0.8]">Наша компания для грузоперевозок - это надежный партнер в сфере логистики. Мы предлагаем широкий спектр услуг, связанных с перевозками различных грузов, начиная от малогабаритных до крупногабаритных и тяжеловесных. </p>
                </div>
                <div class="max-w-[569px] sm2:max-w-[650px]">
                    <p class="text-[18px] font-medium text-[#0D2344]/[0.8]">Мы заботимся о наших клиентах и предоставляем индивидуальный подход к каждому заказу. Наша команда профессионалов готова оказать помощь в выборе оптимального маршрута и транспортного средства для перевозки вашего груза.</p>
                </div>
                <div class="max-w-[569px] sm2:max-w-[650px]">
                    <p class="text-[18px] font-medium text-[#0D2344]/[0.8]">Мы работаем только с проверенными перевозчиками, что гарантирует безопасность и своевременность доставки груза. Мы также предлагаем страхование груза, чтобы наши клиенты могли чувствовать себя уверенно и защищено в любых ситуациях.</p>
                </div>
            </div>
        </div>
        <hr class="border-solid border-2 border-[#FFB800]">
        <OurAdvantages />
        <Contact />
    </div>
</template>

<script setup>
import Contact from '../components/Contact.vue';
import OurAdvantages from '../components/OurAdvantages.vue';
</script>
