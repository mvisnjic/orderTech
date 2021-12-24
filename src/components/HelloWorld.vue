<template>
  <div class="hello">
    <h1>OrderTech</h1>
    <h2 id="test">Naručite tehnički pregled Vašeg vozila!</h2>
    <p>
      Lako i besplatno u samo nekoliko koraka!
    </p> <br>
    <a href="https://github.com/mvisnjic/orderTech">Github repozitorij</a>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
