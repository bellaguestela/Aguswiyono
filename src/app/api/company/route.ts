import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const companyInfo = {
      name: "AGUS WIYONO FARM",
      fullName: "AGUS WIYONO FARM",
      tagline: "Pembibitan & Budidaya Sapi Potong",
      description: "AGUS WIYONO FARM menyediakan bibit sapi potong unggul dengan kualitas terbaik, didukung oleh tim profesional dan pengalaman bertahun-tahun dalam industri peternakan.",
      owner: "Bapak Agus Wiyono",
      address: {
        full: "JAMBE NGIJO RT 002 RW 006, Desa/Kelurahan Semin, Kec. Semin, Kab. Gunungkidul, Provinsi Daerah Istimewa Yogyakarta",
        village: "Semin",
        district: "Semin",
        regency: "Gunungkidul",
        province: "Daerah Istimewa Yogyakarta",
        postalCode: "55854"
      },
      contact: {
        phone: "082160301493",
        email: "info@aguswiyonofarm.com",
        whatsapp: "6282160301493"
      },
      business: {
        type: "Pembibitan dan Budidaya Sapi Potong",
        established: "2020",
        license: "Peternakan Terdaftar No. 527/2020"
      },
      operatingHours: {
        weekdays: "Senin - Sabtu: 06:00 - 18:00",
        sunday: "Minggu: 07:00 - 17:00",
        support: "24/7 Emergency Support"
      },
      stats: {
        cattle: "500+",
        customers: "100+",
        experience: "5 Tahun",
        support: "24/7"
      }
    };

    return NextResponse.json({
      success: true,
      data: companyInfo
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch company information" },
      { status: 500 }
    );
  }
}