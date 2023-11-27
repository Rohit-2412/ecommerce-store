import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Size[]> => {
    const res = await fetch(URL);

    return res.json();
};

export default getColors;
