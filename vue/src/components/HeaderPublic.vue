<script setup>
</script>
<template>
    <header>
        
        <div id="logo">
            <router-link to="/">
                <img src="@/assets/CtrlCash.png" alt="CtrlCash">
            </router-link>
        </div>
        <nav class="links">
            <router-link to="/about">About</router-link>
            <router-link to="/login">Login</router-link>
        </nav>
    </header>
</template>
<style scoped>
    * {
        margin: 0;
    }
    header {
        display: flex;
        justify-content: space-between;
        background-color: #173967;
        box-sizing: border-box;
        align-items: center;
        height: 60px;
        width: 100%;
        padding: 0 20px;
    }
    header a {
        color: white;
        text-decoration: none;
    }
    #logo {
        font-size: 34px ;
    }
    .links {
        display: flex;
        gap: 60px;
        font-size: 20px;
    }
    #logo img {
        height: 40px;
    }
</style>