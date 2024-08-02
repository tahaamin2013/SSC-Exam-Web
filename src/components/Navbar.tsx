"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 flex justify-between items-center text-white transition-all duration-200 shadow-xl px-5 lg:px-16  py-4 w-full">
                <Link href="/" className="text-xl font-bold">
                    SSC Study Hub
                </Link>
                <div className=" flex justify-end">
                    <div className="md:flex hidden text-white font-bold gap-5 text-lg">
                        <Link href="/" id="Our Services">Home</Link>
                        <Link href="/" id="#MemberShips">Units</Link>
                        <Link href="/" id="unit-1/content">Lists of units</Link>
                    </div>
                    <div className="md:hidden block z-50">
                        <Sheet>
                            <SheetTrigger
                                className="text-white -my-4 mt-1 text-2xl"
                                aria-label="Open menu"
                            >
                                <AlignJustify fill="white" size={27} />
                            </SheetTrigger>
                            <SheetContent className="flex-col flex gap-3 text-left items-start font-bold">
                                <SheetClose>
                                    <Link href="/" id="Our Services">Home</Link>
                                </SheetClose>
                                <SheetClose>
                                    <Link href="/" id="#MemberShips">Units</Link>
                                </SheetClose>
                                <SheetClose>
                                    <Link href="/" id="unit-1/content">Lists of units</Link>
                                </SheetClose>
                           
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;