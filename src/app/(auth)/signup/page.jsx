"use client"

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpApi } from "@/services/authService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "context/AuthContext";


const schema = yup.object({
    name: yup.string().min(5, "حداقل ۵ کاراکتر وارد کنید").max(30).required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است")
})
    .required();

// export const metadata = {
//     title: "صفحه ثبت نام",
//     description: "صفحه ثبت نام",
// }

function SignUpPage() {

    const { register, handleSubmit, formState: { errors, isLoading }, watch } = useForm({ resolver: yupResolver(schema), mode: "onTouched", });
    const router = useRouter();
    const { signup } = useAuth();
    const onSubmit = async (data) => {
        await signUpApi(data);
    }

    return (
        <div >
            <h1 className="text-xl font-bold mb-6 text-secondary-500 text-center">
                ثبت نام
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                <RHFTextField
                    register={register}
                    label="نام و نام خانوادگی"
                    name="name"
                    isRequired
                    errors={errors}
                />
                <RHFTextField
                    register={register}
                    label="ایمیل"
                    name="email"
                    type="email"
                    dir="ltr"
                    isRequired
                    errors={errors}
                />
                <RHFTextField
                    register={register}
                    label="رمز عبور"
                    name="password"
                    type="password"
                    isRequired
                    errors={errors}
                />
                <Button type="submit" variant="primary" className="w-full">
                    تایید
                </Button>
                <Link className='text-secondary-500 mt-6 text-center' href="/signup">
                    ورود
                </Link>
            </form>
        </div>
    )
}

export default SignUpPage