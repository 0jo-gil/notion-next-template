import Link from "next/link"
import { SkeletonPostItem } from "../skeleton"

export const RecentPost = ({ postList = [] }) => {
    return (
        <div className="mt-10 mb-5">
            <h2 className="mb-10 font-bold text-2xl">최근 게시물</h2>
            <div className="flex gap-5">
                {
                    postList?.length > 0 ? (
                        postList?.map((post: any, index: number) => {
                            return (
                                <RecentPostItem key={index} post={post} />
                            )
                        })
                    ) : (
                        Array(2).fill(undefined).map((_, index) => (
                            <div  key={index} className="flex-1">
                                <SkeletonPostItem/>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )

}

export const RecentPostItem = ({post}: {post: any}) => {
    return (
        <div className="flex-1">
            <Link href={`/post/${post.id}`}>
                <div className="flex gap-3">{post?.tags?.map((tag: string) => (
                    <span key={tag} className="text-slate-300 text-sm">#{tag}</span>
                ))}</div>

                <h2 className="text-2xl font-bold mb-5">{post?.title}</h2>

                <p className="text-lg">{post?.description}</p>
            </Link>
        </div>
    )
}