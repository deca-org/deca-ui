import { v4 as uuidv4 } from 'uuid';

/**
 * Generates random UUID
 */
export const uuid = (prefix?: string) => {
  const genUUID = uuidv4();
  if (prefix) {
    return `${prefix}-${genUUID}`;
  } else {
    return genUUID;
  }
};
