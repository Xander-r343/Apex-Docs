<template>
  <div class="custom-code-block-wrapper">
    <slot></slot>
    <div v-if="description" class="code-description" v-html="description"></div>
  </div>
</template>

<script setup>
defineProps(['description'])
</script>

<style scoped>
.custom-code-block-wrapper {
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-code-block-bg);
  display: grid; /* Establish grid on the wrapper */
}

/* 1. Target the internal group and make it a grid */
:deep(.vp-code-group) {
  display: grid !important;
  margin: 0 !important;
}

/* 2. Assign the Rows */
:deep(.tabs) {
  grid-row: 1; /* Tabs at the very top */
  border-bottom: 1px solid var(--vp-c-divider) !important;
}

.code-description {
  grid-row: 2; /* Description right under tabs */
  padding: 12px 16px;
  font-size: 0.9em;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  line-height: 1.5;
}

:deep(div[class*='language-']) {
  grid-row: 3; /* Code block at the bottom */
  margin: 0 !important;
  border-radius: 0 !important;
}

/* 3. Styling for code pills in the description */
:deep(.code-description code) {
  background-color: var(--vp-c-bg-mute);
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 0.9em;
  font-family: var(--vp-font-family-mono);
}
</style>
