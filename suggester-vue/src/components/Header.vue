<script>
import IconHome from '@/assets/icons/home.svg'
import IconHomeFill from '@/assets/icons/home-fill.svg'
import Container from '@/components/Container'

export default {
  name: 'Header',
  components: {
    Container,
    IconHome,
    IconHomeFill
  }
}
</script>

<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/" class="logo">Suggester</router-link>

      <form class="search">
        <input type="text" placeholder="Ara..." />
      </form>

      <nav class="navigation">
        <router-link to="/">
          <IconHomeFill v-if="$route.name === 'Home'" />
          <IconHome v-else />
        </router-link>
        <router-link to="/">
          <IconHomeFill v-if="$route.name === 'Home'" />
          <IconHome v-else />
        </router-link>
        <router-link to="/profile">
          Profile
        </router-link>
      </nav>
    </Container>
  </header>
</template>

<style scoped>
.header {
  border-bottom: 1px solid rgb(var(--b6a));
}
.header-inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 60px;
}
.logo {
  font-size: 1.6rem;
}
.search {
  text-align: center;

  input {
    width: 215px;
    height: 28px;
    border: 1px solid rgb(var(--b6a));
    background-color: rgb(var(--b3f));
    border-radius: 3px;
    padding-left: 20px;
    padding-right: 20px;
  }
}

.navigation {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    margin-left: 20px;
  }
}
</style>
