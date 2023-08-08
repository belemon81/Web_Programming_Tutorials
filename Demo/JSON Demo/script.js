const bear = {
    name: 'Ice Bear',
    hobbies: ['knitting', 'cooking', 'dancing']
};
console.log(bear);

const serializedBear = JSON.stringify(bear);
console.log(serializedBear);

const bearString =
    '{"name":"Ice Bear","hobbies":["knitting","cooking","dancing"]}';
console.log(bearString);

bear0 = JSON.parse(bearString);
console.log(bear0);