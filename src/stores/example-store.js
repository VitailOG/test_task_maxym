import { defineStore } from 'pinia';
import {ref} from "vue/dist/vue";
import axios from "axios";

export const useCounterStore = defineStore('counter', () =>{
  let items = ref([])
  const loading = ref(false)
  let totalCount = ref(null)

  const pagination = ref({
    rowsPerPage:5,
    page:0,
    sortBy:'desc',
    descending: false,
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

  return {
    pagination,
    items,
    totalCount,
    getData,
    loading
  }
});
