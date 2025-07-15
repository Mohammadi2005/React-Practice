import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

export const RegisterForm = () => {
    const schema = yup.object().shape({
        fullName: yup.string().min(3, "نام باید حداقل 3 حرف باشد").required("وارد کردن نام الزامی هست"),
        email: yup.string().email("ایمیل نا معتبر هست").required("وارد کردن ایمیل الزامی هست"),
        membershipType : yup.string(),
        company : yup.string().required("وارد کردن نام کمپانی الزامی هست"),
        termsConditions: yup.boolean().oneOf([true], "باید قوانین را بپذیرید"),
    })
    const {register, handleSubmit, formState:{errors}} = useForm({resolver:yupResolver(schema)})
    const Submit = (values) => {
        console.log(values)
        alert("ثبت نام با موفقیت انجام شد")
    }
    return (
        <div className="App" style={{padding:'2rem'}}>
            <form onSubmit={handleSubmit(Submit)}>
                <input type="text" placeholder="نام خود را وارد کنید" {...register("fullName")}/><br/>
                {errors.fullName && <p>{errors.fullName.message}</p>}
                <input type="email" placeholder="ایمیل خود را وارد کنید" {...register("email")}/><br/>
                {errors.email && <p>{errors.email.message}</p>}
                <select {...register("membershipType")}>
                    <option value="Free">Free</option>
                    <option value="Premium">Premium</option>
                    <option value="Enterprise">Enterprise</option>
                </select><br/>
                {errors.membershipType && <p>{errors.membershipType.message}</p>}
                <input type="text" placeholder="نام کمپانی را وارد کنید" {...register("company")}/><br/>
                {errors.company && <p>{errors.company.message}</p>}
                <input type="checkbox" name="termsConditions" id="termsConditions" {...register("termsConditions")}/>
                <label htmlFor="termsConditions">Terms and Conditions</label>
                {errors.termsConditions && <p>{errors.termsConditions.message}</p>}<br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
