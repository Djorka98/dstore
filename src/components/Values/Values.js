import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaShippingFast, FaTags, FaHeadset, FaMoneyBillWave, FaShieldAlt, FaBoxOpen } from 'react-icons/fa';
import { ValuesSection, ValueGrid, ValueContainer, Description } from './ValuesStyle';

export const Values = () => {
  const { t } = useTranslation();

  const valuesData = [
    { icon: FaShippingFast, color: "blue", description: t('fastShipping') },
    { icon: FaTags, color: "green", description: t('bestPrices') },
    { icon: FaHeadset, color: "purple", description: t('customerSupport') },
    { icon: FaMoneyBillWave, color: "orange", description: t('easyReturn') },
    { icon: FaShieldAlt, color: "red", description: t('securePayment') },
    { icon: FaBoxOpen, color: "brown", description: t('wideRange') }
  ];

  return (
    <ValuesSection>
      <ValueGrid>
        {valuesData.map((value, index) => {
          const IconComponent = value.icon;
          return (
            <ValueContainer key={index} style={{ color: value.color }}>
              <IconComponent size={40} />
              <Description>{value.description}</Description>
            </ValueContainer>
          );
        })}
      </ValueGrid>
    </ValuesSection>
  );
};