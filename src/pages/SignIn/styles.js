import styled from 'styled-components'

export const Container = styled.div`
  margin: 9.8rem 3.5rem 0 3rem;
  gap: 73px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Brand = styled.div`

  display: inline-flex;
  align-items: flex-start;
  gap: 10.739px;

  width: 100%;
  margin-inline: auto;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > h2 {
    display: none;
  }

  > section input {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: 8px;
    font-size: 16px;
  }
  
  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;

    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 24px;
  }
  
  @media (min-width: 1024px) {
    padding: 64px;
    border-radius: 16px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > h2 {
      display: initial;

      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 32px;
      line-height: 140%;
      text-align: center;
    }

    > section input {
      background-color: transparent;

      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 8px;
    }
  }
`;

