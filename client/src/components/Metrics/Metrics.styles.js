import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fefefe;

  position: fixed;
  right: 0;

  overflow: overlay;

  display: flex;
  align-items: center;

  height: 100vh;
  width: 50vw;
`;

export const PreTextWrapper = styled.pre`
  padding-left: 1vw;
  padding-top: 5vh;
`;

export const TextWrapper = styled.code`
  color: #343f57;

  height: 90vh;
  overflow: overlay;
  font-size: 11px;
`;
