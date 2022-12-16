import NavigationBar from '../components/NavigationBar';

export default function AuthenticatedLayout({ children }) {
    return (
        <>
            <NavigationBar />
            <main>{children}</main>
        </>
    );
}
