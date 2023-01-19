import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 10px;
  border: 1.5px solid #2f9e99;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Header = styled.h2`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 10px;
  font-family: Andale Mono, monospace;
`;

export const Input = styled.input`
  display: block;
  width: 435px;
  padding: 0 20px;
  margin-bottom: 10px;
  background: #e9eff6;
  line-height: 40px;
  border-radius: 20px;
  border: 1px solid coral;
`;

export const Submit = styled.button`
  display: flex;
  margin: 0 auto;
  height: 20px;
  padding: 15px;
  font-family: Andale Mono, monospace;
  font-size: 18px;

  border-radius: 20px;
  border-style: none;
  align-items: center;
  cursor: pointer;

  background-color: #f69a73;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  :hover,
  :focus {
    background-color: coral;
  }
`;
