const PostListPagination = (
    {onPrev, onClick}: {onPrev: () => void, onClick: () => void}
) => {

    return (
        <div>
            <div onClick={onPrev} >prev</div>
            <div onClick={onClick}>next</div>
        </div>
    )
};

export default PostListPagination;