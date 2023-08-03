<template>
  <div 
    class="
      u-skeleton-item relative before:content-[''] before:absolute before:w-full 
      before:h-full before:top-0 before:-left-full before:z-0 
      before:bg-gradient-to-r before:from-[rgba(255,255,255,0)] 
      before:via-[rgba(255,255,255,.5)] before:to-[rgba(255,255,255,0)]
      before:animate-[u-animate-left_1.5s_linear_.5s_infinite]
    " 
    :style="{
      '--u-left-start': '-100%',
      '--u-left-end': '100%',
    }
  "></div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

import { skeletonKey } from '../../const/keys'

import type { Ref } from 'vue'

const animate = inject(skeletonKey) as Ref<boolean>
</script>
