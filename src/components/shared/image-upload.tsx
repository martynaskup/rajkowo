"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageUploadProps {
    images: string[]
    setImages: (images: string[]) => void
    maxImages?: number
}

export function ImageUpload({ images, setImages, maxImages = 4 }: ImageUploadProps) {
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = () => {
        setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragging(false)

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFiles(e.dataTransfer.files)
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            handleFiles(e.target.files)
        }
    }

    const handleFiles = (files: FileList) => {
        if (images.length >= maxImages) {
            return
        }

        const newImages: string[] = []

        Array.from(files)
            .slice(0, maxImages - images.length)
            .forEach((file) => {
                if (file.type.startsWith("image/")) {
                    const reader = new FileReader()
                    reader.onload = (e) => {
                        if (e.target?.result) {
                            newImages.push(e.target.result as string)
                            if (newImages.length === Math.min(files.length, maxImages - images.length)) {
                                setImages([...images, ...newImages])
                            }
                        }
                    }
                    reader.readAsDataURL(file)
                }
            })
    }

    const removeImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index))
    }

    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    return (
        <div className="space-y-4">
            {images.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="relative aspect-square rounded-md overflow-hidden border">
                            <Image
                                src={image || "/placeholder.svg"}
                                alt={`Uploaded image ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                            <Button
                                variant="destructive"
                                size="icon"
                                className="absolute top-2 right-2 h-6 w-6 rounded-full"
                                onClick={() => removeImage(index)}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                            {index === 0 && (
                                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs py-1 px-2 text-center">
                                    Main Photo
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {images.length < maxImages && (
                <div
                    className={cn(
                        "border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors",
                        isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50",
                    )}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={openFileDialog}
                >
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        multiple
                        className="hidden"
                    />

                    <div className="flex flex-col items-center gap-2 text-center">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Upload className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-medium">{images.length === 0 ? "Upload dog photos" : "Add more photos"}</p>
                            <p className="text-sm text-muted-foreground">Drag & drop or click to upload</p>
                            <p className="text-xs text-muted-foreground">{`${images.length}/${maxImages} photos uploaded`}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
