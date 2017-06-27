import { Collectable } from './collectable.model'

export class CollectableService {
  private collectables: Collectable[] = [
    { description: 'Lorem ipsum dolor sit amet, consectetur', type: 'book' },
    { description: 'Lorem ipsum dolor sit amet, consectetur', type: 'book' }
  ]

  getCollectables () {
    return this.collectables;
  }
}
