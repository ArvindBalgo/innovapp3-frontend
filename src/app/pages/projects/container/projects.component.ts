import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  public projects: any;
  public list: any = [];
  private URL_BACKEND = 'https://mauriquotes-backend.herokuapp.com/';

  constructor(
    private _httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    let merchants = [
      {
    "id": 1,
    "brn": "98765432",
    "description": "Leading building and construction company specializing in residential and commercial projects. We provide top-quality craftsmanship and innovative solutions to meet your construction needs. From design to completion, we ensure timely delivery and exceptional customer satisfaction.",
    "name": "Construction Masters",
    "mcb_account": "12345678",
    "link": "www.constructionmasters.com",
    "category_id": 1, // Building and Constructions
    "contact_number": "555-123-4567"
  },
    {
      "id": 2,
      "brn": "54321678",
      "description": "Experienced event management company dedicated to creating unforgettable private events. Our team of professionals will meticulously plan and execute your special occasion, ensuring every detail is perfect. From birthdays to anniversaries, trust us to make your event truly exceptional.",
      "name": "Elite Event Planners",
      "mcb_account": "87654321",
      "link": "www.eliteeventplanners.com",
      "category_id": 2, // Private Events
      "contact_number": "555-987-6543"
    },
    {
      "id": 3,
      "brn": "21098765",
      "description": "Passionate wedding planners committed to bringing your dream wedding to life. We offer personalized services tailored to your preferences, from venue selection to decorations and coordination. Let us handle the details while you enjoy your special day stress-free.",
      "name": "Cherished Moments Weddings",
      "mcb_account": "45678901",
      "link": "www.cherishedmomentsweddings.com",
      "category_id": 3, // Wedding
      "contact_number": "555-234-5678"
    },
    {
      "id": 4,
      "brn": "67890123",
      "description": "Trendsetting fashion brand with a focus on makeup and fashion. Our collections feature unique designs and high-quality materials that reflect the latest trends. From casual wear to formal attire, elevate your style with our exclusive fashion line.",
      "name": "Fashion Forward",
      "mcb_account": "23456789",
      "link": "www.fashionforward.com",
      "category_id": 4, // Makeup & Fashion
      "contact_number": "555-876-5432"
    },
    {
      "id": 5,
      "brn": "34567890",
      "description": "Reliable car rental service offering a wide range of vehicles to suit your needs. Whether you're planning a road trip or need transportation for a special occasion, we provide well-maintained cars and excellent customer service. Enjoy a comfortable and hassle-free journey with us.",
      "name": "Wheels on the Go",
      "mcb_account": "89012345",
      "link": "www.wheelsonthego.com",
      "category_id": 5, // Car Rental
      "contact_number": "555-345-6789"
    },
    {
      "id": 6,
      "brn": "56789012",
      "description": "Trustworthy and professional babysitting services for busy parents. Our experienced caregivers prioritize the safety and well-being of your children, providing a nurturing environment. Enjoy peace of mind knowing your little ones are in capable hands.",
      "name": "Little Angels Babysitting",
      "mcb_account": "09876543",
      "link": "www.littleangelsbabysitting.com",
      "category_id": 6, // Baby Sitting
      "contact_number": "555-901-2345"
    },
    {
      "id": 7,
      "brn": "78901234",
      "description": "Leading provider of cloud computing solutions for businesses of all sizes. Our expertise in cloud technology allows us to deliver scalable and secure solutions tailored to your organization's needs. Trust us to optimize your operations and drive growth.",
      "name": "CloudTech Solutions",
      "mcb_account": "65432109",
      "link": "www.cloudtechsolutions.com",
      "category_id": 7, // Car Maintenance
      "contact_number": "555-789-0123"
    },
    {
      "id": 8,
      "brn": "90123456",
      "description": "Innovative software development company specializing in AI and machine learning. We build cutting-edge applications that transform industries and drive digital transformation. Let us help you harness the power of artificial intelligence for your business.",
      "name": "AI Innovators",
      "mcb_account": "43210987",
      "link": "www.aiinnovators.com",
      "category_id": 8, // Beauty and Spa
      "contact_number": "555-456-7890"
    },
    {
      "id": 9,
      "brn": "43210987",
      "description": "Premier entertainment company offering a wide range of services for events and parties. From live music performances to DJs and event coordination, we create memorable experiences for all occasions. Let us bring the entertainment to your next event.",
      "name": "Starlight Entertainment",
      "mcb_account": "90123456",
      "link": "www.starlightentertainment.com",
      "category_id": 9, // Entertainment
      "contact_number": "555-234-5678"
    },
    {
      "id": 10,
      "brn": "65432109",
      "description": "Luxurious beauty and spa center providing a tranquil escape from everyday life. Our experienced therapists offer a range of rejuvenating treatments, including massages, facials, and body therapies. Indulge in a pampering experience and enhance your well-being.",
      "name": "Blissful Spa Retreat",
      "mcb_account": "78901234",
      "link": "www.blissfulsparetreat.com",
      "category_id": 8, // Beauty and Spa
      "contact_number": "555-345-6789"
    },
    {
      "id": 11,
      "brn": "87654321",
      "description": "Expert construction and remodeling services for residential and commercial properties. We specialize in renovations, additions, and custom home construction. With attention to detail and quality craftsmanship, we turn your vision into reality.",
      "name": "Master Builders",
      "mcb_account": "21098765",
      "link": "www.masterbuilders.com",
      "category_id": 1, // Building and Constructions
      "contact_number": "555-901-2345"
    },
    {
      "id": 12,
      "brn": "09876543",
      "description": "Comprehensive car maintenance and repair services for all vehicle makes and models. Our skilled technicians provide routine maintenance, diagnostics, and repairs to keep your car running smoothly. Trust us to keep you on the road safely.",
      "name": "Auto Care Experts",
      "mcb_account": "56789012",
      "link": "www.autocareexperts.com",
      "category_id": 7, // Car Maintenance
      "contact_number": "555-678-9012"
    },
    {
      "id": 13,
      "brn": "56789012",
      "description": "Creative event planning and coordination services for private celebrations. We specialize in curating unique experiences tailored to your preferences. From intimate gatherings to grand parties, we ensure every detail is flawlessly executed.",
      "name": "Celebration Creators",
      "mcb_account": "09876543",
      "link": "www.celebrationcreators.com",
      "category_id": 2, // Private Events
      "contact_number": "555-345-6789"
    },
    {
      "id": 14,
      "brn": "23456789",
      "description": "Exquisite wedding planning and design services for couples in search of a truly memorable celebration. We bring your vision to life, from venue selection to decor and entertainment. Trust us to create an enchanting and unforgettable wedding experience.",
      "name": "Enchanted Weddings",
      "mcb_account": "67890123",
      "link": "www.enchantedweddings.com",
      "category_id": 3, // Wedding
      "contact_number": "555-890-1234"
    },
    {
      "id": 15,
      "brn": "34567890",
      "description": "Stylish fashion boutique offering a curated collection of clothing and accessories. From trendy pieces to timeless classics, we cater to the fashion-forward individual. Discover your personal style and elevate your wardrobe with our exquisite selections.",
      "name": "Chic Boutique",
      "mcb_account": "56789012",
      "link": "www.chicboutique.com",
      "category_id": 4, // Makeup & Fashion
      "contact_number": "555-234-5678"
    },
    {
      "id": 16,
      "brn": "01234567",
      "description": "Reliable car rental services for your travel needs. We offer a diverse fleet of well-maintained vehicles to suit every occasion. Whether you need a compact car for a city trip or a spacious SUV for a family vacation, we've got you covered.",
      "name": "City Drive Rentals",
      "mcb_account": "23456789",
      "link": "www.citydriverentals.com",
      "category_id": 5, // Car Rental
      "contact_number": "555-678-9012"
    },
    {
      "id": 17,
      "brn": "78901234",
      "description": "Professional babysitting services for your little ones. Our caring and experienced babysitters ensure a safe and nurturing environment while you take care of other responsibilities. Trust us to provide reliable and trustworthy childcare.",
      "name": "Guardian Angels Babysitting",
      "mcb_account": "90123456",
      "link": "www.guardianangelsbabysitting.com",
      "category_id": 6, // Baby Sitting
      "contact_number": "555-901-2345"
    },
    {
      "id": 18,
      "brn": "90123456",
      "description": "Innovative software development company specializing in AI and machine learning. We build cutting-edge applications that transform industries and drive digital transformation. Let us help you harness the power of artificial intelligence for your business.",
      "name": "AI Innovators",
      "mcb_account": "43210987",
      "link": "www.aiinnovators.com",
      "category_id": 8, // Beauty and Spa
      "contact_number": "555-456-7890"
    },
    {
      "id": 19,
      "brn": "76543210",
      "description": "Exciting entertainment center featuring a variety of attractions for all ages. From arcade games to laser tag and indoor playgrounds, we provide endless fun and entertainment. Gather your family and friends for an unforgettable experience.",
      "name": "FunZone Entertainment",
      "mcb_account": "09876543",
      "link": "www.funzoneentertainment.com",
      "category_id": 9, // Entertainment
      "contact_number": "555-567-8901"
    },
    {
      "id": 20,
      "brn": "21098765",
      "description": "Specialized makeup and fashion services for weddings, events, and photo shoots. Our talented team of makeup artists and stylists create stunning looks that enhance your natural beauty. Let us make you feel confident and glamorous for your special occasions.",
      "name": "Glamour Studios",
      "mcb_account": "87654321",
      "link": "www.glamourstudios.com",
      "category_id": 4, // Makeup & Fashion
      "contact_number": "555-678-9012"
    }
  ];

    merchants.forEach(merchant => {
      console.log(merchant)
    })


   /* this._httpClient.get('/api/projects').subscribe((response: any) => {
      this.projects = response;
    })*/

/*
    this._httpClient.get(`${this.URL_BACKEND}api/quotes`).subscribe((response: any) => {
      console.log(response.data, 'RESPONSE DATA');
      response.data.forEach((project: any) => {
        this.list.push({
          descriptions: project.description,
          deadline: "20/03/2023",
          budget: project.budjet,
          bidders: "10",
          status: 1
        })
      })

      console.log(this.list)
    })
*/
  }

  getStatus(statuscode: number): string {
    switch (statuscode) {
      case 1:
        return 'In Progress'
      case 2:
        return 'Completed'
      case 3:
        return 'Expired'
      default:
        return 'In Progress'
    }
  }

}
