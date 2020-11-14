const getInitialState = () => {
  return {
    data: {
      customers: [
        {
          addressId: 380,
          createDate: '2006-02-15T06:04:37.000Z',
          email: 'AARON.SELBY@sakilacustomer.org',
          firstName: 'AARON',
          id: 375,
          isActive: true,
          lastUpdate: '2006-02-15T12:57:20.000Z',
          surname: 'SELBY'
        },
        {
          addressId: 372,
          createDate: '2006-02-15T06:04:37.000Z',
          email: 'ADAM.GOOCH@sakilacustomer.org',
          firstName: 'ADAM',
          id: 367,
          isActive: true,
          lastUpdate: '2006-02-15T12:57:20.000Z',
          surname: 'GOOCH'
        },
        {
          addressId: 531,
          createDate: '2006-02-15T06:04:37.000Z',
          email: 'ADRIAN.CLARY@sakilacustomer.org',
          firstName: 'ADRIAN',
          id: 525,
          isActive: true,
          lastUpdate: '2006-02-15T12:57:20.000Z',
          surname: 'CLARY'
        },
        {
          addressId: 221,
          createDate: '2006-02-15T06:04:36.000Z',
          email: 'AGNES.BISHOP@sakilacustomer.org',
          firstName: 'AGNES',
          id: 217,
          isActive: true,
          lastUpdate: '2006-02-15T12:57:20.000Z',
          surname: 'BISHOP'
        },
        {
          addressId: 394,
          createDate: '2006-02-15T06:04:37.000Z',
          email: 'ALAN.KAHN@sakilacustomer.org',
          firstName: 'ALAN',
          id: 389,
          isActive: true,
          lastUpdate: '2006-02-15T12:57:20.000Z',
          surname: 'KAHN'
        },
        {
          addressId: 357,
          createDate: '2006-02-15T06:04:37.000Z',
          email: 'ALBERT.CROUSE@sakilacustomer.org',
          firstName: 'ALBERT',
          id: 352,
          isActive: true,
          lastUpdate: '2006-02-15T12:57:20.000Z',
          surname: 'CROUSE'
        },
        {
          addressId: 574,
          createDate: '2006-02-15T06:04:37.000Z',
          email: 'ALBERTO.HENNING@sakilacustomer.org',
          firstName: 'ALBERTO',
          id: 568,
          isActive: true,
          lastUpdate: '2006-02-15T12:57:20.000Z',
          surname: 'HENNING'
        },
        {
          addressId: 459,
          createDate: '2006-02-15T06:04:37.000Z',
          email: 'ALEX.GRESHAM@sakilacustomer.org',
          firstName: 'ALEX',
          id: 454,
          isActive: false,
          lastUpdate: '2006-02-15T12:57:20.000Z',
          surname: 'GRESHAM'
        },
        {
          addressId: 444,
          createDate: '2006-02-15T06:04:37.000Z',
          email: 'ALEXANDER.FENNELL@sakilacustomer.org',
          firstName: 'ALEXANDER',
          id: 439,
          isActive: true,
          lastUpdate: '2006-02-15T12:57:20.000Z',
          surname: 'FENNELL'
        },
        {
          addressId: 428,
          createDate: '2006-02-15T06:04:37.000Z',
          email: 'ALFRED.CASILLAS@sakilacustomer.org',
          firstName: 'ALFRED',
          id: 423,
          isActive: true,
          lastUpdate: '2006-02-15T12:57:20.000Z',
          surname: 'CASILLAS'
        }
      ]
    },
    sortBy: {
      column: 'email',
      orderDesc: false
    }
  };
};

const sortedByEmailDesc = {
  customers: [
    {
      id: 479,
      firstName: 'ZACHARY',
      surname: 'HITE',
      email: 'ZACHARY.HITE@sakilacustomer.org',
      addressId: 484,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 174,
      firstName: 'YVONNE',
      surname: 'WATKINS',
      email: 'YVONNE.WATKINS@sakilacustomer.org',
      addressId: 178,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 190,
      firstName: 'YOLANDA',
      surname: 'WEAVER',
      email: 'YOLANDA.WEAVER@sakilacustomer.org',
      addressId: 194,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 212,
      firstName: 'WILMA',
      surname: 'RICHARDS',
      email: 'WILMA.RICHARDS@sakilacustomer.org',
      addressId: 216,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 359,
      firstName: 'WILLIE',
      surname: 'MARKHAM',
      email: 'WILLIE.MARKHAM@sakilacustomer.org',
      addressId: 364,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 219,
      firstName: 'WILLIE',
      surname: 'HOWELL',
      email: 'WILLIE.HOWELL@sakilacustomer.org',
      addressId: 223,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 303,
      firstName: 'WILLIAM',
      surname: 'SATTERFIELD',
      email: 'WILLIAM.SATTERFIELD@sakilacustomer.org',
      addressId: 308,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 578,
      firstName: 'WILLARD',
      surname: 'LUMPKIN',
      email: 'WILLARD.LUMPKIN@sakilacustomer.org',
      addressId: 584,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 469,
      firstName: 'WESLEY',
      surname: 'BULL',
      email: 'WESLEY.BULL@sakilacustomer.org',
      addressId: 474,
      isActive: true,
      createDate: '2006-02-15T06:04:37.000Z',
      lastUpdate: '2006-02-15T12:57:20.000Z'
    },
    {
      id: 115,
      firstName: 'WENDY',
      surname: 'HARRISON',
      email: 'WENDY.HARRISON@sakilacustomer.org',
      addressId: 119,
      isActive: true,
      createDate: '2006-02-15T06:04:36.000Z',
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
      id: 16,
      firstName: 'SANDRA',
      surname: 'MARTIN',
      email: 'SANDRA.MARTIN@sakilacustomer.org',
      addressId: 20,
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
      id: 446,
      firstName: 'THEODORE',
      surname: 'CULP',
      email: 'THEODORE.CULP@sakilacustomer.org',
      addressId: 451,
      isActive: false,
      createDate: '2006-02-15T06:04:37.000Z',
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
  sortedByEmailDesc,
  sortedBySurname,
  sortedByIsActive,
  sortByCreateDate
};
