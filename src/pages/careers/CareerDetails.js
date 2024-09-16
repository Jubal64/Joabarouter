import { useLoaderData, useParams } from "react-router-dom";

 
export default function CareerDetails() {
      useParams()
    const career = useLoaderData()

  return (
    <div className="career-details">
      <h2>Careers Details for {career.title }</h2>
      <p>Starting Salary : {career.salary} </p>
      <p>Location : {career.location} </p>
      <div className="details">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad itaque iste assumenda fugit 
        aspernatur labore aut eos id fugiat sint incidunt, laudantium pariatur iure nesciunt provident, 
        dolorem illum impedit dolore cumque voluptatem cupiditate vitae cum? Officia voluptatum distinctio 
        molestias, maxime ut voluptates ipsam odio natus porro impedit sunt similique magnam magni atque! 
        Accusamus atque et architecto ratione voluptates minus, amet tempora voluptatum iure aperiam molestias 
        expedita, beatae exercitationem sunt, praesentium assumenda doloribus labore consequuntur impedit est 
        animi error odit quibusdam? 
        </p>
      </div>
    </div>
  );
}

 
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params
  const res = await fetch('http://localhost:8000/careers/' + id)

if(!res.ok) {
  throw Error('career not found')
}

  return res.json()
} 