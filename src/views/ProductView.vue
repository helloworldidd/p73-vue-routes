<script setup>

defineProps({
    id: String
})

</script>

<template>
    <div class="page">

        <h1>Product {{ id }}</h1>

    </div>
</template>

<style scoped>

.page{
    min-height: 200px;
    padding: 20px;
}

</style>