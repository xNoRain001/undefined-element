<template>
  <div class="w-full grid gap-y-[24px]">
    <u-scroll-area height="200px" width="400px">
      <div v-for="i in 5" :key="i">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi doloribus nulla impedit adipisci quia, quisquam minima similique eaque perspiciatis reiciendis sequi. Reiciendis, excepturi repellendus at unde in voluptatibus illum.
      </div>
    </u-scroll-area>

    <u-scroll-area width="400px">
      <div class="whitespace-nowrap" v-for="i in 5" :key="i">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quos 
        accusantium veniam et cupiditate odio obcaecati pariatur ratione 
        repellendus magni iste quam quas, ipsa deleniti quaerat amet illum ab 
        recusandae!
      </div>
    </u-scroll-area>
  </div>
</template>
