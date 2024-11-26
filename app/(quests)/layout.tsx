export default function QuestsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-foreground">
            <div className="max-w-7xl py-20 mx-auto min-h-dvh flex flex-col">
                <div className="flex-1 flex flex-col items-center justify-center p-6 border rounded-md shadow-md bg-background">
                    {children}
                </div>
            </div>
        </div>
    );
}
