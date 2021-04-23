import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  function deepClone(value: any): any {
    if (Array.isArray(value)) {
      return value.map(deepClone);
    } else if (typeof value == "object") {
      let obj: any = {};
      for (let key in value) {
        obj[key] = deepClone(value[key]);
      }
      return obj;
    } else {
      return value;
    }
  }

  const [formErrors, setFormErrors]: any = useState({});
  const [formMessage, setFormMessage]: any = useState("blank");
  const [formData, setFormData]: any = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  function handleChange(event: any) {
    let propName = event.target.name;
    let value = event.target.value;

    setFormData((prevData: any) => {
      return { ...prevData, [propName]: value };
    });
  }

  function handleSubmitForm() {
    let errors = validateForm();
    setFormErrors(deepClone(errors));
    if (Object.keys(errors).length === 0) {
      submitForm();
    } else {
      setFormMessage("failure");
    }
  }

  function validateForm() {
    let errors: any = {};

    for (let property in formData) {
      if (property === "reply_to") {
        if (formData.reply_to === "") {
          errors[property] = "empty";
        }

        let regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(formData.reply_to)) {
          errors[property] = "invalid";
        }
      } else {
        if (formData[property] === "") {
          errors[property] = "empty";
        }
        //let reg = /^[a-zA-Z0-9_.-\s]*$/;
        let reg = /[A-Za-z0-9 _.,!"'/$]*/;
        if (!reg.test(formData[property])) {
          errors[property] = "invalid";
        }
      }
    }

    return errors;
  }

  function submitForm() {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        "#contact-form",
        process.env.REACT_APP_EMAILJS_USERID
      )
      .then(
        (result) => {
          //console.log(result.text);
          setFormMessage("success");
          setFormData({
            from_name: "",
            reply_to: "",
            message: "",
          });
        },
        (error) => {
          //console.log(error.text);
          setFormMessage("failure");
        }
      );
  }

  return (
    <div className="contact-container">
      <div className="contact-flexbox contact-flexbox--top">
        <h2>Get in Touch</h2>
        <div className="contact-text-container">
          <p>
            I'm currently looking for some formal work experience, so I'm open
            to be contacted for new and interesting opportunities. I have a wide
            array of skills and have plenty of experience in tackling new
            challenges. I'm a fast learner, so even unfamiliar territory is
            something that I have confidence in being able to pick up. If you're
            in need of a, I'd love to hear about any opportunities that I could
            help you with.
          </p>
          <div className="contact-icons-container">
            <a
              className="social-link"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/enslaughter"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              className="social-link"
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/enslaugh"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a
              className="social-link"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/eli-slaughter-86b8a550/"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="contact-flexbox contact-flexbox--bottom">
        <h2>Contact Me</h2>
        <div className="contact-form-container">
          <form id="contact-form">
            <div className="label-box">
              <label
                htmlFor="from_name"
                className={formErrors.from_name && "label-error"}
              >
                Name
              </label>
              {formErrors.from_name === "empty" && (
                <p className="form-error-text">Field can't be empty</p>
              )}
              {formErrors.from_name === "invalid" && (
                <p className="form-error-text">Invalid input</p>
              )}
            </div>

            <input
              id="from_name"
              name="from_name"
              type="text"
              placeholder="Your name here"
              className={formErrors.from_name && "input-error"}
              value={formData.from_name}
              onChange={handleChange}
            ></input>

            <div className="label-box">
              <label
                htmlFor="reply_to"
                className={formErrors.reply_to && "label-error"}
              >
                Email Address
              </label>
              {formErrors.reply_to === "empty" && (
                <p className="form-error-text">Field can't be empty</p>
              )}
              {formErrors.reply_to === "invalid" && (
                <p className="form-error-text">Invalid input</p>
              )}
            </div>

            <input
              id="reply_to"
              name="reply_to"
              type="text"
              placeholder="Your email address here"
              className={formErrors.reply_to && "input-error"}
              value={formData.reply_to}
              onChange={handleChange}
            ></input>

            <div className="label-box">
              <label
                htmlFor="message"
                className={formErrors.message && "label-error"}
              >
                Message
              </label>
              {formErrors.message === "empty" && (
                <p className="form-error-text">Field can't be empty</p>
              )}
              {formErrors.message === "invalid" && (
                <p className="form-error-text">Invalid input</p>
              )}
            </div>

            <textarea
              id="message"
              name="message"
              placeholder="Your message here"
              className={formErrors.message && "input-error"}
              rows={5}
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button
              type="button"
              className="contact-button"
              onClick={handleSubmitForm}
            >
              SEND MESSAGE
            </button>

            {formMessage === "success" && (
              <p className="form-validation-ok">
                Your message has been sent successfully! Thanks for contacting
                me.
              </p>
            )}
            {formMessage === "failure" && (
              <p className="form-validation-error">
                Something went wrong when submitting your message. Please check
                the form for errors or contact me directly at enslaugh@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
