<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText>Merhaba Dünya</CustomText>
    <IconHome />
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
import IconHome from '../../assets/icons/home.svg'

export default {
  name: 'Home',
  components: {
    CustomText,
    IconHome
  }
}
</script>

<style scoped>
.a1{
  color: rgb(var(--b6a));
}
</style>
