<script>
import Header from '@/components/Header'
import Container from "@/components/Container";
export default {
  name: 'App',
  components: {
    Container,
    Header
  }
}
</script>

<template>
  <div class="app">
    <Header />

    <main class="main">
      <Container>
        <router-view />
      </Container>
    </main>

  </div>
</template>

<style>
  .main{
    padding-top: 40px;
  }
</style>
