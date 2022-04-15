<template>
  <div class="q-pa-md">
    <q-table
      :loading="loading"
      :rows="items"
      :columns="columns"
      :pagination="pagination"
    >
      <template v-slot:body="props1">
        <q-tr :props="props1">
          <q-td :props="props1" key="id">{{ props1.row.id }}</q-td>
          <q-td :props="props1" key="name">{{ props1.row.name }}</q-td>
          <q-td :props="props1" key="username">{{ props1.row.username }}</q-td>
          <q-td :props="props1" key="email">{{ props1.row.email }}</q-td>
          <q-td :props="props1" key="city">{{ props1.row.address.city }}</q-td>
          <q-td :props="props1" key="phone">{{ props1.row.phone }}</q-td>
          <q-td :props="props1" key="website">{{ props1.row.website }}</q-td>
          <q-td :props="props1" key="company">{{ props1.row.company.name }}</q-td>
          <q-td>
            <q-radio v-model="radio" label="Редагувати" :val="props1.row.name" @click="radioCheck(props1.row)"/>
          </q-td>
        </q-tr>
      </template>

      <template #bottom>
        <q-btn @click="previewPage" :disable="disableButtonPreview" style="margin-left: 15px">Попередня</q-btn>
        <q-btn @click="nextPage" :disable="disableButtonNext" style="margin-left: 15px">Наступна</q-btn>
        <q-select v-model="pagination.rowsPerPage" :options="[1, 2, 5]" style="margin-left: 15px" @update:model-value="changePerPage" />
      </template>

      <template v-slot:loading>
        <q-inner-loading showing color="secondary" label="Загрузка даних" />
      </template>
    </q-table>
    <br>
    <q-btn @click="openModalAdd">Добавити</q-btn>
    <q-btn @click="openModalEdit" :disable="disableButtonEdit">Редагувати</q-btn>
    <Dialog
      :checkForm="checkForm"
      v-model="icon"
      :showButton="showButton"
      :data="form"
      :icon="icon"
      @closeModal="closeModal"
      @clickSaveData="openData"
      @clickUpdate="editData"
      :load="loadButton"
    />
  </div>
</template>

<script>

import {ref, reactive, watch, computed} from 'vue'
import { useQuasar } from 'quasar'

import Dialog from "components/Dialog";
import axios from 'axios'

export default {
  components:{
    Dialog
  },
  setup () {
    const $q = useQuasar()
    const columns = [
      {name:'id', label:'ID', align:'center'},
      {name:'name', label:'NAME', align:'center'},
      {name:'username', label:'USERNAME', align:'center'},
      {name:'email', label:'EMAIL', align:'center'},
      {name:'city', label:'CITY', align:'center'},
      {name:'phone', label:'PHONE', align:'center'},
      {name:'website', label:'WEBSITE', align:'center'},
      {name:'company', label:'COMPANY', align:'center'},
      {name:'action', label:'ACTION', align:'center'},
    ]
    const showButton = ref(false)
    const radio = ref(false)
    const items = ref([])
    const loading = ref(false)
    const loadButton = ref(false)
    const totalCount = ref(null)
    const disableButtonNext = ref(false)
    const disableButtonPreview = ref(true)
    const disableButtonEdit = ref(true)
    const currentPage = ref(1)
    const pagination = ref({
      rowsPerPage:5,
      page:0,
      sortBy:'desc',
      descending: false,
    })
    const selected = ref(null)
    const icon = ref(false)
    const form = reactive({
      id:'',
      name:'',
      username:'',
      email:'',
      city:'',
      phone:'',
      website:'',
      company:''
    })

    const getData = async (page=5, pageNumber=pagination.value.page) => {
      try {
        loading.value = true
        const getInfo = (await axios.get('https://jsonplaceholder.typicode.com/users',
          {params: {_start: pageNumber, _limit: page}}))
        items.value = getInfo.data
        totalCount.value = getInfo.headers['x-total-count']
        loading.value = false
      } catch (error) {
        console.log(error)
      }
    }

    const previewPage = () => {
      pagination.value.page -= pagination.value.rowsPerPage
      console.log(pagination.value.page === 0)
      let items = currentPage.value * pagination.value.rowsPerPage
      getData(items)
      if (pagination.value.page === 0){
        disableButtonPreview.value = true
      }
      disableButtonNext.value = false
    }

    const checkForm = computed(() => {
      return form.name && form.username && form.city && form.company && form.phone && form.website && form.email
    })

    const nextPage = () => {
      pagination.value.page += pagination.value.rowsPerPage
      let items = currentPage.value * pagination.value.rowsPerPage
      if((totalCount.value - pagination.value.rowsPerPage) === pagination.value.page){
        disableButtonNext.value = true
      }
      getData(items)
      disableButtonPreview.value = false
    }

    const changePerPage = (val) => {
      pagination.value.page = 0
      disableButtonNext.value = false
      disableButtonPreview.value = true
      getData(val, pagination.value.page)
    }

    const openModalAdd = () => {
      form.id = form.name = form.username = form.email = form.city = form.website = form.phone = form.company = ''
      showButton.value = true
      icon.value = true
    }

    const openModalEdit = () => {
      icon.value = true
    }

    const radioCheck = (data) => {
      form.id = data.id
      form.name = data.name
      form.username = data.username
      form.email = data.email
      form.city = data.address.city
      form.phone = data.phone
      form.website = data.website
      form.company = data.company.name
    }

    const editData = async () => {
      try {
        loadButton.value = true
        let item = await axios.put(`https://jsonplaceholder.typicode.com/users/${form.id}`, form)
        let find = items.value.find(i => {
          return i.id === form.id
        })
        let index = items.value.indexOf(find)
        items.value[index].name = item.data.name
        items.value[index].username = item.data.username
        items.value[index].email = item.data.email
        items.value[index].address.city = item.data.city
        items.value[index].phone = item.data.phone
        items.value[index].website = item.data.website
        items.value[index].company.name = item.data.company
        icon.value = false
        radio.value = false
        loadButton.value = false
        snackBar('Користувач відредагований')
      } catch (error) {
        console.log(error)
      }
      if (form.id <= 10) {
      } else {
        let find = items.value.find(i => {
          return i.id === form.id
        })
        let index = items.value.indexOf(find)
        items.value[index].name = form.name
        items.value[index].username = form.username
        items.value[index].email = form.email
        items.value[index].address.city = form.city
        items.value[index].phone = form.phone
        items.value[index].website = form.website
        items.value[index].company.name = form.company
        icon.value = false
        radio.value = false
        snackBar('Користувач відредагований')
      }
    }

    watch(radio, (val) => {
      if (!val){
        disableButtonEdit.value = true
      } else {
        disableButtonEdit.value = false
      }
    })

    const snackBar = (text) => {
      $q.notify({
        type: 'positive',
        message: text
      })
    }

    const openData = async () => {
      items.value = items.value.slice(0, -1)
      const data = {
        id: Date.now(),
        name: form.name,
        username: form.username,
        email: form.email,
        address: {
          city: form.city
        },
        phone: form.phone,
        website: form.website,
        company: {
          name: form.company
        }
      }
      try {
        loadButton.value = true
        let response = await axios.post('https://jsonplaceholder.typicode.com/users/', data)
        items.value.unshift(response.data)
        loadButton.value = false
        icon.value = false
        showButton.value = false
        snackBar('Користувача створено')
        form.name = form.username = form.email = form.city = form.website = form.phone = form.company = ''
      } catch (error) {
        console.log(error)
      }
    }

    const closeModal = () => {
      icon.value = false
      showButton.value = false
    }

    getData()

    return {
      checkForm,
      snackBar,
      loadButton,
      closeModal,
      disableButtonEdit,
      radioCheck,
      radio,
      editData,
      openModalEdit,
      openModalAdd,
      openData,
      form,
      changePerPage,
      selected,
      disableButtonNext,
      disableButtonPreview,
      previewPage,
      nextPage,
      icon,
      currentPage,
      loading,
      columns,
      items,
      pagination,
      showButton
    }
  }
}
</script>
