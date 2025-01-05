import CoverImage from "@/ui/CoverImage";

import Link from "next/link";
import Author from "./Author";
import { ClockIcon } from "@heroicons/react/24/outline";
import PostInteraction from "./PostInteraction";
import { getPosts } from "@/services/postServices";


async function PostList() {

    const posts = await getPosts();

    return (
        <div className="grid grid-cols-12 gap-8">
            {posts.map((post) => {
                return (
                    <div key={post._id} className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-100 rounded-lg p-2 ">
                        <CoverImage {...post} />

                        {/* Post Author - reading Time */}
                        <div className="bg-secondary-100  p-2 rounded-lg flex flex-col w-full justify-between flex-1">
                            <Link href={`/blogs/${post.slug}`}>
                                <h2 className="mb-4 font-bold text-secondary-700">
                                    {post.title}
                                </h2>
                            </Link>

                            {/* blog category and author */}

                            {/* blog author-category */}
                            <div className="flex items-center justify-between mb-4">
                                <Author {...post.author} />
                                <div className="flex items-center text-[10px] text-secondary-500">
                                    <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
                                    <span className="ml-1"> خواندن:</span>
                                    <span className="ml-1 leading-3">{post.readingTime}</span>
                                    <span>دقیقه</span>
                                </div>
                            </div>
                            <PostInteraction {...post} />

                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default PostList