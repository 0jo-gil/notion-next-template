'use client';

import Link from "next/link";

const Navigation = () => {
    return (
        <div>
            <Link href="/">
                Home
            </Link>
            <Link href="/post">
                Post
            </Link>
        </div>
    )

}

export default Navigation;