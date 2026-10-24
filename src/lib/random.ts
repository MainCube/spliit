import { nanoid } from 'nanoid'

export function randomId() {
  return nanoid()
}

export function randomIdLong() {
  return nanoid(30)
}
