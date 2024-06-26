import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchPosts } from "../lib/api";
import { PostDetail } from "./PostDetail";

const maxPostPage = 10;

export function Posts() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPost, setSelectedPost] = useState(null);
    const queryClient = useQueryClient();

    useEffect(() => {
        if (currentPage < maxPostPage) {
            const nextPage = currentPage + 1;
            queryClient.prefetchQuery({
                queryKey: ["post", nextPage],
                queryFn: () => fetchPosts(nextPage),
            });
        }
    }, [currentPage, queryClient]);

    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["post", currentPage],
        queryFn: () => fetchPosts(currentPage),
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
                <button disabled={currentPage <= 1} onClick={() => setCurrentPage((prev) => prev - 1)}>Previous page</button>
                <span>Page {currentPage}</span>
                <button disabled={currentPage >= maxPostPage} onClick={() => setCurrentPage((prev) => prev + 1)}>Next page</button>
            </div>
            <hr />
            {selectedPost && <PostDetail post={selectedPost} />}
        </>
    )
}