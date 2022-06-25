import { IsBoolean, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  description: string;

  @IsBoolean()
  isActive: boolean;
}
