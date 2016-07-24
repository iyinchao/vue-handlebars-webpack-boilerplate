<template>
    <div class="button {{color}} {{size}}">
        <slot>{{text}}</slot>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                text:'button'
            }
        },
        props: ["color", "size"]
    }
</script>
