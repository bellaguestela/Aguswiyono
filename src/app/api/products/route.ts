import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const products = [
      {
        id: 1,
        name: "Sapi Brahman Cross",
        category: "Sapi Potong",
        breed: "Brahman Cross",
        age: "18-24 bulan",
        weight: "350-450 kg",
        price: "Rp 18.000.000 - Rp 25.000.000",
        description: "Sapi Brahman Cross berkualitas tinggi dengan pertumbuhan cepat dan kualitas daging premium.",
        features: [
          "Pertumbuhan cepat",
          "Kualitas daging premium",
          "Tahan terhadap penyakit",
          "Sudah divaksin lengkap"
        ],
        availability: "Tersedia",
        image: "/api/placeholder/400/300"
      },
      {
        id: 2,
        name: "Sapi Limousine",
        category: "Sapi Potong",
        breed: "Limousine",
        age: "20-30 bulan",
        weight: "400-550 kg",
        price: "Rp 22.000.000 - Rp 30.000.000",
        description: "Sapi Limousine dengan kualitas daging super premium dan persentase rendah yang tinggi.",
        features: [
          "Kualitas daging super premium",
          "Persentase rendah tinggi",
          "Pertumbuhan optimal",
          "Sertifikat kesehatan lengkap"
        ],
        availability: "Tersedia",
        image: "/api/placeholder/400/300"
      },
      {
        id: 3,
        name: "Sapi Simmental",
        category: "Sapi Potong",
        breed: "Simmental",
        age: "16-22 bulan",
        weight: "300-400 kg",
        price: "Rp 15.000.000 - Rp 20.000.000",
        description: "Sapi Simmental dengan kualitas yang seimbang antara pertumbuhan dan kualitas daging.",
        features: [
          "Pertumbuhan seimbang",
          "Kualitas daging baik",
          "Adaptif terhadap lingkungan",
          "Perawatan mudah"
        ],
        availability: "Tersedia",
        image: "/api/placeholder/400/300"
      },
      {
        id: 4,
        name: "Sapi Bali",
        category: "Sapi Potong",
        breed: "Bali",
        age: "24-36 bulan",
        weight: "250-350 kg",
        price: "Rp 12.000.000 - Rp 18.000.000",
        description: "Sapi Bali asli dengan kualitas daging yang khas dan daya tahan tinggi.",
        features: [
          "Daging khas Indonesia",
          "Daya tahan tinggi",
          "Perawatan mudah",
          "Harga terjangkau"
        ],
        availability: "Terbatas",
        image: "/api/placeholder/400/300"
      }
    ];

    return NextResponse.json({
      success: true,
      data: products
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}