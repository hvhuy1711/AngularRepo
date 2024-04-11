export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

export const authors = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'hh@gmail.com',
    gender: 'Male',
    ipAddress: '172.16.58.3',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'aa@doe.com',
    gender: 'Female',
    ipAddress: '172.16.58.2',
  },
  {
    id: 3,
    firstName: 'eJan',
    lastName: 'Dfsa',
    email: 'aa@doe.com',
    gender: 'Female',
    ipAddress: '172.16.58.1',
  },
  {
    id: 4,
    firstName: 'Hei',
    lastName: 'Kart',
    email: 'kk@doe.com',
    gender: 'Female',
    ipAddress: '172.16.12.12',
  }
]
