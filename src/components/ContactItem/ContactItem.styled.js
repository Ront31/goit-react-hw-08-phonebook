import styled from '@emotion/styled';

export const ListItem = styled.li`
  text-align: center;

  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const DeleteButton = styled.button`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  align-items: right;
  background-color: rgba(23, 26, 32, 0.8);
  border: none;
  border-radius: 6px;
  color: #fff;
  flex-grow: 1;
  font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
  font-size: 15px;
  height: 36px;
  line-height: 20px;
  margin-left: 8px;
  margin-right: 6px;
  min-width: 50px;
  padding: 0 16px 0 16px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(23, 26, 32, 1);
    cursor: pointer;
  }
`;
