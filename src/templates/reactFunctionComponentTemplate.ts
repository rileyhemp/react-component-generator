import { StyleLanguage } from '../types';

export function reactFunctionComponentTemplate(
  componentName: string,
  stylesLanguage: StyleLanguage = StyleLanguage.scss
) {
  return `
import styles from './${componentName}.${stylesLanguage}';

export interface I${componentName}Props {}

export default function ${componentName}({}: I${componentName}Props) {
  return <div className={styles.wrapper></div>;
}
`.trimLeft();
}
