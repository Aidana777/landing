// ModalSection.tsx
import React from 'react';
import Modal from '../ModalProps/ModalProps';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  setIsModalOpen,
  setIsNeedleTypeModalOpen,
  setIsCatheterTypeModalOpen,
  setModalContent,
  setNeedleTypeContent,
  setCatheterTypeContent,
  setInputValueFirst,
  setItemsModalFirst,
} from '../Slices/contentSlice';

interface ModalSectionProps {
  isOpen: boolean;
  onClose: () => void;
  selectedButton: string | null;
  needleTypeContent: string;
  catheterTypeContent: string;
  itemsModalFirst: string[];
  onRemoveItemFirst: (index: number) => void;
  onInputChangeFirst: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddItemFirst: () => void;
}

const ModalSection: React.FC<ModalSectionProps> = ({
  isOpen,
  onClose,
  selectedButton,
  needleTypeContent,
  catheterTypeContent,
  itemsModalFirst,
  onRemoveItemFirst,
  onInputChangeFirst,
  onAddItemFirst,
}) => {
  const dispatch = useDispatch();
  const contentState = useSelector((state: RootState) => state.content);

  const closeModal = () => {
    dispatch(setIsModalOpen(false));
    dispatch(setIsNeedleTypeModalOpen(false));
    dispatch(setIsCatheterTypeModalOpen(false));
    dispatch(setModalContent(''));
    dispatch(setNeedleTypeContent(''));
    dispatch(setCatheterTypeContent(''));
    dispatch(setInputValueFirst(''));
    dispatch(setItemsModalFirst([]));
  };

  // ... (other functions and state variables)

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      {/* ... (modal content) */}
    </Modal>
  );
};

export default ModalSection;
