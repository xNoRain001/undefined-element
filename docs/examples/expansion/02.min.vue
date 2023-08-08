<template>
  <div class="w-full">
    <u-expansion 
      v-model="expanded"
      :min="1"
      itemClass="
        border-[1px] border-x-0 border-solid border-[#dcdfe6] border-t-0
        first-of-type:border-t-[1px]
      "
      headerClass="flex items-center justify-between h-[47px]"
      contentClass="text-[14px] text-[#303133] font-medium"
    >
      <u-expansion-item name="1">
        <template #header="{ expanded }">
          <div class="text-[14px] text-[#303133] font-medium">Home</div>
          <u-icon :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"></u-icon>
        </template>
        <template #content>
          <div class="pb-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>

      <u-expansion-item name="2">
        <template #header="{ expanded }">
          <div class="text-[14px] text-[#303133] font-medium">About us</div>
          <u-icon :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"></u-icon>
        </template>
        <template #content>
          <div class="pb-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>

      <u-expansion-item name="3">
        <template #header="{ expanded }">
          <div class="text-[14px] text-[#303133] font-medium">Contact us</div>
          <u-icon :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"></u-icon>
        </template>
        <template #content>
          <div class="pb-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>
    </u-expansion>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const expanded = reactive<string[]>(['1'])
</script>
