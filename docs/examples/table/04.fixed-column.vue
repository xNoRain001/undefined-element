<template>
  <div class="vp-raw my-[16px]">
    <u-table 
      :header="header" 
      :body="body"
      bodyTrClass="
        hover:bg-[rgba(0,0,0,.08)] duration-300 transition-colors
      "
      thClass="
        border border-solid border-[--u-primary-border-color] border-x-0 
        border-t-0 px-[7px] py-[16px] h-[48px] text-[13px] text-center
        first:sticky first:left-0 first:bg-white
      "
      tdClass="
        border border-solid border-[--u-primary-border-color] border-x-0 
        border-t-0 px-[7px] py-[16px] h-[48px] text-[13px] text-center
        first:sticky first:left-0 first:bg-white
      "
      tableClass="w-full border-separate border-spacing-0"
      class="h-[300px] w-2/3 overflow-scroll relative"
    >
      <template #th-inner="{ label }">
        {{ label }}
      </template>

      <template #td-inner="{ text }">
        {{ text }}
      </template>
    </u-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const header = [
  {
    field: 'name',
    label: 'Dessert (100g serving)',
    fixed: true
  },
  { 
    field: 'calories', 
    label: 'Calories'
  },
  { 
    field: 'fat', 
    label: 'Fat (g)'
  },
  { 
    field: 'carbs',
    label: 'Carbs (g)'
  },
  { 
    field: 'protein',
    label: 'Protein (g)'
  },
  { 
    field: 'sodium',
    label: 'Sodium (mg)'
  },
  { 
    field: 'calcium', 
    label: 'Calcium (%)'
  },
  { 
    field: 'iron',
    label: 'Iron (%)'
  }
]

const body = reactive([
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
])
</script>
