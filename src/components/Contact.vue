<template>
    <div class="max-w-[1170px] mx-auto mt-[120px]">
        <div class="flex justify-between" v-motion-pop-visible>
            <img src="/img/f3.svg" alt="" class="rotate-[-180deg]">
            <h2 class="text-[50px] leading-[130%] uppercase font-bold text-[#0D2344]">Контакты</h2>
        </div>
        <div class="mt-[40px] max-w-[551px] mx-auto text-center" v-motion-pop-visible>
            <h3 class="text-[45px] font-bold text-[#F39F30] leading-[130%]">Остались вопросы <p class="text-[#0D2344]">и не знаете как быть ?</p></h3>
            <p class="mt-[15px] text-[20px] text-[#0D2344]/[0.8] leading-[130%] mb-[50px]">
                Напишите нам <a href="mailto:magnum_logistic@mail.ru">magnum_logistic@mail.ru</a> или оставьте заявку, и мы полностью проконсультируем вас по всем вашим вопросам.
            </p>
        </div>
        <section class="bg-white dark:bg-gray-900 rounded-3xl" v-motion-pop-visible>
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <form action="#">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="w-full">
                            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Имя</label>
                            <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ваше имя" required="">
                        </div>
                        <div class="w-full">
                            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Email address" required="">
                        </div>
                        <div class="w-full">
                            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Телефон</label>
                            <input type="tel" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="+7(999)599-99-45" required="">
                        </div>
                        <div class="w-full">
                            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Компания</label>
                            <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Названия компании" required="">
                        </div>
                        <div class="sm:col-span-2">
                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Сообщения</label>
                            <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Напишите ваш вопрос."></textarea>
                        </div>
                    </div>
                    <button class="text-[17px] text-white text-center bg-[#FFB800] rounded-[12px] py-5 px-[271px] mt-5 hover:bg-[#FFCA42]">Отправить</button>
                </form>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>
