<script>
import Header from '@/components/Header'
import Container from "@/components/Container";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
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
    <Footer />
  </div>
</template>

<style>
  .main{
    padding-top: 10px;
  }
</style>
