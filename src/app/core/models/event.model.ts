export interface Event  {
  healthIndex?: number;
  endDate?: number|null;
  minValueDateTime?: number;
  type?: string;
  cowId?: number;
  animalId?: string;
  eventId: number;
  deletable?: boolean;
  lactationNumber?: number;
  daysInLactation?: number;
  ageInDays?: number;
  startDateTime?: number;
  reportingDateTime?: number;
  alertType?: string;
  duration?: number;
  originalStartDateTime?: any;
  endDateTime?: number;
  daysInPregnancy?: number;
  heatIndexPeak?: string;
  newGroupId?: number;
  newGroupName?: string;
  currentGroupId?: number;
  currentGroupName?: string;
  destinationGroup?: number;
  destinationGroupName?: string;
  calvingEase?: any;
  oldLactationNumber?: number;
  newborns?: any;
  cowEntryStatus?: string;
  birthDateCalculated?: boolean;
  sire?: any;
  breedingNumber?: number;
  isOutOfBreedingWindow?: boolean;
  interval?: number;
}

