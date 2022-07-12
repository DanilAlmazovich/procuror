<template>
    <footer class="bg-[#EBF1FF] pt-10 pb-8">
        <div class="container">
            <div class="flex pb-[200px]">
                <div class="w-[75%] flex">
                    <div class="w-1/4 pr-4 flex flex-col">
                        <nuxt-link to="#" class="font-medium mb-6">Главная</nuxt-link>
                        <button class="mb-4 text-left">Поиск</button>
                        <button class="text-left mb-4">Версия для людей с ограниченными возможностями</button>
                        <div><button>Кыргызча</button><span class="px-1">|</span><button>English</button></div>
                    </div>
                    <div class="w-1/4 pr-4 flex flex-col">
                        <nuxt-link to="#" class="font-medium mb-6">О прокуратуре</nuxt-link>
                        <nuxt-link to="#" class="font-medium mb-6">Кадры</nuxt-link>
                    </div>
                    <div class="w-1/4 pr-4 flex flex-col">
                        <nuxt-link to="#" class="font-medium mb-6">Международное
                            сотрудничество</nuxt-link>
                    </div>
                    <div class="w-1/4 pr-4 flex flex-col">
                        <nuxt-link to="#" class="font-medium mb-6">Учебный центр</nuxt-link>
                        <nuxt-link to="#" class="font-medium mb-6">Прием граждан</nuxt-link>
                    </div>
                </div>
                <div class="w-[25%] pl-4 flex flex-col">
                    <nuxt-link to="#" class="font-medium mb-6">Контакты</nuxt-link>
                    <p class="mb-4">720040 г. Бишкек, ул. А.Токтоналиева 139 Генеральная прокуратура Кыргызской Республики</p>
                    <a href="+996 312 54 28 18" target="_blank" class="mb-4">+996 312 54 28 18</a>
                    <a href="statement@prokuror.kg" target="_blank" class="mb-4">statement@prokuror.kg</a>
                    <h6 class="font-medium mb-4">Генеральная прокуратура в соцсетях:</h6>
                    <div class="flex">
                        <a href="#" target="_blank" class="w-8 h-8 flex items-center justify-center mr-2">
                            <Icon class="fill-current text-blue-500 flex justify-center w-8 h-8" name="instagram"/>
                        </a>
                        <a href="#" target="_blank" class="w-8 h-8 flex items-center justify-center mr-2">
                            <Icon class="fill-current text-blue-500 flex justify-center w-6 h-6" name="fb"/>
                        </a>
                        <a href="#" target="_blank" class="w-8 h-8 flex items-center justify-center mr-2">
                            <Icon class="fill-current text-blue-500 flex justify-center w-8 h-8" name="tg"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t border-solid border-[#475569]">
            <div class="flex items-center container pt-6">
                <img class="w-12 h-12 mr-4" src="../static/images/logo.png" alt="">
                <span>Генеральная прокуратура Кыргызской Республики <br> 2022 год</span>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>