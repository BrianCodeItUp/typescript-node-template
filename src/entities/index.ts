import User from './user.entity'


interface EntityInfo {
  name: string;
  entity: any
}

export const entities: EntityInfo[] = [
  {
    name: 'user',
    entity: User
  }
]

export {
  User
}
