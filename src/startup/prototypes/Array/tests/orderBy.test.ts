import 'startup';

const user1 = { name: 'fred', age: 48, admin: true, createdAt: new Date(2020, 10) };
const user2 = { name: 'barney', age: 34, admin: false, createdAt: new Date(2020, 12)};
const user3 = { name: 'jacque', age: 40, admin: false, createdAt: new Date(2020, 2)};
const user4 = { name: 'alfred', admin: true, createdAt: new Date(2020, 6)};

const users = [ user1, user2, user3, user4 ];

describe('Array.prototypes.asorder', () => {
  it('short string asc', () => {
    expect(users.asorder('name', 'asc')).toEqual([ user4, user2, user1, user3 ]);
  });
  it('short bool asc + date desc', () => {
    expect(users.asorder([ 'admin', 'createdAt' ], [ 'asc', 'desc' ])).toEqual([ user2, user3, user1, user4 ]);
  });
  it('short on missing field for some', () => {
    expect(users.asorder(['age'], [true])).toEqual([ user2, user3, user1, user4 ]);
  });
});
