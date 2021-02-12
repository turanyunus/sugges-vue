<script>
import Post from "@/components/Post";
export default {
  name: 'Tabs',
  components: {Post},
  data() {
    return {
      tab: null,
      items: ['İlgi Görenler', 'En Yenilen', 'Dizi', 'Flim'],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <v-icon large color="purple darken-2" style="margin-right: 30px; margin-left: 10px">
        mdi-dialpad
      </v-icon>
      <h3 class="font-weight-bold display-3 basil--text">
        Keşfet
      </h3>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab style="text-transform: none">
        <v-icon medium color="purple darken-2" style="margin-right: 20px">
          mdi-dialpad
        </v-icon>
        İlgi Görenler
      </v-tab>
      <v-tab style="text-transform: none">
        <v-icon medium color="purple darken-2" style="margin-right: 20px">
          mdi-call-split
        </v-icon>
        En Yeniler
      </v-tab>
      <v-tab style="text-transform: none">
        <v-icon medium color="purple darken-2" style="margin-right: 20px">
          mdi-checkbox-marked-circle
        </v-icon>
        Dizi
      </v-tab>
      <v-tab style="text-transform: none">
        <v-icon medium color="purple darken-2" style="margin-right: 20px">
          mdi-arrow-up-bold-box-outline
        </v-icon>
        Film
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <Post :is-image="true" />
        <Post />
        <Post :is-image="true" />
      </v-tab-item>
      <v-tab-item>
        <Post />
        <Post />
        <Post :is-image="true" />
      </v-tab-item>
      <v-tab-item>
        <Post />
        <Post :is-image="true" />
        <Post />
      </v-tab-item>
      <v-tab-item>
        <Post />
        <Post :is-image="true" />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<style scoped></style>
