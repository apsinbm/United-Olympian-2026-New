import en from './en.json';
import fr from './fr.json';
import es from './es.json';
import pt from './pt.json';
import ru from './ru.json';

export type Translations = typeof en;

export const translations: Record<string, Translations> = {
  EN: en,
  FR: fr,
  ES: es,
  PT: pt,
  RU: ru,
};

export { en, fr, es, pt, ru };
