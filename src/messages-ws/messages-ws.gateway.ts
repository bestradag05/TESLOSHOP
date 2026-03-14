import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessagesWsService } from './messages-ws.service';
import { Socket } from 'socket.io';
import { Server } from 'http';
import { NewMessageDto } from './dtos/new-message.dto';

@WebSocketGateway({ cors: true })
export class MessagesWsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() wss: Server;

  constructor(private readonly messagesWsService: MessagesWsService) {}

  handleConnection(client: Socket) {
    /* console.log('Client connected:', client.id); */

    this.messagesWsService.registerClient(client);

    this.wss.emit(
      'clients-updated',
      this.messagesWsService.getConnectedClients(),
    );
  }

  handleDisconnect(client: Socket) {
    /*  console.log('Client disconnected:', client.id); */

    this.messagesWsService.removeClient(client.id);
    this.wss.emit(
      'clients-updated',
      this.messagesWsService.getConnectedClients(),
    );
  }


  @SubscribeMessage('message-from-client')
  onMessageFromClien(client: Socket, payload: NewMessageDto)   {

    //TODO: Emite unicamente al cliente que manda el mensaje.

    /* client.emit('message-from-server', {
      fullName: 'Soy yo!',
      message: payload.message || 'no-message!!',
    }); */

    //TODO: Emitir a todos MENOS, al cliente que manda el mensaje.

    /* client.broadcast.emit('message-from-server', {
      fullName: 'Soy yo!',
      message: payload.message || 'no-message!!',
    }); */

    //TODO: Emitir a todos los clientes, incluido el que manda el mensaje.
    
    this.wss.emit('message-from-server', {
      fullName: 'Soy yo!',
      message: payload.message || 'no-message!!',
    });

  }



}
