import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    color: #000000;
  }

  @media (prefers-color-scheme: dark) {
    a {
      color: #ffffff;
    }
  }
`;
