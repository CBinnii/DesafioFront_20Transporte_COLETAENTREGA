export class DeliveryModel {
    id: string = '';
    documento: string = '';
    motorista?: DriverModel;
    cliente_origem?: ClientModel;
    cliente_destino?: ClientModel;
    status_entrega: string = '';
}

export class DriverModel {
    nome: string = '';
}

export class ClientModel {
    nome: string = '';
    endereco: string = '';
    bairro: string = '';
    cidade: string = '';
}