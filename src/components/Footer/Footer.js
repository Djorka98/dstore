import React from 'react';
import { useTranslation } from 'react-i18next';
import { FooterStore } from './FooterStyle';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterStore>
      <p>
        © {new Date().getFullYear()} DStore. {t('footerText')}
      </p>
    </FooterStore>
  );
};