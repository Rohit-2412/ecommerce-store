import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import getBillboard from "@/actions/get-billboard";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard(
        "f6908c1e-10d6-434c-a83b-23aae7821e06"
    );
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>
        </Container>
    );
};

export default HomePage;
