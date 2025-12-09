'use client';

import { useState } from 'react';
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle, Users, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState('general');

  const sections = [
    { id: 'general', title: 'Ketentuan Umum', icon: FileText },
    { id: 'products', title: 'Produk & Layanan', icon: Package },
    { id: 'payment', title: 'Pembayaran', icon: CheckCircle },
    { id: 'warranty', title: 'Garansi', icon: Shield },
    { id: 'liability', title: 'Tanggung Jawab', icon: Scale },
    { id: 'dispute', title: 'Sengketa', icon: AlertCircle },
  ];

  const content = {
    general: {
      title: 'Ketentuan Umum Penggunaan Layanan',
      content: [
        'Syarat dan Ketentuan ini ("Ketentuan") mengatur penggunaan layanan yang disediakan oleh AGUS WIYONO FARM ("Kami").',
        'Dengan mengakses atau menggunakan layanan Kami, Anda setuju untuk terikat oleh Ketentuan ini.',
        'Jika Anda tidak setuju dengan bagian mana pun dari Ketentuan ini, Anda tidak boleh menggunakan layanan Kami.',
        'Kami berhak mengubah Ketentuan ini sewaktu-waktu dengan memberitahukan perubahan melalui website atau kontak langsung.'
      ]
    },
    products: {
      title: 'Produk dan Layanan',
      content: [
        'Kami menyediakan layanan berikut:',
        '• Pembibitan sapi potong berkualitas',
        '• Budidaya sapi dengan metode modern',
        '• Konsultasi teknis peternakan',
        '• Pendampingan pasca-pembelian',
        '• Informasi produk: Semua sapi yang Kami jual telah melalui pemeriksaan kesehatan dan memiliki dokumen lengkap.',
        '• Ketersediaan: Stok produk dapat berubah sewaktu-waktu sesuai kondisi peternakan.',
        '• Spesifikasi: Informasi detail mengenai usia, berat, dan kondisi kesehatan sapi akan disediakan sebelum transaksi.'
      ]
    },
    payment: {
      title: 'Ketentuan Pembayaran',
      content: [
        'Metode pembayaran yang tersedia:',
        '• Transfer bank ke rekening resmi AGUS WIYONO FARM',
        '• Pembayaran tunai di lokasi',
        '• Pembayaran cicilan (syarat dan ketentuan berlaku)',
        '• DP minimal 30% untuk pemesanan khusus',
        '• Pelunasan sebelum pengiriman atau pengambilan',
        '• Harga dapat berubah sesuai kondisi pasar dan kualitas sapi',
        '• Pembayaran dianggap sah setelah konfirmasi dari tim keuangan Kami'
      ]
    },
    warranty: {
      title: 'Garansi dan Jaminan',
      content: [
        'Kami memberikan garansi sebagai berikut:',
        '• Garansi kesehatan 30 hari sejak tanggal pembelian',
        '• Garansi tidak termasuk penyakit yang disebabkan oleh kelalaian pemeliharaan',
        '• Penggantian sapi jika terbukti memiliki penyakit bawaan',
        '• Gratis konsultasi teknis selama 3 bulan pertama',
        '• Dokumentasi kesehatan dan asal-usul sapi yang lengkap',
        '• Support teknis 24/7 untuk kondisi darurat',
        '• Garansi tidak berlaku jika sapi telah dijual kembali kepada pihak ketiga'
      ]
    },
    liability: {
      title: 'Batasan Tanggung Jawab',
      content: [
        'Tanggung jawab Kami dibatasi sebagai berikut:',
        '• Kami tidak bertanggung jawab atas kerugian yang disebabkan oleh force majeure (bencana alam, wabah, dll)',
        '• Kewajiban Kami maksimal sebesar nilai transaksi pembelian',
        '• Kami tidak bertanggung jawab atas produktivitas sapi setelah periode garansi',
        '• Pemilik bertanggung jawab penuh atas perawatan dan pemeliharaan sapi',
        '• Kami tidak bertanggung jawab atas kehilangan atau kerusakan selama pengiriman oleh pihak ketiga',
        '• Asuransi pengiriman disarankan untuk transaksi besar'
      ]
    },
    dispute: {
      title: 'Penyelesaian Sengketa',
      content: [
        'Prosedur penyelesaian sengketa:',
        '• Negosiasi damai sebagai langkah pertama',
        '• Mediasi melalui pihak ketiga yang netral',
        '• Litigasi melalui pengadilan negeri setempat',
        '• Hukum yang berlaku adalah hukum Republik Indonesia',
        '• Yurisdiksi adalah Pengadilan Negeri Wonosari atau Pengadilan Negeri Yogyakarta',
        '• Biaya penyelesaian sengketa ditanggung oleh pihak yang kalah',
        '• Periode klaim maksimal 6 bulan sejak tanggal kejadian'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => window.history.back()}
                className="mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
              <div className="flex items-center">
                <Scale className="w-6 h-6 text-green-600 mr-3" />
                <h1 className="text-xl font-bold text-gray-900">Syarat & Ketentuan</h1>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/logo.png" alt="AGUS WIYONO FARM" className="h-8 w-8 mr-2 rounded" />
              <span className="text-sm font-semibold text-green-800">AGUS WIYONO FARM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">Navigasi Ketentuan</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center px-4 py-3 text-left hover:bg-green-50 transition-colors ${
                          activeSection === section.id
                            ? 'bg-green-100 text-green-800 border-r-4 border-green-600'
                            : 'text-gray-700'
                        }`}
                      >
                        <Icon className="w-4 h-4 mr-3" />
                        <span className="text-sm font-medium">{section.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-600 to-amber-600 text-white">
                <CardTitle className="text-2xl">
                  {content[activeSection].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="prose prose-green max-w-none">
                  {content[activeSection].content.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {activeSection === 'general' && (
                  <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">Informasi Perusahaan</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Nama Perusahaan:</strong> AGUS WIYONO FARM</p>
                      <p><strong>Pemilik:</strong> Bapak Agus Wiyono</p>
                      <p><strong>Alamat:</strong> JAMBE NGIJO RT 002 RW 006, Desa/Kelurahan Semin, Kec. Semin, Kab. Gunungkidul, Provinsi Daerah Istimewa Yogyakarta</p>
                      <p><strong>Kode Pos:</strong> 55854</p>
                      <p><strong>Telepon:</strong> 082160301493</p>
                      <p><strong>Email:</strong> info@aguswiyonofarm.com</p>
                      <p><strong>Bidang Usaha:</strong> Pembibitan dan Budidaya Sapi Potong</p>
                    </div>
                  </div>
                )}

                {activeSection === 'products' && (
                  <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                    <h3 className="text-lg font-semibold text-amber-800 mb-3">Kualitas Produk</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✅ Sapi sehat dan bebas penyakit menular</li>
                      <li>✅ Dokumen kesehatan lengkap dari dokter hewan</li>
                      <li>✅ Asal-usul sapi yang jelas dan terverifikasi</li>
                      <li>✅ Pakan dan nutrisi yang terkontrol</li>
                      <li>✅ Lingkungan kandang yang bersih dan sehat</li>
                      <li>✅ Tim ahli yang berpengalaman</li>
                    </ul>
                  </div>
                )}

                {activeSection === 'warranty' && (
                  <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Layanan Purna Jual</h3>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />
                        <span>Konsultasi gratis teknis peternakan</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />
                        <span>Panduan pemeliharaan dan perawatan</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />
                        <span>Rekomendasi pakan dan suplemen</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />
                        <span>Support darurat 24/7</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Additional Terms */}
            <Card className="mt-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-green-800">Ketentuan Tambahan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🔄 Perubahan Ketentuan</h4>
                    <p className="text-gray-700 text-sm">
                      Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan berlaku 
                      efektif setelah 7 hari dari pemberitahuan kepada pelanggan.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">📝 Kontrak</h4>
                    <p className="text-gray-700 text-sm">
                      Untuk transaksi di atas Rp 50.000.000, akan dibuatkan kontrak tertulis yang 
                      ditandatangani oleh kedua belah pihak.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🐗 Kesehatan Hewan</h4>
                    <p className="text-gray-700 text-sm">
                      Semua sapi yang dijual telah melalui proses karantina dan pemeriksaan kesehatan 
                      sesuai standar Departemen Pertanian Republik Indonesia.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">📍 Pengiriman</h4>
                    <p className="text-gray-700 text-sm">
                      Pengiriman dapat diatur oleh Kami atau diambil sendiri oleh pembeli. Biaya 
                      pengiriman ditanggung oleh pembeli kecuali ada kesepakatan lain.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">⚖️ Hukum yang Berlaku</h4>
                    <p className="text-gray-700 text-sm">
                      Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. 
                      Segala sengketa akan diselesaikan melalui peradilan yang berwenang di wilayah Yogyakarta.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/logo.png" alt="AGUS WIYONO FARM" className="h-8 w-8 mr-2 rounded" />
            <span className="font-bold">AGUS WIYONO FARM</span>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2024 AGUS WIYONO FARM. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a href="/privacy" className="text-green-400 hover:text-green-300 text-sm">Privacy Policy</a>
            <a href="/terms" className="text-green-400 hover:text-green-300 text-sm">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}