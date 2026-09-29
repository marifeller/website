<script setup lang="ts"></script>

<template>
  <section class="intro">
    <h2>Hi, I'm Marina. I also go by Mari.</h2>
    <h3>SOFTWARE ENGINEER - GRAD STUDENT - LINUX ENTHUSIAST</h3>
    <div class="action-buttons">
      <div class="gumdrop-button">
        <button id="button-projects">
          <span class="material-symbols-rounded"> deployed_code </span>
        </button>
        <h4>Projects</h4>
      </div>
      <div class="gumdrop-button">
        <RouterLink to="/resume">
          <button id="button-resume">
            <span class="material-symbols-rounded"> article_person </span>
          </button>
        </RouterLink>
        <h4>Resume</h4>
      </div>
      <div class="gumdrop-button">
        <button id="button-about"><span class="material-symbols-rounded"> mood </span></button>
        <h4>About Me</h4>
      </div>
      <div class="gumdrop-button">
        <button id="button-contact">
          <span class="material-symbols-rounded"> alternate_email </span>
        </button>
        <h4>Contact</h4>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  gap: 64px;
}
.gumdrop-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.gumdrop-button button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 1em;
  border: none;
  border-radius: 64px;
  background-color: transparent;
  background-image: linear-gradient(rgb(255 255 255 / 25%), transparent, rgb(0 0 0 / 25%));
  box-shadow: 0px 0px 16px rgb(255 255 255 / 75%) inset;
  color: white;
  cursor: pointer;
  transition-duration: 0.1s;
}
.gumdrop-button button span {
  font-size: 64px;
  text-shadow: 0px 4px 4px rgb(0 0 0 /25%);
  color: white;
  transition: 0.1s;
}
.gumdrop-button h4 {
  font-size: 24px;
}
.gumdrop-button button:hover {
  scale: 1.1;
}
.gumdrop-button button:active {
  box-shadow: 0px 0px 16px rgb(0 0 0 / 75%) inset;
}
.gumdrop-button button:active span {
  text-shadow: none;
  color: #00000080;
}
#button-projects {
  background-color: #ff2056;
}
#button-resume {
  background-color: #ffb900;
}
#button-about {
  background-color: #00c950;
}
#button-contact {
  background-color: #155dfc;
}
</style>
