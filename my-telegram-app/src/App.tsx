// app/layout.tsx
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";

export default function App({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AuthContextProvider>{children}</AuthContextProvider>
            </body>
        </html>
    );
}
