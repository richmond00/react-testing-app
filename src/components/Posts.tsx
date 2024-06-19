import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchPosts } from "../lib/api";
import { PostDetail } from "./PostDetail";

const maxPostPage = 10;

export function Posts() {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedPost, setSelectedPost] = useState(null);

    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["post"],
        queryFn: () => fetchPosts(1),
        staleTime: 2000
    });

    if (isLoading) {
        return <h3>Loading...</h3>;
    }
    if (isError) {
        return (
            <>
                <h3>Oops, something went wrong</h3>
                <p>{error.toString()}</p>
            </>
        );
    }

    return (
        <>
            <ul>
                {data.map((post: any) => (
                    <li key={post.id} className="post-title" onClick={() => setSelectedPost(post)}>
                        {post.title}
                    </li>
                ))}
            </ul>
            <div className="pages">
                <button disabled onClick={() => {}}>Previous page</button>
                <span>Page {currentPage + 1}</span>
                <button disabled onClick={() => {}}>Next page</button>
            </div>
            <hr />
            {selectedPost && <PostDetail post={selectedPost} />}
        </>
    )
}