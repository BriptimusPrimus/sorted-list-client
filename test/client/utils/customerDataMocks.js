const getInitialState = () => {
  return {
    data: {
      customers: [
        {
          id: 1,
          firstName: 'MARY',
          surname: 'SMITH',
          email: 'MARY.SMITH@sakilacustomer.org',
          addressId: 5,
          isActive: true,
          createDate: '2006-02-15T06:04:36.000Z',
          lastUpdate: '2006-02-15T12:57:20.000Z'
        },
        {
          id: 2,
          firstName: 'PATRICIA',
          surname: 'JOHNSON',
          email: 'PATRICIA.JOHNSON@sakilacustomer.org',
          addressId: 6,
          isActive: true,
          createDate: '2006-02-15T06:04:36.000Z',
          lastUpdate: '2006-02-15T12:57:20.000Z'
        },
        {
          id: 3,
          firstName: 'LINDA',
          surname: 'WILLIAMS',
          email: 'LINDA.WILLIAMS@sakilacustomer.org',
          addressId: 7,
          isActive: true,
          createDate: '2006-02-15T06:04:36.000Z',
          lastUpdate: '2006-02-15T12:57:20.000Z'
        },
        {
          id: 4,
          firstName: 'BARBARA',
          surname: 'JONES',
          email: 'BARBARA.JONES@sakilacustomer.org',
          addressId: 8,
          isActive: true,
          createDate: '2006-02-15T06:04:36.000Z',
          lastUpdate: '2006-02-15T12:57:20.000Z'
        },
        {
          id: 5,
          firstName: 'ELIZABETH',
          surname: 'BROWN',
          email: 'ELIZABETH.BROWN@sakilacustomer.org',
          addressId: 9,
          isActive: true,
          createDate: '2006-02-15T06:04:36.000Z',
          lastUpdate: '2006-02-15T12:57:20.000Z'
        },
        {
          id: 6,
          firstName: 'JENNIFER',
          surname: 'DAVIS',
          email: 'JENNIFER.DAVIS@sakilacustomer.org',
          addressId: 10,
          isActive: true,
          createDate: '2006-02-15T06:04:36.000Z',
          lastUpdate: '2006-02-15T12:57:20.000Z'
        },
        {
          id: 7,
          firstName: 'MARIA',
          surname: 'MILLER',
          email: 'MARIA.MILLER@sakilacustomer.org',
          addressId: 11,
          isActive: true,
          createDate: '2006-02-15T06:04:36.000Z',
          lastUpdate: '2006-02-15T12:57:20.000Z'
        },
        {
          id: 8,
          firstName: 'SUSAN',
          surname: 'WILSON',
          email: 'SUSAN.WILSON@sakilacustomer.org',
          addressId: 12,
          isActive: true,
          createDate: '2006-02-15T06:04:36.000Z',
          lastUpdate: '2006-02-15T12:57:20.000Z'
        },
        {
          id: 9,
          firstName: 'MARGARET',
          surname: 'MOORE',
          email: 'MARGARET.MOORE@sakilacustomer.org',
          addressId: 13,
          isActive: true,
          createDate: undefined,
          lastUpdate: '2006-02-15T12:57:20.000Z'
        },
        {
          id: 10,
          firstName: 'DOROTHY',
          surname: 'TAYLOR',
          email: 'DOROTHY.TAYLOR@sakilacustomer.org',
          addressId: 14,
          isActive: true,
          createDate: undefined,
          lastUpdate: '2006-02-15T12:57:20.000Z'
        }
      ]
    },
    sortBy: {
      column: 'id',
      orderDesc: false
    }
  };
};

const customerDetails = {
  id: 42,
  firstName: 'CAROLYN',
  surname: 'PEREZ',
  email: 'CAROLYN.PEREZ@sakilacustomer.org',
  addressId: 46,
  isActive: true,
  createDate: '2006-02-15T06:04:36.000Z',
  lastUpdate: '2006-02-15T12:57:20.000Z',
  address: '1632 Bislig Avenue',
  address2: '',
  district: 'Nonthaburi',
  city: 'Pak Kret',
  country: 'Thailand',
  postalCode: '61117',
  phone: '471675840679',
  addressLastUpdate: '2014-09-26T05:33:20.000Z'
};

const sortedByIdDesc = {
  customers: [
    {
      id: 599,
      firstName: 'AUSTIN',
      surname: 'CINTRON',
      email: 'AUSTIN.CINTRON@sakilacustomer.org',
      addressId: 605,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 598,
      firstName: 'WADE',
      surname: 'DELVALLE',
      email: 'WADE.DELVALLE@sakilacustomer.org',
      addressId: 604,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 597,
      firstName: 'FREDDIE',
      surname: 'DUGGAN',
      email: 'FREDDIE.DUGGAN@sakilacustomer.org',
      addressId: 603,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 596,
      firstName: 'ENRIQUE',
      surname: 'FORSYTHE',
      email: 'ENRIQUE.FORSYTHE@sakilacustomer.org',
      addressId: 602,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 595,
      firstName: 'TERRENCE',
      surname: 'GUNDERSON',
      email: 'TERRENCE.GUNDERSON@sakilacustomer.org',
      addressId: 601,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 594,
      firstName: 'EDUARDO',
      surname: 'HIATT',
      email: 'EDUARDO.HIATT@sakilacustomer.org',
      addressId: 600,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 593,
      firstName: 'RENE',
      surname: 'MCALISTER',
      email: 'RENE.MCALISTER@sakilacustomer.org',
      addressId: 599,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 592,
      firstName: 'TERRANCE',
      surname: 'ROUSH',
      email: 'TERRANCE.ROUSH@sakilacustomer.org',
      addressId: 598,
      isActive: false,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 591,
      firstName: 'KENT',
      surname: 'ARSENAULT',
      email: 'KENT.ARSENAULT@sakilacustomer.org',
      addressId: 597,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 590,
      firstName: 'SETH',
      surname: 'HANNON',
      email: 'SETH.HANNON@sakilacustomer.org',
      addressId: 596,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    }
  ]
};

const sortedByFirstName = {
  customers: [
    {
      id: 375,
      firstName: 'AARON',
      surname: 'SELBY',
      email: 'AARON.SELBY@sakilacustomer.org',
      addressId: 380,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 367,
      firstName: 'ADAM',
      surname: 'GOOCH',
      email: 'ADAM.GOOCH@sakilacustomer.org',
      addressId: 372,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 525,
      firstName: 'ADRIAN',
      surname: 'CLARY',
      email: 'ADRIAN.CLARY@sakilacustomer.org',
      addressId: 531,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 217,
      firstName: 'AGNES',
      surname: 'BISHOP',
      email: 'AGNES.BISHOP@sakilacustomer.org',
      addressId: 221,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 389,
      firstName: 'ALAN',
      surname: 'KAHN',
      email: 'ALAN.KAHN@sakilacustomer.org',
      addressId: 394,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 352,
      firstName: 'ALBERT',
      surname: 'CROUSE',
      email: 'ALBERT.CROUSE@sakilacustomer.org',
      addressId: 357,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 568,
      firstName: 'ALBERTO',
      surname: 'HENNING',
      email: 'ALBERTO.HENNING@sakilacustomer.org',
      addressId: 574,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 454,
      firstName: 'ALEX',
      surname: 'GRESHAM',
      email: 'ALEX.GRESHAM@sakilacustomer.org',
      addressId: 459,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 439,
      firstName: 'ALEXANDER',
      surname: 'FENNELL',
      email: 'ALEXANDER.FENNELL@sakilacustomer.org',
      addressId: 444,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 423,
      firstName: 'ALFRED',
      surname: 'CASILLAS',
      email: 'ALFRED.CASILLAS@sakilacustomer.org',
      addressId: 428,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    }
  ]
};

const sortedBySurname = {
  customers: [
    {
      id: 505,
      firstName: 'RAFAEL',
      surname: 'ABNEY',
      email: 'RAFAEL.ABNEY@sakilacustomer.org',
      addressId: 510,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 504,
      firstName: 'NATHANIEL',
      surname: 'ADAM',
      email: 'NATHANIEL.ADAM@sakilacustomer.org',
      addressId: 509,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 36,
      firstName: 'KATHLEEN',
      surname: 'ADAMS',
      email: 'KATHLEEN.ADAMS@sakilacustomer.org',
      addressId: 40,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 96,
      firstName: 'DIANA',
      surname: 'ALEXANDER',
      email: 'DIANA.ALEXANDER@sakilacustomer.org',
      addressId: 100,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 470,
      firstName: 'GORDON',
      surname: 'ALLARD',
      email: 'GORDON.ALLARD@sakilacustomer.org',
      addressId: 475,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 27,
      firstName: 'SHIRLEY',
      surname: 'ALLEN',
      email: 'SHIRLEY.ALLEN@sakilacustomer.org',
      addressId: 31,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 220,
      firstName: 'CHARLENE',
      surname: 'ALVAREZ',
      email: 'CHARLENE.ALVAREZ@sakilacustomer.org',
      addressId: 224,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 11,
      firstName: 'LISA',
      surname: 'ANDERSON',
      email: 'LISA.ANDERSON@sakilacustomer.org',
      addressId: 15,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 326,
      firstName: 'JOSE',
      surname: 'ANDREW',
      email: 'JOSE.ANDREW@sakilacustomer.org',
      addressId: 331,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 183,
      firstName: 'IDA',
      surname: 'ANDREWS',
      email: 'IDA.ANDREWS@sakilacustomer.org',
      addressId: 187,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    }
  ]
};

const sortedByIsActive = {
  customers: [
    {
      id: 169,
      firstName: 'ERICA',
      surname: 'MATTHEWS',
      email: 'ERICA.MATTHEWS@sakilacustomer.org',
      addressId: 173,
      isActive: false,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 446,
      firstName: 'THEODORE',
      surname: 'CULP',
      email: 'THEODORE.CULP@sakilacustomer.org',
      addressId: 451,
      isActive: false,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 315,
      firstName: 'KENNETH',
      surname: 'GOODEN',
      email: 'KENNETH.GOODEN@sakilacustomer.org',
      addressId: 320,
      isActive: false,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 241,
      firstName: 'HEIDI',
      surname: 'LARSON',
      email: 'HEIDI.LARSON@sakilacustomer.org',
      addressId: 245,
      isActive: false,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 406,
      firstName: 'NATHAN',
      surname: 'RUNYON',
      email: 'NATHAN.RUNYON@sakilacustomer.org',
      addressId: 411,
      isActive: false,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 124,
      firstName: 'SHEILA',
      surname: 'WELLS',
      email: 'SHEILA.WELLS@sakilacustomer.org',
      addressId: 128,
      isActive: false,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 368,
      firstName: 'HARRY',
      surname: 'ARCE',
      email: 'HARRY.ARCE@sakilacustomer.org',
      addressId: 373,
      isActive: false,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 271,
      firstName: 'PENNY',
      surname: 'NEAL',
      email: 'PENNY.NEAL@sakilacustomer.org',
      addressId: 276,
      isActive: false,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 64,
      firstName: 'JUDITH',
      surname: 'COX',
      email: 'JUDITH.COX@sakilacustomer.org',
      addressId: 68,
      isActive: false,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 16,
      firstName: 'SANDRA',
      surname: 'MARTIN',
      email: 'SANDRA.MARTIN@sakilacustomer.org',
      addressId: 20,
      isActive: false,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    }
  ]
};

const sortByCreateDate = {
  customers: [
    {
      id: 1,
      firstName: 'MARY',
      surname: 'SMITH',
      email: 'MARY.SMITH@sakilacustomer.org',
      addressId: 5,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 2,
      firstName: 'PATRICIA',
      surname: 'JOHNSON',
      email: 'PATRICIA.JOHNSON@sakilacustomer.org',
      addressId: 6,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 3,
      firstName: 'LINDA',
      surname: 'WILLIAMS',
      email: 'LINDA.WILLIAMS@sakilacustomer.org',
      addressId: 7,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 4,
      firstName: 'BARBARA',
      surname: 'JONES',
      email: 'BARBARA.JONES@sakilacustomer.org',
      addressId: 8,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 5,
      firstName: 'ELIZABETH',
      surname: 'BROWN',
      email: 'ELIZABETH.BROWN@sakilacustomer.org',
      addressId: 9,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 6,
      firstName: 'JENNIFER',
      surname: 'DAVIS',
      email: 'JENNIFER.DAVIS@sakilacustomer.org',
      addressId: 10,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 7,
      firstName: 'MARIA',
      surname: 'MILLER',
      email: 'MARIA.MILLER@sakilacustomer.org',
      addressId: 11,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 8,
      firstName: 'SUSAN',
      surname: 'WILSON',
      email: 'SUSAN.WILSON@sakilacustomer.org',
      addressId: 12,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 9,
      firstName: 'MARGARET',
      surname: 'MOORE',
      email: 'MARGARET.MOORE@sakilacustomer.org',
      addressId: 13,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 10,
      firstName: 'DOROTHY',
      surname: 'TAYLOR',
      email: 'DOROTHY.TAYLOR@sakilacustomer.org',
      addressId: 14,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    }
  ]
};

export {
  getInitialState,
  customerDetails,
  sortedByIdDesc,
  sortedByFirstName,
  sortedBySurname,
  sortedByIsActive,
  sortByCreateDate
};
