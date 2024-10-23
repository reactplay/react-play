import { faker } from '@faker-js/faker';
import { USER_COUNT } from './utilsConstants';

/**
 * Generates a single user object with random data.
 *
 * @returns {Object} - A user object containing name, avatar, and background.
 */
const generateUser = () => {
  const { person, image } = faker;

  // Generate user information
  const user = {
    name: person.fullName(),
    avatar: image.avatar(),
    background: image.urlLoremFlickr({ category: 'nature' })
  };

  return user;
};

/**
 * Generates an array of users with random data.
 *
 * @param {number} count - The number of users to generate.
 * @returns {Array<Object>} - An array of user objects.
 */
const generateUsers = (count) => Array.from({ length: count }, generateUser);

export const users = generateUsers(USER_COUNT);
