import React from 'react'
import Student from '../components/Student'
import Map from '../components/Map'

export default function SearchStudent() {
  return (
    <div className = "bg-slate-200 h-[100vh] flex">
        <div className = "ml-[10%] py-[4%]">
            <div className = ""><Student/></div>
            <div className = ""><Student/></div>
            <div className = ""><Student/></div>
        </div>
        <div className = ""></div>
    </div>
  )
}
