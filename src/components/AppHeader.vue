<script>
import HeaderForm from './HeaderForm.vue'

export default {
    name: 'AppHeader',
    components: {
        HeaderForm
    }
}
</script>

<template>
    <header id="app_header">
        <div id="search_bar" class="container">
            <h1 class="title">boolflix</h1>
            <HeaderForm />
        </div>
    </header>
</template>


<style></style>