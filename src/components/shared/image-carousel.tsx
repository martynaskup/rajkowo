"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ImageCarouselProps {
    images: {
        src: string
        alt: string
    }[]
    initialIndex?: number
}

export function ImageCarousel({ images, initialIndex = 0 }: ImageCarouselProps) {
    const [open, setOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(initialIndex)

    const handleImageClick = (index: number) => {
        setCurrentIndex(index)
        setOpen(true)
    }

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            handlePrevious()
        } else if (e.key === "ArrowRight") {
            handleNext()
        }
    }

    return (
        <>
            <div className="space-y-6">
                {/* Main image */}
                <div
                    className="aspect-square rounded-lg overflow-hidden border cursor-pointer transition-opacity hover:opacity-90"
                    onClick={() => handleImageClick(0)}
                >
                    <Image
                        src={images[0].src || "/placeholder.svg"}
                        alt={images[0].alt}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Thumbnail grid */}
                <div className="grid grid-cols-3 gap-2">
                    {images.slice(1).map((image, index) => (
                        <div
                            key={index + 1}
                            className="aspect-square rounded-md overflow-hidden border cursor-pointer transition-opacity hover:opacity-90"
                            onClick={() => handleImageClick(index + 1)}
                        >
                            <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                width={120}
                                height={120}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal with carousel */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-4xl p-0 bg-black/95 border-none" onKeyDown={handleKeyDown}>
                    <div className="relative h-[80vh] flex items-center justify-center">
                        <DialogClose className="absolute right-4 top-4 z-10">
                            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
                                <X className="h-6 w-6" />
                            </Button>
                        </DialogClose>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 z-10 text-white hover:bg-white/20 rounded-full"
                            onClick={handlePrevious}
                        >
                            <ChevronLeft className="h-8 w-8" />
                        </Button>

                        <div className="h-full w-full flex items-center justify-center p-8">
                            <Image
                                src={images[currentIndex].src || "/placeholder.svg"}
                                alt={images[currentIndex].alt}
                                width={1200}
                                height={1200}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 z-10 text-white hover:bg-white/20 rounded-full"
                            onClick={handleNext}
                        >
                            <ChevronRight className="h-8 w-8" />
                        </Button>

                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                            {images.map((_, index) => (
                                <Button
                                    key={index}
                                    variant="ghost"
                                    size="sm"
                                    className={`w-2 h-2 p-0 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
