interface PhoneBrand {
  id: number;
  name: string;
  phoneModel: PhoneModel[];
  updatedAt: string;
  createdAt: string;
}

interface PhoneModel {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
}

interface Collection {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
}

interface Material {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
}

interface Case {
  id: number;
  name: string;
  count: number;
  images: {
    id: string;
    image: Media;
  }[];
  previewImage: Media;
  price: number;
  discount: number;
  article: string;
  phoneBrands: PhoneBrand[];
  collection: Collection[];
  updatedAt: string;
  createdAt: string;
}

interface Media {
  id: number;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}

export type { PhoneBrand, PhoneModel, Collection, Material, Case, Media };
