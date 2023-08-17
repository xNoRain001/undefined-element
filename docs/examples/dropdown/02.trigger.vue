<template>
  <div class="w-full">
    <u-dropdown trigger="hover">
      <button 
        class="
          w-[209px] h-[36px] bg-[rgb(25,118,210)] flex jusfity-center
          items-center text-white text-[14px] font-medium py-[4px] px-[16px]
          whitespace-nowrap
        ">
        DROPDOWN BUTTON
        <u-icon 
          name="keyboard_arrow_down" 
          color="white" 
          class="ml-[8px]"
        ></u-icon>
      </button>

      <template #list>
        <div 
          class="bg-white !-top-full rounded-[4px] cursor-pointer shadow-[0_1px_5px_#0003,0_2px_2px_#00000024,_0_3px_1px_-2px_#0000001f]"
        >
          <div 
            v-for="i in 3" 
            :key="i" 
            class="
              h-[48px] text-[14px] flex items-center
              py-[8px] px-[16px] hover:bg-[#e8e8e8]
            "
          >{{ i }}</div>
        </div>
      </template>
    </u-dropdown>
  </div>
</template>
