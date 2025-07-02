import { Formik, Form, Field, ErrorMessage } from "formik";

const StudentRegistrationForm = () => {
  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    course: "",
    rating: "",
    feedback: "",
    terms: false,
  };

  const validate = (values) => {
    const errors = {};
    if (!values.fullname) {
      errors.fullname = "Full name is Required";
    }
    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!/^[\w._%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.phone) {
      errors.phone = "Phone number is Required";
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is Required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!values.course) {
      errors.course = "Course is Required";
    } else if (
      !["computer-science", "engineering", "mathematics", "physics", "chemistry", "biology"].includes(values.course)
    ) {
      errors.course = "Invalid course selected";
    }
    if (!values.rating) {
      errors.rating = "Rating is Required";
    } else if (!["1", "2", "3", "4", "5"].includes(values.rating)) {
      errors.rating = "Invalid rating selected";
    }
    if (!values.feedback) {
      errors.feedback = "Feedback is Required";
    } else if (values.feedback.length < 10) {
      errors.feedback = "Feedback must be at least 10 characters";
    }
    if (!values.terms) {
      errors.terms = "You must accept the Terms and Conditions";
    }
    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    alert("Form submitted successfully!");
    resetForm();
  };

  return (
    <div className="form-container">
      <h1>Student Registration Form</h1>
      <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
        
        <Form>
          <div>
            <label>Full Name:</label>
            <Field type="text" name="fullname" />
            <ErrorMessage name="fullname" component="div" className="error" />
          </div>
          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label>Phone:</label>
            <Field type="text" name="phone" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div>
            <label>Confirm Password:</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className="error" />
          </div>
          <div>
            <label>Course:</label>
            <Field as="select" name="course">
              <option value="">Select Course</option>
              <option value="computer-science">Computer Science</option>
              <option value="engineering">Engineering</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
            </Field>
            <ErrorMessage name="course" component="div" className="error" />
          </div>
          <div>
            <label>Rating:</label>
            <Field as="select" name="rating">
              <option value="">Select Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Field>
            <ErrorMessage name="rating" component="div" className="error" />
          </div>
          <div>
            <label>Feedback:</label>
            <Field as="textarea" name="feedback" />
            <ErrorMessage name="feedback" component="div" className="error" />
          </div>
          <div>
            <label>
              <Field className="checkbox" type="checkbox" name="terms" />
              Accept Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="div" className="error" />
          </div>
          <button type="submit">Submit</button>
        </Form>

      </Formik>
    </div>
  );
};

export default StudentRegistrationForm;
