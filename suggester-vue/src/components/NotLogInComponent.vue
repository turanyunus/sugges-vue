<script>
import CustomButton from '@/components/CustomButton'
export default {
  name: 'NotLogInComponent',
  components: { CustomButton }
}
</script>

<template>
  <div class="container">
    <CustomButton
      color="white"
      background="#0397C6"
      padding="10px 10px"
      border-radius="3px"
      border="1px"
      border-color="#0397C6"
      mouseover-color="#0397C6"
      mouseover-background="white"
      font-weight="600"
      margin="0 5px"
    >
      Giriş Yap
    </CustomButton>
    <CustomButton
        color="white"
        background="#0397C6"
        padding="10px 10px"
        border-radius="3px"
        border="1px"
        border-color="#0397C6"
        mouseover-color="#0397C6"
        mouseover-background="white"
        font-weight="600"
        margin="0 5px"
    >
      Kayıt Ol
    </CustomButton>  </div>
</template>

<style scoped></style>
