import { StyleLanguage } from '../types';

export function reactFunctionComponentTemplate(
  componentName: string,
  stylesLanguage: StyleLanguage = StyleLanguage.scss
) {
  return `
import React from 'react';

import styles from './${componentName}.${stylesLanguage}';

export interface I${componentName}Props {
}

export function ${componentName}({}: ${componentName}Props) {
  return <></>;
}
`.trimLeft();
}
