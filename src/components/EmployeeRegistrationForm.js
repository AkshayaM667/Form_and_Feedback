import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const EmployeeFeedbackForm = () => {
  const initialValues = {
    fullname: "",
    email: "",
    department: "",
    rating: "",
    feedback: "",
  };
  const validationSchema=Yup.object({
    fullname:Yup.string()
    .min(3,"Name must be atleast 3 characters")
    .required("full name is required "),
    email:Yup.string()
    .email("Invalid email format")
    .reqired("email is required "),
    department:Yup.string()
    .required("Select a department"),
    rating:Yup.number()
    .min(1, "Rating must be between 1 and 5")
    .max(5, "Rating must be between 1 and 5")
    .required("Rating is required"),
    feedback:Yup.string()
    .max(200, "Feedback must be less than 200 characters")
  })
 const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    alert("Form submitted successfully!");
    resetForm();
  };

  return (
    <div className="form-container">
      <h1>Employee Feedback Form</h1>
      <Formik initialValues={initialValues}
       validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <Form>
          <div>
            <label> Full Name:</label>
            <Field type="text" name="fullname" />
          </div>
          <div>
            <label> Email:</label>
            <Field type="email" name="email" />
          </div>
          <div>
            <label> Department:</label>
            <Field as="select" name="department">
              <option value="">Select Department</option>
              <option value="HR">HR</option>
              <option value="Tech">Tech</option>
              <option value="Marketing">Marketing</option>
              <option value="Engineering">Engineering</option>
              <option value="Sales">Sales</option>
            </Field>
          </div>
          <div>
            <label> Rating(1-5):</label>
            <Field type="number" name="rating" min="1" max="5" />
          </div>
          <div>
            <label> Feedback:</label>
            <Field as="textarea" name="feedback" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default EmployeeFeedbackForm;
