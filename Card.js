import React from "react";
import {FcLike , FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;

    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        // Logic
        if(likedCourses.includes(course.id)) {
            // Phale se like hua pada hai
            setLikedCourses( (prev) => prev.filter( (cid) => (cid !== course.id)));
            toast.warning("Like Removed");
        }
        else {
            // Phale se like nahi hai ye course
            // Insert yeh course liked courses mai
            if(likedCourses.length === 0)
            {
                setLikedCourses([course.id]);
            }
            else
            {
                // Non-empty hai phale se tho
                setLikedCourses( (prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }

    }

    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} alt="pics"/>

                <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                        
                    </button>
                </div>

            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                {
                    course.description.length > 100 ? 
                    (course.description.substr(0,100)) + "..." : 
                    (course.description)
                }
                </p>
            </div>
        </div>
        
    );
}

export default Card;