import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDtoBody {
  @ApiProperty()
  id: string;

  @ApiProperty()
  login: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  cpf: string;
}
