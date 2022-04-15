<template>
  <q-dialog>
    <q-card style="width: 350px">
      <q-card-section>
        <q-input v-model="data.name" label="name" />
        <q-input v-model="data.username" label="username" />
        <q-input v-model="data.email" label="email" />
        <q-input v-model="data.city" label="city"  />
        <q-input v-model="data.phone" label="phone" />
        <q-input v-model="data.website" label="websity" />
        <q-input v-model="data.company" label="company" />
      </q-card-section>
      <q-card-actions class="justify-center">
        <q-btn @click="icon = $emit('closeModal')">Закрити</q-btn>
        <q-btn @click="saveData" v-if="showButton" :disable="checkForm">
          <q-inner-loading v-if="load" showing/>
          <span v-else>Зберегти</span>
        </q-btn>
        <q-btn @click="saveUpdateData" v-else :disable="checkForm">
          <q-inner-loading v-if="load" showing/>
          <span v-else>Редагувати</span>
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "Dialog",
  props:{
    data:{
      required: true
    },
    icon:{
      required:true
    },
    showButton:{
      type:Boolean
    },
    load:{
      type:Boolean,
      required: true
    },
    checkForm:{
      type:Function,
      required:true
    }
  },
  setup(props, {emit}){
    const saveData = () => {
      emit('clickSaveData')
    }
    const saveUpdateData = () => {
      emit('clickUpdate')
    }
    return{
      saveData,
      saveUpdateData
    }
  }
}
</script>

<style scoped>

</style>
