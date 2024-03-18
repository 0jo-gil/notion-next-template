import { getDateFormatted } from "@/utils/date"
import Link from "next/link"

export const PostItem = ({ post }: any) => {
    return (
        <div className="py-10">
            <Link href={`/post/${post.id}`}>
                <div className="flex gap-3">{post?.tags?.map((tag: string) => (
                    <span key={tag} className="text-slate-300 text-sm">#{tag}</span>
                ))}</div>

                <h2 className="text-2xl font-bold mb-5">{post?.title}</h2>

                <p className="text-lg">{post?.description}</p>

                {/* <div>{getDateFormatted(post.created_time)}</div> */}
            </Link>
        </div>
    )
}

