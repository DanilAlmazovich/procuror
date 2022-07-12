<template>
    <section>
        <div :class="item.color" v-for="(item, i) in items" :key="i">
            <div class="container">
                <div class="flex pt-12 items-center">
                    <div class="w-1/2 h-auto pr-4">
                        <img src="../static/images/businessman.png" alt="">
                    </div>
                    <div class="w-1/2 h-auto pl-4 flex flex-col pr-20">
                        <h3 class="text-6xl text-white mb-4">{{ item.name }}</h3>
                        <span class="text-lg text-white mb-4">{{ item.post }}</span>
                        <nuxt-link to="#" class="text-4xl font-bold text-white">Биография</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                items: [
                    {
                        name: 'Зулушев Курманкул Токторалыевич',
                        post: 'Генеральный прокурор',
                        color: 'bg-blue-400'
                    },
                    {
                        name: 'Молдокматов Абай Молдокматович',
                        post: 'Первый заместитель Генерального прокурора Кыргызской Республики',
                        color: 'bg-blue-300'
                    },
                    {
                        name: 'Мукашов Сагындык Болотбекович',
                        post: 'Заместитель Генерального прокурора Кыргызской Республики - Военный прокурор',
                        color: 'bg-blue-400'
                    },
                    {
                        name: 'Адыл уулу Кубан',
                        post: 'Заместитель Генерального прокурора Кыргызской Республики, майор юстиции',
                        color: 'bg-blue-300'
                    },
                    {
                        name: 'Токтакунов Кумарбек Кыдырбекович',
                        post: 'Заместитель Генерального прокурора Кыргызской Республики, полковник юстиции',
                        color: 'bg-blue-400'
                    },
                    {
                        name: 'Ишеналиев Турусбек Кубатбекович',
                        post: 'Заместитель Генерального прокурора Кыргызской Республики, юстициянын полковниги',
                        color: 'bg-blue-300'
                    },
                ]
            }
        }
    }
</script>