
import React from 'react';
import './style.less';
import { useTranslation, Trans, Translation } from 'react-i18next';

export default function SideBar() {
  let { t, i18n } = useTranslation();

  return (
    <div className="sidebar">
      {t('test')}
      <Trans>test</Trans>
      <Translation>{t => <span>{t('test')}</span> }</Translation>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
      233<br/>
    </div>
  );
}
