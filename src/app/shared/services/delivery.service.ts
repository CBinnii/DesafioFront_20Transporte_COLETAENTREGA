import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DeliveryModel } from '../models/delivery.model';
import { Observable, of } from 'rxjs';
import { ProgressDelivery } from '../models/delivery-progress.model';
import { FailureDelivery } from '../models/delivery-failure.model';
import { NeighborhoodDelivery } from '../models/delivery-neighborhood.model';

@Injectable()
export class DeliveryService {
    deliveryMock: DeliveryModel[] = [
        {
            id: "1",
            documento: "01021",
            motorista: {
                nome: "Carlos Pereira"
            },
            cliente_origem: {
                nome: "Empresa ABC",
                endereco: "Rua dos Pinheiros, 789",
                bairro: "Jardins",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Ana Clara",
                endereco: "Rua Vergueiro, 1234",
                bairro: "Liberdade",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        },
        {
            id: "2",
            documento: "01022",
            motorista: {
                nome: "Carla Souza"
            },
            cliente_origem: {
                nome: "Empresa DEF",
                endereco: "Rua Augusta, 345",
                bairro: "Consolação",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Pedro Lima",
                endereco: "Avenida Brasil, 1010",
                bairro: "Jardins",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "3",
            documento: "01023",
            motorista: {
                nome: "Maria Oliveira"
            },
            cliente_origem: {
                nome: "Empresa GHI",
                endereco: "Avenida Ibirapuera, 890",
                bairro: "Moema",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "João Mendes",
                endereco: "Rua Pamplona, 567",
                bairro: "Jardim Paulista",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "4",
            documento: "01024",
            motorista: {
                nome: "João Silva"
            },
            cliente_origem: {
                nome: "Empresa XYZ",
                endereco: "Rua das Flores, 123",
                bairro: "Liberdade",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Paula Silva",
                endereco: "Rua da Consolação, 123",
                bairro: "Centro",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        },
        {
            id: "5",
            documento: "01025",
            motorista: {
                nome: "Carlos Pereira"
            },
            cliente_origem: {
                nome: "Empresa ABC",
                endereco: "Rua dos Pinheiros, 789",
                bairro: "Bela Vista",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Carlos Lima",
                endereco: "Rua Paulista, 101",
                bairro: "Moema",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        },
        {
            id: "6",
            documento: "01026",
            motorista: {
                nome: "Carla Souza"
            },
            cliente_origem: {
                nome: "Empresa DEF",
                endereco: "Rua Augusta, 345",
                bairro: "Jardim Paulista",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Ana Souza",
                endereco: "Rua Vergueiro, 567",
                bairro: "Consolação",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "7",
            documento: "01027",
            motorista: {
                nome: "Maria Oliveira"
            },
            cliente_origem: {
                nome: "Empresa GHI",
                endereco: "Avenida Ibirapuera, 890",
                bairro: "Centro",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Maria Souza",
                endereco: "Avenida Paulista, 456",
                bairro: "Bela Vista",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        },
        {
            id: "8",
            documento: "01028",
            motorista: {
                nome: "João Silva"
            },
            cliente_origem: {
                nome: "Empresa XYZ",
                endereco: "Rua das Flores, 123",
                bairro: "Jardins",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Ana Clara",
                endereco: "Rua Vergueiro, 1234",
                bairro: "Liberdade",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "9",
            documento: "01029",
            motorista: {
                nome: "Carlos Pereira"
            },
            cliente_origem: {
                nome: "Empresa ABC",
                endereco: "Rua dos Pinheiros, 789",
                bairro: "Consolação",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Pedro Lima",
                endereco: "Avenida Brasil, 1010",
                bairro: "Jardins",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "10",
            documento: "01030",
            motorista: {
                nome: "Carla Souza"
            },
            cliente_origem: {
                nome: "Empresa DEF",
                endereco: "Rua Augusta, 345",
                bairro: "Moema",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "João Mendes",
                endereco: "Rua Pamplona, 567",
                bairro: "Jardim Paulista",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        },
        {
            id: "11",
            documento: "01031",
            motorista: {
                nome: "Maria Oliveira"
            },
            cliente_origem: {
                nome: "Empresa GHI",
                endereco: "Avenida Ibirapuera, 890",
                bairro: "Liberdade",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Paula Silva",
                endereco: "Rua da Consolação, 123",
                bairro: "Centro",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "12",
            documento: "01032",
            motorista: {
                nome: "João Silva"
            },
            cliente_origem: {
                nome: "Empresa XYZ",
                endereco: "Rua das Flores, 123",
                bairro: "Bela Vista",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Carlos Lima",
                endereco: "Rua Paulista, 101",
                bairro: "Moema",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "13",
            documento: "01033",
            motorista: {
                nome: "Carlos Pereira"
            },
            cliente_origem: {
                nome: "Empresa ABC",
                endereco: "Rua dos Pinheiros, 789",
                bairro: "Jardim Paulista",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Ana Souza",
                endereco: "Rua Vergueiro, 567",
                bairro: "Consolação",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        },
        {
            id: "14",
            documento: "01034",
            motorista: {
                nome: "Carla Souza"
            },
            cliente_origem: {
                nome: "Empresa DEF",
                endereco: "Rua Augusta, 345",
                bairro: "Centro",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Maria Souza",
                endereco: "Avenida Paulista, 456",
                bairro: "Bela Vista",
                cidade: "São Paulo"
            },
            status_entrega: "INSUCESSO"
        },
        {
            id: "15",
            documento: "01035",
            motorista: {
                nome: "Maria Oliveira"
            },
            cliente_origem: {
                nome: "Empresa GHI",
                endereco: "Avenida Ibirapuera, 890",
                bairro: "Jardins",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Ana Clara",
                endereco: "Rua Vergueiro, 1234",
                bairro: "Liberdade",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "16",
            documento: "01036",
            motorista: {
                nome: "João Silva"
            },
            cliente_origem: {
                nome: "Empresa XYZ",
                endereco: "Rua das Flores, 123",
                bairro: "Consolação",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Pedro Lima",
                endereco: "Avenida Brasil, 1010",
                bairro: "Jardins",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        },
        {
            id: "17",
            documento: "01037",
            motorista: {
                nome: "Carlos Pereira"
            },
            cliente_origem: {
                nome: "Empresa ABC",
                endereco: "Rua dos Pinheiros, 789",
                bairro: "Moema",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "João Mendes",
                endereco: "Rua Pamplona, 567",
                bairro: "Jardim Paulista",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "18",
            documento: "01038",
            motorista: {
                nome: "Carla Souza"
            },
            cliente_origem: {
                nome: "Empresa DEF",
                endereco: "Rua Augusta, 345",
                bairro: "Liberdade",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Paula Silva",
                endereco: "Rua da Consolação, 123",
                bairro: "Centro",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "19",
            documento: "01039",
            motorista: {
                nome: "Maria Oliveira"
            },
            cliente_origem: {
                nome: "Empresa GHI",
                endereco: "Avenida Ibirapuera, 890",
                bairro: "Bela Vista",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Carlos Lima",
                endereco: "Rua Paulista, 101",
                bairro: "Moema",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        },
        {
            id: "20",
            documento: "01040",
            motorista: {
                nome: "João Silva"
            },
            cliente_origem: {
                nome: "Empresa XYZ",
                endereco: "Rua das Flores, 123",
                bairro: "Jardim Paulista",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Ana Souza",
                endereco: "Rua Vergueiro, 567",
                bairro: "Consolação",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        },
        {
            id: "21",
            documento: "01041",
            motorista: {
                nome: "Carlos Pereira"
            },
            cliente_origem: {
                nome: "Empresa ABC",
                endereco: "Rua dos Pinheiros, 789",
                bairro: "Centro",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Maria Souza",
                endereco: "Avenida Paulista, 456",
                bairro: "Bela Vista",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "22",
            documento: "01042",
            motorista: {
                nome: "Carla Souza"
            },
            cliente_origem: {
                nome: "Empresa DEF",
                endereco: "Rua Augusta, 345",
                bairro: "Jardins",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Ana Clara",
                endereco: "Rua Vergueiro, 1234",
                bairro: "Liberdade",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        },
        {
            id: "23",
            documento: "01043",
            motorista: {
                nome: "Maria Oliveira"
            },
            cliente_origem: {
                nome: "Empresa GHI",
                endereco: "Avenida Ibirapuera, 890",
                bairro: "Consolação",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Pedro Lima",
                endereco: "Avenida Brasil, 1010",
                bairro: "Jardins",
                cidade: "São Paulo"
            },
            status_entrega: "INSUCESSO"
        },
        {
            id: "24",
            documento: "01044",
            motorista: {
                nome: "João Silva"
            },
            cliente_origem: {
                nome: "Empresa XYZ",
                endereco: "Rua das Flores, 123",
                bairro: "Moema",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "João Mendes",
                endereco: "Rua Pamplona, 567",
                bairro: "Jardim Paulista",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "25",
            documento: "01045",
            motorista: {
                nome: "Carlos Pereira"
            },
            cliente_origem: {
                nome: "Empresa ABC",
                endereco: "Rua dos Pinheiros, 789",
                bairro: "Liberdade",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Paula Silva",
                endereco: "Rua da Consolação, 123",
                bairro: "Centro",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        },
        {
            id: "26",
            documento: "01046",
            motorista: {
                nome: "Carla Souza"
            },
            cliente_origem: {
                nome: "Empresa DEF",
                endereco: "Rua Augusta, 345",
                bairro: "Bela Vista",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Carlos Lima",
                endereco: "Rua Paulista, 101",
                bairro: "Moema",
                cidade: "São Paulo"
            },
            status_entrega: "INSUCESSO"
        },
        {
            id: "27",
            documento: "01047",
            motorista: {
                nome: "Maria Oliveira"
            },
            cliente_origem: {
                nome: "Empresa GHI",
                endereco: "Avenida Ibirapuera, 890",
                bairro: "Jardim Paulista",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Ana Souza",
                endereco: "Rua Vergueiro, 567",
                bairro: "Consolação",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "28",
            documento: "01048",
            motorista: {
                nome: "João Silva"
            },
            cliente_origem: {
                nome: "Empresa XYZ",
                endereco: "Rua das Flores, 123",
                bairro: "Centro",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Maria Souza",
                endereco: "Avenida Paulista, 456",
                bairro: "Bela Vista",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        },
        {
            id: "29",
            documento: "01049",
            motorista: {
                nome: "Carlos Pereira"
            },
            cliente_origem: {
                nome: "Empresa ABC",
                endereco: "Rua dos Pinheiros, 789",
                bairro: "Jardins",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Ana Clara",
                endereco: "Rua Vergueiro, 1234",
                bairro: "Liberdade",
                cidade: "São Paulo"
            },
            status_entrega: "INSUCESSO"
        },
        {
            id: "30",
            documento: "01050",
            motorista: {
                nome: "Carla Souza"
            },
            cliente_origem: {
                nome: "Empresa DEF",
                endereco: "Rua Augusta, 345",
                bairro: "Consolação",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Pedro Lima",
                endereco: "Avenida Brasil, 1010",
                bairro: "Jardins",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "31",
            documento: "01051",
            motorista: {
                nome: "Maria Oliveira"
            },
            cliente_origem: {
                nome: "Empresa GHI",
                endereco: "Avenida Ibirapuera, 890",
                bairro: "Moema",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "João Mendes",
                endereco: "Rua Pamplona, 567",
                bairro: "Jardim Paulista",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        },
        {
            id: "32",
            documento: "01052",
            motorista: {
                nome: "João Silva"
            },
            cliente_origem: {
                nome: "Empresa XYZ",
                endereco: "Rua das Flores, 123",
                bairro: "Liberdade",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Paula Silva",
                endereco: "Rua da Consolação, 123",
                bairro: "Centro",
                cidade: "São Paulo"
            },
            status_entrega: "INSUCESSO"
        },
        {
            id: "33",
            documento: "01053",
            motorista: {
                nome: "Carlos Pereira"
            },
            cliente_origem: {
                nome: "Empresa ABC",
                endereco: "Rua dos Pinheiros, 789",
                bairro: "Bela Vista",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Carlos Lima",
                endereco: "Rua Paulista, 101",
                bairro: "Moema",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "34",
            documento: "01054",
            motorista: {
                nome: "Carla Souza"
            },
            cliente_origem: {
                nome: "Empresa DEF",
                endereco: "Rua Augusta, 345",
                bairro: "Jardim Paulista",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Ana Souza",
                endereco: "Rua Vergueiro, 567",
                bairro: "Consolação",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        },
        {
            id: "35",
            documento: "01055",
            motorista: {
                nome: "Maria Oliveira"
            },
            cliente_origem: {
                nome: "Empresa GHI",
                endereco: "Avenida Ibirapuera, 890",
                bairro: "Centro",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Maria Souza",
                endereco: "Avenida Paulista, 456",
                bairro: "Bela Vista",
                cidade: "São Paulo"
            },
            status_entrega: "INSUCESSO"
        },
        {
            id: "36",
            documento: "01056",
            motorista: {
                nome: "João Silva"
            },
            cliente_origem: {
                nome: "Empresa XYZ",
                endereco: "Rua das Flores, 123",
                bairro: "Jardins",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Ana Clara",
                endereco: "Rua Vergueiro, 1234",
                bairro: "Liberdade",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "37",
            documento: "01057",
            motorista: {
                nome: "Carlos Pereira"
            },
            cliente_origem: {
                nome: "Empresa ABC",
                endereco: "Rua dos Pinheiros, 789",
                bairro: "Consolação",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Pedro Lima",
                endereco: "Avenida Brasil, 1010",
                bairro: "Jardins",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        },
        {
            id: "38",
            documento: "01058",
            motorista: {
                nome: "Carla Souza"
            },
            cliente_origem: {
                nome: "Empresa DEF",
                endereco: "Rua Augusta, 345",
                bairro: "Moema",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "João Mendes",
                endereco: "Rua Pamplona, 567",
                bairro: "Jardim Paulista",
                cidade: "São Paulo"
            },
            status_entrega: "INSUCESSO"
        },
        {
            id: "39",
            documento: "01059",
            motorista: {
                nome: "Maria Oliveira"
            },
            cliente_origem: {
                nome: "Empresa GHI",
                endereco: "Avenida Ibirapuera, 890",
                bairro: "Liberdade",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Paula Silva",
                endereco: "Rua da Consolação, 123",
                bairro: "Centro",
                cidade: "São Paulo"
            },
            status_entrega: "PENDENTE"
        },
        {
            id: "40",
            documento: "01060",
            motorista: {
                nome: "João Silva"
            },
            cliente_origem: {
                nome: "Empresa XYZ",
                endereco: "Rua das Flores, 123",
                bairro: "Bela Vista",
                cidade: "São Paulo"
            },
            cliente_destino: {
                nome: "Carlos Lima",
                endereco: "Rua Paulista, 101",
                bairro: "Moema",
                cidade: "São Paulo"
            },
            status_entrega: "ENTREGUE"
        }
    ]

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute
    ) { }

    getAll(): Observable<DeliveryModel[]> {
        return of(this.deliveryMock);
    }

    getProgressDelivery(): Observable<ProgressDelivery[]> {
        const progressDeliveryArray: ProgressDelivery[] = [];

        this.deliveryMock.forEach(delivery => {
            const progressDelivery: ProgressDelivery = new ProgressDelivery();

            if (!progressDeliveryArray.find(p => p.motorista === delivery.motorista?.nome)) {
                progressDelivery.motorista = delivery.motorista?.nome;
                progressDelivery.total = this.deliveryMock.filter(d => d.motorista?.nome === delivery.motorista?.nome).length;
                progressDelivery.realizado = this.deliveryMock.filter(d => d.motorista?.nome === delivery.motorista?.nome && d.status_entrega === 'ENTREGUE').length;

                progressDeliveryArray.push(progressDelivery);
            }
        });

        return of(progressDeliveryArray);
    }

    getFailureDelivery(): Observable<FailureDelivery[]> {
        const failureDeliveryArray: FailureDelivery[] = [];

        this.deliveryMock.forEach(delivery => {
            const failureDelivery: FailureDelivery = new FailureDelivery();
            
            if (!failureDeliveryArray.find(p => p.motorista === delivery.motorista?.nome)) {
                failureDelivery.motorista = delivery.motorista?.nome;
                failureDelivery.total = this.deliveryMock.filter(d => d.status_entrega === 'INSUCESSO' && d.motorista?.nome === failureDelivery.motorista).length;

                failureDeliveryArray.push(failureDelivery);
            }
        });

        return of(failureDeliveryArray);
    }

    getNeighborhoodDelivery(): Observable<NeighborhoodDelivery[]> {
        const neighborhoodDeliveryArray: NeighborhoodDelivery[] = [];

        this.deliveryMock.forEach(delivery => {
            const neighborhoodDelivery: NeighborhoodDelivery = new NeighborhoodDelivery();
            
            if (!neighborhoodDeliveryArray.find(p => p.bairro === delivery.cliente_destino?.bairro)) {
                neighborhoodDelivery.bairro = delivery.cliente_destino?.bairro;
                neighborhoodDelivery.total = this.deliveryMock.filter(d => d.cliente_destino?.bairro == neighborhoodDelivery.bairro).length;
                neighborhoodDelivery.realizadas = this.deliveryMock.filter(d => d.status_entrega == 'ENTREGUE' && d.cliente_destino?.bairro == neighborhoodDelivery.bairro).length;

                neighborhoodDeliveryArray.push(neighborhoodDelivery);
            }
        });

        return of(neighborhoodDeliveryArray);
    }

    getById(id: string): Observable<DeliveryModel> {
        const delivery = this.deliveryMock.find(d => d.id === id);

        if (delivery) {
            return of(delivery);
        } else {
            return of(new DeliveryModel());
        }
    }
}