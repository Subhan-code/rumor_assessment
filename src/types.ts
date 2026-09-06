export interface Host {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  profileUrl: string;
  instagramUrl: string;
}

export interface RoomItem {
  id: string;
  name: string;
  tagline: string;
  objects: string[];
  description: string;
  sensoryDetail: string;
  imageUrl: string;
}

export interface CabinetDiscoveryItem {
  id: string;
  title: string;
  category: string;
  preview: string;
  fullDescription: string;
  details: string[];
  accentText: string;
}

export interface TimelinePhase {
  time: string;
  title: string;
  subtitle: string;
  description: string;
  capacity?: string;
}

export interface RsvpFormData {
  firstName: string;
  lastName: string;
  email: string;
  companyOrStudio: string;
  instagram: string;
  dietaryRequirements: string;
}
