export interface Nonprofit {
    description: string;
    ein: string;
    name: string;
    profileUrl: string;
    logoUrl: string;
    coverImageUrl: string;
    logoCloudinaryId: string;
    matchedTerms: string[];
    slug: string;
    tags: string[];
}


export interface NonprofitDetail {
    coverImageCloudinaryId: string;
    coverImageUrl: string;
    description: string;
    descriptionLong: string;
    directDisbursement: boolean;
    ein: string;
    hasAdmin: boolean;
    id: string;
    isDisbursable: boolean;
    locationAddress: null;
    logoCloudinaryId: string;
    logoUrl: string;
    name: string;
    nteeCode: null;
    nteeCodeMeaning: {};
    primarySlug: string;
    profileUrl: string;
    websiteUrl: string;
  }


  export interface FavouriteNonprofit {
    ein: string,
    name : string
}