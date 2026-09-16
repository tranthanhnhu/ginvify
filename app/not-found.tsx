import Link from "next/link";
import { GinvifyCat } from "@/components/mascot/GinvifyCat";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center gap-8 px-6 text-center">
      <GinvifyCat variant="idle" />
      <div>
        <p className="type-label text-fg-muted">404</p>
        <h1 className="type-h2 mt-4 text-fg">This path isn&apos;t on the map.</h1>
        <p className="mt-4 max-w-md text-fg-muted">
          The page you&apos;re looking for doesn&apos;t exist — or moved quietly.
        </p>
      </div>
      <Button href="/" variant="primary">
        Back home
      </Button>
      <Link href="/" className="type-label text-fg-muted hover:text-fg">
        GINVIFY
      </Link>
    </div>
  );
}
