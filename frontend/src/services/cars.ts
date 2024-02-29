import { api } from '@/lib/api';
import { Car } from '@/models/car';

type ApiCar = {
  id: number;
  model: string;
  make: string;
  color: string;
  features: string[];
  price: number;
  image: string;
};

type ApiCreateCarPayload = {
  model: string;
  make: string;
  color: string;
  features: string[];
  price: number;
  image?: File;
};

export async function getCar(id: string): Promise<Car> {
  const response = await api.get(`/cars/${id}`);

  return new Car(response.data);
}

export async function getCars(): Promise<Car[]> {
  const response = await api.get('/cars');

  return response.data.map((car: ApiCar) => new Car(car));
}

export async function createCar(payload: ApiCreateCarPayload): Promise<void> {
  const response = await api.post('/cars', payload);

  if (!payload.image) return;

  const formData = new FormData();
  formData.append('file', payload.image);

  await api.post(`/cars/${response.data.id}/upload`, formData);
}
