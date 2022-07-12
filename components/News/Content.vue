<template>
    <div>
        <div v-for="(item, i) in news" :key="i">
            <NewsList :item="item"/>
        </div>
        <div>
            <Pagination/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                news: [
                    {
                        title: 'В Баткенском районе должностные лица привлечены к уголовной ответственности за незаконное ...',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum risus metus nec. Tincidunt vestibulum cursus non pellentesque scelerisque at in diam in. Vitae porttitor mauris, tristique a aliquet velit tellus dolor. Gravida tortor, lacinia tristique gravida.',
                        date: '20 января'
                    },
                    {
                        title: 'Прокуратура: Гражданин незаконно содержался под стражей 4 суток из-за незаконных действий сотрудников суда',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum risus metus nec. Tincidunt vestibulum cursus non pellentesque scelerisque at in diam in. Vitae porttitor mauris, tristique a aliquet velit tellus dolor. Gravida tortor, lacinia tristique gravida.',
                        date: '20 января'
                    },
                    {
                        title: 'Проходят тренинги для сотрудников органов прокуратуры и внутренних ...',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum risus metus nec. Tincidunt vestibulum cursus non pellentesque scelerisque at in diam in. Vitae porttitor mauris, tristique a aliquet velit tellus dolor. Gravida tortor, lacinia tristique gravida.',
                        date: '20 января'
                    },
                    {
                        title: 'Результаты собеседования участников конкурса по подбору кандидатов на зачисление в резерв кадров ...',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum risus metus nec. Tincidunt vestibulum cursus non pellentesque scelerisque at in diam in. Vitae porttitor mauris, tristique a aliquet velit tellus dolor. Gravida tortor, lacinia tristique gravida.',
                        date: '20 января'
                    },
                    {
                        title: 'Проходят тренинги для сотрудников органов прокуратуры и внутренних ...',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum risus metus nec. Tincidunt vestibulum cursus non pellentesque scelerisque at in diam in. Vitae porttitor mauris, tristique a aliquet velit tellus dolor. Gravida tortor, lacinia tristique gravida.',
                        date: '20 января'
                    },
                    {
                        title: 'Результаты собеседования участников конкурса по подбору кандидатов на зачисление в резерв кадров ...',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum risus metus nec. Tincidunt vestibulum cursus non pellentesque scelerisque at in diam in. Vitae porttitor mauris, tristique a aliquet velit tellus dolor. Gravida tortor, lacinia tristique gravida.',
                        date: '20 января'
                    },
                    {
                        title: 'Проходят тренинги для сотрудников органов прокуратуры и внутренних ...',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum risus metus nec. Tincidunt vestibulum cursus non pellentesque scelerisque at in diam in. Vitae porttitor mauris, tristique a aliquet velit tellus dolor. Gravida tortor, lacinia tristique gravida.',
                        date: '20 января'
                    },
                    {
                        title: 'Результаты собеседования участников конкурса по подбору кандидатов на зачисление в резерв кадров ...',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum risus metus nec. Tincidunt vestibulum cursus non pellentesque scelerisque at in diam in. Vitae porttitor mauris, tristique a aliquet velit tellus dolor. Gravida tortor, lacinia tristique gravida.',
                        date: '20 января'
                    }
                ]
            }
        }
    }
</script>