// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import {
//   Button,
//   FormGroup,
//   FormLabel,
//   FormControl,
//   Alert,
// } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import * as Yup from "yup";
// import "bootstrap/dist/css/bootstrap.min.css";

// // Custom CSS for styling
// const customStyles = `
//   .small-alert {
//     padding: 0.25rem 0.5rem;
//     font-size: 0.75rem;
//     border-radius: 0.25rem;
//   }
//   .custom-input {
//     padding: 0.75rem;

//   }
// `;

// const SignInForm = () => {
//   const initialValues = {
//     username: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required("Username is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const onSubmit = (values, { setSubmitting }) => {
//     console.log(values);
//     // You can implement your sign-in logic here
//     setSubmitting(false);
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 p-1">
//       <style>{customStyles}</style>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         validationSchema={validationSchema}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <FormGroup>
//               <FormLabel>Username</FormLabel>
//               <Field
//                 type="text"
//                 name="username"
//                 className="form-control custom-input" // Apply custom input class
//               />
//               <ErrorMessage
//                 name="username"
//                 component={() => (
//                   <Alert variant="danger" className="mt-2 small-alert">
//                     Username is required
//                   </Alert>
//                 )}
//               />
//             </FormGroup>

//             <FormGroup>
//               <FormLabel>Password</FormLabel>
//               <Field
//                 type="password"
//                 name="password"
//                 className="form-control custom-input" // Apply custom input class
//               />
//               <ErrorMessage
//                 name="password"
//                 component={() => (
//                   <Alert variant="danger" className="mt-2 small-alert">
//                     Password is required
//                   </Alert>
//                 )}
//               />
//             </FormGroup>

//             <Button
//               type="submit"
//               variant="primary"
//               disabled={isSubmitting}
//               className="mt-3"
//             >
//               {isSubmitting ? "Signing in..." : "Sign In"}
//             </Button>

//             <p className="mt-3">
//               Don't have an account? <Link to="/signup">Register Now</Link>
//             </p>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default SignInForm;
// // import React from "react";
// // import { Formik, Form, Field, ErrorMessage } from "formik";
// // import { Button, FormGroup, FormLabel, Alert } from "react-bootstrap";
// // import { Link, useNavigate } from "react-router-dom";
// // import * as Yup from "yup";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // const SignInForm = () => {
// //   const initialValues = {
// //     username: "",
// //     password: "",
// //   };

// //   const validationSchema = Yup.object().shape({
// //     username: Yup.string().required("Username is required"),
// //     password: Yup.string().required("Password is required"),
// //   });

// //   const navigate = useNavigate();

// //   const storedFormData = JSON.parse(localStorage.getItem("FORM_DATA"));

// //   const onSubmit = (values, { setSubmitting }) => {
// //     if (storedFormData) {
// //       const matchedData = storedFormData.find(
// //         (data) =>
// //           data.username === values.username && data.password === values.password
// //       );

// //       if (matchedData) {
// //         console.log("Logged in successfully!");
// //         navigate("/dashboard"); // Redirect to the dashboard or desired page
// //       } else {
// //         console.log("Login failed!");
// //       }
// //     } else {
// //       console.log("No stored data found.");
// //     }

// //     setSubmitting(false);
// //   };

// //   return (
// //     <div className="d-flex justify-content-center align-items-center vh-100 p-1">
// //       <Formik
// //         initialValues={initialValues}
// //         onSubmit={onSubmit}
// //         validationSchema={validationSchema}
// //       >
// //         {({ isSubmitting }) => (
// //           <Form>
// //             <FormGroup>
// //               <FormLabel>Username</FormLabel>
// //               <Field type="text" name="username" className="form-control" />
// //               <ErrorMessage
// //                 name="username"
// //                 component={() => (
// //                   <Alert variant="danger" className="mt-2">
// //                     Username is required
// //                   </Alert>
// //                 )}
// //               />
// //             </FormGroup>

// //             <FormGroup>
// //               <FormLabel>Password</FormLabel>
// //               <Field type="password" name="password" className="form-control" />
// //               <ErrorMessage
// //                 name="password"
// //                 component={() => (
// //                   <Alert variant="danger" className="mt-2">
// //                     Password is required
// //                   </Alert>
// //                 )}
// //               />
// //             </FormGroup>

// //             <Button
// //               type="submit"
// //               variant="primary"
// //               disabled={isSubmitting}
// //               className="mt-3"
// //             >
// //               {isSubmitting ? "Signing in..." : "Sign In"}
// //             </Button>

// //             <p className="mt-3">
// //               Don't have an account? <Link to="/signup">Register Now</Link>
// //             </p>
// //           </Form>
// //         )}
// //       </Formik>
// //     </div>
// //   );
// // };

// // export default SignInForm;
import React, { Component } from "react";
import { redirect } from "react-router-dom"; // Import Redirect
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const customStyles = `
  .small-alert {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    border-radius: 0.25rem;
  }
  .custom-input {
    padding: 0.75rem;
  }
`;

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.initialValues = {
      username: "",
      password: "",
    };

    this.validationSchema = Yup.object().shape({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    });

    this.state = {
      isAuthenticated: false, // Track user authentication
    };
  }

  onSubmit = (values, { setSubmitting }) => {
    const savedFormData = JSON.parse(localStorage.getItem("FORM_DATA"));

    if (savedFormData) {
      const matchedUser = savedFormData.find(
        (user) =>
          user.username === values.username && user.password === values.password
      );

      if (matchedUser) {
        console.log("Authentication successful");
        this.setState({ isAuthenticated: true });
      } else {
        console.log("Authentication failed");
      }
    }

    setSubmitting(false);
  };

  render() {
    const { isAuthenticated } = this.state;

    if (isAuthenticated) {
      return <redirect to="/dashboard" />; // Redirect to /dashboard if authenticated
    }

    return (
      <div className="d-flex justify-content-center align-items-center vh-100 p-1">
        <style>{customStyles}</style>
        <Formik
          initialValues={this.initialValues}
          onSubmit={this.onSubmit}
          validationSchema={this.validationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormGroup>
                <FormLabel>Username</FormLabel>
                <Field
                  type="text"
                  name="username"
                  className="form-control custom-input"
                />
                <ErrorMessage
                  name="username"
                  component={() => (
                    <Alert variant="danger" className="mt-2 small-alert">
                      Username is required
                    </Alert>
                  )}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Password</FormLabel>
                <Field
                  type="password"
                  name="password"
                  className="form-control custom-input"
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <Alert variant="danger" className="mt-2 small-alert">
                      Password is required
                    </Alert>
                  )}
                />
              </FormGroup>

              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="mt-3"
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>

              <p className="mt-3">
                Don't have an account? <Link to="/signup">Register Now</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default SignInForm;
