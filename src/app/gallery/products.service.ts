import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ProductDetails } from './product-card/product-details';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  getDetails() {
    const baseImagePath = 'assets/showcase/images/gallery/';
    const products: ProductDetails[] = [
      {
        name: 'CMS 8000 ',
        alt: 'CMS 8000 ',
        imgSrc: 'cms_8000.jpg',
      },
      {
        name: 'CMS6000 3 PARA / 5 PARA',
        alt: 'CMS6000 3 PARA / 5 PARA',
        imgSrc: 'cms6000_3_para_5_para.jpg',
      },
      {
        name: 'KOMED-M3 PRIME',
        alt: 'KOMED-M3 PRIME',
        imgSrc: 'komed-m3_prime.jpg',
      },
      {
        name: 'KOMED-M4 MP 30 ',
        alt: 'KOMED-M4 MP 30 ',
        imgSrc: 'komed-m4_mp_30.jpg',
      },
      {
        name: 'CMS5100',
        alt: 'CMS5100',
        imgSrc: 'cms5100.png',
      },
      {
        name: ' CMS800G CTG MACHINE',
        alt: ' CMS800G CTG MACHINE',
        imgSrc: 'cms800g_ctg_machine.jpg',
      },
      {
        name: 'HAWKMED SYRINGE PUMP',
        alt: 'HAWKMED SYRINGE PUMP',
        imgSrc: 'hawkmed_syringe_pump.jpg',
      },
      {
        name: 'HAWKMED INFUSION PUMP',
        alt: 'HAWKMED INFUSION PUMP',
        imgSrc: 'hawkmed_infusion_pump.jpg',
      },
      {
        name: 'CMS100G',
        alt: 'CMS100G',
        imgSrc: 'cms100g.jpg',
      },
      {
        name: ' CMS 300G',
        alt: ' CMS 300G',
        imgSrc: 'cms_300g.jpg',
      },
      {
        name: 'CMS600G 6 CHANNEL',
        alt: 'CMS600G 6 CHANNEL',
        imgSrc: 'cms600g_6_channel.jpg',
      },
      {
        name: '12 CHANNEL ECG MACHINE',
        alt: '12 CHANNEL ECG MACHINE',
        imgSrc: '12_channel_ecg_machine.jpg',
      },
      {
        name: 'BPAP25 Series -- RESmart GII',
        alt: 'BPAP25 Series -- RESmart GII',
        imgSrc: 'bpap25_series_--_resmart_gii.jpg',
      },
      {
        name: ' RMS-BIPAP-T25',
        alt: ' RMS-BIPAP-T25',
        imgSrc: 'rms-bipap-t25.jpg',
      },
      {
        name: 'Auto CPAP Machine',
        alt: 'Auto CPAP Machine',
        imgSrc: 'auto_cpap_machine.jpg',
      },
      {
        name: ' OXYGEN CONCENTRATOR ',
        alt: ' OXYGEN CONCENTRATOR ',
        imgSrc: 'oxygen_concentrator.jpg',
      },
      {
        name: 'PULSE OXIMETER ',
        alt: 'PULSE OXIMETER ',
        imgSrc: 'pulse_oximeter.jpg',
      },
      {
        name: 'AIR MATTRESS',
        alt: 'AIR MATTRESS',
        imgSrc: 'air_mattress.jpg',
      },
      {
        name: 'Contec Nebulizer ',
        alt: 'Contec Nebulizer ',
        imgSrc: 'contec_nebulizer.jpg',
      },
      {
        name: 'Fetal Doppler',
        alt: 'Fetal Doppler',
        imgSrc: 'fetal_doppler.jpg',
      },
      {
        name: 'M-Care Portable Suction',
        alt: 'M-Care Portable Suction',
        imgSrc: 'm-care_portable_suction.jpg',
      },
      {
        name: 'M-Care Double Jar Suction',
        alt: 'M-Care Double Jar Suction',
        imgSrc: 'm-care_double_jar_suction.jpg',
      },
    ];

    products.forEach((product) => {
      if (product.imgSrc) {
        product.imgSrc = baseImagePath + product.imgSrc;
      }
    });
    return of(products);
  }
}
