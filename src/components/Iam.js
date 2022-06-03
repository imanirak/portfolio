
import React from 'react';
import TypeAnimation from 'react-type-animation';


export default function Iam() {
  return (
  
 <TypeAnimation
    cursor={true}
    sequence={[
      'Software Engineer',
      2000,
      'Strategist',
      2000,
      'Technophile',
      2000,
      'Philomath',
      2000,
      'Plant Lover',
  
    ]}
    wrapper="a"
    repeat={3}
   />

  )
}
