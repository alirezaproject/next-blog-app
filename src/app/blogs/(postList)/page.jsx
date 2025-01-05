import { Suspense } from "react";

import Loading from "@/ui/Loading";
import PostList from "../_components/PostList";




export const metadata = {
    title: "بلاگ ها",
};

async function BlogPage() {


    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laboriosam ea deserunt numquam blanditiis quod nobis quis nostrum assumenda! Autem, pariatur possimus exercitationem quis atque facere magnam velit neque quisquam.</p>
            <Suspense fallback={<Loading />}>
                <PostList  />
            </Suspense>
        </div>
    )
}

export default BlogPage