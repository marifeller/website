<script setup lang="ts"></script>

<template>
  <main>
    <header>
      <RouterLink to="/">
        <div class="logo">
          <img src="@/assets/mtf3.svg" alt="Logo" />
          <h1>Marina Feller</h1>
        </div>
      </RouterLink>
    </header>
    <RouterView />
  </main>
</template>
