'use client';

import React, { FC } from 'react';
import CompanyForm from './CompanyForm';
import Modal, { ModalProps } from './Modal';

const CompanyFormModal: FC<ModalProps> = ({ onClose, ...rest }) => {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
};

export default CompanyFormModal;
