

export default function PropertyLayout({children}: {children: React.ReactNode}){
    return (
        <div className="property-layout">
        <header className="property-header">
            <h1 className="text-center text-2xl font-bold">Property Listings</h1>
        </header>
        <main className="property-content">
            {children}
        </main>
        </div>
    );
}