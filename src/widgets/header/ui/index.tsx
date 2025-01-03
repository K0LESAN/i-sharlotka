import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import logoIcon from '@/shared/assets/icons/logo.svg';
import searchIcon from '@/shared/assets/icons/search.svg';
import shoppingCartIcon from '@/shared/assets/icons/shopping-cart.svg';
import heartIcon from '@/shared/assets/icons/heart.svg';
import userIcon from '@/shared/assets/icons/user.svg';
import styles from './index.module.scss';

export default async function Header() {
  const t = await getTranslations('header');
  const metadata = await getTranslations('metadata');

  return (
    <div className={styles.header}>
      <div className={styles.header__main}>
        <Link href='/' className={styles.header__logo}>
          <Image
            src={logoIcon}
            priority
            alt={`${metadata('title')} | ${metadata('description')}`}
          />
        </Link>
        <label className={styles.header__inner} htmlFor='search'>
          <input
            className={styles.header__search}
            id='search'
            type='text'
            placeholder={t('searchByProduct')}
          />
          <Image className={styles.header__loop} src={searchIcon} alt='' />
        </label>
        <div className={styles.header__links}>
          <Link className={styles.header__link} href='/order'>
            {t('orderStatus')}
          </Link>
          <Link className={styles.header__link} href='/about'>
            {t('aboutUs')}
          </Link>
        </div>
      </div>
      <div className={styles.header__wrapper}>
        <div className={styles.header__shop}>
          <Link className={styles.header__cart} href='/cart'>
            <Image src={shoppingCartIcon} alt={t('cart')} />
          </Link>
          <Link className={styles.header__favorite} href='/favorites'>
            <Image src={heartIcon} alt={t('favorites')} />
          </Link>
        </div>
        <div className={styles.header__user}>
          <Link className={styles.header__profile} href='/profile'>
            <Image src={userIcon} alt={t('profile')} />
          </Link>
          <Link className={styles.header__login} href='/login'>
            {t('login')}
          </Link>
        </div>
      </div>
    </div>
  );
}
