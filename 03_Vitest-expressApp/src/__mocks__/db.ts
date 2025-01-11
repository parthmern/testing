import { PrismaClient } from '@prisma/client'
import { beforeEach } from 'vitest'
import { mockDeep, mockReset } from 'vitest-mock-extended'

export const prismaClient = mockDeep<PrismaClient>()
// deep mock measns i need every functions "keys" to be mocked
// sum => create, update....
// user => findOne, findMany, ...
