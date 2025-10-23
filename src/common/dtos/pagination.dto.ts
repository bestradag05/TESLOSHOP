import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
    
    @IsOptional()
    @IsPositive()
    @Type(() => Number) // Si no colocamos esto va tomar el parametro como string. (Esta es una opcion y la otra es el habilitar el enableImpricitConversions)
    //Transformar
    limit?: number;

    @IsOptional()
    @Min(0)
    @Type(() => Number) // Si no colocamos esto va tomar el parametro como string. (Esta es una opcion y la otra es el habilitar el enableImpricitConversions)
    offset?: number;
}