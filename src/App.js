import {useFormik} from 'formik'
import * as Yup from 'yup';
const validationYup = Yup.object({
  name:Yup.string().required("Required"),
  password:Yup.string().required('Required'),
  email:Yup.string().email("Invalid format").required("Required"),
});
function App() {
  const formik = useFormik({
    initialValues:{name:"",email:"",password:""},
    onSubmit:values=>{
        console.log(values);
    },
    /*validate: values=>{
      let { name,email,password} = values;
      let errors = {}
      if(!name)
      {
        errors.name = "Required";
      }
      if(!email)
      {
        errors.email = "Required";
      }
      if(!password)
      {
        errors.password = "Required";
      }

      return errors;
    },*/
    
  validationSchema:validationYup
}
  )
  return (
    <div className="App">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" name="name" 
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} value={formik.values.name} />
            {formik.touched.name &&  formik.errors.name ? <div className="error">{formik.errors.name}</div> : null }
          </div>
          <div>
            <label>Email</label>
            <input type="text" onBlur={formik.handleBlur} name="email" onChange={formik.handleChange} value={formik.values.email} />
            {formik.touched.email &&  formik.errors.email ? <div className="error">{formik.errors.email}</div> : null }
          </div>
          <div>
            <label>Password</label>
            <input type="text" onBlur={formik.handleBlur} name="password"  onChange={formik.handleChange} value={formik.values.password}/>
            {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null }
          </div>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default App;
