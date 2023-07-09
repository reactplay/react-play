import { faker } from '@faker-js/faker';

const THRESHOLD = 10000;

export const users = Array.from(Array(THRESHOLD), () => {
  return {
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    background: faker.image.nature()
  };
});
