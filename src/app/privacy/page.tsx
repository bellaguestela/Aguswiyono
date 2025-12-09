'use client';

import { useState } from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Ringkasan', icon: FileText },
    { id: 'collection', title: 'Pengumpulan Data', icon: Database },
    { id: 'usage', title: 'Penggunaan Data', icon: Eye },
    { id: 'protection', title: 'Perlindungan Data', icon: Lock },
    { id: 'rights', title: 'Hak Pengguna', icon: UserCheck },
  ];

  const content = {
    overview: {
      title: 'Ringkasan Kebijakan Privasi',
      content: [
        'AGUS WIYONO FARM ("Kami") berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.',
        'Kebijakan Privasi ini menjelaskan bagaimana Kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika menggunakan layanan pembibitan dan budidaya sapi potong Kami.',
        'Dengan menggunakan layanan Kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.'
      ]
    },
    collection: {
      title: 'Pengumpulan Data Pribadi',
      content: [
        'Kami dapat mengumpulkan informasi pribadi berikut:',
        '• Nama lengkap dan informasi identitas',
        '• Nomor telepon dan alamat email',
        '• Alamat lengkap untuk pengiriman',
        '• Informasi pembayaran dan transaksi',
        '• Preferensi produk dan layanan',
        '• Data penggunaan website dan aplikasi',
        '• Informasi komunikasi dengan tim Kami'
      ]
    },
    usage: {
      title: 'Penggunaan Data Pribadi',
      content: [
        'Kami menggunakan informasi pribadi Anda untuk:',
        '• Memproses pesanan dan transaksi',
        '• Menyediakan layanan pelanggan',
        '• Mengirimkan informasi produk dan promosi',
        '• Meningkatkan kualitas layanan Kami',
        '• Melakukan analisis bisnis dan riset pasar',
        '• Mematuhi kewajiban hukum dan peraturan',
        '• Mencegah aktivitas penipuan dan keamanan'
      ]
    },
    protection: {
      title: 'Perlindungan Data Pribadi',
      content: [
        'Kami menerapkan langkah-langkah keamanan berikut:',
        '• Enkripsi data selama transmisi dan penyimpanan',
        '• Akses terbatas ke informasi pribadi',
        '• Sistem monitoring keamanan 24/7',
        '• Backup data secara berkala',
        '• Update keamanan sistem secara rutin',
        '• Pelatihan staf tentang keamanan data',
        '• Audit keamanan berkala'
      ]
    },
    rights: {
      title: 'Hak Pengguna Data',
      content: [
        'Sebagai pengguna, Anda memiliki hak untuk:',
        '• Mengakses data pribadi yang Kami simpan',
        '• Memperbaiki data yang tidak akurat',
        '• Menghapus data pribadi sesuai ketentuan',
        '• Menolak penggunaan data untuk marketing',
        '• Meminta salinan data pribadi Anda',
        '• Menarik persetujuan penggunaan data',
        '• Mengajukan keluhan tentang penanganan data'
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
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h1 className="text-xl font-bold text-gray-900">Kebijakan Privasi</h1>
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
                <CardTitle className="text-lg text-green-800">Navigasi Kebijakan</CardTitle>
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

                {activeSection === 'overview' && (
                  <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">Informasi Kontak</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Perusahaan:</strong> AGUS WIYONO FARM</p>
                      <p><strong>Alamat:</strong> JAMBE NGIJO RT 002 RW 006, Desa/Kelurahan Semin, Kec. Semin, Kab. Gunungkidul, Provinsi Daerah Istimewa Yogyakarta</p>
                      <p><strong>Kode Pos:</strong> 55854</p>
                      <p><strong>Telepon:</strong> 082160301493</p>
                      <p><strong>Email:</strong> info@aguswiyonofarm.com</p>
                    </div>
                  </div>
                )}

                {activeSection === 'rights' && (
                  <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                    <h3 className="text-lg font-semibold text-amber-800 mb-3">Cara Menghubungi Kami</h3>
                    <p className="text-gray-700 mb-4">
                      Untuk menjalankan hak-hak Anda atau jika Anda memiliki pertanyaan tentang kebijakan privasi ini, 
                      silakan hubungi Kami melalui:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p>📞 Telepon: 082160301493</p>
                      <p>📍 Alamat: JAMBE NGIJO RT 002 RW 006, Semin, Gunungkidul, DIY 55854</p>
                      <p>⏰ Jam Operasional: Senin - Sabtu, 06:00 - 18:00 WIB</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="mt-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-green-800">Informasi Penting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🔄 Pembaruan Kebijakan</h4>
                    <p className="text-gray-700 text-sm">
                      Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu. Kami akan memberitahukan 
                      perubahan penting melalui website atau kontak langsung.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🌐 Kebijakan Cookie</h4>
                    <p className="text-gray-700 text-sm">
                      Website Kami menggunakan cookie untuk meningkatkan pengalaman pengguna. 
                      Anda dapat mengatur preferensi cookie melalui browser Anda.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">👥 Pihak Ketiga</h4>
                    <p className="text-gray-700 text-sm">
                      Kami tidak menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. 
                      Data hanya dibagikan jika diperlukan untuk penyediaan layanan atau sesuai dengan hukum.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">⚖️ Dasar Hukum</h4>
                    <p className="text-gray-700 text-sm">
                      Kebijakan ini dibuat sesuai dengan peraturan perlindungan data pribadi 
                      yang berlaku di Republik Indonesia.
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