<template>
  <div class="container">
    <div class="banner" />
    <div class="header-inner">
      <div class="profile-image">
        <Avatar
          size="160"
          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
        />
      </div>
      <div class="profile-info">
        <div class="name-surname-info">
          <CustomText tag="p" class="name-surname">Turan Yunus</CustomText>
          <CustomText tag="p" size="normal" class="username"
            >@turanyunus</CustomText
          >
        </div>
        <div class="follow-info">
          <div class="follow">
            <CustomText
              tag="p"
              style="text-align: center; font-weight: 500; margin-bottom: 5px; font-size: 17px"
              >Gönderi</CustomText
            >
            <CustomText tag="p" style="text-align: center; font-weight: 600;"
              >1234</CustomText
            >
          </div>
          <div class="follow">
            <CustomText
              tag="p"
              style="text-align: center; font-weight: 500; margin-bottom: 5px; font-size: 17px"
              >Gönderi</CustomText
            >
            <CustomText tag="p" style="text-align: center; font-weight: 600;"
              >1234</CustomText
            >
          </div>
          <div class="follow">
            <CustomText
              tag="p"
              style="text-align: center; font-weight: 500; margin-bottom: 5px; font-size: 17px"
              >Gönderi</CustomText
            >
            <CustomText tag="p" style="text-align: center; font-weight: 600;"
              >1234</CustomText
            >
          </div>
        </div>

        <!-- follow name -->
        <!-- follow count -->
      </div>
      <div class="profile-statistic">
        <CustomButton
          color="white"
          background="#0397C6"
          padding="10px 25px"
          border-radius="3px"
          border="1px"
          border-color="#0397C6"
          mouseover-color="#0397C6"
          mouseover-background="white"
          font-weight="600"
          margin="20px 25px"
        >
          Takip Et
        </CustomButton>
      </div>
    </div>
    <div class="user-content-inner">
      <div class="user-content">
        <Tabs />
      </div>
      <div class="suggest-side">
        <CustomCategoryList />
        <CustomCategoryList />
        <CustomCategoryList />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import CustomText from '@/components/CustomText'
import CustomButton from '@/components/CustomButton'
import CustomCategoryList from '@/components/CustomCategoryList'
import Tabs from '@/components/tabs/tabs'
export default {
  name: 'Product',
  components: { Tabs, CustomCategoryList, CustomButton, CustomText, Avatar }
}
</script>

<style scoped>
.container {
  .banner {
    height: 200px;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(146, 146, 255, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
  }
  .header-inner {
    max-width: 605px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -120px;
    padding: 30px;
    @media (--t) {
      max-width: none;
      display: grid;
      grid-template-columns: 1fr 2fr 2fr;
      grid-gap: 30px;
    }
    .profile-image {
      display: flex;
      justify-content: center;

      @media (--t) {
      }
    }
    .profile-info {
      @media (--t) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
    .name-surname-info {
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;
      @media (--t) {
        text-align: start;
      }
      .name-surname {
        color: black;
        font-size: 20px;
        font-weight: bold;
        @media (--t) {
          color: white;
        }
      }
      .username {
        color: black;
        font-weight: bold;
        @media (--t) {
          color: white;
        }
      }
    }
    .profile-statistic {
      text-align: center;
      display: grid;
      @media (--t) {
        text-align: end;
        display: block;
      }
    }
    .follow-info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .user-content-inner {
    @media (--t) {
      max-width: none;
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-gap: 30px;
    }
  }
}
</style>
