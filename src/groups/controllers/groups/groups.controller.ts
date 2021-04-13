import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Group } from '../../entities/group.entity';
import { GroupsService } from '../../services/groups/groups.service';

@Crud({
  model: {
    type: Group
  }
})
@Controller('groups')
export class GroupsController implements CrudController<Group>{
  constructor(public service: GroupsService){}
}
