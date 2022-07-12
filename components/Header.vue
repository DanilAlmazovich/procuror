<template>
    <header>
        <div class="container">
            <div class="flex justify-between items-start pt-4">
                <div class="w-[45%]">
                    <h1 class="uppercase font-medium text-lg text-blue-500">ГЕНЕРАЛЬНАЯ ПРОКУРАТУРА  КЫРГЫЗСКОЙ РЕСПУБЛИКИ</h1>
                </div>
                <div class="w-[80px] h-[80px] rounded-full bg-white z-10">
                    <img class="w-full h-full" src="../static/images/logo.png" alt="">
                </div>
                <div class="flex w-[45%]">
                    <ul class="flex">
                        <li class="text-sm mr-2 text-blue-500">
                            <nuxt-link to="#">Главная</nuxt-link>
                        </li>
                        <li class="text-sm mr-2 text-blue-500 whitespace-nowrap">
                            <nuxt-link to="#">О прокуратуре</nuxt-link>
                        </li>
                        <li class="text-sm mr-2 text-blue-500">
                            <nuxt-link to="#">Кадры</nuxt-link>
                        </li>
                        <li class="text-sm mr-2 text-blue-500">
                            <nuxt-link to="#">Международное сотрудничество</nuxt-link>
                        </li>
                        <li class="text-sm mr-2 text-blue-500">
                            <nuxt-link to="#">Учебный центр</nuxt-link>
                        </li>
                        <li class="text-sm mr-2 text-blue-500">
                            <nuxt-link to="#">Прием граждан</nuxt-link>
                        </li>
                        <li class="text-sm mr-2 text-blue-500">
                            <nuxt-link to="#">Контакты</nuxt-link>
                        </li>
                    </ul>
                    <button class="w-6 h-6">
                        <Icon class="w-full h-full fill-current text-blue-500" name="menu"/>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>