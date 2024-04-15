<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
        <img src="@/assets/contactusimage.svg" alt=""  class="image"/>
      </div>
      <div class="section-2">

          <div id="contact-form" class="contact-form">
            <h1 class="contact-form_title">Get in touch</h1>
            <p class="contact-form_paragraph">Our friendly team would love to hear from you.</p>

            <form class="form" >
              <div class="form-separate">
                <div class="split">
                  <label class="label-input">First name</label>
                  <input
                      required
                      name="name"
                      type="text"
                      autocomplete="off"
                  />
                </div>
                <div class="split">
                  <label class="label-input">Last name</label>
                  <input
                      required
                      name="name"
                      type="text"
                      autocomplete="off"
                  />
                </div>
              </div>

              <div class="split">
                <label class="label-input">Email address</label>
                <input
                    required
                    name="email"
                    type="email"
                />
              </div>

              <div class="split">
                <label class="label-input">Message</label>
                <textarea
                                  name="message"
                                  rows="4"
                                  placeholder="Leave us a message..."
                                  required
                                  style="
                                    font-family: 'BR-Firma-Regular', sans-serif;
                                    letter-spacing: 1.5px;
                                    font-size: 13px;
"
                              ></textarea>
              </div>

              <div class="split-2">
                <input type="checkbox" class="checkbox"/>
                <label class="check-box-label">You agree to our friendly privacy policy.</label>
              </div>

              <button class="button">
                Send message
                <img src="@/assets/arrow-right-line.svg" alt="btn-image" class="btn-image" />
              </button>
            </form>
          </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "ContactUsSection1"
}
</script>

<style scoped>
.alpha{
  padding-top: 5%;
  padding-bottom: 5%;
}
.section-alpha{
  display: flex;
  align-content: center;
  align-items: center;
}

.section-1{
  width: 50%;
}

.section-2{
  width: 50%;
}

.image{
  width: 75%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.contact-form {
  max-width: 540px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /*margin-right: 10%;*/
  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);*/
  /*padding: 20px 30px;*/
  /*border-radius: 8px;*/
  /*padding-bottom: 40px;*/
}

.contact-form  {
  /*border-bottom: solid 1px #ccc;*/
  /*margin-bottom: 15px;*/
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  text-align: left;
  font-size: 36px;
  line-height: 44px;
  padding-bottom: 10px;
  color: #101828;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.contact-form_paragraph {
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  padding-bottom: 6%;
  color: #475467;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  padding: 11px 16px;
  margin-bottom: 15px;
  margin-top: 5px;
  outline: none;
  width: 100%;
  border-radius: 12px;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #191C1F;
  border: solid 1px #191C1F;
  color: white;
  cursor: pointer;
  padding: 15px 16px;
  text-align: center;
  border-radius: 12px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 2.5px;
}

.contact-form .button:hover {
  background: #0f171c;
  border: solid 1px #0f171c;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form input[type="checkbox"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border: solid 1px #EEF0F1;
}

.form-separate{
  display: flex;
  justify-content: space-between;
}

.split{
  display: block;
}

.split-2{
  display: flex;
  align-items: center;
  align-content: center;
  margin-bottom: 30px;
}

.check-box-label{
  padding-left: 8px;
  color: #475467;
  font-size: 16px;
}

.label-input{
  color: #191C1F;
  font-size: 14px;
}

.btn-image{
  width: 3.5%;
}


@media (max-width: 990px){
  .alpha{
    display: block;
  }
  .contact-form{
    margin-left: 20%;
    margin-top: 10%;
  }
  .contact-form_title{
    font-size: 26px;
  }
}

@media (max-width: 800px) {
  .contact-form{
    margin-left: 11%;
  }

  .section-alpha{
    display: block;
  }

  .section-1{
    width: 100%;
  }

  .section-2{
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 700px){
  .contact-form{
    margin-left: unset;
    margin-top: 10%;
    max-width: unset;
    width: unset;
    margin-right: 20px;
  }
}
</style>