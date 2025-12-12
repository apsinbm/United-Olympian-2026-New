import en from './en.json';
import fr from './fr.json';
import es from './es.json';
import pt from './pt.json';
import ru from './ru.json';
import ar from './ar.json';
import cn from './cn.json';

export type Translations = typeof en;

export const translations: Record<string, Translations> = {
  EN: en,
  FR: fr,
  ES: es,
  PT: pt,
  RU: ru,
  AR: ar,
  CN: cn,
};

export { en, fr, es, pt, ru, ar, cn };
