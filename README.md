# CINEMAX+ — Sinemanın Sahnesi

Premium görünümlü, tam işlevli Türkçe film ve dizi izleme platformu. Next.js App Router, Tailwind CSS, Prisma ve SQLite ile geliştirilmiştir.

## Özellikler

- Netflix / Disney+ / Prime Video tarzı koyu, sinematik arayüz
- Otomatik geçişli hero slider, öne çıkanlar, en çok izlenenler, yeni eklenenler, trend içerikler
- Film ve dizi katalog sayfaları; tür, yıl, IMDb ve sıralama filtreleri
- Arama katmanı (klavye kısayolu: `Ctrl/Cmd + K`)
- İçerik detay sayfaları: afiş, fragman, IMDb, yaş sınırı, oyuncular, künye, benzer içerikler
- Sezon / bölüm seçici ve bölüm bazlı oynatma
- Özel video oynatıcı: oynat/duraklat, ses, tam ekran, kaynak ve dil seçimi, kaldığın yerden devam
- Gerçek hesaplar: kayıt, giriş, çıkış, şifre sıfırlama, profil düzenleme, avatar yükleme, şifre değiştirme
- Favoriler, izleme geçmişi ve “İzlemeye Devam Et”
- Yönetim paneli: içerik, sezon, bölüm, kaynak, kategori ve kullanıcı yönetimi, istatistikler
- Responsive tasarım, mobil menü, özel 404 ve statik sayfalar
- SEO metadata, `robots.txt` ve dinamik sayfa başlıkları

## Teknolojiler

| Katman | Teknoloji |
| --- | --- |
| Framework | Next.js 14.2 (App Router) |
| UI | React 18, Tailwind CSS 3.4, lucide-react |
| Veritabanı | Prisma 5 + SQLite |
| Kimlik doğrulama | bcryptjs + veritabanı destekli httpOnly session cookie |
| Dil | TypeScript |

## Kurulum

```bash
npm install
npm run db:push
npm run db:seed
npm run dev
```

Uygulama: http://localhost:3000

`.env` dosyası hazır gelir:

```env
DATABASE_URL="file:./dev.db"
SESSION_SECRET="..."
```

Üretimde `SESSION_SECRET` değerini mutlaka değiştirin.

## Demo Hesaplar

| Rol | E-posta | Şifre |
| --- | --- | --- |
| Yönetici | `admin@perde.tv` | `Admin123!` |
| İzleyici | `demo@perde.tv` | `Demo123!` |

Giriş ekranındaki “Yönetici hesabı” ve “İzleyici hesabı” düğmeleri bilgileri otomatik doldurur.

## Yönetim Paneli

Giriş yaptıktan sonra: http://localhost:3000/admin

- **Genel Bakış** — içerik, kullanıcı, izlenme ve kategori istatistikleri
- **İçerikler** — ekleme, düzenleme, silme, afiş/backdrop yükleme, öne çıkarma
- **İçerik detayı** — film kaynakları; diziler için sezon, bölüm ve bölüm kaynakları
- **Kategoriler** — tür ekleme / silme ve tür türü seçimi
- **Kullanıcılar** — rol değiştirme ve kullanıcı silme

## Komutlar

| Komut | Açıklama |
| --- | --- |
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Prisma client üretimi + production build |
| `npm start` | Production sunucusu |
| `npm run db:push` | Şemayı veritabanına uygular |
| `npm run db:seed` | Demo verilerini yükler (mevcut veriyi sıfırlar) |
| `npm run db:reset` | Veritabanını tamamen sıfırlar ve yeniden seed eder |

## Klasör Yapısı

```text
prisma/              Şema ve seed verileri
public/media/        Yerel afiş ve backdrop görselleri
src/app/             Sayfalar ve API route'ları
src/components/      Site, içerik, oynatıcı ve yönetim bileşenleri
src/lib/             Auth, veri erişimi, Prisma ve yardımcılar
```

## İçerik ve Lisans Notu

Bu proje bir demo yayın platformudur. Seed verisindeki video kaynakları kullanıcı tarafından sağlanan demo bağlantılarıdır ve bazıları harici sağlayıcılar tarafından sunulur. Gerçek yayında yalnızca hak sahiplerinden alınmış lisanslı video kaynakları kullanılmalıdır. Fragmanlar YouTube üzerinden gömülüdür; gömme kapalıysa modal içindeki “Harici olarak aç” bağlantısı kullanılabilir.

## Üretim Notları

- SQLite yerine PostgreSQL/MySQL kullanmanız önerilir (`prisma/schema.prisma` içindeki provider ve `DATABASE_URL`).
- `SESSION_SECRET` ve demo hesapların şifrelerini değiştirin.
- Yüklenen görselleri kalıcı bir nesne depolamaya taşıyın.
- Bağımlılıkları düzenli olarak güncelleyin (`npm audit`).
- Yalnızca lisanslı video kaynakları ekleyin.
