<template>
  <div class="custom-code-group">
    <slot></slot>
    <div v-if="description" class="code-description" v-html="description"></div>
  </div>
</template>

<style scoped>
.custom-code-group {
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-code-block-bg);
}

/* 1. We force the description to appear between the tabs and the code */
.code-description {
  order: 1; /* This moves it after the tabs but before the code if we style the slot right */
  padding: 12px 16px;
  font-size: 0.9em;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  line-height: 1.5;
}

/* 2. Target the VitePress tab bar */
:deep(.vp-code-group .tabs) {
  order: 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

/* 3. Target the Code area */
:deep(.vp-code-group div[class*='language-']) {
  order: 2;
  border-radius: 0 !important;
  margin: 0 !important;
}

/* Clear default VitePress margins */
:deep(.vp-code-group) {
  margin: 0 !important;
  display: flex;
  flex-direction: column;
}
</style>
