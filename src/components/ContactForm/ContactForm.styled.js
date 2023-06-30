import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const AddContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  text-align: center;
  color: #353535;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Cormorant Garamond', serif;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const Input = styled(Field)`
  display: flex;
  flex-direction: column;
  margin: 0.5rem auto;
  align-items: center;
  font-size: large;
  text-align: left;
  padding: 0.5rem 15rem 0.5rem 1rem;
`;

export const AddButton = styled.button`
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: rgba(23, 26, 32, 0.8);
  border: none;
  border-radius: 6px;
  color: #fff;
  flex-grow: 1;
  font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
  font-size: 15px;
  height: 36px;
  line-height: 20px;
  margin-left: 8px;
  margin-right: 6px;
  min-width: 185px;
  padding: 0 16px 0 16px;
  color: white;
  cursor: pointer;
  &:hover {
    cbackground-color: rgba(23, 26, 32, 1);
    cursor: pointer;
  }
`;

export const CustomErrorMessage = styled(ErrorMessage)`
  text-align: center;
  font-size: 16px;
  max-width: 20vw;
  color: red;
  margin-top: 8px;
`;
