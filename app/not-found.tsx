import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl font-bold text-white/10 mb-4">404</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-lg text-blue-100 mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak ditemukan atau sudah dipindahkan.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="/">
              <Home className="w-5 h-5" />
              Kembali ke Home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-dark"
          >
            <Link href="/kontak">
              <ArrowLeft className="w-5 h-5" />
              Hubungi Kami
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
