import { faker } from '@faker-js/faker';

const THRESHOLD = 10000;

export const users = Array.from(Array(THRESHOLD), () => {
  return {
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    background: faker.image.urlLoremFlickr({ category: 'nature' })
  };
});
