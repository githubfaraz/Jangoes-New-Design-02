
export interface Shipment {
  id: string;
  status: 'In Transit' | 'Delivered' | 'Pending' | 'Out for Delivery';
  origin: string;
  destination: string;
  estimatedArrival: string;
  currentLocation: string;
  updates: ShipmentUpdate[];
}

export interface ShipmentUpdate {
  date: string;
  location: string;
  message: string;
}

export interface ShippingQuote {
  origin: string;
  destination: string;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum ServiceType {
  EXPRESS = 'Express Shipping',
  WAREHOUSING = 'Warehousing',
  INTERNATIONAL = 'International Logistics',
  ECOMMERCE = 'E-commerce Fulfillment'
}
