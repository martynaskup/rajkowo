import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Phone, PawPrintIcon as Paw } from "lucide-react"
import Image from "next/image"

export default function DogProfile() {
    return (
        <div className="container mx-auto py-8 px-4">
            <Card className="max-w-3xl mx-auto">
                <CardHeader className="border-b pb-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-16 w-16">
                                <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Dog avatar" />
                                <AvatarFallback>
                                    <Paw className="h-8 w-8" />
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-3xl">Kaye</CardTitle>
                                <CardDescription className="text-lg">Toy Poodle</CardDescription>
                            </div>
                        </div>
                        <Badge variant="outline" className="px-3 py-1 text-sm">
                            ID: 281258
                        </Badge>
                    </div>
                </CardHeader>

                <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Dog Information</h3>
                                <div className="grid grid-cols-2 gap-y-3">
                                    <div className="text-muted-foreground">Breed:</div>
                                    <div>Toy Poodle</div>

                                    <div className="text-muted-foreground">Gender:</div>
                                    <div>Female</div>

                                    <div className="text-muted-foreground">Date:</div>
                                    <div>2022.09</div>

                                    <div className="text-muted-foreground">Chip Nr:</div>
                                    <div>281258</div>

                                    <div className="text-muted-foreground">Color:</div>
                                    <div>Fawn</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Character</h3>
                                <p>Might be scared, but open to strangers, might escape</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Owner Information</h3>
                                <div className="grid grid-cols-2 gap-y-3">
                                    <div className="text-muted-foreground">Name:</div>
                                    <div>Dephan</div>

                                    <div className="text-muted-foreground">Phone:</div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4" />
                                        <span>+49 782 ****</span>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full flex items-center gap-2" size="lg">
                                <Bell className="h-5 w-5" />
                                <span>Notify Owner</span>
                            </Button>
                            <p className="text-xs text-muted-foreground text-center">
                                Clicking will send an email and SMS to the dog owner
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="aspect-square rounded-lg overflow-hidden border">
                                <Image
                                    src="/profile/p1.webp"
                                    alt="Dog photo"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                <div className="aspect-square rounded-md overflow-hidden border">
                                    <Image
                                        src="/profile/p2.webp"
                                        alt="Additional photo 1"
                                        width={120}
                                        height={120}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="aspect-square rounded-md overflow-hidden border">
                                    <Image
                                        src="/profile/p3.webp"
                                        alt="Additional photo 2"
                                        width={120}
                                        height={120}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="aspect-square rounded-md overflow-hidden border">
                                    <Image
                                        src="/profile/p4.webp"
                                        alt="Additional photo 3"
                                        width={120}
                                        height={120}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="border-t mt-6 pt-6 flex flex-col items-start gap-2">
                    <h3 className="text-lg font-semibold">Additional Information</h3>
                    <p className="text-sm text-muted-foreground">
                        This profile contains important information about Kaye. If you find this dog, please use the notify button
                        above to contact the owner.
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
