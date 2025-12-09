'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Award, Users, Heart, TreePine, Shield, ChevronRight, Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Pesan Anda telah berhasil dikirim!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Terjadi kesalahan. Silakan coba lagi.');
      }
    } catch (error) {
      alert('Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="AGUS WIYONO FARM" className="h-12 w-12 mr-3 rounded-lg" />
              <div>
                <h1 className="text-xl font-bold text-green-800">AGUS WIYONO FARM</h1>
                <p className="text-xs text-amber-600">Pembibitan & Budidaya Sapi Potong</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-green-600 transition-colors">Tentang</a>
              <a href="#layanan" className="text-gray-700 hover:text-green-600 transition-colors">Layanan</a>
              <a href="#kontak" className="text-gray-700 hover:text-green-600 transition-colors">Kontak</a>
              <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                Hubungi Kami
              </Button>
            </div>

            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#beranda" className="block px-3 py-2 text-gray-700 hover:text-green-600">Beranda</a>
              <a href="#tentang" className="block px-3 py-2 text-gray-700 hover:text-green-600">Tentang</a>
              <a href="#layanan" className="block px-3 py-2 text-gray-700 hover:text-green-600">Layanan</a>
              <a href="#kontak" className="block px-3 py-2 text-gray-700 hover:text-green-600">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                <Shield className="w-4 h-4 mr-1" />
                Terpercaya Sejak 2020
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Pembibitan & Budidaya <span className="text-green-600">Sapi Potong</span> Berkualitas
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                AGUS WIYONO FARM menyediakan bibit sapi potong unggul dengan kualitas terbaik, 
                didukung oleh tim profesional dan pengalaman bertahun-tahun dalam industri peternakan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Sekarang
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  onClick={() => window.open('https://wa.me/6282160301493', '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </Button>
                <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                  Lihat Produk
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/hero-cattle.jpg" 
                alt="AGUS WIYONO FARM - Pembibitan Sapi Potong" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end">
                <div className="p-8 text-white">
                  <Award className="w-16 h-16 mb-4" />
                  <h3 className="text-3xl font-bold mb-2">Kualitas Terjamin</h3>
                  <p className="text-lg">Sapi sehat, bibit unggul, dan hasil maksimal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-600">Sapi Berkualitas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">100+</div>
              <p className="text-gray-600">Pelanggan Puas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5</div>
              <p className="text-gray-600">Tahun Pengalaman</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
              <p className="text-gray-600">Layanan Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Produk <span className="text-green-600">Unggulan</span></h2>
            <p className="text-xl text-gray-600">Sapi potong berkualitas tinggi untuk kebutuhan Anda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-amber-100 flex items-center justify-center">
                <TreePine className="w-16 h-16 text-green-600" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Sapi Brahman Cross</h3>
                <p className="text-sm text-gray-600 mb-2">350-450 kg • 18-24 bulan</p>
                <p className="text-green-600 font-semibold">Rp 18-25 Juta</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-green-100 flex items-center justify-center">
                <Heart className="w-16 h-16 text-amber-600" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Sapi Limousine</h3>
                <p className="text-sm text-gray-600 mb-2">400-550 kg • 20-30 bulan</p>
                <p className="text-green-600 font-semibold">Rp 22-30 Juta</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-amber-100 flex items-center justify-center">
                <Users className="w-16 h-16 text-green-600" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Sapi Simmental</h3>
                <p className="text-sm text-gray-600 mb-2">300-400 kg • 16-22 bulan</p>
                <p className="text-green-600 font-semibold">Rp 15-20 Juta</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-green-100 flex items-center justify-center">
                <Shield className="w-16 h-16 text-amber-600" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Sapi Bali</h3>
                <p className="text-sm text-gray-600 mb-2">250-350 kg • 24-36 bulan</p>
                <p className="text-green-600 font-semibold">Rp 12-18 Juta</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fasilitas <span className="text-green-600">Modern</span></h2>
            <p className="text-xl text-gray-600">Infrastruktur pendukung untuk kualitas terbaik</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/facility.jpg" 
                alt="Fasilitas Modern AGUS WIYONO FARM" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover mb-6"
              />
            </div>
            <div>
              <img 
                src="/veterinary.jpg" 
                alt="Perawatan Kesehatan Hewan" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 text-center">
              <CardContent>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kandang Modern</h3>
                <p className="text-gray-600">Fasilitas kandang yang bersih, nyaman, dan sesuai standar kesehatan hewan.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent>
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Perawatan Veteriner</h3>
                <p className="text-gray-600">Tim dokter hewan profesional yang siap memberikan perawatan terbaik.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pakan Berkualitas</h3>
                <p className="text-gray-600">Nutrisi optimal dengan pakan berkualitas tinggi untuk pertumbuhan maksimal.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="tentang" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang <span className="text-green-600">AGUS WIYONO FARM</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami adalah mitra terpercaya dalam industri pembibitan dan budidaya sapi potong di Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8 shadow-xl">
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <TreePine className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Lokasi Strategis</h3>
                      <p className="text-gray-600">
                        Terletak di Semin, Gunungkidul, Yogyakarta dengan akses mudah dan lingkungan yang mendukung pertumbuhan sapi yang optimal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <Heart className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Perawatan Terbaik</h3>
                      <p className="text-gray-600">
                        Setiap sapi mendapatkan perawatan kesehatan dan nutrisi yang optimal untuk memastikan kualitas terbaik.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Tim Profesional</h3>
                      <p className="text-gray-600">
                        Didukung oleh tim ahli berpengalaman dalam bidang peternakan dan kesehatan hewan.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-amber-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Misi Kami</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Menyediakan bibit sapi potong berkualitas tinggi</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Mendukung ketahanan pangan nasional</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Meningkatkan kesejahteraan peternak lokal</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Berinovasi dalam teknologi peternakan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan <span className="text-green-600">Unggulan</span></h2>
            <p className="text-xl text-gray-600">Solusi lengkap untuk kebutuhan peternakan Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow border-2 border-green-100">
              <CardContent className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pembibitan Sapi</h3>
                <p className="text-gray-600 mb-4">
                  Menyediakan bibit sapi potong unggul dengan kualitas terbaik dan garansi kesehatan.
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  Pelajari Lebih Lanjut
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow border-2 border-amber-100">
              <CardContent className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Budidaya Sapi</h3>
                <p className="text-gray-600 mb-4">
                  Layanan budidaya sapi profesional dengan metode modern dan perawatan optimal.
                </p>
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                  Pelajari Lebih Lanjut
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow border-2 border-green-100">
              <CardContent className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Konsultasi</h3>
                <p className="text-gray-600 mb-4">
                  Konsultasi gratis untuk peternak yang ingin meningkatkan kualitas hasil ternaknya.
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  Pelajari Lebih Lanjut
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi <span className="text-green-600">Kami</span></h2>
            <p className="text-xl text-gray-600">Siap membantu kebutuhan peternakan Anda</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 shadow-xl">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Alamat</h3>
                    <p className="text-gray-600">
                      JAMBE NGIJO RT 002 RW 006, Desa/Kelurahan Semin, Kec. Semin, Kab. Gunungkidul, Provinsi Daerah Istimewa Yogyakarta
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telepon</h3>
                    <p className="text-gray-600">082160301493</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Jam Operasional</h3>
                    <p className="text-gray-600">Senin - Sabtu: 06:00 - 18:00</p>
                    <p className="text-gray-600">Minggu: 07:00 - 17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-xl">
              <CardContent>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kirim Pesan</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telepon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Tulis pesan Anda..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="AGUS WIYONO FARM" className="h-10 w-10 mr-3 rounded-lg" />
                <div>
                  <h3 className="text-lg font-bold">AGUS WIYONO FARM</h3>
                  <p className="text-xs text-gray-400">Pembibitan & Budidaya Sapi Potong</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Mitra terpercaya untuk kebutuhan pembibitan dan budidaya sapi potong berkualitas.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Pembibitan Sapi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Budidaya Sapi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pemasaran</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Informasi</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 AGUS WIYONO FARM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}