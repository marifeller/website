<script setup lang="ts"></script>

<template>
  <main>
    <header>
      <h1>Marina Feller</h1>
    </header>
    <section class="intro">
      <h2>Hi, I'm Marina. I also go by Mari.</h2>
      <h3>SOFTWARE ENGINEER - GRAD STUDENT - LINUX ENTHUSIAST</h3>
      <div class="action-buttons">
        <button>Projects</button>
        <button>Resume</button>
        <button>About</button>
        <button>Contact</button>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  position: fixed;
  background: radial-gradient(darkslateblue, black);
  width: 100%;
  height: 100%;
}
header {
  position: sticky;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 16px;
}
h1 {
  font-size: 32px;
}
.intro {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  width: 100%;
}
h2 {
  font-size: 48px;
  font-weight: lighter;
}
h3 {
  font-size: 24px;
}
.action-buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
  max-width: 400px;
}
.action-buttons button {
  padding: 16px 32px;
  border: none;
  border-radius: 32px;
  background-color: #333;
  color: white;
  cursor: pointer;
  font-size: 24px;
}
</style>
