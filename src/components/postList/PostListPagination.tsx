import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const PostListPagination = (
    {onPrev, onClick}: {onPrev: () => void, onClick: () => void}
) => {

    return (
        <div className="flex justify-between">
            <button onClick={onPrev} className="hover:bg-black hover:text-white bg-white border-2 w-10 h-10 rounded-full">
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button onClick={onClick} className="hover:bg-black  hover:text-white bg-white border-2 w-10 h-10 rounded-full">
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
};

export default PostListPagination;