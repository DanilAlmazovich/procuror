<template>
    <section class="pb-16">
        <div class="container">
            <h3 class="text-3xl font-medium text-blue-500 mb-14">Новости</h3>
            <div class="flex mb-8">
                <button class="mr-4 py-2 px-6 rounded-[2.5rem]" v-for="(type, i) in types"
                        @click.prevent="selectedType = type"
                        :key="i" :class="{'text-white bg-blue-500': selectedType === type}">{{ type }}</button>
            </div>
            <div class="flex">
                <div class="bg-[#EBF1FF] rounded-xl w-[30%] p-4 shadow-blue">
                    <div class="rounded-lg overflow-hidden mb-6">
                        <img src="../../static/images/news-home.jpg" alt="">
                    </div>
                    <p class="mb-6 text-xl">{{ news[selectedNews].title }}</p>
                    <div class="mb-6">
                        <NewsActions :date="news[selectedNews].date"/>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="flex">
                            <button @click.prevent="selectedNews--" :disabled="selectedNews <= 0" class="w-8 h-8 bg-blue-500 rounded-full text-white mr-4 flex items-center justify-center">
                                <icon class="w-6 h-6 fill-current transform rotate-180" name="mini-arrow"/>
                            </button>
                            <button @click.prevent="selectedNews++" :disabled="selectedNews >= news.length - 1" class="w-8 h-8 bg-blue-500 rounded-full text-white mr-4 flex items-center justify-center">
                                <icon class="w-6 h-6 fill-current" name="mini-arrow"/>
                            </button>
                            <span class="text-xl text-blue-500 mr-4">
                                <span>0{{ selectedNews + 1 }}</span>/<span>0{{ news.length }}</span>
                            </span>
                        </div>
                        <div>
                            <button class="flex items-center bg-blue-500 text-white py-2 px-6 rounded-[2.5rem]">
                                <span class="mr-1">Подробнее</span>
                                <Icon class="w-4 h-4 fill-current" name="mini-arrow"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-[70%] flex flex-wrap pl-6 justify-between">
                    <div class="w-[49%] p-4 mb-6 rounded-lg" v-for="(item, i) in news" :key="i" :class="{'shadow-md': i === selectedNews}">
                        <h6 class="text-xl mb-2">{{ item.title }}</h6>
                        <p class="text-sm mb-4">{{ item.description }}</p>
                        <div>
                            <NewsActions :date="item.date"/>
                        </div>
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
                types: [
                    'Генеральная прокуратура',
                    'Региональные новости'
                ],
                selectedType: '',
                selectedNews: 0,
                news: [
                    {
                        image: 'news-home.png',
                        title: 'В Баткенском районе должностные лица привлечены к уголовной ответственности за незаконное ...',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum risus metus nec. Tincidunt vestibulum cursus non pellentesque scelerisque at in diam in. Vitae porttitor mauris, tristique a aliquet velit tellus dolor. Gravida tortor, lacinia tristique gravida.',
                        date: '20 января'
                    },
                    {
                        image: 'news-home.png',
                        title: 'Прокуратура: Гражданин незаконно содержался под стражей 4 суток из-за незаконных действий сотрудников суда',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum risus metus nec. Tincidunt vestibulum cursus non pellentesque scelerisque at in diam in. Vitae porttitor mauris, tristique a aliquet velit tellus dolor. Gravida tortor, lacinia tristique gravida.',
                        date: '20 января'
                    },
                    {
                        image: 'news-home.png',
                        title: 'Результаты собеседования участников конкурса по подбору кандидатов на зачисление в резерв кадров ...',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum risus metus nec. Tincidunt vestibulum cursus non pellentesque scelerisque at in diam in. Vitae porttitor mauris, tristique a aliquet velit tellus dolor. Gravida tortor, lacinia tristique gravida.',
                        date: '20 января'
                    },
                    {
                        image: 'news-home.png',
                        title: 'Проходят тренинги для сотрудников органов прокуратуры и внутренних ...',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum risus metus nec. Tincidunt vestibulum cursus non pellentesque scelerisque at in diam in. Vitae porttitor mauris, tristique a aliquet velit tellus dolor. Gravida tortor, lacinia tristique gravida.',
                        date: '20 января'
                    }
                ]
            }
        },
        mounted() {
            this.selectedType = this.types[0]
        }
    }
</script>