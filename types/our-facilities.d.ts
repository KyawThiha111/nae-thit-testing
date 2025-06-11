type TypeOfFacilities = {
  _id: string;
  clinicname: string;
  openinghr: string;
  location: string;
  photo: string;
  address: string;
  mapurl: string;
};

type TypeOfFacilitiesData = {
  success: boolean;
  count: number;
  facilities: TypeOfFacilities[];
};
