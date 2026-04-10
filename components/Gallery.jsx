"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const galleryRef = useRef(null);

    const imagesPerPage = 12;

    // Generate array of image paths (1-45)
    const allImages = Array.from({ length: 45 }, (_, i) => ({
        id: i + 1,
        src: `/gallery/${i + 1}.jpeg`,
        alt: `Gallery image ${i + 1}`
    }));

    // Calculate pagination values
    const totalPages = Math.ceil(allImages.length / imagesPerPage);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = allImages.slice(startIndex, endIndex);

    // Hydration fix: Only render interactive parts once mounted
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Scroll to top of gallery on page change
    useEffect(() => {
        if (galleryRef.current && currentPage !== 1 && isMounted) {
            const yOffset = -100; // Offset for sticky header
            const element = galleryRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, [currentPage, isMounted]);

    const openModal = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
        const currentIndex = allImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % allImages.length;
        setSelectedImage(allImages[nextIndex]);
    };

    const prevImage = () => {
        const currentIndex = allImages.findIndex(img => img.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
        setSelectedImage(allImages[prevIndex]);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage) return;
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage]);

    return (
        <section ref={galleryRef} className="section bg-soft relative pt-24 min-h-screen">
            <div className="container-default">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 mt-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
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
                    </motion.div>
                </div>

                {/* Gallery Grid */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={currentPage}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16 min-h-[600px]"
                    >
                        {currentImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.03 }}
                                className="group relative aspect-square overflow-hidden rounded-3xl cursor-pointer hover-lift shadow-subtle border border-gray-100"
                                onClick={() => openModal(image)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    priority={index < 4}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-all duration-300">
                                        <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination */}
                {isMounted && (
                    <div className="flex flex-col items-center gap-6 mb-16">
                        <div className="flex items-center gap-2">
                            {/* Previous Button */}
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white border border-gray-200 shadow-sm text-primary hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-primary disabled:hover:border-gray-200 disabled:cursor-not-allowed transition-all duration-300 group"
                                aria-label="Previous page"
                            >
                                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Page Numbers */}
                            <div className="flex items-center gap-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-500 shadow-sm ${
                                            currentPage === page
                                                ? "bg-primary text-white border border-primary shadow-glow-primary scale-110"
                                                : "bg-white text-muted border border-gray-200 hover:border-primary hover:text-primary"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white border border-gray-200 shadow-sm text-primary hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-primary disabled:hover:border-gray-200 disabled:cursor-not-allowed transition-all duration-300 group"
                                aria-label="Next page"
                            >
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                            Page {currentPage} of {totalPages} • {allImages.length} Images
                        </p>
                    </div>
                )}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4"
                    >
                        <div className="relative w-full max-w-6xl h-[85vh] flex items-center justify-center">
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute -top-14 right-0 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 z-10 flex items-center justify-center border border-white/20"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Navigation Buttons */}
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute -left-2 lg:left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 z-10 flex items-center justify-center border border-white/20 hidden sm:flex"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute -right-2 lg:right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 z-10 flex items-center justify-center border border-white/20 hidden sm:flex"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Image Container */}
                            <motion.div
                                key={selectedImage.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="relative w-full h-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    fill
                                    className="object-contain"
                                    priority
                                    sizes="90vw"
                                />
                            </motion.div>

                            {/* Image Counter */}
                            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 px-8 py-3 rounded-2xl bg-white/10 backdrop-blur-md text-white text-sm font-bold border border-white/20 tracking-tighter">
                                {allImages.findIndex(img => img.id === selectedImage.id) + 1} <span className="opacity-40">/</span> {allImages.length}
                            </div>
                        </div>

                        {/* Overlay backdrop click to close */}
                        <div className="absolute inset-0 -z-10 cursor-zoom-out" onClick={closeModal} />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

