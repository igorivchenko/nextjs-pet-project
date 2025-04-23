'use client';

import React, { FC } from 'react';
import CompanyForm, { CompanyFormProps } from './CompanyForm';
import Modal, { ModalProps } from './Modal';

export interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

const CompanyFormModal: FC<CompanyFormModalProps> = ({ onSubmit, ...rest }) => {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default CompanyFormModal;
