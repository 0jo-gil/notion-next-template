import Link from "next/link";

const PostPage = async () => {
    const postList = await getData();
    return (
        <div>
            {postList.length > 0 && postList?.map((post: any, index: number) => {
                return (
                    <Link key={index} href={{
                        pathname: `/post/[id]/?page=[page]`,
                        query: {
                            page: JSON.stringify(post)
                        }
                    }}
                    as={`/post/${post.id}/?page=${JSON.stringify(post)}`}>
                        <h1>{post.title}</h1>
                    </Link>
                )
            })}
        </div>
    )
}

export async function getData() {
    return await fetch('http://localhost:3000/api/database')
        .then((res) => res.json())
        .then((res) => {
            if(!res) return;
            return res?.data || [];
        });
}

export default PostPage;