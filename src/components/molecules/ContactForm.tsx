import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { getLangFromUrl, useTranslations } from '../../i18n/utils';

interface Props {
  defaultService?: string;
}
const ContactForm = ({ defaultService }: Props) => {
  // get url as URL
  const currentUrl = new URL(window.location.href);
  const lang = getLangFromUrl(currentUrl);
  const t = useTranslations(lang);

  const [step, setStep] = useState(0);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      service_option: defaultService || '',
      description: '',
      name: '',
      email: '',
    },
  });

  const inputClass =
    'border focus:border-anc-primary border-anc-secondary-light rounded-3xl px-4 py-2 w-full outline-none';

  const onSubmit = async (data: any) => {
    try {
      const response = await waitForBackend(data);
      Swal.fire({
        toast: true,
        text: t('contactModal.successText'),
        icon: 'success',
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 5000,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        toast: true,
        text: t('contactModal.errorText'),
        icon: 'error',
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 5000,
      });
    }
  };

  const waitForBackend = async (data: any) => {
    return await fetch(`/.netlify/functions/triggerContactEmail`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

  const selectOptions = t('products.options');

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white text-left p-6 py-8  sm:p-8 relative"
    >
      <span className="text-anc-primary uppercase text-sm font-semibold">
        {t('contactModal.tagline')}
      </span>
      <span className="text-3xl font-serif text-black block">
        {t('contactModal.title')}
      </span>
      {step === 0 && (
        <div className="py-8 flex flex-col gap-4 text-sm">
          <label className="flex flex-col gap-1">
            {t('contactModal.label.product')}
            {defaultService ? (
              <span className="uppercase font-semibold text-lg">
                {defaultService}
              </span>
            ) : (
              <select className={inputClass} {...register('service_option')}>
                <option value="" disabled>
                  {t('contactModal.label.product.placeholder')}
                </option>
                {selectOptions.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            )}
          </label>
          <label>
            {t('contactModal.label.textarea')}
            <textarea
              {...register('description')}
              rows={6}
              className={inputClass}
              placeholder={t('contactModal.label.placeholder')}
            ></textarea>
          </label>
          <div>
            <button
              className="bg-anc-primary float-right p-2 rounded-[0px_20px_20px_20px] hover:bg-anc-primary-light duration-500"
              onClick={() => setStep(1)}
            >
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
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="py-8 flex flex-col gap-4 text-sm">
          <label className="flex flex-col gap-1">
            {t('contactModal.label.name')}*
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder={t('contactModal.label.placeholder')}
              className={inputClass}
            />
          </label>
          <label>
            {t('contactModal.label.email')}*
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder={t('contactModal.label.placeholder')}
              className={inputClass}
            />
          </label>
          <div className="flex flex-col gap-2">
            <span>{t('contactModal.label.mandatory')}*</span>
            <button
              disabled={isSubmitting}
              className="w-full disabled:bg-anc-secondary-light bg-anc-primary p-2 rounded-[0px_20px_20px_20px] text-white flex items-center gap-2 justify-center hover:bg-anc-primary-light duration-500"
            >
              Enviar
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
          </div>
        </div>
      )}
      <svg
        onClick={() => Swal.close()}
        className="absolute top-5 right-5 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          d="M12.5 1.5625C6.40625 1.5625 1.5625 6.40625 1.5625 12.5C1.5625 18.5938 6.40625 23.4375 12.5 23.4375C18.5938 23.4375 23.4375 18.5938 23.4375 12.5C23.4375 6.40625 18.5938 1.5625 12.5 1.5625ZM12.5 21.875C7.34375 21.875 3.125 17.6562 3.125 12.5C3.125 7.34375 7.34375 3.125 12.5 3.125C17.6562 3.125 21.875 7.34375 21.875 12.5C21.875 17.6562 17.6562 21.875 12.5 21.875Z"
          fill="#B24A59"
        />
        <path
          d="M16.7188 17.9688L12.5 13.75L8.28125 17.9688L7.03125 16.7188L11.25 12.5L7.03125 8.28125L8.28125 7.03125L12.5 11.25L16.7188 7.03125L17.9688 8.28125L13.75 12.5L17.9688 16.7188L16.7188 17.9688Z"
          fill="#B24A59"
        />
      </svg>
    </form>
  );
};

export default ContactForm;
