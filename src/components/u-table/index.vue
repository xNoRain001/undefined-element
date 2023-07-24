<template>
  <table :class="tableClass">
    <thead>
      <tr :class="headTrClass">
        <th 
          :class="_thClass" 
          :key="field"
          @click="onSort(field, sortable, sortOrder)" 
          v-for="{ field, label, thClass, sortable, sortOrder } in head"
        >
          {{ label }}
          <slot name="th" :sortable="sortable" :label="label"></slot>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr :class="bodyTrClass" v-for="item in body">
        <td :class="tdClass" v-for="field in fields">{{ item[field] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue'

const props = withDefaults(defineProps<{
  head: {
    // sort?: Function,
    field: string,
    label: string,
    thClass?: string,
    sortable?: boolean,
    sortOrder?: 'asc' | 'desc'
  }[],
  body: { [propName: string]: any }[],
  thClass?: string,
  tdClass?: string,
  tableClass?: string,
  headTrClass?: string
  bodyTrClass?: string
}>(), {
  thClass: '',
  tdClass: '',
  tableClass: '',
  headTrClass: '',
  bodyTrClass: ''
})
const { 
  head, 
  body, 
  thClass, 
  tdClass, 
  tableClass,
  headTrClass,
  bodyTrClass
} = toRefs(props)
const _thClass = computed(() => `${ tdClass.value } ${ thClass.value }`)
const fields = computed(() => head.value.map(item => item.field))

const onSort = (
  field: string, 
  sortable?: boolean, 
  sortOrder?: 'asc' | 'desc'
) => {
  if (!sortable) {
    return
  }

  if (sortOrder === 'asc') {
    body.value.sort((a, b) => a[field] - b[field])
  } else {
    body.value.sort((a, b) => b[field] - a[field])
  }
}
</script>
