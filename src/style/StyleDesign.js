import styled from 'styled-components';

export const DropdownButton = styled.button`
  padding: 10px 15px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: #f9f9f9;
  border-radius: 4px;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 800px;
  z-index: 1000;
`;

export const ModalHeader = styled.div`
  margin-bottom: 15px;
`;

export const SearchBar = styled.input`
  width: 97%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;


export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const Column = styled.div`
  flex: 1;
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
`;

export const TreatmentItem = styled.label`
  display: flex;
  align-items: center;
  margin: 5px 0;
  gap: 8px; /* Add some space between the checkbox and the text */
  text-align: left; /* Ensure text aligns to the left */
`;

export const ResetButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
  border-radius: 4px;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const ActionButton = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.primary ? '#fff' : '#000')};
  border-radius: 4px;
`;

export const SelectedButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
  border-radius: 4px;
`;
export const UpdateButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background-color:#808080;
  cursor: pointer;
  border-radius: 4px;
`;
export const DeleteButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  margin-left: 200px;
  background-color:#808080;
  cursor: pointer;
  border-radius: 4px;
`;


export const ClearButton = styled.button`
  position: absolute;
  right: 20px;
  top: 23%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
`;