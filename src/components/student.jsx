import React from 'react'

export default function Student() {
  return (
    <div className ="bg-slate-200 w-[60vw] flex h-[20vh] p-5 border-b border-slate-500">
        <img src={require('../images/pfp.jpeg')} className = "h-[fit]"/>
        <ul className = "ml-4">
            <li><h1>Name</h1></li>
            <li><h2>Univeristy</h2></li>
            <li><p>Description</p></li>
        </ul>
    </div>
  )
}
