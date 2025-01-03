interface ParamsWithLocale<T = never> {
  params: Promise<
    {
      locale: Locales;
    } & T
  >;
}

type DefaultLocale = 'ru';
type Locales = DefaultLocale | 'en';

export type { ParamsWithLocale, DefaultLocale, Locales };
