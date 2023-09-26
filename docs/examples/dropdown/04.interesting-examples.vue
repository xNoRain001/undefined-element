<template>
  <div class="vp-raw my-[16px] flex items-center flex-wrap">
    <u-dropdown>
      <button class="btn">Tooltip</button>

      <template #list>
        <div class="
          absolute z-10 -bottom-full left-1/2 -translate-x-1/2 
          py-[6px] whitespace-nowrap px-[10px] 
          bg-gray-500 text-white text-[12px] rounded-[4px]
        ">
          Lorem, ipsum dolor.
        </div>
      </template>
    </u-dropdown>
  </div> 
</template>
