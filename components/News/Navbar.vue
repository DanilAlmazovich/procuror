<template>
    <div>
        <div class="w-full mb-10">
            <calendar is-expanded class="w-full"/>
        </div>
        <div>
            <div class="border border-solid border-[#555F71] rounded-xl p-4 mb-8 hover:bg-[#EBF1FF] hover:shadow-md hover:border-[#EBF1FF]">
                <div class="mb-4">
                    <h6 class="text-lg">Советы прокурора</h6>
                    <span class="text-sm">Мобильное приложение</span>
                </div>
                <p class="text-sm mb-6">Dynamic color plays a key role in Material You, creating individualized and expressive experiences for your users and opening up new possibilities for the role of color in your app. </p>
                <Download class="justify-end"/>
            </div>
            <div class="border border-solid border-[#555F71] rounded-xl p-4 mb-8 hover:bg-[#EBF1FF] hover:shadow-md hover:border-[#EBF1FF]">
                <div class="mb-4">
                    <h6 class="text-lg">Телефон доверия:</h6>
                    <span class="text-sm">+996 312 54 28 18</span>
                </div>
                <p class="text-sm mb-6">Dynamic color plays a key role in Material You, creating individualized and expressive experiences for your users and opening up new possibilities for the role of color in your app. </p>
                <div class="flex justify-end">
                    <button class="py-2 px-3 rounded-[2.5rem] flex items-center mr-2 text-white bg-blue-500">
                        <span class="mr-2 text-sm">Позвонить</span>
                        <Icon class="w-3 h-3 fill-current flex" name="phone"/>
                    </button>
                </div>
            </div>
            <div class="border border-solid border-[#555F71] rounded-xl p-4 mb-8 hover:bg-[#EBF1FF] hover:shadow-md hover:border-[#EBF1FF]">
                <div class="mb-4">
                    <h6 class="text-lg">Защите прав предпринимателей</h6>
                    <span class="text-sm">+996 312 54 28 18</span>
                </div>
                <p class="text-sm mb-6">Dynamic color plays a key role in Material You, creating individualized and expressive experiences for your users and opening up new possibilities for the role of color in your app. </p>
                <div class="flex justify-end">
                    <button class="py-2 px-3 rounded-[2.5rem] flex items-center mr-2 text-white bg-blue-500">
                        <span class="mr-2 text-sm">Позвонить</span>
                        <Icon class="w-3 h-3 fill-current flex" name="phone"/>
                    </button>
                </div>
            </div>
            <div class="border border-solid border-[#555F71] rounded-xl p-4 mb-8 hover:bg-[#EBF1FF] hover:shadow-md hover:border-[#EBF1FF]">
                <div class="mb-4">
                    <h6 class="text-lg">Онлайн приемная</h6>
                    <span class="text-sm">Подача заявления онлайн</span>
                </div>
                <p class="text-sm mb-6">Dynamic color plays a key role in Material You, creating individualized and expressive experiences for your users and opening up new possibilities for the role of color in your app. </p>
                <div class="flex justify-end">
                    <button class="py-2 px-3 rounded-[2.5rem] flex items-center mr-2 text-white bg-blue-500">
                        <span class="mr-2 text-sm">Переходить</span>
                        <Icon class="w-4 h-4 fill-current flex" name="arrow"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Calendar from 'v-calendar/lib/components/calendar.umd'
    export default {
        components: {
            Calendar
        }

    }
</script>