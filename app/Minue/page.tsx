import React from 'react'
import Tablee from '../Components/Tablee'
import Menu from '../Components/Tablee';

const page = () => {
  const menuSections = [
    {
      title: 'الحادق',
      items: [
        {
          name: 'لانشون فراخ - لحم',
          description: '',
          price: 6,
        },
        {
          name: 'رومي',
          description: '',
          price: 10,
        },
        {
          name: 'كيري رومي',
          description: '',
          price: 12,
        },
        {
          name: 'كيري بسطرمة',
          description: '',
          price: 15,
        },
        {
          name: 'فاهيتا لانشون',
          description: '',
          price: 10,
        },
        {
          name: 'لانشون رومي',
          description: '',
          price: 12,
        },
        {
          name: 'سلطة تونة ',
          description: '',
          price: 12,
        },
        {
          name: 'سلطة جبنة',
          description: '',
          price: 7,
        },
        {
          name: 'مورتة',
          description: '',
          price: 6,
        },
        {
          name: 'مورتة كيري',
          description: '',
          price: 8,
        },
        {
          name: 'مورتة رومي',
          description: '',
          price: 15,
        },
        // Add more items here
      ],
    },
    {
      title: 'سندوتشات شرقي',
      items: [
        {
          name: 'بيض كيري',
          description: '',
          price: 12,
        },
        {
          name: 'بيض مورتة',
          description: '',
          price: 12,
        },
        {
          name: 'بيض رومي',
          description: '',
          price: 12,
        },
        {
          name: 'بيض سوسيس',
          description: '',
          price: 15,
        },
        {
          name: 'بيض بسطرمة',
          description: '',
          price: 17,
        },
        {
          name: 'رومي مكس',
          description: 'جبن جريل',
          price: 15,
        },
        {
          name: 'بطاطس ',
          description: 'شيدر',
          price: 12,
        },
        {
          name: 'بطاطس ',
          description: 'كاتشب مايونيز',
          price: 8,
        },
        {
          name: 'سوسيس',
          description: 'سادة',
          price: 12,
        },
        {
          name: 'رومي فارم',
          description: '',
          price: 12,
        },
        {
          name: 'بيض بلوبيف',
          description: '',
          price: 15,
        },
        {
          name: 'بلوبيف',
          description: '',
          price: 10,
        },
      ],
    },
    {
      title: 'مكس الحادق',
      items: [
        {
          name: 'كيري سوسيس',
          description: '',
          price: 15,
        },
        {
          name: 'كيري لانشون رومي',
          description: '',
          price: 15,
        },
        {
          name: ' سوسيس رومي',
          description: '',
          price: 15,
        },
      ],
    },
    {
      title: 'بطاطس',
      items: [
        {
          name: 'طبق بطاطس',
          description: 'كاتشب و مايونيز',
          price: 15,
        },
        {
          name: 'طبق بطاطس',
          description: 'توابل',
          price: 15,
        },
        {
          name: 'طبق بطاطس',
          description: 'تشيز',
          price: 20,
        },
        {
          name: 'طبق بطاطس',
          description: 'ستربس',
          price: 30,
        },
       ],
    },
    {
      title: 'الحلو',
      items: [
        {
          name: 'مربي',
          description: '',
          price: 7,
        },
        {
          name: 'حلاوة',
          description: '',
          price: 8,
        },
        {
          name: 'كريمة',
          description: 'عسل',
          price: 12,
        },
        {
          name: 'كريمة',
          description: 'مربي',
          price: 12,
        },
        {
          name: 'كريمة',
          description: 'حلاوة',
          price: 12,
        },
        {
          name: 'كريمة',
          description: 'اوريو شيكولاته',
          price: 20,
        },
        {
          name: 'كريمة',
          description: 'لوتس شيكولاته',
          price: 20,
        },
        {
          name: 'عسل و طحينة',
          description: '',
          price: 7,
        },
        {
          name: 'بلح بالسمنة',
          description: '',
          price: 10,
        },
      ],
    },
    {
      title: 'توكسيك',
      items: [
        {
          name: 'رومي مربي',
          description: '',
          price: 12,
        },
        {
          name: 'طعمية عسل و طحينة',
          description: '',
          price: 10,
        },
        // Add more items here
      ],
    },
    {
      title: 'اضافات',
      items: [
        {
          name: 'رومي',
          description: '',
          price: 5,
        },
        {
          name: 'شيدر',
          description: '',
          price: 5,
        },
      ],
    },
  ];
  
  return (
    <div className='Minue'>
             <Menu menuSections={menuSections} />

    </div>
  )
}

export default page