<template>
  <div>
    <table :class="tableClass">
      <thead :class="headerClass">
        <tr :class="headerTrClass">
          <th 
            :class="thClass" 
            :key="field"
            @click="onSort(field, sortable, descending)" 
            v-for="{ field, label, sortable, descending } in header"
          >
            <slot 
              name="th-inner" 
              :sortable="sortable" 
              :descending="descending" 
              :field="field" 
              :label="label"
            ></slot>
          </th>
        </tr>
      </thead>

      <tbody :class="bodyClass">
        <tr :class="bodyTrClass" v-for="item in body">
          <td :class="tdClass" v-for="field in fields">
            <slot name="td-inner" :text="item[field]" :field="field"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue'

const props = withDefaults(defineProps<{
  body: { [propName: string]: any }[],
  header: {
    // sort?: Function,
    field: string,
    label: string,
    thClass?: string,
    sortable?: boolean,
    descending?: boolean
  }[],
  thClass?: string,
  tdClass?: string,
  bodyClass?: string,
  tableClass?: string,
  headerClass?: string,
  bodyTrClass?: string,
  headerTrClass?: string
}>(), {
  thClass: '',
  tdClass: '',
  bodyClass: '',
  tableClass: '',
  headerClass: '',
  bodyTrClass: '',
  headerTrClass: ''
})
const { 
  body, 
  header, 
  thClass, 
  tdClass, 
  bodyClass,
  tableClass,
  bodyTrClass,
  headerTrClass
} = toRefs(props)
const fields = computed(() => header.value.map(item => item.field))

const onSort = (
  field: string, 
  sortable?: boolean, 
  descending?: boolean 
) => {
  if (!sortable) {
    return
  }

  if (descending) {
    body.value.sort((a, b) => b[field] - a[field])
  } else {
    body.value.sort((a, b) => a[field] - b[field])
  }
}
</script>
