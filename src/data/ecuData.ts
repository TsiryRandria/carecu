import { CarBrand } from '../types';

export const ECU_BRANDS: CarBrand[] = [
  {
    id: 'audi',
    name: 'Audi',
    country: 'DE',
    badgeSymbol: 'AUDI',
    ecus: [
      'DCM3.7', 'DCM6.2', 'EDC15_P', 'EDC15_VM', 'EDC16_CP34', 'EDC16_U1', 'EDC16_U31', 'EDC16_U34',
      'EDC17_C46', 'EDC17_C54', 'EDC17_C64', 'EDC17_C74', 'EDC17_CP04', 'EDC17_CP14', 'EDC17_CP20',
      'EDC17_CP24', 'EDC17_CP44', 'EDC17_CP54', 'EDC17_CP74', 'EDC17_U01', 'MD1CP004', 'MD1CP014',
      'MD1CP061', 'MD1CS004', 'MD1CS014', 'MD1CS027', 'MED17.1', 'MED17.5.2', 'MED17.5.20', 'MED17.5.21',
      'MED17.5.25', 'MED17.5.5', 'MED17.5.53', 'MG1CP007', 'MG1CS001', 'MG1CS002', 'MG1CS008', 'MG1CS011',
      'MG1CS031', 'MG1CS111', 'MG1CS163', 'ME7.5', 'ME9.1', 'PCR2.1', 'PPD1.2', 'PPD1.3', 'PPD1.5',
      'SID213', 'Simos.18', 'Simos.19'
    ]
  },
  {
    id: 'bmw',
    name: 'BMW',
    country: 'DE',
    badgeSymbol: 'BMW',
    ecus: [
      'EDC15_C4 / DDE4', 'EDC16_C31', 'EDC16_C35', 'EDC16_CP35', 'EDC17_C05', 'EDC17_C06', 'EDC17_C41',
      'EDC17_C50', 'EDC17_C56', 'EDC17_C76', 'EDC17_CP02', 'EDC17_CP06', 'EDC17_CP09', 'EDC17_CP45',
      'EDC17_CP49', 'MD1CP002', 'MD1CP032', 'MD1CS001', 'MD1CS002', 'MD1CS015', 'MEVD17.2.3', 'MEVD17.2.4',
      'MEVD17.2.5', 'MEVD17.2.6', 'MEVD17.2.7', 'MEVD17.2.8', 'MEVD17.2.9', 'MEVD17.2.G', 'MEVD17.2.H',
      'MG1CS201', 'MG1CS003', 'MG1CS024', 'MSD80', 'MSD81', 'MSD87', 'MSV90'
    ]
  },
  {
    id: 'chevrolet',
    name: 'Chevrolet',
    country: 'US',
    badgeSymbol: 'CHEVROLET',
    ecus: [
      'DCM3.7', 'EDC16_C39', 'EDC17_C18', 'EDC17_C59'
    ]
  },
  {
    id: 'citroen',
    name: 'Citroën',
    country: 'FR',
    badgeSymbol: 'CITROEN',
    ecus: [
      'DCM3.4', 'DCM3.5', 'DCM6.2', 'DCM7.1', 'DCU-102', 'EDC15_C2', 'EDC16_C0', 'EDC16_C34',
      'EDC17_C10', 'EDC17_C60', 'EDC17_CP52', 'MD1CS003', 'MED17.4.2', 'MEVD17.4.2', 'MG1CS042',
      'MJD8', 'SID208', 'SID803A', 'SID807', 'SID807EVO', 'VCU3000', 'VD56.12'
    ]
  },
  {
    id: 'ford',
    name: 'Ford',
    country: 'US',
    badgeSymbol: 'FORD',
    ecus: [
      'DCM3.5', 'DCM6.1', 'DCU-102', 'DCU17PC43', 'EDC16_C3', 'EDC16_C31', 'EDC16_C34', 'EDC16_C7',
      'EDC16_CP39', 'EDC17_C10', 'EDC17_C70', 'EDC17_CP05', 'EDC17_CP42', 'EMS2204', 'MD1CP006',
      'MD1CP061', 'MD1CP062', 'MD1CS005', 'MD1CS025', 'MD1CS027', 'MED17.0.1', 'MG1CS015', 'MG1CS016',
      'MG1CS017', 'MG1CS019', 'MG1CS036', 'MPC555', 'SID202', 'SID205', 'SID206', 'SID208', 'SID209',
      'SID211', 'SID212', 'SID213', 'SID807', 'SID807EVO'
    ]
  },
  {
    id: 'honda',
    name: 'Honda',
    country: 'JP',
    badgeSymbol: 'HONDA',
    ecus: [
      'EDC17_C58'
    ]
  },
  {
    id: 'hyundai-kia',
    name: 'Hyundai – KIA',
    country: 'KR',
    badgeSymbol: 'HYUNDAI_KIA',
    ecus: [
      'DCM3.5', 'DCM3.7', 'DCM3.7AP', 'DCU17_CP42', 'EDC15_C7', 'EDC16_C39', 'EDC17_C08',
      'EDC17_C53', 'EDC17_C57', 'EDC17_CP14', 'EDC17_CP62', 'MD1CS012', 'MED17.9.8',
      'SIM2K-250', 'SIM2K-510'
    ]
  },
  {
    id: 'isuzu',
    name: 'Isuzu',
    country: 'JP',
    badgeSymbol: 'ISUZU',
    ecus: [
      '4JK1 (Transtron)', '6HK1 (Transtron)', 'EDC17_CV41', 'MD1CS089'
    ]
  },
  {
    id: 'iveco',
    name: 'Iveco',
    country: 'IT',
    badgeSymbol: 'IVECO',
    ecus: [
      'EDC16_C39', 'EDC17_C49', 'EDC17_C69', 'EDC17_CP52', 'EDC17_CV41', 'EDC7UC31',
      'MD1CS069', 'MD1CE101'
    ]
  },
  {
    id: 'jeep',
    name: 'Jeep',
    country: 'US',
    badgeSymbol: 'JEEP',
    ecus: [
      '9GF', 'EDC16_CP31', 'EDC17_C49', 'EDC17_C69', 'EDC17_C79', 'EDC17_CP27',
      'GPEC2', 'GPEC3', 'GPEC4'
    ]
  },
  {
    id: 'land-rover',
    name: 'Land Rover',
    country: 'GB',
    badgeSymbol: 'LAND_ROVER',
    ecus: [
      'DCU-102', 'EDC16_CP39', 'EDC17_CP11', 'EDC17_CP35', 'EDC17_CP42', 'EDC17_CP55',
      'MEDC17.9', 'MED17.1.9', 'MED17.5.4', 'MED17.8.31', 'MD1CP007',
      'SID201', 'SID203', 'SID204', 'SID206'
    ]
  },
  {
    id: 'lexus',
    name: 'Lexus',
    country: 'JP',
    badgeSymbol: 'LEXUS',
    ecus: [
      'RX703200'
    ]
  },
  {
    id: 'mazda',
    name: 'Mazda',
    country: 'JP',
    badgeSymbol: 'MAZDA',
    ecus: [
      'EDC16_C3', 'EDC16_C34', 'EDC16_C36', 'DCU17PC42', 'R2A', 'R2B', 'RF7', 'RF8',
      'SID807', 'S5XX', 'SH01', 'SH05', 'SH07', 'SH09', 'SH9V', 'SH12', 'SH13'
    ]
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    country: 'DE',
    badgeSymbol: 'MERCEDES',
    ecus: [
      'CRD1', 'CRD2', 'CRD3', 'EDC15_C06', 'EDC16_C2', 'EDC16_CP31', 'EDC16_CP36',
      'EDC17_C42', 'EDC17_C43', 'EDC17_C66', 'EDC17_C84', 'EDC17_CP01', 'EDC17_CP10',
      'EDC17_CP46', 'EDC17_CP57', 'MD1CP001', 'MD1CS006', 'M2.1', 'MED17.7.1',
      'MED17.7.2', 'MED17.7.3', 'MED17.7.3.1', 'SID307', 'SID310'
    ]
  },
  {
    id: 'mini-cooper',
    name: 'Mini Cooper',
    country: 'GB',
    badgeSymbol: 'MINI',
    ecus: [
      'EDC16_C31', 'EDC16_C35', 'EDC17_C06', 'EDC17_C41', 'EDC17_C50', 'EDC17_C56',
      'EDC17_CP02', 'EDC17_CP06', 'EDC17_CP09', 'EDC17_CP45', 'MD1CS001',
      'MEVD17.2.3', 'MEVD17.2.5', 'MEVD17.2.8'
    ]
  },
  {
    id: 'mitsubishi',
    name: 'Mitsubishi',
    country: 'JP',
    badgeSymbol: 'MITSUBISHI',
    ecus: [
      'Denso SH7058/7059', 'EDC16C31', 'EDC16_U31', 'EDC17_C49', 'EDC17_CP15', 'EDC17_CP52'
    ]
  },
  {
    id: 'nissan',
    name: 'Nissan',
    country: 'JP',
    badgeSymbol: 'NISSAN',
    ecus: [
      'DCM1.2', 'DCM3.4', 'EDC16_C3', 'EDC16_C36', 'EDC16_CP33', 'EDC17_C11', 'EDC17_C42',
      'EDC17_C84', 'EMS_3120', 'EMS_3125', 'EMS_3141', 'EMS_3155', 'EMS_3160', 'EMS_3161',
      'MD1CS006', 'MD1CS016', 'SID301', 'SID305', 'SID306', 'SID307', 'SID309', 'SID310', 'SID321'
    ]
  },
  {
    id: 'peugeot',
    name: 'Peugeot',
    country: 'FR',
    badgeSymbol: 'PEUGEOT',
    ecus: [
      'DCM3.4', 'DCM3.5', 'DCM6.2', 'DCM7.1', 'DCU-102', 'EDC15_C2', 'EDC16_C0', 'EDC16_C34',
      'EDC17_C10', 'EDC17_C60', 'EDC17_CP52', 'MD1CS003', 'MED17.4.2', 'MEVD17.4.2',
      'MG1CS042', 'MJD8', 'SID208', 'SID803A', 'SID807', 'SID807EVO', 'VD56.12'
    ]
  },
  {
    id: 'porsche',
    name: 'Porsche',
    country: 'DE',
    badgeSymbol: 'PORSCHE',
    ecus: [
      'EDC17_CP14', 'EDC17_CP44', 'MD1CP014', 'ME7.8', 'MED17.1', 'MED17.1.6',
      'MED17.1.11', 'MG1CP007', 'MG1CS002', 'MG1CS008', 'SDI21'
    ]
  },
  {
    id: 'renault',
    name: 'Renault',
    country: 'FR',
    badgeSymbol: 'RENAULT',
    ecus: [
      'DCM1.2', 'DCM3.4', 'EDC16_C3', 'EDC16_C36', 'EDC16_CP33', 'EDC17_C11', 'EDC17_C42',
      'EDC17_C84', 'EMS_3120', 'EMS_31258', 'EMS_3141', 'EMS_3150', 'EMS_3155', 'EMS_3160',
      'EMS_3161', 'MD1CS006', 'MD1CS016', 'SID305', 'SID306', 'SID307', 'SID309',
      'SID310', 'SID321', 'SIm32', 'SIrIus32', 'V40', 'V42', 'V50'
    ]
  },
  {
    id: 'subaru',
    name: 'Subaru',
    country: 'JP',
    badgeSymbol: 'SUBARU',
    ecus: [
      'Denso SH7058/7059', 'Denso SH72543', 'EDC17_CP07'
    ]
  },
  {
    id: 'suzuki',
    name: 'Suzuki',
    country: 'JP',
    badgeSymbol: 'SUZUKI',
    ecus: [
      'EDC16_C3', 'EDC16_C39', 'EDC17_C49', 'EDC17_C69', 'MED17.9.6.3', 'MG1CS026'
    ]
  },
  {
    id: 'toyota',
    name: 'Toyota',
    country: 'JP',
    badgeSymbol: 'TOYOTA',
    ecus: [
      'Bosch MD1CS024', 'Denso GEN1', 'Denso GEN2', 'Denso GEN3', 'DCM3.5', 'DCM6.2A',
      'DCM7.1', 'EDC16_C10', 'EDC16_C31', 'EDC17_C60', 'EDC17_C73', 'EDC17_CP07',
      'EDC17_CP37', 'MD1CS003'
    ]
  },
  {
    id: 'volkswagen',
    name: 'Volkswagen',
    country: 'DE',
    badgeSymbol: 'VOLKSWAGEN',
    ecus: [
      'DCM3.7', 'DCM6.2', 'EDC15_P', 'EDC15_VM', 'EDC16_CP34', 'EDC16_U1', 'EDC16_U31', 'EDC16_U34',
      'EDC17_C46', 'EDC17_C54', 'EDC17_C64', 'EDC17_C74', 'EDC17_CP04', 'EDC17_CP14', 'EDC17_CP20',
      'EDC17_CP24', 'EDC17_CP44', 'EDC17_CP54', 'EDC17_CP74', 'EDC17_U01', 'MD1CP004', 'MD1CP014',
      'MD1CP061', 'MD1CS004', 'MD1CS014', 'MD1CS027', 'MED17.1', 'MED17.5.2', 'MED17.5.20', 'MED17.5.21',
      'MED17.5.25', 'MED17.5.5', 'MED17.5.53', 'MG1CP007', 'MG1CS001', 'MG1CS002', 'MG1CS008', 'MG1CS011',
      'MG1CS031', 'MG1CS111', 'MG1CS163', 'ME7.5', 'ME9.1', 'PCR2.1', 'PPD1.2', 'PPD1.3', 'PPD1.5',
      'SID213', 'Simos.18', 'Simos.19'
    ]
  },
  {
    id: 'volvo',
    name: 'Volvo',
    country: 'SE',
    badgeSymbol: 'VOLVO',
    ecus: [
      'EDC15_C11', 'EDC16_C31', 'EDC16_C34', 'EDC17_CP22', 'EDC17_CP48', 'EDC17_CP66',
      'EDC17_CP68', 'SID206', 'SID803A', 'SID807', 'SID807EVO'
    ]
  }
];
