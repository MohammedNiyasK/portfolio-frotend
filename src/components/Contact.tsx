import "./Contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
const apiUrl = "https://portfolio-backend-9bae.onrender.com"

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      axios
        .post(apiUrl+"/portfolio/submit", values)
        .then((response) => {
          // Handle successful submission
          console.log(response.data);
        })
        .catch((error) => {
          // Handle submission error
          console.error(error);
        });
      console.log(values)
      formik.setValues({ 
        name: '',
        email: '',
        message: ''
      });
    },
  });
  return (
    <>
      <section className="contact section contact-cont" id="contact">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-container container grid">
          <div className="contact-content">
            <h3 className="contact-title">Talk to me</h3>

            <div className="contact-info">
              <div className="contact-card">
                <i className="bx bxl-gmail contact_card-icon"></i>
                <h3 className="contact_card-title">Email</h3>
                <span className="contact_card-data">
                  mohammedkniyas@gmail.com
                </span>
                <a
                  href="mailto:mohammedkniyas@gmail.com"
                  target="_blank"
                  className="contact-button"
                >
                  Write me
                  <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                </a>
              </div>

              <div className="contact-card">
                <i className="bx bxl-whatsapp contact_card-icon"></i>
                <h3 className="contact_card-title">WhatsApp</h3>
                <span className="contact_card-data">7012339151</span>

                <a
                  href="https://api.whatsapp.com/send?phone=917012339151"
                  target="_blank"
                  className="contact-button"
                >
                  Write me
                  <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-content">
            <h3 className="contact-title">Send Your Project</h3>

            <form
              id="submit-form"
              onSubmit={formik.handleSubmit}
              className="contact-form"
            >
              <div className="contact_form-base">
                <label className="contact_form-tag">Name</label>
                <input
                  placeholder="Insert your name"
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="contact_form-input"
                />
                {formik.touched.name && formik.errors.name && (
                  <div>{formik.errors.name}</div>
                )}
              </div>

              <div className="contact_form-base">
                <label className="contact_form-tag">Mail</label>
                <input
                  placeholder="Insert your email"
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="contact_form-input"
                />
                {formik.touched.email && formik.errors.email && (
                  <div>{formik.errors.email}</div>
                )}
              </div>

              <div className="contact_form-base contact_form-area">
                <label className="contact_form-tag">Project</label>
                <textarea
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  cols={30}
                  rows={10}
                  placeholder="Write your project"
                  className="contact_form-input"
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <div>{formik.errors.message}</div>
                )}
              </div>

              <button className="button" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
