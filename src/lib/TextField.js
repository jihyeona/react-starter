import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

const InputContainer = styled.div`
  background-color: #f5f5f5;
  width: 157px;
  height: 56px;
  border-radius: 4px 4px 0 0;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`

const HelloWorld = styled.label`
  color: rgba(0,0,0,.6);
  left: 16px;
  right: initial;
  top: 50%;
`

const TestTest = styled.p`
    padding-left: 48px;
    padding-right: 16px;
`

const UnderLine = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`

const CharacterCounter = styled.div`
  color: rgba(0,0,0,.6);
  font-size: .75rem;
    font-weight: 400;
    letter-spacing: .0333333333em;
    text-decoration: inherit;
    text-transform: inherit;
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-left: auto;
    margin-right: 0;
    padding-left: 16px;
    padding-right: 0;
    white-space: nowrap;
`

export const TextField = ({ TextInput, FieldLabel }) => {
  return (
    <Container>
      <InputContainer>
        {FieldLabel && <HelloWorld>{FieldLabel}</HelloWorld>}
        {TextInput && <TestTest>{TextInput}</TestTest>}
      </InputContainer>
      <UnderLine />
      <CharacterCounter />
    </Container >
  )
}
