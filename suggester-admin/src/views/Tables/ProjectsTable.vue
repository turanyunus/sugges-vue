<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            {{ title }}
          </h3>
        </div>
        <div class="col text-right">
          <base-button type="success" size="m" @click="handleAddCategory"
            >Ekle</base-button
          >
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="tableData"
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
            {{ row.id }}
          </td>
          <td class="media-body">
            <div class="media-body">
              <span class="name mb-0 text-sm font-weight-bold">{{
                row.title
              }}</span>
            </div>
          </td>
          <td>
            <badge class="badge-dot mr-4" :type="row.statusType">
              <i :class="`bg-${row.statusType}`"></i>
              <span class="status">{{ row.status }}</span>
            </badge>
          </td>
          <td>
            {{ row.mainCategory }}
          </td>
          <td>
            {{ row.subMainCategory }}
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
      <base-pagination :total=1></base-pagination>
    </div>
    <modal :show="this.showModal">
      <div>
        <div class="row">
          <div class="col-md-12">
            <base-input
              label="Kategori Adı"
              v-model="categoryName"
            ></base-input>
          </div>
          <div class="col-md-12">
            <base-dropdown>
              <base-button slot="title" type="primary" class="dropdown-toggle">
                Kategori Tipi
              </base-button>
              <a class="dropdown-item" href="#" @click="clickCategory(1)"
                >ANA</a
              >
              <a class="dropdown-item" href="#" @click="clickCategory(2)"
                >ALT</a
              >
            </base-dropdown>
          </div>
          <div class="col-md-12 mt-4" v-if="subCategoryStatus === true">
            <base-input
              label="Alt Kategori Adı"
              v-model="subCategoryName"
            ></base-input>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-3" />
          <div class="col-md-6">
            <base-button type="success" size="m" @click="handleAddCategory"
              >Ekle</base-button
            >
            <base-button type="secondary" size="m" @click="handleAddCategory"
              >Kapat</base-button
            >
          </div>
          <div class="col-md-3" />
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
export default {
  name: 'projects-table',
  props: {
    type: {
      type: String
    },
    title: String
  },
  data() {
    return {
      tableData: [
        {
          id: '12312312312312',
          title: 'Dizi',
          status: 'aktif',
          statusType: 'success',
          mainCategory: 'Evet',
          subMainCategory: 'Hayır'
        }
      ],
      showModal: false,
      categoryName: '',
      categoryTypeId: 0,
      subCategoryStatus: false,
      subCategoryName: ''
    }
  },
  methods: {
    handleAddCategory: function() {
      if (this.showModal) return (this.showModal = false)
      return (this.showModal = true)
    },
    clickCategory: function(value) {
      if (value === 1) this.subCategoryStatus = false
      else if (value === 2) this.subCategoryStatus = true

      this.categoryTypeId = value
    }
  }
}
</script>
<style scoped></style>
