import React from "react";

import styled from "styled-components";

export const ModalUi = ({ width, color, children, onClose }) => {
  return (
    <ContainerModal>
      <Backdrop width={width} onClick={onClose}></Backdrop>
      <Modal color={color}>{children}</Modal>
    </ContainerModal>
  );
};
const ContainerModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 2;
`;
const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.width};
  position: fixed;
  z-index: -1;
`;
const Modal = styled.div`
  width: 400px;
  height: auto;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  color: ${(props) => props.color};
  position: relative;
  z-index: 99;
`;
