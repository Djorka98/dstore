import React from "react";
import {
  HeroSection,
  HeroTitle,
  HeroDesc,
  HeroImage,
  HeroButton,
  HeroSpan,
} from './HeroStyle';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <HeroTitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {t('heroTitle')}
      </HeroTitle>

      <HeroDesc
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {t('heroDesc').split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </HeroDesc>

      <HeroImage
        src="/images/laptop_gamer.png"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <HeroButton
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {t('heroButton')}
      </HeroButton>

      <HeroSpan
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {t('heroSpan')}
      </HeroSpan>
    </HeroSection>
  );
};