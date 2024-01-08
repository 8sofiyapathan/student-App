// import axios from 'axios';
// import React, { useState } from 'react'

// const AddStudents = () => {

//   const [rno, setRno]= useState('');
//   const [name, setName]= useState('');
//   const [dob, setDob]= useState('');
//   const [city, setCity]= useState(''); 

//   const [showAlert, setShowAlert]= useState(false)

//   const handleClick= ()=>{
//     let stud ={
//       "rno": rno,
//       "name": name,
//       "dob": dob,
//       "city": city
//     }
//     if(rno==''||name==''||dob==''||city==''){

//     }else{
//       axios.post('https://locolhost:8080/insert/stud',stud)
//       .then(function(response){
//         setRno('');
//         setName('');
//         setDob('');
//         setCity('');

//         setShowAlert(true)
//       })
//       .catch(function(error){
//         console.log(error);
//       });
//     }
//   }

//   setTimeout(() => {
//     setShowAlert
//   }, 2000);
//   return (
//     <>
//     {
//       showAlert &&(<div class="alert alert-success" role='alert'>
//         Record Saved Succesfully.
//       </div>)
//     }
//       <div className='d-flex flex-column justify-content-center align-item-center'>
//         <h1 className='text-center my-3'>Add Student</h1>
//         <div className='p-4 w-50 border border-dark rounded-5'>

//           <div className='mb-3'>
//             <label htmlFor="stud_name" className='form-label'>Student Roll No</label>
//             <input type="number" className='form-control' placeholder='Roll No' value={rno} onChange={(e)=>setRno(e.target.value)} />
//           </div>

//           <div className='mb-3'>
//             <label htmlFor="stud_name" className='form-label'>Student Name</label>
//             <input type="text" className='form-control' placeholder=' Student Name' value={name} onChange={(e)=>setName(e.target.value)} />
//           </div> 
          
//           <div className='mb-3'>
//             <label htmlFor="dob" className='form-label'>Student DOB</label>
//             <input type="date" className='form-control' id='dob' name='dob' value={dob} onChange={(e)=>setDob(e.target.value)} />
//           </div>
          
//            <div className='mb-3'>
//             <label htmlFor="stud_name" className='form-label'>Student Roll No</label>
//             <input type="text" className='form-control' placeholder='Student City' value={city} onChange={(e)=>setCity(e.target.value)} />
//           </div>
//           <div className='d-flex justify-content-center'>
//             <button className='btn btn-dark' onClick={handleClick}>Add Student</button>
//           </div>
//         </div>
//       </div>n
//     </>
//   )
// }

// export default AddStudents
import React from 'react'

const AddStudents = () => {
  return (
    <div>
     Add student 
    </div>
  )
}

export default AddStudents
