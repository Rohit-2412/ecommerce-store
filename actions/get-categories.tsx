const Url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async () => {
    const res = await fetch(Url);
    const data = await res.json();
    return data;
};

export default getCategories;
