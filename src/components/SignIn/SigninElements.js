import styled from 'styled-components';


export const Container = styled.div`
  

`
export const FormWrap = styled.form`
 

`
export const Icon = styled.div`
 
    
  `;

export const FormContent = styled.div`
  

`
export const Form = styled.form`
  


`

export const FormH1 = styled.h1`
 


`

export const FormLabel = styled.label`
  

`

export const FormInput = styled.input`

`

export const FormButton = styled.button`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#60F2E7': '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px': '12px 30px')};
  color: ${({dark}) => (dark ? '#010606': '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px': '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff': '#60F2E7')};

  }
 

  }


`
export const Text = styled.p`



`