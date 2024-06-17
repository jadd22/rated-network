import { Repository } from 'typeorm';

export abstract class DBAbstractService {
  protected constructor(protected readonly respository: Repository<any>) {}

  async save(options) {
    return this.respository.save(options);
  }

  async find(options = {}) {
    return this.respository.find(options);
  }

  async findOne(options) {
    return this.respository.findOne(options);
  }

  async update(id, options) {
    return this.respository.update(id, options);
  }

  async delete(id) {
    return this.respository.delete(id);
  }
}
