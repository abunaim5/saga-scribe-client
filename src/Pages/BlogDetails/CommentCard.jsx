import { Avatar } from "flowbite-react";
import userPhoto from "../../assets/user.png"

const CommentCard = ({comment}) => {
    return (
        <div className="flex gap-8 w-full font-merri px-14">
            <div>
                <Avatar img={comment?.photo ? comment?.photo : userPhoto} rounded size="lg" />
            </div>
            <div className="flex-1 space-y-8">
                <div className="flex justify-between">
                    <div>
                        <h3 className="font-bold">{comment?.user_name}</h3>
                        <button className="btn mt-2 text-xs font-bold">Reply</button>
                    </div>
                    <p className="text-xs font-bold">{comment?.comment_date}</p>
                </div>
                <div className="text-lg">
                    <p>{comment?.comment}</p>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;