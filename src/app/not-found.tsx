
import Link from "next/link";
import Button from "@/components/ui/Button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAFAFA]">
      <Navbar />

      <main
        className="grid-bg bg-blue relative w-full flex-1 flex flex-col justify-center items-center text-center pt-32 pb-20 px-4 sm:px-6"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "82px 82px, 82px 82px",
          backgroundPosition: "center, center",
          backgroundRepeat: "repeat, repeat",
        }}
      >
        <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center">
          <h1 className="text-[120px] sm:text-[180px] md:text-[240px] font-semibold tracking-[-0.05em] sm:tracking-[-0.06em] leading-[0.85] bg-gradient-to-b from-[#CBFC01] to-[#CBFC01]/40 bg-clip-text text-transparent select-none">
            404
          </h1>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[44px] md:leading-[1.2] -mt-7">
            The page you are looking <br /> for doesn&apos;t exist
          </h2>

          <p className="mt-5 max-w-[480px] text-xs leading-[1.6] text-white/75 sm:text-sm px-4">
            Try to use a correct url or go back to homepage to start again
          </p>

          <div className="mt-10">
            <Link href="/">
              <Button variant="primary">Back to Home</Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
