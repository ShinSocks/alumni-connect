import React from 'react'

export default function University() {
  return (
    
      <div class="bg-white border rounded-lg overflow-hidden shadow-lg w-[8cm] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
        <img class="h-48 w-full object-cover" src={require('../images/UfT.jpeg')} alt="alumni"/>
        <div class="p-6">
          <div class="flex items-baseline">
            <span class="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">300+ Alumni</span>
            <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide"></div>
          </div>
          <h4 class="mt-1 font-semibold text-lg leading-tight truncate">University of Toronto</h4>
          <div class="mt-1">
            <span class="text-gray-600 text-sm">ON, Canada</span>
          </div>
          
        </div>
      </div>
    
  )
}
