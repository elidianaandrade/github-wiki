import React from 'react'

import { InputContainer } from './styles';

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input placeholder='username/repository' value={value} onChange={onChange}/>
    </InputContainer>
  )
}

export default Input