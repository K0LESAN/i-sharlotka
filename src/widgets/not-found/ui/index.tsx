import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import styles from './index.module.scss';

export default async function NotFound() {
  const t = await getTranslations('notFound');

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.description}>{t('description')}</p>
        <Link className={styles.home} href='/'>
          {t('home')}
        </Link>
      </div>
    </div>
  );
}
