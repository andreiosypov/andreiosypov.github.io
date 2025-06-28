<template>
  <main>
    <div class="about view">
      <h1>About</h1>
      <div class="myPhoto">
        <img height="200px" src="https://a.storyblok.com/f/138597/335x333/3bb626f610/andreiosypovcircle.png" alt="mobile" />
      </div>
      <div class="contactInfo">
        <p><a href="https://drive.google.com/file/d/1isxftdErZg9h9kWogl9tQavZyVpwGsH1/view?usp=sharing">View Resume</a></p>
        <p>Linkedin: <a href="https://www.linkedin.com/in/andrei-osypov-53566016b">Andrei Osypov</a></p>
        <p>Github: <a href="https://github.com/andreiosypov/">andreiosypov</a></p>
        <p>Itch: <a href="https://andreiosypov.itch.io/">andreiosypov</a></p>
        <p>Instagram: <a href="https://www.instagram.com/aosypov/">@aosypov</a></p>
      </div>
    </div>
  </main>
</template>

<script></script>

<style>
.about {
  display: flex;
  place-items: center;
  flex-direction: column;
  gap: 40px;
}

.myPhoto {
  max-width: 200px;
}

.contactInfo img {
  max-width: 200px;
}

@media (max-width: 600px) {
  .about {
    gap: 10px;
  }
}
</style>
