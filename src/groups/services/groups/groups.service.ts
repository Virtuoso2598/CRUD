import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Group } from '../../entities/group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GroupsService extends TypeOrmCrudService<Group>{
  constructor(@InjectRepository(Group) groupsRepository: Repository<Group>){
    super(groupsRepository);
  }
}