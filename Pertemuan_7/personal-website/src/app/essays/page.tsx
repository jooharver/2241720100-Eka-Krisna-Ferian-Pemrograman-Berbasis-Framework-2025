export default function Esai() {
  const articles = [
    {
      title: "Mengapa Teknologi Penting?",
      date: "April 2025",
      excerpt: "Pandangan tentang pentingnya teknologi di era modern.",
      image: "/images/robot.jpg", // Ganti dengan path gambar kamu
    },
    {
      title: "AI dan Masa Depan",
      date: "Maret 2025",
      excerpt: "Apa dampak AI dalam kehidupan sehari-hari?",
      image: "/images/ai.jpg",
    },
    {
      title: "Etika dalam Pemrograman",
      date: "Februari 2025",
      excerpt: "Tanggung jawab seorang developer terhadap masyarakat.",
      image: "/images/hacker.jpg",
    },
  ];

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-zinc-800 mb-8 text-center">Essai</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-pink-600">{article.title}</h2>
              <p className="text-sm text-gray-400 mb-2">{article.date}</p>
              <p className="text-gray-700">{article.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
