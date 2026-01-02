import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
    
    @ApiProperty({
        default: 10,
        description: 'How many rows do you need'
    })
    @IsOptional()
    @IsPositive()
    @Type(() => Number) // Si no colocamos esto va tomar el parametro como string. (Esta es una opcion y la otra es el habilitar el enableImpricitConversions)
    //Transformar
    limit?: number;

    @ApiProperty({
        default: 0,
        description: 'How many rows do you want to skip'
    })
    @IsOptional()
    @Min(0)
    @Type(() => Number) // Si no colocamos esto va tomar el parametro como string. (Esta es una opcion y la otra es el habilitar el enableImpricitConversions)
    offset?: number;
}