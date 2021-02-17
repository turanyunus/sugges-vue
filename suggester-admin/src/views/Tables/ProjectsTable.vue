<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <loading v-if="data.length === 0" />
    <div class="card-header border-0" :class="type === 'dark' ? 'bg-transparent' : ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            {{ title }}
          </h3>
        </div>
        <div class="col text-right">
          <base-button type="success" size="m" @click="toggleModel">Ekle</base-button>
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="data"
      >
        <template slot="columns">
          <th>Id</th>
          <th>İsim</th>
          <th>Durumu</th>
          <th>Ana Kategori</th>
          <th>Alt Kategori</th>
          <th></th>
        </template>

        <template slot-scope="{ row }">
          <td class="category-id">
            {{ row._id }}
          </td>
          <td class="media-body">
            <div class="media-body">
              <span class="name mb-0 text-sm font-weight-bold">{{ row.name }}</span>
            </div>
          </td>
          <td>
            {{ row.status ? 'Aktif' : 'Aktif Değil' }}
          </td>
          <td>
            {{ !row.subCategoryStatus ? 'Evet' : 'Hayır' }}
          </td>
          <td>
            {{row.subCategoryStatus ? data.find(i => i._id === row.mainCategoryId).name : 'Hayır'}}
          </td>
          <td class="text-right">
            <base-button type="primary" size="m">Düzenle</base-button>
          </td>
        </template>
      </base-table>
    </div>
    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <base-pagination :total="1"></base-pagination>
    </div>
    <modal :show="this.showModal">
      <div>
        <div class="row">
          <div class="col-md-12">
            <base-input label="Kategori Adı" v-model="categoryName"></base-input>
          </div>
          <div class="col-md-12">
            <base-dropdown>
              <base-button slot="title" type="primary" class="dropdown-toggle">
                Kategori Tipi
              </base-button>
              <a class="dropdown-item" href="#" @click="clickCategory(1)">ANA</a>
              <a class="dropdown-item" href="#" @click="clickCategory(2)">ALT</a>
            </base-dropdown>
          </div>
          <div class="col-md-12 mt-3" v-if="subCategoryStatus">
            <base-dropdown>
              <base-button slot="title" type="primary" class="dropdown-toggle">
                Baglı Ana Kategori
              </base-button>
              <a
                class="dropdown-item"
                v-for="items in dataFilterList(data)"
                v-bind:value="items._id"
                v-bind:key="items._id"
                href="#"
                @click="clickMainCategory(items._id)"
                >{{ items.name }}</a
              >
            </base-dropdown>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-3" />
          <div class="col-md-6">
            <base-button type="success" size="m" @click="handleAddCategory">Ekle</base-button>
            <base-button type="secondary" size="m" @click="toggleModel">Kapat</base-button>
          </div>
          <div class="col-md-3" />
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
import Loading from '@/components/VLoading'
export default {
  name: 'projects-table',
  components: { Loading },
  props: {
    type: {
      type: String
    },
    title: String,
    data: Array
  },
  data() {
    return {
      showModal: false,
      categoryName: '',
      categoryTypeId: 0,
      subCategoryStatus: false,
      subCategoryName: '',
      mainCategoryId: ''
    }
  },
  methods: {
    toggleModel: function() {
      if (this.showModal) return (this.showModal = false)
      return (this.showModal = true)
    },
    clickCategory: function(value) {
      if (value === 1) this.subCategoryStatus = false
      else if (value === 2) this.subCategoryStatus = true

      this.categoryTypeId = value
    },
    dataFilterList(arr) {
      return arr.filter(i => i.subCategoryStatus === false)
    },
    clickMainCategory: function(value) {
      this.mainCategoryId = value
    },
    handleAddCategory: function() {
      let params = {
        name: this.categoryName,
        subCategoryStatus: this.subCategoryStatus,
        mainCategoryId: this.mainCategoryId
      }
      console.log({ params })
    }
  }
}
</script>
<style scoped></style>
