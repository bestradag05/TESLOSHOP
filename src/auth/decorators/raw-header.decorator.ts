import { createParamDecorator, ExecutionContext, InternalServerErrorException } from "@nestjs/common";

export const RawHeader = createParamDecorator(

    ( data: string, ctx: ExecutionContext) => {

        const req = ctx.switchToHttp().getRequest();
        const rawHeader = req.rawHeaders;

        if( !rawHeader ) throw new InternalServerErrorException('RawHeaders not found (request) ');

        return rawHeader;

    }

);