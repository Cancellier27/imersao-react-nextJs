/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`

function Input({ onChange }) {
  return (
    <div>
      <InputBase onChange={onChange} />
    </div>
  )
}

export default Input
