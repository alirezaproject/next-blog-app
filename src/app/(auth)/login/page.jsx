"use client"

import Button from '@/ui/Button';
import RHFTextField from '@/ui/RHFTextField';
import { SpinnerMini } from '@/ui/Spinner';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as yup from "yup";


const schema = yup.object({
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است")
})
    .required();

function LoginPage() {

    const { register, handleSubmit, formState: { errors, isLoading }, watch } = useForm({
        resolver: yupResolver(schema), mode: "onTouched", defaultValues: {
            email: 'shekoohianproject@gmail.com',
            password: "alirezashe"
        }
    });
    const router = useRouter();
    const { login } = useAuth();
    const onSubmit = async (data) => {
        await login(data);
    }

    return (
        <div >
            <h1 className="text-xl font-bold mb-6 text-secondary-500 text-center">
                ورود
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

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
                <div>
                    {
                        isLoading ?
                            <SpinnerMini />
                            :
                            <Button type="submit" variant="primary" className="w-full">
                                ورود
                            </Button>

                    }
                </div>

                <Link className='text-secondary-500 mt-6 text-center' href="/signup">
                    ثبت نام
                </Link>
            </form>
        </div>
    )
}

export default LoginPage