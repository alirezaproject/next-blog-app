"use client"

import useMoveBack from "@/hooks/useMoveBack";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


function NotFound() {
    const moveBack = useMoveBack();
    return (
        <div className="h-screen">
            <div className="container xl:max-w-screen-xl">
                <div className="flex justify-center pt-10">
                    <div>
                        <h1 className="text-xl font-bold text-red-500 mb-8">
                            هیچ پستی با این مشخصات یافت نشد
                        </h1>
                        <Link href="/blogs" className="text-secondary-700">
                            رفتن به صفحه پست ها؟
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NotFound;
