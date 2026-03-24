<template>
  <div class="custom-code-group">
    <slot></slot>
    <div v-if="description" class="description-layer" v-html="description"></div>
  </div>
</template>

<style scoped>
.custom-code-group {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-code-block-bg);
}

/* The description style */
.description-layer {
  padding: 12px 16px;
  font-size: 0.9em;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  line-height: 1.5;
  /* This ensures it stays above the code but below the absolute-positioned tabs if necessary */
  z-index: 1; 
}

/* Target the tabs to ensure they stay at the top */
:deep(.tabs) {
  border-bottom: 1px solid var(--vp-c-divider) !important;
  margin-bottom: 0 !important;
}

/* We use 'order' only on the specific children of the code-group */
:deep(.vp-code-group) {
  display: flex !important;
  flex-direction: column !important;
}

:deep(.tabs) { order: 1; }
.description-layer { order: 2; }
:deep(div[class*='language-']) { order: 3; }

/* Remove default VitePress margins that create gaps */
:deep(.vp-code-group) { margin: 0 !important; }
:deep(div[class*='language-']) { 
  margin: 0 !important; 
  border-radius: 0 !important; 
}
