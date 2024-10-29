import React from 'react';
import { HeaderStore, Navbar, NavLinks, NavLink, Logo } from './HeaderStyle';
import { useTranslation } from 'react-i18next';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderStore>
      <Navbar>
        <Logo as={RouterNavLink} to="/">{t('storeLogo')}</Logo>
        
        <NavLinks>
          <li><NavLink as={RouterNavLink} to="/gaming_laptop">{t('gamingLaptop')}</NavLink></li> 
          <li><NavLink as={RouterNavLink} to="/gaming_tablet">{t('gamingTablet')}</NavLink></li> 
          <li><NavLink as={RouterNavLink} to="/gaming_phone">{t('gamingPhone')}</NavLink></li> 
          <li><NavLink as={RouterNavLink} to="/smart_watch">{t('smartWatch')}</NavLink></li> 
        </NavLinks>
      </Navbar>
    </HeaderStore>
  );
};
