import z from 'zod';

const stringtype=z.string();
type A = z.infer<typeof stringtype>;//this helps to get the type of zod schema and infer it to a TypeScript type