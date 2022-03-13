<template>
    <div class="hello">
        <h1 class="font-bold">OrderTech</h1>
        <br />
        <h2 id="test" class="text-center">{{ msg }}</h2>
        <p>Lako i besplatno u samo nekoliko koraka!</p>
        <br />
        <a href="https://github.com/mvisnjic/orderTech">Github repozitorij</a>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
