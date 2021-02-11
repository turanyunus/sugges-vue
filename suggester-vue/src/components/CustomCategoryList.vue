<script>
import Avatar from "@/components/Avatar";
import CustomText from "@/components/CustomText";

export default {
  name: 'CustomCategoryList',
  components: {CustomText, Avatar}
}
</script>

<template>
  <div class="category-list">
    <div class="title section">
      Sana özel kategoriler
    </div>
    <div class="category section">
      <div class="category-author">
        <Avatar :size="30" />
        <div class="category-author-info">
          <div>
            <CustomText tag="b">Dizi</CustomText>
          </div>
          <div>
            <CustomText tag="p" size="xsmall">12345</CustomText>
          </div>
        </div>
      </div>
      <div class="category-more" type="button">
        <p style="color: #008fbf; font-weight: 600; font-size: 14px">Takip Et</p>
      </div>
    </div>
    <div class="category section">
      <div class="category-author">
        <Avatar :size="30" />
        <div class="category-author-info">
          <div>
            <CustomText tag="b">Flim</CustomText>
          </div>
          <div>
            <CustomText tag="p" size="xsmall">12123345</CustomText>
          </div>
        </div>
      </div>
      <div class="category-more" type="button">
        <p style="color: #008fbf; font-weight: 600; font-size: 14px">Takip Et</p>
      </div>
    </div>
    <div class="category section">
      <div class="category-author">
        <Avatar :size="30" />
        <div class="category-author-info">
          <div>
            <CustomText tag="b">Dizi</CustomText>
          </div>
          <div>
            <CustomText tag="p" size="xsmall">4123</CustomText>
          </div>
        </div>
      </div>
      <div class="category-more" type="button">
        <p style="color: #008fbf; font-weight: 600; font-size: 14px">Takip Et</p>
      </div>
    </div>
    <div class="category section">
      <div class="category-author">
        <Avatar :size="30" />
        <div class="category-author-info">
          <div>
            <CustomText tag="b">Dizi</CustomText>
          </div>
          <div>
            <CustomText tag="p" size="xsmall">312</CustomText>
          </div>
        </div>
      </div>
      <div class="category-more" type="button">
        <p style="color: #008fbf; font-weight: 600; font-size: 14px">Takip Et</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-list {
  padding-top: 20px;
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a));
  margin-bottom: 300px;
}
.title{
  font-size: 15px;
  font-weight: 600;
  color: #9f9f9f;
  margin-bottom: 20px;
}
.category {
  height: 60px;
  display: flex;
  align-items: center;
  &-author {
    display: flex;
    align-items: center;
  &-info {
      margin-left: 8px;
    }
  }
  &-more {
    margin-left: auto;
  }
}
.section {
  padding-left: 16px;
  padding-right: 16px;
}
</style>
