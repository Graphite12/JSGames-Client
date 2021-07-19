import styled, { css } from "styled-components";

const transition = css`
  transition: transform 0.45s;
`;

export const Tabs_Block = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 33.33%;
  transform: translateY(${(p) => (p.active === 0 ? 0 : p.active * 100)}%);
  ${transition}
`;

export const Tabs_Btn = styled.button`
  flex: 1 1 33.33%;
  outline: none;
  height: 100%;
  cursor: pointer;
  border-right: 2px solid rgba(222,223,325, 0.25);
  color: rgba(255, 255, 255, ${(p) => (p.active ? 0.85 : 0.25)})
  border: unset;
`;

export const Content = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  transform: translateY(
    ${(p) => (p.active === 0 ? 0 : `-${p.active * 300}px`)}
  );
  padding: 10px;
  color: white;
`;

export const Tabs = styled.div`
  width: 300px;
`;
