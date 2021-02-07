<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText>Merhaba Dünya</CustomText>
    <CustomText class="a1" tag="p">Merhaba Dünya</CustomText>
    <CustomText tag="b" size="xsmall">Merhaba Dünya</CustomText>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";

export default {
  name: 'Home',
  components: {
    CustomText
  }
}
</script>

<style scoped>
.a1{
  color: rgb(var(--b6a));
}
</style>
