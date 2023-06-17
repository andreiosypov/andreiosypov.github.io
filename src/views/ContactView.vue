<template>
  <div class="contact view">
    <h1>Contact Info</h1>
    <div class="myPhoto">
      <img height="200px" src="https://a.storyblok.com/f/138597/335x333/3bb626f610/andreiosypovcircle.png" alt="mobile" />
    </div>
    <div class="contactInfo">
      <p>
        Phone:
        <img height="25px" src="https://a.storyblok.com/f/138597/438x70/c1584919df/mobile-phone-number.PNG" alt="mobile" />
        (messages preferable)
      </p>
      <p>Email: <img src="https://a.storyblok.com/f/138597/229x19/80a2f7c97e/email2.PNG" alt="email" /></p>
      <p>Linkedin: <a href="https://www.linkedin.com/in/andrei-osypov-53566016b">Andrei Osypov</a></p>
      <p>Github: <a href="https://github.com/andreiosypov/">andreiosypov</a></p>
      <p>Instagram: <a href="https://www.instagram.com/aosypov/">@aosypov</a></p>
    </div>
  </div>
</template>

<script></script>

<style>
.contact {
  display: flex;
  place-items: center;
  flex-direction: column;
  gap: 40px;
}

.myPhoto {
  max-width: 50vw;
}

@media (max-width: 600px) {
  .contact {
    gap: 10px;
  }
}
</style>
