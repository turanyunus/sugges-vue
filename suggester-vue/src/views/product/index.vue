<template>
  <div class="home">
    <h1>Product</h1>
    <CustomText>Merhaba Dünya</CustomText>
    <CustomText class="a1" tag="p">Merhaba Dünya</CustomText>
    <CustomText tag="b" size="xsmall">Merhaba Dünya</CustomText>
    <IconHome />
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
import IconHome from '../../assets/icons/home.svg'

export default {
  name: 'Product',
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
