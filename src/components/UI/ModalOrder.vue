<template>
    <div>
        <div class="modal fixed z-[1] left-0 top-0 w-[100%] h-[100%] pt-[50px]">
			<div class="bg-gray-900 w-[30%] rounded-[5px] mx-auto  lg2:w-[60%]  sm3:w-[80%]">
				<div class="container">
                    <span class="close text-[#aaa] float-right text-[28px] mb-[30px] font-semibold" @click="TogglePopup()">&times;</span>
                    <form action="#" class="mt-10">
                      <div class="grid gap-3 sm:grid-cols-2 sm:gap-6">
                          <div class="w-full">
                              <label for="brand" class="block mb-2 text-sm font-medium text-white">Имя</label>
                              <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ваше имя" required="">
                          </div>
                          <div class="w-full">
                              <label for="brand" class="block mb-2 text-sm font-medium text-white ">Email</label>
                              <input type="email" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Email address" required="">
                          </div>
                          <div class="w-full">
                              <label for="brand" class="block mb-2 text-sm font-medium text-white ">Телефон</label>
                              <input type="tel" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="+7(999)599-99-45" required="">
                          </div>
                          <div>
                              <label for="category" class="block mb-2 text-sm font-medium text-white ">Категория</label>
                              <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                  <option selected="">Выберите категорию</option>
                                  <option value="TV">Доставка сборным грузом</option>
                                  <option value="PC">Перевозка негабаритных грузов</option>
                                  <option value="GA">Перевозки автотранспортом по ХМАО и ЯНАО</option>
                              </select>
                          </div>
                          <div class="sm:col-span-2">
                              <label for="description" class="block mb-2 text-sm font-medium text-white ">Сообщения</label>
                              <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Напишите ваш вопрос."></textarea>
                          </div>
                      </div>
                      <button class="text-[17px] text-white text-center bg-[#FFB800] rounded-[12px] py-5 px-3 mt-5 hover:bg-[#FFCA42]">Отправить</button>
                  </form>
                  <p class="mt-6 text-[15px] text-white leading-[130%] text-center">После заполнения формы, мы с вами свяжемся для продолжения работы.</p>
                </div>
			</div>
		</div>
    </div>
</template>

<script setup>
defineProps({
    TogglePopup: [Function]
})
</script>

<style scoped>
  .modal {
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
  }

  /* .model-content {
    margin: 0 auto; 
    padding: 40px;
  }
   */
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
.container {
    padding: 40px;
}   
</style>