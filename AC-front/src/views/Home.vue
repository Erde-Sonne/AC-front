<template>
  <div class="home">
    <ACHome msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ACHome from "../components/ACHome";

export default {
  name: 'Home',
  components: {
    ACHome
  }
}
</script>
