import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {

    let courses = props.courses;
    let category = props.category;

    const [likedCourses,setLikedCourses] = useState([]);

    // console.log("Printing data : ");
    // console.log(courses);

    function getCourses() {

        if(category === "All")
        {
            // Initially takes an emoty array
            let allCourses = [];
        
                // fetch values of each array
                Object.values(courses).forEach(array => {
                // In each array fetch each values
                array.forEach(coursesData => {
                    // Push it into the the empty array allCourses
                    allCourses.push(coursesData);
                })
            })
            return allCourses;
        }
        else
        {
            // Main sirf specific category ka array pass karunga
            return courses[category];
        }
    }

    return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map( (course) => (
                <Card key={course.id} course = {course} likedCourses = {likedCourses}
                 setLikedCourses = {setLikedCourses}/>
            ))
        }
    </div>
    );
}

export default Cards;

