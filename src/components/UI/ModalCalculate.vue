<template>
    <div>
        <div class="modal fixed z-[1] left-0 top-0 w-[100%] h-[100%] pt-[50px] overflow-auto">
			<div class="bg-gray-900 w-[30%] rounded-[5px] mx-auto lgMax:w-[50%] lg2:w-[60%] lgMax1:w-[40%]">
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
                          <div>
                              <label for="category" class="block mb-2 text-sm font-medium text-white ">Отправления</label>
                              <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                  <option selected="">Выберите место отправления</option>
                                  <option value="TV">Нижневартовск</option>
                                  <option value="PC">Сургут</option>
                                  <option value="GA">Мегион</option>
                                  <option value="GA">Салехард</option>
                                  <option value="GA">Губкинский</option>
                              </select>
                          </div>
                          <div>
                              <label for="category" class="block mb-2 text-sm font-medium text-white ">Прибытия</label>
                              <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                  <option selected="">Выберите место прибытия</option>
                                  <option value="TV">Нижневартовск</option>
                                  <option value="PC">Сургут</option>
                                  <option value="GA">Мегион</option>
                                  <option value="GA">Салехард</option>
                                  <option value="GA">Губкинский</option>
                              </select>
                          </div>
                      </div>
                      <button class="text-[17px] text-white text-center bg-[#FFB800] rounded-[12px] py-5 min-w-[480px] mt-5 hover:bg-[#FFCA42]">Отправить</button>
                  </form>
                  <p class="mt-6 text-[15px] text-white leading-[130%] text-center">После заполнения формы, на вашу почту прийдет письмо с ответом.</p>
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

  .model-content {
    margin: 0 auto; 
    padding: 40px;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
.container {
    margin-top: 15%;
    padding: 40px;
}   
</style>