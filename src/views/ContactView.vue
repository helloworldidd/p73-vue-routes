<script setup>

</script>

<template>
    <div class="page">
        <h1>
            <img src="@/assets/img/logo.png" alt="" class="logo" width="50">
            Contact
        </h1>
        <form>
            <input type="text" placeholder="Name">
            <input type="email" placeholder="Email">
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<style scoped>


h1{
    display: flex;
    align-items: center;
    gap: 20px;
}

form{
    border: 1px solid #333;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 300px;
}

</style>