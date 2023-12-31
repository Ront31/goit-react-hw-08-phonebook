import styled from '@emotion/styled';

export const ListItem = styled.li`
  text-align: center;
  color: #353535;
  font-size: 22px;
  font-weight: 600;
  font-family: 'Cormorant Garamond', serif;
  margin-bottom: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const DeleteButton = styled.button`
  outline: none;
  padding: 8px 20px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  color: #353535;
  font-size: 22px;
  font-weight: 600;
  font-family: 'Cormorant Garamond', serif;
  border: 1px solid #d4dae3;
  border-radius: 4px;
  z-index: 1;
  position: relative;
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    box-shadow: -10px -10px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  &:hover {
    color: #000;
  }
  &:hover:after {
    top: 0;
    height: 100%;
  }
`;
