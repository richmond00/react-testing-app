import "./PostDetail.css";

export function PostDetail({ post }: {post: any}) {
    const data : any= [];

    return (
        <>
        <h3 style={{ color: "blue" }}>{post.title}</h3>
        <button>Delete</button><button>Update title</button>
        <p>{post.body}</p>
        <h4>Comments</h4>
        {data.map((comment: any) => (
            <li key={comment.id}>
                {comment.email}: {comment.body}
            </li>
        ))}
        </>
    )
}