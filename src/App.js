import EmployeeFeedbackForm from "./components/EmployeeRegistrationForm.js";
import "./App.css";
import StudentRegistrationForm from "./components/StudentRegistrationForm.js";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Form Management</h1>
        {/*tab navigation */}
        <div className="tab">
          <Link to="/employee" className="tab-link">
            {" "}
            Employee Feedback
          </Link>
          <Link to="/student" className="tab-link">
            {" "}
            Student Registration
          </Link>
        </div>
         <Routes>
          <Route path="/" element={<Navigate to="/student" />} />
          <Route path="/student" element={<StudentRegistrationForm />} />
          <Route path="/employee" element={<EmployeeFeedbackForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
