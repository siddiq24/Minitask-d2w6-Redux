import React, { useState } from 'react'
import FormComponent from '../components/FormComponent'
import SmokersTable from '../components/SmokersTable'
import Navbar from '../components/Navbar'

function SurveyPage() {
  const [form, setForm] = useState(true)
  console.log(form)

  const handleForm = () => {
    setForm(!form)
  }

  return (
    <div className='bg-slate-950 min-h-screen'>
      <FormComponent form={form} handleForm={handleForm}/>
      <SmokersTable handleForm={handleForm}/>
    </div>
  )
}

export default SurveyPage