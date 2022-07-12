<template>
    <div class="flex items-center">
        <nuxt-link to="/" class="flex items-center text-[#797E8B] mr-1">
            <span class="text-sm">Главная</span>
            <Icon class="w-4 h-4 fill-current" name="mini-arrow"/>
        </nuxt-link>
        <span class="text-sm">{{ page }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            page: {
                type: String,
                default: ''
            }
        }
    }
</script>