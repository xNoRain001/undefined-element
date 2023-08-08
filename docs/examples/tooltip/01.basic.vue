<template>
  <div class="btns w-full flex items-center">
    <button>
      <u-icon name="keyboard_arrow_up" color="#fff"></u-icon>
      <span>Top</span>
      <u-tooltip position="top">
        <div class="tooltip">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>
    <button>
      <u-icon name="keyboard_arrow_right" color="#fff"></u-icon>
      <span>Right</span>
      <u-tooltip position="right">
        <div class="tooltip">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>
    <button>
      <u-icon name="keyboard_arrow_down" color="#fff"></u-icon>
      <span>Bottom</span>
      <u-tooltip position="bottom">
        <div class="tooltip">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>
    <button>
      <u-icon name="keyboard_arrow_left" fill="#fff"></u-icon>
      <span>Left</span>
      <u-tooltip position="left">
        <div class="tooltip">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>
  </div>
</template>

<style type="text/tailwindcss" scoped>
.btns button {
  @apply cursor-pointer flex items-center justify-between py-[6px] px-[16px] 
  rounded-[3px] bg-[#1976d2]
}

.btns button > span {
  @apply ml-[12px] text-white text-[14px] font-medium
}

.btns button:not(:first-of-type) {
  @apply ml-[8px]
}
</style>
