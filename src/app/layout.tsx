import type { Metadata } from "next";

import "./globals.scss";

import { roboto } from "@/helpers/fonts";

export const metadata: Metadata = {
  title: "Quien no me sigue en Instagram",
  description:
    "Con esta aplicación podemos tomar una cuenta pública de Instagram de no más de 1000 seguidores y podemos mostrar la lista de seguidos, seguidores y las cuentas que sigue el dueño de la cuenta y no lo siguen a él",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
