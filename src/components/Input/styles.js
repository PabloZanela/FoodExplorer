import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  
  border-radius: 10px;

  > input {
    height: 48px;
    width: 100%;
    
    
    padding: 12px 14px;
    
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 5px;
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE_100};
    }

  }
`;