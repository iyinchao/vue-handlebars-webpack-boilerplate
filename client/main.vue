<template>
    <style rel="stylesheet" href="./assets/styles/test.css"></style>
    <div id="container_main">
        {{mydata}}
    </div>
    <button color="blue" size="large">123{{mydata}}</button>
    <i class="glyphicon glyphicon-search" aria-hidden="true"> </i>
</template>

<script type="text/babel">
    import Button from './components/button.vue'
    export default {
        data() {
            console.warn('called data');
            return {'mydata': '1234567'};
        },
        components: {
            'button': Button
        }
    }
</script>

<!--<style lang="scss">
    $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
    @import "~bootstrap-sass/assets/stylesheets/bootstrap";
    @import "~compass-mixins/lib/compass/css3";

    $var: green;

    #container_main {
        background: $var;
        padding: 5px;
        max-width: 200px;
        @include opacity(0.5);
    }

</style>-->