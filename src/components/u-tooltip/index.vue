<template>
  <u-dropdown :isTooltip="true">
    <slot></slot>

    <template #list>
      <slot name="text"></slot>
    </template>
  </u-dropdown>
</template>
