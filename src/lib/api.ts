import { QueryKey } from "@tanstack/react-query";
import { SVC_URL } from "./consts";

export async function fetchPosts(pageNum: number) {
    const response = await fetch(`${SVC_URL}/posts?_limit=10&_page=${pageNum}`);
    return response.json();
}

export async function fetchComments({ queryKey }: { queryKey: QueryKey }) {
    const [_, postId] = queryKey;
    const response = await fetch(`${SVC_URL}/comments?postId=${postId}`);
    return response.json();
}

export async function deletePost(postId: number) {
    const response = await fetch(`${SVC_URL}/posts/${postId}`, {method: "DELETE"});
    return response.json();
}

export async function updatePost(postId: number) {
    const response = await fetch(`${SVC_URL}/posts/${postId}`, { method: "PATCH" });
    return response.json();
}
