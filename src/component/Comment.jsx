const Comment = () => {
    const comments = [
        {
            name: "John Doe",
            comment: "This is a great video! Thanks for sharing.",
            replies: [
                {
                    name: "Emily Davis",
                    comment: "Totally agree, very informative!",
                    replies: [
                        {
                            name: "John Doe",
                            comment: "Glad you found it useful, Emily.",
                            replies: []
                        }
                    ]
                },
                {
                    name: "Mark Wilson",
                    comment: "Same here, subscribed!",
                    replies: []
                }
            ]
        },
        {
            name: "Jane Smith",
            comment: "I learned a lot from this video.",
            replies: [
                {
                    name: "Chris Lee",
                    comment: "Which part helped you the most?",
                    replies: [
                        {
                            name: "Jane Smith",
                            comment: "The explanation around the middle section.",
                            replies: []
                        }
                    ]
                }
            ]
        },
        {
            name: "Alice Johnson",
            comment: "Can you make a video on this topic?",
            replies: [
                {
                    name: "Creator",
                    comment: "Sure Alice, adding it to the list!",
                    replies: []
                }
            ]
        },
        {
            name: "Bob Brown",
            comment: "I disagree with some points made in the video.",
            replies: [
                {
                    name: "Sara Khan",
                    comment: "Which points specifically?",
                    replies: [
                        {
                            name: "Bob Brown",
                            comment: "Mainly the conclusion section.",
                            replies: [
                                {
                                    name: "Sara Khan",
                                    comment: "Fair point, I see what you mean.",
                                    replies: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    const SingleComment = ({ comments }) => {
        return (
            <>
                {comments.map((comment, index) => (
                    <div key={index} className="ml-4 mt-2 border border-l-gray-700 pl-4">
                        <img src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" alt="user avatar" 
                        className="w-12 h-12"
                        />
                        <p className="font-bold">{comment.name}</p>
                        <p>{comment.comment}</p>
                        {comment.replies.length > 0 && (
                            <SingleComment comments={comment.replies} />
                        )}
                    </div>
                ))}
            </>
        );
    };


    return (
        <>
        <div>
            <div>
                <SingleComment comments={comments}/>
            </div>
        </div>
        </>
    );
}

export default Comment;