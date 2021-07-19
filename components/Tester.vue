<template>
    <button v-on:click="testfunc">test works</button>
</template>
<script>
export default {
    name: "Tester.vue",
    data () {
        return {
            //js variables declared here
        }
    },
    methods: {
        //js functions declared here

        testfunc() {
            alert("test");
        }
    }
}
</script>