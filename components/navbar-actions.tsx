"use client";

import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="flex items-center gap-x-4 ml-auto">
            <Button className="flex items-center bg-black px-4 py-2">
                <ShoppingBag size={20} color="white" />{" "}
                <span className="ml-2 font-medium text-sm text-white">0</span>
            </Button>
        </div>
    );
};

export default NavbarActions;