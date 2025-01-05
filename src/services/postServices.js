

export async function getPostBySlug(slug) {
    const res = await fetch(`${process.env.PUBLIC_BASE_URL}/post/slug/${slug}`, { cache: "force-cache" });
    const { data } = await res.json();
    const { post } = data || {};
    return post;
}


export async function getPosts() {
    const res = await fetch(`${process.env.PUBLIC_BASE_URL}/post/list`, { cache: "force-cache" });
    const { data } = await res.json();

    const { posts } = data || {};
    return posts;
}