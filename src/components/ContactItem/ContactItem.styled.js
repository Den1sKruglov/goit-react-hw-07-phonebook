import styled from '@emotion/styled';

export const Text = styled.p`
  font-size: 22px;
  font-weight: 400;
  font-family: Andale Mono, monospace;
`;

export const Button = styled.button`
  display: flex;
  margin-left: auto;
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

// export const Item = styled.li`
//   display: flex;
//   align-items: center;
//   padding: 10px;
//   justify-content: center;
// `;
