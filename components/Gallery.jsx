"use client";

import { useState } from "react";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const imagesPerPage = 12;

    // Generate array of image paths (1-45)
    const allImages = Array.from({ length: 45 }, (_, i) => ({
        id: i + 1,
        src: `/gallery/${i + 1}.jpeg`,
        alt: `Gallery image ${i + 1}`
    }));

    const totalPages = Math.ceil(allImages.length / imagesPerPage);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = allImages.slice(0, endIndex); // Show all images up to current page
    const hasMore = currentPage < totalPages;

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const currentIndex = currentImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % currentImages.length;
        setSelectedImage(currentImages[nextIndex]);
    };

    const prevImage = () => {
        const currentIndex = currentImages.findIndex(img => img.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        setSelectedImage(currentImages[prevIndex]);
    };

    const loadMore = () => {
        if (hasMore) {
            setCurrentPage(prev => prev + 1);
        }
    };

    return (
        <section className="section bg-soft relative pt-24">
            <div className="container-default">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-10 mt-6">
                    <h1 className="h1 text-primary mb-6 font-heading">
                        <span className="gradient-text">Gallery</span>
                    </h1>
                    <div className="divider mx-auto mb-6"></div>

                    <p className="p-large leading-relaxed text-body">
                        Explore our visual journey through{" "}
                        <span className="text-primary font-semibold">creative projects</span>,{" "}
                        <span className="text-plum font-semibold">memorable events</span>, and{" "}
                        <span className="text-highlight font-semibold">behind-the-scenes moments</span>{" "}
                        that showcase our passion for storytelling.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                    {currentImages.map((image) => (
                        <div
                            key={image.id}
                            className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer hover-lift"
                            onClick={() => openModal(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                    {/* Load More Button */}
                    {hasMore && (
                        <div className="text-center mb-10">
                            <button
                                onClick={loadMore}
                                className="button-primary text-lg px-8 py-3 group button-smooth"
                            >
                                Load More Images
                                <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </button>
                            <p className="text-muted mt-3">
                                Showing {currentImages.length} of {allImages.length} images
                            </p>
                        </div>
                    )}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl max-h-full">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-300 z-10"
                        >
                            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-300"
                        >
                            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-300"
                        >
                            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Image */}
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                        />

                        {/* Image Counter */}
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm">
                            {currentImages.findIndex(img => img.id === selectedImage.id) + 1} of {currentImages.length}
                        </div>
                    </div>
                </div>
            )}

            {/* Keyboard Navigation */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-40"
                    onKeyDown={(e) => {
                        if (e.key === "Escape") closeModal();
                        if (e.key === "ArrowLeft") prevImage();
                        if (e.key === "ArrowRight") nextImage();
                    }}
                    tabIndex={-1}
                />
            )}
        </section>
    );
}
