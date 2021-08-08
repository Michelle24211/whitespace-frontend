/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Registration from '../../components/AuthModal';

interface Props {
  location: any;
}

const RegistrationPage: React.FC<Props> = ({ location }: Props) => (
  <Registration renderAsPage location={location} />
);

export default RegistrationPage;
