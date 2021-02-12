<script>
import Avatar from '@/components/Avatar'
import CustomText from '@/components/CustomText'

import IconMore from '@/assets/icons/more.svg'
import IconLike from '@/assets/icons/like.svg'
import IconComment from '@/assets/icons/comment.svg'

export default {
  name: 'Post',
  components: {
    CustomText,
    Avatar,
    IconMore,
    IconLike,
    IconComment
  },
  props: {
    isImage: { type: Boolean, default: false }
  }
}
</script>

<template>
  <div class="post">
    <!-- header -->
    <header class="header section">
      <div class="header-author">
        <Avatar :size="40" />
        <div class="header-author-info">
          <div>
            <CustomText tag="b">turanyunus</CustomText>
          </div>
          <div>
            <CustomText tag="p" size="xsmall">Istanbul</CustomText>
          </div>
        </div>
      </div>
      <div class="header-more">
        <button type="button">
          <IconMore />
        </button>
      </div>
    </header>

    <!-- media -->
    <div class="post-media section">
      <img src="https://via.placeholder.com/900" alt="" v-if="isImage === true" />
      <CustomText tag="p" style="padding: 20px 0; font-size: 17px" v-else>
        İnsan niçin yaşadığını bilmezse günü gününe yaşamakla kalıyor; günün
        geçmesini, gecenin gelmesini beklemekten başka zevki olmuyor. Bugün
        nasıl yaşadım, sorusuna cevap vermeden uykuya dalıyor, ertesi gün gene
        aynı hayat.
      </CustomText>
    </div>

    <!-- action -->
    <div class="action-buttons section">
      <button type="button">
        <IconLike />
      </button>
      <button type="button">
        <IconComment />
      </button>
      <button class="action-save" type="button">
        <IconComment />
      </button>
    </div>

    <!-- view count -->
    <div class="view-count section">
      <CustomText tag="b">1.345 beğenme</CustomText>
    </div>

    <!-- post info -->
    <div class="post-info section">
      <div>
        <CustomText tag="b" style="margin-right: 5px"
          >turanyunus
          <CustomText tag="span" style="font-weight: 400"
            >Bazı insanlar gördükçe büyümediğimi hissediyorum. Bazı insanlar
            gördükçe büyümediğimi hissediyorum.
          </CustomText>
        </CustomText>
      </div>
    </div>

    <!-- comment list count -->
    <div class="comment-list-count section">
      <CustomText tag="p" style="color: gray; font-weight: 400"
        >4 yorumun tümünü gör</CustomText
      >
    </div>

    <!-- comment list -->
    <div class="comment-list section">
      <CustomText tag="b" style="margin-right: 5px">omerhayyam</CustomText>
      <CustomText tag="span">Tam bir lezzet harikası.</CustomText>
    </div>

    <!-- datetime -->
    <div class="datetime-info section">
      <CustomText
        tag="p"
        style="color: gray; font-weight: 500; text-transform: uppercase; font-size: 11px"
        >22 dakika önce</CustomText
      >
    </div>

    <!-- comment form -->
    <div class="comment-form section">
      <button type="button">
        <IconLike />
      </button>
      <div class="input-form">
        <input type="text" placeholder="Yorum ekle..." />
      </div>
      <div class="action-share-comment" type="button">
        <p style="color: #008fbf">Paylaş</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post {
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a));
  margin: 30px
}
.header {
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
.action-buttons {
  height: 45px;
  display: flex;
  align-items: center;
  button {
    margin-right: 16px;
  }
  .action-save {
    margin-left: auto;
    margin-right: 0;
  }
}
.post-info {
  height: 45px;
  display: flex;
  margin-top: 10px;
}
.comment-list-count {
  height: 15px;
  display: flex;
  align-items: center;
}
.comment-list {
  height: 35px;
  display: flex;
  align-items: center;
}
.comment-form {
  height: 45px;
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  margin-top: 10px;
  .action-share-comment {
    margin-left: auto;
    margin-right: 0;
  }
  .input-form {
    display: flex;
    width: 100%;
    margin-right: 10px;
    margin-left: 10px;
    height: 100%;
    input {
      width: 100%;
      padding-left: 10px;
    }
  }
}
</style>
