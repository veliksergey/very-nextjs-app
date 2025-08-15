import {useTranslations} from 'next-intl';

const LocalePage = () => {
  const t = useTranslations('HomePage');

  return (
  <div>
    <h1>{t('title')}</h1>
    <p>{t('about')}</p>
  </div>
  );
}

export default LocalePage