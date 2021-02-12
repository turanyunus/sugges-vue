<script>
import Container from '@/components/Container'
import CustomText from '@/components/CustomText'

export default {
  name: 'Footer',
  components: {
    CustomText,
    Container
  },
  data: () => ({})
}
</script>

<template>
  <header class="header">
    <Container class="header-inner">
      <!-- info-left -->
      <div class="info-left">
        Suggester
      </div>

      <!-- app-center -->
      <div class="app-center">
        <CustomText tag="p"> Since 2021 </CustomText>
      </div>

      <!-- info-right -->
      <div class="info-right">
        2012
      </div>
    </Container>
  </header>
</template>

<style scoped>
.header {
  height: 200px;
  margin-top: 20px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  border-bottom: 1px solid rgb(var(--b6a));
}
.header-inner {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (--t) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
}
</style>
