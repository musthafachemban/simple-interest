import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';





function App() {
 const [principle, setPrinciple] = useState(0)
 const [rate, setRate] = useState(0)
 const [year,setYear] = useState(0)
 const [interest,setInterest] = useState(0)
 const [isPrinciple,SetIsPrinciple] =useState(true)
 const [isRate,setIsRate] = useState(true)
 const [isYear,setIsYear] = useState(true)


 const validateData = (e) =>{
  const {name,value} = e.target
  //console.log(name,value);
 // console.log(!!value.match(/^[0-9]+$/));//to convert into boolean

 if(!!value.match(/^[0-9]*.?[0-9]+$/)){
   if(name === 'principle'){
    setPrinciple(value)
   SetIsPrinciple(true)
   } else if (name==='rate'){
    setRate(value)
    setIsRate(true)
   } else{
    setYear(value)
    setIsYear(true)
   }
 }else{
  if(name==='principle'){
  setPrinciple(value)
  SetIsPrinciple(false)
  } else if(name==='rate'){
    setRate(value)
    setIsRate(false)
  } else{
    setYear(value)
    setIsYear(false)
  }
 }
 
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if(!principle || !rate || !year){
      alert('please fill form completely')
    }else{
      setInterest(principle*rate*year/100)
    }
  }

  const handleReset = (e) =>{
    
     setPrinciple(0)
     setRate(0)
     setYear(0)
     setInterest(0)
     SetIsPrinciple(true)
     setIsRate(true)
     setIsYear(true)
  }

  return (
   <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark '>
   <div className='bg-light p-5 rounded' style={{width:'500px'}}>
     <h1>simple interest app</h1>
     <p>Calculate your simple interest</p>
     <div className='bg-warning mt-5 d-flex justify-content-center align-items-center w-100  rounded flex-column shadow' style={{height:'150px'}}>
        <h1>$ {interest}</h1>
        <p>Total simple interst</p>
  </div>
  <form onSubmit={handleCalculate} className='mt-5'>
       <div className="mb-3">
       <TextField name='principle' onChange={(e)=>validateData(e)} value={principle || ""} className='w-100 shadow' id="outlined-basic" label="$ Principle Amount" variant="outlined" />
       </div>
     { !isPrinciple &&
       <div className='text-danger'>
        <p>* Invalid Value</p>
        </div>
     }
     
       <div className="mb-3">
       <TextField name='rate' onChange={(e)=>validateData(e)}  value={rate || ""} className='w-100 shadow' id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />
       </div>

       { !isRate &&
       <div className='text-danger'>
        <p>* Invalid Value</p>
        </div>
     }
      
       <div className="mb-3">
       <TextField name='year'  onChange={(e)=>validateData(e)}  value={year || ""} className='w-100 shadow' id="outlined-basic" label="Year (yy)" variant="outlined" />
       </div>

       { !isYear &&
       <div className='text-danger'>
        <p>* Invalid Value</p>
        </div>
     }
    
      

       <div className=''>
         <Stack direction="row" spacing={2}>
         <Button  type='submit' disabled={isPrinciple && isRate && isYear ?false:true} variant="contained" className='bg-success'  style={{width:'200px',height:'50px'}}>calculate</Button>
         <Button onClick={handleReset} variant="outlined"  style={{width:'200px',height:'50px',color:'white',backgroundColor:'red'}}>Reset</Button>
          </Stack>
       </div>
       </form>
  </div>

 
   </div>
  );
}

export default App;
