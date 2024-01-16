import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border: 0;
  padding: 12px 32px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 24px;
  
  &:disabled {
    opacity: 0.5;
  }

`;