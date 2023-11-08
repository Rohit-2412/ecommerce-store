interface ContainerProps {
    children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
    return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
