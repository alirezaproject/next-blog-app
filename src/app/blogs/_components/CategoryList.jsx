import Link from 'next/link';

async function CategoryList() {

    const res = await fetch(`${process.env.PUBLIC_BASE_URL}/category/list`, { cache: "force-cache" });
    const {
        data: { categories }
    } = await res.json();

    return (
        <ul className='space-y-4'>
            <li>
                <Link href={`/blogs`}>
                    همه
                </Link>
            </li>
            {categories.map(category => {
                return (
                    <li key={category._id}>
                        <Link href={`/blogs/category/${category.slug}`}>
                            {category.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    )
}

export default CategoryList