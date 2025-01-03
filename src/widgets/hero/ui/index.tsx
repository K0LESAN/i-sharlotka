import { Link } from '@/i18n/routing';
import Image from 'next/image';
import vkIcon from '@/shared/assets/icons/vk.svg';
import facebookIcon from '@/shared/assets/icons/facebook.svg';
import instagramIcon from '@/shared/assets/icons/instagram.svg';
import emailIcon from '@/shared/assets/icons/email.svg';
import activeTriangleIcon from '@/shared/assets/icons/active-triangel.svg';
import unactiveTriangleIcon from '@/shared/assets/icons/unactive-triangel.svg';
import iphoneImage from '@/shared/assets/images/iphone.png';
import airplaneImage from '@/shared/assets/images/airplane.png';
import { getTranslations } from 'next-intl/server';
import styles from './index.module.scss';

export default async function Hero() {
  const t = await getTranslations('hero');

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.title}>
          <span className={`${styles.title__part} ${styles.title__part_bold}`}>
            {t('title.create')}
          </span>
          <span className={`${styles.title__part}`}>
            {t('title.individual')}
          </span>
          <span className={`${styles.title__part} ${styles.title__part_bold}`}>
            {t('title.design')}
          </span>
          <span className={`${styles.title__part}`}>{t('title.for')}</span>
          <span className={`${styles.title__part} ${styles.title__part_bold}`}>
            {t('title.case')}
          </span>
        </div>
        <Link className={styles.creator} href={'/constructor'}>
          <span className={styles.creator__text}>{t('button')}</span>
          <Image className={styles.creator__iphone} src={iphoneImage} alt='' />
        </Link>
        <button className={styles.choose}>
          <span className={styles.choose__text}>{t('down')}</span>
          <span className={styles.choose__wrapper}>
            <Image
              className={styles.choose__triangle}
              src={unactiveTriangleIcon}
              alt=''
            />
            <Image
              className={styles.choose__triangle}
              src={activeTriangleIcon}
              alt=''
            />
            <Image
              className={styles.choose__triangle}
              src={unactiveTriangleIcon}
              alt=''
            />
          </span>
        </button>
      </div>
      <div className={styles.special}>
        <Image
          className={styles.special__background}
          src={airplaneImage}
          alt=''
        />
        <h3 className={styles.subtitle}>{t('special')}</h3>
        <hr className={styles.line} />
        <div className={styles.description}>
          <span className={styles.description__part}>{t('delivery.free')}</span>
          <span
            className={`${styles.description__part} ${styles.description__part_bold}`}
          >
            {t('delivery.order')}
          </span>
        </div>
        <p className={styles.offer}>
          <span className={styles.offer__from}>{t('from')}</span>
          <span className={styles.offer__price}>650₽</span>
        </p>
      </div>
      <div className={styles.socials}>
        <Link className={styles.social} href={'https://vk.com'}>
          <Image src={vkIcon} alt='vk' />
        </Link>
        <Link className={styles.social} href={'https://facebook.com'}>
          <Image src={facebookIcon} alt='facebook' />
        </Link>
        <Link className={styles.social} href={'https://instagram.com'}>
          <Image src={instagramIcon} alt='instagram' />
        </Link>
        <Link className={styles.social} href={'mail:i-sharlotka@gmail.com'}>
          <Image src={emailIcon} alt='email' />
        </Link>
      </div>
    </div>
  );
}
