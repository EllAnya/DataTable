
export class DataTableObject<T> {
    constructor(
      public items: T,
      public pageNumber: number = 0,
      public pageSize: number = 0,
      public totalPages: number = 0,
      public totalRecords: number = 0,
    ){}
  }

  export class DataTableFilter {
    constructor(
      public pageNumber: number = 1,
      public pageSize: number = 10,
      public sortDirection: string | null = null,
      public sortColumn: string | null = null,
      public search: string | null = null,
      public countryId: number = 0,
    ) {}
  }

  export class APIResult<T>{
    constructor(
      public message: string | null = null,
      public statusCode: number = 0,
      public response: T
    ){}
  }

  //

  export class UserData {
    constructor(
      public id: number = 0,
      public first_name: string | null = null,
      public last_name: string | null = null,
      public email: string | null = null,
      public phone: string | null = null,
      public dob: string | null = null,
      public city: string | null = null,
      public street: string | null = null,
      public zip_code: string | null = null,
      public avatar: string | null = null,
      public gender: string | null = null,
      public countrId: number = 0,
      public country: string | null = null,
    ){}

  }