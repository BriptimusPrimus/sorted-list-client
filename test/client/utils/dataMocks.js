const getInitialState = () => {
  return {
    data: {
      list: [
        {
          id: 10001,
          firstName: 'ELOINA',
          surname: 'SALINAS',
          surname2: 'VAZQUEZ',
          codeNumber: '10001',
          rfc: '',
          status: 'hired'
        },
        {
          id: 10027,
          firstName: 'TERESA DE JESUS',
          surname: 'JOFRE',
          surname2: 'GARFIAS',
          codeNumber: '10027',
          rfc: 'JOGT000101',
          status: ''
        },
        {
          id: 10030,
          firstName: 'JOSE LUIS',
          surname: 'JAVIER',
          surname2: 'PECH',
          codeNumber: '10030',
          rfc: 'JAPL740105',
          status: 'candidate'
        },
        {
          id: 10031,
          firstName: 'ERNESTO',
          surname: 'HERNANDEZ',
          surname2: 'GARCIA',
          codeNumber: '10031',
          rfc: 'HEGE521107',
          status: 'hired'
        },
        {
          id: 10137,
          firstName: 'SERGIO',
          surname: 'FONSECA',
          surname2: 'VIDAL',
          codeNumber: '10137',
          rfc: 'FOVS820331',
          status: 'hired'
        },
        {
          id: 10155,
          firstName: 'PEDRO ANTONIO',
          surname: 'JIMENEZ',
          surname2: 'JIMENEZ',
          codeNumber: '10155',
          rfc: 'JIJP770117',
          status: 'hired'
        },
        {
          id: 10223,
          firstName: 'EFREN',
          surname: 'GONZALEZ',
          surname2: 'CHAVEZ',
          codeNumber: '10223',
          rfc: 'GOCE690929',
          status: 'hired'
        },
        {
          id: 10337,
          firstName: 'FRANCISCO',
          surname: 'JIMENEZ',
          surname2: 'RODRIGUEZ',
          codeNumber: '10337',
          rfc: 'JIRF651124',
          status: 'hired'
        },
        {
          id: 10369,
          firstName: 'MANUEL',
          surname: 'VALDERRABANO',
          surname2: 'TACU',
          codeNumber: '10369',
          rfc: 'VATM701227',
          status: 'hired'
        },
        {
          id: 10370,
          firstName: 'LUIS RAMON',
          surname: 'PERALTA',
          surname2: 'MAY',
          codeNumber: '10370',
          rfc: 'PEML740831',
          status: 'hired'
        }
      ]
    },
    sortBy: {
      column: 'codeNumber',
      orderDesc: false
    }
  };
};

const sortedByName = {
  list: [
    {
      id: 38097,
      firstName: 'AARON',
      surname: 'SANCHEZ',
      surname2: 'SANTOS',
      codeNumber: '38097',
      rfc: 'SASA610827',
      status: 'hired'
    },
    {
      id: 40797,
      firstName: 'AARON',
      surname: 'ESCALERA',
      surname2: 'AMARO',
      codeNumber: '40797',
      rfc: 'EAAA700701',
      status: 'hired'
    },
    {
      id: 40870,
      firstName: 'AARON',
      surname: 'ALEJANDRO',
      surname2: 'RODRIGUEZ',
      codeNumber: '40870',
      rfc: 'AERA910121',
      status: 'hired'
    },
    {
      id: 39802,
      firstName: 'ABDI',
      surname: 'CALLES',
      surname2: 'REYES',
      codeNumber: '39802',
      rfc: 'CARA791204',
      status: 'hired'
    },
    {
      id: 28514,
      firstName: 'ABDON',
      surname: 'LEDESMA',
      surname2: 'ALEJANDRE',
      codeNumber: '28514',
      rfc: 'LEAA740630',
      status: 'hired'
    },
    {
      id: 12186,
      firstName: 'ABEL',
      surname: 'DE JESUS',
      surname2: 'MORALES',
      codeNumber: '12186',
      rfc: 'JEMA691118',
      status: 'hired'
    },
    {
      id: 15960,
      firstName: 'ABEL',
      surname: 'TOXQUI',
      surname2: 'AMASTAL',
      codeNumber: '15960',
      rfc: 'TOAA700805',
      status: 'hired'
    },
    {
      id: 35471,
      firstName: 'ABEL',
      surname: 'HERNANDEZ',
      surname2: 'DOMINGUEZ',
      codeNumber: '35471',
      rfc: 'HEDA860702',
      status: 'hired'
    },
    {
      id: 36531,
      firstName: 'ABEL',
      surname: 'RUIZ',
      surname2: 'ORTIZ',
      codeNumber: '36531',
      rfc: 'RUOA870110',
      status: 'hired'
    },
    {
      id: 38343,
      firstName: 'ABEL',
      surname: 'MORGADO',
      surname2: 'AGUILAR',
      codeNumber: '38343',
      rfc: 'MOAA811124',
      status: 'hired'
    }
  ]
};

const sortedBySurname = {
  list: [
    {
      id: 42467,
      firstName: 'ALI',
      surname: 'ABAD',
      surname2: 'MARTINEZ',
      codeNumber: '42467',
      rfc: 'AAMA910220',
      status: 'hired'
    },
    {
      id: 41202,
      firstName: 'JORGE ARTURO',
      surname: 'ABDALA',
      surname2: 'MONTES',
      codeNumber: '41202',
      rfc: 'AAMJ760922',
      status: 'hired'
    },
    {
      id: 27212,
      firstName: 'EFRAIN',
      surname: 'ABRAJAN',
      surname2: 'MIL',
      codeNumber: '27212',
      rfc: 'AAME950427',
      status: 'hired'
    },
    {
      id: 32284,
      firstName: 'ALEX',
      surname: 'ABRAJAN',
      surname2: 'MIL',
      codeNumber: '32284',
      rfc: 'AAMA970529',
      status: 'hired'
    },
    {
      id: 39347,
      firstName: 'CARLOS',
      surname: 'ABREGO',
      surname2: 'AYALA',
      codeNumber: '39347',
      rfc: 'AEAC840428',
      status: 'hired'
    },
    {
      id: 19724,
      firstName: 'LUBIA SUGEY',
      surname: 'ABREU',
      surname2: 'ZAVALA',
      codeNumber: '19724',
      rfc: 'AEZL761110',
      status: 'hired'
    },
    {
      id: 31675,
      firstName: 'LUIS ARTURO',
      surname: 'ABURTO',
      surname2: 'LOPEZ',
      codeNumber: '31675',
      rfc: 'AULL751204',
      status: 'hired'
    },
    {
      id: 37969,
      firstName: 'BERNARDINO ADRIAN',
      surname: 'ABURTO',
      surname2: 'AGUILAR',
      codeNumber: '37969',
      rfc: 'AUAB870707',
      status: 'hired'
    },
    {
      id: 40338,
      firstName: 'BERNARDINO',
      surname: 'ABURTO',
      surname2: 'BRIGIDO',
      codeNumber: '40338',
      rfc: 'AUBB660520',
      status: 'hired'
    },
    {
      id: 42841,
      firstName: 'DAVID',
      surname: 'ABURTO',
      surname2: 'ARAGON',
      codeNumber: '42841',
      rfc: 'AUAD760415',
      status: 'hired'
    }
  ]
};

const sortedByCodeNumberAsc = {
  list: [
    {
      id: 42850,
      firstName: 'NORMA VIANEY',
      surname: 'HERNANDEZ',
      surname2: 'CRUZ',
      codeNumber: '42850',
      rfc: 'HECN840821',
      status: 'hired'
    },
    {
      id: 42849,
      firstName: 'GUADALUPE',
      surname: 'RODRIGUEZ',
      surname2: 'HERNANDEZ',
      codeNumber: '42849',
      rfc: 'ROHG890519',
      status: 'hired'
    },
    {
      id: 42848,
      firstName: 'CARMEN',
      surname: 'CASTELLANOS',
      surname2: 'ALVAREZ',
      codeNumber: '42848',
      rfc: 'CAAC820701',
      status: 'hired'
    },
    {
      id: 42847,
      firstName: 'RAY LEONARD',
      surname: 'RODRIGUEZ',
      surname2: 'FELIX',
      codeNumber: '42847',
      rfc: 'ROFR830104',
      status: 'hired'
    },
    {
      id: 42846,
      firstName: 'AMINADAD',
      surname: 'RODRIGUEZ',
      surname2: 'CORDOVA',
      codeNumber: '42846',
      rfc: 'ROCA830528',
      status: 'hired'
    },
    {
      id: 42845,
      firstName: 'MAURICIO',
      surname: 'ALEJANDRO',
      surname2: 'IZQUIERDO',
      codeNumber: '42845',
      rfc: 'AEIM790628',
      status: 'hired'
    },
    {
      id: 42844,
      firstName: 'LUIS EDUARDO',
      surname: 'ARIAS',
      surname2: 'LOPEZ',
      codeNumber: '42844',
      rfc: 'AILL850103',
      status: 'hired'
    },
    {
      id: 42843,
      firstName: 'GERARDO',
      surname: 'GOMEZ',
      surname2: 'DE LA CRUZ',
      codeNumber: '42843',
      rfc: 'GOCG791208',
      status: 'hired'
    },
    {
      id: 42842,
      firstName: 'EDGAR GABRIEL',
      surname: 'BARRIOS',
      surname2: 'RODRIGUEZ',
      codeNumber: '42842',
      rfc: 'BARE880601',
      status: 'hired'
    },
    {
      id: 42841,
      firstName: 'DAVID',
      surname: 'ABURTO',
      surname2: 'ARAGON',
      codeNumber: '42841',
      rfc: 'AUAD760415',
      status: 'hired'
    }
  ]
};

const sortedByRFC = {
  list: [
    {
      id: 10001,
      firstName: 'ELOINA',
      surname: 'SALINAS',
      surname2: 'VAZQUEZ',
      codeNumber: '10001',
      rfc: '',
      status: 'hired'
    },
    {
      id: 16417,
      firstName: 'MAXIMILIANO',
      surname: 'REYES',
      surname2: 'X',
      codeNumber: '16417',
      rfc: '',
      status: 'hired'
    },
    {
      id: 19099,
      firstName: 'LEOPOLDO',
      surname: 'CAMARGO',
      surname2: 'NORIEGA',
      codeNumber: '19099',
      rfc: '',
      status: 'hired'
    },
    {
      id: 24558,
      firstName: 'TERESITA',
      surname: 'CAMARGO',
      surname2: 'SALINAS',
      codeNumber: '24558',
      rfc: '',
      status: 'hired'
    },
    {
      id: 40319,
      firstName: 'SARA',
      surname: 'MOYA',
      surname2: 'RASGADO',
      codeNumber: '40319',
      rfc: '',
      status: 'hired'
    },
    {
      id: 41389,
      firstName: 'GASPAR MOISES',
      surname: 'GUZMAN',
      surname2: 'CONSTANTINO',
      codeNumber: '41389',
      rfc: '',
      status: 'hired'
    },
    {
      id: 41400,
      firstName: 'ROSA MARIA',
      surname: 'GIL',
      surname2: 'ALEJANDRO',
      codeNumber: '41400',
      rfc: '',
      status: 'hired'
    },
    {
      id: 41478,
      firstName: 'VIRGINIA',
      surname: 'CORREA',
      surname2: 'RAMIREZ',
      codeNumber: '41478',
      rfc: '',
      status: 'hired'
    },
    {
      id: 41681,
      firstName: 'ELIDET',
      surname: 'DIAZ',
      surname2: 'USCANGA',
      codeNumber: '41681',
      rfc: '',
      status: 'hired'
    },
    {
      id: 41753,
      firstName: 'ALEJANDRA',
      surname: 'GONZALEZ',
      surname2: 'JACOME',
      codeNumber: '41753',
      rfc: '',
      status: 'hired'
    }
  ]
};

const sortedByStatus = {
  list: [
    {
      id: 38097,
      firstName: 'AARON',
      surname: 'SANCHEZ',
      surname2: 'SANTOS',
      codeNumber: '38097',
      rfc: 'SASA610827',
      status: 'hired'
    },
    {
      id: 40797,
      firstName: 'AARON',
      surname: 'ESCALERA',
      surname2: 'AMARO',
      codeNumber: '40797',
      rfc: 'EAAA700701',
      status: 'hired'
    },
    {
      id: 40870,
      firstName: 'AARON',
      surname: 'ALEJANDRO',
      surname2: 'RODRIGUEZ',
      codeNumber: '40870',
      rfc: 'AERA910121',
      status: 'hired'
    },
    {
      id: 39802,
      firstName: 'ABDI',
      surname: 'CALLES',
      surname2: 'REYES',
      codeNumber: '39802',
      rfc: 'CARA791204',
      status: 'hired'
    },
    {
      id: 28514,
      firstName: 'ABDON',
      surname: 'LEDESMA',
      surname2: 'ALEJANDRE',
      codeNumber: '28514',
      rfc: 'LEAA740630',
      status: 'on leave'
    },
    {
      id: 12186,
      firstName: 'ABEL',
      surname: 'DE JESUS',
      surname2: 'MORALES',
      codeNumber: '12186',
      rfc: 'JEMA691118',
      status: 'hired'
    },
    {
      id: 15960,
      firstName: 'ABEL',
      surname: 'TOXQUI',
      surname2: 'AMASTAL',
      codeNumber: '15960',
      rfc: 'TOAA700805',
      status: 'hired'
    },
    {
      id: 35471,
      firstName: 'ABEL',
      surname: 'HERNANDEZ',
      surname2: 'DOMINGUEZ',
      codeNumber: '35471',
      rfc: 'HEDA860702',
      status: 'hired'
    },
    {
      id: 36531,
      firstName: 'ABEL',
      surname: 'RUIZ',
      surname2: 'ORTIZ',
      codeNumber: '36531',
      rfc: 'RUOA870110',
      status: 'hired'
    },
    {
      id: 38343,
      firstName: 'ABEL',
      surname: 'MORGADO',
      surname2: 'AGUILAR',
      codeNumber: '38343',
      rfc: 'MOAA811124',
      status: 'hired'
    }
  ]
};

export {
  getInitialState,
  sortedByName,
  sortedBySurname,
  sortedByCodeNumberAsc,
  sortedByRFC,
  sortedByStatus
};
