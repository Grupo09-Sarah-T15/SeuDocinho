import styled from "styled-components";

export const StyledConteiner = styled.ul`
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;

  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;

  gap: 40px;

  padding: 20px;

  background-color: var(--color-tertiary);

  @media (min-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
    height: 100vh;
  }
`;
