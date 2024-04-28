<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/chart01">chart01</router-link> | 
      <router-link to="/chart02">chart02</router-link> |
      <router-link to="/chart03">chart03</router-link> |
      <router-link to="/chart04">chart04</router-link> |
      <router-link to="/chart05">chart05</router-link> |
      <router-link to="/chart06">chart06</router-link> |
      <router-link to="/chart07">chart07</router-link> |
      <router-link to="/chart08">chart08</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px 0;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
