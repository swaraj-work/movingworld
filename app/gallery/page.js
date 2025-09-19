import Gallery from "../../components/Gallery";

export const metadata = {
  title: "Gallery - Moving World",
  description: "Explore our visual journey through creative projects, events, and behind-the-scenes moments at Moving World.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Gallery />
    </main>
  );
}
