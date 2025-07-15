import * as yup from "yup"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

export const Form = () => {
    const schema = yup.object().shape({
        username: yup.string().min(3).required("Username is required"),
        email: yup.string().email().required("Email is required"),
        password: yup.string().min(6).required("Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "Confirm must be match")
            .required("Confirm Password is required"),
        phone: yup.string()
            .matches(/^09\d{9}$/, "Phone number must start with 09 and be 11 digits")
            .notRequired(),
    })
    const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)});
    const Submit = (values) => {
        console.log(values);
    }
    return (
        <form onSubmit={handleSubmit(Submit)}>
            <input type="text" placeholder="Enter Username" {...register("username")} /><br/>
            <input type="text" placeholder="Enter email" {...register("email")} /><br/>
            <input type="password" placeholder="Enter password" {...register("password")} /><br/>
            <input type="password" placeholder="Enter password again" {...register("confirmPassword")} /><br/>
            <input type="number" placeholder="Enter phone" {...register("phone")} /><br/>
            <button type="submit">Submit</button>
            {errors.username && <p>{errors.username.message}</p>}
            {errors.email && <p>{errors.email.message}</p>}
            {errors.password && <p>{errors.password.message}</p>}
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            {errors.phone && <p>{errors.phone.message}</p>}
        </form>
    )
}

