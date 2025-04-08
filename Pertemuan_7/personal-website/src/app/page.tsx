import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang Eka Krisna Ferian, seorang pengembang web dari Politeknik Negeri Malang.',
  openGraph: {
    images: 'https://yourdomain.com/images/saya.JPG', // Ganti dengan URL gambar kamu yang valid
    url: 'https://yourdomain.com/tentang', // Ganti dengan URL halaman kamu
  },
};

export default function TentangSaya() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto text-center">
      <img
        src="/images/saya.JPG"
        alt="Foto Saya"
        className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
      />
      <h1 className="text-4xl font-bold text-zinc-800 mb-2">Halo! Saya Eka Krisna Ferian</h1>
      <p className="text-zinc-600 text-lg mb-6">
        Seorang pengembang web yang senang belajar dan berbagi ilmu. Saat ini saya kuliah di Politeknik Negeri Malang dan aktif membuat proyek-proyek teknologi.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-medium shadow-sm">React</span>
        <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-medium shadow-sm">Tailwind CSS</span>
        <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-medium shadow-sm">Next.js</span>
      </div>
    </div>
  );
}
