<template>
  <div class="w-full">
    <u-expansion 
      v-model="expanded"
      :min="1"
    >
      <u-expansion-item 
        name="1" 
        class="
          border border-x-0 border-b-0 border-solid border-[#dcdfe6] 
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">Home</div>
            <u-icon 
              name="keyboard_arrow_down"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>

      <u-expansion-item 
        name="2" 
        class="
          border border-x-0 border-b-0 border-solid border-[#dcdfe6]
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">About us</div>
            <u-icon 
              name="keyboard_arrow_down"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>

      <u-expansion-item 
        name="3" 
        class="
          border border-x-0 border-solid border-[#dcdfe6]
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">Contact us</div>
            <u-icon 
              name="keyboard_arrow_down"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
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
