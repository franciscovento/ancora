import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ContactForm from '../molecules/ContactForm';

interface Props {
  fullSize?: boolean;
  children: React.ReactNode;
}
const ContactButton = ({ fullSize = false, children }: Props) => {
  const mySwal = withReactContent(Swal);
  const showPopup = () => {
    mySwal.fire({
      html: <ContactForm />,
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
      background: 'transparent',
    });
  };

  return (
    <button
      className={`hover:bg-anc-primary-light bg-anc-primary py-2 px-4 rounded-[0_20px_20px_20px] text-white flex items-center justify-center gap-2 text-xs duration-500 ${
        fullSize && 'w-full'
      }`}
      onClick={() => showPopup()}
    >
      {' '}
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M11 5.5L10.0169 6.45769L13.8531 10.3125H5.5V11.6875H13.8531L10.0169 15.5189L11 16.5L16.5 11L11 5.5Z"
          fill="white"
        />
        <path
          d="M11 20.625C9.09636 20.625 7.23546 20.0605 5.65264 19.0029C4.06982 17.9453 2.83616 16.4421 2.10766 14.6833C1.37917 12.9246 1.18856 10.9893 1.55995 9.12226C1.93133 7.25519 2.84802 5.54018 4.1941 4.1941C5.54018 2.84802 7.25519 1.93133 9.12226 1.55995C10.9893 1.18856 12.9246 1.37917 14.6833 2.10766C16.4421 2.83616 17.9453 4.06982 19.0029 5.65264C20.0605 7.23546 20.625 9.09636 20.625 11C20.6221 13.5518 19.6071 15.9983 17.8027 17.8027C15.9983 19.6071 13.5518 20.6221 11 20.625ZM11 2.75C9.36831 2.75 7.77326 3.23386 6.41655 4.14038C5.05984 5.0469 4.00242 6.33538 3.378 7.84287C2.75358 9.35036 2.5902 11.0092 2.90853 12.6095C3.22685 14.2098 4.01259 15.6799 5.16637 16.8336C6.32016 17.9874 7.79017 18.7732 9.39051 19.0915C10.9909 19.4098 12.6497 19.2464 14.1571 18.622C15.6646 17.9976 16.9531 16.9402 17.8596 15.5835C18.7661 14.2268 19.25 12.6317 19.25 11C19.2475 8.81275 18.3774 6.71581 16.8308 5.16919C15.2842 3.62256 13.1873 2.75255 11 2.75Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default ContactButton;